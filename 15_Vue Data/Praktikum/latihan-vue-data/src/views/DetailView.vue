<template>
  <div class="detail">
    <img :src="news[index].urlToImage" alt="" width="100%">
    <div class="newsDetail">
      <h3>{{ news[index].title }}</h3>
      <div class="author">
        <p>{{ news[index].author }}</p>
      </div>
      <div class="publishTime">
        <p>{{ news[index].publishedAt }}</p>
      </div>
      <div class="deskripsi">
        <p>{{ news[index].description }}</p>
      </div>
      
      <p class="link">Lanjutkan baca ke <a :href="news[index].url">Sini</a></p>
      <button><router-link to="/">Kembali</router-link></button>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'DetailView',
  computed: {
    index() {
      return this.$route.params.id.slice(2)
    }, 
    news() {
      return this.$store.state.newsList
    }
  },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: rgb(28, 27, 32);
}
.newsDetail {
  width: 95%;
  margin: 20px auto;
}
h3 {
  font-size: 30px;
  text-align: center;
  margin-bottom: 10px;
}

.author {
  display: inline-block;
  font-size: 14px;
}

.publishTime {
  font-size: 14px;
  float: right;
}
.deskripsi {
  font-size: 18px;
  margin: 10px 0;
}
.link {
  font-size: 14px;
  margin-bottom: 10px;
}
.link a {
  color: rgb(68, 68, 196);
}

button {
  padding: 10px 20px;
}
a {
  text-decoration: none;
}
</style>
