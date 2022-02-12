<template>
  <ul class="pagination justify-content-center"
      :class="{'pagination-sm': windowSize < 600}">
    <router-link :to="{ name: namePath, query: {page: page}}"
                 class="routerPage">
      <li class="page-item"
          :class="{'disabled': page === 1}"
          @click="$emit('changePage' , - page + 1)"
      >
        <span class="page-link" aria-hidden="true">&laquo;</span>
      </li>
    </router-link>
    <router-link :to="{ name: namePath, query: {page: page}}"
                 class="routerPage">
      <li class="page-item"
          :class="{'disabled': page === 1}"
          @click="$emit('changePage' , -1)"
      >
        <span class="page-link">Назад</span>
      </li>
    </router-link>
    <span class="page-link" v-show="page > 3 ">...</span>
    <router-link :to="{ name: namePath, query: {page: page}}"
                 class="routerPage"
                 v-for="pageNumber in totalPages"
                 :key="pageNumber"
                 v-show="pageNumber >= (page - 2 || 0 ) && pageNumber <= (page + 2 || 5)">
      <li class="page-item"
          :class="{'active': page === pageNumber}"
          @click="$emit('setPage' , pageNumber)"
      >
        <span class="page-link">{{ pageNumber }}</span></li>
    </router-link>
    <span class="page-link" v-show="page < totalPages - 3 ">...</span>
    <router-link :to="{ name: namePath, query: {page: page}}"
                 class="routerPage">
      <li class="page-item"
          :class="{'disabled': page === totalPages}"
          @click="$emit('changePage' , 1)"
      >
        <span class="page-link">Вперед</span>
      </li>
    </router-link>
    <router-link :to="{ name: namePath, query: {page: page}}"
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
  data() {
    return {
      windowSize: 0,
    }
  },
  props: {
    page: {
      type: Number,
    },
    totalPages: {
      type: Number,
    },
    namePath: {
      type: String,
    },
  },
  methods: {
    pageUpdate() {
      this.$emit('setPage', Number(this.$route.query.page))
    },
    windowsUpdate() {
      this.windowSize = window.innerWidth;
    },
  },
  mounted() {
    this.pageUpdate()
    this.windowsUpdate()
  },
  created() {
    window.addEventListener('resize', this.windowsUpdate);
  },
}
</script>

<style scoped>
.routerPage {
  text-decoration: none;
}
.pagination {
  margin-top: 1em;
}
</style>