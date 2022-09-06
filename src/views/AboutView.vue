<script setup lang="ts">
import ActionButton from 'p-common-design-system/src/elements/ActionButton.vue';
import Icon from 'p-common-design-system/src/elements/Icon.vue';


const actionCb = () => {
  console.log('click on the button');
}
</script>

<template>
  <div>
    <Icon />
    <h4>Left to Right (Default)</h4>
    <div style="display:flex;
      justify-content: space-around;">
      <ActionButton :actions="[{'label': 'Edit', 'callback': actionCb},{'label': 'Delete', 'callback': actionCb}]" />
      <ActionButton side="right" :actions="[{'label': 'Edit', 'callback': actionCb},{'label': 'Delete', 'callback': actionCb}]" />
    </div>
    <h4>Right to Left</h4>
    <div style="display:flex;
      justify-content: space-around;">
      <ActionButton dir="rtl" :actions="[{'label': 'Edit', 'callback': actionCb},{'label': 'Delete', 'callback': actionCb}]" />
      <ActionButton dir="rtl" side="right" :actions="[{'label': 'Edit', 'callback': actionCb},{'label': 'Delete', 'callback': actionCb}]" />
    </div>
  </div>
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
