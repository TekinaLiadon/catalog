<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <img src="../data/img/Shel.jpg" class="card-img" alt="Изображение группы">
          <div class="card-img-overlay">

          </div>
          <div class="card-body">
            <img src="../data/img/Shel.jpg" class="img-fluid avatar" alt="...">
            <h5 class="card-title">Пользователь: {{ this.$store.state.user.name }}</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.</p>
            <p class="card-text">Last updated 3 mins ago</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <UserPosts/>
      </div>
    </div>
    <div class="row">
      <div class="col-12"
           v-if="posts.length == 0"
      >
        <Preloader/>
      </div>
      <div class="card-group" v-else>
        <div class="col-4"
             v-for="post in posts" :key="post.id"
        >
          <GroupPost
              :name='post.title'
              :tags='post.body'
              :id='post.id'
          >
          </GroupPost>
          <Preloader v-if="this.status == 'loading'"/>
        </div>
      </div>
    </div>
    <div ref="observer" class="observer"></div>
  </div>
</template>

<script>
import axios from "axios";
import GroupPost from "../components/groups/GroupPost";
import UserPosts from "../components/profile/UserPosts";

export default {
  name: "Profile",
  components: {
    UserPosts,
    GroupPost,
  },
  data(){
    return {
      page: 0,
      limit: 9,
      totalPages: 0,
      posts: [],
      status: '',
    }
  },
  methods: {
    async addPosts() {
      try {
        this.page += 1
        this.status = 'loading'
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
              params: {
                _page: this.page,
                _limit: this.limit,
              }
            }
        );
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = [...this.posts, ...response.data]
        this.status = ''
      } catch (e) {
        console.log('Error');
      }
    },
  },
  mounted() {
    this.addPosts()
      const options = {
        rootMargin: '0px',
        threshold: 1.0
      }
      const callback = (entries) => {
        if(entries[0].isIntersecting && this.page < this.totalPages){
          this.addPosts()
        }
      };
      const observer = new IntersectionObserver(callback, options);
      observer.observe(this.$refs.observer)
  },
}
</script>

<style scoped>
.card-img{
  object-fit: cover;
  width: 100%;
  height: 300px;
  overflow: hidden;
}
.avatar{
  width: 200px;
  height: 200px;
  object-fit: cover;
  float:left;
  margin: -10% 10px 10px 0;
  border-radius: 100px;
  border: 3px solid black;
  box-shadow: 0 0 7px #666;
}
.card-body {
  text-align: start;
}
</style>