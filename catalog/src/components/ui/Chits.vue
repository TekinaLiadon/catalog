<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"
          v-for = "pageInfo in pagesInfo"
          :key="pageInfo.urlName"
      :class="{'active': pageInfo.active === true}"
      >
        <router-link :to="{name: pageInfo.urlName}"
        v-if="pageInfo.active !== true">
          {{ pageInfo.name }}
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
  props: {
    pagesInfo: {
      type: Array,
    }
  },
}
</script>

<style scoped>

</style>