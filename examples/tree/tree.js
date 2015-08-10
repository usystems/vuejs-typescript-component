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
var Item = (function (_super) {
    __extends(Item, _super);
    function Item() {
        _super.apply(this, arguments);
        this.open = false;
    }
    Object.defineProperty(Item.prototype, "isFolder", {
        get: function () {
            return this.model.children &&
                this.model.children.length;
        },
        enumerable: true,
        configurable: true
    });
    Item.prototype.toggle = function () {
        if (this.isFolder) {
            this.open = !this.open;
        }
    };
    Item.prototype.changeType = function () {
        if (!this.isFolder) {
            this.model.$add('children', []);
            this.addChild();
            this.open = true;
        }
    };
    Item.prototype.addChild = function () {
        this.model.children.push({
            name: 'new stuff'
        });
    };
    Item.template = '#item-template';
    Item.replace = true;
    __decorate([
        prop(Object)
    ], Item.prototype, "model");
    Item = __decorate([
        createComponent('item')
    ], Item);
    return Item;
})(VueComponent.Base);
//# sourceMappingURL=tree.js.map