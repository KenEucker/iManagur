<template>
  <div
    class="editable-image"
    :class="{
      expanded: expanded,
    }"
    @click="expanded = true"
  >
    <i v-if="expanded" class="close-button shadow fill-white">
      <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
        <path
          fill="#666666"
          d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
        />
      </svg>
    </i>
    <i v-if="!expanded" class="expand-button">
      <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
        <path
          fill="#000000"
          d="M10,21V19H6.41L10.91,14.5L9.5,13.09L5,17.59V14H3V21H10M14.5,10.91L19,6.41V10H21V3H14V5H17.59L13.09,9.5L14.5,10.91Z"
        />
      </svg>
    </i>
    <img class="img-fluid" :src="image.link" v-bind="$attrs" @load="onImgLoad" />
    <div v-if="expanded" class="editable-fields">
      <fieldset class="fields">
        <legend>Editable Fields</legend>
        <div v-for="(input, index) in fields" :key="`field-${index}`">
          <div class="row">
            <label :for="input.name">{{ input.name }}</label>
          </div>
          <div class="row">
            <b-form-textarea
              v-if="input.type === 'text'"
              v-model="input.value"
              :type="input.type"
              :name="input.name"
            >
            </b-form-textarea>
          </div>
        </div>
      </fieldset>
      <i v-if="expanded" class="save-button">
        <svg
          class="checkmark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
          @click="saveFields"
        >
          <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
        </svg>
      </i>
    </div>
  </div>
</template>
<script type="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'EditableImage',
  props: {
    image: {
      type: Object,
      default: () => {
        return {}
      },
    },
    fields: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  emits: ['save-fields', 'load'],
  data() {
    return {
      expanded: false,
      closeButtonRef: null,
      isLoaded: false,
    }
  },
  watch: {
    expanded(status) {
      this.$nextTick(() => {
        if (status) {
          this.cloned = this.$el.cloneNode(true)
          this.closeButtonRef = this.cloned.querySelector('.close-button')
          this.closeButtonRef.addEventListener('click', this.closeImage)
          document.body.appendChild(this.cloned)
          document.body.style.overflow = 'hidden'
          this.cloned.addEventListener('touchmove', this.freezeVp, false)
          setTimeout(() => {
            this.cloned.style.opacity = 1
          }, 0)
        } else {
          this.cloned.style.opacity = 0
          this.cloned.removeEventListener('touchmove', this.freezeVp, false)
          setTimeout(() => {
            this.closeButtonRef.removeEventListener('click', this.closeImage)
            this.cloned.remove()
            this.cloned = null
            this.closeButtonRef = null
            document.body.style.overflow = 'auto'
          }, 250)
        }
      })
    },
  },
  mounted() {
    const viewportMeta = document.createElement('meta')
    viewportMeta.name = 'viewport'
    viewportMeta.content = 'width=device-width, initial-scale=1'
    document.head.appendChild(viewportMeta)
  },
  methods: {
    saveFields() {
      console.log('saving fields', this.fields)
      this.$emit('save-fields', this.fields)
    },
    closeImage(event) {
      this.expanded = false
      event.stopPropagation()
    },
    freezeVp(e) {
      e.preventDefault()
    },
    onImgLoad () {
      this.isLoaded = true
      // console.log('editable-image loaded', this.image.id)
      this.$emit('load')
    },
  },
})
</script>
<style scoped>
.editable-image {
  position: relative;
  transition: 0.25s opacity;
  cursor: zoom-in;
}

body > .editable-image.expanded {
  position: fixed;
  z-index: 999999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  display: flex;
  align-items: center;
  opacity: 0%;
  padding-bottom: 0 !important;
  cursor: default;
}

.close-button {
  position: fixed;
  top: 10px;
  right: 10px;
  display: none;
  cursor: pointer;
}

body > .editable-image.expanded > img {
  width: 100%;
  max-width: 1200px;
  max-height: 100%;
  object-fit: contain;
  margin-right: 50%;
}

body > .editable-image.expanded > .close-button {
  display: block;
}

.editable-image svg.shadow {
  filter: drop-shadow(1px 1px 1px rgb(0 0 0 / 50%));
}

.editable-image svg.fill-white path {
  fill: #fff;
}

.expand-button {
  position: absolute;
  z-index: 999;
  right: 10px;
  top: 10px;
  padding: 0;
  align-items: center;
  justify-content: center;
  padding: 3px;
  opacity: 0%;
  transition: 0.2s opacity;
}

.editable-image:hover .expand-button {
  opacity: 100%;
}

.expand-button svg {
  width: 20px;
  height: 20px;
}

.expand-button path {
  fill: #fff;
}

img {
  width: 100%;
}

.editable-fields {
  width: 39vw;
  height: 80%;
  padding: 1em;
  position: fixed;
  right: 2vw;
  background-color: rgb(255 255 255 / 80%);
}

.img-wrapper {
  position: relative;
}

.img-wrapper > .image-title {
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

.img-wrapper > .image-description {
  position: absolute;
  right: 1rem;
  bottom: 0;
  font-family: AshesAshes;
  font-size: 5vh;
  color: white;
  text-shadow: 2px 2px #292828e6;
  z-index: 99;
}

.save-button {
  position: fixed;
  right: 5vw;
  cursor: pointer;
  bottom: 100px;
}

.checkmark {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: block;
  stroke-width: 2;
  stroke: green;
  stroke-miterlimit: 10;
  stroke-dashoffset: 0;
  margin: 10% auto;
}
</style>
