<template>
     <!-- ユーザー一覧の入力フォーム -->    
      <h2>ユーザー一覧</h2>
     <div v-for="user in responseData" :key="user.name" class="userindex">
      <div class="user_name"> {{ user.name }} | {{ user.email }}</div>
      <Button label="編集" severity="info" size="small"click="selectUser(user)"/>
      <Button label="削除" icon="pi pi-check" size="small" @click="handledeleteUser(user)"/>
    </div> 

    <UserEditModal
  :user="selectedUser"
  @update="updateUser"
  @close="closeModal"
/>
  </template>
  
  <script setup lang="ts">
  // import UserList from "../data/userdata"
  import { ref, onMounted } from 'vue';
  import type { UserType } from './Usertype';
  import Button from 'primevue/button';
  import UserEditModal from './UserEditModal';

  const errorMsg = ref<string>('');
  const isSubmitting = ref(false);
  const handledeletedUser = ref<UserType | null>(null);



  const responseData = ref<UserType[] | null > (null);
    onMounted(async () => {
  try {
    const res = await fetch('http://localhost:3001/api/test');
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data: UserType[] = await res.json();
    responseData.value = data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
});

const handledeleteUser =　async (user:UserType) => {
  handledeletedUser.value = user;
  
  try {
  const data:any = await $fetch('http://localhost:3001/api/userDelete', {
    method: 'POST',
    headers :{
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({

      email: user.email,
    }),
  });

  console.log('Response Data:',data);


  //   if (data.status === "success") {
  //     newUser.value = data.user;
  //     useremail.value = '';
  //     useremail.value = '';
      
  //   } else {
  //     console.error('Error:', data.message || 'Unknown error');
  //     errorMsg.value = `Error: ${data.message || 'Unknown error'}`;
  //   }
  } catch (error: any) {
    errorMsg.value = `Error adding user: ${error.message}`;
    console.error('Error adding user:', error);
  } finally {
    isSubmitting.value = false;
  }
};

const selectUser = (user: User) => {
  selectedUser.value = user;
};
  
  
  </script>

  
<style scoped>

.userindex {
display: flex;
align-items: center
}

.user_name {
  margin-right:40px;
}

</style>