<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <h2>Диаграмма</h2>
      <TestChart :data="dataChart"/>
    </div>
    <div class="row justify-content-md-center">
      <h2>Постепенная анимация</h2>
      <LineChart/>
    </div>
    <div class="row justify-content-md-center">
      <h2>Загрузка постов</h2>
      <div class="col-12">
        <div class="row justify-content-md-center">
          <div class="col-6">
            <PostForm @create="createPost"
                      :cards="cards"
                      @postsSort="sortPosts"
                      v-model="newCards"
                      v-tracking
            />
          </div>
        </div>
        <div class="row justify-content-md-center"
             v-if="cards.length == 0"
        >
          <div class="col-12">
            <Preloader/>
          </div>
        </div>
        <div class="row justify-content-md-center"
             v-else
        >
          <PostList :cards="cards"
                    @remove="removePost"/>
        </div>
        <div class="row justify-content-md-center">
          <ul class="pagination justify-content-center">
            <li class="page-item"
                :class="{'disabled': page === 1}"
                @click="changePage(1)"
            >
              <span class="page-link" aria-hidden="true">&laquo;</span>
            </li>
            <li class="page-item"
                :class="{'disabled': page === 1}"
                @click="changePage(page,-1)"
            >
              <span class="page-link">Назад</span>
            </li>
            <li class="page-item"
                v-for="pageNumber in totalPages"
                :key="pageNumber"
                :class="{'active': page === pageNumber}"
                @click="changePage(pageNumber)"
            >
              <span class="page-link">{{ pageNumber }}</span></li>
            <li class="page-item"
                :class="{'disabled': page === totalPages}"
                @click="changePage(page, 1)"
            >
              <span class="page-link">Вперед</span>
            </li>
            <li class="page-item"
                :class="{'disabled': page === totalPages}"
                @click="changePage(totalPages)"
            >
              <span class="page-link" aria-hidden="true">&raquo;</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostList from "@/components/home/PostList";
import axios from "axios";
import PostForm from "../components/home/PostForm";
import testMixin from "../components/mixins/testMixin";
import TestChart from "../components/home/TestChart";
import LineChart from "../components/home/LineChart.vue";

export default {
  name: "Test",
  components: {
    LineChart,
    TestChart,
    PostList,
    PostForm,
  },
  data() {
    return {
      cards: [],
      newCards: [],
      selectedSort: "",
      post: {
        title: "",
        body: "",
      },
      page: 1,
      limit: 10,
      totalPages: 0,
      dataChart: [
        {label: 'Элла', value: 30, backgroundColor: '#77CEFF',},
        {label: 'Мардук', value: 40, backgroundColor: '#0079AF',},
        {label: 'Иштра', value: 60, backgroundColor: '#123E6B',},
        {label: 'Элиаль', value: 70, backgroundColor: '#97B0C4',},
        {label: 'Третий', value: 10, backgroundColor: '#A5C8ED',},
      ],
    }
  },
  methods: {
    createPost(post) {
      this.cards.push(post);
    },
    removePost(post) {
      this.cards = this.cards.filter(p => p.id !== post.id)
    },
    sortPosts(newArr) {
      this.cards = newArr;
    },
    changePage(pageNumber, shift = 0) {
      this.page = pageNumber + shift
    },
    async fetchPosts() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
              params: {
                _page: this.page,
                _limit: this.limit,
              }
            }
        );
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.cards = response.data
      } catch (e) {
        console.log('Error');
      }
    },
  },
  mounted() {
    this.fetchPosts();
    console.log(this.dataChart)
  },
  watch: {
    page() {
      this.fetchPosts()
    }
  },
  mixins: [testMixin]
}
</script>

<style scoped>

</style>