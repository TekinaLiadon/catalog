<template>
  <div class="container">
    <Chits
        :path="this.$route.path"
    />
    <div class="row justify-content-md-center">
      <div class="col-4">
        <div class="card" style="width: 20rem;">
          <div class="card-header">
            <p class="card-text">{{ groupInfo.title }}</p>
          </div>
          <div class="card-body">
            <img src="../../data/img/Shel.jpg" class="card-img-top" alt="Изображение группы">
          </div>
        </div>
      </div>
      <div class="col-8">
        <div class="row justify-content-md-center">Группа с id:{{ $route.params.id }}</div>
        <div class="row">{{ groupInfo.body }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState, mapMutations,} from 'vuex'

export default {
  name: "GroupSolo",
  methods: {
    ...mapActions({
      fetchSoloGroup: 'groups/fetchSoloGroup',
    }),
    ...mapMutations({
      setIdGroup: 'groups/setIdGroup',
    }),
    fetchInfo(value) {
      this.setIdGroup(value)
    },
  },
  computed: {
    ...mapState({
      idGroup: state => state.groups.idGroup,
      groupInfo: state => state.groups.groupInfo,
    }),
  },
  mounted() {
    this.fetchInfo(this.$route.params.id)
    this.fetchSoloGroup();
  },
}
</script>

<style scoped>

</style>