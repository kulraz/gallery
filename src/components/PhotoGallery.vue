<template>
  <div class="photo-gallery">
    <h1 class="photo-gallery__title">Photo Gallery</h1>
    <button
        @click="openModal"
        class="photo-gallery__add-btn btn-reset">add photo</button>
    <PhotoForm
        v-if="isPhotoFormVisible"
        @addPhoto="addPhoto"
        @closeModal="closeModal"
    />
    <div>
      <ul
        class="photo-gallery__list list-reset" >
        <PhotoItem
            v-for="photo in photosArr"
            :key="photo.id"
            :photo="photo"
        />
      </ul>
      <div ref="observer"></div>
  </div>
  </div>
</template>

<script>
import PhotoItem from '@/components/PhotoItem.vue'
import axios from "axios";
import PhotoForm from '@/components/PhotoForm.vue'
export default {
  name: "PhotoGallery",
  components: {
    PhotoItem,
    PhotoForm,
  },
  data() {
    return {
      photosArr: [],
      isPhotoFormVisible: false,
      currentPage: 1,
    }
  },
  methods: {
    getPhotosArr() {
      axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${this.currentPage++}`)
          .then(response => {
            this.photosArr.push(...response.data)
          })
    },
    addPhoto(photo) {
      this.photosArr.push(photo)
    },
    openModal() {
      this.isPhotoFormVisible = true
    },
    closeModal() {
      this.isPhotoFormVisible = false
    },
  },
  mounted() {
    this.getPhotosArr();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.getPhotosArr()
        }
      })
    }, {
      threshold: 1
    })
    observer.observe(this.$refs.observer)
  }
}
</script>

<style scoped>
@import '@/css/PhotoGallery.css';
</style>
