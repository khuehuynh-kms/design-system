import ActionButton from '../../src/elements/ActionButton.vue'
import { ElementPath } from '../constants'

//👇 This default export determines where your story goes in the story list
export default {
  title: `${ElementPath}/ActionButton`,
  component: ActionButton,
}

//👇 We create a “template” of how args map to rendering
const Template = () => ({
  components: { ActionButton },
  template: `
  <div>
    <h4>Left to Right (Default)</h4>
    <div style="display:flex;
      justify-content: space-around;">
      <ActionButton :actions="[{'label': 'Edit', 'callback': 'edit'},{'label': 'Delete', 'callback': 'delete'}]" />
      <ActionButton side="right" :actions="[{'label': 'Edit', 'callback': 'edit'},{'label': 'Delete', 'callback': 'delete'}]" />
    </div>
    <h4>Right to Left</h4>
    <div style="display:flex;
      justify-content: space-around;">
      <ActionButton dir="rtl" :actions="[{'label': 'Edit', 'callback': 'edit'},{'label': 'Delete', 'callback': 'delete'}]" />
      <ActionButton dir="rtl" side="right" :actions="[{'label': 'Edit', 'callback': 'edit'},{'label': 'Delete', 'callback': 'delete'}]" />
    </div>
  </div>
  `,
})

//👇 Each story then reuses that template
export const Default = Template.bind({})
