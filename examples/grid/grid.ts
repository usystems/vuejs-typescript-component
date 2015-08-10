/// <reference path="../../src/vue-component.ts" />
const {createComponent, prop, lifecycleHook, eventHook} = VueComponent;

// register the grid component
@createComponent('demo-grid')
class DemoGrid extends VueComponent.Base {

	static template:string = '#grid-template';
	static replace:boolean = true;

	@prop({
		type: Array,
		required: true
	})
	data:Array<{name:string, power:number }>;

	@prop({
		type: Array,
		required: true
	})
	columns:Array<string>;

	@prop(String)
	filterKey: string = '';

	sortKey:string = '';

	reversed:{[key:string]: boolean} = {};

	@lifecycleHook('compiled')
	compiled():void {
		this.columns.forEach((key:string):void => {
			this.$set(`reversed.${key}`, false);
		});
	}

	sortBy(key:string):void {
		this.sortKey = key;
		this.reversed[key] = !this.reversed[key];
	}
}
