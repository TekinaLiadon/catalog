<template>
  <div class="row justify-content-md-center">
      <div class="col-4"
           v-for="post in cards" :key="post.id"
      >
        <CardPost :post="post"
                  @remove="$emit('remove', post)"/>
      </div>
  </div>
</template>

<script>

export default {
  name: "PostList",
  props: {
    cards: {
      type: Array,
    },
  },

}
</script>

<style scoped>

</style>