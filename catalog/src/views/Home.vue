<template>
  <Chits
  :path="this.$route.path"
  />
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
          active: true,
        },
      ],
    }
  },
}
</script>

<style scoped>

</style>