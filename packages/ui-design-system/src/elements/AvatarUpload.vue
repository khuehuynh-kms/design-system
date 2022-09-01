<template>
  <component :is="wrapper" :class="classes">
    <div v-if="fileSizeError" class="avatar-upload__error">
      <Alert alert="danger">
        <div slot="text">{{ errorMessage }}</div>
      </Alert>
    </div>
    <div class="avatar-upload__image">
      <img
        class="preview"
        :src="internalValue"
        :width="previewSize[0]"
        :height="previewSize[1]"
      />
      <div v-if="!hideActions">
        <input
          id="file"
          type="file"
          class="input-file"
          @change="onFileUpdate"
        />
        <Button variation="secondary" @click="uploadFile">{{
          textUpdate
        }}</Button>
        <Button variation="secondary" @click="removeFile">{{
          textRemove
        }}</Button>
      </div>
      <div class="container">
        <div v-if="$slots.name" class="name">
          <slot name="name"></slot>
        </div>
        <div v-if="$slots.details" class="details">
          <slot name="details"></slot>
        </div>
      </div>
    </div>
  </component>
</template>

<script>
import i18n from '@/lang'
import { defineComponent } from 'vue'

/**
 * The AvatarUpload component is used to allow users to upload an avatar image.
 */
export default defineComponent({
  name: 'AvatarUpload',
  status: 'ready',
  release: '0.0.1.1',
  props: {
    /**
     * The default value.
     */
    value: {
      type: String,
      default: null,
    },
    /**
     * The html element name used for the wrapper.
     * `div, section`
     */
    wrapper: {
      type: String,
      default: 'div',
      validator: (value) => {
        return value.match(/(div|section)/)
      },
    },
    /**
     * Whether the avatar upload is disabled or not.
     * `true, false`
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Whether the avatar upload is required or not.
     * `true, false`
     */
    required: {
      type: Boolean,
      default: false,
    },
    /**
     * Sets the size of the file preview area.
     */
    previewSize: {
      type: Array,
      default: () => ['80px', '80px'],
    },
    /**
     * The users language.
     */
    language: {
      type: String,
      default: 'en-US',
    },
    /**
     * This is to hide the Upload image actions
     */
    hideActions: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      lazyValue: '',
      defaultAvatar:
        'https://res.cloudinary.com/padi/image/upload/f_auto/q_auto/v1576013790/global/avatar-default.png',
      fileSizeMax: 5242880,
      fileSizeError: false,
    }
  },
  computed: {
    classes() {
      let result = ['avatar-upload']
      this.disabled && result.push('disabled')
      return result
    },
    internalValue: {
      get() {
        if (this.value) {
          return this.value
        }
        if (this.lazyValue) {
          return this.lazyValue
        }
        return this.defaultAvatar
      },
      set(value) {
        this.lazyValue = value
        this.$emit('input', value)
      },
    },
    textUpdate() {
      return i18n.$language.messageInLanguage('update', this.language)
    },
    textRemove() {
      return i18n.$language.messageInLanguage('remove', this.language)
    },
    errorMessage() {
      return i18n.$language.messageInLanguage(
        'the_photo_exceeds_5mb_please_upload_a_photo_with_a_smaller_size',
        this.language,
      )
    },
  },
  watch: {
    value: function (newValue) {
      this.internalValue = newValue
    },
  },
  methods: {
    uploadFile() {
      document.getElementById('file').click()
    },
    removeFile() {
      this.internalValue = null
      localStorage.removeItem('imgData')
      this.fileSizeError = false
    },
    onFileUpdate(event) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const fileSize = this.getFileSize()
        if (fileSize > this.fileSizeMax) {
          this.fileSizeError = true
        } else {
          localStorage.setItem('imgData', reader.result)
          this.internalValue = localStorage.getItem('imgData')
          this.fileSizeError = false
        }
      }
      reader.readAsDataURL(event.target.files[0])
    },
    getFileSize() {
      let input, file
      input = document.getElementById('file')
      file = input.files[0]
      return file.size
    },
  },
})
</script>

<style lang="scss" scoped>
.preview {
  border-radius: 50%;
  object-fit: cover;
}

.input-file {
  display: none;
}

.avatar-upload {
  &__image {
    align-items: center;
    display: flex;

    button {
      margin-left: $space-xs;
    }

    .details {
      color: $color-grey;
      float: left;
      font-size: $type-size-h6-mobile;
      line-height: $line-height-small;
      margin-left: $space-xs;
      margin-top: $space-xxs;
      vertical-align: left;
    }

    .name {
      box-sizing: border-box;
      color: #000000;
      font-family: Noto Sans, Helvetica, Arial, sans-serif;
      font-size: $type_size_lead;
      font-style: normal;
      font-weight: $type-font-bold;
      margin: 0;
      margin-left: $space-xs;
      padding: 0;
    }

    .container {
      align-content: space-between;
      justify-content: space-between;
    }
  }

  &__error {
    margin-bottom: $space-sm;
  }
}
</style>

<docs>
  ```jsx
  <div>
    <h4>Default</h4>
    <AvatarUpload />
  </div>
  ```
</docs>
