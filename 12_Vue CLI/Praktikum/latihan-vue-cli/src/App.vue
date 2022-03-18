<template>
  <div id="app">
    <ol>
      <li v-for="(todo, index) in todos" :key="todo.id">
        {{ todo }}
        <button v-on:click="deleteList(index)">Hapus</button>
      </li>
    </ol>
    
    <p v-if="todos.length == 0">List kegiatan anda masih kosong</p>

    <input type="text" v-on:keyup.enter="addList(todo)" v-model="todo">
    <button v-on:click="addList(todo)">Tambahkan</button>

    <p v-if="todos.length >= 4">Hebat!</p>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      todo : "",
      todos : []
    }
  },
  methods : {
    addList(todo) {
      if (todo == "") {
        alert("Data yang dimasukan tidak boleh kosong")
      } else {
        this.todos.push(this.todo)
        this.todo = ""
      }
      
    },
    deleteList(index) {
      this.todos.splice(index, 1)
    }
  }
}
</script>

<style>

</style>