<script setup lang="ts">

import {InputTextarea, InputText, UserDetail} from 'common-design-system';
import { Bar } from 'vue3-chart-v2';

const user ={name: 'Khue', age: 30};

</script>

<template>
  <InputTextarea />
  <InputText />

  <UserDetail user="user" />
  <Bar draggable=""/>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
