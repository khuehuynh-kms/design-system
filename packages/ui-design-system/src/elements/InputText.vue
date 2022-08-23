<template>
  <session>
    <div>{{ label }}: <input type="text" /></div>
  </session>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    label: String,
  },
  setup(props) {
    props.label; // <-- type: string
  },
});
</script>
