(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-nav></app-nav>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/class/class.component.html": 
        /*!*****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/class/class.component.html ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"lm__chart-container\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n    <h2>Establishments by Classifications</h2>\n\n    <ngx-charts-bar-vertical [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"single\" [gradient]=\"gradient\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\" [legendTitle]=\"legendTitle\" [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\"\n        [yAxisLabel]=\"yAxisLabel\" [showDataLabel]=\"showDataLabel\">\n    </ngx-charts-bar-vertical>\n\n</div>\n\n<div class=\"lm__chart-control\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <mat-slide-toggle color=\"primary\" [checked]=\"showDataLabel\" (change)=\"toggle()\">Show Data Label</mat-slide-toggle>\n</div>\n\n<div class=\"lm__chart-navigator\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n\n    <button mat-mini-fab color=\"primary\" routerLink=\"/\">\n      <mat-icon>keyboard_arrow_left</mat-icon>\n   </button>\n\n    <button mat-mini-fab color=\"primary\" routerLink=\"/sectors\">\n      <mat-icon>keyboard_arrow_right</mat-icon>\n   </button>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/configs/clickable/clickable.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/configs/clickable/clickable.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"lm__chart-control\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mat-icon color=\"accent\">touch_app</mat-icon> <em>* Click any sector on the chart to see detail</em>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/intro/intro.component.html": 
        /*!*****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/intro/intro.component.html ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"lm__chart-container\" fxLayout=\"column\" fxLAyoutAlign=\"center center\">\n\n    <h1 class=\"lm__text-title-primary\">{{ title }}</h1>\n    <h2 class=\"lm__text-subtitle\">{{ subtitle }}</h2>\n\n    <app-mind-map></app-mind-map>\n\n</div>\n\n<div class=\"lm__chart-navigator\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n\n    <mat-card>\n\n        <mat-card-content>\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"20px\">\n                <img mat-card-avatar src=\"assets/images/azrin.jpg\" alt=\"\">\n                <p>{{ content }}</p>\n                <button mat-mini-fab color=\"primary\" routerLink=\"/class\">\n                  <mat-icon>keyboard_arrow_right</mat-icon>\n               </button>\n\n            </div>\n        </mat-card-content>\n    </mat-card>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/intro/line-chart/line-chart.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/intro/line-chart/line-chart.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ngx-charts-line-chart [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"single\" [animations]=\"useAnimation\" [rangeFillOpacity]=\"rangeFillOpacity\" [legend]=\"showLegend\" [legendTitle]=\"legendTitle | titlecase\" [legendPosition]=\"legendPosition\" [xAxis]=\"showXAxis\"\n    [yAxis]=\"showYAxis\" [roundDomains]=\"roundDomains\" [showGridLines]=\"showGridLines\" [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\" [yAxisLabel]=\"yAxisLabel\" [gradient]=\"gradient\" [timeline]=\"timeline\" [autoScale]=\"autoScale\">\n\n</ngx-charts-line-chart>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/intro/mind-map/mind-map.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/intro/mind-map/mind-map.component.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ngx-graph [view]=\"[600, 300]\" layout=\"dagre\" [links]=\"[\n      {\n         id: 'a',\n         source: '1',\n         target: '2'\n      }, {\n         id: 'b',\n         source: '1',\n         target: '3'\n      }, {\n         id: 'c',\n         source: '3',\n         target: '4'\n      }, {\n         id: 'd',\n         source: '3',\n         target: '5'\n      }, {\n         id: 'e',\n         source: '4',\n         target: '5'\n      }, {\n         id: 'f',\n         source: '2',\n         target: '6'\n      }\n   ]\" [nodes]=\"[     { id: '1', label: 'Node A' }, \n                     { id: '2', label: 'Node B' },   \n                     { id: '3', label: 'Node C' }, \n                     { id: '4', label: 'Node D' }, \n                     { id: '5', label: 'Node E' }, \n                     { id: '6', label: 'Node F' }\n   ]\">\n\n    <ng-template #nodeTemplate let-node>\n        <svg:g class=\"node\" ngx-tooltip [tooltipPlacement]=\"'top'\" [tooltipType]=\"'tooltip'\" [tooltipTitle]=\"node.label\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n                  <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n                  <path d=\"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z\" [attr.width]=\"node.dimension.width\"\n                  [attr.height]=\"node.dimension.height\" [attr.fill]=\"node.data.color\"/>\n            </svg>\n            <!-- <svg:text alignment-baseline=\"central\" [attr.x]=\"6\" [attr.y]=\"node.dimension.height / 2\">\n                  {{ node.label }}\n               </svg:text> -->\n        </svg:g>\n    </ng-template>\n\n\n</ngx-graph>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/regression/regression.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/regression/regression.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("Equation Charts\n\n<!-- Equation Chart  -->\n<ngx-charts-line-chart style=\"position: static; display: inline-block; transform: none;\" [view]=\"view\" class=\"chart-container\" [results]=\"plotData\" [animations]=\"animations\" [legend]=\"false\" [legendTitle]=\"legendTitle\" [legendPosition]=\"legendPosition\"\n    [gradient]=\"gradient\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [showXAxisLabel]=\"false\" [showYAxisLabel]=\"false\" [xAxisLabel]=\"'angle'\" [yAxisLabel]=\"'radius'\" [autoScale]=\"autoScale\" [timeline]=\"timeline\" [showGridLines]=\"showGridLines\" [rangeFillOpacity]=\"rangeFillOpacity\"\n    [tooltipDisabled]=\"tooltipDisabled\" [trimXAxisTicks]=\"trimXAxisTicks\" [trimYAxisTicks]=\"trimYAxisTicks\" (select)=\"select($event)\">\n</ngx-charts-line-chart>\n<p></p>\n<ngx-charts-polar-chart style=\"position: static; display: inline-block; transform: none;\" [view]=\"view\" class=\"chart-container\" [results]=\"plotData\" [animations]=\"animations\" [legend]=\"false\" [legendTitle]=\"legendTitle\" [legendPosition]=\"legendPosition\"\n    [gradient]=\"gradient\" [xAxis]=\"false\" [yAxis]=\"true\" [showXAxisLabel]=\"false\" [showYAxisLabel]=\"false\" [xAxisLabel]=\"'angle'\" [yAxisLabel]=\"'radius'\" [autoScale]=\"autoScale\" [showGridLines]=\"showGridLines\" [rangeFillOpacity]=\"rangeFillOpacity\" [tooltipDisabled]=\"tooltipDisabled\"\n    [showSeriesOnHover]=\"showSeriesOnHover\" [trimYAxisTicks]=\"trimYAxisTicks\" (select)=\"select($event)\" (activate)=\"activate($event)\" (deactivate)=\"deactivate($event)\">\n</ngx-charts-polar-chart>\n<!-- Equation Chart -->");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/sectors/sectors.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/sectors/sectors.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"lm__chart-container\" fxLayout=\"column\" fxLAyoutAlign=\"center center\">\n    <h2>Establishment by Sectors</h2>\n\n    <ngx-charts-pie-chart [view]=\"view\" [results]=\"results\" [scheme]=\"colorScheme\" [animations]=\"animations\" [labels]=\"labels\" [trimLabels]=\"trimLabels\" [maxLabelLength]=\"maxLabelLength\" [legend]=\"showLegend\" [legendTitle]=\"legendTitle\" [legendPosition]=\"legendPosition\"\n        [gradient]=\"gradient\" [tooltipDisabled]=\"tooltipDisabled\" [arcWidth]=\"arcWidth\" [explodeSlices]=\"explodeSlices\" (select)=\"sectorSelected($event)\"></ngx-charts-pie-chart>\n\n</div>\n\n<app-clickable></app-clickable>\n\n<div class=\"lm__chart-navigator\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n\n    <button mat-mini-fab color=\"primary\" routerLink=\"/class\">\n          <mat-icon>keyboard_arrow_left</mat-icon>\n       </button>\n\n    <button mat-mini-fab color=\"primary\" routerLink=\"/forecast/selangor/services\">\n          <mat-icon>keyboard_arrow_right</mat-icon>\n       </button>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/state-sector-forecast/state-sector-forecast.component.html": 
        /*!*************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/state-sector-forecast/state-sector-forecast.component.html ***!
          \*************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"lm__chart-container\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n    <h2>{{ title | titlecase }}</h2>\n\n    <ngx-charts-line-chart style=\"position: static; display: inline-block; transform: none;\" [scheme]=\"chartSettings.colorScheme\" [view]=\"chartSettings.view\" class=\"chart-container\" [results]=\"results\" [animations]=\"chartSettings.animations\" [legend]=\"chartSettings.showLegend\"\n        [legendTitle]=\"chartSettings.legendTitle | titlecase\" [legendPosition]=\"chartSettings.legendPosition\" [gradient]=\"chartSettings.gradient\" [xAxis]=\"chartSettings.showXAxis\" [yAxis]=\"chartSettings.showYAxis\" [showXAxisLabel]=\"false\" [showYAxisLabel]=\"false\"\n        [xAxisLabel]=\"'chartSettings.xAxisLabel'\" [yAxisLabel]=\"'chartSettings.yAxisLabel'\" [autoScale]=\"chartSettings.autoScale\" [timeline]=\"chartSettings.timeline\" [showGridLines]=\"chartSettings.showGridLines\" [roundDomains]=\"chartSettings.roundDomains\"\n        [tooltipDisabled]=\"chartSettings.tooltipDisabled\" [trimXAxisTicks]=\"chartSettings.trimXAxisTicks\" [trimYAxisTicks]=\"chartSettings.trimYAxisTicks\" [maxXAxisTickLength]=\"chartSettings.maxXAxisTickLength\" [maxYAxisTickLength]=\"chartSettings.maxYAxisTickLength\">\n    </ngx-charts-line-chart>\n\n</div>\n\n<div>\n    <form [formGroup]=\"selectForm\">\n        <div class=\"lm__chart-select\" fxLayout=\"column\">\n\n            <mat-form-field>\n                <mat-label>State</mat-label>\n                <mat-select required formControlName=\"state\">\n                    <mat-option disabled>Select a state</mat-option>\n                    <mat-option *ngFor=\"let state of options.states\" [value]=\"state\">\n                        {{ state | titlecase }}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n\n            <mat-form-field>\n                <mat-label>Sector</mat-label>\n                <mat-select formControlName=\"sector\" (selectionChange)=\"onSelect()\">\n                    <mat-option disabled>Select a sector</mat-option>\n                    <mat-option *ngFor=\"let sector of options.sectors\" [value]=\"sector\">\n                        {{ sector | titlecase }}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n\n        </div>\n\n    </form>\n</div>\n\n<div class=\"lm__chart-navigator\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n\n    <button mat-mini-fab color=\"primary\" routerLink=\"/sectors\">\n          <mat-icon>keyboard_arrow_left</mat-icon>\n       </button>\n\n    <button mat-mini-fab color=\"primary\">\n          <mat-icon>keyboard_arrow_right</mat-icon>\n       </button>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/state-sector-history/state-sector-history.component.html": 
        /*!***********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/state-sector-history/state-sector-history.component.html ***!
          \***********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"lm__chart-container\" fxLayout=\"column\" fxLayoutAlign=\"center center\" *ngIf=\"single\">\n\n    <h2>{{ title | titlecase }}</h2>\n\n    <ngx-charts-bar-vertical [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"single\" [gradient]=\"gradient\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\" [legendTitle]=\"legendTitle | titlecase\" [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\"\n        [yAxisLabel]=\"yAxisLabel\" [showDataLabel]=\"showDataLabel\">\n    </ngx-charts-bar-vertical>\n\n</div>\n\n<div class=\"lm__chart-control\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <mat-slide-toggle color=\"primary\" [checked]=\"showDataLabel\" (change)=\"toggle()\">Show Data Label</mat-slide-toggle>\n</div>\n\n<div class=\"lm__chart-navigator\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n\n    <button mat-mini-fab color=\"primary\" routerLink=\"/sectors\">\n        <mat-icon>keyboard_arrow_left</mat-icon>\n     </button>\n\n    <button mat-mini-fab color=\"primary\" routerLink=\"/forecast/selangor/services\">\n        <mat-icon>keyboard_arrow_right</mat-icon>\n     </button>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/states-construction/states-construction.component.html": 
        /*!*********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/states-construction/states-construction.component.html ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"lm__chart-container\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n    <h2>Construction Establishments by State</h2>\n\n    <ngx-charts-bar-horizontal [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"single\" [gradient]=\"gradient\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\" [legendTitle]=\"legendTitle | titlecase\" [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\"\n        [yAxisLabel]=\"yAxisLabel\" [showDataLabel]=\"showDataLabel\" (select)=\"onStateSelect($event)\">\n    </ngx-charts-bar-horizontal>\n\n</div>\n\n<div class=\"lm__chart-control\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <mat-slide-toggle color=\"primary\" [checked]=\"showDataLabel\" (change)=\"toggle()\">Show Data Label</mat-slide-toggle>\n</div>\n\n<div class=\"lm__chart-navigator\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n\n    <button mat-mini-fab color=\"primary\" routerLink=\"/sectors\">\n             <mat-icon>keyboard_arrow_left</mat-icon>\n          </button>\n\n    <button mat-mini-fab color=\"primary\" routerLink=\"/sectors\">\n             <mat-icon>keyboard_arrow_right</mat-icon>\n          </button>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/states-manufacturing/states-manufacturing.component.html": 
        /*!***********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/states-manufacturing/states-manufacturing.component.html ***!
          \***********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"lm__chart-container\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n    <h2>{{ title }}</h2>\n\n    <ngx-charts-bar-horizontal [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"single\" [gradient]=\"gradient\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\" [legendTitle]=\"legendTitle\" [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\"\n        [yAxisLabel]=\"yAxisLabel\" [showDataLabel]=\"showDataLabel\">\n    </ngx-charts-bar-horizontal>\n\n</div>\n\n<div class=\"lm__chart-control\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <mat-slide-toggle color=\"primary\" [checked]=\"showDataLabel\" (change)=\"toggle()\">Show Data Label</mat-slide-toggle>\n</div>\n\n<div class=\"lm__chart-navigator\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n\n    <button mat-mini-fab color=\"primary\" routerLink=\"/sectors\">\n               <mat-icon>keyboard_arrow_left</mat-icon>\n            </button>\n\n    <button mat-mini-fab color=\"primary\" routerLink=\"/sectors\">\n               <mat-icon>keyboard_arrow_right</mat-icon>\n            </button>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/states-sector/states-sector.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/states-sector/states-sector.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"lm__chart-container\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n    <h2>{{ title | titlecase }}</h2>\n\n    <ngx-charts-bar-horizontal [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"single\" [gradient]=\"gradient\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\" [legendTitle]=\"legendTitle | titlecase\" [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\"\n        [yAxisTicks]=\"yAxisTicks|titlecase\" [yAxisLabel]=\"yAxisLabel\" [showDataLabel]=\"showDataLabel\" (select)=\"onStateSelect($event)\">\n    </ngx-charts-bar-horizontal>\n\n</div>\n\n<div class=\"lm__chart-control\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <mat-slide-toggle color=\"primary\" [checked]=\"showDataLabel\" (change)=\"toggle()\">Show Data Label</mat-slide-toggle>\n</div>\n\n<app-clickable></app-clickable>\n\n<div class=\"lm__chart-navigator\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n\n    <button mat-mini-fab color=\"primary\" routerLink=\"/sectors\">\n               <mat-icon>keyboard_arrow_left</mat-icon>\n            </button>\n\n    <button mat-mini-fab color=\"primary\" routerLink=\"/sectors\">\n               <mat-icon>keyboard_arrow_right</mat-icon>\n            </button>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/body/body.component.html": 
        /*!***************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/body/body.component.html ***!
          \***************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"lm__page-full\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n    <router-outlet></router-outlet>\n\n    <app-footer></app-footer>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"lm__footer\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <img class=\"lm__footer-logo\" src=\"assets/images/logo.png\" routerLink=\"/\">\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html": 
        /*!******************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html ***!
          \******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-body></app-body>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/auth-register/auth-register.component.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/auth-register/auth-register.component.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"lm__page-min70vh-hidden\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n   <div class=\"lm__logo-4rem\">\n      azrin.dev\n   </div>\n   <div class=\"lm__card\" (mouseenter)=\"mouseEnterCard($event)\" (mouseleave)=\"mouseLeaveCard($event)\">\n      \n      <mat-card>\n         <mat-card-title class=\"lm__card-title\">\n            Email Authentication\n         </mat-card-title>\n         <mat-card-content>\n\n            <p>If you agree to the <span><button mat-button class=\"auth__tnc-button\" color=\"accent\">Terms and Conditions</button></span> of our website, please click the authentication button below;</p>\n\n            <div @iconClickButton *ngIf=\"mouseEnter; else elseBlock\" class=\"auth__button\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n               <button class=\"x-button-enter\" mat-raised-button color=\"primary\" (click)=\"agreeTnc()\">\n                  <mat-icon class=\"y-icon-enter\">touch_app</mat-icon>\n                  I agree to the Terms and Conditions \n               </button>\n            </div>\n            <ng-template #elseBlock>\n               <div @iconClickButton class=\"auth__button\" fxLayout=\"column\" fxLayoutAlign=\"center center\">            \n                  <button class=\"x-button-enter\" mat-raised-button color=\"primary\" (click)=\"agreeTnc()\">\n                     <mat-icon class=\"y-icon-enter\">touch_app</mat-icon>\n                     I agree to the Terms and Conditions \n                  </button>\n               </div>\n            </ng-template>\n\n         </mat-card-content>\n      </mat-card>\n   </div>\n\n\n\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/biz-plan/bp-setup/biz-model/biz-model-form/biz-model-form.component.html": 
        /*!*************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/biz-plan/bp-setup/biz-model/biz-model-form/biz-model-form.component.html ***!
          \*************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"lm__form-container\" fxFlex=\"50\" fxFlex.lt-md=\"100\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n    <form [formGroup]=\"comForm\">\n        <div class=\"lm__form\" fxLayout=\"column\">\n\n            <mat-form-field #name id=\"mff-01\" [color]=\"nameCom.touched ? 'accent' : 'Íprikigjfgjmary'\" (click)=\"activeElem(name)\">\n                <input matInput name=\"name\" placeholder=\"Company Name\" formControlName=\"nameCom\" (keyup.enter)=\"saveInput(name)\" required>\n                <mat-icon matSuffix id=\"mi-01\" [color]=\"nameCom.touched ? 'accent' : 'primary'\">cloud</mat-icon>\n                <mat-hint>Click to edit, press \"Enter\" to save</mat-hint>\n            </mat-form-field>\n\n            <div class=\"lc__select-box mat-elevation-z8\" *ngIf=\"selected\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                <div>\n                    <div class=\"lc__select-list\" *ngFor=\"let list of selected\" fxLayout=\"row\" fxLayoutAlign=\"start\">\n                        <mat-icon class=\"lm__icon\" color=\"accent\">check_circle</mat-icon> <em>{{ list.name }}: {{ list.descriptions }}</em>\n                    </div>\n                </div>\n                <button mat-raised-button color=\"accent\">\n                   <mat-icon class=\"lm__icon\">cloud_upload</mat-icon>\n                   Update\n                  </button>\n            </div>\n\n            <mat-form-field>\n                <mat-label>Business Categories</mat-label>\n                <mat-select formControlName=\"categoryCom\" multiple (selectionChange)=\"saveSelected($event)\">\n                    <mat-option>Click to select</mat-option>\n                    <mat-optgroup *ngFor=\"let group of categories\" [label]=\"group.name\" [disabled]=\"group.disabled\">\n                        <mat-option *ngFor=\"let description of group.descriptions\" [value]=\"group.name + '-' + description\">\n                            {{ description }}\n                        </mat-option>\n                    </mat-optgroup>\n                </mat-select>\n                <mat-hint>Click the \"down arrow\" to select.</mat-hint>\n            </mat-form-field>\n\n            <mat-form-field #ssmCom id=\"mff-02\" [color]=\"ssmCom.touched ? 'accent' : 'primary'\" (click)=\"activeElem(ssmCom)\">\n                <input matInput name=\"ssmCom\" placeholder=\"Company ssmCom Number\" formControlName=\"ssmCom\" (keyup.enter)=\"saveInput(noComp)\">\n                <mat-icon matSuffix id=\"mi-02\" [color]=\"ssmCom.touched ? 'accent' : 'primary'\">cloud</mat-icon>\n                <mat-hint>Click to edit, press \"Enter\" to save</mat-hint>\n            </mat-form-field>\n\n        </div>\n    </form>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/biz-plan/bp-setup/biz-model/biz-model.component.html": 
        /*!*****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/biz-plan/bp-setup/biz-model/biz-model.component.html ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-horizontal-stepper [linear]=\"isLinear\" #stepper>\n\n    <mat-step>\n        <app-biz-model-form></app-biz-model-form>\n    </mat-step>\n\n    <mat-step>\n        <h2 class=\"lm__text-title-primary\">{{ title | titlecase }}</h2>\n        <div class=\"content\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly stretch\">\n\n\n            <div class=\"container\">\n                <p>Drag suggestions below to the right box to get started</p>\n\n                <div cdkDropList #todoList=\"cdkDropList\" [cdkDropListData]=\"todo\" [cdkDropListConnectedTo]=\"doneList\" class=\"list\" (cdkDropListDropped)=\"drop($event)\">\n                    <div class=\"list-item\" *ngFor=\"let item of todo\" cdkDrag>{{item}}</div>\n                </div>\n            </div>\n\n            <div class=\"container\">\n                <p>Drop suggestion here</p>\n\n                <div cdkDropList #doneList=\"cdkDropList\" [cdkDropListData]=\"done\" [cdkDropListConnectedTo]=\"todoList\" class=\"list\" (cdkDropListDropped)=\"drop($event)\">\n                    <div class=\"list-item\" *ngFor=\"let item of done\" cdkDrag>{{item}}</div>\n                </div>\n            </div>\n\n        </div>\n    </mat-step>\n\n    <mat-step>\n        <ng-template matStepLabel>Done</ng-template>\n        You are now done.\n        <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button (click)=\"stepper.reset()\">Reset</button>\n        </div>\n    </mat-step>\n\n</mat-horizontal-stepper>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/biz-plan/bp-setup/bp-setup.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/biz-plan/bp-setup/bp-setup.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-biz-model></app-biz-model>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/dashboard/dashboard.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/dashboard/dashboard.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"lc__dash-menu-item-title\">\n    {{ menuGrp1.name }}\n</div>\n<div class=\"lc__dash-menu-item\">\n\n    <div class=\"lc__dash-menu-icons\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-around center\">\n\n        <div class=\"lc__dash-menu-icon\" *ngFor=\"let menu of menuGrp1.menus\" matTooltip=\"{{ menu.name }}\">\n            <mat-icon>\n                {{ menu.icon }}\n            </mat-icon>\n        </div>\n\n    </div>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/forgot-password/forgot-password.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/forgot-password/forgot-password.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <mat-card>\n\n        <mat-card-title>\n            Forgot Password\n        </mat-card-title>\n\n        <mat-card-content>\n            <div class=\"lm__form\">\n                <form [formGroup]=\"fpForm\" (ngSubmit)=\"onSubmit()\">\n\n                    <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n                        <mat-form-field appearance=\"fill\">\n                            <mat-label>Email</mat-label>\n                            <input matInput class=\"lm__form-input\" placeholder=\"Email\" #email formControlName=\"email\" required autocomplete=\"email\">\n                            <mat-icon matSuffix color=\"primary\">alternate_email</mat-icon>\n                            <mat-hint>Enter email here</mat-hint>\n\n                            <mat-error *ngIf=\"fpForm.get('email').hasError('required')\">\n                                Email is <strong>required</strong>\n                            </mat-error>\n                            <mat-error *ngIf=\"fpForm.get('email').hasError('email')\">\n                                Please enter a valid <strong>email</strong>\n                            </mat-error>\n                        </mat-form-field>\n\n                        <button mat-raised-button class=\"lm__form-button\" type=\"submit\" [disabled]=\"fpForm.invalid\" color=\"primary\">\n                           <mat-icon>check_circle</mat-icon>\n                           Submit\n                        </button>\n\n                    </div>\n\n                    {{ fpForm.errors }}\n\n                </form>\n            </div>\n        </mat-card-content>\n\n        <mat-card-actions fxLayout=\"rows\" fxLayoutAlign=\"center\">\n            <div class=\"lm__form-footer\">\n                <mat-divider></mat-divider>\n                <button mat-button routerLink=\"/user/login\">\n                     Login\n                  </button>\n                <span> | </span>\n                <button mat-button routerLink=\"/user/register\">\n                     Register\n                  </button>\n            </div>\n        </mat-card-actions>\n\n    </mat-card>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/login.component.html": 
        /*!***************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/login.component.html ***!
          \***************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"lm__card\" *ngIf=\"!profle\">\n\n    <mat-card>\n\n        <mat-card-title>\n            Login Form\n        </mat-card-title>\n\n        <mat-card-content>\n            <div class=\"lm__form\">\n                <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n\n                    <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n                        <mat-form-field class=\"lm__form-input\" appearance=\"fill\">\n                            <mat-label>Email</mat-label>\n                            <input matInput placeholder=\"Email\" #email formControlName=\"email\" required autocomplete=\"email\">\n                            <mat-icon matSuffix color=\"primary\">alternate_email</mat-icon>\n                            <mat-hint>Enter email here</mat-hint>\n\n                            <mat-error *ngIf=\"loginForm.get('email').hasError('required')\">\n                                Email is <strong>required</strong>\n                            </mat-error>\n                            <mat-error *ngIf=\"loginForm.get('email').hasError('email')\">\n                                Please enter a valid <strong>email</strong>\n                            </mat-error>\n                        </mat-form-field>\n\n                        <mat-form-field class=\"lm__form-input\" appearance=\"fill\">\n                            <mat-label>Password</mat-label>\n                            <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" required autocomplete=\"password\">\n                            <mat-icon matSuffix color=\"primary\">vpn_key</mat-icon>\n                            <mat-hint>Enter password here</mat-hint>\n                            <mat-error *ngIf=\"loginForm.get('password').hasError('required')\">\n                                Password is <strong>required</strong>\n                            </mat-error>\n                        </mat-form-field>\n\n                        <button mat-raised-button class=\"lm__form-button\" type=\"submit\" [disabled]=\"loginForm.invalid\" color=\"primary\">\n                           <mat-icon>check_circle</mat-icon>\n                           Login\n                        </button>\n\n                    </div>\n                </form>\n\n            </div>\n        </mat-card-content>\n\n        <mat-card-footer>\n            <mat-divider></mat-divider>\n            <button mat-button routerLink=\"/user/forgot-password\">Forgot Password</button>\n            <span> | </span>\n            <button mat-button routerLink=\"/user/register\">Register</button>\n        </mat-card-footer>\n\n    </mat-card>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/main-logo/main-logo.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/main-logo/main-logo.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n   <img  class=\"lm__logo\"\n         alt=\"\"\n         src=\"{{ logo }}\" \n   >\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/register/register.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/register/register.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"lm__card\" fxLayout=\"column\" fxLAyoutAlign=\"center center\">\n\n    <mat-card>\n\n        <mat-card-title>\n            Register Form\n        </mat-card-title>\n\n        <mat-card-content>\n\n            <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n                <div fxLayout=\"column\" fxLAyoutAlign=\"center center\">\n\n                    <mat-form-field appearance=\"fill\">\n                        <mat-label>Email</mat-label>\n                        <input matInput placeholder=\"Email\" #email formControlName=\"email\" required autocomplete=\"email\">\n                        <mat-icon matSuffix color=\"primary\">alternate_email</mat-icon>\n                        <mat-hint>Enter email here</mat-hint>\n                        <mat-error *ngIf=\"registerForm.get('email').hasError('required')\">\n                            Email is <strong>required</strong>\n                        </mat-error>\n                        <mat-error *ngIf=\"registerForm.get('email').hasError('email')\">\n                            Please enter a valid <strong>email</strong>\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field appearance=\"fill\">\n                        <mat-label>Password</mat-label>\n                        <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" required autocomplete=\"password\">\n                        <mat-icon matSuffix color=\"primary\">vpn_key</mat-icon>\n                        <mat-hint>Enter password here</mat-hint>\n                        <mat-error *ngIf=\"registerForm.get('password').hasError('required')\">\n                            Password is <strong>required</strong>\n                        </mat-error>\n                        <mat-error *ngIf=\"registerForm.get('password').hasError('minlength')\">\n                            Minimum password is <strong>{{ registerForm.get('password').errors.minlength.requiredLength }}</strong> characters. Now you entered only <strong>{{ registerForm.get('password').errors.minlength.actualLength }}</strong>\n                        </mat-error>\n                    </mat-form-field>\n\n                    <button mat-raised-button class=\"register__form-button\" type=\"submit\" [disabled]=\"registerForm.invalid\" color=\"primary\">\n                           <mat-icon>check_circle</mat-icon>\n                           Register\n                     </button>\n                </div>\n\n            </form>\n\n        </mat-card-content>\n\n        <mat-card-actions>\n            <mat-divider></mat-divider>\n            <span>If you have already registered:</span>\n            <button mat-button routerLink=\"/user/login\">Login</button>\n        </mat-card-actions>\n\n    </mat-card>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: routes, AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function () { return routes; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _charts_sectors_sectors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./charts/sectors/sectors.component */ "./src/app/charts/sectors/sectors.component.ts");
            /* harmony import */ var _charts_class_class_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./charts/class/class.component */ "./src/app/charts/class/class.component.ts");
            /* harmony import */ var _charts_intro_intro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./charts/intro/intro.component */ "./src/app/charts/intro/intro.component.ts");
            /* harmony import */ var _charts_states_construction_states_construction_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./charts/states-construction/states-construction.component */ "./src/app/charts/states-construction/states-construction.component.ts");
            /* harmony import */ var _charts_states_manufacturing_states_manufacturing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./charts/states-manufacturing/states-manufacturing.component */ "./src/app/charts/states-manufacturing/states-manufacturing.component.ts");
            /* harmony import */ var _charts_state_sector_history_state_sector_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./charts/state-sector-history/state-sector-history.component */ "./src/app/charts/state-sector-history/state-sector-history.component.ts");
            /* harmony import */ var _charts_states_sector_states_sector_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./charts/states-sector/states-sector.component */ "./src/app/charts/states-sector/states-sector.component.ts");
            /* harmony import */ var src_app_user_user_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/user/user-routing.module */ "./src/app/user/user-routing.module.ts");
            /* harmony import */ var _charts_state_sector_forecast_state_sector_forecast_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./charts/state-sector-forecast/state-sector-forecast.component */ "./src/app/charts/state-sector-forecast/state-sector-forecast.component.ts");
            /* harmony import */ var _charts_regression_regression_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./charts/regression/regression.component */ "./src/app/charts/regression/regression.component.ts");
            var routes = [
                { path: '', component: _charts_intro_intro_component__WEBPACK_IMPORTED_MODULE_5__["IntroComponent"] },
                { path: 'class', component: _charts_class_class_component__WEBPACK_IMPORTED_MODULE_4__["ClassComponent"] },
                { path: 'sectors', component: _charts_sectors_sectors_component__WEBPACK_IMPORTED_MODULE_3__["SectorsComponent"] },
                { path: 'states/:sector', component: _charts_states_sector_states_sector_component__WEBPACK_IMPORTED_MODULE_9__["StatesSectorComponent"] },
                { path: 'states/construction', component: _charts_states_construction_states_construction_component__WEBPACK_IMPORTED_MODULE_6__["StatesConstructionComponent"] },
                { path: 'states/manufacturing', component: _charts_states_manufacturing_states_manufacturing_component__WEBPACK_IMPORTED_MODULE_7__["StatesManufacturingComponent"] },
                { path: 'history/:state/:sector', component: _charts_state_sector_history_state_sector_history_component__WEBPACK_IMPORTED_MODULE_8__["StateSectorHistoryComponent"] },
                { path: 'forecast/:state/:sector', component: _charts_state_sector_forecast_state_sector_forecast_component__WEBPACK_IMPORTED_MODULE_11__["StateSectorForecastComponent"] },
                { path: 'forecast/linear', component: _charts_regression_regression_component__WEBPACK_IMPORTED_MODULE_12__["RegressionComponent"] },
                { path: 'user', redirectTo: '/user/login', pathMatch: 'full' }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(src_app_user_user_routing_module__WEBPACK_IMPORTED_MODULE_10__["userRoutes"])
                    ],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'stats';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
            /* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var _charts_sectors_sectors_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./charts/sectors/sectors.component */ "./src/app/charts/sectors/sectors.component.ts");
            /* harmony import */ var _charts_class_class_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./charts/class/class.component */ "./src/app/charts/class/class.component.ts");
            /* harmony import */ var _charts_intro_intro_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./charts/intro/intro.component */ "./src/app/charts/intro/intro.component.ts");
            /* harmony import */ var _charts_states_construction_states_construction_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./charts/states-construction/states-construction.component */ "./src/app/charts/states-construction/states-construction.component.ts");
            /* harmony import */ var _charts_states_manufacturing_states_manufacturing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./charts/states-manufacturing/states-manufacturing.component */ "./src/app/charts/states-manufacturing/states-manufacturing.component.ts");
            /* harmony import */ var _layout_body_body_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layout/body/body.component */ "./src/app/layout/body/body.component.ts");
            /* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layout/footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
            /* harmony import */ var _charts_state_sector_history_state_sector_history_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./charts/state-sector-history/state-sector-history.component */ "./src/app/charts/state-sector-history/state-sector-history.component.ts");
            /* harmony import */ var _charts_states_sector_states_sector_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./charts/states-sector/states-sector.component */ "./src/app/charts/states-sector/states-sector.component.ts");
            /* harmony import */ var _charts_intro_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./charts/intro/line-chart/line-chart.component */ "./src/app/charts/intro/line-chart/line-chart.component.ts");
            /* harmony import */ var _charts_intro_line_chart_line_chart_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./charts/intro/line-chart/line-chart.service */ "./src/app/charts/intro/line-chart/line-chart.service.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _swimlane_ngx_graph__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @swimlane/ngx-graph */ "./node_modules/@swimlane/ngx-graph/fesm2015/swimlane-ngx-graph.js");
            /* harmony import */ var _charts_intro_mind_map_mind_map_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./charts/intro/mind-map/mind-map.component */ "./src/app/charts/intro/mind-map/mind-map.component.ts");
            /* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
            /* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
            /* harmony import */ var _charts_configs_clickable_clickable_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./charts/configs/clickable/clickable.component */ "./src/app/charts/configs/clickable/clickable.component.ts");
            /* harmony import */ var _charts_state_sector_forecast_state_sector_forecast_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./charts/state-sector-forecast/state-sector-forecast.component */ "./src/app/charts/state-sector-forecast/state-sector-forecast.component.ts");
            /* harmony import */ var _charts_regression_regression_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./charts/regression/regression.component */ "./src/app/charts/regression/regression.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
                        _charts_sectors_sectors_component__WEBPACK_IMPORTED_MODULE_8__["SectorsComponent"],
                        _charts_class_class_component__WEBPACK_IMPORTED_MODULE_9__["ClassComponent"],
                        _charts_intro_intro_component__WEBPACK_IMPORTED_MODULE_10__["IntroComponent"],
                        _charts_states_construction_states_construction_component__WEBPACK_IMPORTED_MODULE_11__["StatesConstructionComponent"],
                        _charts_states_manufacturing_states_manufacturing_component__WEBPACK_IMPORTED_MODULE_12__["StatesManufacturingComponent"],
                        _layout_body_body_component__WEBPACK_IMPORTED_MODULE_13__["BodyComponent"],
                        _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                        _charts_state_sector_history_state_sector_history_component__WEBPACK_IMPORTED_MODULE_15__["StateSectorHistoryComponent"],
                        _charts_states_sector_states_sector_component__WEBPACK_IMPORTED_MODULE_16__["StatesSectorComponent"],
                        _charts_intro_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_17__["LineChartComponent"],
                        _charts_intro_mind_map_mind_map_component__WEBPACK_IMPORTED_MODULE_22__["MindMapComponent"],
                        _charts_configs_clickable_clickable_component__WEBPACK_IMPORTED_MODULE_28__["ClickableComponent"],
                        _charts_state_sector_forecast_state_sector_forecast_component__WEBPACK_IMPORTED_MODULE_29__["StateSectorForecastComponent"],
                        _charts_regression_regression_component__WEBPACK_IMPORTED_MODULE_30__["RegressionComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__["NgxChartsModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_19__["CommonModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
                        _swimlane_ngx_graph__WEBPACK_IMPORTED_MODULE_21__["NgxGraphModule"],
                        _material_module__WEBPACK_IMPORTED_MODULE_24__["MaterialModule"],
                        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__["DragDropModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__["BrowserAnimationsModule"],
                        _user_user_module__WEBPACK_IMPORTED_MODULE_27__["UserModule"]
                    ],
                    providers: [
                        _charts_intro_line_chart_line_chart_service__WEBPACK_IMPORTED_MODULE_18__["LineChartService"]
                    ],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/charts/class/class.component.scss": 
        /*!***************************************************!*\
          !*** ./src/app/charts/class/class.component.scss ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9jbGFzcy9jbGFzcy5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/charts/class/class.component.ts": 
        /*!*************************************************!*\
          !*** ./src/app/charts/class/class.component.ts ***!
          \*************************************************/
        /*! exports provided: ClassComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassComponent", function () { return ClassComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ClassComponent = /** @class */ (function () {
                function ClassComponent() {
                    this.view = [700, 400];
                    // options
                    this.showXAxis = true;
                    this.showYAxis = true;
                    this.gradient = false;
                    this.showLegend = true;
                    this.legendTitle = 'Classifications';
                    this.showXAxisLabel = true;
                    this.xAxisLabel = 'Establishment Classification';
                    this.showYAxisLabel = true;
                    this.yAxisLabel = 'Number of Establishments';
                    this.colorScheme = {
                        name: 'cool',
                        selectable: true,
                        group: 'Ordinal',
                        domain: ['#DD0066', '#FF7400', '#FFCE00', '#0B9822', '#043869']
                    };
                    this.single = [
                        {
                            "name": "Large",
                            "value": 31136
                        },
                        {
                            "name": "Medium",
                            "value": 17568
                        },
                        {
                            "name": "Small",
                            "value": 230891
                        },
                        {
                            "name": "Micro",
                            "value": 899920
                        }
                    ];
                    this.showDataLabel = false;
                }
                ClassComponent.prototype.ngOnInit = function () {
                };
                ClassComponent.prototype.toggle = function () {
                    this.showDataLabel = !this.showDataLabel;
                    if (this.showDataLabel) {
                        this.showDataLabel = true;
                    }
                    else {
                        this.showDataLabel = false;
                    }
                };
                return ClassComponent;
            }());
            ClassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-class',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./class.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/class/class.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./class.component.scss */ "./src/app/charts/class/class.component.scss")).default]
                })
            ], ClassComponent);
            /***/ 
        }),
        /***/ "./src/app/charts/configs/clickable/clickable.component.scss": 
        /*!*******************************************************************!*\
          !*** ./src/app/charts/configs/clickable/clickable.component.scss ***!
          \*******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9jb25maWdzL2NsaWNrYWJsZS9jbGlja2FibGUuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/charts/configs/clickable/clickable.component.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/charts/configs/clickable/clickable.component.ts ***!
          \*****************************************************************/
        /*! exports provided: ClickableComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickableComponent", function () { return ClickableComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ClickableComponent = /** @class */ (function () {
                function ClickableComponent() {
                }
                ClickableComponent.prototype.ngOnInit = function () {
                };
                return ClickableComponent;
            }());
            ClickableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-clickable',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./clickable.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/configs/clickable/clickable.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./clickable.component.scss */ "./src/app/charts/configs/clickable/clickable.component.scss")).default]
                })
            ], ClickableComponent);
            /***/ 
        }),
        /***/ "./src/app/charts/configs/services/charts-service/charts-service.service.ts": 
        /*!**********************************************************************************!*\
          !*** ./src/app/charts/configs/services/charts-service/charts-service.service.ts ***!
          \**********************************************************************************/
        /*! exports provided: ChartsService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsService", function () { return ChartsService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var ChartsService = /** @class */ (function () {
                function ChartsService(http) {
                    this.http = http;
                }
                ChartsService.prototype.linear = function (datas) {
                    return this.http.post('/api/charts/regression/linear', datas);
                };
                return ChartsService;
            }());
            ChartsService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            ChartsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ChartsService);
            /***/ 
        }),
        /***/ "./src/app/charts/data.ts": 
        /*!********************************!*\
          !*** ./src/app/charts/data.ts ***!
          \********************************/
        /*! exports provided: datas */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "datas", function () { return datas; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var datas = [
                {
                    state: 'Johor',
                    period: [
                        { year: "2019", services: 56848, wholesale: 49209, construction: 9516, manufacturing: 9843, agriculture: 3268, mining: 242 },
                        { year: "2018", services: 56921, wholesale: 49080, construction: 9463, manufacturing: 9432, agriculture: 3260, mining: 242 },
                        { year: "2017", services: 53656, wholesale: 52070, construction: 9106, manufacturing: 9666, agriculture: 3012, mining: 237 },
                        { year: "2016", services: 54569, wholesale: 47298, construction: 8061, manufacturing: 9881, agriculture: 2968, mining: 190 }
                    ]
                },
                {
                    state: 'Kedah',
                    period: [
                        { year: "2019", services: 25697, wholesale: 24747, construction: 3719, manufacturing: 3675, agriculture: 880, mining: 87 },
                        { year: "2018", services: 25720, wholesale: 24727, construction: 3707, manufacturing: 3673, agriculture: 877, mining: 87 },
                        { year: "2017", services: 25465, wholesale: 25080, construction: 3628, manufacturing: 3788, agriculture: 892, mining: 84 },
                        { year: "2016", services: 25913, wholesale: 22947, construction: 3274, manufacturing: 3660, agriculture: 861, mining: 50 }
                    ]
                },
                {
                    state: 'Kelantan',
                    period: [
                        { year: "2019", services: 19114, wholesale: 29049, construction: 1604, manufacturing: 1956, agriculture: 791, mining: 151 },
                        { year: "2018", services: 19102, wholesale: 29049, construction: 1590, manufacturing: 1955, agriculture: 791, mining: 151 },
                        { year: "2017", services: 19134, wholesale: 28107, construction: 1478, manufacturing: 1984, agriculture: 811, mining: 148 },
                        { year: "2016", services: 21958, wholesale: 26402, construction: 1091, manufacturing: 2099, agriculture: 996, mining: 101 }
                    ]
                },
                {
                    state: 'Melaka',
                    period: [
                        { year: "2019", services: 17807, wholesale: 17153, construction: 3179, manufacturing: 1629, agriculture: 784, mining: 44 },
                        { year: "2018", services: 17806, wholesale: 17143, construction: 3166, manufacturing: 2110, agriculture: 784, mining: 44 },
                        { year: "2017", services: 17848, wholesale: 17143, construction: 3111, manufacturing: 1720, agriculture: 808, mining: 41 },
                        { year: "2016", services: 18688, wholesale: 16129, construction: 2896, manufacturing: 1808, agriculture: 880, mining: 37 }
                    ]
                },
                {
                    state: 'N-sembilan',
                    period: [
                        { year: "2019", services: 18410, wholesale: 14328, construction: 4144, manufacturing: 2112, agriculture: 726, mining: 66 },
                        { year: "2018", services: 18410, wholesale: 14321, construction: 4129, manufacturing: 2110, agriculture: 726, mining: 66 },
                        { year: "2017", services: 18222, wholesale: 14773, construction: 3993, manufacturing: 2113, agriculture: 741, mining: 66 },
                        { year: "2016", services: 18162, wholesale: 13267, construction: 3745, manufacturing: 1978, agriculture: 693, mining: 38 }
                    ]
                },
                {
                    state: 'Pahang',
                    period: [
                        { year: "2019", services: 17130, wholesale: 20352, construction: 3353, manufacturing: 1958, agriculture: 1674, mining: 341 },
                        { year: "2018", services: 17058, wholesale: 20338, construction: 3339, manufacturing: 1952, agriculture: 1661, mining: 341 },
                        { year: "2017", services: 16805, wholesale: 20558, construction: 3270, manufacturing: 1936, agriculture: 1696, mining: 218 },
                        { year: "2016", services: 17344, wholesale: 18669, construction: 2901, manufacturing: 2138, agriculture: 1662, mining: 251 }
                    ]
                },
                {
                    state: 'Perak',
                    period: [
                        { year: "2019", services: 34675, wholesale: 35465, construction: 5610, manufacturing: 4642, agriculture: 2194, mining: 232 },
                        { year: "2018", services: 35203, wholesale: 35087, construction: 5575, manufacturing: 4619, agriculture: 2185, mining: 228 },
                        { year: "2017", services: 35163, wholesale: 39566, construction: 5443, manufacturing: 4916, agriculture: 2154, mining: 218 },
                        { year: "2016", services: 36601, wholesale: 37865, construction: 4924, manufacturing: 4810, agriculture: 2222, mining: 160 }
                    ]
                },
                {
                    state: 'Perlis',
                    period: [
                        { year: "2019", services: 3614, wholesale: 3552, construction: 1179, manufacturing: 425, agriculture: 107, mining: 5 },
                        { year: "2018", services: 3612, wholesale: 3551, construction: 1176, manufacturing: 423, agriculture: 107, mining: 5 },
                        { year: "2017", services: 3631, wholesale: 2989, construction: 1176, manufacturing: 459, agriculture: 108, mining: 6 },
                        { year: "2016", services: 3612, wholesale: 2719, construction: 1128, manufacturing: 385, agriculture: 108, mining: 4 }
                    ]
                },
                {
                    state: 'P-pinang',
                    period: [
                        { year: "2019", services: 38316, wholesale: 33097, construction: 4799, manufacturing: 5269, agriculture: 895, mining: 146 },
                        { year: "2018", services: 38281, wholesale: 32956, construction: 4769, manufacturing: 5268, agriculture: 895, mining: 146 },
                        { year: "2017", services: 38375, wholesale: 35543, construction: 4620, manufacturing: 5174, agriculture: 905, mining: 142 },
                        { year: "2016", services: 37144, wholesale: 32318, construction: 3985, manufacturing: 5519, agriculture: 923, mining: 111 }
                    ]
                },
                {
                    state: 'Sabah',
                    period: [
                        { year: "2019", services: 30529, wholesale: 40134, construction: 6809, manufacturing: 2183, agriculture: 2554, mining: 144 },
                        { year: "2018", services: 30091, wholesale: 40088, construction: 7213, manufacturing: 2246, agriculture: 2569, mining: 144 },
                        { year: "2017", services: 28996, wholesale: 32529, construction: 6882, manufacturing: 2287, agriculture: 2567, mining: 156 },
                        { year: "2016", services: 28375, wholesale: 30490, construction: 5978, manufacturing: 2099, agriculture: 2359, mining: 87 }
                    ]
                },
                {
                    state: 'Sarawak',
                    period: [
                        { year: "2019", services: 34783, wholesale: 31580, construction: 6500, manufacturing: 3579, agriculture: 2128, mining: 276 },
                        { year: "2018", services: 33617, wholesale: 31502, construction: 5865, manufacturing: 3342, agriculture: 2057, mining: 276 },
                        { year: "2017", services: 33310, wholesale: 35370, construction: 5525, manufacturing: 3357, agriculture: 2026, mining: 279 },
                        { year: "2016", services: 32880, wholesale: 32972, construction: 4416, manufacturing: 3033, agriculture: 1816, mining: 150 }
                    ]
                },
                {
                    state: 'Selangor',
                    period: [
                        { year: "2019", services: 114758, wholesale: 109902, construction: 16878, manufacturing: 13915, agriculture: 1728, mining: 646 },
                        { year: "2018", services: 114435, wholesale: 109459, construction: 16726, manufacturing: 13852, agriculture: 1727, mining: 647 },
                        { year: "2017", services: 113382, wholesale: 109889, construction: 15707, manufacturing: 13819, agriculture: 1776, mining: 620 },
                        { year: "2016", services: 105836, wholesale: 91752, construction: 12673, manufacturing: 12759, agriculture: 1346, mining: 300 }
                    ]
                },
                {
                    state: 'Terengganu',
                    period: [
                        { year: "2019", services: 14612, wholesale: 17262, construction: 3288, manufacturing: 2119, agriculture: 500, mining: 178 },
                        { year: "2018", services: 14508, wholesale: 17120, construction: 3281, manufacturing: 2081, agriculture: 499, mining: 177 },
                        { year: "2017", services: 14578, wholesale: 16549, construction: 3239, manufacturing: 2179, agriculture: 518, mining: 183 },
                        { year: "2016", services: 19197, wholesale: 13285, construction: 2899, manufacturing: 2394, agriculture: 580, mining: 151 }
                    ]
                },
                {
                    state: 'K-lumpur',
                    period: [
                        { year: "2019", services: 91468, wholesale: 67830, construction: 10804, manufacturing: 6918, agriculture: 790, mining: 709 },
                        { year: "2018", services: 91662, wholesale: 72801, construction: 10739, manufacturing: 6930, agriculture: 790, mining: 709 },
                        { year: "2017", services: 89713, wholesale: 79052, construction: 10336, manufacturing: 7412, agriculture: 860, mining: 679 },
                        { year: "2016", services: 81982, wholesale: 71738, construction: 8412, manufacturing: 5728, agriculture: 561, mining: 367 }
                    ]
                },
                {
                    state: 'Labuan',
                    period: [
                        { year: "2019", services: 1634, wholesale: 1137, construction: 277, manufacturing: 137, agriculture: 12, mining: 6 },
                        { year: "2018", services: 1654, wholesale: 1158, construction: 277, manufacturing: 137, agriculture: 12, mining: 6 },
                        { year: "2017", services: 1639, wholesale: 1631, construction: 273, manufacturing: 143, agriculture: 16, mining: 8 },
                        { year: "2016", services: 1560, wholesale: 1085, construction: 249, manufacturing: 136, agriculture: 11, mining: 7 }
                    ]
                },
                {
                    state: 'Putrajaya',
                    period: [
                        { year: "2019", services: 887, wholesale: 412, construction: 40, manufacturing: 21, agriculture: 0, mining: 0 },
                        { year: "2018", services: 1009, wholesale: 410, construction: 46, manufacturing: 16, agriculture: 0, mining: 0 },
                        { year: "2017", services: 996, wholesale: 417, construction: 52, manufacturing: 29, agriculture: 0, mining: 0 },
                        { year: "2016", services: 969, wholesale: 330, construction: 47, manufacturing: 34, agriculture: 0, mining: 0 }
                    ]
                }
            ];
            /***/ 
        }),
        /***/ "./src/app/charts/intro/intro.component.scss": 
        /*!***************************************************!*\
          !*** ./src/app/charts/intro/intro.component.scss ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9pbnRyby9pbnRyby5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/charts/intro/intro.component.ts": 
        /*!*************************************************!*\
          !*** ./src/app/charts/intro/intro.component.ts ***!
          \*************************************************/
        /*! exports provided: IntroComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function () { return IntroComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var IntroComponent = /** @class */ (function () {
                function IntroComponent() {
                    this.title = 'Market Size of Establishments in Malaysia';
                    this.subtitle = 'Statistical Data Analysis as of June 2019';
                    this.content = 'Prepared by: Azrin Amin';
                }
                IntroComponent.prototype.ngOnInit = function () {
                };
                return IntroComponent;
            }());
            IntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-intro',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./intro.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/intro/intro.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./intro.component.scss */ "./src/app/charts/intro/intro.component.scss")).default]
                })
            ], IntroComponent);
            /***/ 
        }),
        /***/ "./src/app/charts/intro/line-chart/line-chart.component.scss": 
        /*!*******************************************************************!*\
          !*** ./src/app/charts/intro/line-chart/line-chart.component.scss ***!
          \*******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9pbnRyby9saW5lLWNoYXJ0L2xpbmUtY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/charts/intro/line-chart/line-chart.component.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/charts/intro/line-chart/line-chart.component.ts ***!
          \*****************************************************************/
        /*! exports provided: LineChartComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartComponent", function () { return LineChartComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _line_chart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line-chart.service */ "./src/app/charts/intro/line-chart/line-chart.service.ts");
            var LineChartComponent = /** @class */ (function () {
                function LineChartComponent(lineChartService) {
                    this.lineChartService = lineChartService;
                    this.view = [700, 400];
                    this.showXAxis = true;
                    this.showYAxis = true;
                    this.gradient = false;
                    this.showLegend = false;
                    this.legendTitle = '';
                    this.showXAxisLabel = true;
                    this.xAxisLabel = '';
                    this.showYAxisLabel = false;
                    this.yAxisLabel = '';
                    this.colorScheme = {
                        name: 'cool',
                        selectable: true,
                        group: 'Ordinal',
                        domain: [
                            '#DD0066', '#FF7400', '#FFCE00', '#0B9822', '#043869',
                            '#e02f80', '#ff9339', '#ffd939', '#24b23d', '#07447f',
                            '#E65899', '#ffaa64', '#ffe164', '#46c05c', '#0b549a',
                            '#b50052'
                        ]
                    };
                    this.useAnimation = true;
                    this.rangeFillOpacity = 0.15;
                    this.legendPosition = 'right';
                    this.roundDomains = false;
                    this.showshowGridLines = true;
                    this.showDataLabel = true;
                    this.timeline = true;
                    this.autoscale = true;
                }
                LineChartComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.lineChartService.startGenerator();
                    this.lineChartService.dataYasObs.subscribe(function (response) {
                        console.log(response);
                        _this.single = { name: 'api', series: [{ value: response }] };
                    });
                    this.lineChartService.getFakeData().subscribe(function (response) {
                        console.log(response);
                    });
                };
                return LineChartComponent;
            }());
            LineChartComponent.ctorParameters = function () { return [
                { type: _line_chart_service__WEBPACK_IMPORTED_MODULE_2__["LineChartService"] }
            ]; };
            LineChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-line-chart',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./line-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/intro/line-chart/line-chart.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./line-chart.component.scss */ "./src/app/charts/intro/line-chart/line-chart.component.scss")).default]
                })
            ], LineChartComponent);
            /***/ 
        }),
        /***/ "./src/app/charts/intro/line-chart/line-chart.service.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/charts/intro/line-chart/line-chart.service.ts ***!
          \***************************************************************/
        /*! exports provided: LineChartService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartService", function () { return LineChartService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var LineChartService = /** @class */ (function () {
                function LineChartService(http) {
                    this.http = http;
                    this.dataSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.dataY);
                    this.dataYasObs = this.dataSource;
                }
                LineChartService.prototype.startGenerator = function () {
                    var CIRCLES = 2 * Math.PI;
                    // Parameters
                    var A = 0.1; // Amplitude
                    var v = 5000 * CIRCLES; // Half a circle per second
                    var start = 1;
                    var k = 0; // Offset
                    var t = 1;
                    var posY = A * Math.sin(v * t) + k;
                    var Y = posY;
                    this.dataSource.next(Y);
                };
                LineChartService.prototype.getFakeData = function () {
                    return this.http.get('https://my-json-server.typicode.com/typicode/demo/db');
                };
                return LineChartService;
            }());
            LineChartService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
            LineChartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], LineChartService);
            /***/ 
        }),
        /***/ "./src/app/charts/intro/mind-map/mind-map.component.scss": 
        /*!***************************************************************!*\
          !*** ./src/app/charts/intro/mind-map/mind-map.component.scss ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9pbnRyby9taW5kLW1hcC9taW5kLW1hcC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/charts/intro/mind-map/mind-map.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/charts/intro/mind-map/mind-map.component.ts ***!
          \*************************************************************/
        /*! exports provided: MindMapComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MindMapComponent", function () { return MindMapComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var MindMapComponent = /** @class */ (function () {
                function MindMapComponent() {
                    this.node = { data: { color: [
                                '#DD0066', '#FF7400', '#FFCE00', '#0B9822', '#043869',
                                '#e02f80', '#ff9339', '#ffd939', '#24b23d', '#07447f',
                                '#E65899', '#ffaa64', '#ffe164', '#46c05c', '#0b549a',
                                '#b50052'
                            ] } };
                }
                MindMapComponent.prototype.ngOnInit = function () {
                };
                return MindMapComponent;
            }());
            MindMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-mind-map',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mind-map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/intro/mind-map/mind-map.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mind-map.component.scss */ "./src/app/charts/intro/mind-map/mind-map.component.scss")).default]
                })
            ], MindMapComponent);
            /***/ 
        }),
        /***/ "./src/app/charts/regression/regression.component.scss": 
        /*!*************************************************************!*\
          !*** ./src/app/charts/regression/regression.component.scss ***!
          \*************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9yZWdyZXNzaW9uL3JlZ3Jlc3Npb24uY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/charts/regression/regression.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/charts/regression/regression.component.ts ***!
          \***********************************************************/
        /*! exports provided: RegressionComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegressionComponent", function () { return RegressionComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _configs_services_charts_service_charts_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configs/services/charts-service/charts-service.service */ "./src/app/charts/configs/services/charts-service/charts-service.service.ts");
            var RegressionComponent = /** @class */ (function () {
                function RegressionComponent(chartsService) {
                    this.chartsService = chartsService;
                    this.view = [700, 400];
                    this.colorScheme = {
                        name: 'cool',
                        selectable: true,
                        group: 'Ordinal',
                        domain: ['#DD0066', '#FF7400', '#FFCE00', '#0B9822', '#043869']
                    };
                    this.results = "plotData";
                    this.animations = "animations";
                    this.legend = false;
                    this.legendTitle = "legendTitle";
                    this.legendPosition = "right";
                    this.xAxis = false;
                    this.yAxis = true;
                    this.showXAxisLabel = false;
                    this.showYAxisLabel = false;
                    this.xAxisLabel = 'angle';
                    this.yAxisLabel = 'radius';
                    this.autoScale = true;
                    this.showGridLines = true;
                    this.tooltipDisabled = true;
                    this.showSeriesOnHover = true;
                    this.trimYAxisTicks = true;
                    this.mathText = '3 - 1.5*sin(x) + cos(2*x) - 1.5*abs(cos(x))';
                }
                RegressionComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var y = [56848, 56921, 53656, 54569].reverse();
                    var x = [2019, 2018, 2017, 2016].reverse();
                    var datas = { x: x, y: y };
                    this.chartsService.linear(datas).subscribe(function (response) {
                        console.log(response);
                        var linearRegression = response.regression; // regression: "f(x) = 1010.2 * x - 1982580"
                        var linearScore = response.score; // score: { r: 0.7935199383339885, r2: 0.6296738925335769}
                        var linearSlope = response.slope; // slope: 1010.2
                        var linearIntercept = response.intercept; // intercept: -1982580
                        var twoPi = 2 * Math.PI;
                        var length = 25;
                        var series = Array.apply(null, { length: length }).map(function (d, i) {
                            var x = i / (length - 1);
                            var t = x * twoPi;
                            return {
                                name: ~~(x * 360),
                                value: _this.plotData
                            };
                        });
                        _this.plotData = series;
                    });
                };
                return RegressionComponent;
            }());
            RegressionComponent.ctorParameters = function () { return [
                { type: _configs_services_charts_service_charts_service_service__WEBPACK_IMPORTED_MODULE_2__["ChartsService"] }
            ]; };
            RegressionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-regression',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./regression.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/regression/regression.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./regression.component.scss */ "./src/app/charts/regression/regression.component.scss")).default]
                })
            ], RegressionComponent);
            /***/ 
        }),
        /***/ "./src/app/charts/sectors/sectors.component.scss": 
        /*!*******************************************************!*\
          !*** ./src/app/charts/sectors/sectors.component.scss ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9zZWN0b3JzL3NlY3RvcnMuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/charts/sectors/sectors.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/charts/sectors/sectors.component.ts ***!
          \*****************************************************/
        /*! exports provided: SectorsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectorsComponent", function () { return SectorsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var SectorsComponent = /** @class */ (function () {
                function SectorsComponent(router) {
                    this.router = router;
                    this.view = [700, 400];
                    this.results = [
                        {
                            "name": "Agriculture",
                            "value": 19031
                        },
                        {
                            "name": "Construction",
                            "value": 81699
                        },
                        {
                            "name": "Manufacturing",
                            "value": 60021
                        },
                        {
                            "name": "Mining",
                            "value": 3273
                        },
                        {
                            "name": "Services",
                            "value": 520282
                        },
                        {
                            "name": "Wholesale",
                            "value": 495209
                        }
                    ];
                    this.colorScheme = {
                        domain: ['#E5E4E2', '#DD0066', '#FF7400', '#FFCE00', '#0B9822', '#043869']
                    };
                    this.animations = true;
                    this.labels = true;
                    this.trimLabels = true;
                    this.maxLabelLength = 20;
                    this.showLegend = true;
                    this.legendTitle = 'Sectors';
                    this.legendPosition = 'right';
                    this.gradient = true;
                    this.tooltipDisabled = false;
                    this.explodeSlices = false;
                    this.arcWidth = 1;
                }
                SectorsComponent.prototype.ngOnInit = function () {
                };
                SectorsComponent.prototype.sectorSelected = function (event) {
                    var link = event.name.toLowerCase();
                    this.router.navigate(['states', link]);
                };
                return SectorsComponent;
            }());
            SectorsComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            SectorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-sectors',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sectors.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/sectors/sectors.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sectors.component.scss */ "./src/app/charts/sectors/sectors.component.scss")).default]
                })
            ], SectorsComponent);
            /***/ 
        }),
        /***/ "./src/app/charts/state-sector-forecast/state-sector-forecast.component.scss": 
        /*!***********************************************************************************!*\
          !*** ./src/app/charts/state-sector-forecast/state-sector-forecast.component.scss ***!
          \***********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9zdGF0ZS1zZWN0b3ItZm9yZWNhc3Qvc3RhdGUtc2VjdG9yLWZvcmVjYXN0LmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/charts/state-sector-forecast/state-sector-forecast.component.ts": 
        /*!*********************************************************************************!*\
          !*** ./src/app/charts/state-sector-forecast/state-sector-forecast.component.ts ***!
          \*********************************************************************************/
        /*! exports provided: StateSectorForecastComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateSectorForecastComponent", function () { return StateSectorForecastComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_charts_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/charts/data */ "./src/app/charts/data.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            ;
            var StateSectorForecastComponent = /** @class */ (function () {
                function StateSectorForecastComponent(activatedRoute, router) {
                    this.activatedRoute = activatedRoute;
                    this.router = router;
                    this.chartSettings = {
                        // Common Settings
                        showXAxis: true,
                        showYAxis: true,
                        gradient: false,
                        showLegend: true,
                        legendTitle: 'Legend',
                        legendPosition: 'right',
                        showXAxisLabel: true,
                        tooltipDisabled: false,
                        showText: true,
                        xAxisLabel: 'Country',
                        showYAxisLabel: true,
                        yAxisLabel: 'GDP Per Capita',
                        showGridLines: true,
                        innerPadding: '10%',
                        barPadding: 8,
                        groupPadding: 16,
                        roundDomains: false,
                        maxRadius: 10,
                        minRadius: 3,
                        showSeriesOnHover: true,
                        roundEdges: true,
                        animations: true,
                        // xScaleMin: any,
                        // xScaleMax: any,
                        // yScaleMin: number,
                        // yScaleMax: number,
                        showDataLabel: false,
                        noBarWhenZero: true,
                        trimXAxisTicks: true,
                        trimYAxisTicks: true,
                        rotateXAxisTicks: true,
                        maxXAxisTickLength: 16,
                        maxYAxisTickLength: 16,
                        // Line Settings 
                        autoScale: true,
                        timeline: false,
                        colorScheme: {
                            name: 'cool',
                            selectable: true,
                            group: 'Ordinal',
                            domain: [
                                '#DD0066', '#FF7400', '#FFCE00', '#0B9822', '#043869',
                                '#e02f80', '#ff9339', '#ffd939', '#24b23d', '#07447f',
                                '#E65899', '#ffaa64', '#ffe164', '#46c05c', '#0b549a',
                                '#b50052'
                            ]
                        },
                        view: [700, 400]
                    };
                    this.selectForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                        state: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                        sector: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
                    });
                }
                StateSectorForecastComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.activatedRoute.params.subscribe(function (response) {
                        var state = response.state;
                        var sector = response.sector;
                        _this.title = state + " " + sector + " sector growth";
                        _this.chartSettings.legendTitle = "" + sector;
                        var preData;
                        var initData = src_app_charts_data__WEBPACK_IMPORTED_MODULE_3__["datas"].reduce(function (acc, data) {
                            if (data.state.toLowerCase() === state) {
                                var stateData = data.period;
                                var sectorData = stateData.map(function (sectors) {
                                    var sectorsKey = Object.keys(sectors);
                                    if (sectorsKey = sector)
                                        preData = { name: sectors.year, value: sectors["" + sectorsKey] };
                                    return preData;
                                });
                                acc = sectorData;
                            }
                            return acc;
                        }, []);
                        initData.reverse();
                        var results = [{ name: state, series: initData }];
                        _this.results = results;
                    });
                    var states = src_app_charts_data__WEBPACK_IMPORTED_MODULE_3__["datas"].map(function (data) {
                        return data.state;
                    });
                    var iSectors;
                    var period = src_app_charts_data__WEBPACK_IMPORTED_MODULE_3__["datas"][0]['period'];
                    iSectors = period[0];
                    var sectorsKey = Object.keys(iSectors);
                    sectorsKey.splice(0, 1);
                    var options = { states: states, sectors: sectorsKey };
                    this.options = options;
                };
                StateSectorForecastComponent.prototype.onSelect = function () {
                    var value = this.selectForm.value;
                    value.state = value.state.toLowerCase();
                    this.router.navigate(['forecast', value.state, value.sector]);
                };
                return StateSectorForecastComponent;
            }());
            StateSectorForecastComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            StateSectorForecastComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-state-sector-forecast',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./state-sector-forecast.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/state-sector-forecast/state-sector-forecast.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./state-sector-forecast.component.scss */ "./src/app/charts/state-sector-forecast/state-sector-forecast.component.scss")).default]
                })
            ], StateSectorForecastComponent);
            /***/ 
        }),
        /***/ "./src/app/charts/state-sector-history/state-sector-history.component.scss": 
        /*!*********************************************************************************!*\
          !*** ./src/app/charts/state-sector-history/state-sector-history.component.scss ***!
          \*********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9zdGF0ZS1zZWN0b3ItaGlzdG9yeS9zdGF0ZS1zZWN0b3ItaGlzdG9yeS5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/charts/state-sector-history/state-sector-history.component.ts": 
        /*!*******************************************************************************!*\
          !*** ./src/app/charts/state-sector-history/state-sector-history.component.ts ***!
          \*******************************************************************************/
        /*! exports provided: StateSectorHistoryComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateSectorHistoryComponent", function () { return StateSectorHistoryComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ "./src/app/charts/data.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            ;
            var StateSectorHistoryComponent = /** @class */ (function () {
                function StateSectorHistoryComponent(activatedRoute) {
                    this.activatedRoute = activatedRoute;
                    this.view = [700, 400];
                    // options
                    this.showXAxis = true;
                    this.showYAxis = true;
                    this.gradient = true;
                    this.showLegend = true;
                    this.showXAxisLabel = true;
                    this.xAxisLabel = 'Establishment Classification';
                    this.showYAxisLabel = true;
                    this.yAxisLabel = 'Number of Establishments';
                    this.colorScheme = {
                        name: 'cool',
                        selectable: true,
                        group: 'Ordinal',
                        domain: [
                            '#DD0066', '#FF7400', '#FFCE00', '#0B9822', '#043869',
                            '#e02f80', '#ff9339', '#ffd939', '#24b23d', '#07447f',
                            '#E65899', '#ffaa64', '#ffe164', '#46c05c', '#0b549a',
                            '#b50052'
                        ]
                    };
                    this.showDataLabel = false;
                    this.datas = _data__WEBPACK_IMPORTED_MODULE_2__["datas"];
                }
                StateSectorHistoryComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.activatedRoute.params.subscribe(function (response) {
                        var state = response.state;
                        var sector = response.sector;
                        _this.title = sector + " Establishment History for the State of " + state;
                        _this.legendTitle = sector;
                        var datas = _this.datas;
                        var stateDatas = datas.reduce(function (acc, data) {
                            if (data.state.toLowerCase() === state)
                                acc = data.period;
                            return acc;
                        }, {});
                        var dataAcc = [];
                        var data = stateDatas.reduce(function (acc, data) {
                            if (data[sector])
                                dataAcc.push({ name: "" + data.year, value: data[sector] });
                            acc = dataAcc;
                            return acc;
                        }, []);
                        _this.single = data.reverse();
                    });
                };
                StateSectorHistoryComponent.prototype.toggle = function () {
                    this.showDataLabel = !this.showDataLabel;
                    if (this.showDataLabel) {
                        this.showDataLabel = true;
                    }
                    else {
                        this.showDataLabel = false;
                    }
                };
                return StateSectorHistoryComponent;
            }());
            StateSectorHistoryComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
            ]; };
            StateSectorHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-state-sector-history',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./state-sector-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/state-sector-history/state-sector-history.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./state-sector-history.component.scss */ "./src/app/charts/state-sector-history/state-sector-history.component.scss")).default]
                })
            ], StateSectorHistoryComponent);
            /***/ 
        }),
        /***/ "./src/app/charts/states-construction/states-construction.component.scss": 
        /*!*******************************************************************************!*\
          !*** ./src/app/charts/states-construction/states-construction.component.scss ***!
          \*******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9zdGF0ZXMtY29uc3RydWN0aW9uL3N0YXRlcy1jb25zdHJ1Y3Rpb24uY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/charts/states-construction/states-construction.component.ts": 
        /*!*****************************************************************************!*\
          !*** ./src/app/charts/states-construction/states-construction.component.ts ***!
          \*****************************************************************************/
        /*! exports provided: StatesConstructionComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatesConstructionComponent", function () { return StatesConstructionComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var StatesConstructionComponent = /** @class */ (function () {
                function StatesConstructionComponent(router) {
                    this.router = router;
                    this.view = [700, 400];
                    this.showXAxis = true;
                    this.showYAxis = true;
                    this.gradient = false;
                    this.showLegend = true;
                    this.legendTitle = 'construction';
                    this.showXAxisLabel = true;
                    this.xAxisLabel = 'No of Establishments';
                    this.showYAxisLabel = true;
                    this.yAxisLabel = 'States';
                    this.colorScheme = {
                        name: 'cool',
                        selectable: true,
                        group: 'Ordinal',
                        domain: [
                            '#DD0066', '#FF7400', '#FFCE00', '#0B9822', '#043869',
                            '#e02f80', '#ff9339', '#ffd939', '#24b23d', '#07447f',
                            '#E65899', '#ffaa64', '#ffe164', '#46c05c', '#0b549a',
                            '#b50052'
                        ]
                    };
                    this.single = [
                        {
                            "name": "Johor",
                            "value": 9516
                        },
                        {
                            "name": "Kedah",
                            "value": 3719
                        },
                        {
                            "name": "Kelantan",
                            "value": 1604
                        },
                        {
                            "name": "Melaka",
                            "value": 3719
                        },
                        {
                            "name": "N Sembilan",
                            "value": 4144
                        },
                        {
                            "name": "Pahang",
                            "value": 3353
                        },
                        {
                            "name": "Perak",
                            "value": 5610
                        },
                        {
                            "name": "Perlis",
                            "value": 1179
                        },
                        {
                            "name": "P Pinang",
                            "value": 4799
                        },
                        {
                            "name": "Sabah",
                            "value": 6809
                        },
                        {
                            "name": "Sarawak",
                            "value": 6500
                        },
                        {
                            "name": "Selangor",
                            "value": 16878
                        },
                        {
                            "name": "Terengganu",
                            "value": 3288
                        },
                        {
                            "name": "Kuala Lumpur",
                            "value": 10804
                        },
                        {
                            "name": "Labuan",
                            "value": 277
                        },
                        {
                            "name": "Putrajaya",
                            "value": 40
                        }
                    ];
                    this.showDataLabel = false;
                }
                StatesConstructionComponent.prototype.ngOnInit = function () {
                };
                StatesConstructionComponent.prototype.toggle = function () {
                    this.showDataLabel = !this.showDataLabel;
                    if (this.showDataLabel) {
                        this.showDataLabel = true;
                    }
                    else {
                        this.showDataLabel = false;
                    }
                };
                StatesConstructionComponent.prototype.onStateSelect = function (event) {
                    var stateSelected = event.name.toLowerCase().split(' ').join('-');
                    this.router.navigate(['history', stateSelected, this.legendTitle]);
                };
                return StatesConstructionComponent;
            }());
            StatesConstructionComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            StatesConstructionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-states-construction',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./states-construction.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/states-construction/states-construction.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./states-construction.component.scss */ "./src/app/charts/states-construction/states-construction.component.scss")).default]
                })
            ], StatesConstructionComponent);
            /***/ 
        }),
        /***/ "./src/app/charts/states-manufacturing/states-manufacturing.component.scss": 
        /*!*********************************************************************************!*\
          !*** ./src/app/charts/states-manufacturing/states-manufacturing.component.scss ***!
          \*********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9zdGF0ZXMtbWFudWZhY3R1cmluZy9zdGF0ZXMtbWFudWZhY3R1cmluZy5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/charts/states-manufacturing/states-manufacturing.component.ts": 
        /*!*******************************************************************************!*\
          !*** ./src/app/charts/states-manufacturing/states-manufacturing.component.ts ***!
          \*******************************************************************************/
        /*! exports provided: StatesManufacturingComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatesManufacturingComponent", function () { return StatesManufacturingComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var StatesManufacturingComponent = /** @class */ (function () {
                function StatesManufacturingComponent() {
                    this.title = 'Manufacturing Establishments by State';
                    this.view = [700, 400];
                    // options
                    this.showXAxis = true;
                    this.showYAxis = true;
                    this.gradient = false;
                    this.showLegend = true;
                    this.legendTitle = 'Manufacturing';
                    this.showXAxisLabel = true;
                    this.xAxisLabel = 'No of Establishments';
                    this.showYAxisLabel = true;
                    this.yAxisLabel = 'States';
                    this.colorScheme = {
                        name: 'cool',
                        selectable: true,
                        group: 'Ordinal',
                        domain: [
                            '#DD0066', '#FF7400', '#FFCE00', '#0B9822', '#043869',
                            '#e02f80', '#ff9339', '#ffd939', '#24b23d', '#07447f',
                            '#E65899', '#ffaa64', '#ffe164', '#46c05c', '#0b549a',
                            '#b50052'
                        ]
                    };
                    this.single = [
                        {
                            "name": "Johor",
                            "value": 9483
                        },
                        {
                            "name": "Kedah",
                            "value": 3675
                        },
                        {
                            "name": "Kelantan",
                            "value": 1956
                        },
                        {
                            "name": "Melaka",
                            "value": 1629
                        },
                        {
                            "name": "N Sembilan",
                            "value": 2112
                        },
                        {
                            "name": "Pahang",
                            "value": 1958
                        },
                        {
                            "name": "Perak",
                            "value": 4642
                        },
                        {
                            "name": "Perlis",
                            "value": 425
                        },
                        {
                            "name": "P Pinang",
                            "value": 5269
                        },
                        {
                            "name": "Sabah",
                            "value": 2183
                        },
                        {
                            "name": "Sarawak",
                            "value": 3579
                        },
                        {
                            "name": "Selangor",
                            "value": 13915
                        },
                        {
                            "name": "Terengganu",
                            "value": 2119
                        },
                        {
                            "name": "Kuala Lumpur",
                            "value": 6918
                        },
                        {
                            "name": "Labuan",
                            "value": 137
                        },
                        {
                            "name": "Putrajaya",
                            "value": 21
                        }
                    ];
                    this.showDataLabel = false;
                }
                StatesManufacturingComponent.prototype.ngOnInit = function () {
                };
                StatesManufacturingComponent.prototype.toggle = function () {
                    this.showDataLabel = !this.showDataLabel;
                    if (this.showDataLabel) {
                        this.showDataLabel = true;
                    }
                    else {
                        this.showDataLabel = false;
                    }
                };
                return StatesManufacturingComponent;
            }());
            StatesManufacturingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-states-manufacturing',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./states-manufacturing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/states-manufacturing/states-manufacturing.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./states-manufacturing.component.scss */ "./src/app/charts/states-manufacturing/states-manufacturing.component.scss")).default]
                })
            ], StatesManufacturingComponent);
            /***/ 
        }),
        /***/ "./src/app/charts/states-sector/states-sector.component.scss": 
        /*!*******************************************************************!*\
          !*** ./src/app/charts/states-sector/states-sector.component.scss ***!
          \*******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9zdGF0ZXMtc2VjdG9yL3N0YXRlcy1zZWN0b3IuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/charts/states-sector/states-sector.component.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/charts/states-sector/states-sector.component.ts ***!
          \*****************************************************************/
        /*! exports provided: StatesSectorComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatesSectorComponent", function () { return StatesSectorComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ "./src/app/charts/data.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var StatesSectorComponent = /** @class */ (function () {
                function StatesSectorComponent(activatedRoute, router) {
                    this.activatedRoute = activatedRoute;
                    this.router = router;
                    this.view = [700, 400];
                    // options
                    this.showXAxis = true;
                    this.showYAxis = true;
                    this.gradient = false;
                    this.showLegend = true;
                    this.showXAxisLabel = true;
                    this.xAxisLabel = 'No of Establishments';
                    this.showYAxisLabel = true;
                    this.yAxisLabel = 'States';
                    this.colorScheme = {
                        name: 'cool',
                        selectable: true,
                        group: 'Ordinal',
                        domain: [
                            '#DD0066', '#FF7400', '#FFCE00', '#0B9822', '#043869',
                            '#e02f80', '#ff9339', '#ffd939', '#24b23d', '#07447f',
                            '#E65899', '#ffaa64', '#ffe164', '#46c05c', '#0b549a',
                            '#b50052'
                        ]
                    };
                    this.showDataLabel = false;
                }
                StatesSectorComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.activatedRoute.params.subscribe(function (response) {
                        var sector = response.sector;
                        _this.title = sector + " establishments by state";
                        _this.legendTitle = sector;
                        _this.yAxisTicks = _data__WEBPACK_IMPORTED_MODULE_2__["datas"]['state'];
                        var k = [];
                        var t = _data__WEBPACK_IMPORTED_MODULE_2__["datas"].reduce(function (acc, data) {
                            k.push({ name: data.state, value: data.period[0]["" + sector] });
                            acc = k;
                            return acc;
                        }, []);
                        _this.single = t;
                    });
                };
                StatesSectorComponent.prototype.toggle = function () {
                    this.showDataLabel = !this.showDataLabel;
                    if (this.showDataLabel) {
                        this.showDataLabel = true;
                    }
                    else {
                        this.showDataLabel = false;
                    }
                };
                StatesSectorComponent.prototype.onStateSelect = function (event) {
                    var stateSelected = event.name.toLowerCase().split(' ').join('-');
                    this.router.navigate(['history', stateSelected, this.legendTitle]);
                };
                return StatesSectorComponent;
            }());
            StatesSectorComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            StatesSectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-states-sector',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./states-sector.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/states-sector/states-sector.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./states-sector.component.scss */ "./src/app/charts/states-sector/states-sector.component.scss")).default]
                })
            ], StatesSectorComponent);
            /***/ 
        }),
        /***/ "./src/app/configurations/animations/anim-fn.ts": 
        /*!******************************************************!*\
          !*** ./src/app/configurations/animations/anim-fn.ts ***!
          \******************************************************/
        /*! exports provided: xEnter, yEnter, leftEnter, imageEnter, imageEnterDrop, imageLeave, iconButtonEnter, primaryButtonClick, xMouseEnter, banner1Enter, banner2Enter, banner3Enter, banner4Enter, banner5Enter */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xEnter", function () { return xEnter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yEnter", function () { return yEnter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leftEnter", function () { return leftEnter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageEnter", function () { return imageEnter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageEnterDrop", function () { return imageEnterDrop; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageLeave", function () { return imageLeave; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconButtonEnter", function () { return iconButtonEnter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryButtonClick", function () { return primaryButtonClick; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xMouseEnter", function () { return xMouseEnter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "banner1Enter", function () { return banner1Enter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "banner2Enter", function () { return banner2Enter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "banner3Enter", function () { return banner3Enter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "banner4Enter", function () { return banner4Enter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "banner5Enter", function () { return banner5Enter; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            var xEnter = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animation"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.x-enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 0.3,
                        transform: 'translateX(-100px)'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(-30, [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2.5s cubic-bezier(.39,-0.41,0,1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'none' }))
                    ])
                ], { optional: true })
            ]); //
            /*   Usage  *
               animations: [
                  trigger('xEnter', [
                     transition(':enter', [
                        useAnimation(xEnter)
               ]) ]) ]
            */
            var yEnter = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animation"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.y-enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 0.3,
                        transform: 'translateY(-100px)'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(-30, [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2.5s cubic-bezier(.55,-0.64,.24,2)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'rotate(-10deg)' }))
                    ])
                ], { optional: true })
            ]); //
            /*   Usage  *
               animations: [
                  trigger('yEnter', [
                     transition(':enter', [
                        useAnimation(yEnter)
               ]) ]) ]
            */
            var leftEnter = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animation"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.left-enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 0.5,
                        transform: 'translateX(400px)'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(30, [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('5.0s cubic-bezier(.55,-0.64,.24,2)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }))
                    ])
                ], { optional: true })
            ]); //
            /*   Usage  *
               animations: [
                  trigger('leftEnter', [
                     transition(':enter', [
                        useAnimation(leftEnter)
               ]) ]) ]
            */
            var imageEnter = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animation"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.image-enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 0.3
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(-30, [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1.0s cubic-bezier(.03,.79,.9,.38)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 1,
                            transform: 'scaleX(1.2)'
                        }))
                    ])
                ], { optional: true })
            ]); //
            /*   Usage  *
               animations: [
                  trigger('imageEnter', [
                     transition(':enter', [
                        useAnimation(imageEnter)
               ]) ]) ]
            */
            var imageEnterDrop = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animation"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.image-enter-drop', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 0.3
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(-30, [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1.5s cubic-bezier(.31,-0.91,0,1.31)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 1,
                            transform: 'translateY(10px)'
                        }))
                    ])
                ], { optional: true })
            ]); //
            /*   Usage  *
               animations: [
                  trigger('imageEnter', [
                     transition(':enter', [
                        useAnimation(imageEnter)
               ]) ]) ]
            */
            var imageLeave = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animation"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.image-enter-leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 0.3
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(-30, [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2s cubic-bezier(.03,.79,.9,.38)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 1,
                            transform: 'none'
                        }))
                    ])
                ], { optional: true })
            ]); //
            /*   Usage  *
               trigger('imageEnter', [
                     transition(':enter', [
                        useAnimation(imageEnter)
                  ]) ]) ]
            */
            var iconButtonEnter = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animation"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.y-icon-enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 0.3,
                        transform: 'translateY(50px)'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(-30, [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2.5s cubic-bezier(.18,-0.47,.39,1.36)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 1,
                            transform: 'none'
                        }))
                    ])
                ], { optional: true }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.x-button-enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 0.9,
                        transform: 'scale(0.9, 0.9)',
                        'background-color': '#fb002d'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(-30, [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2.5s cubic-bezier(.18,-0.47,.39,1.36)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 1,
                            transform: 'none'
                        }))
                    ])
                ])
            ]); //
            /*   Usage  *
               animations: [
                  trigger('y-mouse-enter', [
                     transition(':enter', [
                        useAnimation(yMouseEnter)
               ]) ]) ]
            */
            var primaryButtonClick = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animation"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.x-button-click', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 0.9,
                        transform: 'scale(0.9, 0.9)',
                        'background-color': '#fb002d'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(-30, [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2.5s cubic-bezier(.18,-0.47,.39,1.36)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 1,
                            transform: 'none'
                        }))
                    ])
                ])
            ]); //
            /*   Usage  *
               animations: [
                  trigger('y-mouse-enter', [
                     transition(':enter', [
                        useAnimation(yMouseEnter)
               ]) ]) ]
            */
            var xMouseEnter = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animation"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.x-mouse-enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 0.3,
                        transform: 'translateX(-100px)'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(-30, [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2.5s cubic-bezier(.55,-0.64,.24,2)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'none' }))
                    ])
                ], { optional: true })
            ]); //
            /*   Usage  *
               animations: [
                  trigger('iconButtonEnter', [
                     transition(':enter', [
                        useAnimation(iconButtonEnter)
               ]) ]) ]
            */
            var banner1Enter = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animation"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.banner1-enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 0.3,
                        transform: 'translateX(-100px)'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(-30, [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2s cubic-bezier(.39,-0.41,0,1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'none' }))
                    ])
                ], { optional: true })
            ]); //
            /*   Usage  *
               animations: [
                  trigger('banner1Enter', [
                     transition(':enter', [
                        useAnimation(banner1Enter)
               ]) ]) ]
            */
            var banner2Enter = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animation"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.banner2-enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 0.3,
                        transform: 'translateX(200px)'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(-30, [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2s cubic-bezier(.42,.14,.93,.53)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'none' }))
                    ])
                ], { optional: true })
            ]); //
            /*   Usage  *
               animations: [
                  trigger('banner2Enter', [
                     transition(':enter', [
                        useAnimation(banner2Enter)
               ]) ]) ]
            */
            var banner3Enter = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animation"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.banner3-enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 0,
                        transform: 'translateY(-100px)'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(-30, [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('3s cubic-bezier(.58,-0.36,0,1.91)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'none' }))
                    ])
                ], { optional: true })
            ]); //
            /*   Usage  *
               animations: [
                  trigger('banner2Enter', [
                     transition(':enter', [
                        useAnimation(banner2Enter)
               ]) ]) ]
            */
            var banner4Enter = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animation"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.banner4-enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 0.3,
                        transform: 'translateY(100px)'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(-30, [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2s cubic-bezier(.58,-0.36,0,1.91)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateY(-40px)' }))
                    ])
                ], { optional: true })
            ]); //
            /*   Usage  *
               animations: [
                  trigger('banner2Enter', [
                     transition(':enter', [
                        useAnimation(banner2Enter)
               ]) ]) ]
            */
            var banner5Enter = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animation"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.banner5-enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 0
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(-30, [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2s cubic-bezier(.39,-0.41,0,1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateY(-40px)' }))
                    ])
                ], { optional: true })
            ]); //
            /*   Usage  *
               animations: [
                  trigger('banner2Enter', [
                     transition(':enter', [
                        useAnimation(banner2Enter)
               ]) ]) ]
            */
            /***/ 
        }),
        /***/ "./src/app/layout/body/body.component.scss": 
        /*!*************************************************!*\
          !*** ./src/app/layout/body/body.component.scss ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9ib2R5L2JvZHkuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/layout/body/body.component.ts": 
        /*!***********************************************!*\
          !*** ./src/app/layout/body/body.component.ts ***!
          \***********************************************/
        /*! exports provided: BodyComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyComponent", function () { return BodyComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var BodyComponent = /** @class */ (function () {
                function BodyComponent() {
                }
                BodyComponent.prototype.ngOnInit = function () {
                };
                return BodyComponent;
            }());
            BodyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-body',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./body.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/body/body.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./body.component.scss */ "./src/app/layout/body/body.component.scss")).default]
                })
            ], BodyComponent);
            /***/ 
        }),
        /***/ "./src/app/layout/footer/footer.component.scss": 
        /*!*****************************************************!*\
          !*** ./src/app/layout/footer/footer.component.scss ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/layout/footer/footer.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/layout/footer/footer.component.ts ***!
          \***************************************************/
        /*! exports provided: FooterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function () { return FooterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FooterComponent = /** @class */ (function () {
                function FooterComponent() {
                }
                FooterComponent.prototype.ngOnInit = function () {
                };
                return FooterComponent;
            }());
            FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-footer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/layout/footer/footer.component.scss")).default]
                })
            ], FooterComponent);
            /***/ 
        }),
        /***/ "./src/app/material.module.ts": 
        /*!************************************!*\
          !*** ./src/app/material.module.ts ***!
          \************************************/
        /*! exports provided: MaterialModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function () { return MaterialModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
            /* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
            /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
            /* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
            /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
            /* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
            /* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
            /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
            /* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
            /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
            /* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
            /* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
            /* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
            /* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
            /* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
            /* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
            /* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
            /* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
            /* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
            /* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
            /* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
            /* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
            /* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
            /* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
            /* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
            /* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
            /* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
            // Angular Material Modules
            var MaterialModule = /** @class */ (function () {
                function MaterialModule() {
                }
                return MaterialModule;
            }());
            MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
                        _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
                        _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
                        _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"],
                        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
                        _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
                        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__["MatSnackBarModule"],
                        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatTreeModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatProgressBarModule"],
                        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
                        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__["MatStepperModule"],
                        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__["MatAutocompleteModule"],
                        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__["MatButtonToggleModule"],
                        _angular_material_badge__WEBPACK_IMPORTED_MODULE_27__["MatBadgeModule"],
                        _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"],
                        _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__["MatChipsModule"],
                        _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__["MatSliderModule"],
                        _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__["MatDividerModule"],
                        _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"],
                        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__["MatProgressSpinnerModule"],
                        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_34__["MatBottomSheetModule"],
                        _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
                        _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"],
                        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"]
                    ],
                    exports: [
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
                        _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
                        _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
                        _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"],
                        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
                        _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
                        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__["MatSnackBarModule"],
                        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatTreeModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatProgressBarModule"],
                        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
                        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__["MatStepperModule"],
                        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__["MatAutocompleteModule"],
                        _angular_material_badge__WEBPACK_IMPORTED_MODULE_27__["MatBadgeModule"],
                        _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"],
                        _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__["MatChipsModule"],
                        _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__["MatSliderModule"],
                        _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__["MatDividerModule"],
                        _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"],
                        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__["MatProgressSpinnerModule"],
                        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_34__["MatBottomSheetModule"],
                        _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
                        _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"],
                        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"]
                    ]
                })
            ], MaterialModule);
            /***/ 
        }),
        /***/ "./src/app/nav/nav.component.scss": 
        /*!****************************************!*\
          !*** ./src/app/nav/nav.component.scss ***!
          \****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/nav/nav.component.ts": 
        /*!**************************************!*\
          !*** ./src/app/nav/nav.component.ts ***!
          \**************************************/
        /*! exports provided: NavComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function () { return NavComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NavComponent = /** @class */ (function () {
                function NavComponent() {
                }
                NavComponent.prototype.ngOnInit = function () {
                };
                return NavComponent;
            }());
            NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-nav',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")).default]
                })
            ], NavComponent);
            /***/ 
        }),
        /***/ "./src/app/user/auth-register/auth-register.component.scss": 
        /*!*****************************************************************!*\
          !*** ./src/app/user/auth-register/auth-register.component.scss ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".auth__tnc-button:hover {\n  transform: scale(1.2, 1.2);\n}\n.auth__button {\n  padding-top: 5vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6cmluL0RvY3VtZW50cy9HaXRIdWIvc3RhdHMvc3JjL2FwcC91c2VyL2F1dGgtcmVnaXN0ZXIvYXV0aC1yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci9hdXRoLXJlZ2lzdGVyL2F1dGgtcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSU07RUFDRywwQkFBQTtBQ0hUO0FEUUc7RUFDRyxnQkFBQTtBQ05OIiwiZmlsZSI6InNyYy9hcHAvdXNlci9hdXRoLXJlZ2lzdGVyL2F1dGgtcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aHtcblxuICAgJl9fdG5jeyAgICAgXG5cbiAgICAgICYtYnV0dG9uOmhvdmVye1xuICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIsIDEuMik7XG4gICAgICB9XG4gICB9XG5cblxuICAgJl9fYnV0dG9ue1xuICAgICAgcGFkZGluZy10b3A6IDV2aDtcblxuICAgfVxufSIsIi5hdXRoX190bmMtYnV0dG9uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIsIDEuMik7XG59XG4uYXV0aF9fYnV0dG9uIHtcbiAgcGFkZGluZy10b3A6IDV2aDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/user/auth-register/auth-register.component.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/user/auth-register/auth-register.component.ts ***!
          \***************************************************************/
        /*! exports provided: AuthRegisterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRegisterComponent", function () { return AuthRegisterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            /* harmony import */ var src_app_configurations_animations_anim_fn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/configurations/animations/anim-fn */ "./src/app/configurations/animations/anim-fn.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_user_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/user/services/profile-service/profile-service.service */ "./src/app/user/services/profile-service/profile-service.service.ts");
            var AuthRegisterComponent = /** @class */ (function () {
                function AuthRegisterComponent(activatedRoute, profileService) {
                    this.activatedRoute = activatedRoute;
                    this.profileService = profileService;
                    this.mouseEnter = false;
                }
                AuthRegisterComponent.prototype.ngOnInit = function () {
                };
                AuthRegisterComponent.prototype.mouseEnterCard = function (event) {
                    this.mouseEnter = event.returnValue;
                };
                AuthRegisterComponent.prototype.mouseLeaveCard = function (event) {
                    this.mouseEnter = !event.returnValue;
                };
                AuthRegisterComponent.prototype.agreeTnc = function () {
                    var _this = this;
                    this.activatedRoute.params.subscribe(function (params) {
                        var authToken = params.authToken;
                        _this.authToken = authToken;
                        _this.sendAuthToken(authToken);
                    });
                };
                AuthRegisterComponent.prototype.sendAuthToken = function (authToken) {
                    this.profileService.checkAuthToken(authToken);
                };
                return AuthRegisterComponent;
            }());
            AuthRegisterComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
                { type: src_app_user_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] }
            ]; };
            AuthRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-auth-register',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth-register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/auth-register/auth-register.component.html")).default,
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('iconClickButton', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(src_app_configurations_animations_anim_fn__WEBPACK_IMPORTED_MODULE_3__["iconButtonEnter"])
                            ])
                        ])
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth-register.component.scss */ "./src/app/user/auth-register/auth-register.component.scss")).default]
                })
            ], AuthRegisterComponent);
            /***/ 
        }),
        /***/ "./src/app/user/biz-plan/bp-setup/biz-model/biz-model-form/biz-model-form.component.scss": 
        /*!***********************************************************************************************!*\
          !*** ./src/app/user/biz-plan/bp-setup/biz-model/biz-model-form/biz-model-form.component.scss ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvYml6LXBsYW4vYnAtc2V0dXAvYml6LW1vZGVsL2Jpei1tb2RlbC1mb3JtL2Jpei1tb2RlbC1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/user/biz-plan/bp-setup/biz-model/biz-model-form/biz-model-form.component.ts": 
        /*!*********************************************************************************************!*\
          !*** ./src/app/user/biz-plan/bp-setup/biz-model/biz-model-form/biz-model-form.component.ts ***!
          \*********************************************************************************************/
        /*! exports provided: BizModelFormComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BizModelFormComponent", function () { return BizModelFormComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _biz_model_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../biz-model.service */ "./src/app/user/biz-plan/bp-setup/biz-model/biz-model.service.ts");
            /* harmony import */ var src_app_user_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/user/services/profile-service/profile-service.service */ "./src/app/user/services/profile-service/profile-service.service.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            ;
            ;
            var BizModelFormComponent = /** @class */ (function () {
                function BizModelFormComponent(profileService, bizService, snackBar) {
                    this.profileService = profileService;
                    this.bizService = bizService;
                    this.snackBar = snackBar;
                    this.process = '';
                    this.icon = 'cloud';
                    this.colorOptions = 'primary';
                    this.company = { name: 'Azrin Company' };
                    this.comForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        nameCom: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("" + (this.company.name || ''), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                        ssmCom: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                        categoryCom: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
                    });
                    this.categories = [
                        { name: 'Information Technology',
                            descriptions: ['Develop computer applications', 'Develop website applications', 'Develop mobile applications']
                        },
                        { name: 'Engineeering',
                            descriptions: ['Provides electrical engineering services', 'Provides electronic engineering services', 'Provides mechanical engineering services']
                        },
                        { name: 'Construction',
                            descriptions: ['Provides high rise building services', 'Provides house building services']
                        }
                    ];
                }
                BizModelFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.profileService.profile.subscribe(function (response) {
                        _this.profile = response;
                    });
                    this.bizService.compProfile.subscribe(function (response) {
                        if (response && response._id)
                            _this.company = response;
                        else
                            _this.company = null;
                    });
                };
                Object.defineProperty(BizModelFormComponent.prototype, "nameCom", {
                    get: function () {
                        return this.comForm.get('nameCom');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BizModelFormComponent.prototype, "ssmCom", {
                    get: function () {
                        return this.comForm.get('ssmCom');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BizModelFormComponent.prototype, "categoryCom", {
                    get: function () {
                        return this.comForm.get('categoryCom');
                    },
                    enumerable: true,
                    configurable: true
                });
                BizModelFormComponent.prototype.saveInput = function (elem) {
                    var _this = this;
                    var elementId = elem._elementRef.nativeElement.id;
                    var element = document.getElementById(elementId);
                    element.getElementsByTagName('mat-icon')[0].firstChild.replaceWith('cloud_upload');
                    var input = element.getElementsByTagName('input')[0];
                    var value = input.value;
                    var name = input.name;
                    var id = this.company.id || '';
                    var company = { name: name, value: value, id: id };
                    this.bizService.edit({ company: company }).subscribe(function (response) {
                        if (response && response._id) {
                            element.getElementsByTagName('mat-icon')[0].firstChild.replaceWith('cloud_done');
                            var msg = (name + " is sucessfully saved.").toUpperCase();
                            _this.snackBar.open(msg, 'X', { duration: 5000, panelClass: 'lm__panel-primary' });
                        }
                        else {
                            element.getElementsByTagName('mat-icon')[0].firstChild.replaceWith('cloud_off');
                            _this.snackBar.open('Save operation fail, please try again', 'X', { duration: 5000, panelClass: 'lm__panel-accent' });
                        }
                    }, (function (error) {
                        element.getElementsByTagName('mat-icon')[0].firstChild.replaceWith('cloud_off');
                        _this.snackBar.open('Save operation error, please try again', 'X', { duration: 5000, panelClass: 'lm__panel-warn' });
                    }));
                };
                BizModelFormComponent.prototype.activeElem = function (elem) {
                    var elementId = elem._elementRef.nativeElement.id;
                    var element = document.getElementById(elementId);
                    element.getElementsByTagName('mat-icon')[0].firstChild.replaceWith('cloud_queue');
                };
                BizModelFormComponent.prototype.saveSelected = function (events) {
                    //   console.log(events);
                    var values = events.value;
                    var k = [];
                    var categories = values.reduce(function (acc, value) {
                        var desc = value.split('-');
                        var category = { name: desc[0], descriptions: desc[1] };
                        k.push(category);
                        acc = k;
                        return acc;
                    }, []);
                    this.selected = categories;
                    console.log(categories);
                };
                return BizModelFormComponent;
            }());
            BizModelFormComponent.ctorParameters = function () { return [
                { type: src_app_user_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
                { type: _biz_model_service__WEBPACK_IMPORTED_MODULE_3__["BizModelService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
            ]; };
            BizModelFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-biz-model-form',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./biz-model-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/biz-plan/bp-setup/biz-model/biz-model-form/biz-model-form.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./biz-model-form.component.scss */ "./src/app/user/biz-plan/bp-setup/biz-model/biz-model-form/biz-model-form.component.scss")).default]
                })
            ], BizModelFormComponent);
            /***/ 
        }),
        /***/ "./src/app/user/biz-plan/bp-setup/biz-model/biz-model.component.scss": 
        /*!***************************************************************************!*\
          !*** ./src/app/user/biz-plan/bp-setup/biz-model/biz-model.component.scss ***!
          \***************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 20px;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  display: block;\n  overflow: hidden;\n}\n\n.list-item {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  color: black;\n  font-size: 14px;\n}\n\n.list-item:last-child {\n  border: none;\n}\n\n/* Highlight the list item that is being dragged. */\n\n.cdk-drag-preview {\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n/* Animate items as they're being sorted. */\n\n.cdk-drop-dragging .cdk-drag {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n/* Animate an item that has been dropped. */\n\n.cdk-drag-animating {\n  transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.stepper-container {\n  width: 1200px;\n}\n\n.note {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6cmluL0RvY3VtZW50cy9HaXRIdWIvc3RhdHMvc3JjL2FwcC91c2VyL2Jpei1wbGFuL2JwLXNldHVwL2Jpei1tb2RlbC9iaXotbW9kZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvYml6LXBsYW4vYnAtc2V0dXAvYml6LW1vZGVsL2Jpei1tb2RlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREdBLG1EQUFBOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxxSEFBQTtBQ0RKOztBREtBLDJDQUFBOztBQUVBO0VBQ0ksc0RBQUE7QUNISjs7QURPQSwyQ0FBQTs7QUFFQTtFQUNJLHNEQUFBO0FDTEo7O0FEUUE7RUFDSSxVQUFBO0FDTEo7O0FEUUE7RUFDSSxhQUFBO0FDTEo7O0FEUUE7RUFDSSxhQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC91c2VyL2Jpei1wbGFuL2JwLXNldHVwL2Jpei1tb2RlbC9iaXotbW9kZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMCAyMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4ubGlzdCB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubGlzdC1pdGVtIHtcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBjdXJzb3I6IG1vdmU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmxpc3QtaXRlbTpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cblxuLyogSGlnaGxpZ2h0IHRoZSBsaXN0IGl0ZW0gdGhhdCBpcyBiZWluZyBkcmFnZ2VkLiAqL1xuXG4uY2RrLWRyYWctcHJldmlldyB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuXG4vKiBBbmltYXRlIGl0ZW1zIGFzIHRoZXkncmUgYmVpbmcgc29ydGVkLiAqL1xuXG4uY2RrLWRyb3AtZHJhZ2dpbmcgLmNkay1kcmFnIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cblxuLyogQW5pbWF0ZSBhbiBpdGVtIHRoYXQgaGFzIGJlZW4gZHJvcHBlZC4gKi9cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi5zdGVwcGVyLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEyMDBweDtcbn1cblxuLm5vdGUge1xuICAgIHBhZGRpbmc6IDEwcHg7XG59IiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA0MDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4ubGlzdCB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubGlzdC1pdGVtIHtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY3Vyc29yOiBtb3ZlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5saXN0LWl0ZW06bGFzdC1jaGlsZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLyogSGlnaGxpZ2h0IHRoZSBsaXN0IGl0ZW0gdGhhdCBpcyBiZWluZyBkcmFnZ2VkLiAqL1xuLmNkay1kcmFnLXByZXZpZXcge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLyogQW5pbWF0ZSBpdGVtcyBhcyB0aGV5J3JlIGJlaW5nIHNvcnRlZC4gKi9cbi5jZGstZHJvcC1kcmFnZ2luZyAuY2RrLWRyYWcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi8qIEFuaW1hdGUgYW4gaXRlbSB0aGF0IGhhcyBiZWVuIGRyb3BwZWQuICovXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uc3RlcHBlci1jb250YWluZXIge1xuICB3aWR0aDogMTIwMHB4O1xufVxuXG4ubm90ZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/user/biz-plan/bp-setup/biz-model/biz-model.component.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/user/biz-plan/bp-setup/biz-model/biz-model.component.ts ***!
          \*************************************************************************/
        /*! exports provided: BizModelComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BizModelComponent", function () { return BizModelComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var BizModelComponent = /** @class */ (function () {
                function BizModelComponent(fb) {
                    this.fb = fb;
                    this.isLinear = false;
                    this.todo = [
                        '${company.name} is ${company.type} business speciaizing in ${company.specialization} which was established on ${company.est-date}.',
                        '${company.name} is currently ${company.selling-activities} to ${company.market}.',
                        '${company.name} is fully owned by ${company.shareholders}.',
                        'Our last year total revenue was ${company.year.revenue} which generated ${company.year.pbt}.',
                        'We are planning to expand our company in ${expansion.timeline} to cover ${expansion.area} to bolster/upgrade our sales and service activities in that area which could generate ${expansion.sales-forecast} in additional revenue for the company with projected ROI of ${expansion.roi}.',
                        'We are planning to develop a new product ${npd} by ${npd.timeline} which will use ${npd.model} New Product Development Model and commercialized around ${npd.launch}.'
                    ];
                    this.done = [
                        '${company.name} is ${company.type} business speciaizing in ${company.specialization} which was established on ${company.est-date}.'
                    ];
                    this.title = 'About the Company & Business Model';
                }
                ;
                BizModelComponent.prototype.ngOnInit = function () {
                    this.firstFormGroup = this.fb.group({
                        firstCtrl: ['']
                    });
                };
                BizModelComponent.prototype.drop = function (event) {
                    if (event.previousContainer === event.container) {
                        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
                    }
                    else {
                        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
                        var datas = event.container.data;
                        var k_1;
                        var text = datas.map(function (data) {
                            if (k_1 = '')
                                k_1 = "<p>" + data + "</p>";
                            else
                                k_1 = k_1 + ("<p>" + data + "</p>");
                            return k_1;
                        });
                        this.text = "" + text;
                    }
                };
                return BizModelComponent;
            }());
            BizModelComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
            ]; };
            BizModelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-biz-model',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./biz-model.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/biz-plan/bp-setup/biz-model/biz-model.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./biz-model.component.scss */ "./src/app/user/biz-plan/bp-setup/biz-model/biz-model.component.scss")).default]
                })
            ], BizModelComponent);
            /***/ 
        }),
        /***/ "./src/app/user/biz-plan/bp-setup/biz-model/biz-model.service.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/user/biz-plan/bp-setup/biz-model/biz-model.service.ts ***!
          \***********************************************************************/
        /*! exports provided: BizModelService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BizModelService", function () { return BizModelService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var BizModelService = /** @class */ (function () {
                function BizModelService(http) {
                    this.http = http;
                    this.compSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.company);
                    this.compProfile = this.compSource;
                }
                BizModelService.prototype.edit = function (input) {
                    var _this = this;
                    return this.http.post('api/company/profile/edit', input).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (company) {
                        _this.compSource.next(company);
                        return company;
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error); }));
                };
                return BizModelService;
            }());
            BizModelService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            BizModelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], BizModelService);
            /***/ 
        }),
        /***/ "./src/app/user/biz-plan/bp-setup/bp-setup.component.scss": 
        /*!****************************************************************!*\
          !*** ./src/app/user/biz-plan/bp-setup/bp-setup.component.scss ***!
          \****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvYml6LXBsYW4vYnAtc2V0dXAvYnAtc2V0dXAuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/user/biz-plan/bp-setup/bp-setup.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/user/biz-plan/bp-setup/bp-setup.component.ts ***!
          \**************************************************************/
        /*! exports provided: BpSetupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BpSetupComponent", function () { return BpSetupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var BpSetupComponent = /** @class */ (function () {
                function BpSetupComponent() {
                }
                BpSetupComponent.prototype.ngOnInit = function () {
                };
                return BpSetupComponent;
            }());
            BpSetupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-bp-setup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bp-setup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/biz-plan/bp-setup/bp-setup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bp-setup.component.scss */ "./src/app/user/biz-plan/bp-setup/bp-setup.component.scss")).default]
                })
            ], BpSetupComponent);
            /***/ 
        }),
        /***/ "./src/app/user/dashboard/dashboard.component.scss": 
        /*!*********************************************************!*\
          !*** ./src/app/user/dashboard/dashboard.component.scss ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/user/dashboard/dashboard.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/user/dashboard/dashboard.component.ts ***!
          \*******************************************************/
        /*! exports provided: DashboardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () { return DashboardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _menus_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menus-data */ "./src/app/user/dashboard/menus-data.ts");
            ;
            ;
            var DashboardComponent = /** @class */ (function () {
                function DashboardComponent() {
                    this.menuGrp1 = _menus_data__WEBPACK_IMPORTED_MODULE_2__["menu01"];
                }
                DashboardComponent.prototype.ngOnInit = function () {
                };
                return DashboardComponent;
            }());
            DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-dashboard',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/dashboard/dashboard.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/user/dashboard/dashboard.component.scss")).default]
                })
            ], DashboardComponent);
            /***/ 
        }),
        /***/ "./src/app/user/dashboard/menu-data.ts": 
        /*!*********************************************!*\
          !*** ./src/app/user/dashboard/menu-data.ts ***!
          \*********************************************/
        /*! exports provided: menuBusiness */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuBusiness", function () { return menuBusiness; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var menuBusiness = [
                { name: 'Business', link: '', icon: 'important_devices' },
                { name: 'Business', link: '', icon: 'present_to_all' },
                { name: 'Business', link: '', icon: 'remove_from_queue' },
                { name: 'Business', link: '', icon: 'airplay' },
                { name: 'Business', link: '', icon: 'business' },
                { name: 'Business', link: '', icon: 'business' }
            ];
            /***/ 
        }),
        /***/ "./src/app/user/dashboard/menus-data.ts": 
        /*!**********************************************!*\
          !*** ./src/app/user/dashboard/menus-data.ts ***!
          \**********************************************/
        /*! exports provided: menu01 */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menu01", function () { return menu01; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _menu_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-data */ "./src/app/user/dashboard/menu-data.ts");
            var menu01 = { name: 'Main Menu', menus: _menu_data__WEBPACK_IMPORTED_MODULE_1__["menuBusiness"] };
            /***/ 
        }),
        /***/ "./src/app/user/forgot-password/forgot-password.component.scss": 
        /*!*********************************************************************!*\
          !*** ./src/app/user/forgot-password/forgot-password.component.scss ***!
          \*********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/user/forgot-password/forgot-password.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/user/forgot-password/forgot-password.component.ts ***!
          \*******************************************************************/
        /*! exports provided: ForgotPasswordComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () { return ForgotPasswordComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/profile-service/profile-service.service */ "./src/app/user/services/profile-service/profile-service.service.ts");
            var ForgotPasswordComponent = /** @class */ (function () {
                function ForgotPasswordComponent(profileService, snackBar) {
                    this.profileService = profileService;
                    this.snackBar = snackBar;
                    this.fpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])
                    });
                }
                ForgotPasswordComponent.prototype.ngOnInit = function () {
                };
                ForgotPasswordComponent.prototype.onSubmit = function () {
                    var _this = this;
                    var email = this.fpForm.get('email').value;
                    this.profileService.forgotPassword(email).subscribe(function (response) {
                        _this.snackBar.open('A password reset link has been emailed to your registered email.', 'X', { duration: 10000, panelClass: 'lm__panel-primary' });
                    }, (function (error) { return _this.snackBar.open("Error: " + error, 'X', { duration: 10000, panelClass: 'lm__panel-warn' }); }));
                };
                return ForgotPasswordComponent;
            }());
            ForgotPasswordComponent.ctorParameters = function () { return [
                { type: _services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
            ]; };
            ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-forgot-password',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/forgot-password/forgot-password.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/user/forgot-password/forgot-password.component.scss")).default]
                })
            ], ForgotPasswordComponent);
            /***/ 
        }),
        /***/ "./src/app/user/login/login.component.scss": 
        /*!*************************************************!*\
          !*** ./src/app/user/login/login.component.scss ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".login__input {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.login__form-button {\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6cmluL0RvY3VtZW50cy9HaXRIdWIvc3RhdHMvc3JjL2FwcC91c2VyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2VyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVHO0VBQ0csZ0JBQUE7RUFDQSxtQkFBQTtBQ0ROO0FES0c7RUFDRyxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0hOIiwiZmlsZSI6InNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbntcblxuICAgJl9faW5wdXR7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgfVxuXG4gICAmX19mb3JtLWJ1dHRvbntcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICB9XG59IiwiLmxvZ2luX19pbnB1dCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubG9naW5fX2Zvcm0tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/user/login/login.component.ts": 
        /*!***********************************************!*\
          !*** ./src/app/user/login/login.component.ts ***!
          \***********************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_user_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/user/services/profile-service/profile-service.service */ "./src/app/user/services/profile-service/profile-service.service.ts");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(profileService, snackBar) {
                    this.profileService = profileService;
                    this.snackBar = snackBar;
                    this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
                        password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
                    });
                    this.profile = null;
                }
                LoginComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var profile = this.profileService.profile.subscribe(function (response) {
                        if (response && response.id)
                            _this.profile = response;
                        else
                            _this.profile = null;
                    });
                };
                LoginComponent.prototype.login = function () {
                    this.profileService.login(this.loginForm.value);
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: src_app_user_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/login.component.html")).default,
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('fadeIn', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1 })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0.5 })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('true <=> false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(7000))
                        ]) //end trigger
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/user/login/login.component.scss")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/user/main-logo/main-logo.component.scss": 
        /*!*********************************************************!*\
          !*** ./src/app/user/main-logo/main-logo.component.scss ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbWFpbi1sb2dvL21haW4tbG9nby5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/user/main-logo/main-logo.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/user/main-logo/main-logo.component.ts ***!
          \*******************************************************/
        /*! exports provided: MainLogoComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLogoComponent", function () { return MainLogoComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var MainLogoComponent = /** @class */ (function () {
                function MainLogoComponent() {
                    this.logo = 'src/assets/images/azrin.jpg';
                }
                MainLogoComponent.prototype.ngOnInit = function () {
                };
                return MainLogoComponent;
            }());
            MainLogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-main-logo',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-logo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/main-logo/main-logo.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-logo.component.scss */ "./src/app/user/main-logo/main-logo.component.scss")).default]
                })
            ], MainLogoComponent);
            /***/ 
        }),
        /***/ "./src/app/user/register/register.component.scss": 
        /*!*******************************************************!*\
          !*** ./src/app/user/register/register.component.scss ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".register__input {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.register__form-button {\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6cmluL0RvY3VtZW50cy9HaXRIdWIvc3RhdHMvc3JjL2FwcC91c2VyL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2VyL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVHO0VBQ0csZ0JBQUE7RUFDQSxtQkFBQTtBQ0ROO0FES0c7RUFDRyxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0hOIiwiZmlsZSI6InNyYy9hcHAvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3RlcntcblxuICAgJl9faW5wdXR7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgfVxuXG4gICAmX19mb3JtLWJ1dHRvbntcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICB9XG59IiwiLnJlZ2lzdGVyX19pbnB1dCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ucmVnaXN0ZXJfX2Zvcm0tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/user/register/register.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/user/register/register.component.ts ***!
          \*****************************************************/
        /*! exports provided: RegisterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () { return RegisterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_user_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/user/services/profile-service/profile-service.service */ "./src/app/user/services/profile-service/profile-service.service.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var RegisterComponent = /** @class */ (function () {
                function RegisterComponent(profileService, snackBar) {
                    this.profileService = profileService;
                    this.snackBar = snackBar;
                    this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
                        password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)])
                    });
                }
                RegisterComponent.prototype.ngOnInit = function () {
                };
                RegisterComponent.prototype.register = function () {
                    this.profileService.register(this.registerForm.value);
                };
                return RegisterComponent;
            }());
            RegisterComponent.ctorParameters = function () { return [
                { type: src_app_user_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
            ]; };
            RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-register',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/register/register.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.scss */ "./src/app/user/register/register.component.scss")).default]
                })
            ], RegisterComponent);
            /***/ 
        }),
        /***/ "./src/app/user/services/admin-auth-guard/admin-auth-guard.service.ts": 
        /*!****************************************************************************!*\
          !*** ./src/app/user/services/admin-auth-guard/admin-auth-guard.service.ts ***!
          \****************************************************************************/
        /*! exports provided: AdminAuthGuardService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAuthGuardService", function () { return AdminAuthGuardService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile-service/profile-service.service */ "./src/app/user/services/profile-service/profile-service.service.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var AdminAuthGuardService = /** @class */ (function () {
                function AdminAuthGuardService(profileService, router, snackBar) {
                    this.profileService = profileService;
                    this.router = router;
                    this.snackBar = snackBar;
                }
                AdminAuthGuardService.prototype.canActivate = function () {
                    var status = this.profileService.getLoggedStatus();
                    if (status.user.admin)
                        return true;
                    else {
                        this.snackBar.open('You are not authorized to acces this page, please Login', 'X', { duration: 10000, panelClass: 'red-theme' });
                        this.router.navigate(['']);
                        return false;
                    }
                }; //
                return AdminAuthGuardService;
            }());
            AdminAuthGuardService.ctorParameters = function () { return [
                { type: _profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
            ]; };
            AdminAuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AdminAuthGuardService);
            /***/ 
        }),
        /***/ "./src/app/user/services/auth-guard/auth-guard.service.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/user/services/auth-guard/auth-guard.service.ts ***!
          \****************************************************************/
        /*! exports provided: AuthGuardService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () { return AuthGuardService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile-service/profile-service.service */ "./src/app/user/services/profile-service/profile-service.service.ts");
            var AuthGuardService = /** @class */ (function () {
                function AuthGuardService(router, profileService) {
                    this.router = router;
                    this.profileService = profileService;
                }
                AuthGuardService.prototype.canActivate = function (routes, state) {
                    var user = this.profileService.getLoggedStatus();
                    if (!user.expired)
                        return true;
                    else
                        return false;
                };
                return AuthGuardService;
            }());
            AuthGuardService.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] }
            ]; };
            AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthGuardService);
            /***/ 
        }),
        /***/ "./src/app/user/services/auth/auth.service.ts": 
        /*!****************************************************!*\
          !*** ./src/app/user/services/auth/auth.service.ts ***!
          \****************************************************/
        /*! exports provided: AuthService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function () { return AuthService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var AuthService = /** @class */ (function () {
                function AuthService(http, jwtHelper) {
                    this.http = http;
                    this.jwtHelper = jwtHelper;
                }
                AuthService.prototype.login = function (credentials) {
                    console.log(credentials);
                    return this.http.post("/api/user/login", credentials).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error); }));
                };
                Object.defineProperty(AuthService.prototype, "currentUser", {
                    get: function () {
                        var token = localStorage.getItem('token');
                        if (!token) {
                            return null;
                        }
                        if (token) {
                            return this.jwtHelper.decodeToken(token);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                AuthService.prototype.isLoggedIn = function () {
                    var token = localStorage.getItem('token');
                    var tokenExpired = this.jwtHelper.isTokenExpired(token);
                    if (!tokenExpired) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                return AuthService;
            }());
            AuthService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"] }
            ]; };
            AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" })
            ], AuthService);
            /***/ 
        }),
        /***/ "./src/app/user/services/httpOptions.ts": 
        /*!**********************************************!*\
          !*** ./src/app/user/services/httpOptions.ts ***!
          \**********************************************/
        /*! exports provided: jwtToken, httpOptions */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jwtToken", function () { return jwtToken; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpOptions", function () { return httpOptions; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var jwtToken = localStorage.getItem('token');
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'jwtoken': jwtToken
                })
            };
            /***/ 
        }),
        /***/ "./src/app/user/services/profile-service/profile-service.service.ts": 
        /*!**************************************************************************!*\
          !*** ./src/app/user/services/profile-service/profile-service.service.ts ***!
          \**************************************************************************/
        /*! exports provided: ProfileService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function () { return ProfileService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _httpOptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../httpOptions */ "./src/app/user/services/httpOptions.ts");
            /* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var ProfileService = /** @class */ (function () {
                function ProfileService(http, router, snackBar) {
                    this.http = http;
                    this.router = router;
                    this.snackBar = snackBar;
                    this.decodedToken = false;
                    this.loggedIn = false;
                    this.locSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.country);
                    this.location = this.locSource;
                    this.userSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.user);
                    this.profile = this.userSource;
                    this.getUserSource();
                }
                ProfileService.prototype.getLocation = function () {
                    var _this = this;
                    this.http.post('/api/user/location', { location: '' }).subscribe(function (response) { return _this.locSource.next(response.country); }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error); }));
                };
                ProfileService.prototype.checkAuthToken = function (authToken) {
                    var _this = this;
                    return this.http.post('/api/user/register/authenticate', { authToken: authToken }).subscribe(function (response) {
                        if (response && response.id) {
                            var token = response.token;
                            localStorage.setItem('token', token);
                            _this.userSource.next(response);
                            _this.snackBar.open('Your registration is successful, thank you for registering', 'X', { duration: 10000, panelClass: 'red-theme' });
                            _this.router.navigate(['/profile']);
                        }
                        else {
                            _this.snackBar.open('We encountered a problem with your registration, it might be that your token have expired. Please register again.', 'X', { duration: 10000, panelClass: 'red-theme' });
                        }
                    }, function (error) { return _this.snackBar.open('We encountered a problem with your registration, it might be that your token have expired. Please register again.', 'X', { duration: 10000, panelClass: 'red-theme' }); });
                };
                ProfileService.prototype.getUserSource = function () {
                    var _this = this;
                    if (_httpOptions__WEBPACK_IMPORTED_MODULE_6__["jwtToken"]) {
                        this.http.get('/api/user/profile', _httpOptions__WEBPACK_IMPORTED_MODULE_6__["httpOptions"]).subscribe(function (response) {
                            var user = response[0];
                            if (user && user._id) {
                                _this.userSource.next(user);
                            }
                            else
                                _this.userSource = null;
                        }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error); }));
                    }
                    else
                        this.userSource.next(null);
                }; //
                ProfileService.prototype.register = function (formValue) {
                    var _this = this;
                    this.http.post('/api/user/register', formValue)
                        .subscribe(function (response) {
                        if (response && response._id) {
                            _this.userSource.next(response);
                            _this.snackBar.open('Your registration is successfull. Please check your email for authentication', 'X', { duration: 10000, panelClass: 'red-theme' });
                        }
                    }, function (error) { return _this.snackBar.open(error, 'X', { duration: 10000, panelClass: 'red-theme' }); });
                }; //
                ProfileService.prototype.login = function (credentials) {
                    var _this = this;
                    return this.http.post("/api/user/login", credentials).subscribe(function (response) {
                        if (response && response.id) {
                            _this.userSource.next(response);
                            localStorage.setItem('token', response.token);
                            _this.snackBar.open('Congratulation, your login is successful.', 'X', { duration: 10000, panelClass: 'lm__panel-primary' });
                            _this.router.navigateByUrl("/user/dashboard");
                        }
                        else
                            _this.snackBar.open('Your login is not successful. Please check your email or password', 'X', { duration: 10000, panelClass: 'lm__panel-accent' });
                    }, function (error) { return _this.snackBar.open('We encountered a problem with your login: error.', 'X', { duration: 10000, panelClass: 'lm__panel-warn' }); });
                };
                ProfileService.prototype.getLoggedStatus = function () {
                    var token = localStorage.getItem('token');
                    var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__["JwtHelperService"]();
                    var expired = helper.isTokenExpired(token);
                    var user = helper.decodeToken(token);
                    if (!expired && user)
                        return { expired: expired, user: user };
                    else {
                        this.snackBar.open('You are not authorized to acces this page, please Login', 'X', { duration: 10000, panelClass: 'red-theme' });
                        this.router.navigate(['']);
                    }
                }; //
                ProfileService.prototype.getCities = function (value) {
                    return this.http.post('/api/user/profile/autocomplete/cities', value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error); }));
                };
                ProfileService.prototype.getStates = function (value) {
                    return this.http.post('/api/user/profile/autocomplete/states', value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error); }));
                };
                ProfileService.prototype.getCountries = function (value) {
                    return this.http.post('/api/user/profile/autocomplete/countries', value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error); }));
                };
                ProfileService.prototype.updateStateCountryByCity = function (data) {
                    return this.http.post('/api/user/profile/update/autocomplete/city/state-country', data, _httpOptions__WEBPACK_IMPORTED_MODULE_6__["httpOptions"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error); }));
                };
                ProfileService.prototype.updateCountryByState = function (state) {
                    return this.http.post('/api/user/profile/update/autocomplete/state/country', state, _httpOptions__WEBPACK_IMPORTED_MODULE_6__["httpOptions"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error); }));
                };
                ProfileService.prototype.updateUser = function (userData) {
                    return this.http.post('/api/user/profile/update', userData, _httpOptions__WEBPACK_IMPORTED_MODULE_6__["httpOptions"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error); }));
                };
                ProfileService.prototype.updatePhoneCode = function (userData) {
                    return this.http.post('/api/user/profile/update/autocomplete/country', userData, _httpOptions__WEBPACK_IMPORTED_MODULE_6__["httpOptions"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error); }));
                };
                ProfileService.prototype.forgotPassword = function (email) {
                    return this.http.post('/api/user/forgot-password', { email: email }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error); }));
                };
                ProfileService.prototype.startLinkedin = function () {
                    return this.http.get('/api/user/linkedin').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error); }));
                };
                ProfileService.prototype.approvedLinkedin = function (params) {
                    return this.http.post('/api/user/linkedin/approved', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error); }));
                };
                ProfileService.prototype.logout = function () {
                    localStorage.removeItem('token');
                    this.userSource.next(null);
                    this.router.navigate(['/']);
                };
                return ProfileService;
            }());
            ProfileService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }
            ]; };
            ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ProfileService);
            /***/ 
        }),
        /***/ "./src/app/user/user-routing.module.ts": 
        /*!*********************************************!*\
          !*** ./src/app/user/user-routing.module.ts ***!
          \*********************************************/
        /*! exports provided: userRoutes, UserRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userRoutes", function () { return userRoutes; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function () { return UserRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user/login/login.component.ts");
            /* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/user/register/register.component.ts");
            /* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/user/forgot-password/forgot-password.component.ts");
            /* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/user/dashboard/dashboard.component.ts");
            /* harmony import */ var _biz_plan_bp_setup_bp_setup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./biz-plan/bp-setup/bp-setup.component */ "./src/app/user/biz-plan/bp-setup/bp-setup.component.ts");
            var userRoutes = [
                { path: 'user',
                    children: [
                        { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
                        { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
                        { path: 'forgot-password', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"] },
                        { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"] },
                        { path: 'business/plan', component: _biz_plan_bp_setup_bp_setup_component__WEBPACK_IMPORTED_MODULE_8__["BpSetupComponent"] }
                    ]
                }
            ];
            var UserRoutingModule = /** @class */ (function () {
                function UserRoutingModule() {
                }
                return UserRoutingModule;
            }());
            UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(userRoutes)
                    ]
                })
            ], UserRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/user/user.module.ts": 
        /*!*************************************!*\
          !*** ./src/app/user/user.module.ts ***!
          \*************************************/
        /*! exports provided: UserModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function () { return UserModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user/login/login.component.ts");
            /* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/user/register/register.component.ts");
            /* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/user/forgot-password/forgot-password.component.ts");
            /* harmony import */ var _auth_register_auth_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-register/auth-register.component */ "./src/app/user/auth-register/auth-register.component.ts");
            /* harmony import */ var _services_admin_auth_guard_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/admin-auth-guard/admin-auth-guard.service */ "./src/app/user/services/admin-auth-guard/admin-auth-guard.service.ts");
            /* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/user/services/auth/auth.service.ts");
            /* harmony import */ var _services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/auth-guard/auth-guard.service */ "./src/app/user/services/auth-guard/auth-guard.service.ts");
            /* harmony import */ var _services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/profile-service/profile-service.service */ "./src/app/user/services/profile-service/profile-service.service.ts");
            /* harmony import */ var _main_logo_main_logo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main-logo/main-logo.component */ "./src/app/user/main-logo/main-logo.component.ts");
            /* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/user/user-routing.module.ts");
            /* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/user/dashboard/dashboard.component.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _biz_plan_bp_setup_bp_setup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./biz-plan/bp-setup/bp-setup.component */ "./src/app/user/biz-plan/bp-setup/bp-setup.component.ts");
            /* harmony import */ var _biz_plan_bp_setup_biz_model_biz_model_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./biz-plan/bp-setup/biz-model/biz-model.component */ "./src/app/user/biz-plan/bp-setup/biz-model/biz-model.component.ts");
            /* harmony import */ var _biz_plan_bp_setup_biz_model_biz_model_form_biz_model_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./biz-plan/bp-setup/biz-model/biz-model-form/biz-model-form.component */ "./src/app/user/biz-plan/bp-setup/biz-model/biz-model-form/biz-model-form.component.ts");
            /* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
            var UserModule = /** @class */ (function () {
                function UserModule() {
                }
                return UserModule;
            }());
            UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                        _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
                        _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordComponent"],
                        _auth_register_auth_register_component__WEBPACK_IMPORTED_MODULE_6__["AuthRegisterComponent"],
                        _main_logo_main_logo_component__WEBPACK_IMPORTED_MODULE_11__["MainLogoComponent"],
                        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["DashboardComponent"],
                        _biz_plan_bp_setup_bp_setup_component__WEBPACK_IMPORTED_MODULE_18__["BpSetupComponent"],
                        _biz_plan_bp_setup_biz_model_biz_model_component__WEBPACK_IMPORTED_MODULE_19__["BizModelComponent"],
                        _biz_plan_bp_setup_biz_model_biz_model_form_biz_model_form_component__WEBPACK_IMPORTED_MODULE_20__["BizModelFormComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                        _user_routing_module__WEBPACK_IMPORTED_MODULE_14__["UserRoutingModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"],
                        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_21__["DragDropModule"]
                    ],
                    exports: [
                        _material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"]
                    ],
                    providers: [
                        _services_admin_auth_guard_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AdminAuthGuardService"],
                        _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
                        _services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"],
                        _services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_10__["ProfileService"]
                    ],
                    bootstrap: []
                })
            ], UserModule);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /home/azrin/Documents/GitHub/stats/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map