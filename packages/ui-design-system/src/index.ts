import { defineAsyncComponent } from 'vue'

// const ActionButton = defineAsyncComponent(
//   () => import('./elements/ActionButton.vue'),
// )
// const ActionButton1 = defineAsyncComponent(
//   () => import('./elements/ActionButton1.vue'),
// )
// const ActionButton2 = defineAsyncComponent(
//   () => import('./elements/ActionButton2.vue'),
// )
import ActionButton from './elements/ActionButton.vue'
import ActionButton1 from './elements/ActionButton1.vue'
import ActionButton2 from './elements/ActionButton2.vue'

export { ActionButton, ActionButton1, ActionButton2 }
