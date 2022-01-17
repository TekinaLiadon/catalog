<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <form>
        <div class="row justify-content-md-center">
          <div class="col-3">
            <select class="form-select mb-3" v-model="selectSort" @groupsSort="setSelectedSort">
              <option disabled value="">Выбрать фильтр</option>
              <option v-for="option in options"
                      :key="option.value"
                      :label="option.label"
                      :value="option.value">
              </option>
            </select>
          </div>
          <div class="col-5">
            <input type="text" class="form-control" placeholder="Теги">
          </div>
          <div class="col-2">
            <button type="submit" class="btn btn-primary">Найти</button>
          </div>
        </div>
      </form>
    </div>
  <div class="row justify-content-md-center">
    <div class="col-10">
      <div class="row">
        <template v-for="group in groups" :key="group.id">
        <div class="col-4">
          <GroupPost
              :name = 'group.title'
              :tags = 'group.body'
              :id = 'group.id'
          >
          </GroupPost>
        </div>
        </template>
      </div>
      <div class="row">
      <ul class="pagination justify-content-center">
        <li class="page-item disabled">
          <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
        </li>
        <li class="page-item"
            v-for="pageNumber in totalPages"
            :key="pageNumber"
            :class="{'currentPage': page === pageNumber}"
            @click="setPage(pageNumber)"
        >
          <span class="page-link">{{pageNumber}}</span></li>
        <li class="page-item">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </div>
    </div>
  </div>
  </div>
</template>

<script>
import {mapActions, mapState, mapMutations, mapGetters} from 'vuex'
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
            setOptions: 'groups/setOptions',
            setSelectedSort: 'groups/setSelectedSort',
          }),
        },
        computed: {
          ...mapGetters({
            groupsSort: 'groups/groupsSort',
          }),
          ...mapState({
            page: state => state.groups.page,
            totalPages: state => state.groups.totalPages,
            groups: state => state.groups.groups,
            options: state => state.groups.options,
            selectedSort: state => state.groups.selectedSort,
          }),
          selectSort: {
            get() {
              return this.selectedSort
            },
            set(value) {
              console.log(this.groupsSort)
              this.setSelectedSort(value)
            }
          }
        },
      mounted() {
        this.fetchGroups();
      },
      watch: {
        page() {
          this.fetchGroups()
        },
        selectedSort() {
          this.groupsSort()
        }
      },
    }
</script>

<style scoped>
.currentPage {
  border: 1px solid greenyellow;
}
</style>