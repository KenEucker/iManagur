<template>
  <app-header />
  <router-view />
  <app-footer />
</template>
<script>
import { defineComponent } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default defineComponent({
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
})
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-size: cover;
  background-color: #f8f9fa;
}

.card-body {
  border-radius: 0.25rem;
}
</style>
