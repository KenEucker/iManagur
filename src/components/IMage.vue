<template>
  <b-col :md="6" class="mb-3">
    <b-card>
      <h6 class="image-title">{{ image.title }}</h6>
      <div class="img-wrapper">
        <EditableImage class="image img-fluid" :image="image" :fields="imageEditableFields"
          :save-fields="saveEditableFields" alt="image" @load="onImgLoad" />
      </div>
      <span class="image-description">{{ image.description }}</span>
    </b-card>
  </b-col>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import EditableImage from './EditableImage.vue'

export default defineComponent({
  name: 'IMage',
  components: {
    EditableImage,
  },
  props: {
    image: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  emits: ['load'],
  data() {
    return {
      isLoaded: false,
    }
  },
  computed: {
    imageEditableFields() {
      return [
        {
          name: 'title',
          type: 'text',
          value: this.image.title,
        },
        {
          name: 'description',
          type: 'text',
          value: this.image.description,
        },
      ]
    },
  },
  mounted() {
    const viewportMeta = document.createElement('meta')
    viewportMeta.name = 'viewport'
    viewportMeta.content = 'width=device-width, initial-scale=1'
    document.head.appendChild(viewportMeta)
  },
  methods: {
    saveEditableFields(fields: any[]) {
      console.log('save', fields)
    },
    onImgLoad() {
      this.isLoaded = true
      // console.log('i-mage loaded', this.image.id)
      this.$emit('load')
    },
  },
})
</script>
<style scoped>
.img-wrapper {
  position: relative;
}

.img-wrapper>.image-title {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  font-size: 5vh;
  font-weight: 500;
  color: white;
  text-shadow: 2px 2px #292828e6;
  background-color: rgb(0 0 0 / 75%);
  padding: 0 0.5rem;

  /* border-radius: 10px; */
}

.img-wrapper>.image-description {
  position: absolute;
  right: 1rem;
  bottom: 0;
  font-family: AshesAshes;
  font-size: 5vh;
  color: white;
  text-shadow: 2px 2px #292828e6;
  z-index: 99;
}
</style>
