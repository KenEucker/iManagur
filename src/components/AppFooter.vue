<template>
  <div class="container full bottom">
    <footer class="footer container my-5">
      <!--Section: Content-->
      <section>
        <p class="copyright">
          iManagur is an open source application
          <a href="https://github.com/KenEucker/iManagur">developed on github</a>
        </p>
      </section>
      <!--Section: Content-->
    </footer>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageFooter',
})
</script>
<style scoped>
.back-to-home a i {
  font-size: 5em;
}

.container.bottom {
  padding-bottom: 4vh;
  max-width: 100%;
}
</style>
