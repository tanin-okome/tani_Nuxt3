<template>
  <div> 
     <!-- 入力フォーム -->
     <h1>入力フォーム</h1>
    <FormComponent/>

    <!-- ユーザー一覧の入力フォーム -->    
    <UsersView />
    <datatest />
  </div>
</template>

<script setup lang="ts">
import FormComponent from "./components/forms.vue";
import UsersView from "./components/UserView.vue";
import datatest from "./components/test.vue";

</script>