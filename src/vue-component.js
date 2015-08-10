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
        return function (cls, name) {
            if ([
                'created', 'beforeCompile', 'compiled', 'ready', 'attached', 'detached', 'beforeDestroy', 'destroyed'
            ].indexOf(hook) == -1)
                throw new Error('Unknown Lifecyle Hook: ' + hook);
            if (!cls.hasOwnProperty('__options__'))
                cls.__options__ = { ignore: {}, props: {}, hooks: {} };
            cls.__options__.hooks[name] = function () { this[hook] = cls[name]; };
        };
    }
    VueComponent.lifecycleHook = lifecycleHook;
    // register an event, http://vuejs.org/api/options.html#events
    function eventHook(hook) {
        return function (cls, name) {
            if (!cls.hasOwnProperty('__options__'))
                cls.__options__ = { ignore: {}, props: {}, hooks: {} };
            cls.__options__.hooks[name] = function () { this.events[hook] = cls[name]; };
        };
    }
    VueComponent.eventHook = eventHook;
    // expose the property as attribute
    function prop(options) {
        return function (cls, name) {
            if (!cls.hasOwnProperty('__options__'))
                cls.__options__ = { ignore: {}, props: {}, hooks: {} };
            cls.__options__.props[name] = options;
        };
    }
    VueComponent.prop = prop;
    // register a class as component in vue
    function createComponent(name) {
        return function (cls) {
            var data = {};
            var options = {
                props: {},
                data: (function () { return Vue.util.extend({}, data); }),
                methods: {},
                events: {},
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
            // get data
            Object.getOwnPropertyNames(obj).forEach(function (prop) {
                data[prop] = obj[prop];
            });
            if (proto.hasOwnProperty('__options__'))
                Object.getOwnPropertyNames(proto.__options__.props).forEach(function (prop) {
                    options.props[prop] = proto.__options__.props[prop];
                });
            // get methods
            Object.getOwnPropertyNames(proto).forEach(function (method) {
                // skip the constructor and the internal option keeper
                if (['constructor', '__options__'].indexOf(method) > -1)
                    return;
                // decoreated functions
                if (proto.hasOwnProperty('__options__') && proto.__options__.hooks.hasOwnProperty(method))
                    proto.__options__.hooks[method].call(options);
                else {
                    var desc = Object.getOwnPropertyDescriptor(proto, method);
                    // normal methods
                    if (typeof desc.value === 'function')
                        options.methods[method] = proto[method];
                    else if (desc.hasOwnProperty('set'))
                        options.computed[method] = {
                            get: desc.get,
                            set: desc.set
                        };
                    else
                        options.computed[method] = desc.get;
                }
            });
            // create a Vue component
            Vue.component(name, options);
        };
    }
    VueComponent.createComponent = createComponent;
})(VueComponent || (VueComponent = {}));
//# sourceMappingURL=vue-component.js.map