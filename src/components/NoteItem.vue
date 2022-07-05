<template>
  <tr :class="{'table-success' : note.status === 'completed', 'table-danger' : note.status === 'outdated'}">
    <th>{{ index + 1 }}.</th>
    <td>{{ note.title }}</td>
    <td>
      <span v-for="(tag, index) in note.tags" class="text-black">
        <template v-if="index > 0">,</template> <span>{{ tag }}</span>
      </span>
    </td>
    <td>{{ note.description }}</td>
    <td>{{ new Date(note.date).toLocaleDateString() }}</td>
    <td>{{ note.status }}</td>
    <td>
      <router-link tag="button" class="btn bg-warning btn-sm"
                   :to="'/edit/' + note.id"
      >Open
      </router-link>
    </td>
  </tr>
</template>

<script>
export default {
  name: "NoteItem",
  props: {
    note: {
      type: Object,
      required: true
    },
    index: Number
  }
}
</script>

<style scoped>

</style>
