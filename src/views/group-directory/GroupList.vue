<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <form>
        <div class="row justify-content-md-center">
          <div class="col-4">
            <select class="form-select mb-3" v-model="selectSort">
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
          <div class="col-3">
            <button type="submit" class="btn btn-primary">Найти</button>
          </div>
        </div>
      </form>
    </div>
    <div class="row justify-content-md-center">
      <div class="col-12"
           v-if="groups.length == 0"
      >
        <Preloader/>
      </div>
      <div class="col-12"
           v-else
      >
        <div class="row row justify-content-md-center row-cols-1 row-cols-md-3 g-4">
            <div class="col"
                 v-for="group in groupsSort" :key="group.id"
            >
              <GroupPost
                  :name='group.title'
                  :tags='group.body'
                  :id='group.id'
              >
              </GroupPost>
            </div>
        </div>
        <div class="row justify-content-md-center">
          <Pagination
              :page="page"
              :total-pages="totalPages"
              :namePath="'GroupList'"
              @changePage="changePage"
              @setPage="setPage"
            />
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
  components: { GroupPost},
  methods: {
    ...mapActions({
      fetchGroups: 'groups/fetchGroups',
    }),
    ...mapMutations({
      setGroups: 'groups/setGroups',
      setPage: 'groups/setPage',
      setOptions: 'groups/setOptions',
      setSelectedSort: 'groups/setSelectedSort',
      changePage: 'groups/changePage',
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
  },
}
</script>

<style scoped>

</style>