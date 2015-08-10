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
var DemoGrid = (function (_super) {
    __extends(DemoGrid, _super);
    function DemoGrid() {
        _super.apply(this, arguments);
        this.filterKey = '';
        this.sortKey = '';
        this.reversed = {};
    }
    DemoGrid.prototype.compiled = function () {
        var _this = this;
        this.columns.forEach(function (key) {
            _this.$set("reversed." + key, false);
        });
    };
    DemoGrid.prototype.sortBy = function (key) {
        this.sortKey = key;
        this.reversed[key] = !this.reversed[key];
    };
    DemoGrid.template = '#grid-template';
    DemoGrid.replace = true;
    __decorate([
        prop({
            type: Array,
            required: true
        })
    ], DemoGrid.prototype, "data");
    __decorate([
        prop({
            type: Array,
            required: true
        })
    ], DemoGrid.prototype, "columns");
    __decorate([
        prop(String)
    ], DemoGrid.prototype, "filterKey");
    Object.defineProperty(DemoGrid.prototype, "compiled",
        __decorate([
            lifecycleHook('compiled')
        ], DemoGrid.prototype, "compiled", Object.getOwnPropertyDescriptor(DemoGrid.prototype, "compiled")));
    DemoGrid = __decorate([
        createComponent('demo-grid')
    ], DemoGrid);
    return DemoGrid;
})(VueComponent.Base);
//# sourceMappingURL=grid.js.map