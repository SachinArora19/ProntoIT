(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n    display: block;\r\n    padding: 2%;\r\n    font-size: 2em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center;background-image: url('assets/BG.svg');background-repeat: no-repeat;\">\n  <div class=\"container-fluid\">\n    <div class=\"row header\">\n      <h2 style=\"color:white\">Pronto IT Labs<h5>Assignment by Sachin Arora</h5></h2>\n    </div>\n  </div>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.Menus = [
            {
                "menuName": "Home",
                "menuUrl": "home",
            },
            {
                "menuName": "View",
                "menuUrl": "view",
            },
            {
                "menuName": "Create",
                "menuUrl": "create",
            }
        ];
        this.hightlightStatus = [];
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _feature_filestack_filestack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feature/filestack/filestack */ "./src/app/feature/filestack/filestack.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _doc_view_doc_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./doc-view/doc-view.component */ "./src/app/doc-view/doc-view.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _data_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./data-service.service */ "./src/app/data-service.service.ts");
/* harmony import */ var _providers_services_app_config_services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../providers/services/app-config.services */ "./src/providers/services/app-config.services.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _password_validate_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./password-validate.directive */ "./src/app/password-validate.directive.ts");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm5/ngx-webstorage.js");
/* harmony import */ var angular_google_recaptcha__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-google-recaptcha */ "./node_modules/angular-google-recaptcha/angular-google-recaptcha.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _feature_filestack_filestack__WEBPACK_IMPORTED_MODULE_4__["FileStackComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _doc_view_doc_view_component__WEBPACK_IMPORTED_MODULE_8__["DocViewComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"],
                _password_validate_directive__WEBPACK_IMPORTED_MODULE_14__["PasswordValidateDirective"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_17__["NgxPaginationModule"],
                ngx_webstorage__WEBPACK_IMPORTED_MODULE_15__["NgxWebstorageModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot([
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'view', component: _doc_view_doc_view_component__WEBPACK_IMPORTED_MODULE_8__["DocViewComponent"] },
                    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"] }
                ]),
                angular_google_recaptcha__WEBPACK_IMPORTED_MODULE_16__["RecaptchaModule"].forRoot({
                    siteKey: '6LcXPosUAAAAAKmJT2PvQJ5e2wFerii83ETEfkev',
                }),
            ],
            providers: [_data_service_service__WEBPACK_IMPORTED_MODULE_11__["DataServiceService"], _providers_services_app_config_services__WEBPACK_IMPORTED_MODULE_12__["AppConfigService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/data-service.service.ts ***!
  \*****************************************/
/*! exports provided: DataServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataServiceService", function() { return DataServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm5/ngx-webstorage.js");




var DataServiceService = /** @class */ (function () {
    function DataServiceService(_http, localSt) {
        this._http = _http;
        this.localSt = localSt;
    }
    DataServiceService.prototype.userDataView = function () {
        return this.allUserData;
    };
    DataServiceService.prototype.getuNameUsers = function () {
        var newUsers = [];
        for (var key in localStorage) {
            if (key != 'length') {
                newUsers.push(key.substr(15));
            }
            else {
                break;
            }
        }
        return newUsers;
    };
    DataServiceService.prototype.RegUser = function (Reg) {
        this.localSt.store(Reg.regUserId, Reg);
    };
    DataServiceService.prototype.LoginUser = function (Login) {
        this.allUserData = [];
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            this.allUserData.push(JSON.parse(value));
        }
        this.userData = this.localSt.retrieve(Login.loginUserId);
        return this.userData;
    };
    DataServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]])
    ], DataServiceService);
    return DataServiceService;
}());



/***/ }),

/***/ "./src/app/doc-view/doc-view.component.css":
/*!*************************************************!*\
  !*** ./src/app/doc-view/doc-view.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader {\r\n    border: 16px solid #f3f3f3;\r\n    border-radius: 50%;\r\n    border-top: 16px solid #3498db;\r\n    width: 120px;\r\n    height: 120px;\r\n    -webkit-animation: spin 2s linear infinite; /* Safari */\r\n    animation: spin 2s linear infinite;\r\n    margin-left:30%;\r\n    margin-top: 5%;\r\n  }\r\n  \r\n  /* Safari */\r\n  \r\n  @-webkit-keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); }\r\n  }\r\n  \r\n  @keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jLXZpZXcvZG9jLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixhQUFhO0lBQ2IsMENBQTBDLEVBQUUsV0FBVztJQUN2RCxrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLGNBQWM7RUFDaEI7O0VBRUEsV0FBVzs7RUFDWDtJQUNFLEtBQUssK0JBQStCLEVBQUU7SUFDdEMsT0FBTyxpQ0FBaUMsRUFBRTtFQUM1Qzs7RUFFQTtJQUNFLEtBQUssK0JBQXVCLEVBQXZCLHVCQUF1QixFQUFFO0lBQzlCLE9BQU8saUNBQXlCLEVBQXpCLHlCQUF5QixFQUFFO0VBQ3BDIiwiZmlsZSI6InNyYy9hcHAvZG9jLXZpZXcvZG9jLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkZXIge1xyXG4gICAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICMzNDk4ZGI7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlOyAvKiBTYWZhcmkgKi9cclxuICAgIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBtYXJnaW4tbGVmdDozMCU7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICB9XHJcbiAgXHJcbiAgLyogU2FmYXJpICovXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/doc-view/doc-view.component.html":
/*!**************************************************!*\
  !*** ./src/app/doc-view/doc-view.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div>\n      <div class=\"row\" *ngFor=\"let attr of docAttributes | paginate: { itemsPerPage: 1, currentPage: p }; let i = index\">\n        <div class=\"row\" *ngFor=\"let attrSub of attr | keyvalue\" style=\"border-bottom:1px solid lightgrey;padding: 2%;color: white\">\n          <label style=\"float:left;\">{{attrSub.key | slice : 3}}</label>\n          <label style=\"float:Right;\">{{attrSub.value}}</label>\n        </div> <br>\n      </div>\n      <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n    </div>\n    \n    <div *ngIf=\"docAttributes == undefined\" class=\"alert alert-success\" style=\"margin-top: 6vh\">\n      <span style=\"cursor: pointer\" (click)=\"redirect()\">Sorry no data available if you redirect. Kindly click here and go back to the homepage.</span>\n  </div>\n  </div>\n  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>\n</div>"

/***/ }),

/***/ "./src/app/doc-view/doc-view.component.ts":
/*!************************************************!*\
  !*** ./src/app/doc-view/doc-view.component.ts ***!
  \************************************************/
/*! exports provided: DocViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocViewComponent", function() { return DocViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-service.service */ "./src/app/data-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DocViewComponent = /** @class */ (function () {
    function DocViewComponent(DataService, router) {
        this.DataService = DataService;
        this.router = router;
        this.p = 1;
    }
    DocViewComponent.prototype.redirect = function () {
        this.router.navigateByUrl('/home');
    };
    DocViewComponent.prototype.ngOnInit = function () {
        this.docAttributes = this.DataService.userDataView();
    };
    DocViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-doc-view',
            template: __webpack_require__(/*! ./doc-view.component.html */ "./src/app/doc-view/doc-view.component.html"),
            styles: [__webpack_require__(/*! ./doc-view.component.css */ "./src/app/doc-view/doc-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DocViewComponent);
    return DocViewComponent;
}());



/***/ }),

/***/ "./src/app/feature/filestack/filestack.html":
/*!**************************************************!*\
  !*** ./src/app/feature/filestack/filestack.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>"

/***/ }),

/***/ "./src/app/feature/filestack/filestack.ts":
/*!************************************************!*\
  !*** ./src/app/feature/filestack/filestack.ts ***!
  \************************************************/
/*! exports provided: FileStackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileStackComponent", function() { return FileStackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_providers_services_app_config_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/services/app-config.services */ "./src/providers/services/app-config.services.ts");



var FileStackComponent = /** @class */ (function () {
    function FileStackComponent(_elementRef, _renderer, appConfigService) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this.appConfigService = appConfigService;
        this.output = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.el = _elementRef.nativeElement;
    }
    FileStackComponent.prototype.ngOnInit = function () { };
    //open filestack on click event
    FileStackComponent.prototype.onFileStackFieldClick = function (event) {
        var _this = this;
        var accept = (this.dataFormat || "").split(",");
        var maxFiles = this.el.getAttribute("data-maxfiles");
        if (this.appConfigSubscriber) {
            this.appConfigSubscriber.unsubscribe();
            this.appConfigSubscriber = null;
        }
        var filestackConfig = this.appConfigService.getFilestackConfig().key;
        var fileStackClient = filestack.init(filestackConfig, { policy: 'policy', signature: 'signature' });
        fileStackClient.pick({
            accept: accept,
            maxFiles: parseInt(maxFiles),
            /*fromSources: 'local_file_system',*/
            /*storeTo: {
            location: 's3',
            // s3 configuration
            },*/
            onFileSelected: function (file) {
                return file;
            }
        })
            .then(function (result) {
            if (result.filesFailed.length > 0) {
                _this.output.emit({
                    success: false,
                    data: result.filesFailed
                });
            }
            else {
                result.filesUploaded = result.filesUploaded || [];
                _this.output.emit({
                    success: true,
                    data: result.filesUploaded
                });
            }
        });
    };
    FileStackComponent.prototype.ngOnDestroy = function () {
        if (this.appConfigSubscriber) {
            this.appConfigSubscriber.unsubscribe();
            this.appConfigSubscriber = null;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("data-accept"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileStackComponent.prototype, "dataFormat", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("complete"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FileStackComponent.prototype, "output", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click", ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], FileStackComponent.prototype, "onFileStackFieldClick", null);
    FileStackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "file-stack",
            template: __webpack_require__(/*! ./filestack.html */ "./src/app/feature/filestack/filestack.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"],
            src_providers_services_app_config_services__WEBPACK_IMPORTED_MODULE_2__["AppConfigService"]])
    ], FileStackComponent);
    return FileStackComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required {\r\n    border-left:5px solid green;\r\n    border-top:5px solid lightslategray;\r\n    border-bottom:5px solid lightslategray;\r\n    border-right:5px solid lightslategray;\r\n}\r\n.ng-invalid:not(form) {\r\n    border-left:5px solid red;\r\n    border-top:5px solid lightslategray;\r\n    border-bottom:5px solid lightslategray;\r\n    border-right:5px solid lightslategray;\r\n}\r\n.GenderRdl{\r\n    border-left:5px solid red;\r\n    border-top:5px solid lightslategray;\r\n    border-bottom:5px solid lightslategray;\r\n    border-right:5px solid lightslategray;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsbUNBQW1DO0lBQ25DLHNDQUFzQztJQUN0QyxxQ0FBcUM7QUFDekM7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixtQ0FBbUM7SUFDbkMsc0NBQXNDO0lBQ3RDLHFDQUFxQztBQUN6QztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLG1DQUFtQztJQUNuQyxzQ0FBc0M7SUFDdEMscUNBQXFDO0FBQ3pDIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmctdmFsaWRbcmVxdWlyZWRdLCAubmctdmFsaWQucmVxdWlyZWQge1xyXG4gICAgYm9yZGVyLWxlZnQ6NXB4IHNvbGlkIGdyZWVuO1xyXG4gICAgYm9yZGVyLXRvcDo1cHggc29saWQgbGlnaHRzbGF0ZWdyYXk7XHJcbiAgICBib3JkZXItYm90dG9tOjVweCBzb2xpZCBsaWdodHNsYXRlZ3JheTtcclxuICAgIGJvcmRlci1yaWdodDo1cHggc29saWQgbGlnaHRzbGF0ZWdyYXk7XHJcbn1cclxuLm5nLWludmFsaWQ6bm90KGZvcm0pIHtcclxuICAgIGJvcmRlci1sZWZ0OjVweCBzb2xpZCByZWQ7XHJcbiAgICBib3JkZXItdG9wOjVweCBzb2xpZCBsaWdodHNsYXRlZ3JheTtcclxuICAgIGJvcmRlci1ib3R0b206NXB4IHNvbGlkIGxpZ2h0c2xhdGVncmF5O1xyXG4gICAgYm9yZGVyLXJpZ2h0OjVweCBzb2xpZCBsaWdodHNsYXRlZ3JheTtcclxufVxyXG4uR2VuZGVyUmRse1xyXG4gICAgYm9yZGVyLWxlZnQ6NXB4IHNvbGlkIHJlZDtcclxuICAgIGJvcmRlci10b3A6NXB4IHNvbGlkIGxpZ2h0c2xhdGVncmF5O1xyXG4gICAgYm9yZGVyLWJvdHRvbTo1cHggc29saWQgbGlnaHRzbGF0ZWdyYXk7XHJcbiAgICBib3JkZXItcmlnaHQ6NXB4IHNvbGlkIGxpZ2h0c2xhdGVncmF5O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-6\" style=\"padding:0%;height: 80vh\">\n            <div style=\"color: darkgrey;padding-left:0%;background-color: whitesmoke;min-height: 70vh;\">\n                <form #loginForm=\"ngForm\" (ngSubmit)=\"logUser(loginForm)\" style=\"padding-top:5vh\">\n                    <label style=\"font-family:inherit;font-size:x-large\">Sign In</label><br>\n                    <input type=\"text\" minlength=\"5\" placeholder=\"Enter Your Username here\" style=\"width:30vw; height: 10vh;border-radius: 50px;\"\n                        name=\"loginUserId\" [(ngModel)]=\"loginUserId\" #loginUserValidation=\"ngModel\" (input)=\"inputChanged(loginUserValidation.value,'Login')\" required><br>\n                    <div [hidden]=\"(loginUserValidation.valid || loginUserValidation.pristine) && uNameLoginexist==true\" class=\"alert alert-danger\">\n                        Username is required (min. 5 characters) or Username doesn't exist.\n                    </div><br>\n                    <input type=\"password\" placeholder=\"Enter your Password here\" style=\"width:30vw; height: 10vh;border-radius: 50px;\"\n                        name=\"loginPassword\" [(ngModel)]=\"loginPassword\" #loginPassValidation=\"ngModel\" required><br>\n                    <div [hidden]=\"loginPassValidation.valid || loginPassValidation.pristine\" class=\"alert alert-danger\">\n                        Password is required\n                    </div><br>\n                    <recaptcha [(ngModel)]=\"myRecaptcha\" (scriptLoad)=\"onScriptLoad()\" (scriptError)=\"onScriptError()\" #regUserNameValidation=\"ngModel\" name=\"myRecaptcha\"></recaptcha><br>\n                    <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!loginForm.form.valid || uNameLoginexist==false\" style=\"background-image: url('assets/BG.svg');background-size: 100%;color:white;width:30vw; height: 10vh;border-radius: 50px;\"\n                        (click)=\"loginDone = true\">Click here</button>\n                </form>\n                <div *ngIf=\"loginDone == true && loginPassValid == true\" class=\"alert alert-success\" style=\"margin-top: 6vh\">\n                    <span>Now You are good to go.</span>\n                </div><br>\n                <div *ngIf=\"loginDone == true && loginPassValid != true\" class=\"alert alert-danger\" style=\"margin-top: 6vh\">\n                    <span>Password didn't match</span>\n                </div><br>\n            </div>\n        </div>\n        <div class=\"col-md-6\" style=\"padding:0%;height: 80vh\">\n            <div style=\"color: darkgray;padding-left:0%;background-color: darkblue;min-height: 70vh;max-height: 70vh;overflow-y: auto\">\n                <form #regForm=\"ngForm\" (ngSubmit)=\"registerUser(regForm)\" style=\"padding-top:5vh\">\n                    <label style=\"font-family:inherit;font-size:x-large;color: white;\">Sign Up</label><br>\n                    <!-- <input type=\"text\" placeholder=\"Enter Your Name here\" style=\"width:30vw; height: 10vh;border-radius: 50px;\"\n                        name=\"regUserName\" [(ngModel)]=\"regUserName\" #regUserNameValidation=\"ngModel\" required><br>\n                    <div [hidden]=\"regUserNameValidation.valid || regUserNameValidation.pristine\" class=\"alert alert-danger\">\n                        Name is required\n                    </div><br> -->\n                    <input type=\"text\" minlength=\"5\" placeholder=\"Enter Your Username here\" style=\"width:30vw; height: 10vh;border-radius: 50px;\"\n                        name=\"regUserId\" [(ngModel)]=\"regUserId\" #regUserIdValidation=\"ngModel\"(input)=\"inputChanged(regUserIdValidation.value,'Reg')\" required><br>\n                        <div [hidden]=\"(regUserIdValidation.valid || regUserIdValidation.pristine) && uNameRegexist==false\" class=\"alert alert-danger\">\n                        Username is required (min. 5 characters) or Username already exist. Please select the another name.\n                    </div><br>\n                    <!-- <input type=\"email\" placeholder=\"Enter Your Email here\" style=\"width:30vw; height: 10vh;border-radius: 50px;\"\n                        name=\"regUserMail\" [(ngModel)]=\"regUserMail\" #regUserMailValidation=\"ngModel\" required pattern=\"[\\w-]+@([\\w-]+\\.)+[\\w-]+\"><br>\n                    <div [hidden]=\"regUserMailValidation.valid || regUserMailValidation.pristine\" class=\"alert alert-danger\">\n                        Email is required and format should be <i>arora@sachin.com</i>\n                    </div><br> -->\n                    <input type=\"password\" appPasswordValidate=\"regConfirmPassword\" reverse=\"true\" placeholder=\"Enter your Password here\"\n                        style=\"width:30vw; height: 10vh;border-radius: 50px;\" name=\"regPassword\" [(ngModel)]=\"regPassword\"\n                        #regPassValidation=\"ngModel\" required><br>\n                    <div [hidden]=\"regPassValidation.valid || regPassValidation.pristine\" class=\"alert alert-danger\">\n                        Password is required\n                    </div><br>\n                    <input type=\"password\" appPasswordValidate=\"regPassword\" placeholder=\"Kindly enter your Password again to confirm\"\n                        style=\"width:30vw; height: 10vh;border-radius: 50px;\" name=\"regConfirmPassword\" [(ngModel)]=\"regConfirmPassword\"\n                        #regConfirmPassValidation=\"ngModel\" required><br>\n                    <div [hidden]=\"regConfirmPassValidation.valid || regConfirmPassValidation.pristine\" class=\"alert alert-danger\">\n                        Password mismatch\n                    </div>\n                    <br>\n                    <div class=\"form-group\" [class.has-error]=\"(regGenderValidation.touched && regGenderValidation.invalid)\"\n                        style=\"margin-left:5%\">\n                        <div class=\"form-control GenderRdl\" style=\"width:30vw; height: 10vh;border-radius: 50px;padding: 3%\">\n                            <span style=\"float:left\"><i>Gender: </i></span>\n                            <input type=\"radio\" [(ngModel)]=\"regGender\" required name=\"regGender\"\n                                #regGenderValidation=\"ngModel\" value=\"Male\"> Male\n                            <input type=\"radio\" [(ngModel)]=\"regGender\" required name=\"regGender\"\n                                #regGenderValidation=\"ngModel\" value=\"Female\"> Female\n                        </div>\n                    </div>\n                    <div class=\"alert alert-danger\" *ngIf=\"(regGenderValidation.touched && regGenderValidation.invalid )\">\n                        Kindly select your Gender\n                    </div>\n                    <br>\n                    <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!regForm.form.valid || uNameRegexist==true\" style=\"background-image: url('assets/BG.svg');background-size: 100%;color:white;width:30vw; height: 10vh;border-radius: 50px;\"\n                        (click)=\"regDone = true\">Register</button>\n                    <br>\n                    <br>\n                    <br>\n                </form>\n                <div *ngIf=\"regDone == true\" class=\"alert alert-success\" style=\"margin-top: 6vh\">\n                    <span>Registered Successfully</span>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-service.service */ "./src/app/data-service.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(DataService, router) {
        this.DataService = DataService;
        this.router = router;
        this.uNameArray = [];
        this.uNameLoginexist = true;
        this.uNameRegexist = false;
        this.loginPassValid = false;
    }
    HomeComponent.prototype.onScriptLoad = function () {
        console.log('Google reCAPTCHA loaded and is ready for use!');
    };
    HomeComponent.prototype.onScriptError = function () {
        console.log('Something went long when loading the Google reCAPTCHA');
    };
    HomeComponent.prototype.logUser = function (logForm) {
        var retData = this.DataService.LoginUser(logForm.value);
        if (retData.regPassword == logForm.value.loginPassword) {
            this.loginPassValid = true;
            this.loginUserData = retData;
            this.router.navigateByUrl('/view');
        }
    };
    HomeComponent.prototype.registerUser = function (regForm) {
        //let RegUserData=Object.assign(regForm.value,{"Qualification":this.Qualification.join(',')});
        console.log(regForm.value);
        this.DataService.RegUser(regForm.value);
    };
    HomeComponent.prototype.inputChanged = function (val1, val2) {
        if (val2 == 'Reg') {
            this.uNameRegexist = this.uNameArray.indexOf(val1) > -1;
        }
        else {
            this.uNameLoginexist = this.uNameArray.indexOf(val1) > -1;
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.uNameArray = this.DataService.getuNameUsers();
        console.log(this.uNameArray);
        jquery__WEBPACK_IMPORTED_MODULE_3__(".GenderRdl").click(function () {
            if (jquery__WEBPACK_IMPORTED_MODULE_3__("input:radio[name='regGender']").is(":checked")) {
                jquery__WEBPACK_IMPORTED_MODULE_3__(".GenderRdl").attr('style', 'border-left:5px solid green;border-top:5px solid lightslategray;border-bottom:5px solid lightslategray;width:30vw; height: 10vh;border-radius: 50px;padding: 3%;border-right:5px solid lightslategray;');
            }
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Error 404 : no page is available. Kindly check your address specified or go back to homepage.\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/password-validate.directive.ts":
/*!************************************************!*\
  !*** ./src/app/password-validate.directive.ts ***!
  \************************************************/
/*! exports provided: PasswordValidateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidateDirective", function() { return PasswordValidateDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var PasswordValidateDirective = /** @class */ (function () {
    function PasswordValidateDirective(appPasswordValidate, reverse) {
        this.appPasswordValidate = appPasswordValidate;
        this.reverse = reverse;
    }
    PasswordValidateDirective_1 = PasswordValidateDirective;
    Object.defineProperty(PasswordValidateDirective.prototype, "isReverse", {
        get: function () {
            if (!this.reverse)
                return false;
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    PasswordValidateDirective.prototype.validate = function (c) {
        // self value
        var v = c.value;
        // control vlaue
        var e = c.root.get(this.appPasswordValidate);
        // value not equal
        if (e && v !== e.value && !this.isReverse) {
            return {
                appPasswordValidate: false
            };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['appPasswordValidate'];
            if (!Object.keys(e.errors).length)
                e.setErrors(null);
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({ appPasswordValidate: false });
        }
        return null;
    };
    var PasswordValidateDirective_1;
    PasswordValidateDirective = PasswordValidateDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appPasswordValidate][formControlName],[appPasswordValidate][formControl],[appPasswordValidate][ngModel]',
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return PasswordValidateDirective_1; }), multi: true }
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"])('appPasswordValidate')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"])('reverse')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String, String])
    ], PasswordValidateDirective);
    return PasswordValidateDirective;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/providers/services/app-config.services.ts":
/*!*******************************************************!*\
  !*** ./src/providers/services/app-config.services.ts ***!
  \*******************************************************/
/*! exports provided: AppConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfigService", function() { return AppConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppConfigService = /** @class */ (function () {
    function AppConfigService() {
        this.filestackConfig = {
            key: 'AnjiaBwQ8QWsSZ14Pc8u9z'
        };
        this.s3Config = {
            s3Key: 'xxxxxxxxxxx',
            signatureVersion: 'xx',
            bucket: {
                customer: 'xxxxxxxxx',
                application: 'xxxxxxx',
                user: 'xxxxxx'
            }
        };
    }
    //get filestack config
    AppConfigService.prototype.getFilestackConfig = function () {
        return this.filestackConfig;
    };
    //get s3 config
    AppConfigService.prototype.getS3Config = function () {
        return this.s3Config;
    };
    AppConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppConfigService);
    return AppConfigService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\docs\project_digitalLibrary\Frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map