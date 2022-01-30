<template>
  <button @click="separationUrl('/home/test/mem')">fff</button>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"
          v-for="pageInfo in pathInfo"
          :key="pageInfo.name"
          :class="{'active': pageInfo.active === true}"
      >
        <router-link :to="{name: pageInfo.name}"
                     v-if="pageInfo.active !== true">
          {{ pageInfo.meta.title }}
        </router-link>
        <span v-else>
          {{ pageInfo.name }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: "Chits",
  data() {
    return {
      pathInfo: [],
    }
  },
  props: {
    path: {
      type: String,
    },
  },
  methods: {
    /*pow(str, n, acc = []) {
      let foundPos = str.indexOf("/", n);
      console.log(str)
      if (acc === []) {
        acc.push(
            this.$router.getRoutes().filter(path => path.path == str)
        )
      }
      console.log(acc);
      if (foundPos !== -1) {
        const currentPath = this.$router.getRoutes().filter(path => path.path == str.slice(n - 1, foundPos))
        if (currentPath.length !== 0) {
          acc.push(currentPath)
        }
        this.pow(str, foundPos + 1, acc);
      }
    },*/
    separationUrl(str) {
      let numberPos = 1;
      for (let i = 0; i < 5; i++) {
        const foundPos = str.indexOf("/", numberPos);
        if (foundPos !== -1) {
          const currentPath = this.$router.getRoutes().filter(path => path.path == str.slice(numberPos - 1, foundPos))
          /*console.log(this.pathInfo.concat(currentPath))
          console.log(str.slice(numberPos - 1, foundPos))*/
          if (currentPath.length !== 0) this.pathInfo = this.pathInfo.concat(currentPath);
          numberPos = foundPos + 1
        } else if (this.pathInfo === []) {
          this.pathInfo = this.pathInfo.concat(
              this.$router.getRoutes().filter(path => path.path == str)
          )
        }
      }
      return this.pathInfo
    },
  },
  mounted() {
    this.separationUrl(this.path);
  },
}
</script>

<style scoped>

</style>