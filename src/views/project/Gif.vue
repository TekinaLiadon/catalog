<template>
  <div class="container">
    <div class="row row justify-content-md-center row-cols-1 row-cols-md-4 g-4">
      <div class="col"
           v-for="gif in data"
           :key="gif.id">
            <div class="card h-100">
              <img :src="gif.images.downsized_medium.url" class="card-img-top" alt="...">
              <div class="card-body">
                <p class="card-text">{{gif.title}}</p>
                <p class="card-text">{{gif.id}}</p>
              </div>
          </div>
      </div>
    </div>
    <div class="row justify-content-md-center">
      <Pagination
          :page="page"
          :total-pages="total_count"
          :namePath="'Gif'"
          @changePage="changePage"
          @setPage="setPage"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Gif",
  data (){
    return {
      apiKey: "Kc80TvwZjsA23Me2w0dz0w985d4JM733",
      limit: 10,
      rating: "g",
      count: 25,
      total_count: 100,
      data: [],
      page: 1,
    }
  },
  methods: {
    setPage (page){
      this.page = page
    },
    changePage (shift){
      this.page += shift
    },
    receiveTrending (){
      return new Promise((resolve, reject) => {
         axios.get('https://api.giphy.com/v1/gifs/trending', {
          params: {
            api_key: this.apiKey,
            limit: this.limit,
            rating: this.rating,
          }
        })
            .then(resp => {
              this.count = resp.data.pagination.count
              this.total_count = resp.data.pagination.total_count
              this.data = resp.data.data
              resolve(resp)
            })
            .catch(err => {
              console.log('error')
              reject(err)
            })
      })
    },
  },
  mounted() {
    this.receiveTrending()
  }
}
</script>

<style scoped>

</style>