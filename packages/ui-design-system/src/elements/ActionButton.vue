<template>
  <component :is="wrapper" :class="[classes]" :dir="dir">
    <div ref="button" class="action-button__button" @click="openClose">
      <Button size="small">
        <Icon name="kabob-vertical" :fill="iconColor" :stroke="iconColor" />
      </Button>
    </div>
    <div :class="['action-button__actions', side]">
      <div
        v-for="(action, index) in actions"
        :key="index"
        class="action-button__action"
        @click="emitCallback(action.callback)"
      >
        {{ action.label }}
      </div>
    </div>
    <span>{{ version }}</span>
  </component>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'

import colors from '../assets/themes/colors.json'

/**
 * Action buttons are used when a set of contextual actions are needed for an
 * element or a dataset. This button displays a set of actions inside a dropdown
 * menu. The actions must be sorted in a specific way.
 *
 * **Instructions**
 *
 * Add `v-on:action="yourCallback"`.
 *
 * ```
 * // In template.
 * <ActionButton :actions="[{label: 'Edit', callback: 'edit'}]" v-on:action="yourCallback" />
 *
 * // In methods.
 * yourCallback(callback) {
 *  // trigger your methods based on the callback name.
 *  if (callback === 'edit') {
 *    this.doSomething();
 *  }
 * }
 *
 * doSomething() {
 *  // execute your action.
 * }
 * ```
 */

type ActionProp = {
  label: string
  callback: VoidFunction
}

const ActionButton = defineComponent({
  name: 'ActionButton',
  status: 'ready',
  release: '0.0.1',
  props: {
    /**
     * The html element used for the action button.
     * `div`
     */
    wrapper: {
      type: String,
      default: 'div',
      validator: (value: string): boolean => {
        return Boolean(value.match(/(div)/))
      },
    },
    /**
     * The action items. Each item (object) contains:
     * `label, callback`
     */
    actions: {
      type: Array as PropType<ActionProp[]>,
      default: () => [
        {
          label: null,
          callback: null,
        },
      ],
    },
    /**
     * The side the actions should open on.
     * `left, right`
     */
    side: {
      type: String,
      default: 'left',
      validator: (value: string): boolean =>
        Boolean(value.match(/(left|right)/)),
    },
    /**
     * The display direction.
     * `ltr, rtl`
     */
    dir: {
      type: String,
      default: 'ltr',
      validator: (value: string): boolean => Boolean(value.match(/(ltr|rtl)/)),
    },
    version: {
      type: String,
      default: 'ActionButton_orinal',
    },
  },
  data() {
    return {
      open: false,
      iconColor: colors.color_grey,
    }
  },
  computed: {
    classes() {
      const result = ['action-button']
      !this.isOpen && result.push('action-button--closed')
      this.isOpen && result.push('action-button--open')
      return result
    },
    isOpen: {
      get(): boolean {
        return this.open
      },
      set(newValue: boolean) {
        this.open = newValue
      },
    },
  },
  created() {
    document.addEventListener('click', this.documentClick)
  },
  unmounted() {
    document.removeEventListener('click', this.documentClick)
  },
  methods: {
    openClose() {
      if (this.open) {
        this.isOpen = false
      } else if (!this.open) {
        this.isOpen = true
      }
    },
    emitCallback(callback: VoidFunction) {
      this.$emit('action', callback)
    },
    documentClick(event: Event) {
      const el: any = this.$refs.button
      const { target } = event
      if (el !== target && !el.contains(target)) {
        this.isOpen = false
      }
    },
  },
})

export default ActionButton
</script>

<style lang="scss" scoped>
.action-button {
  display: inline-flex;
  position: relative;

  &__actions {
    background-color: $color-white;
    border-radius: $radius-sm;
    box-shadow: $shadow-sm;
    padding: $space-xs $space-sm;
    position: absolute;
    top: $space-sm + $space-xxs;
    z-index: 2;

    &.left {
      right: $space-xs + $space-xxs;
    }

    &.right {
      left: $space-xs + $space-xxs;
    }
  }

  &__action {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    white-space: nowrap;

    &:not(:last-child) {
      margin-bottom: $space-xs;
    }
  }

  &--closed {
    .action-button__actions {
      display: none;
    }

    .button {
      background-color: $color-white;
    }
  }

  &--open {
    .action-button__actions {
      display: inline-block;
    }

    .button {
      background-color: $color-lightest;
    }
  }

  &__button {
    display: inline-block;

    .button.small {
      padding: $space-xxs $space-xs;
      width: 30px;
      z-index: 1;

      &:hover,
      &:focus {
        background-color: $color-lightest;
      }
    }
  }
}
</style>
