<template>
  <div class="row justify-content-center pb-3 mx-auto">
    <div class="col col-10 m-2 text-center">
      <h1>Total notes: {{ notes.length }}</h1>
      <br>
      <NotesList v-if="notes.length" :notes="notes"/>
    </div>
  </div>
</template>

<script>
import NotesList from "@/components/NotesList";

export default {
  name: 'List',
  components: {
    NotesList
  },
  data: () => ({
    notes: JSON.parse(localStorage.getItem('notes') || '[]')
  })
}
</script>

<style scoped>

</style>