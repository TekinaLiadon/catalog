<template>
  <div class="container">
    <el-row class="row-bg" justify="center">
        <el-col :span="20">
            <el-row class="row-bg" justify="center">
                <PostForm @create="createPost"
                          :cards="cards"
                          @postsSort="sortPosts"
                          v-model="newCards"
                          v-tracking
                />
            </el-row>
            <el-row class="row-bg" justify="center">
                <PostList :cards="cards"
                          @remove="removePost"/>
            </el-row>
            <el-row class="row-bg" justify="center">
              <ul class="pagination"
                  v-for="pageNumber in totalPages"
                  :key="pageNumber"
                  :class="{'currentPage': page === pageNumber}"
                  @click="changePage(pageNumber)"
              >
                      <li class="page-item"><span class="page-link">{{pageNumber}}</span></li>
              </ul>
            </el-row>
        </el-col>
    </el-row>
  </div>
</template>

<script>

    import PostList from "@/components/home/PostList";
    import axios from "axios";
    import PostForm from "../components/home/PostForm";
    import testMixin from "../components/mixins/testMixin";

    export default {
        name: 'Home',
        components: {
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
            changePage(pageNumber){
                this.page = pageNumber
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
    .page {
        border: 1px solid black;
        padding: 10px;
    }

    .currentPage {
        border: 1px solid greenyellow;
    }
</style>