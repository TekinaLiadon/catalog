<template>
  <div class="row justify-content-md-center">
    <form>
      <div class="mb-3">
        <label class="form-label">Название</label>
        <input class="form-control" aria-describedby="emailHelp" v-model="post.title">
      </div>
      <div class="mb-3">
        <label class="form-label">Описание</label>
        <input class="form-control" v-model="post.body">
      </div>
      <button type="submit" class="btn btn-primary" @click="createPost">Создать пост</button>
      <div class="mb-3">
        <select
            class="form-select mb-3"
            v-model="selectedSort"
            @change="$emit('postsSort' , postsSort)"
        >
          <option disabled value="">Выбрать фильтр</option>
          <option
              v-for="option in sortOptions"
              :key="option.value"
              :label="option.label"
              :value="option.value">
          </option>
        </select>
      </div>
    </form>
  </div>
</template>

<script>

    export default {
        name: "PostForm",
        data() {
            return {
                post: {
                    title: "",
                    body: "",
                },
                selectedSort: "",
                sortOptions: [
                    {value: 'title', label: 'Заголовки'},
                    {value: 'body', label: 'Описания'},
                    {value: 'id', label: 'id'},
                ],
            }
        },
        props: {
            cards: Array,
            default: () => [],
        },
        methods: {
            createPost() {
                this.post.id = Date.now()
                this.$emit('create', this.post)
                this.post = {
                    title: '',
                    body: '',
                }
            },
        },
        computed: {
            postsSort() {
                if (this.selectedSort == 'id') {
                    return [...this.cards]
                        .sort((postA, postB) => postA[this.selectedSort] - postB[this.selectedSort])
                } else {
                    return [...this.cards]
                        .sort((postA, postB) => postA[this.selectedSort]?.localeCompare(postB[this.selectedSort]))
                }
            }
        }
    }
</script>

<style scoped>

</style>