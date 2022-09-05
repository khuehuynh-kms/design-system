import Select from '../src/elements/Select.vue'

interface OptionsType {
  [key: string]: string
}

interface Story {
  args?: {
    options?: Array<OptionsType> | OptionsType
    /**
    * The current field value.
    */
    value?: string | number,
    /**
     * The prefix of select.
     */
    prefix?: string
    /**
     * The placeholder when no option is selected.
     */
    placeholder?: string
    /**
     * Unique identifier of the form select field.
     */
    id?: string
    /**
     * Name of the form select field.
     */
    name?: string
    /**
     * Id of the form this select field applies to.
     */
    formId?: string
    /**
     * The label of the form select field.
     */
    label?: string
    /**
     * The description of the form select field.
     */
    description?: string
    /**
     * The html element name used for the wrapper.
     * `div, section`
     */
    wrapper?: string
    /**
     * Whether the form select field is disabled or not.
     * `true, false`
     */
    disabled?: boolean
    /**
     * Whether the form select field is required or not.
     * `true, false`
     */
    required?: boolean
    /**
     * Whether the form select field is autofocused.
     * `true, false`
     */
    autofocus?: boolean
    /**
     * Whether the form select accepts multiple values.
     * `true, false`
     *
     * @todo setup multiple value select.
     */
    multiple?: boolean
    /**
     * Manually trigger various states of the select.
     * `active, error, info`
     */
    state?: string
    /**
     * The name of the icon.
     * See Icon in design system for list.
     */
    icon?: string
    /**
     * The error message.
     */
    errorMessage?: string
    /**
     * The info message.
     */
    info?: string
    /**
     * The display direction.
     * `ltr, rtl`
     */
    dir?: string
  },
}

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Select',
  component: Select,
  //👇 Creates specific argTypes with options
  argTypes: {

  },
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
  components: { Select },
  setup() {
    //👇 The args will now be passed down to the template
    return { args }
  },
  template: '<Select v-bind="args"/>',
})

//👇 Each story then reuses that template
export const Default = Template.bind({}) as Story
Default.args = {
  options: { This: 'this', That: 'that' },
  placeholder: 'select',
}

export const Select2 = Template.bind({}) as Story
Select2.args = {
  options: { 'Red Fish': 'red', 'Blue Fish': 'blue' },
  value: 'red'
}

export const Select3 = Template.bind({}) as Story
Select3.args = {
  options: { 'Fish': 'fish', 'Shark': 'shark' },
  placeholder: 'Select your sea creature',
}

export const Select4 = Template.bind({}) as Story
Select4.args = {
  options: {
    'a': 'a',
    'b': 'b',
    'c': 'c',
    'd': 'd',
    'e': 'e',
    'f': 'f',
    'g': 'g',
    'h': 'h',
    'i': 'i',
    'j': 'j',
    'k': 'k',
    'l': 'l',
    'm': 'm',
  },
  placeholder: 'Scroll options example',
}

export const Select5 = Template.bind({}) as Story
Select5.args = {
  dir: 'rtl',
  options: { 'يناير': ' يناير', 'فبراير': 'فبراير' },
  placeholder: 'الشهر',
}
