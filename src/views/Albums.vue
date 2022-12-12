<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const router = useRouter()

const store = useStore()
const selectedPage = ref(1)
const perPage = ref(10)
const searchString = ref('')
const oldSearchString = ref('')
const albums = ref(store.getters.getAlbums)

onMounted(async () => {
  await store.dispatch('setAlbums')
})

const albumsList = computed(() => {
  const currentSelectedPage = (albums.value).slice(
    (selectedPage.value - 1) * perPage.value,
    selectedPage.value * perPage.value
  )

  // number of columns
  const columns = 2

  const pages = currentSelectedPage.reduce((pageRows: any[], item: Number, index: any) => {
    if (index % columns === 0) {
      pageRows.push([])
    }
    pageRows[pageRows.length - 1].push(item)
    return pageRows
  }, [])

  return pages
})

const count = computed(() => albums.value?.length)

function search(event?: Event, clear: boolean = false) {
  console.log('search', { clear })

  perPage.value = 10
  selectedPage.value = 1
  if (clear) {
    searchString.value = ''
    albums.value = store.getters.getAlbums
  } else if (searchString.value !== '' && oldSearchString.value !== searchString.value) {
    albums.value = searchAlbums(albums.value, searchString.value)
  }
  oldSearchString.value = searchString.value
}
function searchKeyup(event: KeyboardEvent) {
  if (
    (searchString.value.length !== oldSearchString.value.length ||
      searchString.value.length === 0) &&
    event.code === 'Enter'
  ) {
    search(event, searchString.value.length === 0)
  }
}
function clearSearch() {
  search(undefined, true)
}
function goToImagesPage(album = '') {
  store.commit('album', album)
  router.push({ path: `/albums/${album}` })
}
function searchAlbums(albums: any, searchString = '') {
  return (albums ?? albums.value ?? store.getters.getAlbums).filter((i: any) => {
    const lowerCaseId = i.id?.toLowerCase() ?? ''
    const lowerCaseTitle = i.title?.toLowerCase() ?? ''
    const lowerCaseDescription = i.description?.toLowerCase() ?? ''
    const lowerCaseSearchString = searchString.toLowerCase()
    const foundResultInId = lowerCaseId.indexOf(lowerCaseSearchString) !== -1
    const foundResultInTitle = lowerCaseTitle.indexOf(lowerCaseSearchString) !== -1
    const foundResultInDescription = lowerCaseDescription.indexOf(lowerCaseSearchString) !== -1

    return foundResultInId || foundResultInTitle || foundResultInDescription
  })
}
function selectPerPageCount(event: any) {
  selectedPage.value = 0
  perPage.value = event.target.value
}
function selectPage(event: any) {
  selectedPage.value = event.target.text - 1
}
</script>

<template>
  <div class="container">
    <h3>Albums for the account ({{ store.getters.getAccount }})</h3>
    <div class="row justify-content-md-center">
      <div class="col col-md-auto">
        <b-input-group class="search">
          <template #prepend>
            <b-input-group-text v-if="!searchString?.length">Search</b-input-group-text>
            <b-input-group-text v-if="searchString?.length">
              <b-button class="clear" @click="clearSearch">X</b-button>
            </b-input-group-text>
          </template>
          <b-form-input v-model="searchString" type="search" placeholder="search by title or id"
            @keyup="searchKeyup"></b-form-input>
          <template #append>
            <b-button type="button" class="btn" @click="search">🔎</b-button>
          </template>
        </b-input-group>
      </div>
    </div>
    <b-pagination v-model="selectedPage" :total-rows="count" :per-page="perPage" aria-controls="itemList" align="center"
      pills></b-pagination>
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
    <b-pagination v-model="selectedPage" :total-rows="count" :per-page="perPage" aria-controls="itemList" align="center"
      pills></b-pagination>
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

.card>div {
  align-self: center;
}

.card>div>* {
  display: block;
}

.card img {
  border-radius: 10%;
}

button.clear {
  font-size: 0.5em;
}
</style>
