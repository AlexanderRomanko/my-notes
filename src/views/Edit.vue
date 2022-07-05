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
                          :disabled="note.status === 'completed'"
                          v-model="description"
                ></textarea>
                <div class="valid-tooltip text-center position-static"
                     :class="description.length < 2048 ? 'text-black' : 'text-white bg-danger'">
                  {{ description.length }}/2048
                </div>
              </li>
              <li class="list-group-item row-cols-1">
                <div><strong>deadline date: </strong></div>
                <input type="date" class="input-group-text bg-light"
                       :disabled="note.status === 'completed'"
                       :min="new Date().toISOString().substring(0, 10)"
                       v-model="date"
                >
              </li>
              <li class="list-group-item bg-opacity-25"
                  :class="{'bg-success' : note.status === 'completed', 'bg-danger' : note.status === 'outdated'}">
                <div><strong>status: </strong></div>
                <span>{{ note.status }}</span>
              </li>

            </ul>
          </div>
          <div class="card-footer text-muted">
            <button class="btn mx-5" type="submit"
                    :class=" note.status === 'completed' ? 'disabled' : 'btn-warning'">Save changes
            </button>
            <button class="btn mx-5 " type="button"
                    :class=" note.status === 'completed' ? 'disabled' : 'btn-primary'"
                    @click="completeTask"
            >Complete task
            </button>
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
    date: null
  }),
  methods: {
    updateNote() {
        this.$store.dispatch('updateNote', {
          id: this.note.id,
          description: this.description,
          date: this.date
        })
        this.$router.push('/list')
    },
    completeTask() {
      if (this.note.status !== 'completed') {
        this.$store.dispatch('completeTask', this.note.id)
        this.$router.push('/list')
      }
    }
  },
  mounted() {
    if (this.note) {
      this.description = this.note.description
      this.date = this.note.date
    }
  },
  computed: {
    note() {
      return this.$store.getters.noteById(+this.$route.params.id)
    }
  }
}
</script>

<style scoped>


</style>
