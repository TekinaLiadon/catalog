<template>
  <div class="container">
  <div class="row">
    <div class="col-2">
      1 of 2
    </div>
    <div class="col-10">
      <div class="row">
        <div class="col-4">
          <GroupPost></GroupPost>
        </div>
        <div class="col-4">
          <GroupPost></GroupPost>
        </div>
        <div class="col-4">
          <GroupPost></GroupPost>
        </div>
      </div>
      <div class="row">
      <ul class="pagination">
        <li class="page-item"
            v-for="pageNumber in totalPages"
            :key="pageNumber"
            :class="{'currentPage': page === pageNumber}"
            @click="setPage(pageNumber)"
        >
          <span class="page-link">{{pageNumber}}</span></li>
      </ul>
    </div>
    </div>
  </div>
  </div>
</template>

<script>
import {mapActions, mapState, mapMutations} from 'vuex'
import GroupPost from "../../components/groups/GroupPost";
    export default {
        name: "GroupList",
      components: {GroupPost},
      methods: {
          ...mapActions({
            fetchGroups: 'groups/fetchGroups',
          }),
          ...mapMutations({
            setGroups: 'groups/setGroups',
            setPage: 'groups/setPage',
          }),
        },
        computed: {
          ...mapState({
            page: state => state.groups.page,
            totalPages: state => state.groups.totalPages,
          })
        },
      mounted() {
        this.fetchGroups();
      },
    }
</script>

<style scoped>
.currentPage {
  border: 1px solid greenyellow;
}
</style>