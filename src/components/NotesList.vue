<template>
  <div class="container">
      <table class="table table-light table-hover table-striped-columns table-bordered">
        <thead class="table-warning">
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Tags</th>
          <th>Description</th>
          <th>Deadline Date</th>
          <th>Status</th>
          <th>Open</th>
        </tr>
        </thead>
        <tbody>
          <NoteItem v-for="(note, index) in notes" :note="note" :index="index"/>
        </tbody>
      </table>
  </div>
</template>

<script>
import NoteItem from "@/components/NoteItem";

export default {
  name: "NotesList",
  components: {
    NoteItem
  },
  props: ['notes']
}
</script>

<style>

</style>
