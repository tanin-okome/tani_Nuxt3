<template>
     <!-- ユーザー一覧の入力フォーム -->    
      <h2>ユーザー一覧</h2>
     <div v-for="user in responseData" :key="user.name" class="userindex">
      <div class="user_name"> {{ user.name }} | {{ user.email }}</div>
      <Button label="削除" icon="pi pi-check" />

    </div> 
  </template>
  
  <script setup lang="ts">
  // import UserList from "../data/userdata"
  import { ref, onMounted } from 'vue';
  import type { UserType } from './Usertype';
  import Button from 'primevue/button';


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