<template>
<div
    @click.self="closeModal"
    class="photo-form">
  <div
      class="photo-form__container">
    <button
        @click="closeModal"
        class="photo-form__close-btn btn-reset">
      <svg width="16.000000" height="16.000000" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

        <defs/>
        <circle id="Ellipse 21" cx="8.000000" cy="8.000000" r="8.000000" fill="#DE2910" fill-opacity="1.000000"/>
        <path id="Vector 37" d="M4.98 4.98L11.01 11.01" stroke="#FFFFFF" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linecap="square"/>
        <path id="Vector 38" d="M11.01 4.98L4.98 11.01" stroke="#FFFFFF" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linecap="square"/>
      </svg>
    </button>
    <form
        @submit.prevent = addPhoto
        action=""
        class="photo-form__form form">
      <h2 class="form__caption">Add photo</h2>
      <div class="form__input-container">
        <label class="form__label" for="photo-title">write photo title</label>
        <input
            ref="textInput"
            @input = getTitle($event)
            type="text"
            name=""
            id="photo-title"
            class="form__input form__input--text"
            placeholder="write photo title">
      </div>
      <div class="form__input-container">
        <p class="form__input-descr">add file</p>
        <div class="form__input-wrapper">
          <label class="form__label form__label--file" for="photo-file">
            <svg width="19.000000" height="18.000000" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

              <defs/>
              <path id="Vector" d="M17.38 0.99C15.3 -1.05 11.97 -1.05 9.89 0.99L1.16 9.72C-0.42 11.33 -0.39 13.92 1.23 15.5C2.82 17.06 5.36 17.06 6.94 15.5L14.85 7.6C15.88 6.57 15.88 4.9 14.85 3.87C13.82 2.85 12.16 2.85 11.13 3.87L3.57 11.44C3.3 11.71 3.31 12.15 3.58 12.41C3.85 12.67 4.27 12.67 4.54 12.41L12.1 4.85C12.6 4.37 13.4 4.38 13.88 4.88C14.34 5.37 14.34 6.14 13.88 6.62L5.97 14.53C4.9 15.58 3.18 15.57 2.13 14.5C1.09 13.45 1.09 11.75 2.13 10.69L10.86 1.96C12.42 0.4 14.94 0.4 16.5 1.96C18.05 3.51 18.05 6.04 16.5 7.59L7.77 16.32C7.48 16.57 7.44 17 7.69 17.29C7.94 17.58 8.37 17.61 8.66 17.37C8.69 17.34 8.71 17.32 8.74 17.29L17.47 8.56C19.54 6.45 19.5 3.05 17.38 0.99Z" fill="#5887FF" fill-opacity="1.000000" fill-rule="nonzero"/>
            </svg>
          </label>
          <input
              hidden
              ref="fileInput"
              @change="fileUpload($event)"
              type="file"
              name=""
              id="photo-file"
              class="form__input form__input--file" >
          <ul
              v-if="isFileUploaded"
              class="form__input-uploaded-file-container list-reset">
            <li class="form__input-uploaded-file">
            <span class="form__input-uploaded-file-name">
              {{ photo.file.name }}
            </span>
              <button
                  @click="clearFileInput"
                  class="form__input-uploaded-file-delete-btn btn-reset">
                <svg width="9.000000" height="9.000000" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

                  <defs>
                    <clipPath id="clip41_471">
                      <rect id="close (12) 1" width="9.000000" height="9.000000" fill="white" fill-opacity="0"/>
                    </clipPath>
                  </defs>
                  <rect id="close (12) 1" width="9.000000" height="9.000000" fill="#FFFFFF" fill-opacity="0"/>
                  <g clip-path="url(#clip41_471)">
                    <path id="Vector" d="M5.32 4.5L8.82 1C9.05 0.77 9.05 0.4 8.82 0.17C8.6 -0.05 8.23 -0.05 8 0.17L4.5 3.68L0.99 0.17C0.76 -0.05 0.39 -0.05 0.17 0.17C-0.06 0.4 -0.06 0.77 0.17 1L3.67 4.5L0.17 8.01C-0.06 8.23 -0.06 8.6 0.17 8.83C0.28 8.95 0.43 9 0.58 9C0.73 9 0.88 8.95 0.99 8.83L4.5 5.33L8 8.83C8.11 8.95 8.26 9 8.41 9C8.56 9 8.71 8.95 8.82 8.83C9.05 8.6 9.05 8.23 8.82 8.01L5.32 4.5Z" fill="#EE4F3A" fill-opacity="1.000000" fill-rule="nonzero"/>
                  </g>
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <button
          type="submit"
          class="form__submit-btn btn-reset">add photo</button>
    </form>
  </div>
</div>
</template>

<script>
export default {
  name: "PhotoForm",
  data() {
    return {
      photo: {
        id: null,
        title: '',
        url: '',
        file: {}
      },
      isFileUploaded: false,
    }
  },
  methods: {
    getTitle(event) {
      this.photo.title = event.target.value
    },
    fileUpload(event) {
      const inputData = event.target.files
      Object.values(inputData).forEach(file => {
        this.photo.file = file
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
          this.photo.url = reader.result
          this.isFileUploaded = true
        }
      })
    },
    addPhoto() {
      this.photo.id = Date.now()
      this.$emit('addPhoto', this.photo)
      this.clearFileInput()
      this.clearTextInput()
    },
    clearFileInput() {
      this.$refs.fileInput.value = ''
      this.photo.file = {}
      this.isFileUploaded = false
    },
    clearTextInput() {
      this.$refs.textInput.value = ''
    },
    closeModal() {
      this.$emit('closeModal')
    }
  },
}
</script>

<style scoped>
@import '@/css/PhotoForm.css'
</style>
