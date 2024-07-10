<template>
    <div> 
      <!-- 入力フォーム -->
      <div class="inputbox_wrapper">
      <input v-model="username" placeholder="名前" class="inputbox">
      <input v-model="useremail" placeholder="メールアドレス" class="inputbox">
      <button @click="handleAddUser">追加</button>
      <div v-if="newUser">
      <h2>新しいユーザーが追加されました</h2>
      <p>名前: {{ newUser.name }}</p>
      <p>メール: {{ newUser.email }}</p>
    </div>
      </div>
      
      <!-- エラーメッセージ -->
      <div v-if="ShowMsg" class="warnmsg">名前とメールアドレスの両方を入力してください</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { UserType }  from "./Usertype";  // 型をインポート

const username = ref<string>(''); 
const useremail = ref<string>('');
const ShowMsg = ref(false);
const errorMsg = ref<string>('');
const newUser = ref<UserType | null>(null);
const isSubmitting = ref(false);

const handleAddUser =　async () => {
  
  if (username.value.trim() === '' || useremail.value.trim() === '') {
    WaringMsg();
    return;
  }

  isSubmitting.value = true;
  ShowMsg.value = false;

  
  try {
  const data:any = await $fetch('http://localhost:3001/api/userInsert', {
    method: 'POST',
    headers :{
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id:'',
      name: username.value,
      email: useremail.value,
    }),
  });

  console.log('Response Data:',data);


    if (data.status === "success") {
      newUser.value = data.user;
      useremail.value = '';
      useremail.value = '';
      
    } else {
      console.error('Error:', data.message || 'Unknown error');
      errorMsg.value = `Error: ${data.message || 'Unknown error'}`;
    }
  } catch (error: any) {
    errorMsg.value = `Error adding user: ${error.message}`;
    console.error('Error adding user:', error);
  } finally {
    isSubmitting.value = false;
  }
};

const WaringMsg = () => {
  ShowMsg.value = true;
};

</script>


<style scoped>
.inputbox {
    margin-right: 8px;
}
.warnmsg {
    color: red;
}
</style>