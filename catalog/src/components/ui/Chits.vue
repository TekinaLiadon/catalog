<template>
  <nav aria-label="breadcrumb" class="chitsBar">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"
          v-for="pageInfo in arrPathInfo"
          :key="pageInfo.name"
          :class="{'active': pageInfo.active === true}"
      >
        <router-link :to="{name: pageInfo.name}"
                     v-if="pageInfo.active !== true">
          {{ pageInfo.meta.title }}
        </router-link>
        <span v-else>
          {{ pageInfo.meta.title }}
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
    /*separationUrl(str) {
      let numberPos = 1;
      for (let i = 0; i < 5; i++) {
        const foundPos = str.indexOf("/", numberPos);
        if (foundPos !== -1) {
          const currentPath = this.$router.getRoutes().filter(path => path.path == str.slice(numberPos - 1, foundPos))
          /!*console.log(this.pathInfo.concat(currentPath))
          console.log(str.slice(numberPos - 1, foundPos))*!/
          if (currentPath.length !== 0) this.pathInfo = this.pathInfo.concat(currentPath);
          numberPos = foundPos + 1
        } else if (this.pathInfo === []) {
          this.pathInfo = this.pathInfo.concat(
              this.$router.getRoutes().filter(path => path.path == str)
          )
        }
      }
      return this.pathInfo
    },*/
  },
  computed: {
    arrPathInfo() {
      let numberPos = 1;
      let acc = [];
      for (let i = 0; i < 10; i++) {
        const foundPos = this.path.indexOf("/", numberPos);
        if (foundPos !== -1) {
          const currentPath = this.$router.getRoutes().filter(path => path.path == this.path.slice(numberPos - 1, foundPos))
          if (currentPath.length !== 0) acc = acc.concat(currentPath);
          numberPos = foundPos + 1
        } else if (acc.length === 0) {
          acc = acc.concat(
              this.$router.getRoutes().filter(path => path.path == this.path)
          )
          break
        }
        else if (foundPos === -1){
          const currentPath = this.$router.getRoutes().filter(path => path.path == this.path.slice(numberPos - 1))
          if (currentPath.length === 0) {
            const dinamInfo = this.path.slice(0, foundPos) + ':' + Object.keys(this.$route.params).join()
            const currentPath = this.$router.getRoutes().filter(path => path.path == dinamInfo)
            currentPath[0] = {
              meta: {
                title: this.path.slice(numberPos )
              },
              active: true
            }
            acc = acc.concat(currentPath)
          }
          break
        }
      }
      return acc
    },
  },
  mounted() {
    /*this.separationUrl(this.path);*/
  },
}
</script>

<style scoped>
.chitsBar {
  margin: 15px;
}
</style>