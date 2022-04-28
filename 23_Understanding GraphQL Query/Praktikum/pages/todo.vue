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
                </tr>
            </thead>
            <tbody>
               
                <tr
                v-for="item in todo"
                :key="item.id"
                >
                <td>{{ item.id }}</td>
                <td>{{ item.tittle }}</td>
                <td>{{ item.isDone ? 'Sudah' : 'Belom' }}</td>
                </tr>
                
            </tbody>
            </template>
        </v-simple-table>
    </div>
  
</template>

<script>
import gql from 'graphql-tag'
export default {
    name: 'TodoPage',
    data() {
        return {
            search: ''
        }
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