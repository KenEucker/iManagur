<template>
  <div class="container">
    <!-- <img v-if="banner" src="{{ banner.link }}" alt="banner" /> -->
    <div class="hello-world">
      <Markdown />
    </div>
    <div>
      <div class="row justify-content-md-center">
        <div class="col col-md-auto">
          <b-input-group class="account-select">
            <template #prepend>
              <b-input-group-text>username</b-input-group-text>
            </template>
            <b-form-input
              v-model="currentAccount"
              type="text"
              placeholder="Imgur username"
              @keydown="currentAccountKeydown"
            ></b-form-input>
            <template #append>
              <b-button type="button" class="btn btn-success" @click="setAccount"
                >Get Albums</b-button
              >
            </template>
          </b-input-group>
          <!-- <b-button class="m-1" variant="primary" @click="imagesPage">Images</b-button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import Markdown from '../../readme.md'

export default defineComponent({
  name: 'HelloPage',
  components: {
    Markdown,
  },
  data() {
    return {
      oldAccount: '',
      currentAccount: '',
    }
  },
  computed: {
    ...mapGetters(['getImages']),
    banner() {
      console.log({ banner: this.images })
      return this.getImages?.length ? this.getImages[0] : []
    },
  },
  methods: {
    goAlbums: function () {
      console.log({ changingAccount: this.currentAccount })
      this.$store.commit('account', this.currentAccount)
      this.$router.push('/albums')
    },
    currentAccountKeydown(event: KeyboardEvent) {
      if (event.key === 'Enter' && this.currentAccount.length) {
        this.goAlbums()
      }
    },
    setAccount: function () {
      if (
        this.currentAccount.length &&
        this.currentAccount !== '' &&
        this.oldAccount !== this.currentAccount
      ) {
        console.log({ currentAccount: this.currentAccount })
        this.goAlbums()
      }
    },
  },
})
</script>
<style scoped>
.hello-world {
  background-color: honeydew;
}

.imgur {
  max-height: 1em;
}
</style>
