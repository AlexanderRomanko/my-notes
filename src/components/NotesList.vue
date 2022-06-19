<template>
  <div class="row">
    <div class="col">
      <table class="table table-light table-hover table-striped-columns table-bordered">
        <thead class="table-warning">
        <tr>
          <th scope="col" class="col-1">#</th>
          <th scope="col">Title</th>
          <th scope="col">Tags</th>
          <th scope="col">Description</th>
          <th scope="col" class="col-1">Deadline Date</th>
          <th scope="col" class="col-1">Status</th>
          <th scope="col" class="col-1">Open</th>
        </tr>
        </thead>
        <tbody>
          <NoteItem v-for="(note, index) in notes" :note="note" :index="index"/>
        </tbody>
      </table>
    </div>
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