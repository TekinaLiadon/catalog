<template>
  <div class="container">
    <div class="row row-form">
      <div class="col">
        <select class="form-select" v-model="url">
          <option disabled value="">Тип</option>
          <option value="/search">Поиск</option>
          <option value="/trending">Популярное</option>
          <option value="/random">Рандом</option>
        </select>
      </div>
      <div class="col" v-show="url === '/search' || url === '/trending'">
          <input type="text"
                 class="form-control"
                 placeholder="Число гифок"
                 v-model="limit"
          >
      </div>
      <div class="col" v-show="url === '/search'">
        <input type="text"
               class="form-control"
               placeholder="Поиск (анг)"
               v-model="q"
        >
      </div>
      <div class="col" v-show="url === '/random'">
        <input type="text"
               class="form-control"
               placeholder="Тег"
               v-model="tag"
        >
      </div>
      <div class="col">
        <select class="form-select" v-model="rating">
          <option disabled value="">Рейтинг</option>
          <option value="g">G</option>
          <option value="pg">PG</option>
          <option value="pg-13">PG-13</option>
          <option value="r">R</option>
        </select>
      </div>
      <div class="col">
        <button type="submit" class="btn btn-primary" @click="sortRequests">Найти</button>
      </div>
    </div>
    <div class="row row justify-content-md-center row-cols-1 row-cols-md-4 g-4">
      <div class="col"
           v-for="gif in data"
           :key="gif.id">
        <div class="card h-100">
          <div class="card-img">
            <img :src="gif.images.downsized_medium.url" class="card-img-top img-gif" alt="...">
          </div>
          <div class="card-body">
            <p class="card-text">{{ gif.title }}</p>
          </div>
          <div class="card-footer text-muted">
            {{ gif.id }}
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
  data() {
    return {
      apiKey: "Kc80TvwZjsA23Me2w0dz0w985d4JM733",
      limit: 6,
      rating: "",
      count: 25,
      total_count: 100,
      data: [],
      page: 1,
      ratingSort: '',
      url: '',
      q: '',
      tag: '',
    }
  },
  methods: {
    setPage(page) {
      this.page = page
    },
    changePage(shift) {
      this.page += shift
    },
    sortRequests() {
      if (this.url === '/trending') this.receiveTrending()
    },
    receiveTrending() {
      return new Promise((resolve, reject) => {
        axios.get( 'https://api.giphy.com/v1/gifs/trending', {
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
    /*this.receiveTrending()*/
  }
}
</script>

<style scoped>
.img-gif {
  height: 200px;
  width: 200px;
}

.card-img {
  align-items: center;
}

.row-form {
  padding-bottom: 2rem;
}
</style>