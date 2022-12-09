
<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import IMage from '../components/IMage.vue'

export default defineComponent({
  name: 'ImagesPage',
  components: {
    IMage,
  },
  data() {
    return {
      selectedPage: 1,
      perPage: 10,
      searchString: '',
      oldSearchString: '',
      images: null,
      loading: true,
      imagesLoaded: [],
    }
  },
  computed: {
    ...mapGetters(['getImages', 'getAlbum']),
    currentAlbum() {
      return this.$route.params?.album?.length ? this.$route.params.album : this.getAlbum
    },
    iMages() {
      const selectedPage = this.getSelectedPageImages()

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
      return (this.images ?? this.getImages)?.length
    },
  },
  updated() {
    this.imagesLoaded = []
  },
  mounted() {
    // console.log({ mounted: this.$route.params?.album })
    this.startLoading()
    this.$store.commit('album', this.$route.params?.album)
    this.$store.dispatch('setAlbum')
    this.$store.dispatch('setImages')
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
    search(event, clear) {
      console.log('search')
      this.startLoading()
      this.perPage = 10
      this.selectedPage = 1
      if (clear) {
        this.searchString = ''
        this.images = this.getImages
      } else if (this.searchString !== '' && this.oldSearchString !== this.searchString) {
        this.images = this.searchImages(this.images, this.searchString)
      }
      this.oldSearchString = this.searchString
    },
    searchImages(images, searchString = '') {
      return (images ?? this.images ?? this.getImages).filter((i) => {
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
    startLoading() {
      this.imagesLoaded = []
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2500)
    },
    selectPerPageCount(event: any) {
      this.selectedPage = 0
      this.perPage = event.target.value
    },
    getSelectedPageImages(images = null) {
      return (images ?? this.images ?? this.getImages).slice(
        (this.selectedPage - 1) * this.perPage,
        this.selectedPage * this.perPage
      )
    },
    imageLoaded(loadedImageId:number) {
      const imageNotLoaded = this.imagesLoaded.indexOf(loadedImageId) === -1

      if (imageNotLoaded) {
        // console.log('image loaded', loadedImageId)
        this.imagesLoaded.push(loadedImageId)
      }

      const currentImages = this.getSelectedPageImages()
      if (this.imagesLoaded.length === currentImages.length) {
        const allImagesLoaded = currentImages.reduce(
          (loaded, i) => loaded && this.imagesLoaded.indexOf(i.id) !== -1,
          true
        )
        if (allImagesLoaded) {
          // console.log('all images loaded')
          this.loading = false
        }
      }
    },
  },
})
</script>

<template>
  <div class="container">
    <h3>Images for the album ({{ currentAlbum }})</h3>
    <div class="row justify-content-md-center">
      <div class="col col-md-auto">
        <b-input-group class="search">
          <template #prepend>
            <b-input-group-text v-if="!searchString?.length">Search</b-input-group-text
            ><b-input-group-text v-if="searchString?.length">
              <b-button class="clear" @click="clearSearch">X</b-button>
            </b-input-group-text>
          </template>
          <b-form-input
            v-model="searchString"
            type="search"
            placeholder="id or title or desc"
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
      @change="startLoading"
    ></b-pagination>
    <b-overlay :show="loading">
      <ul id="itemList" class="list-unstyled">
        <li v-for="imageList in iMages" :key="imageList[0].id">
          <b-row>
            <i-mage
              v-if="imageList[0]"
              :image="imageList[0]"
              @load="imageLoaded(imageList[0].id)"
            />
            <i-mage
              v-if="imageList[1]"
              :image="imageList[1]"
              @load="imageLoaded(imageList[1].id)"
            />
          </b-row>
        </li>
      </ul>
    </b-overlay>
    <b-pagination
      v-model="selectedPage"
      :total-rows="count"
      :per-page="perPage"
      aria-controls="itemList"
      align="center"
      pills
      @change="startLoading"
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

button.clear {
  font-size: 0.5em;
}
</style>
