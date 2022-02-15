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
           :key="gif.id"
      >
        <div class="card h-100">
          <div class="card-img">
            <img :src="gif.images.downsized_medium.url" class="card-img-top img-gif" alt="...">
          </div>
          <div class="card-body">
            <p class="card-text">Название: {{ gif.title }}</p>
            <p class="card-text">Пользователь:
              <a class="stretched-link"
                 @click="this.$router.push({ name: 'UserGif', params: { id: gif.id } })">
                {{ gif.username }}
              </a>
            </p>

          </div>
          <div class="card-footer text-muted">
            {{ gif.id }}
          </div>
        </div>
      </div>
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
      total_count: 0,
      data: [],
      page: 1,
      ratingSort: '',
      url: '',
      q: '',
      tag: '',
      mapRequests: new Map([
        ['/search', {
          q: this.q,
          limit: this.limit,
          offset: 0,
          rating: this.rating,
          lang: "en",
        }],
        ['/trending', {
          limit: this.limit,
          rating: this.rating,
        }],
        ['/random', {
          tag: this.tag,
          rating: this.rating,
        }]
      ]),
    }
  },
  methods: {
    sortRequests() {
      // Повысить читаемость
      const instance = axios.create({
        baseURL: 'https://api.giphy.com/v1/gifs/',
        timeout: 10000,
        params: {
          api_key: this.apiKey,
        }
      })

      if (this.$route.query.endpoint) {
        this.url = this.$route.query.endpoint
        delete this.$route.query.endpoint
        return this.getRequests(instance, this.$route.query)
      }
      if(this.url) {
        this.$router.push({ query: Object.assign({endpoint: this.url} , this.mapRequests.get(this.url) ) })
        return this.getRequests(instance, this.mapRequests.get(this.url))
      }
    },
    getRequests(instance, params) {
      return new Promise((resolve, reject) => {
        instance.get(this.url, {
          params: params
        })
            .then(resp => {
              // Придумать лаконичную обработку исключения
              if (this.url !== '/random') {
                this.count = resp.data.pagination.count
                this.total_count = resp.data.pagination.total_count
                this.data = resp.data.data
              } else {
                this.data.push(resp.data.data)
              }
              resolve(resp)
            })
            .catch(err => {
              console.log('err')
              reject(err)
            })
      })
    },
  },
  mounted() {
    /*this.receiveTrending()
    Ограничение в количестве запросов не позволяет сразу грузить*/
    this.sortRequests()
  }
}
</script>

<style scoped>
.img-gif {
  height: 200px;
  width: 200px;
}

.card-img {
  text-align: center;
}

.row-form {
  padding-bottom: 2rem;
}
</style>