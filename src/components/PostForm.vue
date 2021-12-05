<template>
  <b-container>
    <span>Post Tag</span>
    <div>
      <span>This is what your post look like</span>
    </div>
    <div>
      <b-button class="w-100 submit-btn bg-go-post border-0" @click="submit">
        Post New Tag To Reddit For me &nbsp; <i class="fas fa-check-square" />
      </b-button>
      <span>
        Uploading to BideTag.Org requires that you agree to the terms and conditions set by the
        BikeTag Project
      </span>
    </div>
  </b-container>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MysteryForm',
  methods: {
    goNextStep() {
      this.$store.dispatch('incFormStep')
    },
  },
})
</script>
<style scoped>
.found-img {
  float: left;
}

.mystery-img {
  float: right;
}
</style>
