<template>
  ммвы
  {{$route.path}}
  <Chits
  :pagesInfo="pagesInfo"/>
</template>

<script>


export default {
  name: 'Home',
  data() {
    return {
      pagesInfo: [
        {
          name: 'Главная',
          urlName: 'Home',
        },
        {
          name: 'Главная',
          urlName: 'Home',
          active: true,
        },
      ],
    }
  },
}
</script>

<style scoped>

</style>