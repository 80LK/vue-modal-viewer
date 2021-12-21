<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" @click="toggle" />
    <modal v-slot="{ isShowed }" name="test-modal" v-model="showed">
      <HelloWorld
        v-if="isShowed"
        msg="Welcome to Your Vue.js + TypeScript App"
      />
    </modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";

@Component({
  components: {
    HelloWorld,
  },
  mounted() {
    console.log(this);
  },
  data: () => ({ showed: false }),
  methods: {
    toggle() {
      //@ts-ignore
      this.showed = !this.showed;
      // //@ts-ignore
      // this.showed == false
      //   ? this.$modalviewer.show("test-modal")
      //   : this.$modalviewer.hide("test-modal");
      // //@ts-ignore
      // this.showed = !this.showed;
    },
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
