/// <reference path="../../src/vue-component.ts" />
const {createComponent, prop, lifecycleHook, eventHook} = VueComponent;

// register the grid component
@createComponent('modal')
class Modal extends VueComponent.Base {

	static template:string = '#modal-template';

	@prop({
		type: Boolean,
		required: true,
		twoWay: true
	})
	show:boolean;
}
