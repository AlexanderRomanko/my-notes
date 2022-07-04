<template xmlns="http://www.w3.org/1999/html">
  <div class="row justify-content-center pb-3 mx-auto">
    <div class="col col-md-6 m-2 text-center">
      <h1>Edit your note</h1>
      <br>

      <form class="was-validated flex-fill" novalidate
            @submit.prevent="updateNote"
      >
        <div v-if="note" class="card text-center text-black">
          <div class="card-header h5">
            {{ note.title }}
          </div>
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">
                <div><strong>tags: </strong></div>
                <span v-for="(tag, index) in note.tags">
              <template v-if="index > 0">,</template> <span>{{ tag }}</span>
            </span>
              </li>
              <li class="list-group-item"><strong>description: </strong>
                <textarea class="form-control text-center p-5" placeholder="description" maxlength="2048"
                          v-model="description"
                ></textarea>
                <div class="valid-tooltip text-center position-static"
                     :class="description.length < 2048 ? 'text-black' : 'text-white bg-danger'">
                  {{ description.length }}/2048
                </div>
              </li>
              <li class="list-group-item row-cols-1"><div><strong>deadline date: </strong></div>
                <input type="date" class="input-group-text bg-light"
                       :min="new Date().toISOString().substring(0, 10)"
                       v-model="date"
                >
              </li>
              <li class="list-group-item"><div><strong>status: </strong></div>
                <span>{{ note.status }}</span>
              </li>

            </ul>
          </div>
          <div class="card-footer text-muted">
            <button class="btn btn-warning mx-5" type="submit">Save changes</button>
            <button class="btn btn-primary mx-5" type="button"
              @click="completeTask"
            >Complete task</button>
          </div>
        </div>
        <p v-else>Note not found</p>
      </form>

    </div>
  </div>

</template>

<script>

export default {
  name: "Edit",
  data: () => ({
    description: '',
    date: ''
  }),
  methods: {
    updateNote() {
      const notes = JSON.parse(localStorage.getItem('notes') || '[]')
      const index = notes.findIndex(index => index.id === +this.$route.params.id)
      notes[index].description = this.description
      notes[index].date = this.date
      if (new Date(this.date) < Date.now()) {
        notes[index].status = 'outdated'
      } else {
        notes[index].status = 'active'
      }
      localStorage.setItem('notes', JSON.stringify(notes))
      this.$router.push('/list')
    },
    completeTask() {
      const notes = JSON.parse(localStorage.getItem('notes') || '[]')
      const index = notes.findIndex(index => index.id === +this.$route.params.id)
      notes[index].status = 'completed'
      localStorage.setItem('notes', JSON.stringify(notes))
      this.$router.push('/list')
    }
  },
  mounted() {
    this.description = this.note.description
    this.date = this.note.date
  },
  computed: {
    note() {
      return JSON.parse(localStorage.getItem('notes') || '[]')
          .find(note => note.id === +this.$route.params.id)
    }
  }
}
</script>

<style scoped>


</style>