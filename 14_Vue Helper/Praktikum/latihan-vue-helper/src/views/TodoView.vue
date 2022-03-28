<template>
  <div class="content">

    <h1>To Do List</h1>

    <!-- Tampilan List -->
    <table width="100%">
      <tr v-for="(list, index) in toDoList" :key="list">
        <td class="todoItem">
          <router-link @click="getIndex(index,list)" :to="'/detail/id' + index">{{ index+1 }} {{ list }}</router-link>
        </td>
        <td>
          <button class="edit" @click="getIndex(index, list)">Edit</button>
          <button class="delete" @click="deleteToDoList(index)">Hapus</button>
        </td>
      </tr>
    </table>

    <p v-if="toDoList.length == 0">List kegiatan anda masih kosong!</p>
    
    <!-- Input dan Button -->
    <div class="inputTodo">
      <input type="text" v-model="message">

      <button v-if="modeEdit" @click="updateIndex(message)">Update</button>
      <button v-else v-on:click="addToDoList(message)" class="buttonUtama">Tambahkan</button>
      
    </div>
    <h3 v-if="toDoList.length >= 4">Hebat!</h3>

  </div>
</template>

<script>

export default {
    computed: {
        toDoList(){
            return this.$store.state.toDoList
        }
    },
    data(){
        return {
            message: "",
            modeEdit: false,
            indexNumber: null
        }
    },
    methods: {
        addToDoList(){
            this.$store.dispatch('addToDoList', this.message)
            this.message = ''
        },
        deleteToDoList(message){
            this.$store.dispatch('deleteToDoList', message)
        },
        getIndex(index, message){
            this.modeEdit = true
            this.message = message
            this.$store.dispatch('getIndex', index)
        },
        updateIndex(index, message){
            this.$store.dispatch('updateIndex', index, message)
            this.message = ''
            this.modeEdit = false
        }
    },
}
</script>
<style scoped>
  * {
    padding: 0;
    margin: 0;
  }
  .content {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    width: 80%;
    margin: 0 auto;
    background-color: #cbeef9;
    padding: 30px;
  }
  .inputTodo {
    margin-top: 20px;
  }
  input {
    width: 77%;
    padding: 10px;
    border: solid #3a7bd5;
    border-radius: 8px;
  }
  .inputTodo button {
    margin-left: 1%;
    width: 19.2%;
    padding: 10px 0;
    color: #fff;
    background-color: #3a7bd5;
    border: solid #3a7bd5;
    border-radius: 8px;
  }
  table {
    margin-top: 40px;
  }
  table .todoItem {
    width: 79.5%;
    padding: 10px;
    border: solid #fff;
    background-color: #fff;
    border-radius: 8px;
  }

  table .todoItem a{
    text-decoration: none; 
    color: #3a7bd5;
    font-weight: 500;
  }
  
  table button {
    margin-left: 3.5%;
    padding: 12px 32px;
    color: #fff;
    border-radius: 8px;
  }
    table .delete {
    background-color: #e05b51;
    border: solid #e05b51;
  }
  table .edit {
    background-color: #3cb87a;
    border: solid #3cb87a;
  }
  h3 {
    margin-top: 20px  ;
  }
</style>