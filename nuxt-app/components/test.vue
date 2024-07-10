<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { UserType } from './Usertype';

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

<template>
  <pre>{{ responseData  }}</pre>
</template>