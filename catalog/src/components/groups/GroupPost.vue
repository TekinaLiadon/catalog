<template>
  <div class="card" style="width: 20rem;">
    <div class="card-header">
      {{ name }}
    </div>
    <img src="../../data/img/Shel.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">{{tags}}</p>
      <button type="button" class="btn btn-primary"
              @click="this.$router.push({ name: 'GroupSolo', params: { id: id } })">
        Подробнее
      </button>
      <footer class="blockquote-footer">Дата</footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "groupPost",
  props: {
    name: {
      type: String
    },
    tags: {
      type: String
    },
    id: {
      type: Number
    },
  },
}
</script>

<style scoped>

</style>