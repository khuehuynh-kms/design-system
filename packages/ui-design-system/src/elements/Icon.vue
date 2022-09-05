<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<template>
  <component
    :is="type"
    :aria-label="ariaLabel"
    :class="['icon', size]"
    v-html="svg"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import token from '../assets/themes/colors.json'

/**
 * Icons are used to visually communicate core parts of the product and
 * available actions. They can act as wayfinding tools to help users more
 * easily understand where they are in the product.
 */
const Icon = defineComponent({
  name: 'Icon',
  status: 'review',
  release: '0.0.1',
  props: {
    /**
     * The name of the icon to display.
     */
    name: {
      type: String,
      required: true,
      default: 'globe',
    },
    /**
     * The fill color of the SVG icon.
     * Default to `$color-black`
     */
    fill: {
      type: String,
      default: token.color_black,
    },
    /**
     * The stroke color of the SVG icon.
     * Default to `$color-black`
     */
    stroke: {
      type: String,
      default: token.color_black,
    },
    // svg: {
    //   type: String,
    //   default: '',
    // },
    /**
     * Descriptive text to be read to screenreaders.
     */
    ariaLabel: {
      type: String,
      default: 'icon',
    },
    /**
     * The html element name used for the icon.
     */
    type: {
      type: String,
      default: 'span',
    },
    /**
     * The size of the icon. Defaults to medium.
     * `small, medium, large, xlarge`
     */
    size: {
      type: String,
      default: 'medium',
      validator: (value: string): boolean => {
        return Boolean(value.match(/(small|medium|large|xlarge|custom)/))
      },
    },
  },
  data() {
    return {
      svg: '', //The svg raw content.
    }
  },
  async beforeMount() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const _this = this
    await new Promise(function (resolve) {
      const name = _this.name

      import(`../assets/icons/${name}.svg?raw`).then(function ({
        default: icon,
      }) {
        _this.svg = icon
          .replace(/svg-fill/g, `fill="${_this.fill}"`)
          .replace(/stroke/g, `stroke="${_this.stroke}"`)

        resolve(true)
      })
    })
  },
})

export default Icon
</script>

<style lang="scss">
// We don’t want to use scoped since these styles need to cascade down to SVGs.
// We also want to be able to style .icon inside buttons etc.
.icon {
  @include reset;

  &.xlarge svg {
    height: 40px;
    width: 40px;
  }

  &.large svg {
    height: 30px;
    width: 30px;
  }

  &.medium svg {
    height: 20px;
    width: 20px;
  }

  &.small svg {
    height: 10px;
    width: 10px;
  }
}
</style>
