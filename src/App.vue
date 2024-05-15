<template>
  <div class="container">
    <NavBar
    ></NavBar>
    <router-view
    ></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: 'App',
  components: {
    NavBar,
  },
  data() {
    return {
      searchParam: ''
    }
  }
}
</script>

<style>
  @import '@/css/normalize.css';
  @import '@/css/main.css';
  .container {
    max-width: 1300px;
  }
</style>
