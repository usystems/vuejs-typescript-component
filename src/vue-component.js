/// <reference path="vue.d.ts" />
var VueComponent;
(function (VueComponent) {
    var Base = (function () {
        function Base() {
        }
        // methods: http://vuejs.org/api/instance-methods.html
        Base.prototype.$add = function (key, val) { };
        Base.prototype.$addChild = function (options, constructor) { };
        Base.prototype.$after = function (target, cb) { };
        Base.prototype.$appendTo = function (target, cb) { };
        Base.prototype.$before = function (target, cb) { };
        Base.prototype.$broadcast = function (event) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
        };
        Base.prototype.$compile = function (el) { return function () { }; };
        Base.prototype.$delete = function (key) { };
        Base.prototype.$destroy = function (remove) { };
        Base.prototype.$dispatch = function (event) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
        };
        Base.prototype.$emit = function (event) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
        };
        Base.prototype.$eval = function (text) { };
        Base.prototype.$get = function (exp) { };
        Base.prototype.$interpolate = function (text) { };
        Base.prototype.$log = function (path) { };
        Base.prototype.$mount = function (el) { };
        Base.prototype.$nextTick = function (fn) { };
        Base.prototype.$off = function (event, fn) { };
        Base.prototype.$on = function (event, fn) { };
        Base.prototype.$once = function (event, fn) { };
        Base.prototype.$remove = function (cb) { };
        Base.prototype.$set = function (exp, val) { };
        Base.prototype.$watch = function (exp, cb, options) { };
        return Base;
    })();
    VueComponent.Base = Base;
    // register a lifecycl hook, http://vuejs.org/api/options.html#Lifecycle
    function lifecycleHook(hook) {
        return function (cls, name, desc) {
            if ([
                'created', 'beforeCompile', 'compiled', 'ready', 'attached', 'detached', 'beforeDestroy', 'destroyed'
            ].indexOf(hook) == -1)
                throw new Error('Unknown Lifecyle Hook: ' + hook);
            if (!cls.hasOwnProperty('__hooks__'))
                cls.__hooks__ = {};
            cls.__hooks__[name] = cls[name];
            desc.value = void 0;
            return desc;
        };
    }
    VueComponent.lifecycleHook = lifecycleHook;
    // register an event, http://vuejs.org/api/options.html#events
    function eventHook(hook) {
        return function (cls, name, desc) {
            if (!cls.hasOwnProperty('__events__'))
                cls.__events__ = {};
            cls.__events__[name] = cls[name];
            desc.value = void 0;
            return desc;
        };
    }
    VueComponent.eventHook = eventHook;
    // expose the property as attribute
    function prop(options) {
        return function (cls, name) {
            if (!cls.hasOwnProperty('__props__'))
                cls.__props__ = {};
            cls.__props__[name] = options;
        };
    }
    VueComponent.prop = prop;
    // register a class as component in vue
    function createComponent(name) {
        return function (cls) {
            var options = {
                data: (function () { return new cls(); }),
                methods: {},
                computed: {}
            };
            // check for replace and template
            if (cls.hasOwnProperty('replace'))
                options.replace = cls.replace;
            if (cls.hasOwnProperty('template'))
                options.template = cls.template;
            // create object and get prototype
            var obj = new cls();
            var proto = Object.getPrototypeOf(obj);
            if (proto.hasOwnProperty('__props__'))
                options.props = proto.__props__;
            if (proto.hasOwnProperty('__events__'))
                options.events = proto.__events__;
            if (proto.hasOwnProperty('__hooks__'))
                Vue.util.extend(options, proto.__hooks__);
            // get methods
            Object.getOwnPropertyNames(proto).forEach(function (method) {
                // skip the constructor and the internal option keeper
                if (['constructor'].indexOf(method) > -1)
                    return;
                var desc = Object.getOwnPropertyDescriptor(proto, method);
                // normal methods
                if (typeof desc.value === 'function')
                    options.methods[method] = proto[method];
                else if (typeof desc.set === 'function')
                    options.computed[method] = {
                        get: desc.get,
                        set: desc.set
                    };
                else if (typeof desc.get === 'function')
                    options.computed[method] = desc.get;
            });
            // create a Vue component
            Vue.component(name, options);
        };
    }
    VueComponent.createComponent = createComponent;
})(VueComponent || (VueComponent = {}));
//# sourceMappingURL=vue-component.js.map