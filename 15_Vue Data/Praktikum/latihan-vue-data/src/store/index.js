import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'


Vue.use(Vuex)

const persistedstate = createPersistedState({
  paths: ["newsList"]
})

export default new Vuex.Store({
  plugins: [persistedstate],
  state: {
    newsList: []
  },
  mutations: {
    setNewsList(state, payload) {
      state.newsList = payload
    }
  },
  actions: {
    fetchNews(store) {
      axios.get("https://newsapi.org/v2/everything?q=putin&apiKey=f310f9860bd548daaf467f3d7ba56f51").then((response) => {
        store.commit("setNewsList", response.data.articles)
      })
    }
  }
})