<template>
      <div class="card mb-3 h-100">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="../../data/img/Shel.jpg" class="img-fluid rounded-start" alt="Изображение группы">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{title}}</h5>
              <p class="card-text">{{body}}</p>
              <button type="button" class="btn btn-primary"
                      @click="this.$router.push({ name: 'GroupSolo', params: { id: id } })">
                Подробнее
              </button>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <small class="text-muted">{{ id }}</small>
        </div>
      </div>
</template>

<script>
export default {
  name: "UserPosts",
  props: {
    title: {
      type: String
    },
    body: {
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