<template>
  <div class="card box-card">
    <div class="card-header">
      {{post.title}}
      <br>{{post.id}}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <button type="button" class="btn btn-primary"
                                              @click="$emit('remove', post)">
        Удалить
      </button>
      </li>
      <li class="list-group-item">
        <button type="button" class="btn btn-primary"
                   @click="this.$router.push({ name: 'CardPost', params: { id: post.id } })">
          Перейти
        </button>
      </li>
      <li class="list-group-item">
        <div class="text item">
          {{post.body}}
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
    export default {
        name: "CardPost",
        props: {
            post: Object,
        },
    }
</script>

<style scoped>
    .box-card {
        margin: 5px;
    }
</style>