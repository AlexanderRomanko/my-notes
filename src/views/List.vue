<template>
  <div class="row justify-content-center pb-3 mx-auto">
    <div class="col col-10 m-2 text-center">
      <h1>Total notes: {{ noteList.length }}</h1>
      <br>
      <select class="form-select text-center" aria-label="Default select example"
              v-model="filter"
      >
        <option class="bg-secondary bg-opacity-25 text-center" selected value="">All</option>
        <option value="active">Active</option>
        <option class="bg-danger bg-opacity-25" value="outdated">Outdated</option>
        <option class="bg-success bg-opacity-25" value="completed">Completed</option>
      </select>
      <br>
      <NotesList v-if="noteList.length" :notes="noteList"/>
    </div>
  </div>
</template>

<script>
import NotesList from '@/components/NotesList'

export default {
  name: 'List',
  data: () => ({
    filter: ''
  }),
  components: {
    NotesList
  },
  computed: {
    noteList() {
      return this.$store.getters.noteList.filter(n => {
        if (!this.filter) {
          return true
        }
        return n.status === this.filter
      })
    }
  },
}
</script>

<style scoped>

</style>
