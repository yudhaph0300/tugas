<template>
    <div class="container">
        <h1>Todo</h1>
        <div v-if="$apollo.loading">Loading Todo ...</div>
        <v-text-field label="Cari berdasarkan id" v-model="search"/>
        <v-simple-table>
            <template v-slot:default>
            <thead>
                <tr>
                <th class="text-left">
                    Id
                </th>
                <th class="text-left">
                    Title
                </th>
                <th class="text-left">
                    Boolean
                </th>
                <th class="text-left">
                    Action
                </th>
                </tr>
            </thead>
            <tbody>
               
                <tr
                v-for="item in todo"
                :key="item.id"
                >
                <td>{{ item.id }}</td>
                <td>{{ item.tittle }}</td>
                <td>{{ item.isDone ? 'Sudah' : 'Belum' }}</td>
                <td>
                    <v-btn @click="deleteTodo(item.id)" color="red darken-4">Delete</v-btn>
                    <v-btn @click="toEdit(item.id)" color="green darken-4">Edit</v-btn>
                </td>
                </tr>
                
            </tbody>
            </template>
        </v-simple-table>

        <div v-if="editMode == true" class="mt-10">
            <h2>Edit Todo</h2>
            <v-text-field label="Judul Baru" v-model="editTittle"/>
            <v-radio-group v-model="editStatus" row>
              <v-radio label="Sudah" :value="true"></v-radio>
              <v-radio label="Belum" :value="false"></v-radio>
            </v-radio-group>
            <v-btn block color="primary" @click="updateTodo()">Update Todo</v-btn>
        </div>

        <div class="mt-10">
            <h2>Tambahkan Todo</h2>
            <v-text-field label="Judul Todo" v-model="inputTodo"/>
            <v-btn block color="primary" @click="addTodo(inputTodo)">Tambahkan</v-btn>
        </div>
    </div>
  
</template>

<script>
import gql from 'graphql-tag'
export default {
    name: 'TodoPage',
    data() {
        return {
            search: '',
            inputTodo: '',
            editMode: false,
            indexId: '',
            editTittle: '',
            editStatus: false
        }
    },
    methods: {
        addTodo() {
            this.$apollo.mutate({
                mutation: gql`
                    mutation addTodo($tittle: String) {
                        insert_todo(objects: {tittle: $tittle}) {
                            returning {
                                id
                                isDone
                                tittle
                            }
                        }
                    }
                `,
                variables: {
                    tittle: this.inputTodo
                }
            })
            this.inputTodo = ''
        },
        deleteTodo(inputId){
            this.$apollo.mutate({
                mutation: gql`
                    mutation deleteTodo($id: Int!) {
                        delete_todo(where: {id: {_eq: $id}}) {
                            returning {
                                id
                                isDone
                                tittle
                            }
                        }
                    }
                `,
                variables: {
                id: inputId
                }
            })
        },
        toEdit(id){
            this.editMode = true
            this.indexId = id
        },
        updateTodo(){
            this.$apollo.mutate({
                mutation: gql`
                    mutation MyMutation($_eq: Int!, $isDone: Boolean, $tittle: String) {
                        update_todo(where: {id: {_eq: $_eq}}, _set: {isDone: $isDone, tittle: $tittle}) {
                            returning {
                                id
                                isDone
                                tittle
                            }
                        }
                    }
                `,
                variables: {
                _eq: this.indexId,
                tittle: this.editTittle,
                isDone: this.editStatus
                }
            })
            this.editMode = false
        },

    },
    apollo: {
        todo: {
            query() {
                
                if (this.search === '0' || this.search === '') {
                    return gql`query tampilData {
                        todo {
                            id
                            isDone
                            tittle
                        }
                    }
                    `                                
                } else {
                    return gql`
                        query tampilData($id: Int ) {
                            todo(where: {id: {_eq: $id}}) {
                                id
                                isDone
                                tittle
                            }
                        }
                    `
                }
            },
            variables() {
                if (this.search === '0' || this.search === '') {
                    return{}
                } else {
                    return {
                        id: this.search
                    }
                }
            },
             update(data){
                return data.todo;
            }
        }
    }
}
</script>

<style>

</style>