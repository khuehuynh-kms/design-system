
# PADI Monorepos Libraries

**PADI Monorepos Libraries** is a list app libraries.

 1. UI Design system
 2. TBD

The tools are built on top of [Vue.js](https://vuejs.org), [Vue Styleguidist](https://github.com/vue-styleguidist/vue-styleguidist), [Vite](https://vitejs.dev/),  and is aimed for designers and front-end developers who have at least basic knowledge of component based workflows + HTML, PostCSS, SCSS & JavaScript.

## Progress

- Define monorepos app structure [Done]
- Config: typescript, ESLint, build ui design system [Done]
- Add unit test [In-progress]
- Add storybook for ui design system [In-progress]

## Migration Notes
### Ui design system
 - Migrate from learning-design-system lib
 - Using the Vue3 Option component when migrating.

## Documentation
- https://github.com/sethidden/vue3-eslint-stylelint-demo
- https://vuejs.org/guide/typescript/overview.html

Install dependencies
```
yarn
```

Build ui design system package

```
npx lerna run build
```

## Examples

The app import ui-design-system
https://github.com/khuehuynh-kms/design-system/tree/feat/app [In-progress]


