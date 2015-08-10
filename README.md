# Decorators to transform a TypeScript class to a Vue component

```typescript
// load the decorators
/// <reference path="src/vue-component.ts" />
// destruct the decorators from the VueComponent
const {createComponent, prop, lifecycleHook, eventHook} = VueComponent;

// transform the class Demo to a vue component called demo
@createComponent('demo')
// the VueComponent.Base provides all the declarations, Vue provieds to the component, the makes sure
// TypeScript support type checking and autocomplete
class Demo extends VueComponent.Base {

	// transforms to option.template 
	static template:string = '#demo-template';

	// transforms to option.replace
	static replace:boolean = true;

	// the @props decorator transforms a property to an attribute
	// for the supported options see http://vuejs.org/api/options.html#props
	@prop({
		type: Boolean,
		required: true
	})
	option:boolean;

	// normal properties, pass through the data options are declared as normal properties
	property:string = 'foo';

	// the @lifecycleHook decorator supports the following hooks:
	// created, beforeCompile, compiled, ready, attached, detached, beforeDestroy, destroyed
	@lifecycleHook('compiled')
	compiled():void {
		// ...
	}
	
	// the @eventHook decorator registers the decorated method as event listener 
	@eventHook('listen.to.event')
	eventListenToEvent():boolean {
		// ...
	}

	// normal methods are declared as class members
	method(arg:string):void {
		// ...
	}

	// computed properties are defined as getter and setter
	get computed():number {
		// ...
	}
	set computed(arg:number) {
		// ...
	}
}
```		
