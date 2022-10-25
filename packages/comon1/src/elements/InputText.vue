<template>
  <session>
    <div>{{ label1 }}: <input type="text" /></div>
    <ActionButton side="ltr"></ActionButton>
  </session>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ActionButton from "./ActionButton.vue";

export default defineComponent({
  props: {
    label1: String,
  },
  setup(props) {
    props.label1; // <-- type: string
  },
});
</script>
