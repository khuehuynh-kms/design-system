<script setup lang='ts'>

interface Prop  {
  user: {name: string, age: number}
}
const props = defineProps<Prop>();
</script>

<template>
  <p>{{ props.user.name }} - {{ props.user.name }}</p>
</template>

<style>
</style>

