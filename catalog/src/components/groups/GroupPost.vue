<template>
  <div class="card" style="width: 20rem;">
    <div class="card-header">
      {{ name }}
    </div>
    <img src="../../data/img/Shel.jpg" class="card-img-top" alt="Изображение группы">
    <div class="card-body">
      <p class="card-text">{{tags}}</p>
      <button type="button" class="btn btn-primary"
              @click="this.$router.push({ name: 'GroupSolo', params: { id: id } })">
        Подробнее
      </button>
      <div class="card-footer text-muted">
        {{ id }}
      </div>
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
.card-footer{
  margin-top: 10px;
}
</style>