<template>
  <div class="list">
    <table width="100%">
      <tr class="kembali">
        <td><router-link to="/">
        <button>Kembali</button>
        </router-link></td>
      </tr>
      <tr class="judulTodo">
        <td><h1>{{ toDoList[indexNumber] }}</h1></td>
      </tr>
      <tr class="deskripsi">
        <td>
          <p v-if="deskripsi[indexNumber] === ''">Belum ada Deskripsi</p>
          <p v-else>{{ deskripsi[indexNumber] }}</p>
        </td>
      </tr>
      <tr>
        <td v-if="modeEdit">
          <input type="text" v-model="newDeskripsi">
          <button @click="updateDeskripsi(newDeskripsi)">Simpan</button>
        </td>
        <td v-else>
          <button @click="getIndex(indexNumber, newDeskripsi)">Ubah Deskripsi</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
    name: 'DeskripsiList',
    data() {
        return {
            newDeskripsi: "",
            modeEdit: false
        }
    },
    computed: {
        toDoList(){
            return this.$store.state.toDoList
        },
        indexNumber(){
            return this.$route.params.id.slice(2, 3)
        },
        deskripsi(){
            return this.$store.state.deskripsi
        }
    },
    methods: {
        getIndex(index, deskripsi){
            this.modeEdit = true
            this.newDeskripsi = deskripsi
            this.$store.dispatch('getIndex', index)
        },
        updateDeskripsi(index, deskripsi){
            this.$store.dispatch('updateDeskripsi', index, deskripsi)
            this.newDeskripsi= ""
            this.modeEdit = false
        }
    }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
  .list {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    width: 80%;
    margin: 0 auto;
    background-color: #cbeef9;
    padding: 30px;
  }
  table button {
    padding: 10px 20px;
    color: #fff;
    background-color: #3a7bd5;
    border: solid #3a7bd5;
    border-radius: 8px;
  }
  .judulTodo h1 {
    margin-top: 40px;
  }
  .deskripsi p {
    margin: 20px 0;
  }
  table input {
    width: 20%;
    padding: 10px;
    border: solid #3a7bd5;
    border-radius: 8px;
    margin-right: 10px;
  }

</style>