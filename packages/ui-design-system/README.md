
# PADI Design System

  

  

**PADI Design System** is tool for building PADI UI with [Vue.js](https://vuejs.org). It provides you and your team a set of organized tools, patterns & practices that work as the foundation for your application development.

  

  

The tool is built on top of [Vue.js](https://vuejs.org), [Vue Styleguidist](https://github.com/vue-styleguidist/vue-styleguidist), [ViteJS](https://vitejs.dev/), and [storybook](https://storybook.js.org/) and is aimed for designers and front-end developers who have at least basic knowledge of component based workflows + HTML, PostCSS, SCSS & JavaScript.

  

  

## Features

  

  

- A set of interconnected patterns & practices for you and your team.

  

- A well thought-out terminology, naming conventions, and hierarchy.

  

- Get an automated overview of how your design system progresses over time.

  

- Global design tokens in YAML format that you can use inside any component.

  

- Automatic generation of living, user editable documentation.

  

- Easily export and use your Design System as an NPM dependency in another Vue.js project.

  

- Create a token, an element, or a pattern, and it’s immediately available across all components.

  

- Pre-configured ESLINT, Stylelint, Prettier setup for auto-formatting code on before commit.

  

- Live Reloading, Autoprefixing, PostCSS, SCSS, and helper functions + simple and sane defaults for SVG and Webfont usage out-of-the-box.

  

- Documentation and the app logic are separated, so you can have public docs while the app itself stays private.

  

  

## Development Notes:

 - Using import absolute path, not start with '@/'. 
 `import  Icon  from  './Icon.vue';`
 - We export source pure component. So we can import direct component to optimize build (only build the components are used). 
 - Export structure
	```
	padi-design-system
	│   README.md
	│   package.json    
	└───src
	│   └───assets
	|   └───elements
	|   └───...
	└───dist
	    │   build file
	```
 
 ## How to use
 
#### 1. Import as a normal lib
This way will add all ui-libs build files into the app build. So, we can have many components unused in a bundle. No suggestion.

    `import uiLib from 'padi-design-system'`

  #### 2. Import direct the component
This way will only add the using components into the app build. Suggestion

    `import ActionButton from 'padi-design-system/src/elements/ActionButton.vue'`


Add more config in app 
```
vite.confg.ts (js)
// https://vitejs.dev/config/

export  default  defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				additionalData:  `@import "./node_modules/p-common-design-system/src/styles/styles.scss";`
			},
		},
	},
})
```

## Plugins
Volar [https://github.com/johnsoncodehk/volar]

## Command

Install

    yarn
  
Start storybook

    yarn storybook

Build

    yarn build

Publish

    npm publish


## Examples

  https://github.com/khuehuynh-kms/design-system/tree/feat/app