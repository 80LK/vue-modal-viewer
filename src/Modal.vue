<template>
  <div class="modal">
    <slot v-bind="{ isShowed }" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ModalViewer from "./ModalViewer";

export default Vue.extend({
  mixins: [ModalViewer.mixin],
  name: "Modal",
});
</script>
