<template>
  <nav class="navbar navbar-expand-sm bg-light row-cols-auto">
    <div class="container-fluid">
      <div class="col"></div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item mx-5">
            <router-link active-class="active" class="nav-link" to="/">Create</router-link>
          </li>
          <div><a class="navbar-brand m-auto">My Notes</a></div>
          <li class="nav-item mx-5">
            <router-link class="nav-link" to="/list">List</router-link>
          </li>
        </ul>
      </div>
      <div class="col">
        <button class="navbar-toggler btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>

</style>