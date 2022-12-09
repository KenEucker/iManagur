import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { AlbumData, ImageData } from 'imgur/lib/common/types'
import { ImgurCredentials } from 'imgur'
import ImgurClient from 'imgur'

// define your typings for the store state
export interface State {
  account: string
  album: string
  images: ImageData[]
  albums: AlbumData[]
  credentials: Partial<ImgurCredentials>
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

const imgurOpts: ImgurCredentials = {
  /// TODO: set these in a menu
  clientId: '47da78be7590eaa',
}
console.log({ imgurOpts })
const imgur = new ImgurClient(imgurOpts)

export const store = createStore<State>({
  state: {
    account: 'Biketag',
    album: '',
    images: [],
    albums: [],
    credentials: imgurOpts,
  },
  getters: {
    getAccount(state) {
      return state.account
    },
    getImages(state) {
      return state.images
    },
    getAlbum(state) {
      return state.album
    },
    getAlbums(state) {
      return state.albums
    },
  },
  mutations: {
    credentials(state, credentials) {
      state.credentials = credentials
      // console.log({ setCredentials: credentials })
    },
    account(state, account) {
      state.account = account
      // console.log({ setAccount: account })
    },
    album(state, album) {
      state.album = album
      // console.log({ setAlbum: album })
    },
    albums(state, albums) {
      state.albums = albums
      console.log({ setAlbums: albums })
    },
    images(state, images) {
      state.images = images
      console.log({ setImages: images })
    },
  },
  actions: {
    setCredentials({ commit }) {
      commit('credentials', {
        clientId: '47da78be7590eaa',
      })
    },
    setAccount({ commit, state }) {
      commit('account', state.account)
    },
    setAlbum({ commit, state }) {
      commit('album', state.album)
    },
    setAlbums({ commit, state }) {
      if (state.account) {
        console.log(state.account)
        imgur.getAlbums(state.account).then((albumsData) => {
          const albums = albumsData?.data?.length ? albumsData.data : []
          commit('albums', albums)
        })
      } else {
        console.log('[setAlbums] no account set', state.album)
        commit('albums', [])
      }
    },
    setImages({ commit, state }) {
      if (state.album) {
        imgur.getAlbum(state.album).then((albumData) => {
          const images = albumData?.data?.images?.length ? albumData.data.images : []
          commit('images', images)
        })
      } else {
        console.log('[setImages] no album set', state.album)
        commit('images', [])
      }
    },
  },
  modules: {},
})
