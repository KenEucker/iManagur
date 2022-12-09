<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'

export default defineComponent({
  name: 'AlbumsPage',
  data() {
    return {
      selectedPage: 1,
      perPage: 10,
      searchString: '',
      oldSearchString: '',
      albums: null,
    }
  },
  computed: {
    ...mapGetters(['getAlbums', 'getAccount']),
    albumsList() {
      const selectedPage = (this.albums ?? this.getAlbums).slice(
        (this.selectedPage - 1) * this.perPage,
        this.selectedPage * this.perPage
      )

      // number of columns
      const columns = 2

      const pages = selectedPage.reduce((pageRows, item, index) => {
        if (index % columns === 0) {
          pageRows.push([])
        }
        pageRows[pageRows.length - 1].push(item)
        return pageRows
      }, [])

      return pages
    },
    count() {
      return (this.albums ?? this.getAlbums)?.length
    },
  },
  mounted() {
    this.$store.dispatch('setAlbums')
  },
  methods: {
    searchKeyup(event) {
      if (
        (this.searchString.length !== this.oldSearchString.length ||
          this.searchString.length === 0) &&
        event.code === 'Enter'
      ) {
        this.search(event, this.searchString.length === 0)
      }
    },
    clearSearch() {
      this.search(undefined, true)
    },
    goToImagesPage(album = '') {
      this.$store.commit('album', album)
      this.$router.push({ path: `/albums/${album}` })
    },
    search(event, clear) {
      console.log('search', { clear })
      this.perPage = 10
      this.selectedPage = 1
      if (clear) {
        this.searchString = ''
        this.albums = this.getAlbums
      } else if (this.searchString !== '' && this.oldSearchString !== this.searchString) {
        this.albums = this.searchAlbums(this.albums, this.searchString)
      }
      this.oldSearchString = this.searchString
    },
    searchAlbums(albums, searchString = '') {
      return (albums ?? this.albums ?? this.getAlbums).filter((i) => {
        const lowerCaseId = i.id?.toLowerCase() ?? ''
        const lowerCaseTitle = i.title?.toLowerCase() ?? ''
        const lowerCaseDescription = i.description?.toLowerCase() ?? ''
        const lowerCaseSearchString = searchString.toLowerCase()
        const foundResultInId = lowerCaseId.indexOf(lowerCaseSearchString) !== -1
        const foundResultInTitle = lowerCaseTitle.indexOf(lowerCaseSearchString) !== -1
        const foundResultInDescription = lowerCaseDescription.indexOf(lowerCaseSearchString) !== -1

        return foundResultInId || foundResultInTitle || foundResultInDescription
      })
    },
    selectPerPageCount(event) {
      this.selectedPage = 0
      this.perPage = event.target.value
    },
    selectPage(event) {
      this.selectedPage = event.target.text - 1
    },
  },
})
</script>

<template>
  <div class="container">
    <h3>Albums for the account ({{ getAccount }})</h3>
    <div class="row justify-content-md-center">
      <div class="col col-md-auto">
        <b-input-group class="search">
          <template #prepend>
            <b-input-group-text v-if="!searchString?.length">Search</b-input-group-text>
            <b-input-group-text v-if="searchString?.length">
              <b-button class="clear" @click="clearSearch">X</b-button>
            </b-input-group-text>
          </template>
          <b-form-input
            v-model="searchString"
            type="search"
            placeholder="search by title or id"
            @keyup="searchKeyup"
          ></b-form-input>
          <template #append>
            <b-button type="button" class="btn" @click="search">🔎</b-button>
          </template>
        </b-input-group>
      </div>
    </div>
    <b-pagination
      v-model="selectedPage"
      :total-rows="count"
      :per-page="perPage"
      aria-controls="itemList"
      align="center"
      pills
    ></b-pagination>
    <ul id="itemList" class="list-unstyled">
      <li v-for="albumList in albumsList" :key="albumList[0].id">
        <b-row>
          <b-col :md="6" class="mb-3">
            <b-card v-if="albumList[0]" class="card" @click="goToImagesPage(albumList[0].id)">
              <span>{{ albumList[0].title }}</span>
              <img :src="`https://i.imgur.com/${albumList[0].cover}m.jpg`" />
            </b-card>
          </b-col>
          <b-col :md="6" class="mb-3">
            <b-card v-if="albumList[1]" class="card" @click="goToImagesPage(albumList[1].id)">
              <span>{{ albumList[1].title }}</span>
              <img :src="`https://i.imgur.com/${albumList[1].cover}m.jpg`" />
            </b-card>
          </b-col>
        </b-row>
      </li>
    </ul>
    <b-pagination
      v-model="selectedPage"
      :total-rows="count"
      :per-page="perPage"
      aria-controls="itemList"
      align="center"
      pills
    ></b-pagination>
  </div>
</template>

<style scoped>
.search {
  text-align: center;
}

input[type='search'] {
  max-width: 200px;
}

.card {
  background-color: rgb(0 0 0 / 0%);
  border: none;
  align-items: center;
  cursor: pointer;
}

.card > div {
  align-self: center;
}

.card > div > * {
  display: block;
}

.card img {
  border-radius: 10%;
}

button.clear {
  font-size: 0.5em;
}
</style>
