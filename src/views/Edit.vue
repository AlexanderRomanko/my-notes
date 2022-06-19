<template>
  <div class="row justify-content-center pb-3 mx-auto">
    <div class="col col-md-6 m-2 text-center">
      <h1>Edit your note</h1>
      <br>

      <div class="card text-center text-black">
        <div class="card-header">
<!--          {{ this.note }}-->
        </div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary"
          >Go somewhere</a>
<!--          @delete-note="deleteNote"-->
          <!--             :notes="notes" @delete-note="deleteNote"-->
        </div>
        <div class="card-footer text-muted">
          2 days ago
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import NotesList from "@/components/NotesList";

export default {
  name: "Edit",
  // components: {
  //   NotesList
  // },
  // data: () => ({
  //   notes: JSON.parse(localStorage.getItem('notes') || '[]'),
  // }),
  // methods: {
  //   getNote() {
  //     this.notes.getElementById(this.$route.params.id)
  //   }
  // }
  // methods: {
  //   deleteNote(id) {
  //     this.notes = this.notes.filter(n => n.id !== id)
  //     localStorage.setItem('notes', JSON.stringify(this.notes))
  //   }
  // }
}
</script>

<style scoped>

</style>