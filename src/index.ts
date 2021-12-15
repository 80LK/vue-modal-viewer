import Vue from "vue";
import ModalViewer, { Modal } from "./ModalViewer";
import ModalVue from "./Modal.vue";

const Plugin = {
	install(vue: typeof Vue) {
		Vue.component("modal", ModalVue);
		vue.prototype.$modalviewer = new ModalViewer();
	}
};

export default Plugin;
export { ModalViewer, Modal };
