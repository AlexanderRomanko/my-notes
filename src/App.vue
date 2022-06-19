<template>
  <Navbar/>
  <br>
  <router-view/>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
@import "bootstrap/dist/css/bootstrap.min.css";

</style>
