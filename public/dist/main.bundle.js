webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation class=\"navbar navbar-expand-lg navbar-dark navbar-fixed-top fixed-top bg-primary\"\r\n                [(userChange)]=\"userChange\"></app-navigation>\r\n<div class=\"container-fluid\">\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toastr_service__ = __webpack_require__("../../../../../src/app/services/toastr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(userService, toastr, vcr, toastrService) {
        var _this = this;
        this.userService = userService;
        this.toastr = toastr;
        this.user = [];
        this.authenticated = false;
        this.userChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.toastr.setRootViewContainerRef(vcr);
        toastrService.eventAdded$.subscribe(function (item) { return _this.onToastrAdded(item); });
    }
    AppComponent.prototype.onToastrAdded = function (item) {
        // do something with added item
        switch (item.name) {
            case 'success':
                this.showSuccess(item.message);
                break;
            case 'warning':
                this.showWarning(item.message);
                break;
            case 'error':
                this.showError(item.message);
                break;
            case 'info':
                this.showInfo(item.message);
                break;
            case 'custom':
                this.showCustom(item.message);
                break;
        }
        this.toastrAdded = item;
    };
    AppComponent.prototype.ngOnInit = function () {
        // get users from secure api end point
        this.getUser();
        this.userChanged();
    };
    AppComponent.prototype.userChanged = function () {
        var _this = this;
        this.userService.userChange.subscribe(function (data) {
            if (data) {
                _this.user = data;
                _this.authenticated = true;
                var dataStore = {
                    user: _this.user,
                    authenticated: _this.authenticated
                };
                _this.userChange.emit(dataStore);
            }
            else {
                _this.user = null;
                _this.authenticated = false;
                _this.userChange.emit(null);
            }
        });
    };
    // get users from secure api end point
    AppComponent.prototype.getUser = function () {
        if (this.userService.token) {
            this.user = this.userService.getUser();
            this.authenticated = true;
            var dataStore = {
                user: this.user,
                authenticated: this.authenticated
            };
            this.userChange.emit(dataStore);
        }
        else {
            this.authenticated = false;
            this.userChange.emit(null);
        }
    };
    AppComponent.prototype.showSuccess = function (message) {
        this.toastr.success(message, 'Success!');
    };
    AppComponent.prototype.showError = function (message) {
        this.toastr.error(message, 'Oops!');
    };
    AppComponent.prototype.showWarning = function (message) {
        this.toastr.warning(message, 'Alert!');
    };
    AppComponent.prototype.showInfo = function (message) {
        this.toastr.info(message);
    };
    AppComponent.prototype.showCustom = function (message) {
        this.toastr.custom('<span style="color: red">Message in red.</span>', null, { enableHTML: true });
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], AppComponent.prototype, "userChange", void 0);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr__["ToastsManager"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_toastr_service__["a" /* ToastrService */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/Users/nilse/Code/lachat/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_welcome_welcome_component__ = __webpack_require__("../../../../../src/app/components/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_router_approuter_module__ = __webpack_require__("../../../../../src/app/modules/router/approuter.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_navigation_navigation_component__ = __webpack_require__("../../../../../src/app/components/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_user_user_component__ = __webpack_require__("../../../../../src/app/components/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_toastr_service__ = __webpack_require__("../../../../../src/app/services/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__support_CustomToastr__ = __webpack_require__("../../../../../src/app/support/CustomToastr.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_chat_chat_component__ = __webpack_require__("../../../../../src/app/components/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_message_message_component__ = __webpack_require__("../../../../../src/app/components/message/message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_user_info_user_info_component__ = __webpack_require__("../../../../../src/app/components/user-info/user-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_chat_sidebar_chat_sidebar_component__ = __webpack_require__("../../../../../src/app/components/chat-sidebar/chat-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_chat_content_chat_content_component__ = __webpack_require__("../../../../../src/app/components/chat-content/chat-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__guards_redirect_if_logged_in_guard__ = __webpack_require__("../../../../../src/app/guards/redirect-if-logged-in.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_create_message_create_message_component__ = __webpack_require__("../../../../../src/app/components/create-message/create-message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_company_company_component__ = __webpack_require__("../../../../../src/app/components/company/company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_company_service__ = __webpack_require__("../../../../../src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_thread_service__ = __webpack_require__("../../../../../src/app/services/thread.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_company_thread_company_thread_component__ = __webpack_require__("../../../../../src/app/components/company-thread/company-thread.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_thread_thread_component__ = __webpack_require__("../../../../../src/app/components/thread/thread.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_welcome_welcome_component__["a" /* WelcomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_chat_chat_component__["a" /* ChatComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_message_message_component__["a" /* MessageComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_user_info_user_info_component__["a" /* UserInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_chat_sidebar_chat_sidebar_component__["a" /* ChatSidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_chat_content_chat_content_component__["a" /* ChatContentComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_create_message_create_message_component__["a" /* CreateMessageComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_company_company_component__["a" /* CompanyComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_company_thread_company_thread_component__["a" /* CompanyThreadComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_thread_thread_component__["a" /* ThreadComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__modules_router_approuter_module__["a" /* AppRouterModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_13_ng2_toastr__["ToastModule"].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_9__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_15__services_toastr_service__["a" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_22__guards_redirect_if_logged_in_guard__["a" /* RedirectIfLoggedInGuard */],
            __WEBPACK_IMPORTED_MODULE_25__services_company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_26__services_thread_service__["a" /* ThreadService */],
            { provide: __WEBPACK_IMPORTED_MODULE_13_ng2_toastr__["ToastOptions"], useClass: __WEBPACK_IMPORTED_MODULE_16__support_CustomToastr__["a" /* CustomToastr */] },
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=C:/Users/nilse/Code/lachat/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/chat-content/chat-content.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top: 50px\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/chat-content/chat-content.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-chat {\n  background: #cccccc; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/chat-content/chat-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatContentComponent = (function () {
    function ChatContentComponent() {
    }
    ChatContentComponent.prototype.ngOnInit = function () {
    };
    return ChatContentComponent;
}());
ChatContentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chat-content',
        template: __webpack_require__("../../../../../src/app/components/chat-content/chat-content.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/chat-content/chat-content.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ChatContentComponent);

//# sourceMappingURL=C:/Users/nilse/Code/lachat/src/chat-content.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/chat-sidebar/chat-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<app-company></app-company>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/chat-sidebar/chat-sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-link {\n  color: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/chat-sidebar/chat-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatSidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatSidebarComponent = (function () {
    function ChatSidebarComponent() {
    }
    ChatSidebarComponent.prototype.ngOnInit = function () {
    };
    return ChatSidebarComponent;
}());
ChatSidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chat-sidebar',
        template: __webpack_require__("../../../../../src/app/components/chat-sidebar/chat-sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/chat-sidebar/chat-sidebar.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ChatSidebarComponent);

//# sourceMappingURL=C:/Users/nilse/Code/lachat/src/chat-sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <app-chat-sidebar class=\"col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar sidebar-chat\"></app-chat-sidebar>\r\n  <app-chat-content class=\"col-sm-9 ml-sm-auto col-md-10 pt-3 content-chat\"></app-chat-content>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/chat/chat.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidebar-chat {\n  background: #36465d !important; }\n\n.sidebar {\n  position: fixed;\n  top: 51px;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  padding: 20px 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border-right: 1px solid #eee; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatComponent = (function () {
    function ChatComponent() {
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chat',
        template: __webpack_require__("../../../../../src/app/components/chat/chat.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/chat/chat.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ChatComponent);

//# sourceMappingURL=C:/Users/nilse/Code/lachat/src/chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/company-thread/company-thread.component.html":
/***/ (function(module, exports) {

module.exports = "<li *ngFor=\"let thread of threads\" class=\"nav-item\">\n  <a [routerLink]=\"['/chat/threads/', thread.id]\" class=\"header nav-link pull-left\">\n    {{thread.subject}} <span class=\"sr-only\">(current)</span>\n  </a>\n</li>\n"

/***/ }),

/***/ "../../../../../src/app/components/company-thread/company-thread.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-thread/company-thread.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyThreadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompanyThreadComponent = (function () {
    function CompanyThreadComponent() {
    }
    CompanyThreadComponent.prototype.ngOnInit = function () {
    };
    return CompanyThreadComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('threads'),
    __metadata("design:type", Array)
], CompanyThreadComponent.prototype, "threads", void 0);
CompanyThreadComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-company-thread',
        template: __webpack_require__("../../../../../src/app/components/company-thread/company-thread.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/company-thread/company-thread.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], CompanyThreadComponent);

//# sourceMappingURL=C:/Users/nilse/Code/lachat/src/company-thread.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/company/company.component.html":
/***/ (function(module, exports) {

module.exports = "<ul *ngFor=\"let company of companies; let i = index\" data-toggle=\"collapse\" [attr.data-target]=\"'#company-'+company.id\" class=\"nav nav-pills flex-column\">\n  <li class=\"nav-link text-white text-uppercase\" (click)=\"triggerThreadCollapse(company.id)\">{{company.name}}</li>\n  <app-company-thread [class]=\"(panel == company.id) || company.threadStatus ? 'collapse in' : 'collapse'\" [attr.aria-expanded]=\"panel == company.id ? true : false\" id=\"'#company-'{{company.id}}\" [threads]=\"company.threads\"></app-company-thread>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/components/company/company.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".collapse.in {\n  display: block !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company/company.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toastr_service__ = __webpack_require__("../../../../../src/app/services/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_company_service__ = __webpack_require__("../../../../../src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_thread_service__ = __webpack_require__("../../../../../src/app/services/thread.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_Company__ = __webpack_require__("../../../../../src/app/models/Company.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CompanyComponent = (function () {
    function CompanyComponent(router, authenticationService, companyService, threadsService, toastrService, route) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.companyService = companyService;
        this.threadsService = threadsService;
        this.toastrService = toastrService;
        this.route = route;
        this.companies = [__WEBPACK_IMPORTED_MODULE_6__models_Company__["a" /* Company */]];
        this.loading = false;
        this.error = '';
        this.emitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CompanyComponent.prototype.ngOnInit = function () {
        var _this = this;
        // reset login status
        this.companyService.getCompanies().subscribe(function (data) {
            _this.companies = data;
            _this.threadsService.getThreads().subscribe(function (data) {
                _this.companies.forEach(function (company, companyIndex, companyArr) {
                    company.threads = [];
                    data.forEach(function (thread, index, arr) {
                        if (company.id == thread.company_id) {
                            company.threads.push(thread);
                        }
                    });
                });
            });
        });
    };
    CompanyComponent.prototype.triggerThreadCollapse = function (id) {
        this.panel = id;
    };
    return CompanyComponent;
}());
CompanyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-company',
        template: __webpack_require__("../../../../../src/app/components/company/company.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/company/company.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_company_service__["a" /* CompanyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_thread_service__["a" /* ThreadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_thread_service__["a" /* ThreadService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_toastr_service__["a" /* ToastrService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _f || Object])
], CompanyComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=C:/Users/nilse/Code/lachat/src/company.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/create-message/create-message.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  create-message works!\r\n</p>\r\n<h1>Create a new message</h1>\r\n<form action=\"{{ storePath }}\" method=\"post\">\r\n  <div class=\"col-md-6\">\r\n\r\n    <!-- Message Form Input -->\r\n    <div class=\"form-group\">\r\n      <label class=\"control-label\">Message</label>\r\n      <textarea name=\"message\" class=\"form-control\"></textarea>\r\n    </div>\r\n    <!-- Submit Form Input -->\r\n    <div class=\"form-group\">\r\n      <button type=\"submit\" class=\"btn btn-primary form-control\">Submit</button>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/create-message/create-message.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/create-message/create-message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateMessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_app__ = __webpack_require__("../../../../../src/config/app.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CreateMessageComponent = (function () {
    function CreateMessageComponent() {
        this.storePath = __WEBPACK_IMPORTED_MODULE_1__config_app__["a" /* app */].api_url + '/api/messages/store';
    }
    CreateMessageComponent.prototype.ngOnInit = function () {
    };
    return CreateMessageComponent;
}());
CreateMessageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-message',
        template: __webpack_require__("../../../../../src/app/components/create-message/create-message.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/create-message/create-message.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], CreateMessageComponent);

//# sourceMappingURL=C:/Users/nilse/Code/lachat/src/create-message.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"main\">\r\n\r\n  <h3>Please Log In</h3>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n      <a href=\"#\" class=\"btn btn-lg btn-primary btn-block\">Facebook</a>\r\n    </div>\r\n    <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n      <a href=\"#\" class=\"btn btn-lg btn-info btn-block\">Google</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"login-or\">\r\n    <hr class=\"hr-or\">\r\n    <span class=\"span-or\">or</span>\r\n  </div>\r\n  <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\r\n  <form role=\"form\" name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\r\n      <label for=\"email\">Email</label>\r\n      <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required />\r\n      <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Email is required</div>\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n      <a class=\"pull-right\" href=\"#\">Forgot password?</a>\r\n      <label for=\"password\">Password</label>\r\n      <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n      <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <button type=\"submit\" [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\r\n      <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n    </div>\r\n  </form>\r\n  <p>Don't have a login? <a [routerLink]=\"['/register']\"> Click</a></p>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  padding-top: 15px;\n  font-size: 12px; }\n\n.main {\n  max-width: 320px;\n  margin: 0 auto; }\n\n.login-or {\n  position: relative;\n  font-size: 18px;\n  color: #aaa;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\n.span-or {\n  display: block;\n  position: absolute;\n  left: 50%;\n  top: -2px;\n  margin-left: -25px;\n  background-color: #fff;\n  width: 50px;\n  text-align: center; }\n\n.hr-or {\n  background-color: #cdcdcd;\n  height: 1px;\n  margin-top: 0px !important;\n  margin-bottom: 0px !important; }\n\nh3 {\n  text-align: center;\n  line-height: 300%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toastr_service__ = __webpack_require__("../../../../../src/app/services/toastr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(router, authenticationService, toastrService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.toastrService = toastrService;
        this.model = {};
        this.loading = false;
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        if (this.authenticationService.token) {
            this.authenticationService.logout();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.email, this.model.password)
            .subscribe(function (result) {
            if (result === true) {
                _this.router.navigate(['/chat']);
                _this.authenticationService.userEvent.emit(result);
                _this.toastrService.add('info', 'You are logged in!');
            }
            else {
                _this.error = 'Username or password is incorrect';
                _this.loading = false;
            }
        }, function (result) {
            _this.error = 'Username or password is incorrect';
            _this.loading = false;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_toastr_service__["a" /* ToastrService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/Users/nilse/Code/lachat/src/login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/message/message.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  message works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/message/message.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/message/message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageComponent = (function () {
    function MessageComponent() {
    }
    MessageComponent.prototype.ngOnInit = function () {
    };
    return MessageComponent;
}());
MessageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-message',
        template: __webpack_require__("../../../../../src/app/components/message/message.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/message/message.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], MessageComponent);

//# sourceMappingURL=C:/Users/nilse/Code/lachat/src/message.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"navbar-brand\" [routerLink]=\"['/']\">{{app.app_name}}</a>\r\n<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\"\r\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n</button>\r\n<div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n    <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\" *ngIf=\"authenticated\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/user']\">Hello, {{user['name']}}</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"!authenticated\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"!authenticated\">\r\n            <a class=\"nav-link\">|</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"!authenticated\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"authenticated\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/login']\">Logout</a>\r\n        </li>\r\n\r\n    </ul>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_app__ = __webpack_require__("../../../../../src/config/app.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationComponent = (function () {
    function NavigationComponent(authService) {
        this.user = [];
        this.authenticated = false;
        this.app = {};
        this.authService = authService;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.app = __WEBPACK_IMPORTED_MODULE_2__config_app__["a" /* app */];
        this.getUser();
        this.userChange.subscribe(function (data) {
            if (data) {
                _this.user = data.user;
                _this.authenticated = true;
            }
            else {
                _this.user = null;
                _this.authenticated = false;
            }
        });
    };
    NavigationComponent.prototype.getUser = function () {
        // get users from secure api end point
        if (this.authService.token) {
            this.user = this.authService.getUser();
            this.authenticated = true;
        }
        else {
            this.authenticated = false;
        }
    };
    return NavigationComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NavigationComponent.prototype, "userChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], NavigationComponent.prototype, "user", void 0);
NavigationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navigation',
        template: __webpack_require__("../../../../../src/app/components/navigation/navigation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navigation/navigation.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object])
], NavigationComponent);

var _a;
//# sourceMappingURL=C:/Users/nilse/Code/lachat/src/navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n\r\n  <h3>Please Sign Up</h3>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n      <a href=\"#\" class=\"btn btn-lg btn-primary btn-block\">Facebook</a>\r\n    </div>\r\n    <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n      <a href=\"#\" class=\"btn btn-lg btn-info btn-block\">Google</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"login-or\">\r\n    <hr class=\"hr-or\">\r\n    <span class=\"span-or\">or</span>\r\n  </div>\r\n  <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\r\n  <form name=\"form\" role=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !name.valid }\">\r\n      <label for=\"name\">Name</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"model.name\" #name=\"ngModel\" required />\r\n      <div *ngIf=\"f.submitted && !name.valid\" class=\"help-block\">Name is required</div>\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\r\n      <label for=\"email\">Email</label>\r\n      <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required />\r\n      <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Email is required</div>\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n      <label for=\"password\">Password</label>\r\n      <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n      <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n      <label for=\"confirm\">Confirmation</label>\r\n      <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.confirm\" #confirm=\"ngModel\" required />\r\n      <div *ngIf=\"f.submitted && !confirm.valid\" class=\"help-block\">Confirm is required</div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <button [disabled]=\"loading\" class=\"btn btn-primary\">SignUp</button>\r\n      <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n    </div>\r\n  </form>\r\n  <p>Have a login? <a [routerLink]=\"['/login']\"> Click</a></p>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  padding-top: 15px;\n  font-size: 12px; }\n\n.main {\n  max-width: 320px;\n  margin: 0 auto; }\n\n.login-or {\n  position: relative;\n  font-size: 18px;\n  color: #aaa;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\n.span-or {\n  display: block;\n  position: absolute;\n  left: 50%;\n  top: -2px;\n  margin-left: -25px;\n  background-color: #fff;\n  width: 50px;\n  text-align: center; }\n\n.hr-or {\n  background-color: #cdcdcd;\n  height: 1px;\n  margin-top: 0px !important;\n  margin-bottom: 0px !important; }\n\nh3 {\n  text-align: center;\n  line-height: 300%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toastr_service__ = __webpack_require__("../../../../../src/app/services/toastr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(router, authenticationService, toastrService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.toastrService = toastrService;
        this.model = {};
        this.loading = false;
        this.error = '';
    }
    RegisterComponent.prototype.ngOnInit = function () {
        // reset login status
        if (this.authenticationService.token) {
            this.router.navigate(['/']);
            this.toastrService.add('warning', 'You are already registered');
        }
        else {
            // this.authenticationService.logout();
        }
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.register(this.model.name, this.model.email, this.model.password, this.model.confirm)
            .subscribe(function (result) {
            if (result === true) {
                _this.router.navigate(['/']);
            }
            else {
                _this.error = 'Sorry your account isn\'t created';
                _this.loading = false;
            }
        }, function (data) {
            _this.error = 'Sorry your account isn\'t created';
            _this.loading = false;
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_toastr_service__["a" /* ToastrService */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/Users/nilse/Code/lachat/src/register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/thread/thread.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  thread works!\n  thread by id: {{id}}\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/thread/thread.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/thread/thread.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_thread_service__ = __webpack_require__("../../../../../src/app/services/thread.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ThreadComponent = (function () {
    function ThreadComponent(route, threadServide) {
        this.route = route;
        this.threadServide = threadServide;
    }
    ThreadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.id = id;
            _this.threadServide.activeThreadStatus.emit(id);
        });
        this.threadServide.getThread(this.id).subscribe(function (data) {
            _this.thread = data;
        });
    };
    return ThreadComponent;
}());
ThreadComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-thread',
        template: __webpack_require__("../../../../../src/app/components/thread/thread.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/thread/thread.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_thread_service__["a" /* ThreadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_thread_service__["a" /* ThreadService */]) === "function" && _b || Object])
], ThreadComponent);

var _a, _b;
//# sourceMappingURL=C:/Users/nilse/Code/lachat/src/thread.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user-info/user-info.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  user-info works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user-info/user-info.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-info/user-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserInfoComponent = (function () {
    function UserInfoComponent() {
    }
    UserInfoComponent.prototype.ngOnInit = function () {
    };
    return UserInfoComponent;
}());
UserInfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-info',
        template: __webpack_require__("../../../../../src/app/components/user-info/user-info.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user-info/user-info.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], UserInfoComponent);

//# sourceMappingURL=C:/Users/nilse/Code/lachat/src/user-info.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"jumbotron justify-content-center\">\r\n  name: {{user['name']}}\r\n  email: {{user['email']}}\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_User__ = __webpack_require__("../../../../../src/app/models/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = (function () {
    function UserComponent(authService) {
        this.user = __WEBPACK_IMPORTED_MODULE_1__models_User__["a" /* User */];
        this.authService = authService;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.authService.user;
        this.authService.userChange.subscribe(function (data) {
            _this.user = data;
        });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/components/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/user.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object])
], UserComponent);

var _a;
//# sourceMappingURL=C:/Users/nilse/Code/lachat/src/user.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <!--The content below is only a placeholder and can be replaced.-->\r\n        <div style=\"width: 100%; text-align:center\">\r\n            <h1 class=\"text-info\">\r\n                Welcome here!\r\n            </h1>\r\n            <h1>\r\n                Hello Guys! <br>\r\n                This is the app that binds angular4 and laravel!\r\n                <br>\r\n                Welcome to {{title}}!\r\n            </h1>\r\n            <img width=\"400\" src=\"assets/images/laravel.png\">\r\n            <img width=\"300\"\r\n                 src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNTAgMjUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAgMjUwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojREQwMDMxO30NCgkuc3Qxe2ZpbGw6I0MzMDAyRjt9DQoJLnN0MntmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxnPg0KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTI1LDMwIDEyNSwzMCAxMjUsMzAgMzEuOSw2My4yIDQ2LjEsMTg2LjMgMTI1LDIzMCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAJIi8+DQoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxMjUsMzAgMTI1LDUyLjIgMTI1LDUyLjEgMTI1LDE1My40IDEyNSwxNTMuNCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAxMjUsMzAgCSIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMjUsNTIuMUw2Ni44LDE4Mi42aDBoMjEuN2gwbDExLjctMjkuMmg0OS40bDExLjcsMjkuMmgwaDIxLjdoMEwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMQ0KCQlMMTI1LDUyLjF6IE0xNDIsMTM1LjRIMTA4bDE3LTQwLjlMMTQyLDEzNS40eiIvPg0KPC9nPg0KPC9zdmc+DQo=\">\r\n        </div>\r\n        <h2 class=\"text-center\" style=\"width: 100%\">Here are some links to help you start: </h2>\r\n        <ul class=\"text-center\" style=\"width: 100%; list-style-type: none\">\r\n            <li>\r\n                <h2><a target=\"_blank\" href=\"https://laravel.com/docs/5.4\">Laravel Docs</a></h2>\r\n            </li>\r\n            <li>\r\n                <h2><a target=\"_blank\" href=\"https://github.com/angular/angular-cli/wiki\">Angular CLI\r\n                    Documentation</a>\r\n                </h2>\r\n            </li>\r\n            <li>\r\n                <h2><a target=\"_blank\" href=\"https://getbootstrap.com/\">Bootstrap4 Documentation</a></h2>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/welcome/welcome.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_app__ = __webpack_require__("../../../../../src/config/app.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeComponent = (function () {
    function WelcomeComponent() {
        this.title = __WEBPACK_IMPORTED_MODULE_1__config_app__["a" /* app */].app_name;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-welcome',
        template: __webpack_require__("../../../../../src/app/components/welcome/welcome.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/welcome/welcome.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], WelcomeComponent);

//# sourceMappingURL=C:/Users/nilse/Code/lachat/src/welcome.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toastr_service__ = __webpack_require__("../../../../../src/app/services/toastr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, toastrService) {
        this.router = router;
        this.toastrService = toastrService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        this.toastrService.add('warning', 'You are not allowed. Please log in!');
        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_toastr_service__["a" /* ToastrService */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=C:/Users/nilse/Code/lachat/src/auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/guards/redirect-if-logged-in.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedirectIfLoggedInGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RedirectIfLoggedInGuard = (function () {
    function RedirectIfLoggedInGuard(router) {
        this.router = router;
    }
    RedirectIfLoggedInGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            this.router.navigateByUrl('/chat');
            return true;
        }
        return true;
    };
    return RedirectIfLoggedInGuard;
}());
RedirectIfLoggedInGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], RedirectIfLoggedInGuard);

var _a;
//# sourceMappingURL=C:/Users/nilse/Code/lachat/src/redirect-if-logged-in.guard.js.map

/***/ }),

/***/ "../../../../../src/app/helpers/arrays.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return arrays; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);

var arrays = {
    transformToArray: function ($obj) {
        var arrays = __WEBPACK_IMPORTED_MODULE_0_jquery__["map"]($obj, function (value, index) {
            return [value];
        });
        return arrays[0];
    }
};
//# sourceMappingURL=C:/Users/nilse/Code/lachat/src/arrays.js.map

/***/ }),

/***/ "../../../../../src/app/models/Company.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Company; });
var Company = (function () {
    function Company() {
        this.threads = [];
        this.threadStatus = false;
    }
    return Company;
}());

//# sourceMappingURL=C:/Users/nilse/Code/lachat/src/Company.js.map

/***/ }),

/***/ "../../../../../src/app/models/User.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=C:/Users/nilse/Code/lachat/src/User.js.map

/***/ }),

/***/ "../../../../../src/app/modules/router/approuter.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_welcome_welcome_component__ = __webpack_require__("../../../../../src/app/components/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_user_user_component__ = __webpack_require__("../../../../../src/app/components/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_chat_chat_component__ = __webpack_require__("../../../../../src/app/components/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_redirect_if_logged_in_guard__ = __webpack_require__("../../../../../src/app/guards/redirect-if-logged-in.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_thread_thread_component__ = __webpack_require__("../../../../../src/app/components/thread/thread.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__["a" /* RegisterComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__components_welcome_welcome_component__["a" /* WelcomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_redirect_if_logged_in_guard__["a" /* RedirectIfLoggedInGuard */]] },
    { path: 'chat', component: __WEBPACK_IMPORTED_MODULE_7__components_chat_chat_component__["a" /* ChatComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */]],
        children: [
            { path: 'threads/:id', component: __WEBPACK_IMPORTED_MODULE_9__components_thread_thread_component__["a" /* ThreadComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */]] },
        ] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_6__components_user_user_component__["a" /* UserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */]] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var base = document.querySelector('#base');
var useHash = false;
if (base) {
    useHash = true;
}
var AppRouterModule = (function () {
    function AppRouterModule() {
    }
    return AppRouterModule;
}());
AppRouterModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { useHash: useHash })
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]
        ],
        declarations: []
    })
], AppRouterModule);

//# sourceMappingURL=C:/Users/nilse/Code/lachat/src/approuter.module.js.map

/***/ }),

/***/ "../../../../../src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_app__ = __webpack_require__("../../../../../src/config/app.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_arrays__ = __webpack_require__("../../../../../src/app/helpers/arrays.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toastr_service__ = __webpack_require__("../../../../../src/app/services/toastr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var AuthenticationService = (function () {
    function AuthenticationService(http, toastrService) {
        this.http = http;
        this.toastrService = toastrService;
        /**
         * emit events
         *
         * @type {EventEmitter}
         */
        this.userEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.userChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    /**
     * register this asshole
     *
     * @param email
     * @param password
     * @returns {Observable<R>}
     */
    AuthenticationService.prototype.login = function (email, password) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config_app__["a" /* app */].api_url + '/api/login', { email: email, password: password })
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var token = response.json() && response.json().meta.token;
            if (token) {
                // set token property
                _this.token = token;
                _this.userEvent.emit(response.json());
                var name = response.json().data.name ? response.json().data.name : "";
                // store email and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ name: name, email: email, token: token }));
                _this.getUser();
                _this.userChange.emit(response.json());
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        });
    };
    AuthenticationService.prototype.getUser = function () {
        var _this = this;
        var that = this;
        this.user = this.getAuthenticatedUser().subscribe(function (users) {
            if (that.token) {
                that.user = __WEBPACK_IMPORTED_MODULE_4__helpers_arrays__["a" /* arrays */].transformToArray(users);
                that.authenticated = true;
                _this.userChange.emit(_this.user);
            }
        }, function (error) {
            that.user = [];
            that.authenticated = false;
            localStorage.removeItem('currentUser');
            localStorage.removeItem('io');
            _this.userChange.emit(null);
            that.logout();
        });
        return this.user;
    };
    /**
     * get all users
     *
     * @returns {Observable<R>}
     */
    AuthenticationService.prototype.getUsers = function () {
        // add authorization header with jwt token
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + this.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // get users from api
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__config_app__["a" /* app */].api_url + '/api/users', options)
            .map(function (response) { return response.json(); });
    };
    /**
     * get the authenticated user
     *
     * @returns {Observable<R>}
     */
    AuthenticationService.prototype.getAuthenticatedUser = function () {
        // add authorization header with jwt token
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + this.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // get users from api
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__config_app__["a" /* app */].api_url + '/api/user', options)
            .map(function (response) { return response.json(); });
    };
    /**
     * register this user
     *
     * @param {string} name
     * @param {string} email
     * @param {string} password
     * @param {string} confirm
     * @returns {Observable<boolean>}
     */
    AuthenticationService.prototype.register = function (name, email, password, confirm) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config_app__["a" /* app */].api_url + '/api/register', {
            name: name,
            email: email,
            password: password,
            password_confirmation: confirm
        })
            .map(function (response) {
            // register successful if there's a jwt token in the response
            var token = response.json() && response.json().token;
            if (token) {
                // set token property
                _this.token = token;
                _this.userEvent.emit(response.json());
                var name_1 = response.json().name ? response.json().name : "";
                var id = response.json().id ? response.json().id : 0;
                var user = { id: id, name: name_1, email: email, token: token };
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                _this.user = user;
                _this.authenticated = true;
                _this.userChange.emit(_this.user);
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        });
    };
    /**
     * logout fucking user
     */
    AuthenticationService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
        this.userChange.emit(null);
        this.toastrService.add('info', 'You are logged out!');
    };
    return AuthenticationService;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], AuthenticationService.prototype, "userChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AuthenticationService.prototype, "user", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], AuthenticationService.prototype, "authenticated", void 0);
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__toastr_service__["a" /* ToastrService */]) === "function" && _b || Object])
], AuthenticationService);

var _a, _b;
//# sourceMappingURL=C:/Users/nilse/Code/lachat/src/authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/company.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_app__ = __webpack_require__("../../../../../src/config/app.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toastr_service__ = __webpack_require__("../../../../../src/app/services/toastr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var CompanyService = (function () {
    /**
     *
     * @param {Http} http
     * @param {ToastrService} toastrService
     */
    function CompanyService(http, toastrService) {
        this.http = http;
        this.toastrService = toastrService;
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    /**
     * get all companies for user
     *
     * @returns {Observable<R>}
     */
    CompanyService.prototype.getCompanies = function () {
        // add authorization header with jwt token
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + this.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // get users from api
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__config_app__["a" /* app */].api_url + '/api/companies', options)
            .map(function (response) { return response.json(); });
    };
    return CompanyService;
}());
CompanyService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__toastr_service__["a" /* ToastrService */]) === "function" && _b || Object])
], CompanyService);

var _a, _b;
//# sourceMappingURL=C:/Users/nilse/Code/lachat/src/company.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/thread.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_app__ = __webpack_require__("../../../../../src/config/app.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toastr_service__ = __webpack_require__("../../../../../src/app/services/toastr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ThreadService = (function () {
    /**
     *
     * @param {Http} http
     * @param {ToastrService} toastrService
     */
    function ThreadService(http, toastrService) {
        this.http = http;
        this.toastrService = toastrService;
        this.activeThreadStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    /**
     * get all companies for user
     *
     * @returns {Observable<R>}
     */
    ThreadService.prototype.getThreads = function () {
        // add authorization header with jwt token
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + this.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // get users from api
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__config_app__["a" /* app */].api_url + '/api/threads', options)
            .map(function (response) { return response.json(); });
    };
    /**
     * get thread by id
     *
     * @param {string} id
     * @returns {Observable<Thread>}
     */
    ThreadService.prototype.getThread = function (id) {
        // add authorization header with jwt token
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + this.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // get users from api
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__config_app__["a" /* app */].api_url + '/api/threads/' + id, options)
            .map(function (response) { return response.json(); });
    };
    return ThreadService;
}());
ThreadService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__toastr_service__["a" /* ToastrService */]) === "function" && _b || Object])
], ThreadService);

var _a, _b;
//# sourceMappingURL=C:/Users/nilse/Code/lachat/src/thread.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/toastr.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ToastrEvent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastrService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToastrEvent = (function () {
    function ToastrEvent(name, message) {
        this.name = name;
        this.message = message;
    }
    return ToastrEvent;
}());

var ToastrService = (function () {
    function ToastrService() {
        this.events = [];
        this.eventAdded$ = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ToastrService.prototype.list = function () {
        return this.events;
    };
    ToastrService.prototype.add = function (name, message) {
        var toastr = new ToastrEvent(name, message);
        this.events.push(toastr);
        this.eventAdded$.emit(toastr);
    };
    return ToastrService;
}());
ToastrService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ToastrService);

//# sourceMappingURL=C:/Users/nilse/Code/lachat/src/toastr.service.js.map

/***/ }),

/***/ "../../../../../src/app/support/CustomToastr.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomToastr; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_toastr_src_toast_options__ = __webpack_require__("../../../../ng2-toastr/src/toast-options.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_toastr_src_toast_options___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ng2_toastr_src_toast_options__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CustomToastr = (function (_super) {
    __extends(CustomToastr, _super);
    function CustomToastr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positionClass = 'toast-bottom-right'; // you can override any options available
        _this.newestOnTop = false;
        _this.showCloseButton = true;
        return _this;
    }
    return CustomToastr;
}(__WEBPACK_IMPORTED_MODULE_0_ng2_toastr_src_toast_options__["ToastOptions"]));

//# sourceMappingURL=C:/Users/nilse/Code/lachat/src/CustomToastr.js.map

/***/ }),

/***/ "../../../../../src/config/app.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return app; });
var app = {
    api_url: 'http://lachat.oo',
    app_name: 'LaChat'
};
//# sourceMappingURL=C:/Users/nilse/Code/lachat/src/app.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/nilse/Code/lachat/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */], [__WEBPACK_IMPORTED_MODULE_4__app_services_authentication_service__["a" /* AuthenticationService */]]);
//# sourceMappingURL=C:/Users/nilse/Code/lachat/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map