(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+XXu":
/*!***************************************************!*\
  !*** ./src/app/sections/modal/modal.component.ts ***!
  \***************************************************/
/*! exports provided: NgbdModalContent, NgbdModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalComponent", function() { return NgbdModalComponent; });
/* harmony import */ var _raw_loader_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./modal.component.html */ "kbRT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    NgbdModalContent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
    ]; };
    NgbdModalContent.propDecorators = {
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    NgbdModalContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-content',
            template: "\n    <div class=\"modal-header\">\n        <h5 class=\"modal-title text-center\">Modal title</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\"> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" (click)=\"activeModal.close('Close click')\">Never mind</button>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-danger btn-link\" (click)=\"activeModal.close('Close click')\">DELETE</button>\n        </div>\n    </div>\n    "
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], NgbdModalContent);
    return NgbdModalContent;
}());

var NgbdModalComponent = /** @class */ (function () {
    function NgbdModalComponent(modalService) {
        this.modalService = modalService;
    }
    NgbdModalComponent.prototype.open = function () {
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    };
    NgbdModalComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
    ]; };
    NgbdModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-component',
            template: _raw_loader_modal_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], NgbdModalComponent);
    return NgbdModalComponent;
}());



/***/ }),

/***/ "/OG6":
/*!****************************************************************!*\
  !*** ./src/app/sections/crs-section/crs-section.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcnMtc2VjdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\gurke\Desktop\Ongoing Projects\Office_munchies_frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "0KVf":
/*!*****************************************************************************!*\
  !*** ./src/app/sections/typography-section/typography-section.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TypographySectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographySectionComponent", function() { return TypographySectionComponent; });
/* harmony import */ var _raw_loader_typography_section_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./typography-section.component.html */ "htC0");
/* harmony import */ var _typography_section_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typography-section.component.css */ "aScS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TypographySectionComponent = /** @class */ (function () {
    function TypographySectionComponent() {
    }
    TypographySectionComponent.prototype.ngOnInit = function () {
    };
    TypographySectionComponent.ctorParameters = function () { return []; };
    TypographySectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-typography-section',
            template: _raw_loader_typography_section_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_typography_section_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], TypographySectionComponent);
    return TypographySectionComponent;
}());



/***/ }),

/***/ "0cls":
/*!***************************************************************!*\
  !*** ./src/app/sections/crs-section/crs-section.component.ts ***!
  \***************************************************************/
/*! exports provided: CrsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrsSectionComponent", function() { return CrsSectionComponent; });
/* harmony import */ var _raw_loader_crs_section_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./crs-section.component.html */ "eo/P");
/* harmony import */ var _crs_section_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crs-section.component.css */ "/OG6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nouislider */ "6foH");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CrsSectionComponent = /** @class */ (function () {
    function CrsSectionComponent() {
    }
    CrsSectionComponent.prototype.ngOnInit = function () {
    };
    CrsSectionComponent.prototype.ngAfterViewInit = function () {
        var slider = document.getElementById("input-slider");
        nouislider__WEBPACK_IMPORTED_MODULE_3___default.a.create(slider, {
            start: 40,
            connect: [true, false],
            range: {
                min: 0,
                max: 100
            }
        });
        var slider2 = document.getElementById("input-slider-range");
        nouislider__WEBPACK_IMPORTED_MODULE_3___default.a.create(slider2, {
            start: [20, 60],
            connect: true,
            range: {
                min: 0,
                max: 100
            }
        });
    };
    CrsSectionComponent.ctorParameters = function () { return []; };
    CrsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-crs-section',
            template: _raw_loader_crs_section_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_crs_section_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], CrsSectionComponent);
    return CrsSectionComponent;
}());



/***/ }),

/***/ "2ZcO":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("    <app-navbar (onLoginChanged)=\"doSomething()\" ></app-navbar>\n\n  <div class=\"position-relative\">\n    <!-- shape Hero -->\n    <section class=\"section section-sm section-shaped\">\n      <div class=\"shape shape-style-1 shape-default\">\n        <span></span>\n      </div>\n    </section>\n    <!-- 1st Hero Variation -->\n  </div> \n \n <section class=\"section section-sm\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center text-center\">\n        <div class=\"col-lg-8\">\n          <h2 class=\"display-3\">Review your Order</h2>\n          <p class=\"lead text-muted\">Review your order and hit the order button to get tasty food on your table!</p>\n        </div>\n      </div>\n\n \n <ul class=\"list-group\">\n <div *ngFor=\"let items of order\">\n   <li class=\"list-group-item\">{{items.item_name}} X {{items.quantity}} = {{items.quantity}}*{{items.item_price}}</li>\n\n </div>\n\n</ul> \n\n<br>\n\n <div class=\"col-md-4\">\n      <small class=\"d-block text-uppercase font-weight-bold mb-3\">Select date</small>\n      <div class=\"form-group\" [ngClass]=\"{'focused':focus2===true}\">\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"ni ni-calendar-grid-58\"></i></span>\n          </div>\n          <input class=\"form-control datepicker\" placeholder=\"Select date\" name=\"dp\" [(ngModel)]=\"date\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\" (focus)=\"focus2=true\" (blur)=\"focus2=false\" type=\"text\" (select)=\"onDateSelection($event)\" autocomplete=\"off\"/>\n          <br>\n\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n          <small class=\"d-block text-uppercase font-weight-bold mb-3\">Select Time</small>\n\n              <input class=\"form-control\" placeholder=\"Select time\" name=\"time\" [(ngModel)]=\"time\"/>\n\n    </div>\n  <br>\n    <div class=\"col-md-4\">\n        <!-- Radio buttons -->\n        <div class=\"mb-3\">\n          <small class=\"text-uppercase font-weight-bold\">Choose payment method</small>\n        </div>\n        <div class=\"custom-control custom-radio mb-3\">\n          <input (change)= \"cash_radio()\" name=\"custom-radio-1\" class=\"custom-control-input\" id=\"customRadio1\" type=\"radio\">\n          <label class=\"custom-control-label\" for=\"customRadio1\">\n            <span>Cash</span>\n          </label>\n        </div>\n        <div class=\"custom-control custom-radio mb-3\">\n          <input (change)= \"card_radio()\" name=\"custom-radio-1\" class=\"custom-control-input\" id=\"customRadio2\" checked type=\"radio\">\n          <label class=\"custom-control-label\" for=\"customRadio2\">\n            <span>Card</span>\n          </label>\n        </div>\n    </div>\n<h3 class=\"text\">Total = {{total}} </h3>\n                 <button class=\"btn btn-1 btn-success align-center\" type=\"button\" (click)=\"checkout()\">Place Order</button>\n\n\n    </div>\n\n    <br>\n\n\n\n\n\n\n  </section>\n  \n  ");

/***/ }),

/***/ "6E3v":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/tabs-section/tabs-section.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <h3 class=\"h4 text-success font-weight-bold mb-4\">Tabs</h3>\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-6\">\n      <!-- Tabs with icons -->\n      <div class=\"mb-3\">\n        <small class=\"text-uppercase font-weight-bold\">With icons</small>\n      </div>\n        <ngb-tabset [justify]=\"'center'\" class=\"custom-tab-content flex-column flex-md-row\" type=\"pills\">\n            <ngb-tab>\n              <ng-template ngbTabTitle>\n                <i class=\"ni ni-cloud-upload-96 mr-2\"></i> Home\n              </ng-template>\n                <ng-template ngbTabContent>\n                  <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>\n                  <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>\n                </ng-template>\n            </ngb-tab>\n            <ngb-tab>\n              <ng-template ngbTabTitle>\n                <i class=\"ni ni-bell-55 mr-2\"></i> Profile\n              </ng-template>\n                <ng-template ngbTabContent>\n                    <p class=\"description\">Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n                </ng-template>\n            </ngb-tab>\n            <ngb-tab>\n              <ng-template ngbTabTitle>\n                  <i class=\"ni ni-calendar-grid-58 mr-2\"></i> Messages\n              </ng-template>\n                <ng-template ngbTabContent>\n                    <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>\n                </ng-template>\n            </ngb-tab>\n        </ngb-tabset>\n    </div>\n    <div class=\"col-lg-6 mt-5 mt-lg-0\">\n      <!-- Menu -->\n      <div class=\"mb-3\">\n        <small class=\"text-uppercase font-weight-bold\">With text</small>\n      </div>\n      <ngb-tabset [justify]=\"'center'\" class=\"custom-tab-content flex-column flex-md-row\" type=\"pills\">\n          <ngb-tab title=\"Home\">\n            <ng-template ngbTabContent>\n              <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>\n              <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab title=\"Profile\">\n            <ng-template ngbTabContent>\n                <p class=\"description\">Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab title=\"Messages\">\n            <ng-template ngbTabContent>\n                <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>\n            </ng-template>\n          </ngb-tab>\n      </ngb-tabset>\n    </div>\n  </div>\n\n  <div class=\"row row-grid justify-content-between align-items-center mt-lg\">\n    <div class=\"col-lg-5\">\n      <h3 class=\"h4 text-success font-weight-bold mb-4\">Progress bars</h3>\n      <div class=\"progress-wrapper\">\n        <div class=\"progress-info\">\n          <div class=\"progress-label\">\n            <span>Task completed</span>\n          </div>\n          <div class=\"progress-percentage\">\n            <span>40%</span>\n          </div>\n        </div>\n        <ngb-progressbar type=\"default\" [value]=\"25\"></ngb-progressbar>\n      </div>\n      <div class=\"progress-wrapper\">\n        <div class=\"progress-info\">\n          <div class=\"progress-label\">\n            <span>Task completed</span>\n          </div>\n          <div class=\"progress-percentage\">\n            <span>60%</span>\n          </div>\n        </div>\n        <ngb-progressbar type=\"primary\" [value]=\"60\"></ngb-progressbar>\n      </div>\n    </div>\n    <div class=\"col-lg-5\">\n      <h3 class=\"h4 text-success font-weight-bold mb-5\">Pagination</h3>\n      <nav aria-label=\"Page navigation example\" class=\"mb-4\">\n        <ngb-pagination [collectionSize]=\"50\" [(page)]=\"page\" [directionLinks]=\"false\"></ngb-pagination>\n      </nav>\n      <nav aria-label=\"Page navigation example\">\n        <ngb-pagination [collectionSize]=\"50\" [(page)]=\"page1\" aria-label=\"Default pagination\">\n          <ng-template ngbPaginationPrevious><i _ngcontent-c9=\"\" class=\"fa fa-angle-left\"></i></ng-template>\n          <ng-template ngbPaginationNext><i _ngcontent-c9=\"\" class=\"fa fa-angle-right\"></i></ng-template>\n        </ngb-pagination>\n      </nav>\n    </div>\n  </div>\n  <div class=\"row row-grid justify-content-between\">\n    <div class=\"col-lg-5\">\n      <h3 class=\"h4 text-success font-weight-bold mb-5\">Navigation Pills</h3>\n      <ngb-tabset type=\"pills\" class=\"nav-pills-circle\">\n          <ngb-tab>\n            <ng-template ngbTabTitle>\n              <span class=\"nav-link-icon d-block\"><i class=\"ni ni-atom\"></i></span>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab>\n            <ng-template ngbTabTitle>\n              <span class=\"nav-link-icon d-block\"><i class=\"ni ni-chat-round\"></i></span>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab>\n            <ng-template ngbTabTitle>\n                <span class=\"nav-link-icon d-block\"><i class=\"ni ni-cloud-download-95\"></i></span>\n            </ng-template>\n          </ngb-tab>\n      </ngb-tabset>\n    </div>\n    <div class=\"col-lg-5\">\n      <h3 class=\"h4 text-success font-weight-bold mb-5\">Labels</h3>\n      <span class=\"badge badge-pill badge-primary text-uppercase\">Primary</span>\n      <span class=\"badge badge-pill badge-success text-uppercase\">Success</span>\n      <span class=\"badge badge-pill badge-danger text-uppercase\">Danger</span>\n      <span class=\"badge badge-pill badge-warning text-uppercase\">Warning</span>\n      <span class=\"badge badge-pill badge-info text-uppercase\">Info</span>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "9+np":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/inputs-section/inputs-section.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"section pb-0 section-components\">\n  <div class=\"container mb-5\">\n    <!-- Inputs -->\n    <h3 class=\"h4 text-success font-weight-bold mb-4\">Inputs</h3>\n    <div class=\"mb-3\">\n      <small class=\"text-uppercase font-weight-bold\">Form controls</small>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-sm-6\">\n        <div class=\"form-group\">\n          <input type=\"text\" placeholder=\"Regular\" class=\"form-control\" />\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'focused':focus===true}\">\n          <div class=\"input-group mb-4\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"ni ni-zoom-split-in\"></i></span>\n            </div>\n            <input class=\"form-control\" placeholder=\"Search\" type=\"text\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-sm-6\">\n        <div class=\"form-group\">\n          <input type=\"text\" placeholder=\"Regular\" class=\"form-control\" disabled />\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'focused':focus5===true}\">\n          <div class=\"input-group mb-4\">\n            <input class=\"form-control\" placeholder=\"Birthday\" type=\"text\" (focus)=\"focus5=true\" (blur)=\"focus5=false\">\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\"><i class=\"ni ni-zoom-split-in\"></i></span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-sm-6\">\n        <div class=\"form-group has-success\">\n          <input type=\"text\" placeholder=\"Success\" class=\"form-control is-valid\" />\n        </div>\n        <div class=\"form-group has-danger\">\n          <input type=\"email\" placeholder=\"Error Input\" class=\"form-control is-invalid\" />\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"py-5 bg-secondary\">\n    <div class=\"container\">\n      <!-- Inputs (alternative) -->\n      <div class=\"mb-3\">\n        <small class=\"text-uppercase font-weight-bold\">Form controls (alternative)</small>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-4 col-sm-6\">\n          <div class=\"form-group\">\n            <input type=\"text\" placeholder=\"Regular\" class=\"form-control form-control-alternative\" />\n          </div>\n          <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\n            <div class=\"input-group input-group-alternative mb-4\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"ni ni-zoom-split-in\"></i></span>\n              </div>\n              <input class=\"form-control\" placeholder=\"Search\" type=\"text\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-sm-6\">\n          <div class=\"form-group\">\n            <input type=\"text\" placeholder=\"Regular\" class=\"form-control form-control-alternative \" disabled />\n          </div>\n          <div class=\"form-group\">\n            <div class=\"input-group input-group-alternative mb-4\">\n              <input class=\"form-control\" placeholder=\"Birthday\" type=\"text\">\n              <div class=\"input-group-append\">\n                <span class=\"input-group-text\"><i class=\"ni ni-zoom-split-in\"></i></span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-sm-6\">\n          <div class=\"form-group has-success\">\n            <input type=\"text\" placeholder=\"Success\" class=\"form-control form-control-alternative is-valid\" />\n          </div>\n          <div class=\"form-group has-danger\">\n            <input type=\"email\" placeholder=\"Error Input\" class=\"form-control form-control-alternative is-invalid\" />\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "92Y0":
/*!**************************************************************************!*\
  !*** ./src/app/sections/versions-section/versions-section.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJzaW9ucy1zZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "9W4q":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/angular-section/angular-section.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <h2 class=\"mt-lg mb-5\">\n    <span>Javascript Components</span>\n  </h2>\n  <h3 class=\"h4 text-success font-weight-bold mb-4\">Modals</h3>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <button class=\"btn btn-block btn-primary mb-3\" (click)=\"open(classic,'' , '')\">\n       Default\n      </button>\n      <ng-template #classic let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h6 class=\"modal-title\" id=\"modal-title-default\">Type your modal title</h6>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n              <span aria-hidden=\"true\">×</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\n            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n            <button type=\"button\" class=\"btn btn-link  ml-auto\" data-dismiss=\"modal\" (click)=\"c('Close click')\">Close</button>\n          </div>\n        </div>\n      </ng-template>\n    </div>\n\n    <div class=\"col-md-4\">\n      <button class=\"btn btn-block btn-warning mb-3\" (click)=\"open(classic2, 'Notification', '')\">\n         Notification\n      </button>\n      <ng-template #classic2 let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-content bg-gradient-danger\">\n          <div class=\"modal-header\">\n            <h6 class=\"modal-title\" id=\"modal-title-notification\">Your attention is required</h6>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n              <span aria-hidden=\"true\">×</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            <div class=\"py-3 text-center\">\n              <i class=\"ni ni-bell-55 ni-3x\"></i>\n              <h4 class=\"heading mt-4\">You should read this!</h4>\n              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n            </div>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-white\">Ok, Got it</button>\n            <button type=\"button\" class=\"btn btn-link text-white ml-auto\" data-dismiss=\"modal\" (click)=\"c('Close click')\">Close</button>\n          </div>\n        </div>\n      </ng-template>\n    </div>\n\n    <div class=\"col-md-4\">\n      <button class=\"btn btn-block btn-default\" (click)=\"open(classic1, 'modal_mini', 'sm')\">\n         Form\n      </button>\n      <ng-template #classic1 let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-content\">\n          <div class=\"modal-body p-0\">\n            <div class=\"card bg-secondary shadow border-0\">\n              <div class=\"card-header bg-white pb-5\">\n                <div class=\"text-muted text-center mb-3\">\n                  <small>Sign in with</small>\n                </div>\n                <div class=\"btn-wrapper text-center\">\n                  <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\n                    <span class=\"btn-inner--icon\">\n                      <img src=\"./assets/img/icons/common/github.svg\">\n                    </span>\n                    <span class=\"btn-inner--text\">Github</span>\n                  </a>\n                  <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\n                    <span class=\"btn-inner--icon\">\n                      <img src=\"./assets/img/icons/common/google.svg\">\n                    </span>\n                    <span class=\"btn-inner--text\">Google</span>\n                  </a>\n                </div>\n              </div>\n              <div class=\"card-body px-lg-5 py-lg-5\">\n                <div class=\"text-center text-muted mb-4\">\n                  <small>Or sign in with credentials</small>\n                </div>\n                <form role=\"form\">\n                  <div class=\"form-group mb-3\" [ngClass]=\"{'focused':focus===true}\">\n                    <div class=\"input-group input-group-alternative\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                      </div>\n                      <input class=\"form-control\" placeholder=\"Email\" type=\"email\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n                    </div>\n                  </div>\n                  <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\n                    <div class=\"input-group input-group-alternative\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                      </div>\n                      <input class=\"form-control\" placeholder=\"Password\" type=\"password\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n                    </div>\n                  </div>\n                  <div class=\"custom-control custom-control-alternative custom-checkbox\">\n                    <input class=\"custom-control-input\" id=\" customCheckLogin\" type=\"checkbox\">\n                    <label class=\"custom-control-label\" for=\" customCheckLogin\">\n                      <span>Remember me</span>\n                    </label>\n                  </div>\n                  <div class=\"text-center\">\n                    <button type=\"button\" class=\"btn btn-primary my-4\">Sign in</button>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n  <!-- Datepicker -->\n  <h3 class=\"h4 text-success font-weight-bold mt-md mb-4\">Datepicker</h3>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <small class=\"d-block text-uppercase font-weight-bold mb-3\">Single date</small>\n      <div class=\"form-group\" [ngClass]=\"{'focused':focus2===true}\">\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"ni ni-calendar-grid-58\"></i></span>\n          </div>\n          <input class=\"form-control datepicker\" placeholder=\"Select date\" name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\" (focus)=\"focus2=true\" (blur)=\"focus2=false\" type=\"text\" (select)=\"onDateSelection($event)\" autocomplete=\"off\"/>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-8 mt-4 mt-md-0\">\n      <small class=\"d-block text-uppercase font-weight-bold mb-3\">Date range</small>\n      <div class=\"input-daterange datepicker row align-items-center\">\n        <div class=\"col\">\n          <div class=\"form-group\" [ngClass]=\"{'focused':focus3===true}\">\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"ni ni-calendar-grid-58\"></i></span>\n              </div>\n              <input class=\"form-control datepicker\" placeholder=\"Select date\" name=\"dp1\" [(ngModel)]=\"model1\" ngbDatepicker #d1=\"ngbDatepicker\" (click)=\"d1.toggle()\" (select)=\"mama($event)\" type=\"text\" [dayTemplate]=\"t\" (dateSelect)=\"startDateChanged($event)\" autocomplete=\"off\" (focus)=\"focus3=true\" (blur)=\"focus3=false\"/>\n              <ng-template #t let-date let-focused=\"focused\" >\n               <span class=\"custom-day\"\n                [class.text-white]=\"isActive(date)\"\n                [class.range-end]=\"isRangeEnd(date)\"\n                [class.range-start]=\"isRangeStart(date)\"\n                [class.btn-light]=\"isActive(date)\"\n                [class.bg-primary]=\"isActive(date)\"\n                [class.range]=\"isInRange(date)\"\n                [class.faded]=\"isInRange(date)\"\n               >\n                 {{ date.day }}\n               </span>\n             </ng-template>\n            </div>\n          </div>\n        </div>\n        <div class=\"col\">\n          <div class=\"form-group\" [ngClass]=\"{'focused':focus4===true}\">\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"ni ni-calendar-grid-58\"></i></span>\n              </div>\n              <input class=\"form-control datepicker\" placeholder=\"Select date\" name=\"dp2\" [(ngModel)]=\"model2\" ngbDatepicker #d2=\"ngbDatepicker\" (click)=\"d2.toggle()\" (focus)=\"focus4=true\" (blur)=\"focus4=false\" type=\"text\" [dayTemplate]=\"t1\" (dateSelect)=\"endDateChanged($event)\" autocomplete=\"off\"/>\n              <ng-template #t1 let-date let-focused=\"focused\" >\n               <span class=\"custom-day\"\n                [class.text-white]=\"isActive(date)\"\n                [class.range-end]=\"isRangeEnd(date)\"\n                [class.range-start]=\"isRangeStart(date)\"\n                [class.btn-light]=\"isActive(date)\"\n                [class.bg-primary]=\"isActive(date)\"\n                [class.range]=\"isInRange(date)\"\n                [class.faded]=\"isInRange(date)\"\n               >\n                 {{ date.day }}\n               </span>\n             </ng-template>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Tooltips and Popovers -->\n  <h3 class=\"h4 text-success font-weight-bold mt-md mb-4\">Tooltips &amp; Popovers</h3>\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <small class=\"d-block text-uppercase font-weight-bold mb-3\">Tooltips</small>\n      <button type=\"button\" class=\"btn btn-sm btn-primary btn-tooltip\" placement=\"left\"   ngbTooltip=\"Tooltip on left\">On left</button>\n      <button type=\"button\" class=\"btn btn-sm btn-primary btn-tooltip\" placement=\"top\"    ngbTooltip=\"Tooltip on top\">On top</button>\n      <button type=\"button\" class=\"btn btn-sm btn-primary btn-tooltip\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">On bottom</button>\n      <button type=\"button\" class=\"btn btn-sm btn-primary btn-tooltip\" placement=\"right\"  ngbTooltip=\"Tooltip on right\">On right</button>\n    </div>\n    <div class=\"col-lg-6 mt-4 mt-lg-0\">\n      <small class=\"d-block text-uppercase font-weight-bold mb-3\">Popovers</small>\n      <button type=\"button\" class=\"btn btn-sm btn-default\" placement=\"left\"\n              ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on left\">On left</button>\n      <button type=\"button\" class=\"btn btn-sm btn-default\" placement=\"top\"\n              ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on top\">On top</button>\n      <button type=\"button\" class=\"btn btn-sm btn-default\" placement=\"right\"\n              ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on right\">On right</button>\n      <button type=\"button\" class=\"btn btn-sm btn-default\" placement=\"bottom\"\n              ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on bottom\">On bottom</button>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./home.component.html */ "Gd4t");
/* harmony import */ var _home_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component.scss */ "bdh1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.model = {
            left: true,
            middle: false,
            right: false
        };
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.ctorParameters = function () { return []; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-home',
            template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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


/***/ }),

/***/ "EtQq":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "zRkE");
/* harmony import */ var _navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.component.scss */ "cruu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/login/login.component */ "vtpD");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, router, authenticationService) {
        var _this = this;
        this.location = location;
        this.router = router;
        this.authenticationService = authenticationService;
        this.isCollapsed = true;
        this.yScrollStack = [];
        this.showGuest = true;
        this.showUser = false;
        authenticationService.onLoginChanged.subscribe(function (name) {
            console.log("Emit : " + name);
            _this.showGuest = false;
            _this.showUser = true;
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            _this.isCollapsed = true;
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        var loginStatus = localStorage.getItem('loginStatus');
        console.log("Inside Navbar");
        if (loginStatus == "true") {
            this.showGuest = false;
            this.showUser = true;
        }
    };
    NavbarComponent.prototype.ngOnChanges = function () {
        var loginStatus = localStorage.getItem('loginStatus');
        console.log("Inside Navbar");
        if (loginStatus == "true") {
            this.showGuest = false;
            this.showUser = true;
        }
    };
    NavbarComponent.prototype.isHome = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '#/home') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '#/documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.signout = function () {
        localStorage.removeItem('loginStatus');
        localStorage.removeItem('userID');
        this.showGuest = true;
        this.showUser = false;
        this.router.navigate(['/landing']);
    };
    NavbarComponent.prototype.doSomething = function () {
        console.log("Hello emitter");
        this.showGuest = false;
        this.showUser = true;
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-navbar',
            template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            providers: [src_app_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]],
            styles: [_navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "FCdR":
/*!*****************************************************************!*\
  !*** ./src/app/sections/tabs-section/tabs-section.component.ts ***!
  \*****************************************************************/
/*! exports provided: TabsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsSectionComponent", function() { return TabsSectionComponent; });
/* harmony import */ var _raw_loader_tabs_section_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./tabs-section.component.html */ "6E3v");
/* harmony import */ var _tabs_section_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs-section.component.css */ "YSaL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsSectionComponent = /** @class */ (function () {
    function TabsSectionComponent() {
        this.page = 2;
        this.page1 = 3;
    }
    TabsSectionComponent.prototype.ngOnInit = function () {
    };
    TabsSectionComponent.ctorParameters = function () { return []; };
    TabsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-tabs-section',
            template: _raw_loader_tabs_section_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_tabs_section_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], TabsSectionComponent);
    return TabsSectionComponent;
}());



/***/ }),

/***/ "Gd4t":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<main>\n  <div class=\"position-relative\">\n    <!-- Hero for FREE version -->\n    <section class=\"section section-lg section-hero section-shaped\">\n      <!-- Background circles -->\n      <div class=\"shape shape-style-1 shape-primary\">\n        <span class=\"span-150\"></span>\n        <span class=\"span-50\"></span>\n        <span class=\"span-50\"></span>\n        <span class=\"span-75\"></span>\n        <span class=\"span-100\"></span>\n        <span class=\"span-75\"></span>\n        <span class=\"span-50\"></span>\n        <span class=\"span-100\"></span>\n        <span class=\"span-50\"></span>\n        <span class=\"span-100\"></span>\n      </div>\n      <div class=\"container shape-container d-flex align-items-center py-lg\">\n        <div class=\"col px-0\">\n          <div class=\"row align-items-center justify-content-center\">\n            <div class=\"col-lg-6 text-center\">\n              <img src=\"./assets/img/brand/argon-white.png\" style=\"width: 200px;\" class=\"img-fluid\">\n              <p class=\"lead text-white\">A beautiful Design System for Bootstrap 4 and Angular 7. It's Free and Open Source.</p>\n              <div class=\"btn-wrapper mt-5\">\n                <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-index-header\" class=\"btn btn-lg btn-white btn-icon mb-3 mb-sm-0\">\n                  <span class=\"btn-inner--icon\"><i class=\"ni ni-cloud-download-95\"></i></span>\n                  <span class=\"btn-inner--text\">Download Angular</span>\n                </a>\n                <a href=\"https://github.com/creativetimofficial/argon-design-system-angular?ref=adsa-index-header\" class=\"btn btn-lg btn-github btn-icon mb-3 mb-sm-0\" target=\"_blank\">\n                  <span class=\"btn-inner--icon\"><i class=\"fa fa-github\"></i></span>\n                  <span class=\"btn-inner--text\">\n                    <span class=\"text-warning\">Star us</span> on Github</span>\n                </a>\n              </div>\n              <div class=\"mt-5\">\n                <small class=\"text-white font-weight-bold mb-0 mr-2\">*proudly coded by</small>\n                <img src=\"./assets/img/brand/creativetim-white-slim.png\" style=\"height: 28px;\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- SVG separator -->\n      <div class=\"separator separator-bottom separator-skew zindex-100\">\n        <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n        </svg>\n      </div>\n    </section>\n  </div>\n  <app-sections></app-sections>\n</main>\n");

/***/ }),

/***/ "H/d9":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <div class=\"position-relative\">\n    <!-- shape Hero -->\n    <section class=\"section section-sm section-shaped\">\n      <div class=\"shape shape-style-1 shape-default\">\n        <span></span>\n      </div>\n    </section>\n    <!-- 1st Hero Variation -->\n  </div> \n\n  ");

/***/ }),

/***/ "HiAf":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/alerts-section/alerts-section.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\">\n  <h3 class=\"mt-lg mb-4\">\n    <span>Alerts</span>\n  </h3>\n  <div *ngFor=\"let alert of alerts\">\n    <ngb-alert [type]=\"alert.type\"  [dismissible]=\"true\"  (close)=\"close(alert)\" >\n      <ng-container *ngIf=\"alert.icon\">\n        <div class=\"alert-inner--icon\">\n            <i class=\"{{alert.icon}}\"></i>\n        </div>\n      </ng-container>\n      <span class=\"alert-inner--text\">  <strong>{{alert.strong}} </strong>{{ alert.message }}</span>\n    </ngb-alert>\n  </div>\n</div>\n");

/***/ }),

/***/ "I4Ur":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/preview/preview.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <app-navbar (onLoginChanged)=\"doSomething()\" ></app-navbar>\n\n <div class=\"position-relative\">\n    <!-- shape Hero -->\n    <section class=\"section section-sm section-shaped\">\n      <div class=\"shape shape-style-1 shape-default\">\n        <span></span>\n      </div>\n    </section>\n    <!-- 1st Hero Variation -->\n  </div> \n \n <section class=\"section section-sm\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center text-center\">\n        <div class=\"col-lg-8\">\n          <h2 class=\"display-3\">Review your Details</h2>\n          <p class=\"lead text-muted\">Review your details and get onboarded to order from our platform!</p>\n        </div>\n      </div>\n\n \n <ul class=\"list-group\">\n  <li class=\"list-group-item\">Name : {{name}}</li>\n  <li class=\"list-group-item\">Phone number : {{phone_number}} </li>\n  <li class=\"list-group-item\">Email : {{email}} </li>\n  <li class=\"list-group-item\">Gender : {{gender}} </li>\n  <li class=\"list-group-item\">Organization Name : {{organization_name}} </li>\n  <li class=\"list-group-item\">Employee Number : {{employee_no}} </li>\n\n</ul> \n\n<br>\n<small> ID : </small>\n<img [src]=\"id\"  style=\"height : 200px ; margin-left : 30px\"/>\n<br>\n<br>\n <button class=\"btn btn-1 btn-success\" type=\"button\" (click)=\"sign_up()\">Sign Up</button>\n");

/***/ }),

/***/ "IiZn":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _raw_loader_checkout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./checkout.component.html */ "2ZcO");
/* harmony import */ var _checkout_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout.component.css */ "PkTJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_munchies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/munchies.service */ "aHcC");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(OMService, http, router) {
        this.OMService = OMService;
        this.http = http;
        this.router = router;
        this.total = 0;
        this.time = "3:30pm";
        this.cash = false;
        this.card = false;
        var obj = JSON.parse(localStorage.getItem("cart"));
        this.total = obj["total"];
        this.order = obj["order"];
    }
    CheckoutComponent.prototype.ngOnInit = function () {
    };
    CheckoutComponent.prototype.cash_radio = function () {
        this.cash = !this.cash;
        if (this.cash)
            this.card = false;
        console.log("Cash" + this.cash);
        console.log("Card" + this.card);
    };
    CheckoutComponent.prototype.card_radio = function () {
        this.card = !this.card;
        if (this.card)
            this.cash = false;
        console.log("Card" + this.card);
        console.log("Cash" + this.cash);
    };
    CheckoutComponent.prototype.checkout = function () {
        var _this = this;
        var pm;
        if (this.cash)
            pm = "Cash";
        else
            pm = "Card";
        var obj = {
            "order": this.order,
            "total": this.total,
            "payment_mode": pm,
            "date": this.date["day"] + "/" + this.date["month"] + "/" + this.date["year"],
            "time": this.time,
            "userID": localStorage.getItem("userID")
        };
        console.log(obj);
        localStorage.setItem("total", this.total + "");
        localStorage.setItem("time", this.time + "");
        this.OMService.placeOrder(obj).subscribe(function (data) {
            console.log(data);
            if (data["order"] == "saved")
                _this.router.navigate(["/success"]);
        });
    };
    CheckoutComponent.ctorParameters = function () { return [
        { type: _app_munchies_service__WEBPACK_IMPORTED_MODULE_3__["MunchiesService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    CheckoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-checkout',
            template: _raw_loader_checkout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_checkout_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_app_munchies_service__WEBPACK_IMPORTED_MODULE_3__["MunchiesService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "JhD/":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./landing.component.html */ "QnVx");
/* harmony import */ var _landing_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.component.scss */ "KjGC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
        this.login_status = false;
        if (localStorage.getItem("loginStatus") == "true")
            this.login_status = true;
    }
    LandingComponent.prototype.ngOnInit = function () { };
    LandingComponent.ctorParameters = function () { return []; };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-landing',
            template: _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_landing_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "K4CT":
/*!***********************************************************************!*\
  !*** ./src/app/sections/buttons-section/buttons-section.component.ts ***!
  \***********************************************************************/
/*! exports provided: ButtonsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsSectionComponent", function() { return ButtonsSectionComponent; });
/* harmony import */ var _raw_loader_buttons_section_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./buttons-section.component.html */ "m1bB");
/* harmony import */ var _buttons_section_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons-section.component.css */ "gFCd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ButtonsSectionComponent = /** @class */ (function () {
    function ButtonsSectionComponent() {
    }
    ButtonsSectionComponent.prototype.ngOnInit = function () {
    };
    ButtonsSectionComponent.ctorParameters = function () { return []; };
    ButtonsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-buttons-section',
            template: _raw_loader_buttons_section_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_buttons_section_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonsSectionComponent);
    return ButtonsSectionComponent;
}());



/***/ }),

/***/ "KKlp":
/*!**********************************************************************!*\
  !*** ./src/app/sections/inputs-section/inputs-section.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnB1dHMtc2VjdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "KjGC":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5kaW5nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "KuAA":
/*!*************************************************************************!*\
  !*** ./src/app/sections/versions-section/versions-section.component.ts ***!
  \*************************************************************************/
/*! exports provided: VersionsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionsSectionComponent", function() { return VersionsSectionComponent; });
/* harmony import */ var _raw_loader_versions_section_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./versions-section.component.html */ "P0L2");
/* harmony import */ var _versions_section_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./versions-section.component.css */ "92Y0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VersionsSectionComponent = /** @class */ (function () {
    function VersionsSectionComponent() {
    }
    VersionsSectionComponent.prototype.ngOnInit = function () {
    };
    VersionsSectionComponent.ctorParameters = function () { return []; };
    VersionsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-versions-section',
            template: _raw_loader_versions_section_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_versions_section_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], VersionsSectionComponent);
    return VersionsSectionComponent;
}());



/***/ }),

/***/ "Ntsp":
/*!**********************************************************!*\
  !*** ./src/app/order-success/order-success.component.ts ***!
  \**********************************************************/
/*! exports provided: OrderSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSuccessComponent", function() { return OrderSuccessComponent; });
/* harmony import */ var _raw_loader_order_success_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./order-success.component.html */ "jCCv");
/* harmony import */ var _order_success_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-success.component.css */ "qNrX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderSuccessComponent = /** @class */ (function () {
    function OrderSuccessComponent() {
        this.total = localStorage.getItem("total");
        this.time = localStorage.getItem("time");
    }
    OrderSuccessComponent.prototype.ngOnInit = function () {
    };
    OrderSuccessComponent.ctorParameters = function () { return []; };
    OrderSuccessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-order-success',
            template: _raw_loader_order_success_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_order_success_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], OrderSuccessComponent);
    return OrderSuccessComponent;
}());



/***/ }),

/***/ "O9K4":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <app-navbar (onLoginChanged)=\"doSomething()\" ></app-navbar>\n\n  <div class=\"position-relative\">\n    <!-- shape Hero -->\n    <section class=\"section section-sm section-shaped\">\n      <div class=\"shape shape-style-1 shape-default\">\n        <span></span>\n      </div>\n    </section>\n    <!-- 1st Hero Variation -->\n  </div> \n \n <section class=\"section section-sm\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center text-center\">\n        <div class=\"col-lg-8\">\n          <h2 class=\"display-3\">Order Now</h2>\n          <p class=\"lead text-muted\">Choose what you wanna eat today and we will get them delivered to your cubicle :)</p>\n        </div>\n      </div>\n                      <h4 class=\"display-3 text-center\">Cart Total : {{cart_value}}</h4>\n<br>\n      <div class=\"row\">\n\n        <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\" *ngFor=\"let item of items ; index as i\">\n          <div class=\"px-4\">\n            <img [src]=\"item.main_image\" class=\"img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\n            <div class=\"pt-4 text-center\">\n              <h5 class=\"title\">\n                <span class=\"d-block mb-1\">{{item.item_name}}</span>\n                <small class=\"h6 text-muted\">Rs {{item.item_price}}</small>\n\n              </h5>\n\n              <div class=\"mt-3\">\n            <input type=\"number\" class=\"input\" value=\"1\" min=\"1\"  [(ngModel)]=\"quantity[i]\" />\n            <button *ngIf=\"!item.cartStatus\" type=\"button\" class=\"btn btn-warning my-4\" (click)=\"add(i)\">Add to Cart</button>\n            <button *ngIf=\"item.cartStatus\" type=\"button\" class=\"btn btn-danger my-4\" (click)=\"remove(i)\">Remove From Cart</button>\n\n              </div>\n            </div>\n          </div>\n        </div>\n   \n\n\n      </div>\n<br>\n<br>\n\n<div class=\"row\">\n\n<div class=\"col-md-5 offset-5\">\n\n              <button class=\"btn btn-1 btn-primary align-center\" type=\"button\" (click)=\"checkout()\">Checkout Now</button>\n<br>\n<br>\n</div>\n</div>\n\n    </div>\n  </section>\n  \n  ");

/***/ }),

/***/ "OK6E":
/*!**********************************************************************!*\
  !*** ./src/app/sections/nucleo-section/nucleo-section.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJudWNsZW8tc2VjdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "P0L2":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/versions-section/versions-section.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"section section-lg\">\n  <div class=\"container\">\n    <div class=\"row row-grid justify-content-center\">\n      <div class=\"col-lg-8 text-center\">\n        <h2 class=\"display-3\">Do you love this awesome\n          <span class=\"text-success\">Design System for Angular?</span>\n        </h2>\n        <p class=\"lead\">Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim where you can find the Design System in Angular. Start a new project or give an old Angular project a new look!</p>\n        <div class=\"btn-wrapper\">\n          <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-versions-section\" class=\"btn btn-primary mb-3 mb-sm-0\">Download Angular</a>\n        </div>\n        <div class=\"text-center\">\n          <h4 class=\"display-4 mb-5 mt-5\">Available on these technologies</h4>\n          <div class=\"row justify-content-center\">\n            <div class=\"col-lg-2 col-4\">\n              <a href=\"https://www.creative-tim.com/product/argon-design-system?ref=adsa-versions-section\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Bootstrap 4 - Most popular front-end component library\">\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg\" class=\"img-fluid\">\n              </a>\n            </div>\n            <div class=\"col-lg-2 col-4\">\n              <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-versions-section\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Angular - One framework. Mobile &amp; desktop\">\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg\" class=\"img-fluid\">\n              </a>\n            </div>\n            <div class=\"col-lg-2 col-4\">\n              <a href=\"https://www.creative-tim.com/product/vue-argon-design-system?ref=adsa-versions-section\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Vue.js - The progressive javascript framework\">\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg\" class=\"img-fluid\">\n              </a>\n            </div>\n            <div class=\"col-lg-2 col-4\">\n              <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-versions-section\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Sketch - Digital design toolkit\">\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg\" class=\"img-fluid\">\n              </a>\n            </div>\n            <div class=\"col-lg-2 col-4\">\n              <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-versions-section\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Adobe Photoshop - Software for digital images manipulation\">\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg\" class=\"img-fluid\">\n              </a>\n            </div>\n            <div class=\"col-lg-2 col-4\">\n              <a href=\"https://reactjs.org/?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] React - A JavaScript library for building user interfaces\">\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg\" class=\"img-fluid opacity-3\">\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "PkTJ":
/*!*************************************************!*\
  !*** ./src/app/checkout/checkout.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja291dC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "H/d9");
/* harmony import */ var _dashboard_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component.css */ "VKVo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.ctorParameters = function () { return []; };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dashboard',
            template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_dashboard_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "QaPg":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/nucleo-section/nucleo-section.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"section section-lg section-nucleo-icons pb-250\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-8 text-center\">\n        <h2 class=\"display-3\">Nucleo Icons</h2>\n        <p class=\"lead\">\n          The official package contains over 21.000 icons which are looking great in combination with Argon Design System. Make sure you check all of them and use those that you like the most.\n        </p>\n        <div class=\"btn-wrapper\">\n          <a href=\"https://demos.creative-tim.com/argon-design-system-angular/documentation/icons?ref=adsa-nucleo-section\" class=\"btn btn-primary\">View demo icons</a>\n          <a href=\"https://nucleoapp.com/?ref=1712\" target=\"_blank\" class=\"btn btn-default mt-3 mt-md-0\">View all icons</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"blur--hover\">\n      <a href=\"https://demos.creative-tim.com/argon-design-system-angular/documentation/icons?ref=adsa-nucleo-section\">\n        <div class=\"icons-container blur-item mt-5\" data-toggle=\"on-screen\">\n          <!-- Center -->\n          <i class=\"icon ni ni-diamond\"></i>\n          <!-- Right 1 -->\n          <i class=\"icon icon-sm ni ni-album-2\"></i>\n          <i class=\"icon icon-sm ni ni-app\"></i>\n          <i class=\"icon icon-sm ni ni-atom\"></i>\n          <!-- Right 2 -->\n          <i class=\"icon ni ni-bag-17\"></i>\n          <i class=\"icon ni ni-bell-55\"></i>\n          <i class=\"icon ni ni-credit-card\"></i>\n          <!-- Left 1 -->\n          <i class=\"icon icon-sm ni ni-briefcase-24\"></i>\n          <i class=\"icon icon-sm ni ni-building\"></i>\n          <i class=\"icon icon-sm ni ni-button-play\"></i>\n          <!-- Left 2 -->\n          <i class=\"icon ni ni-calendar-grid-58\"></i>\n          <i class=\"icon ni ni-camera-compact\"></i>\n          <i class=\"icon ni ni-chart-bar-32\"></i>\n        </div>\n        <span class=\"blur-hidden h5 text-success\">Eplore all the 21.000+ Nucleo Icons</span>\n      </a>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "QnVx":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar (onLoginChanged)=\"doSomething()\" ></app-navbar>\n\n<main>\n  <div class=\"position-relative\">\n    <!-- shape Hero -->\n    <section class=\"section section-lg section-shaped pb-250\">\n      <div class=\"shape shape-style-1 shape-default\">\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n      </div>\n      <div class=\"container py-lg-md d-flex\">\n        <div class=\"col px-0\">\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <h1 class=\"display-3  text-white\">Office Munchies\n                <span>is a one stop solution for your office lunches and dinners!</span>\n              </h1>\n              <p class=\"lead  text-white\">No more standing in lines and wasting your energy to get your favourite plate of food. From Pav Bhaji to Chicken Biryani,we have got you covered in a matter of just few clicks.</p>\n              <div *ngIf=\"!login_status\" class=\"btn-wrapper\">\n                <a routerLink = \"/register\" class=\"btn btn-white btn-icon mb-3 mb-sm-0\">\n                  <span class=\"btn-inner--icon\"><i class=\"ni ni-cloud-download-95\"></i></span>\n                  <span class=\"btn-inner--text\">Signup Now</span>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- SVG separator -->\n      <div class=\"separator separator-bottom separator-skew\">\n        <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n        </svg>\n      </div>\n    </section>\n    <!-- 1st Hero Variation -->\n  </div>\n  <section class=\"section section-lg pt-lg-0 mt--200\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-12\">\n          <div class=\"row row-grid\">\n            <div class=\"col-lg-4\">\n              <div class=\"card card-lift--hover shadow border-0\">\n                <div class=\"card-body py-5\">\n                  <div class=\"icon icon-shape icon-shape-primary rounded-circle mb-4\">\n                    <i class=\"ni ni-check-bold\"></i>\n                  </div>\n                  <h6 class=\"text-primary text-uppercase\">No Download required</h6>\n                  <p class=\"description mt-3\">Office Munchies does not require a download or anything. Just hit us up on a browser and we will deliver.</p>\n                  <div>\n                    <span class=\"badge badge-pill badge-primary\">One time Sign Up</span>\n                    <span class=\"badge badge-pill badge-primary\">24*7 Service</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-4\">\n              <div class=\"card card-lift--hover shadow border-0\">\n                <div class=\"card-body py-5\">\n                  <div class=\"icon icon-shape icon-shape-success rounded-circle mb-4\">\n                    <i class=\"ni ni-istanbul\"></i>\n                  </div>\n                  <h6 class=\"text-success text-uppercase\">Variety in Menu</h6>\n                  <p class=\"description mt-3\">We serve everything from Pasta to Pizza to your homely Dosa's and Aloo Paratha's</p>\n                  <div>\n                    <span class=\"badge badge-pill badge-success\">Hot & Tasty</span>\n                    <span class=\"badge badge-pill badge-success\">Fresh</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-4\">\n              <div class=\"card card-lift--hover shadow border-0\">\n                <div class=\"card-body py-5\">\n                  <div class=\"icon icon-shape icon-shape-warning rounded-circle mb-4\">\n                    <i class=\"ni ni-planet\"></i>\n                  </div>\n                  <h6 class=\"text-warning text-uppercase\">No Delivery Fee</h6>\n                  <p class=\"description mt-3\">We have a large variety of branches near all the major offices and hence do not charge extra delivery fee.What you see on the menu is what you pay!</p>\n                  <div>\n                    <span class=\"badge badge-pill badge-warning\">Monthly Plans</span>\n                    <span class=\"badge badge-pill badge-warning\">Affordable</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"section section-lg\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center text-center mb-lg\">\n        <div class=\"col-lg-8\">\n          <h2 class=\"display-3\">The amazing Team</h2>\n          <p class=\"lead text-muted\">We are a bunch of passionate developers who always wanted to solve real life problems.The primary motto of Office Munchies is to provide delicious food with every food order so that bad food doesn't hamper your productivity...</p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\n          <div class=\"px-4\">\n            <img src=\"./assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\n            <div class=\"pt-4 text-center\">\n              <h5 class=\"title\">\n                <span class=\"d-block mb-1\">Ryan Tompson</span>\n                <small class=\"h6 text-muted\">Web Developer</small>\n              </h5>\n              <div class=\"mt-3\">\n                <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\n                  <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\n                  <i class=\"fa fa-facebook\"></i>\n                </a>\n                <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\n                  <i class=\"fa fa-dribbble\"></i>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\n          <div class=\"px-4\">\n            <img src=\"./assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\n            <div class=\"pt-4 text-center\">\n              <h5 class=\"title\">\n                <span class=\"d-block mb-1\">Romina Hadid</span>\n                <small class=\"h6 text-muted\">Marketing Strategist</small>\n              </h5>\n              <div class=\"mt-3\">\n                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\n                  <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\n                  <i class=\"fa fa-facebook\"></i>\n                </a>\n                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\n                  <i class=\"fa fa-dribbble\"></i>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\n          <div class=\"px-4\">\n            <img src=\"./assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\n            <div class=\"pt-4 text-center\">\n              <h5 class=\"title\">\n                <span class=\"d-block mb-1\">Alexander Smith</span>\n                <small class=\"h6 text-muted\">UI/UX Designer</small>\n              </h5>\n              <div class=\"mt-3\">\n                <a href=\"javascript:void(0)\" class=\"btn btn-info btn-icon-only rounded-circle\">\n                  <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a href=\"javascript:void(0)\" class=\"btn btn-info btn-icon-only rounded-circle\">\n                  <i class=\"fa fa-facebook\"></i>\n                </a>\n                <a href=\"javascript:void(0)\" class=\"btn btn-info btn-icon-only rounded-circle\">\n                  <i class=\"fa fa-dribbble\"></i>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\n          <div class=\"px-4\">\n            <img src=\"./assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\n            <div class=\"pt-4 text-center\">\n              <h5 class=\"title\">\n                <span class=\"d-block mb-1\">John Doe</span>\n                <small class=\"h6 text-muted\">Founder and CEO</small>\n              </h5>\n              <div class=\"mt-3\">\n                <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\n                  <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\n                  <i class=\"fa fa-facebook\"></i>\n                </a>\n                <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\n                  <i class=\"fa fa-dribbble\"></i>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section section-lg pt-0\">\n    <div class=\"container\">\n      <div class=\"card bg-gradient-warning shadow-lg border-0\">\n        <div class=\"p-5\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-lg-8\">\n              <h3 class=\"text-white\">We made food ordering easy for you.</h3>\n              <p class=\"lead text-white mt-3\">Give us a chance and never ever waste time standing in lines and sweating it out for your food!</p>\n            </div>\n            <div class=\"col-lg-3 ml-lg-auto\">\n              <a *ngIf=\"!login_status\" routerLink = \"/register\" class=\"btn btn-lg btn-block btn-white\">Sign up Now!</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n</main>\n");

/***/ }),

/***/ "SsEH":
/*!******************************************************************************!*\
  !*** ./src/app/sections/navigation-section/navigation-section.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZpZ2F0aW9uLXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/filter */ "fjAU");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = 0;
var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    AppComponent.prototype.hasScrolled = function () {
        var st = window.pageYOffset;
        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;
        var navbar = document.getElementsByTagName('nav')[0];
        // If they scrolled down and are past the navbar, add class .headroom--unpinned.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            if (navbar.classList.contains('headroom--pinned')) {
                navbar.classList.remove('headroom--pinned');
                navbar.classList.add('headroom--unpinned');
            }
            // $('.navbar.headroom--pinned').removeClass('headroom--pinned').addClass('headroom--unpinned');
        }
        else {
            // Scroll Up
            //  $(window).height()
            if (st + window.innerHeight < document.body.scrollHeight) {
                // $('.navbar.headroom--unpinned').removeClass('headroom--unpinned').addClass('headroom--pinned');
                if (navbar.classList.contains('headroom--unpinned')) {
                    navbar.classList.remove('headroom--unpinned');
                    navbar.classList.add('headroom--pinned');
                }
            }
        }
        lastScrollTop = st;
    };
    ;
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
    ]; };
    AppComponent.propDecorators = {
        hasScrolled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['window:scroll', ['$event'],] }]
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "T9bN":
/*!************************************************!*\
  !*** ./src/app/sections/sections.component.ts ***!
  \************************************************/
/*! exports provided: SectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsComponent", function() { return SectionsComponent; });
/* harmony import */ var _raw_loader_sections_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./sections.component.html */ "kQxL");
/* harmony import */ var _sections_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections.component.css */ "UiAr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SectionsComponent = /** @class */ (function () {
    function SectionsComponent() {
    }
    SectionsComponent.prototype.ngOnInit = function () {
    };
    SectionsComponent.ctorParameters = function () { return []; };
    SectionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-sections',
            template: _raw_loader_sections_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_sections_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], SectionsComponent);
    return SectionsComponent;
}());



/***/ }),

/***/ "UiAr":
/*!*************************************************!*\
  !*** ./src/app/sections/sections.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWN0aW9ucy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "VKVo":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "VhEO":
/*!**********************************************************************!*\
  !*** ./src/app/sections/alerts-section/alerts-section.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGVydHMtc2VjdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet ></router-outlet>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "W6KJ":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./profile.component.html */ "xwfu");
/* harmony import */ var _profile_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.component.scss */ "bygX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_munchies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/munchies.service */ "aHcC");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(OMService, http, router) {
        this.OMService = OMService;
        this.http = http;
        this.router = router;
        this.name = "";
        this.email = "";
        this.phone_no = "";
        this.profile_picture = "";
        this.gender = "";
        this.member_since = "";
        this.organization_name = "";
        this.office_id = "";
        this.fetchProfile();
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.fetchProfile = function () {
        var _this = this;
        this.OMService.fetch_profile(localStorage.getItem('userID')).subscribe(function (data) {
            console.log(data);
            _this.name = data["full_name"];
            _this.email = data["email"];
            _this.phone_no = data["phone_no"];
            _this.organization_name = data["organization_name"];
            _this.member_since = data["id_created_at"];
            _this.profile_picture = data["profile_picture"];
            _this.gender = data["gender"];
            _this.office_id = data["office_id"];
        });
    };
    ProfileComponent.prototype.openID = function () {
        window.open(this.office_id, "_blank");
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: _app_munchies_service__WEBPACK_IMPORTED_MODULE_3__["MunchiesService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-profile',
            template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_profile_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_app_munchies_service__WEBPACK_IMPORTED_MODULE_3__["MunchiesService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "W706":
/*!*****************************************************************************!*\
  !*** ./src/app/sections/navigation-section/navigation-section.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NavigationSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationSectionComponent", function() { return NavigationSectionComponent; });
/* harmony import */ var _raw_loader_navigation_section_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./navigation-section.component.html */ "z2zG");
/* harmony import */ var _navigation_section_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation-section.component.css */ "SsEH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationSectionComponent = /** @class */ (function () {
    function NavigationSectionComponent() {
    }
    NavigationSectionComponent.prototype.ngOnInit = function () {
    };
    NavigationSectionComponent.ctorParameters = function () { return []; };
    NavigationSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-navigation-section',
            template: _raw_loader_navigation_section_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_navigation_section_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationSectionComponent);
    return NavigationSectionComponent;
}());



/***/ }),

/***/ "XL37":
/*!***********************************************!*\
  !*** ./src/app/preview/preview.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmV2aWV3LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "XT1+":
/*!*********************************************************************!*\
  !*** ./src/app/sections/inputs-section/inputs-section.component.ts ***!
  \*********************************************************************/
/*! exports provided: InputsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputsSectionComponent", function() { return InputsSectionComponent; });
/* harmony import */ var _raw_loader_inputs_section_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./inputs-section.component.html */ "9+np");
/* harmony import */ var _inputs_section_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputs-section.component.css */ "KKlp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InputsSectionComponent = /** @class */ (function () {
    function InputsSectionComponent() {
    }
    InputsSectionComponent.prototype.ngOnInit = function () {
    };
    InputsSectionComponent.ctorParameters = function () { return []; };
    InputsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-inputs-section',
            template: _raw_loader_inputs_section_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_inputs_section_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], InputsSectionComponent);
    return InputsSectionComponent;
}());



/***/ }),

/***/ "XsTM":
/*!*********************************************!*\
  !*** ./src/app/sections/sections.module.ts ***!
  \*********************************************/
/*! exports provided: SectionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsModule", function() { return SectionsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-nouislider */ "yw8I");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "yQBb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sections_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections.component */ "T9bN");
/* harmony import */ var _buttons_section_buttons_section_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./buttons-section/buttons-section.component */ "K4CT");
/* harmony import */ var _inputs_section_inputs_section_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./inputs-section/inputs-section.component */ "XT1+");
/* harmony import */ var _crs_section_crs_section_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./crs-section/crs-section.component */ "0cls");
/* harmony import */ var _navigation_section_navigation_section_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navigation-section/navigation-section.component */ "W706");
/* harmony import */ var _tabs_section_tabs_section_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tabs-section/tabs-section.component */ "FCdR");
/* harmony import */ var _alerts_section_alerts_section_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./alerts-section/alerts-section.component */ "jyux");
/* harmony import */ var _typography_section_typography_section_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./typography-section/typography-section.component */ "0KVf");
/* harmony import */ var _angular_section_angular_section_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./angular-section/angular-section.component */ "abin");
/* harmony import */ var _nucleo_section_nucleo_section_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./nucleo-section/nucleo-section.component */ "aZjO");
/* harmony import */ var _versions_section_versions_section_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./versions-section/versions-section.component */ "KuAA");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modal/modal.component */ "+XXu");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var SectionsModule = /** @class */ (function () {
    function SectionsModule() {
    }
    SectionsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _sections_component__WEBPACK_IMPORTED_MODULE_7__["SectionsComponent"],
                _buttons_section_buttons_section_component__WEBPACK_IMPORTED_MODULE_8__["ButtonsSectionComponent"],
                _inputs_section_inputs_section_component__WEBPACK_IMPORTED_MODULE_9__["InputsSectionComponent"],
                _crs_section_crs_section_component__WEBPACK_IMPORTED_MODULE_10__["CrsSectionComponent"],
                _navigation_section_navigation_section_component__WEBPACK_IMPORTED_MODULE_11__["NavigationSectionComponent"],
                _tabs_section_tabs_section_component__WEBPACK_IMPORTED_MODULE_12__["TabsSectionComponent"],
                _alerts_section_alerts_section_component__WEBPACK_IMPORTED_MODULE_13__["AlertsSectionComponent"],
                _typography_section_typography_section_component__WEBPACK_IMPORTED_MODULE_14__["TypographySectionComponent"],
                _angular_section_angular_section_component__WEBPACK_IMPORTED_MODULE_15__["AngularSectionComponent"],
                _nucleo_section_nucleo_section_component__WEBPACK_IMPORTED_MODULE_16__["NucleoSectionComponent"],
                _versions_section_versions_section_component__WEBPACK_IMPORTED_MODULE_17__["VersionsSectionComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_18__["NgbdModalComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_18__["NgbdModalContent"]
            ],
            entryComponents: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_18__["NgbdModalContent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__["JwBootstrapSwitchNg2Module"]
            ],
            exports: [_sections_component__WEBPACK_IMPORTED_MODULE_7__["SectionsComponent"]]
        })
    ], SectionsModule);
    return SectionsModule;
}());



/***/ }),

/***/ "YSaL":
/*!******************************************************************!*\
  !*** ./src/app/sections/tabs-section/tabs-section.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "EtQq");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/footer/footer.component */ "jQpT");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.module */ "ct+p");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./order/order.component */ "uBHN");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./checkout/checkout.component */ "IiZn");
/* harmony import */ var _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./order-success/order-success.component */ "Ntsp");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _preview_preview_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./preview/preview.component */ "oFMy");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _order_order_component__WEBPACK_IMPORTED_MODULE_14__["OrderComponent"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_15__["CheckoutComponent"],
                _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_16__["OrderSuccessComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"],
                _preview_preview_component__WEBPACK_IMPORTED_MODULE_19__["PreviewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_12__["HomeModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "aHcC":
/*!*************************************!*\
  !*** ./src/app/munchies.service.ts ***!
  \*************************************/
/*! exports provided: MunchiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MunchiesService", function() { return MunchiesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MunchiesService = /** @class */ (function () {
    function MunchiesService(http, router) {
        this.http = http;
        this.router = router;
        this.base_url = "http://localhost:8000/api/v1";
    }
    MunchiesService.prototype.fetch_profile = function (id) {
        return this.http.get(this.base_url + '/users/UserByID?_id=' + id);
    };
    MunchiesService.prototype.loginUser = function (email, password) {
        console.log("Hello from service");
        var obj = {
            "email": email,
            "password": password
        };
        return this.http.post(this.base_url + '/users/login', obj);
    };
    MunchiesService.prototype.signup = function (obj) {
        console.log("Hello from service");
        return this.http.post(this.base_url + '/users/saveUser', obj);
    };
    MunchiesService.prototype.fetch_menu = function () {
        return this.http.get(this.base_url + '/food_items/allFoods');
    };
    MunchiesService.prototype.placeOrder = function (obj) {
        console.log("Hello from service");
        return this.http.post(this.base_url + '/users/order', obj);
    };
    MunchiesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    MunchiesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MunchiesService);
    return MunchiesService;
}());



/***/ }),

/***/ "aScS":
/*!******************************************************************************!*\
  !*** ./src/app/sections/typography-section/typography-section.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0eXBvZ3JhcGh5LXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "aZjO":
/*!*********************************************************************!*\
  !*** ./src/app/sections/nucleo-section/nucleo-section.component.ts ***!
  \*********************************************************************/
/*! exports provided: NucleoSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NucleoSectionComponent", function() { return NucleoSectionComponent; });
/* harmony import */ var _raw_loader_nucleo_section_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./nucleo-section.component.html */ "QaPg");
/* harmony import */ var _nucleo_section_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nucleo-section.component.css */ "OK6E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NucleoSectionComponent = /** @class */ (function () {
    function NucleoSectionComponent() {
    }
    NucleoSectionComponent.prototype.ngOnInit = function () {
        var nucleoView = document.getElementsByClassName('icons-container')[0];
        window.addEventListener('scroll', function (event) {
            if (this.isInViewport(nucleoView)) {
                nucleoView.classList.add('on-screen');
            }
            else {
                nucleoView.classList.remove('on-screen');
            }
        }.bind(this), false);
    };
    NucleoSectionComponent.prototype.isInViewport = function (elem) {
        var bounding = elem.getBoundingClientRect();
        return (bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth));
    };
    ;
    NucleoSectionComponent.ctorParameters = function () { return []; };
    NucleoSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-nucleo-section',
            template: _raw_loader_nucleo_section_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_nucleo_section_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], NucleoSectionComponent);
    return NucleoSectionComponent;
}());



/***/ }),

/***/ "abin":
/*!***********************************************************************!*\
  !*** ./src/app/sections/angular-section/angular-section.component.ts ***!
  \***********************************************************************/
/*! exports provided: AngularSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularSectionComponent", function() { return AngularSectionComponent; });
/* harmony import */ var _raw_loader_angular_section_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./angular-section.component.html */ "9W4q");
/* harmony import */ var _angular_section_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./angular-section.component.css */ "tALr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AngularSectionComponent = /** @class */ (function () {
    function AngularSectionComponent(modalService, calendar) {
        this.modalService = modalService;
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    }
    AngularSectionComponent.prototype.open = function (content, type, modalDimension) {
        var _this = this;
        if (modalDimension === 'sm' && type === 'modal_mini') {
            this.modalService.open(content, { windowClass: 'modal-mini', size: 'sm', centered: true }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else if (modalDimension === '' && type === 'Notification') {
            this.modalService.open(content, { windowClass: 'modal-danger', centered: true }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else {
            this.modalService.open(content, { centered: true }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
    };
    AngularSectionComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    AngularSectionComponent.prototype.isRangeStart = function (date) {
        return this.model1 && this.model2 && date.equals(this.model1);
    };
    AngularSectionComponent.prototype.isRangeEnd = function (date) {
        return this.model1 && this.model2 && date.equals(this.model2);
    };
    AngularSectionComponent.prototype.isInRange = function (date) {
        return date.after(this.model1) && date.before(this.model2);
    };
    AngularSectionComponent.prototype.isActive = function (date) {
        return date.equals(this.model1) || date.equals(this.model2);
    };
    AngularSectionComponent.prototype.endDateChanged = function (date) {
        if (this.model1 && this.model2 && (this.model1.year > this.model2.year || this.model1.year === this.model2.year && this.model1.month > this.model2.month || this.model1.year === this.model2.year && this.model1.month === this.model2.month && this.model1.day > this.model2.day)) {
            this.model1 = this.model2;
        }
    };
    AngularSectionComponent.prototype.startDateChanged = function (date) {
        if (this.model1 && this.model2 && (this.model1.year > this.model2.year || this.model1.year === this.model2.year && this.model1.month > this.model2.month || this.model1.year === this.model2.year && this.model1.month === this.model2.month && this.model1.day > this.model2.day)) {
            this.model2 = this.model1;
        }
    };
    AngularSectionComponent.prototype.ngOnInit = function () {
    };
    AngularSectionComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCalendar"] }
    ]; };
    AngularSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-angular-section',
            template: _raw_loader_angular_section_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_angular_section_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCalendar"]])
    ], AngularSectionComponent);
    return AngularSectionComponent;
}());



/***/ }),

/***/ "bdh1":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./order/order.component */ "uBHN");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./checkout/checkout.component */ "IiZn");
/* harmony import */ var _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./order-success/order-success.component */ "Ntsp");
/* harmony import */ var _preview_preview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./preview/preview.component */ "oFMy");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'user-profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'register', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] },
    { path: 'landing', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__["LandingComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'order', component: _order_order_component__WEBPACK_IMPORTED_MODULE_9__["OrderComponent"] },
    { path: 'checkout', component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_10__["CheckoutComponent"] },
    { path: 'success', component: _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_11__["OrderSuccessComponent"] },
    { path: 'preview', component: _preview_preview_component__WEBPACK_IMPORTED_MODULE_12__["PreviewComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "bygX":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "cKxa":
/*!*******************************************!*\
  !*** ./src/app/order/order.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "cruu":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.component */ "9vUh");
/* harmony import */ var _sections_sections_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sections/sections.module */ "XsTM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _sections_sections_module__WEBPACK_IMPORTED_MODULE_6__["SectionsModule"]
            ],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
            exports: [_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
            providers: []
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "eo/P":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/crs-section/crs-section.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"section\">\n  <div class=\"container\">\n    <!-- Custom controls -->\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-md-6\">\n        <!-- Checkboxes -->\n        <div class=\"mb-3\">\n          <small class=\"text-uppercase font-weight-bold\">Checkboxes</small>\n        </div>\n        <div class=\"custom-control custom-checkbox mb-3\">\n          <input class=\"custom-control-input\" id=\"customCheck1\" type=\"checkbox\">\n          <label class=\"custom-control-label\" for=\"customCheck1\">\n            <span>Unchecked</span>\n          </label>\n        </div>\n        <div class=\"custom-control custom-checkbox mb-3\">\n          <input class=\"custom-control-input\" id=\"customCheck2\" type=\"checkbox\" checked>\n          <label class=\"custom-control-label\" for=\"customCheck2\">\n            <span>Checked</span>\n          </label>\n        </div>\n        <div class=\"custom-control custom-checkbox mb-3\">\n          <input class=\"custom-control-input\" id=\"customCheck3\" type=\"checkbox\" disabled>\n          <label class=\"custom-control-label\" for=\"customCheck3\">\n            <span>Disabled Unchecked</span>\n          </label>\n        </div>\n        <div class=\"custom-control custom-checkbox mb-3\">\n          <input class=\"custom-control-input\" id=\"customCheck4\" type=\"checkbox\" checked disabled>\n          <label class=\"custom-control-label\" for=\"customCheck4\">\n            <span>Disabled Checked</span>\n          </label>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-sm-6 mt-4 mt-md-0\">\n        <!-- Radio buttons -->\n        <div class=\"mb-3\">\n          <small class=\"text-uppercase font-weight-bold\">Radios</small>\n        </div>\n        <div class=\"custom-control custom-radio mb-3\">\n          <input name=\"custom-radio-1\" class=\"custom-control-input\" id=\"customRadio1\" type=\"radio\">\n          <label class=\"custom-control-label\" for=\"customRadio1\">\n            <span>Unchecked</span>\n          </label>\n        </div>\n        <div class=\"custom-control custom-radio mb-3\">\n          <input name=\"custom-radio-1\" class=\"custom-control-input\" id=\"customRadio2\" checked type=\"radio\">\n          <label class=\"custom-control-label\" for=\"customRadio2\">\n            <span>Checked</span>\n          </label>\n        </div>\n        <div class=\"custom-control custom-radio mb-3\">\n          <input name=\"custom-radio-2\" class=\"custom-control-input\" id=\"customRadio3\" disabled type=\"radio\">\n          <label class=\"custom-control-label\" for=\"customRadio3\">\n            <span>Disabled unchecked</span>\n          </label>\n        </div>\n        <div class=\"custom-control custom-radio mb-3\">\n          <input name=\"custom-radio-2\" class=\"custom-control-input\" id=\"customRadio4\" checked disabled type=\"radio\">\n          <label class=\"custom-control-label\" for=\"customRadio4\">\n            <span>Disabled checkbox</span>\n          </label>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-sm-6 mt-4 mt-md-0\">\n        <!-- Toggle buttons -->\n        <div class=\"mb-3\">\n          <small class=\"text-uppercase font-weight-bold\">Toggle buttons</small>\n        </div>\n        <label class=\"custom-toggle\">\n          <input type=\"checkbox\">\n          <span class=\"custom-toggle-slider rounded-circle\"></span>\n        </label>\n        <span class=\"clearfix\"></span>\n        <label class=\"custom-toggle\">\n          <input type=\"checkbox\" checked>\n          <span class=\"custom-toggle-slider rounded-circle\"></span>\n        </label>\n      </div>\n      <div class=\"col-lg-3 col-sm-6 mt-4 mt-md-0\">\n        <div class=\"mb-3\">\n          <small class=\"text-uppercase font-weight-bold\">Sliders</small>\n        </div>\n        <!-- Simple slider -->\n        <div class=\"input-slider-container\">\n          <div id=\"input-slider\" class=\"input-slider\" ></div>\n        </div>\n        <!-- Range slider -->\n        <div class=\"mt-5\">\n          <!-- Range slider container -->\n          <div id=\"input-slider-range\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row justify-content-center mt-md\">\n      <div class=\"col-lg-12\">\n        <!-- Menu -->\n        <h3 class=\"h4 text-success font-weight-bold mb-4\">Menu</h3>\n        <div class=\"row\">\n          <div class=\"col-lg-6\">\n            <div class=\"mb-3\">\n              <small class=\"text-uppercase font-weight-bold\">With text</small>\n            </div>\n            <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary rounded\">\n              <div class=\"container\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">Menu</a>\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#nav-inner-primary\" aria-controls=\"nav-inner-primary\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                  <span class=\"navbar-toggler-icon\"></span>\n                </button>\n                <div class=\"collapse navbar-collapse\" id=\"nav-inner-primary\">\n                  <div class=\"navbar-collapse-header\">\n                    <div class=\"row\">\n                      <div class=\"col-6 collapse-brand\">\n                        <a href=\"javascript:void(0)\">\n                          <img src=\"./assets/img/brand/blue.png\">\n                        </a>\n                      </div>\n                      <div class=\"col-6 collapse-close\">\n                        <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#nav-inner-primary\" aria-controls=\"nav-inner-primary\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                          <span></span>\n                          <span></span>\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                  <ul class=\"navbar-nav ml-lg-auto\">\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">Discover\n                        <span class=\"sr-only\">(current)</span>\n                      </a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">Profile</a>\n                    </li>\n                    <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n                      <a class=\"nav-link no-caret\" ngbDropdownToggle id=\"dropdown1\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Settings</a>\n                      <div class=\"dropdown-menu-right\" aria-labelledby=\"dropdown1\" ngbDropdownMenu>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\n                        <div class=\"dropdown-divider\"></div>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\n                      </div>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </nav>\n          </div>\n          <div class=\"col-lg-6 mt-4 mt-lg-0\">\n            <div class=\"mb-3\">\n              <small class=\"text-uppercase font-weight-bold\">With icons</small>\n            </div>\n            <nav class=\"navbar navbar-expand-lg navbar-dark bg-success rounded\">\n              <div class=\"container\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">Menu</a>\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#nav-inner-success\" aria-controls=\"nav-inner-success\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                  <span class=\"navbar-toggler-icon\"></span>\n                </button>\n                <div class=\"collapse navbar-collapse\" id=\"nav-inner-success\">\n                  <div class=\"navbar-collapse-header\">\n                    <div class=\"row\">\n                      <div class=\"col-6 collapse-brand\">\n                        <a href=\"javascript:void(0)\">\n                          <img src=\"./assets/img/brand/blue.png\">\n                        </a>\n                      </div>\n                      <div class=\"col-6 collapse-close\">\n                        <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#nav-inner-success\" aria-controls=\"nav-inner-success\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                          <span></span>\n                          <span></span>\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                  <ul class=\"navbar-nav ml-lg-auto\">\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n                        <i class=\"ni ni-favourite-28\"></i>\n                        <span class=\"nav-link-inner--text d-lg-none\">Discover</span>\n                      </a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n                        <i class=\"ni ni-notification-70\"></i>\n                        <span class=\"nav-link-inner--text d-lg-none\">Profile</span>\n                      </a>\n                    </li>\n                    <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n                      <a class=\"nav-link nav-link-icon no-caret\" ngbDropdownToggle id=\"nav-inner-success_dropdown_1\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <i class=\"ni ni-settings-gear-65\"></i>\n                        <span class=\"nav-link-inner--text d-lg-none\">Settings</span>\n                      </a>\n                      <div class=\"dropdown-menu-right\" aria-labelledby=\"nav-inner-success_dropdown_1\" ngbDropdownMenu>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\n                        <div class=\"dropdown-divider\"></div>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\n                      </div>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </nav>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "f2YT":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "gFCd":
/*!************************************************************************!*\
  !*** ./src/app/sections/buttons-section/buttons-section.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXR0b25zLXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "htC0":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/typography-section/typography-section.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <h2 class=\"mt-lg mb-5\">\n    <span>Typography</span>\n  </h2>\n  <h3 class=\"h4 text-success font-weight-bold\">Headings</h3>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 1</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <h1 class=\"mb-0\">Argon Design System</h1>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 2</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <h2 class=\"mb-0\">Argon Design System</h2>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 3</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <h3 class=\"mb-0\">Argon Design System</h3>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 4</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <h4 class=\"mb-0\">Argon Design System</h4>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 5</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <h5 class=\"mb-0\">Argon Design System </h5>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 6</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <h6 class=\"mb-0\">Argon Design System </h6>\n    </div>\n  </div>\n  <!-- Display titles -->\n  <h3 class=\"h4 text-success font-weight-bold mt-md\">Display titles</h3>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Display 1</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <h1 class=\"display-1 mb-0\">Argon Design System</h1>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Display 2</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <h2 class=\"display-2 mb-0\">Argon Design System</h2>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Display 3</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <h3 class=\"display-3 mb-0\">Argon Design System</h3>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Display 4</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <h4 class=\"display-4 mb-0\">Argon Design System</h4>\n    </div>\n  </div>\n  <!-- Specialized titles -->\n  <h3 class=\"h4 text-success font-weight-bold mt-md\">Specialized titles</h3>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <h3 class=\"heading mb-0\">Argon Design System</h3>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading title</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <h3 class=\"heading-title text-warning mb-0\">Argon Design System</h3>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading seaction</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <div>\n        <h2 class=\"display-3\">Header with small subtitle </h2>\n        <p class=\"lead text-muted\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record maximum.</p>\n      </div>\n    </div>\n  </div>\n  <!-- Paragraphs -->\n  <h3 class=\"h4 text-success font-weight-bold mt-md\">Paragraphs</h3>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Paragraph</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <p>I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Lead text</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <p class=\"lead\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Quote</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <blockquote class=\"blockquote\">\n        <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n        <footer class=\"blockquote-footer\">Someone famous in\n          <cite title=\"Source Title\">Source Title</cite>\n        </footer>\n      </blockquote>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Muted text</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <p class=\"text-muted mb-0\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Primary text</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <p class=\"text-primary\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Info text</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <p class=\"text-info mb-0\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Success text</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <p class=\"text-success mb-0\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Warning text</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <p class=\"text-warning mb-0\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Danger text</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <p class=\"text-danger mb-0\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\n    </div>\n  </div>\n  <!-- Images -->\n  <h2 class=\"mt-lg mb-5\">\n    <span>Images</span>\n  </h2>\n  <div class=\"row\">\n    <div class=\"col-sm-3 col-6\">\n      <small class=\"d-block text-uppercase font-weight-bold mb-4\">Image</small>\n      <img src=\"./assets/img/theme/team-1-800x800.jpg\" alt=\"Rounded image\" class=\"img-fluid rounded shadow\" style=\"width: 150px;\">\n    </div>\n    <div class=\"col-sm-3 col-6\">\n      <small class=\"d-block text-uppercase font-weight-bold mb-4\">Circle Image</small>\n      <img src=\"./assets/img/theme/team-2-800x800.jpg\" alt=\"Circle image\" class=\"img-fluid rounded-circle shadow\" style=\"width: 150px;\">\n    </div>\n    <div class=\"col-sm-3 col-6 mt-5 mt-sm-0\">\n      <small class=\"d-block text-uppercase font-weight-bold mb-4\">Raised</small>\n      <img src=\"./assets/img/theme/team-3-800x800.jpg\" alt=\"Raised image\" class=\"img-fluid rounded shadow-lg\" style=\"width: 150px;\">\n    </div>\n    <div class=\"col-sm-3 col-6 mt-5 mt-sm-0\">\n      <small class=\"d-block text-uppercase font-weight-bold mb-4\">Circle Raised</small>\n      <img src=\"./assets/img/theme/team-4-800x800.jpg\" alt=\"Raised circle image\" class=\"img-fluid rounded-circle shadow-lg\" style=\"width: 150px;\">\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "in5m":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar (onLoginChanged)=\"doSomething()\" ></app-navbar>\n\n<main>\n  <section class=\"section section-shaped section-lg\">\n    <div class=\"shape shape-style-1 bg-gradient-default\">\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n    </div>\n    <div class=\"container pt-lg-md\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-5\">\n          <div class=\"card bg-secondary shadow border-0\">\n       \n            <div class=\"card-body px-lg-5 py-lg-5\">\n              <div class=\"text-center text-muted mb-4\">\n                <h3>Log In</h3>\n              </div>\n                <div class=\"form-group mb-3\" [ngClass]=\"{'focused':focus===true}\">\n                  <div class=\"input-group input-group-alternative\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                    </div>\n                    <input class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email\" type=\"email\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n                  </div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\n                  <div class=\"input-group input-group-alternative\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                    </div>\n                    <input class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\" type=\"password\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n                  </div>\n                </div>\n                          <div class=\"text-center\">\n                  <button type=\"button\" class=\"btn btn-primary my-4\" (click)=\"login()\">Log in</button>\n                  <br>\n\n                <small>New to Office Munchies? <a routerLink = \"/register\" >Sign up Now! </a> </small>\n\n                </div>\n        \n            </div>\n          </div>\n    \n        </div>\n      </div>\n    </div>\n  </section>\n</main>\n");

/***/ }),

/***/ "jCCv":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-success/order-success.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("    <app-navbar (onLoginChanged)=\"doSomething()\" ></app-navbar>\n\n  <div class=\"position-relative\">\n    <!-- shape Hero -->\n    <section class=\"section section-sm section-shaped\">\n      <div class=\"shape shape-style-1 shape-default\">\n        <span></span>\n      </div>\n    </section>\n    <!-- 1st Hero Variation -->\n  </div> \n\n  <section class=\"section\">\n  \n<div class=\"row\">\n\n<div class=\"col-md-4 offset-4\">\n\n  <svg class=\"checkmark\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 52 52\">\n  <circle class=\"checkmark__circle\" cx=\"26\" cy=\"26\" r=\"25\" fill=\"none\"/>\n  <path class=\"checkmark__check\" fill=\"none\" d=\"M14.1 27.2l7.1 7.2 16.7-16.8\"/>\n\n   </svg>\n\n\n\n<h5> You order worth Rs {{total}} will be delivered to you by {{time}} on your table! </h5>\n<h6> Further details have been mailed to your email! </h6>\n\n</div>\n</div>\n\n\n</section>");

/***/ }),

/***/ "jGP6":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\" [ngClass]=\"{'has-cards': getPath()!=='/user-profile' && getPath()!=='/register' && getPath()!=='/login'}\">\n  <div class=\"container\">\n\n    <div class=\"row align-items-center justify-content-md-between\">\n      <div class=\"col-md-6\">\n        <div class=\"copyright\">\n          &copy; {{test | date: 'yyyy'}}\n          <a target=\"_blank\">Keerat</a>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <ul class=\"nav nav-footer justify-content-end\">\n          <li class=\"nav-item\">\n            <a href=\"https://www.creative-tim.com?ref=adsa-footer\" class=\"nav-link\" target=\"_blank\">About Office Munchies</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n");

/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "jGP6");
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss */ "f2YT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FooterComponent = /** @class */ (function () {
    function FooterComponent(router) {
        this.router = router;
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.getPath = function () {
        return this.router.url;
    };
    FooterComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-footer',
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "jyux":
/*!*********************************************************************!*\
  !*** ./src/app/sections/alerts-section/alerts-section.component.ts ***!
  \*********************************************************************/
/*! exports provided: AlertsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsSectionComponent", function() { return AlertsSectionComponent; });
/* harmony import */ var _raw_loader_alerts_section_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./alerts-section.component.html */ "HiAf");
/* harmony import */ var _alerts_section_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alerts-section.component.css */ "VhEO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertsSectionComponent = /** @class */ (function () {
    function AlertsSectionComponent() {
        this.alerts = [];
        this.alerts.push({
            id: 1,
            type: 'success',
            strong: 'Success!',
            message: 'This is a success alert—check it out!',
            icon: 'ni ni-like-2'
        }, {
            id: 2,
            strong: 'Info!',
            type: 'info',
            message: 'This is an info alert—check it out!',
            icon: 'ni ni-bell-55'
        }, {
            id: 3,
            type: 'warning',
            strong: 'Warning!',
            message: 'This is a warning alert—check it out!',
            icon: 'ni ni-bell-55'
        }, {
            id: 4,
            type: 'danger',
            strong: 'Danger!',
            message: 'This is a danger alert—check it out!',
            icon: 'ni ni-support-16'
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    AlertsSectionComponent.prototype.close = function (alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    };
    AlertsSectionComponent.ctorParameters = function () { return []; };
    AlertsSectionComponent.propDecorators = {
        alerts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    AlertsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-alerts-section',
            template: _raw_loader_alerts_section_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_alerts_section_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], AlertsSectionComponent);
    return AlertsSectionComponent;
}());



/***/ }),

/***/ "kQxL":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/sections.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-buttons-section></app-buttons-section>\n<app-inputs-section></app-inputs-section>\n<app-crs-section></app-crs-section>\n<app-navigation-section></app-navigation-section>\n<section class=\"section section-components\">\n  <app-tabs-section></app-tabs-section>\n  <app-alerts-section></app-alerts-section>\n  <app-typography-section></app-typography-section>\n  <app-angular-section></app-angular-section>\n</section>\n<section class=\"section section-shaped\">\n  <div class=\"shape shape-style-1 shape-default\">\n    <span></span>\n    <span></span>\n    <span></span>\n    <span></span>\n    <span></span>\n    <span></span>\n  </div>\n  <div class=\"container py-md\">\n    <div class=\"row justify-content-between align-items-center\">\n      <div class=\"col-lg-5 mb-5 mb-lg-0\">\n        <h1 class=\"text-white font-weight-light\">Bootstrap carousel</h1>\n        <p class=\"lead text-white mt-4\">Argon Design System comes with four pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\n        <a href=\"https://demos.creative-tim.com/argon-design-system-angular/documentation/alerts?ref=adsa-bootstrap-carousel\" class=\"btn btn-white mt-4\">See all components</a>\n      </div>\n      <div class=\"col-lg-6 mb-lg-auto\">\n        <div class=\"rounded shadow-lg overflow-hidden transform-perspective-right\">\n          <ngb-carousel>\n              <ng-template ngbSlide>\n                <img class=\"img-fluid\" src=\"assets/img/theme/img-1-1200x1000.jpg\" alt=\"First slide\">\n              </ng-template>\n              <ng-template ngbSlide>\n                <img class=\"img-fluid\" src=\"assets/img/theme/img-2-1200x1000.jpg\" alt=\"Second slide\">\n              </ng-template>\n          </ngb-carousel>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- SVG separator -->\n  <div class=\"separator separator-bottom separator-skew\">\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n    </svg>\n  </div>\n</section>\n<app-nucleo-section></app-nucleo-section>\n<section class=\"section section-lg section-shaped\">\n  <div class=\"shape shape-style-1 shape-default\">\n    <span></span>\n    <span></span>\n    <span></span>\n    <span></span>\n    <span></span>\n    <span></span>\n    <span></span>\n    <span></span>\n  </div>\n  <div class=\"container py-md\">\n    <div class=\"row row-grid justify-content-between align-items-center\">\n      <div class=\"col-lg-6\">\n        <h3 class=\"display-3 text-white\">A beautiful Design System\n          <span class=\"text-white\">completed with examples</span>\n        </h3>\n        <p class=\"lead text-white\">The Design System comes with four pre-built pages to help you get started faster. You can change the text and images and you're good to go. More importantly, looking at them will give you a picture of what you can built with this powerful Bootstrap 4 Design System.</p>\n        <div class=\"btn-wrapper\">\n          <a [routerLink]=\"['/login']\" class=\"btn btn-success\">Login Page</a>\n          <a [routerLink]=\"['/register']\" class=\"btn btn-white\">Register Page</a>\n        </div>\n      </div>\n      <div class=\"col-lg-5 mb-lg-auto\">\n        <div class=\"transform-perspective-right\">\n          <div class=\"card bg-secondary shadow border-0\">\n            <div class=\"card-header bg-white pb-5\">\n              <div class=\"text-muted text-center mb-3\">\n                <small>Sign in with</small>\n              </div>\n              <div class=\"btn-wrapper text-center\">\n                <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\n                  <span class=\"btn-inner--icon\">\n                    <img src=\"./assets/img/icons/common/github.svg\">\n                  </span>\n                  <span class=\"btn-inner--text\">Github</span>\n                </a>\n                <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\n                  <span class=\"btn-inner--icon\">\n                    <img src=\"./assets/img/icons/common/google.svg\">\n                  </span>\n                  <span class=\"btn-inner--text\">Google</span>\n                </a>\n              </div>\n            </div>\n            <div class=\"card-body px-lg-5 py-lg-5\">\n              <div class=\"text-center text-muted mb-4\">\n                <small>Or sign in with credentials</small>\n              </div>\n              <form role=\"form\">\n                <div class=\"form-group mb-3\" [ngClass]=\"{'focused':focus===true}\">\n                  <div class=\"input-group input-group-alternative\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                    </div>\n                    <input class=\"form-control\" placeholder=\"Email\" type=\"email\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n                  </div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\n                  <div class=\"input-group input-group-alternative\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                    </div>\n                    <input class=\"form-control\" placeholder=\"Password\" type=\"password\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n                  </div>\n                </div>\n                <div class=\"custom-control custom-control-alternative custom-checkbox\">\n                  <input class=\"custom-control-input\" id=\" customCheckLogin2\" type=\"checkbox\">\n                  <label class=\"custom-control-label\" for=\" customCheckLogin2\">\n                    <span>Remember me</span>\n                  </label>\n                </div>\n                <div class=\"text-center\">\n                  <button type=\"button\" class=\"btn btn-primary my-4\">Sign in</button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- SVG separator -->\n  <div class=\"separator separator-bottom separator-skew\">\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n    </svg>\n  </div>\n</section>\n<app-versions-section></app-versions-section>\n");

/***/ }),

/***/ "kbRT":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/modal/modal.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>You can pass an existing component as content of the modal window. In this case remember to add content component\nas an <code>entryComponents</code> section of your <code>NgModule</code>.</p>\n\n<button class=\"btn btn-outline-danger btn-round\" (click)=\"open()\">Launch demo modal</button>\n");

/***/ }),

/***/ "m1bB":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/buttons-section/buttons-section.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"section section-components pb-0\" id=\"section-components\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-12\">\n        <!-- Basic elements -->\n        <h2 class=\"mb-5\">\n          <span>Basic Elements</span>\n        </h2>\n        <!-- Buttons -->\n        <h3 class=\"h4 text-success font-weight-bold mb-4\">Buttons</h3>\n        <!-- Button styles -->\n        <div>\n          <button class=\"btn btn-primary\" type=\"button\">Button</button>\n          <button class=\"btn btn-icon btn-3 btn-primary\" type=\"button\">\n            <span class=\"btn-inner--icon\"><i class=\"ni ni-bag-17\"></i></span>\n            <span class=\"btn-inner--text\">With icon</span>\n          </button>\n          <button class=\"btn btn-icon btn-2 btn-primary\" type=\"button\">\n            <span class=\"btn-inner--icon\"><i class=\"ni ni-bag-17\"></i></span>\n          </button>\n          <!-- Button wizes -->\n          <div class=\"mb-3 mt-5\">\n            <small class=\"text-uppercase font-weight-bold\">Pick your size</small>\n          </div>\n          <button class=\"btn btn-sm btn-primary\" type=\"button\">Small</button>\n          <button class=\"btn btn-1 btn-primary\" type=\"button\">Regular</button>\n          <button class=\"btn btn-lg btn-primary\" type=\"button\">Large Button</button>\n        </div>\n        <!-- Button colors -->\n        <div class=\"mb-3 mt-5\">\n          <small class=\"text-uppercase font-weight-bold\">Pick your color</small>\n        </div>\n        <button class=\"btn btn-1 btn-primary\" type=\"button\">Primary</button>\n        <button class=\"btn btn-1 btn-info\" type=\"button\">Info</button>\n        <button class=\"btn btn-1 btn-success\" type=\"button\">Success</button>\n        <button class=\"btn btn-1 btn-warning\" type=\"button\">Warning</button>\n        <button class=\"btn btn-1 btn-danger\" type=\"button\">Danger</button>\n        <button class=\"btn btn-1 btn-neutral\" type=\"button\">Neutral</button>\n        <div class=\"mb-3 mt-5\">\n          <small class=\"text-uppercase font-weight-bold\">Outline</small>\n        </div>\n        <button class=\"btn btn-1 btn-outline-primary\" type=\"button\">Outline-primary</button>\n        <button class=\"btn btn-1 btn-outline-info\" type=\"button\">Outline-info</button>\n        <button class=\"btn btn-1 btn-outline-success\" type=\"button\">Outline-success</button>\n        <button class=\"btn btn-1 btn-outline-warning\" type=\"button\">Outline-warning</button>\n        <button class=\"btn btn-1 btn-outline-danger\" type=\"button\">Outline-danger</button>\n        <!-- Button links -->\n        <div class=\"mb-3 mt-5\">\n          <small class=\"text-uppercase font-weight-bold\">Links</small>\n        </div>\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-default\">Default</a>\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-primary\">Primary</a>\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-info\">Info</a>\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-success\">Success</a>\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-warning\">Warning</a>\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-danger\">Danger</a>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "n7sk":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "oFMy":
/*!**********************************************!*\
  !*** ./src/app/preview/preview.component.ts ***!
  \**********************************************/
/*! exports provided: PreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewComponent", function() { return PreviewComponent; });
/* harmony import */ var _raw_loader_preview_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./preview.component.html */ "I4Ur");
/* harmony import */ var _preview_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preview.component.css */ "XL37");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_munchies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/munchies.service */ "aHcC");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PreviewComponent = /** @class */ (function () {
    function PreviewComponent(OMService, http, router) {
        this.OMService = OMService;
        this.http = http;
        this.router = router;
        this.id = "";
        this.dp = "";
        this.name = "";
        this.email = "";
        this.phone_number = "";
        this.organization_name = "";
        this.employee_no = "";
        this.gender = "";
        var obj = JSON.parse(localStorage.getItem("signup_body"));
        this.id = obj["office_id"];
        this.dp = obj["profile_picture"];
        this.email = obj["email"];
        this.phone_number = obj["phone_no"];
        this.employee_no = obj["emp_no"];
        this.organization_name = obj["organization_name"];
        this.name = obj["full_name"];
        this.gender = obj["gender"];
    }
    PreviewComponent.prototype.ngOnInit = function () {
    };
    PreviewComponent.prototype.sign_up = function () {
        var _this = this;
        var obj = JSON.parse(localStorage.getItem("signup_body"));
        this.OMService.signup(obj).subscribe(function (data) {
            console.log(data["message"]);
            if (data["message"] == "saved") {
                localStorage.setItem('userID', data["userID"]);
                localStorage.setItem('loginStatus', "true");
                alert("Welcome to Office Munchies!");
                _this.router.navigate(['/order']);
            }
        });
    };
    PreviewComponent.ctorParameters = function () { return [
        { type: _app_munchies_service__WEBPACK_IMPORTED_MODULE_3__["MunchiesService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    PreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-preview',
            template: _raw_loader_preview_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_preview_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_app_munchies_service__WEBPACK_IMPORTED_MODULE_3__["MunchiesService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], PreviewComponent);
    return PreviewComponent;
}());



/***/ }),

/***/ "qNrX":
/*!***********************************************************!*\
  !*** ./src/app/order-success/order-success.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".checkmark__circle {\r\n    stroke-dasharray: 166;\r\n    stroke-dashoffset: 166;\r\n    stroke-width: 2;\r\n    stroke-miterlimit: 10;\r\n    stroke: #7ac142;\r\n    fill: none;\r\n    -webkit-animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;\r\n            animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;\r\n}\r\n\r\n.checkmark {\r\n    width: 56px;\r\n    height: 56px;\r\n    border-radius: 50%;\r\n    display: block;\r\n    stroke-width: 2;\r\n    stroke: #fff;\r\n    stroke-miterlimit: 10;\r\n    margin: 10% auto;\r\n    box-shadow: inset 0px 0px 0px #7ac142;\r\n    -webkit-animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;\r\n            animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;\r\n}\r\n\r\n.checkmark__check {\r\n    transform-origin: 50% 50%;\r\n    stroke-dasharray: 48;\r\n    stroke-dashoffset: 48;\r\n    -webkit-animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;\r\n            animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;\r\n}\r\n\r\n@-webkit-keyframes stroke {\r\n    100% {\r\n        stroke-dashoffset: 0;\r\n    }\r\n}\r\n\r\n@keyframes stroke {\r\n    100% {\r\n        stroke-dashoffset: 0;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes scale {\r\n    0%,\r\n    100% {\r\n        transform: none;\r\n    }\r\n    50% {\r\n        transform: scale3d(1.1, 1.1, 1);\r\n    }\r\n}\r\n\r\n@keyframes scale {\r\n    0%,\r\n    100% {\r\n        transform: none;\r\n    }\r\n    50% {\r\n        transform: scale3d(1.1, 1.1, 1);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes fill {\r\n    100% {\r\n        box-shadow: inset 0px 0px 0px 30px #7ac142;\r\n    }\r\n}\r\n\r\n@keyframes fill {\r\n    100% {\r\n        box-shadow: inset 0px 0px 0px 30px #7ac142;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLXN1Y2Nlc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsVUFBVTtJQUNWLHNFQUE4RDtZQUE5RCw4REFBOEQ7QUFDbEU7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZUFBZTtJQUNmLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLHFDQUFxQztJQUNyQyxvRkFBNEU7WUFBNUUsNEVBQTRFO0FBQ2hGOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsMkVBQW1FO1lBQW5FLG1FQUFtRTtBQUN2RTs7QUFFQTtJQUNJO1FBQ0ksb0JBQW9CO0lBQ3hCO0FBQ0o7O0FBSkE7SUFDSTtRQUNJLG9CQUFvQjtJQUN4QjtBQUNKOztBQUVBO0lBQ0k7O1FBRUksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksK0JBQStCO0lBQ25DO0FBQ0o7O0FBUkE7SUFDSTs7UUFFSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSwrQkFBK0I7SUFDbkM7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksMENBQTBDO0lBQzlDO0FBQ0o7O0FBSkE7SUFDSTtRQUNJLDBDQUEwQztJQUM5QztBQUNKIiwiZmlsZSI6Im9yZGVyLXN1Y2Nlc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGVja21hcmtfX2NpcmNsZSB7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxNjY7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMTY2O1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAyO1xyXG4gICAgc3Ryb2tlLW1pdGVybGltaXQ6IDEwO1xyXG4gICAgc3Ryb2tlOiAjN2FjMTQyO1xyXG4gICAgZmlsbDogbm9uZTtcclxuICAgIGFuaW1hdGlvbjogc3Ryb2tlIDAuNnMgY3ViaWMtYmV6aWVyKDAuNjUsIDAsIDAuNDUsIDEpIGZvcndhcmRzO1xyXG59XHJcblxyXG4uY2hlY2ttYXJrIHtcclxuICAgIHdpZHRoOiA1NnB4O1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBzdHJva2Utd2lkdGg6IDI7XHJcbiAgICBzdHJva2U6ICNmZmY7XHJcbiAgICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7XHJcbiAgICBtYXJnaW46IDEwJSBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggIzdhYzE0MjtcclxuICAgIGFuaW1hdGlvbjogZmlsbCAuNHMgZWFzZS1pbi1vdXQgLjRzIGZvcndhcmRzLCBzY2FsZSAuM3MgZWFzZS1pbi1vdXQgLjlzIGJvdGg7XHJcbn1cclxuXHJcbi5jaGVja21hcmtfX2NoZWNrIHtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiA0ODtcclxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiA0ODtcclxuICAgIGFuaW1hdGlvbjogc3Ryb2tlIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjUsIDAsIDAuNDUsIDEpIDAuOHMgZm9yd2FyZHM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3Ryb2tlIHtcclxuICAgIDEwMCUge1xyXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNjYWxlIHtcclxuICAgIDAlLFxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZpbGwge1xyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggMzBweCAjN2FjMTQyO1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "rd1V":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _raw_loader_signup_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./signup.component.html */ "zwQV");
/* harmony import */ var _signup_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.component.scss */ "tZ3g");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_munchies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/munchies.service */ "aHcC");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupComponent = /** @class */ (function () {
    function SignupComponent(OMService, http, router) {
        this.OMService = OMService;
        this.http = http;
        this.router = router;
        this.test = new Date();
        this.id = "";
        this.dp = "";
        this.name = "";
        this.email = "";
        this.phone_number = "";
        this.password = "";
        this.organization_name = "";
        this.employee_no = "";
        this.male = false;
        this.female = false;
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent.prototype.onFileChanged = function (event) {
        var _this = this;
        this.selectedFile = event.target.files[0];
        console.log("DP");
        var uploadData = new FormData();
        uploadData.append('image', this.selectedFile, this.selectedFile.name);
        this.http.post('http://localhost:8000/api/v1/users/upload_photo', uploadData)
            .subscribe(function (data) {
            console.log(data["url"]);
            _this.dp = data["url"];
            alert("DP saved");
        });
    };
    SignupComponent.prototype.onFileChanged2 = function (event) {
        var _this = this;
        this.selectedFile = event.target.files[0];
        console.log("ID");
        var uploadData = new FormData();
        uploadData.append('image', this.selectedFile, this.selectedFile.name);
        this.http.post('http://localhost:8000/api/v1/users/upload_photo', uploadData)
            .subscribe(function (data) {
            console.log(data["url"]);
            _this.id = data["url"];
            alert("ID saved");
        });
    };
    SignupComponent.prototype.male_radio = function () {
        this.male = !this.male;
        if (this.male)
            this.female = false;
        console.log("Male" + this.male);
        console.log("Female" + this.female);
    };
    SignupComponent.prototype.female_radio = function () {
        this.female = !this.female;
        if (this.female)
            this.male = false;
        console.log("Female" + this.female);
        console.log("Male" + this.male);
    };
    SignupComponent.prototype.sign_up = function () {
        if (this.id == "") {
            alert("Please upload ID");
        }
        else if (this.dp == "") {
            alert("Please upload DP");
        }
        else if (this.name == "") {
            alert("Please enter you name ");
        }
        else if (this.email == "") {
            alert("Please enter email");
        }
        else if (false) {}
        else if (this.password == "") {
            alert("Please enter password");
        }
        else if (this.password.length <= 5) {
            alert("Password cannot be less that 5 characters");
        }
        else if (this.phone_number.length != 10) {
            alert("Phone number can have only 10 characters");
        }
        else if (this.phone_number == "") {
            alert("Please enter phone number");
        }
        else if (this.organization_name == "") {
            alert("Please enter organization name");
        }
        else if (this.employee_no == "") {
            alert("Please enter employee number");
        }
        else {
            //save everything to localstorage and move to next component
            var gender = "";
            if (this.male)
                gender = "Male";
            else
                gender = "Female";
            var body = {
                "full_name": this.name,
                "email": this.email,
                "phone_no": this.phone_number,
                "password": this.password,
                "emp_no": this.employee_no,
                "organization_name": this.organization_name,
                "office_id": this.id,
                "profile_picture": this.dp,
                "gender": gender
            };
            localStorage.setItem("signup_body", JSON.stringify(body));
            this.router.navigate(['/preview']);
        }
    };
    SignupComponent.ctorParameters = function () { return [
        { type: _app_munchies_service__WEBPACK_IMPORTED_MODULE_3__["MunchiesService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-signup',
            template: _raw_loader_signup_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_signup_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_app_munchies_service__WEBPACK_IMPORTED_MODULE_3__["MunchiesService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "tALr":
/*!************************************************************************!*\
  !*** ./src/app/sections/angular-section/angular-section.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbmd1bGFyLXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "tZ3g":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "uBHN":
/*!******************************************!*\
  !*** ./src/app/order/order.component.ts ***!
  \******************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var _raw_loader_order_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./order.component.html */ "O9K4");
/* harmony import */ var _order_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order.component.css */ "cKxa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_munchies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/munchies.service */ "aHcC");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderComponent = /** @class */ (function () {
    function OrderComponent(OMService, http, router) {
        this.OMService = OMService;
        this.http = http;
        this.router = router;
        this.cart_value = 0;
        this.quantity = [];
        this.fetch_foods();
    }
    OrderComponent.prototype.ngOnInit = function () {
    };
    OrderComponent.prototype.fetch_foods = function () {
        var _this = this;
        this.OMService.fetch_menu().subscribe(function (data) {
            console.log(data);
            _this.items = data;
            for (var x in _this.items) {
                _this.quantity[x] = 1;
            }
        });
    };
    OrderComponent.prototype.add = function (index) {
        console.log(index);
        this.items[index].cartStatus = true;
        this.items[index].quantity = this.quantity[index];
        console.log(this.items[index]);
        this.cart_value += this.items[index].item_price * parseInt(this.quantity[index]);
    };
    OrderComponent.prototype.remove = function (index) {
        console.log(index);
        this.items[index].cartStatus = false;
        console.log(this.items[index]);
        this.cart_value -= this.items[index].item_price * parseInt(this.quantity[index]);
        this.quantity[index] = 1;
    };
    OrderComponent.prototype.checkout = function () {
        var cart = [];
        for (var x in this.items) {
            if (this.items[x].cartStatus) {
                cart.push(this.items[x]);
            }
        }
        var obj = {
            "order": cart,
            "total": this.cart_value
        };
        console.log(obj);
        localStorage.setItem("cart", JSON.stringify(obj));
        this.router.navigate(['/checkout']);
    };
    OrderComponent.ctorParameters = function () { return [
        { type: _app_munchies_service__WEBPACK_IMPORTED_MODULE_3__["MunchiesService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    OrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-order',
            template: _raw_loader_order_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_order_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_app_munchies_service__WEBPACK_IMPORTED_MODULE_3__["MunchiesService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./login.component.html */ "in5m");
/* harmony import */ var _login_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.css */ "n7sk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_munchies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/munchies.service */ "aHcC");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(OMService, http, router) {
        this.OMService = OMService;
        this.http = http;
        this.router = router;
        this.email = "";
        this.password = "";
        this.onLoginChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log(this.email);
        this.OMService.loginUser(this.email, this.password).subscribe(function (data) {
            console.log(data["login"]);
            if (data["login"]) {
                localStorage.setItem('userID', data["_id"]);
                localStorage.setItem('loginStatus', "true");
                _this.onLoginChanged.emit(true);
                _this.router.navigate(['/order']);
            }
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _app_munchies_service__WEBPACK_IMPORTED_MODULE_3__["MunchiesService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    LoginComponent.propDecorators = {
        onLoginChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_app_munchies_service__WEBPACK_IMPORTED_MODULE_3__["MunchiesService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "xwfu":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar (onLoginChanged)=\"doSomething()\" ></app-navbar>\n\n<main class=\"profile-page\">\n\n  <section class=\"section-profile-cover section-shaped my-0\">\n    <!-- Circles background -->\n    <div class=\"shape shape-style-6 shape-primary alpha-4\">\n      <span></span>\n      <span></span>\n    </div>\n    <!-- SVG separator -->\n    <div class=\"separator separator-bottom separator-skew\">\n      <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n        <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n      </svg>\n    </div>\n  </section>\n\n  <section class=\"section\">\n    <div class=\"container\">\n      <div class=\"card card-profile shadow mt--300\">\n        <div class=\"px-4\">\n          <div class=\"row justify-content-center\">\n            <div class=\"col-lg-3 order-lg-2\">\n              <div class=\"card-profile-image\">\n                <a href=\"javascript:void(0)\">\n                  <img [src]=\"profile_picture\" class=\"rounded-circle\">\n\n                  <br>\n                </a>\n              </div>\n            </div>\n\n            \n            <div class=\"col-lg-4 order-lg-3 text-lg-right align-self-lg-center\">\n              <div class=\"card-profile-actions py-4 mt-lg-0\">\n               \n              </div>\n            </div>\n            <div class=\"col-lg-4 order-lg-1\">\n              <div class=\"card-profile-stats d-flex justify-content-center\">\n                <div>\n                  <span class=\"heading\">{{member_since | date}}</span>\n                  <span class=\"description\">Member Since</span>\n                </div>\n              \n              </div>\n            </div>\n          </div>\n\n            <br>\n  <br>\n  \n          <div class=\"text-center mt-5\">\n            <h3>{{name}}\n              \n            </h3>\n            <div><i class=\"ni location_pin mr-2\"></i> Phone Number : {{phone_no}}</div>\n            <div><i class=\"ni business_briefcase-24 mr-2\"></i>Email : {{email}}</div>\n            <div><i class=\"ni education_hat mr-2\"></i>Gender : {{gender}}</div>\n            <div><i class=\"ni education_hat mr-2\"></i>Works at {{organization_name}}</div>\n<br>\n        <button class=\"btn btn-1 btn-primary\" type=\"button\" (click)=\"openID()\">ID Card</button>\n<br>\n<br>\n\n          </div>\n    \n        </div>\n      </div>\n    </div>\n  </section>\n</main>\n");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "z2zG":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/navigation-section/navigation-section.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"\">\n  <div class=\"container\">\n    <!-- Navigation -->\n    <h2 class=\"mb-5\">\n      <span>Navbars</span>\n    </h2>\n  </div>\n  <!-- Navbar default -->\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-default\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Default Color</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-default\" aria-controls=\"navbar-default\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbar-default\">\n        <div class=\"navbar-collapse-header\">\n          <div class=\"row\">\n            <div class=\"col-6 collapse-brand\">\n              <a href=\"javascript:void(0)\">\n                <img src=\"./assets/img/brand/blue.png\">\n              </a>\n            </div>\n            <div class=\"col-6 collapse-close\">\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-default\" aria-controls=\"navbar-default\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span></span>\n                <span></span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <ul class=\"navbar-nav ml-lg-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n              <i class=\"ni ni-favourite-28\"></i>\n              <span class=\"nav-link-inner--text d-lg-none\">Discover</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n              <i class=\"ni ni-notification-70\"></i>\n              <span class=\"nav-link-inner--text d-lg-none\">Profile</span>\n            </a>\n          </li>\n          <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n            <a class=\"nav-link nav-link-icon no-caret\" id=\"navbar-default_dropdown_1\" ngbDropdownToggle>\n              <i class=\"ni ni-settings-gear-65\"></i>\n              <span class=\"nav-link-inner--text d-lg-none\">Settings</span>\n            </a>\n            <div class=\"dropdown-menu-right\" aria-labelledby=\"navbar-default_dropdown_1\" ngbDropdownMenu>\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <!-- Navbar primary -->\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary mt-4\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Primary Color</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-primary\" aria-controls=\"navbar-primary\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbar-primary\">\n        <div class=\"navbar-collapse-header\">\n          <div class=\"row\">\n            <div class=\"col-6 collapse-brand\">\n              <a href=\"javascript:void(0)\">\n                <img src=\"./assets/img/brand/blue.png\">\n              </a>\n            </div>\n            <div class=\"col-6 collapse-close\">\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-primary\" aria-controls=\"navbar-primary\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span></span>\n                <span></span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <ul class=\"navbar-nav ml-lg-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"javascript:void(0)\">Discover\n              <span class=\"sr-only\">(current)</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"javascript:void(0)\">Profile</a>\n          </li>\n          <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n            <a class=\"nav-link no-caret\" id=\"navbar-primary_dropdown_1\" ngbDropdownToggle>Settings</a>\n            <div class=\"dropdown-menu-right\" aria-labelledby=\"navbar-primary_dropdown_1\" ngbDropdownMenu>\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <!-- Navbar success -->\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-success mt-4\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Success Color</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-success\" aria-controls=\"navbar-success\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbar-success\">\n        <div class=\"navbar-collapse-header\">\n          <div class=\"row\">\n            <div class=\"col-6 collapse-brand\">\n              <a href=\"javascript:void(0)\">\n                <img src=\"./assets/img/brand/blue.png\">\n              </a>\n            </div>\n            <div class=\"col-6 collapse-close\">\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-success\" aria-controls=\"navbar-success\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span></span>\n                <span></span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <ul class=\"navbar-nav ml-lg-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n              <i class=\"ni ni-favourite-28\"></i>\n              <span class=\"nav-link-inner--text d-lg-none\">Favorites</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n              <i class=\"ni ni-planet\"></i>\n              <span class=\"nav-link-inner--text d-lg-none\">Another action</span>\n            </a>\n          </li>\n          <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n            <a class=\"nav-link nav-link-icon no-caret\" id=\"navbar-success_dropdown_1\" ngbDropdownToggle>\n              <i class=\"ni ni-settings-gear-65\"></i>\n              <span class=\"nav-link-inner--text d-lg-none\">Settings</span>\n            </a>\n            <div class=\"dropdown-menu-right\" aria-labelledby=\"navbar-success_dropdown_1\" ngbDropdownMenu>\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <!-- Navbar danger -->\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-danger mt-4\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Danger Color</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-danger\" aria-controls=\"navbar-danger\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbar-danger\">\n        <div class=\"navbar-collapse-header\">\n          <div class=\"row\">\n            <div class=\"col-6 collapse-brand\">\n              <a href=\"javascript:void(0)\">\n                <img src=\"./assets/img/brand/blue.png\">\n              </a>\n            </div>\n            <div class=\"col-6 collapse-close\">\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-danger\" aria-controls=\"navbar-danger\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span></span>\n                <span></span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n              <i class=\"fa fa-facebook-square\"></i>\n              <span class=\"nav-link-inner--text d-lg-none\">Facebook</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n              <i class=\"fa fa-twitter\"></i>\n              <span class=\"nav-link-inner--text d-lg-none\">Twitter</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n              <i class=\"fa fa-google-plus\"></i>\n              <span class=\"nav-link-inner--text d-lg-none\">Google +</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n              <i class=\"fa fa-instagram\"></i>\n              <span class=\"nav-link-inner--text d-lg-none\">Instagram</span>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <!-- Navbar warning -->\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-warning mt-4\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Warning Color</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-warning\" aria-controls=\"navbar-warning\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbar-warning\">\n        <div class=\"navbar-collapse-header\">\n          <div class=\"row\">\n            <div class=\"col-6 collapse-brand\">\n              <a href=\"javascript:void(0)\">\n                <img src=\"./assets/img/brand/blue.png\">\n              </a>\n            </div>\n            <div class=\"col-6 collapse-close\">\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-warning\" aria-controls=\"navbar-warning\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span></span>\n                <span></span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <ul class=\"navbar-nav align-items-lg-center ml-lg-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n              <i class=\"fa fa-facebook-square\"></i>\n              <span class=\"nav-link-inner--text d-lg-none\">Share</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n              <i class=\"fa fa-twitter\"></i>\n              <span class=\"nav-link-inner--text d-lg-none\">Tweet</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n              <i class=\"fa fa-pinterest\"></i>\n              <span class=\"nav-link-inner--text d-lg-none\">Pin</span>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <!-- Navbar info -->\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-info mt-4\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Info Color</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-info\" aria-controls=\"navbar-info\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbar-info\">\n        <div class=\"navbar-collapse-header\">\n          <div class=\"row\">\n            <div class=\"col-6 collapse-brand\">\n              <a href=\"javascript:void(0)\">\n                <img src=\"./assets/img/brand/blue.png\">\n              </a>\n            </div>\n            <div class=\"col-6 collapse-close\">\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-info\" aria-controls=\"navbar-info\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span></span>\n                <span></span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n              <i class=\"fa fa-facebook-square\"></i>\n              <span class=\"nav-link-inner--text\">Facebook</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n              <i class=\"fa fa-twitter\"></i>\n              <span class=\"nav-link-inner--text\">Twitter</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n              <i class=\"fa fa-instagram\"></i>\n              <span class=\"nav-link-inner--text\">Instagram</span>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</section>\n");

/***/ }),

/***/ "zRkE":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav id=\"navbar-main\" class=\"navbar navbar-main navbar-expand-lg navbar-transparent navbar-light headroom headroom--top headroom--pinned\">\n  <div class=\"container\">\n    <a class=\"navbar-brand mr-lg-5\" [routerLink]=\"['/home']\">\n      <img src=\"./assets/img/brand/argon-white.png\">\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed = !isCollapsed\"\n          [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbar_global\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"navbar-collapse collapse\" id=\"navbar_global\" [ngbCollapse]=\"isCollapsed\">\n      <div class=\"navbar-collapse-header\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\">\n            <a [routerLink]=\"['/home']\">\n              <img src=\"./assets/img/brand/blue.png\">\n            </a>\n          </div>\n          <div class=\"col-6 collapse-close\">\n            <button type=\"button\" class=\"navbar-toggler\" (click)=\"isCollapsed = !isCollapsed\"\n                  [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbar_global\">\n              <span></span>\n              <span></span>\n            </button>\n          </div>\n        </div>\n      </div>\n      <ul class=\"navbar-nav navbar-nav-hover align-items-lg-center\">\n        <li class=\"nav-item dropdown\">\n <button class=\"btn btn-1 btn-neutral\" type=\"button\" routerLink = \"/landing\">Home</button>\n\n    \n        </li>\n        <li class=\"nav-item dropdown\" *ngIf=\"showGuest\">\n        <button class=\"btn btn-1 btn-neutral\" type=\"button\" routerLink = \"/login\">Login</button>\n        </li>\n\n          <li class=\"nav-item dropdown\" *ngIf=\"showGuest\">\n         <button class=\"btn btn-1 btn-neutral\" type=\"button\" routerLink = \"/register\">Signup</button>\n        </li>\n\n\n\n          <li class=\"nav-item dropdown\" *ngIf=\"showUser\">\n         <button class=\"btn btn-1 btn-neutral\" type=\"button\" routerLink = \"/order\">Order Now</button>\n        </li>\n\n        <li class=\"nav-item dropdown\" *ngIf=\"showUser\">\n         <button class=\"btn btn-1 btn-neutral\" type=\"button\" routerLink = \"/user-profile\">Profile</button>\n        </li>\n\n          <li class=\"nav-item dropdown\" *ngIf=\"showUser\">\n         <button class=\"btn btn-1 btn-neutral\" type=\"button\" (click)=\"signout()\">Signout</button>\n        </li>\n\n      </ul>\n      <ul class=\"navbar-nav align-items-lg-center ml-lg-auto\">\n    \n        <li class=\"nav-item d-none d-lg-block ml-lg-4\">\n\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/*!

=========================================================
* Argon Design System Angular - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-angular
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-angular/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "zwQV":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <app-navbar (onLoginChanged)=\"doSomething()\" ></app-navbar>\n\n<main>\n  <section class=\"section section-shaped section-lg\">\n    <div class=\"shape shape-style-1 bg-gradient-default\">\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n    </div>\n    <div class=\"container pt-lg-md\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-5\">\n          <div class=\"card bg-secondary shadow border-0\">\n           \n      \n            <div class=\"card-body px-lg-5 py-lg-5\">\n              <div class=\"text-center text-muted mb-4\">\n                <h3>Sign Up</h3>\n              </div>\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus===true}\">\n                  <div class=\"input-group input-group-alternative mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"ni ni-hat-3\"></i></span>\n                    </div>\n                    <input class=\"form-control\" placeholder=\"Full Name\" [(ngModel)]=\"name\" type=\"text\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n                  </div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\n                  <div class=\"input-group input-group-alternative mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                    </div>\n                    <input class=\"form-control\" placeholder=\"Email\" type=\"email\" [(ngModel)]=\"email\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n                  </div>\n                </div>\n\n                   <div class=\"form-group\" [ngClass]=\"{'focused':focus2===true}\">\n                  <div class=\"input-group input-group-alternative\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                    </div>\n                    <input class=\"form-control\" placeholder=\"Phone Number\" type=\"text\" [(ngModel)]=\"phone_number\" (focus)=\"focus2=true\" (blur)=\"focus2=false\">\n                  </div>\n                </div>\n\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus2===true}\">\n                  <div class=\"input-group input-group-alternative\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                    </div>\n                    <input class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"password\" type=\"password\" (focus)=\"focus2=true\" (blur)=\"focus2=false\">\n                  </div>\n                </div>\n\n                       <div class=\"form-group\" [ngClass]=\"{'focused':focus2===true}\">\n                  <div class=\"input-group input-group-alternative\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                    </div>\n                    <input class=\"form-control\" placeholder=\"Organization Name\" [(ngModel)]=\"organization_name\" type=\"text\" (focus)=\"focus2=true\" (blur)=\"focus2=false\">\n                  </div>\n                </div>\n             \n                   <div class=\"form-group\" [ngClass]=\"{'focused':focus2===true}\">\n                  <div class=\"input-group input-group-alternative\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                    </div>\n                    <input class=\"form-control\" placeholder=\"Employee Number\" [(ngModel)]=\"employee_no\" type=\"text\" (focus)=\"focus2=true\" (blur)=\"focus2=false\">\n                  </div>\n                </div>\n\n               \n                    <small>Please choose your Gender </small>\n          <div class=\"custom-control custom-radio mb-3\">\n          <input  (change)= \"male_radio()\" name=\"custom-radio-1\" class=\"custom-control-input\" id=\"customRadio1\" type=\"radio\">\n          <label class=\"custom-control-label\" for=\"customRadio1\">\n            <span>Male</span>\n          </label>\n        </div>\n        <div class=\"custom-control custom-radio mb-3\">\n          <input (change)= \"female_radio()\" name=\"custom-radio-1\" class=\"custom-control-input\" id=\"customRadio2\" checked type=\"radio\">\n          <label class=\"custom-control-label\" for=\"customRadio2\">\n            <span>Female</span>\n          </label>\n        </div>\n\n          <div>\n          <input\n  style=\"display: none\"\n  type=\"file\" (change)=\"onFileChanged($event)\"\n  #fileInput>\n<button class=\"btn btn-1 btn-neutral\" (click)=\"fileInput.click()\">Upload DP</button>\n\n  <input\n  style=\"display: none\"\n  type=\"file\" (change)=\"onFileChanged2($event)\"\n  #fileInput2>\n\n          <button class=\"btn btn-1 btn-neutral\" type=\"button\" (click)=\"fileInput2.click()\">Upload Office ID</button>\n          </div>\n\n                <div class=\"text-center\">\n                  <button type=\"button\" class=\"btn btn-primary mt-4\" (click)=\"sign_up()\">Create account</button>\n                  <br> <br>\n                  <small>Already have an account? <a routerLink = \"/login\" >Log In </a> </small>\n                </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</main>\n");

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map