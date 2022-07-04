<template>
  <!--        <span class="btn btn-sm btn-warning" @click="$emit('delete-note', note.id)">Delete</span>-->
  <!--  <tr :class="{done: !note.completed}" >-->
  <tr :class="note.status === 'active' ? 'table-light' : 'table-danger'">
    <th scope="row">{{ index + 1 }}.</th>
    <td class="text-truncate" style="max-width: 2rem;">{{ note.title }}</td>
    <td class="text-truncate" style="max-width: 2rem;">
      <span v-for="(tag, index) in note.tags" class="text-black">
        <template v-if="index > 0">,</template> <span>{{ tag }}</span>
      </span>
    </td>
    <td class="text-truncate" style="max-width: 2rem;">{{ note.description }}</td>
    <td class="text-truncate" style="max-width: 2rem;">{{ new Date(note.date).toLocaleDateString() }}</td>
    <td class="text-truncate" style="max-width: 2rem;">{{ note.status }}</td>
    <td>
      <router-link tag="button" class="btn bg-warning"
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