<template>
  <div v-if="isHelloWorld" class="p-2">
    <b-button class="menu-button" variant="primary" @click="goBack">
      <i class="fa fa-long-arrow-alt-left" />
    </b-button>
  </div>
  <div class="container mb-4">
    <div class="header-logo">
      <a href="./">
        <img class="logo img-fluid" src="images/iManagur.png" />
      </a>
      <div>
        <h1>iManagur</h1>
        <h2 class="pronunciation">
          (<a>aye</a> ‧
          <!-- (<a href="https://en.wiktionary.org/wiki/eye">aye</a> ‧ -->
          <a>ma‧na</a> ‧
          <!-- <a href="https://en.wiktionary.org/wiki/mana">ma‧na</a> ‧ -->
          <a>grrr</a>)
          <!-- <a href="https://en.wiktionary.org/wiki/grrr">grrr</a>) -->
        </h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'

export default defineComponent({
  name: 'HeaderTemplate',
  computed: {
    isHelloWorld() {
      return this.$route.name === 'Hello' ? false : true
    },
    ...mapGetters(['getAccount', 'getAlbum', 'getImages', 'getLogo']),
  },
  methods: {
    helloPage: function () {
      this.$router.push('/')
    },
    goBack: function () {
      this.$router.back()
    },
  },
})
</script>
<style scoped>
.header-logo .logo {
  width: 8rem;
  height: 8rem;
  line-height: 8rem;
  margin: auto;
}

.menu-button {
  width: 40px;
  height: 40px;
  border-radius: 30px;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
}

.pronunciation a {
  text-decoration: none;
  color: unset;
}

.pronunciation {
  padding-bottom: 1em;
  margin-top: -1em;
  font-size: 1em;
  font-style: italic;
}
</style>
