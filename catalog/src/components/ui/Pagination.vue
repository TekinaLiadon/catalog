<template>
  <ul class="pagination justify-content-center">
    <router-link :to="{ path: '/group-list', query: {page: page}}"
                 class="routerPage">
      <li class="page-item"
          :class="{'disabled': page === 1}"
          @click="$emit('changePage' , - page + 1)"
      >
        <span class="page-link" aria-hidden="true">&laquo;</span>
      </li>
    </router-link>
    <router-link :to="{ path: '/group-list', query: {page: page}}"
                 class="routerPage">
      <li class="page-item"
          :class="{'disabled': page === 1}"
          @click="$emit('changePage' , -1)"
      >
        <span class="page-link">Назад</span>
      </li>
    </router-link>
    <router-link :to="{ path: '/group-list', query: {page: page}}"
                 class="routerPage"
                 v-for="pageNumber in totalPages"
                 :key="pageNumber">
      <li class="page-item"
          :class="{'active': page === pageNumber}"
          @click="$emit('setPage' , pageNumber)"
      >
        <span class="page-link">{{ pageNumber }}</span></li>
    </router-link>
    <router-link :to="{ path: '/group-list', query: {page: page}}"
                 class="routerPage">
      <li class="page-item"
          :class="{'disabled': page === totalPages}"
          @click="$emit('changePage' , 1)"
      >
        <span class="page-link">Вперед</span>
      </li>
    </router-link>
    <router-link :to="{ path: '/group-list', query: {page: page}}"
                 class="routerPage">
      <li class="page-item"
          :class="{'disabled': page === totalPages}"
          @click="$emit('changePage' , totalPages - page)"
      >
        <span class="page-link" aria-hidden="true">&raquo;</span>
      </li>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    page: {
      type: Number,
    },
    totalPages: {
      type: Number,
    },
  },
  methods: {
    pageUpdate () {
      this.$emit('setPage' , Number(this.$route.query.page))
    }
  },
  mounted() {
    this.pageUpdate()
  }
}
</script>

<style scoped>
.routerPage {
  text-decoration: none;
}
</style>