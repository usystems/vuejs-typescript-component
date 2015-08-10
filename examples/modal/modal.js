var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/// <reference path="../../src/vue-component.ts" />
var createComponent = VueComponent.createComponent, prop = VueComponent.prop, lifecycleHook = VueComponent.lifecycleHook, eventHook = VueComponent.eventHook;
// register the grid component
var Modal = (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        _super.apply(this, arguments);
    }
    Modal.template = '#modal-template';
    __decorate([
        prop({
            type: Boolean,
            required: true,
            twoWay: true
        })
    ], Modal.prototype, "show");
    Modal = __decorate([
        createComponent('modal')
    ], Modal);
    return Modal;
})(VueComponent.Base);
//# sourceMappingURL=modal.js.map