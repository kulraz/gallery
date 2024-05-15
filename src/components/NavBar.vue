<template>
  <nav class="nav">
    <div class="nav__container">
<!--      <div class="nav__search">-->
<!--        <label class="nav__search-label" for="search">-->
<!--          <input-->
<!--              type="text"-->
<!--              class="nav__search-input"-->
<!--              id="search"-->
<!--              placeholder="search...">-->
<!--        </label>-->
<!--      </div>-->
      <router-link to="/main" class="nav__item">
        Main Page
      </router-link>
      <router-link to="/photogallery" class="nav__item">
        PhotoGallery
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    searchParam: [String, null]
  },
}
</script>

<style scoped>
  @import '@/css/NavBar.css'
</style>
