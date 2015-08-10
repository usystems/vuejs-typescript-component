/// <reference path="../../src/vue-component.ts" />
const {createComponent, prop, lifecycleHook, eventHook} = VueComponent;

// register the grid component
@createComponent('item')
class Item extends VueComponent.Base {

	static template:string = '#item-template';
	static replace:boolean = true;

	@prop(Object)
	model:any;

	open:boolean = false;

	get isFolder() {
		return this.model.children &&
			this.model.children.length
	}

	toggle():void {
		if (this.isFolder) {
			this.open = !this.open
		}
	}

	changeType():void {
		if (!this.isFolder) {
			this.model.$add('children', [])
			this.addChild()
			this.open = true
		}
	}

	addChild():void {
		this.model.children.push({
			name: 'new stuff'
		})
	}
}
