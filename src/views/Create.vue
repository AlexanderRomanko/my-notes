<template>
  <div class="row justify-content-center pb-3 mx-auto">
    <div class="col col-md-4 m-2 text-center">
      <h1>Create a new note</h1>
      <br>
      <AddNote @add-note="addNote"/>
    </div>
  </div>
</template>

<script>
import AddNote from '@/components/AddNote.vue'

export default {
  name: 'Create',
  components: {
    AddNote
  },
  methods: {
    addNote(note) {
      this.$store.dispatch('createNote', note)
      this.$router.push('/list')
    }
  }
}
</script>

<style>

</style>
