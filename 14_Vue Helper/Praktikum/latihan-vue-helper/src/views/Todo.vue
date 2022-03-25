<template>
  <div id="app">
    <div class="content">

      <h1>Todo List</h1>

      <table width="100%">
        <tr v-for="(todo, index) in todos" :key="todo.id">
          <td class="todoItem">
              <router-link to="/detail">{{ index + 1 }} {{ todo }}</router-link>
            
          </td>
          <td>
            <button class="delete" v-on:click="deleteTodo(index)">Hapus</button>
            <button class="edit" v-on:click="editTodo(index, todo)">Edit</button>
          </td>
        </tr>
      </table>

      <p v-if="todos.length == 0">List kegiatan anda masih kosong!</p>

      <div class="inputTodo" v-if="isEditing == true">
        <input type="text" v-model="todo" v-on:keyup.enter="updateTodo">
        <button v-on:click="updateTodo">Update</button>
      </div>
      <div class="inputTodo" v-else>
        <input type="text" v-model="todo" v-on:keyup.enter="addTodo(todo)">
        <button v-on:click="addTodo(todo)">Tambahkan</button>
      </div>

      <h3 v-if="todos.length >= 4">Hebat!</h3>

    </div>
  </div>


    
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      todo : "",
      todos : [],
      isEditing : false,
      selectedIndex : null
    }
  },
  methods : {
    addTodo(todo) {
      if (todo == "") {
        alert("Data yang dimasukan tidak boleh kosong")
      } else {
        this.todos.push(this.todo)
        this.todo =""
      }
    },
    deleteTodo(index){
      this.todos.splice(index, 1)
    },
    editTodo(index, todo) {
      this.isEditing = true
      this.todo = todo
      this.selectedIndex = index
    },
    updateTodo() {
      this.todos.splice(this.selectedIndex, 1, this.todo)
      this.todo = ''
      this.isEditing = false
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: left;
}
.content {
  width: 80%;
  margin: 0 auto;
}
.inputTodo {
  margin-top: 20px;
}
input {
  width: 77%;
  padding: 10px;
  border: solid #3e81c4;
  border-radius: 8px;
}
.inputTodo button {
  margin-left: 1%;
  width: 19.2%;
  padding: 10px 0;
  color: #fff;
  background-color: #3e81c4;
  border: solid #3e81c4;
  border-radius: 8px;
}
.content ol li {
  background-color: #fff;
}
table .todoItem {
  width: 79.5%;
  padding: 10px;
  border: solid #add0f0;
  background-color: #add0f0;
  border-radius: 8px;
}
table button {
  margin-left: 3.5%;
  padding: 12px 32px;
  color: #fff;
  border-radius: 8px;
}
table .delete {
  background-color: #cc4238;
  border: solid #cc4238;
}
table .edit {
  background-color: #27a566;
  border: solid #27a566;
}
</style>