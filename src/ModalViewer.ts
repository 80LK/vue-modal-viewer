import Vue from "vue";
import ModalVue from "./Modal.vue";

declare module 'vue/types/vue' {
	export interface Vue {
		$modalviewer: ModalViewer
	}
}

interface Modal extends Vue {
	name: string;
	show(): void;
	hide(): void;
}

class ModalViewer {
	public static install(vue: typeof Vue) {
		Vue.component("modal", ModalVue);
		vue.prototype.$modalviewer = new ModalViewer();
	}

	private modals: { [key: string]: Modal } = {};
	public register(modal: Modal) {
		const modalName = modal.name;

		if (this.modals.hasOwnProperty(modalName))
			console.error(`Modal "${modalName}" alredy register and rewriten!`);

		this.modals[modalName] = modal
	}
	public unregister(modal: Modal) {
		const modalName = modal.name;
		if (this.modals.hasOwnProperty(modalName)) {
			const regModal = this.modals[modalName];
			if (regModal && modal == regModal) {
				modal.hide();
				delete this.modals[modalName];
			}
		}
	}

	public get(name: string): Modal {
		const modal = this.modals[name];
		if (!modal) throw new ReferenceError(`Model "${name}" not register`);
		return modal;
	}
	public tryGet(name: string): Modal | null {
		try {
			return this.get(name);
		} catch (e) {
			console.warn(e)
			return null;
		}
	}
	public show(name: string) {
		this.tryGet(name)?.show();
	}

	public hide(name: string) {
		this.tryGet(name)?.hide();
	}

	public hideAll() {
		for (const key in this.modals) {
			const modal = this.modals[key];

			if (modal) modal.hide();
		}
	}
}

export default ModalViewer;
export { Modal };
