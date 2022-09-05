import Checkbox from '../src/elements/Checkbox.vue'

interface Story {
  args?: {
    slotContent?: string,
    wrapper?: string
    /**
     * Unique identifier of the checkbox.
     */
    id?: string
    /**
     * Name of the checkbox.
     */
    name?: string
    /**
     * Value of the checkbox.
     */
    value?: string
    /**
     * Manually trigger various states of the checkbox.
     * `disabled, error`
     */
    state?: string,
    /**
     * Whether the checkbox is checked or not.
     * `true, false`
     */
    checked?: boolean,
    /**
     * Whether the checkbox is indeterminate or not.
     * `true, false`
     */
    indeterminate?: boolean
    /**
     * The display direction.
     * `ltr, rtl`
     */
    dir?: string,
  },
}

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Checkbox',
  component: Checkbox,
  //👇 Creates specific argTypes with options
  argTypes: {
    slotContent: ''
  },
}

const Template = (args: { [key: string]: string | boolean }) => ({
  components: { Checkbox },
  setup() {
    return { args }
  },
  template: '<Checkbox v-bind="args">{{ args.slotContent }}</Checkbox>',
})

//👇 Each story then reuses that template
export const Default = Template.bind({}) as Story
Default.args = {
  id: 'checkbox1',
  value: 'default',
  slotContent: 'Default',

}

export const Checkbox2 = Template.bind({}) as Story
Checkbox2.args = {
  id: 'checkbox2',
  checked: true,
  slotContent: 'Checked'
}

export const Checkbox3 = Template.bind({}) as Story
Checkbox3.args = {
  id: 'checkbox3',
  state: 'disabled',
  checked: true,
  slotContent: 'Disabled Checked'
}

export const Checkbox4 = Template.bind({}) as Story
Checkbox4.args = {
  id: 'checkbox3',
  state: 'disabled',
  slotContent: 'Disabled'
}

export const Checkbox5 = Template.bind({}) as Story
Checkbox5.args = {
  id: 'checkbox5',
  state: 'error',
  slotContent: 'Error'
}

export const Checkbox6 = Template.bind({}) as Story
Checkbox6.args = {
  id: 'checkbox6',
  indeterminate: true,
  slotContent: 'Indeterminate'
}

export const RightToLeftCheckbox1 = Template.bind({}) as Story
RightToLeftCheckbox1.args = {
  id: 'checkbox1',
  value: 'default',
  dir: 'rtl',
  slotContent: 'قصلم'
}

export const RightToLeftCheckbox2 = Template.bind({}) as Story
RightToLeftCheckbox2.args = {
  id: 'checkbox2',
  checked: true,
  dir: 'rtl',
  slotContent: 'قصلم'
}

export const RightToLeftCheckbox3 = Template.bind({}) as Story
RightToLeftCheckbox3.args = {
  id: 'checkbox3',
  dir: 'rtl',
  state: 'disabled',
  checked: true,
  slotContent: 'قصلم'
}

export const RightToLeftCheckbox4 = Template.bind({}) as Story
RightToLeftCheckbox4.args = {
  id: 'checkbox4',
  dir: 'rtl',
  state: 'disabled',
  slotContent: 'قصلم'
}

export const RightToLeftCheckbox5 = Template.bind({}) as Story
RightToLeftCheckbox5.args = {
  id: 'checkbox5',
  dir: 'rtl',
  state: 'error',
  slotContent: 'قصلم'
}