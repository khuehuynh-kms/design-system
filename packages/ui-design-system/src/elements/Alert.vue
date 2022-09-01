<template>
  <component :is="wrapper" v-if="show" :class="[classes, dir]">
    <div v-if="alert !== null" class="alert__bar"></div>

    <div class="alert__container">
      <div v-if="alert !== null" class="alert__icon">
        <Icon
          :name="alertStyle.icon"
          :fill="alertStyle.color"
          :stroke="alertStyle.color"
        />
      </div>

      <div class="alert__content">
        <div v-if="slotTitle" class="alert__title"><slot name="title" /></div>
        <div class="alert__text">
          <slot name="text" />
          <span v-if="slotLink" class="alert__link"><slot name="link" /></span>
        </div>
      </div>
    </div>
  </component>
</template>

<script>
import { defineComponent } from 'vue'
import colors from '@/assets/themes/colors.json'

/**
 * Alerts are notifications of mild to high priority. They may inform the user
 * about things they should know or explain a problem and the user a solution.
 * It may be triggered by a user action or not.
 *
 * **Do's**<br>
 * - Alerts should be shown at the top of the page or section they apply to,
 * filling the full container width respecting margins.
 *
 * - Do provide actions for users to address when it ads value to the user's
 * workflow. Alerts are also a helping hand.
 *
 * - You may use as a call-to-action whatever makes more sense to you: a button,
 *  a link, etc.
 *
 * - Do use semantic colors that have a clear and contextualized meaning in your
 *  application, but keep in mind that due to its mild to high priority, that
 * success message may not apply here. If that's the case, you might be looking
 * for Toasts.
 *
 * **Don'ts**<br>
 * - Never dismiss automatically an Alert. If dismissable, a user action is
 * required.
 *
 * ## Alert types
 *
 * **Information**<br>
 * Blue color. The default notification is usually used to give information that
 * doesn't require too much attention or action. They are typically not in
 * response to a user action.
 *
 * **Danger**<br>
 * Red color. Shows to the user that some process or task cannot be completed.
 * Error messages should be clear and objective, avoiding presenting technical
 * error codes. Whenever possible should present a solution or link indicating
 * the next step. (E.g.: "The last item could not be added. Please refresh the
 * page.").
 *
 * **Warning**<br>
 * Warning	Yellow color. They are usually in anticipation of a significant
 * change. Clearly communicate what will happen if the user proceed with the
 * action and provide an alternative where possible. (E.g.: "Your license is
 * about to expire. Please renew your license by August 5, 2019.").
 *
 * **Success**<br>
 * Green color. Provides a positive response to user actions.
 * (E.g.: "Professional added successfully.").
 *
 * ## In-page alerts
 *
 * In-page alerts alerts are meant for use in forms. Usually you will only need
 * to use the information one. Its width depends on the width of the container
 * it is placed in, always respecting the container margins to the content. The
 * close action is not required for embedded alerts.
 *
 * **Attributes**<br>
 *
 * 1. The status icon
 * 2. The type text
 * 3. The description text
 */
export default defineComponent({
  name: 'CommonAlert',
  status: 'prototype',
  release: '0.0.1',
  props: {
    /**
     * The html element name used for the wrapper.
     * `div`
     */
    wrapper: {
      type: String,
      default: 'div',
      validator: (value) => {
        return value.match(/(div)/)
      },
    },
    /**
     * The alert type.
     */
    alert: {
      type: String,
      default: 'info',
      validator: (value) => {
        return value.match(/(info|success|warning|danger)/)
      },
    },
    /**
     * The display direction.
     * `ltr, rtl`
     */
    dir: {
      type: String,
      default: 'ltr',
      validator: (value) => {
        return value.match(/(ltr|rtl)/)
      },
    },
  },
  data() {
    return {
      show: true,
      alertStyle: {
        color: '',
        icon: '',
      },
      iconColor: colors.color_grey,
    }
  },
  computed: {
    classes() {
      let result = ['alert']
      this.alert && result.push('alert--' + this.alert)
      return result
    },
    slotTitle() {
      return this.$slots.title
    },
    slotLink() {
      return this.$slots.link
    },
  },
  created() {
    this.alertType()
  },
  methods: {
    alertType() {
      switch (this.alert) {
        case 'info':
          this.alertStyle.icon = 'info'
          this.alertStyle.color = token.color_cyan
          break
        case 'success':
          this.alertStyle.icon = 'success'
          this.alertStyle.color = token.color_green
          break
        case 'warning':
          this.alertStyle.icon = 'warning'
          this.alertStyle.color = token.color_yellow
          break
        case 'danger':
          this.alertStyle.icon = 'danger'
          this.alertStyle.color = token.color_red
          break
        default:
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.alert {
  border-radius: $radius-sm;
  position: relative;

  &__container {
    align-items: center;
    background-color: $color-white;
    border: 1px solid $color-light;
    border-radius: $radius-sm;
    box-sizing: border-box;
    display: inline-flex;
    font-size: $type-size-small;
    line-height: $line-height-small;
    padding: ($space-xs + 5) $space-sm;
    width: 100%;
  }

  &__icon {
    .icon {
      display: flex;
    }
  }

  &__content div {
    display: inline-block;
  }

  &__title {
    font-size: $type-size-body;
    font-weight: $type-font-bold;
  }

  &__link {
    a {
      color: $color-blue;
      font-size: $type-size-small;
      font-weight: $type-font-bold;
      text-decoration: none;
    }
  }

  &__bar {
    height: 100%;
    position: absolute;
    top: 0;
    width: $space-xxs;
  }

  &--info .alert__bar {
    background-color: $color-cyan;
  }

  &--success .alert__bar {
    background-color: $color-green;
  }

  &--warning .alert__bar {
    background-color: $color-yellow;
  }

  &--danger .alert__bar {
    background-color: $color-red;
  }

  .loading {
    margin: 0 $space-sm 0 $space-xs;
  }
}

.ltr {
  .alert__bar {
    border-bottom-left-radius: $radius-sm;
    border-top-left-radius: $radius-sm;
  }

  .alert__icon {
    margin-right: $space-xs;
  }
}

.rtl {
  direction: rtl;

  .alert__bar {
    border-bottom-right-radius: $radius-sm;
    border-top-right-radius: $radius-sm;
  }

  .alert__icon {
    margin-left: $space-xs;
  }
}
</style>
