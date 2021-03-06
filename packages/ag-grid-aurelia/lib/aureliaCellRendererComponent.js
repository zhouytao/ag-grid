// ag-grid-aurelia v13.0.2
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AureliaCellRendererComponent = (function () {
    function AureliaCellRendererComponent() {
    }
    AureliaCellRendererComponent.prototype.init = function (params) {
        var bindingContext = { params: params };
        this.view = params.viewFactory.create(params.container);
        this.view.bind(bindingContext);
    };
    AureliaCellRendererComponent.prototype.getGui = function () {
        return this.view.fragment;
    };
    AureliaCellRendererComponent.prototype.destroy = function () {
        this.view.returnToCache();
    };
    AureliaCellRendererComponent.prototype.refresh = function (params) {
        return false;
    };
    return AureliaCellRendererComponent;
}());
exports.AureliaCellRendererComponent = AureliaCellRendererComponent;
