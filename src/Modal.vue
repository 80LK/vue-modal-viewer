<template>
  <div class="modal">
    <slot v-bind="{ isShowed }" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Modal",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isShowed: false,
    };
  },
  created() {
    this.$modalviewer.register(this);
  },
  beforeDestroy() {
    this.$modalviewer.unregister(this);
  },
  methods: {
    show() {
      this.isShowed = true;
    },
    hide() {
      this.isShowed = false;
    },
  },
});
</script>
