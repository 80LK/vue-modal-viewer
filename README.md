# vue-modal-viewer
Show and hide your content in Vue

## Usage

### Install
```
npm i vue vue-modal-viewer
```

### Include plugin
```ts
import Vue from "vue";
import ModalViewerPlugin from "vue-modal-viewer";

Vue.use(ModalViewerPlugin);
```

### Create component
```html
<template>
	<button @click="open">Open hidden content</button>
	<modal :name="modalName" v-slot="{ isShowed }">
		<h1 v-id="isShowed">My Visible Content</h1>
		<button @click="hide">Hide</button>
	</modal>
</template>

<script>
	export default {
		data(){
			return {
				modalName:"myModal",
			}
		},
		methods:{
			show(){
				this.$modalviewer.show(this.modalName)
			},
			hide(){
				this.$modalviewer.hide(this.modalName)
			}
		}
	}
</script>
```

### Mixins
```html
<template>
	<div v-if="isShowed">
		<h1 v-id="isShowed">My Visible Content</h1>
		<button @click="hide">Hide</button>
	</div>
</template>

<script>
	import { ModalViewer } from "vue-modal-viewer";

	export default {
		mixins:[ModalViewer.mixin],
		props:{//Set default name
			name:{
				type:String,
				default:"trstModal"
			}
		}
	}
</script>
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
