
<script setup lang="ts">
import { ref, computed, onMounted, onUpdated } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import IMage from '../components/IMage.vue'

const store = useStore()
const route = useRoute()

const selectedPage = ref(1)
const perPage = ref(10)
const searchString = ref('')
const oldSearchString = ref('')
const images = ref(null)
const loading = ref(true)
const imagesLoaded = ref([])

const currentAlbum = computed(() => {
  return route.params?.album?.length ? route.params.album : store.getters.getAlbum
})
const iMages = computed(() => {
  const selectedPage = getSelectedPageImages()

  // number of columns
  const columns = 2

  return selectedPage.reduce((pageRows: any[], item: any, index: any) => {
    if (index % columns === 0) {
      pageRows.push([])
    }
    pageRows[pageRows.length - 1].push(item)
    return pageRows
  }, [])
})

const count = computed(() => {
  return (images.value ?? store.getters.getImages)?.length
})

onUpdated(() => {
  imagesLoaded.value = []
})
onMounted(() => {
  // console.log({ mounted: router.params?.album })
  startLoading()
  store.commit('album', route.params?.album)
  store.dispatch('setAlbum')
  store.dispatch('setImages')
})

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
function search(event?: Event, clear: boolean = false) {
  console.log('search')
  startLoading()
  perPage.value = 10
  selectedPage.value = 1
  if (clear) {
    searchString.value = ''
    images.value = store.getters.getImages
  } else if (searchString.value !== '' && oldSearchString.value !== searchString.value) {
    images.value = searchImages(images.value, searchString.value)
  }
  oldSearchString.value = searchString.value
}
function searchImages(images: any, searchString = '') {
  return (images ?? images.value ?? store.getters.getImages).filter((i) => {
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
function startLoading() {
  imagesLoaded.value = []
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2500)
}
function selectPerPageCount(event: any) {
  selectedPage.value = 0
  perPage.value = event.target.value
}
function getSelectedPageImages(images: any = null) {
  return (images?.value ?? store.getters.getImages).slice(
    (selectedPage.value - 1) * perPage.value,
    selectedPage.value * perPage.value
  )
}
function imageLoaded(loadedImageId: any) {
  const imageNotLoaded = imagesLoaded.value.indexOf(loadedImageId) === -1

  if (imageNotLoaded) {
    // console.log('image loaded', loadedImageId)
    imagesLoaded.value.push(loadedImageId)
  }

  const currentImages = getSelectedPageImages()
  if (imagesLoaded.value.length === currentImages.length) {
    const allImagesLoaded = currentImages.reduce(
      (loaded: any, i: any) => loaded && imagesLoaded.value.indexOf(i.id) !== -1,
      true
    )
    if (allImagesLoaded) {
      // console.log('all images loaded')
      loading.value = false
    }
  }
}
</script>

<template>
  <div class="container">
    <h3>Images for the album ({{ currentAlbum }})</h3>
    <div class="row justify-content-md-center">
      <div class="col col-md-auto">
        <b-input-group class="search">
          <template #prepend>
            <b-input-group-text v-if="!searchString?.length">Search</b-input-group-text><b-input-group-text
              v-if="searchString?.length">
              <b-button class="clear" @click="clearSearch">X</b-button>
            </b-input-group-text>
          </template>
          <b-form-input v-model="searchString" type="search" placeholder="id or title or desc"
            @keyup="searchKeyup"></b-form-input>
          <template #append>
            <b-button type="button" class="btn" @click="search">🔎</b-button>
          </template>
        </b-input-group>
      </div>
    </div>
    <b-pagination v-model="selectedPage" :total-rows="count" :per-page="perPage" aria-controls="itemList" align="center"
      pills @change="startLoading"></b-pagination>
    <b-overlay :show="loading">
      <ul id="itemList" class="list-unstyled">
        <li v-for="imageList in iMages" :key="imageList[0].id">
          <b-row>
            <i-mage v-if="imageList[0]" :image="imageList[0]" @load="imageLoaded(imageList[0].id)" />
            <i-mage v-if="imageList[1]" :image="imageList[1]" @load="imageLoaded(imageList[1].id)" />
          </b-row>
        </li>
      </ul>
    </b-overlay>
    <b-pagination v-model="selectedPage" :total-rows="count" :per-page="perPage" aria-controls="itemList" align="center"
      pills @change="startLoading"></b-pagination>
  </div>
</template>

<style scoped>
.search {
  text-align: center;
}

input[type='search'] {
  max-width: 200px;
}

button.clear {
  font-size: 0.5em;
}
</style>
