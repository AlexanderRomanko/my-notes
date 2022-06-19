<template>
  <form class="was-validated flex-fill" novalidate
        @submit.prevent="saveNote"
  >
    <div class="row text-center">
      <div class="col">
        <input type="text" class="form-control text-center" placeholder="title" required autofocus
               v-model="title"
               @keydown.enter.prevent="saveNote"
        />
        <div class="invalid-tooltip position-static">
          Please enter a title in the textarea
        </div>
      </div>
    </div>
    <br>
    <div class="row mx-auto justify-content-center">
      <div class="toast"
           :class="isClicked ? 'show' : ''"
           v-for="tag in tags">
        <div class="d-flex">
          <div class="toast-body text-black">{{ tag }}</div>
          <button type="button" class="btn-close me-2 m-auto" aria-label="Close"
                  @click="deleteTag(tag)"
          ></button>
        </div>
      </div>
      <input type="text" class="form-control text-center mt-1" placeholder="tags"
             v-model="tag"
             @keydown.enter.prevent="saveTag"/>
    </div>
    <br>
    <div class="row">
      <div class="col">
        <textarea class="form-control text-center p-5" placeholder="description" maxlength="2048"
                  v-model="description"
        ></textarea>
        <div class="valid-tooltip text-center position-static"
             :class="description.length < 2048 ? 'text-black' : 'text-white bg-danger'">
          {{ description.length }}/2048
        </div>
      </div>
    </div>

    <div class="row text-center">
      <div class="col">
        <label for="date" class="my-2">Choose deadline date:</label>
        <input type="date" class="form-control"
               :min="new Date().toISOString().substring(0, 10)"
               v-model="date"
        >
      </div>
    </div>

    <div class="d-grid gap-2 col-6 mx-auto mt-3">
      <button class="btn" type="submit"
              :class="title.trim() ? 'btn-warning' : 'btn-secondary'"
      >Add
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'AddNote',
  emits: ['add-note'],
  data: () => ({
    tag: '',
    title: '',
    tags: new Set,
    description: '',
    date: new Date().toISOString().substring(0, 10),
    isClicked: false
  }),
  methods: {
    saveNote() {
      if (this.title.trim()) {
        if (this.tag.trim())
          this.tags.add(this.tag)
        const newNote = {
          id: Date.now(),
          title: this.title,
          tags: Array.from(this.tags),
          description: this.description,
          date: this.date,
          completed: false
        }
        this.$emit('add-note', newNote)
        this.$router.push('/list')
        this.title = ''
        this.tag = ''
        this.tags = new Set
        this.description = ''
        this.date = new Date().toISOString().substring(0, 10)
      }
    },
    saveTag() {
      if (this.tag.trim()) {
        this.tags.add(this.tag)
        this.isClicked = true
        this.tag = ''
      }
    },
    deleteTag(tag) {
      this.tags.delete(tag)
    }
  }
}
</script>

<style>

</style>
