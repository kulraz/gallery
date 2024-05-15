<template>
  <div class="photo-item">
    <picture class="photo-item__picture">
      <img :src="photo.url" alt="" class="photo-item__img">
    </picture>
    <p class="photo-item__title">
      {{photo.title}}
    </p>
  </div>
</template>

<script>
export default {
  name: "PhotoItem",
  props: {
    photo: {
      type: [Object, null],
      default: null,
    }
  }
}
</script>

<style scoped>
@import "@/css/PhotoItem.css";
</style>
