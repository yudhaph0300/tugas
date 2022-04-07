<template>
  <div class="detail">
    <v-card class="mx-auto my-10" max-width="80%">
      <v-img
        height="500"
        :src="news[index].urlToImage"

      >
      </v-img>
      <v-card-title>{{ news[index].title }}</v-card-title>

      <v-card-text>
        <div class="mb-6 text-subtitle-1">
          {{ news[index].content }}
        </div>

        <div class="my-1 text-subtitle-2"
        v-if="news[index].author === null">
          Author  : Anonymous
        </div>
        
        <div class="my-1 text-subtitle-2"
        v-else>
          Author  : {{ news[index].author }}
        </div>

        <div>{{ news[index].publishedAt }}</div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-actions>
        <v-btn
          class="px-5"
          color="#332e3f"
          dark large
          :to="'/'"
        >
          Back
        </v-btn>

        <v-btn
          class="px-5"
          color="primary"
          dark large
          :href="news[index].url"
        >
          Go to article
        </v-btn>
      </v-card-actions>
    </v-card>
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
