<template>
  <component :is="wrapper" :class="['checkbox', state]" :dir="dir">
    <input
      :id="id"
      :name="name"
      :checked="checked"
      :value="value"
      :disabled="state === 'disabled'"
      type="checkbox"
      @change="handleClick"
    />
    <label :for="id" class="checkbox-label"><slot /></label>
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import validatorReg from '../utils/validatorReg'
/**
 * Checkboxes are generally used for interface actions. Suitable for all-purpose usevent
 * Defaults to appearance that has white background with grey border.
 */
const Checkbox = defineComponent({
  name: 'Checkbox',
  status: 'ready',
  release: '0.0.1',
  props: {
    /**
     * The html element name used for the wrapper.
     * `div, section`
     */
    wrapper: {
      type: String,
      default: 'div',
      validator: validatorReg(/(div|section)/),
    },
    /**
     * Unique identifier of the checkbox.
     */
    id: {
      type: String,
      default: null,
    },
    /**
     * Name of the checkbox.
     */
    name: {
      type: String,
      default: null,
    },
    /**
     * Value of the checkbox.
     */
    value: {
      type: String,
      required: true,
    },
    /**
     * Manually trigger various states of the checkbox.
     * `disabled, error`
     */
    state: {
      type: String,
      default: null,
      validator: validatorReg(/(disabled|error)/),
    },
    /**
     * Whether the checkbox is checked or not.
     * `true, false`
     */
    checked: {
      type: Boolean,
      default: false,
    },
    /**
     * Whether the checkbox is indeterminate or not.
     * `true, false`
     */
    indeterminate: {
      type: Boolean,
      default: false,
    },
    /**
     * The display direction.
     * `ltr, rtl`
     */
    dir: {
      type: String,
      default: 'ltr',
      validator: validatorReg(/(ltr|rtl)/),
    },
  },
  mounted() {
    if (this.indeterminate) {
      const checkbox = this.getCheckbox()
      checkbox.indeterminate = true
    }
  },
  methods: {
    handleClick(event: Event) {
      if (this.indeterminate) {
        const checkbox = this.getCheckbox()
        checkbox.indeterminate = false
      }
      setTimeout(() => {
        this.$emit('change', this.value, event)
      }, 100)
    },
    getCheckbox() {
      if (this.id) {
        return document.getElementById(this.id)
      }
      const list = document.getElementsByTagName('input') as unknown as any[]
      return list.find((c: any) => c.type === 'checkbox')
    },
  },
})

export default Checkbox
</script>

<style lang="scss" scoped>
.checkbox {
  align-items: flex-start;
  display: inline-flex;

  input[type='checkbox'] {
    -webkit-appearance: none;
    background-color: $color-white;
    border: 1px solid $color-grey;
    border-radius: $radius-sm;
    cursor: pointer;
    display: inline-block;
    margin: 0;
    outline: none;
    padding: 9px;
    position: relative;

    &:checked {
      background-color: $color-blue;
      border-color: $color-blue;
    }

    &:checked::after {
      border: solid $color-white;
      border-width: 0 2px 2px 0;
      content: '';
      height: 8px;
      position: absolute;
      right: 6px;
      top: 3px;
      -moz-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      width: 5px;
    }

    &:indeterminate {
      background-color: $color-blue;
      border-color: $color-blue;

      &::after {
        border-top: 2px solid $color-white;
        content: '';
        position: absolute;
        right: 3px;
        top: 8px;
        width: 12px;
      }
    }

    & + label {
      color: $color-black;
      cursor: pointer;
      display: inline-flex;
      font-family: $type-font;
      font-size: $type-size-body;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      font-weight: $type-font-normal;
      padding: 0 $space-xxs;
    }
  }

  &.error {
    input[type='checkbox'] {
      border-color: $color-red;
    }
  }

  &.disabled {
    pointer-events: none;

    input[type='checkbox'] {
      border-color: $color-black;
      opacity: 0.2;

      &:checked {
        background-color: $color-blue;
        border-color: $color-blue;
      }

      & + label {
        color: $color-grey;
      }
    }
  }
}
</style>
