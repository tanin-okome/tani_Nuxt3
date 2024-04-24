

<template>
  <div class="container-lg">
 <header class="l_header py-3">
  <h1 class="l_header-title mb-0 fs-1 fw-bold text-white text-center">To-Do App</h1>
  </header>

  <!-- <div>
    <input v-model="taskName"><button @click="addTask()">追加</button>

    <div v-for="taskName in taskNameList" :key="taskName">
      {{ taskName }}<button @click="completeTask(taskName)">完了</button>
    </div>
  </div> -->

 
 <div class="input-group input-group-lg  mt-2">

  <span class="input-group-text" id="inputGroup-sizing-lg">タスク名</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" v-model="taskName">

  <button type="button" class="btn btn btn-outline-primary" @click="addTask"  >
          <i class="bi bi-x-lg">追加</i>
        </button>

</div>


<div class="Task-Wrapper mt-5">
    <h2 class=" text-center fs-2">タスク一覧</h2>



  <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">タスク名</th>
      <th scope="col">ステータス</th>
    </tr>
  </thead>
  <tbody cla>
    <tr  v-for="taskName in taskNameList" :key="taskName">
      <th scope="row"> {{ taskName }}</th>
      <td>
        <button type="button" class="btn btn-outline-danger me-4" @click="deleteTask(taskName)" >
          <i class="bi bi-x-lg">削除</i>
        </button>
        <button type="button" class="btn btn-outline-dark" @click="deleteTask(taskName)" >
          <i class="bi bi-x-lg">完了</i>
        </button>
      </td>
    </tr>
  
  </tbody>
</table>
</div>
</div>
</template>

    <!-- css -->
    <style src="../src/css/reset.css"></style>
    <style src="../src\css\style.css"></style>

   <!-- Script -->
   <script setup lang="ts">
const taskNameList = ref<string[]>(['Vue3', 'Nuxt3']);
const taskName = ref<string>('');
const addTask = () => {
  console.log("addTask called");

  if (taskName.value === '') {
    return;
  }
  taskNameList.value.push(taskName.value);
  taskName.value = '';
}



  const deleteTask = (deleteTaskName: string) => {
    console.log("deleteTask called");

    taskNameList.value = taskNameList.value.filter((taskName: string) => {
    return deleteTaskName !== taskName
  });
}


</script>



