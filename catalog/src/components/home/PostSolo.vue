<template>
  <div class="card postSolo" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Пост с id:{{$route.params.id}}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Подзаголовок карты</h6>
      <p class="card-text">Просто текст для заполнения. Кнопка приведет на страницу 404</p>
      <a href="#" class="card-link">Обратно</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "PostSolo"
    }
</script>

<style scoped>
.postSolo {
  margin-left: auto;
  margin-right: auto;
}
</style>