(self["webpackChunkmessaging_ui"] = self["webpackChunkmessaging_ui"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth_auth_resolve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth.resolve */ 5866);
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/login/login.component */ 8146);
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.guard */ 8063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [{
  path: 'login',
  component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
}, {
  path: '',
  canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard],
  resolve: {
    result: _auth_auth_resolve__WEBPACK_IMPORTED_MODULE_0__.AuthResolver
  },
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_chat_chat_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/modules/chat/chat.module */ 4215)).then(m => m.ChatModule)
}, {
  path: '**',
  redirectTo: ''
}];
let AppRoutingModule = /*#__PURE__*/(() => {
  class AppRoutingModule {}

  AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };

  AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
      useHash: true
    }), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
  return AppRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);






function AppComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

const _c0 = function (a0) {
  return {
    darkMode: a0
  };
};

let AppComponent = /*#__PURE__*/(() => {
  class AppComponent {
    constructor(store, cdRef) {
      this.store = store;
      this.cdRef = cdRef;
      this.title = 'messaging-ui';
      this.loading = true;
      this.darkMode$ = this.store.select(state => state.chat?.darkMode);
      this.loading$ = this.store.select(state => state.ui.isLoadingResolve);
    }

    ngAfterViewChecked() {
      this.cdRef.detectChanges();
    }

  }

  AppComponent.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
  };

  AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 5,
    vars: 8,
    consts: [[1, "content", 3, "ngClass"], ["class", "loading", 4, "ngIf"], [1, "loading"], ["src", "assets/images/icon.png"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_2_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.darkMode$)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.loading$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
    styles: [".loading[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n.loading[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtBQUNKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG59XG4iXX0= */"]
  });
  return AppComponent;
})();

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/store-devtools */ 5242);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _utils_translate_settings_translate_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/translate-settings/translate-settings */ 6775);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interceptors/auth.interceptor */ 8189);
/* harmony import */ var _utils_directives_directives_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/directives/directives.module */ 7039);
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.module */ 1674);
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.reducer */ 8191);
/* harmony import */ var _services_http_error_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/http-error.interceptor */ 2687);
/* harmony import */ var _shared_stomp_client_messaging_ws_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/stomp-client/messaging-ws.service */ 141);
/* harmony import */ var _shared_stomp_client_rx_stomp_factory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/stomp-client/rx-stomp-factory */ 2608);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);























let AppModule = /*#__PURE__*/(() => {
  class AppModule {}

  AppModule.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };

  AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
  });
  AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HTTP_INTERCEPTORS,
      useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__.AuthInterceptor,
      multi: true
    }, {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HTTP_INTERCEPTORS,
      useClass: _services_http_error_interceptor__WEBPACK_IMPORTED_MODULE_8__.ErrorInterceptor,
      multi: true
    }, {
      provide: _shared_stomp_client_messaging_ws_service__WEBPACK_IMPORTED_MODULE_9__.RxStompService,
      useFactory: _shared_stomp_client_rx_stomp_factory__WEBPACK_IMPORTED_MODULE_10__.rxStompServiceFactory
    }],
    imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule.forRoot((0,_utils_translate_settings_translate_settings__WEBPACK_IMPORTED_MODULE_3__.translateSettings)()), _ngrx_store__WEBPACK_IMPORTED_MODULE_18__.StoreModule.forRoot(_app_reducer__WEBPACK_IMPORTED_MODULE_7__.appReducers), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_19__.StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production
    }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule, _utils_directives_directives_module__WEBPACK_IMPORTED_MODULE_5__.DirectivesModule, _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__.AuthModule]
  });
  return AppModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
    imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_18__.StoreRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_19__.StoreDevtoolsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule, _utils_directives_directives_module__WEBPACK_IMPORTED_MODULE_5__.DirectivesModule, _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__.AuthModule]
  });
})();

/***/ }),

/***/ 8191:
/*!********************************!*\
  !*** ./src/app/app.reducer.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appReducers": () => (/* binding */ appReducers)
/* harmony export */ });
/* harmony import */ var _shared_ui_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/ui.reducer */ 4785);
/* harmony import */ var _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.reducer */ 579);


const appReducers = {
  ui: _shared_ui_reducer__WEBPACK_IMPORTED_MODULE_0__.uiReducer,
  user: _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_1__.authReducer
};

/***/ }),

/***/ 3259:
/*!**************************************!*\
  !*** ./src/app/auth/auth.actions.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadProfileInfo": () => (/* binding */ loadProfileInfo),
/* harmony export */   "setUser": () => (/* binding */ setUser),
/* harmony export */   "unSetUser": () => (/* binding */ unSetUser)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const setUser = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] set User', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const unSetUser = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] unSet User');
const loadProfileInfo = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Load Profile Info');

/***/ }),

/***/ 1674:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 8146);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);








let AuthModule = /*#__PURE__*/(() => {
  class AuthModule {}

  AuthModule.ɵfac = function AuthModule_Factory(t) {
    return new (t || AuthModule)();
  };

  AuthModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AuthModule
  });
  AuthModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
  return AuthModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AuthModule, {
    declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 579:
/*!**************************************!*\
  !*** ./src/app/auth/auth.reducer.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authReducer": () => (/* binding */ authReducer),
/* harmony export */   "initialState": () => (/* binding */ initialState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.actions */ 3259);


const initialState = {
  user: null
};

const _authReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_auth_actions__WEBPACK_IMPORTED_MODULE_0__.setUser, (state, {
  profileInfo
}) => ({ ...state,
  user: { ...profileInfo
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_auth_actions__WEBPACK_IMPORTED_MODULE_0__.unSetUser, state => ({ ...state,
  profileInfo: null
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_auth_actions__WEBPACK_IMPORTED_MODULE_0__.loadProfileInfo, state => ({ ...state,
  user: null
})));

function authReducer(state, action) {
  return _authReducer(state, action);
}

/***/ }),

/***/ 5866:
/*!**************************************!*\
  !*** ./src/app/auth/auth.resolve.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthResolver": () => (/* binding */ AuthResolver)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 591);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.actions */ 3259);
/* harmony import */ var _app_shared_ui_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/ui.actions */ 5299);
/* harmony import */ var _models_IWorkspace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/IWorkspace */ 3108);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ 9168);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/services/authentication.service */ 7053);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store */ 3488);












let AuthResolver = /*#__PURE__*/(() => {
  class AuthResolver {
    constructor(auth, httpClient, store) {
      this.auth = auth;
      this.httpClient = httpClient;
      this.store = store;
      this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }

    resolve(route) {
      if (route.queryParams['secure'] !== 'true') {
        return this.httpClient.get(`${this.apiUrl}/api/profile/me`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(data => {
          this.store.dispatch((0,_app_shared_ui_actions__WEBPACK_IMPORTED_MODULE_2__.stopLoadingResolve)());

          if (data) {
            this.store.dispatch((0,_auth_actions__WEBPACK_IMPORTED_MODULE_1__.setUser)({
              profileInfo: data
            }));
            return data;
          } else {
            this.auth.logout();
            return rxjs__WEBPACK_IMPORTED_MODULE_7__.EMPTY;
          }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(err => {
          this.store.dispatch((0,_app_shared_ui_actions__WEBPACK_IMPORTED_MODULE_2__.stopLoadingResolve)());

          if (err.status === 401) {
            this.auth.logout();
          }

          return '';
        }));
      } else {
        const token = localStorage.getItem('tkn');
        const decodedToken = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_4__["default"])(token);
        const data = {
          accountUID: null,
          authenticated: true,
          groups: [],
          provider: _models_IWorkspace__WEBPACK_IMPORTED_MODULE_3__.WorkspaceProvider.OrdersConversationAPI,
          subAccountMessageableEntity: null,
          subAccountUID: '',
          subjectMessageableEntity: {
            businessReference: {
              entityType: '',
              entityUID: decodedToken.sub
            },
            accountUID: null,
            createdAt: null,
            displayName: decodedToken.displayName,
            email: null,
            subAccountUID: null,
            uid: null,
            updatedAt: null
          },
          businessReference: {
            entityType: '',
            entityUID: decodedToken.accountUid
          },
          createdAt: null,
          displayName: decodedToken.displayName,
          uid: '',
          updatedAt: null
        };
        this.store.dispatch((0,_app_shared_ui_actions__WEBPACK_IMPORTED_MODULE_2__.stopLoadingResolve)());
        this.store.dispatch((0,_auth_actions__WEBPACK_IMPORTED_MODULE_1__.setUser)({
          profileInfo: data
        }));
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(data);
      }
    }

  }

  AuthResolver.ɵfac = function AuthResolver_Factory(t) {
    return new (t || AuthResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_12__.Store));
  };

  AuthResolver.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
    token: AuthResolver,
    factory: AuthResolver.ɵfac,
    providedIn: 'root'
  });
  return AuthResolver;
})();

/***/ }),

/***/ 8146:
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_shared_ui_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/ui.actions */ 5299);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ 7556);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/authentication.service */ 7053);
/* harmony import */ var _app_services_electron_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/electron.service */ 655);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 4522);














function LoginComponent_mat_form_field_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-form-field", 3)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Dealer ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function LoginComponent_p_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.error);
  }
}

const _c0 = function (a0) {
  return {
    background: a0
  };
};

let LoginComponent = /*#__PURE__*/(() => {
  class LoginComponent {
    constructor(fb, authService, store, auth, electronService, route) {
      this.fb = fb;
      this.authService = authService;
      this.store = store;
      this.auth = auth;
      this.electronService = electronService;
      this.route = route;
      this.loading = false;
      this.url = this.electronService.isElectron() ? 'assets/images/login.jpeg' : '/assets/images/login.jpeg';
    }

    ngOnInit() {
      this.loginForm = this.fb.group({
        email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        dealerId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
      });
      this.route.queryParams.subscribe(params => {
        if (params['dealerId']) {
          this.dealerId = params['dealerId'];
          this.loginForm.controls['dealerId'].setValue(this.dealerId);
        }

        if (params['redirect']) {
          this.redirect = true;
        }
      });
      this.uiSubscription = this.store.select('ui').subscribe(ui => {
        this.loading = ui.isLoading;
      });
      this.store.dispatch((0,_app_shared_ui_actions__WEBPACK_IMPORTED_MODULE_0__.stopLoadingResolve)());
    }

    ngOnDestroy() {
      this.uiSubscription.unsubscribe();
    }

    login() {
      if (this.loginForm.invalid) return;
      this.store.dispatch((0,_app_shared_ui_actions__WEBPACK_IMPORTED_MODULE_0__.startLoading)());
      this.error = '';
      const {
        email,
        password,
        dealerId
      } = this.loginForm.value;
      this.authService.login(email, password, dealerId).subscribe(data => {
        this.store.dispatch((0,_app_shared_ui_actions__WEBPACK_IMPORTED_MODULE_0__.stopLoading)());
        this.auth.login(data.token, this.redirect);
      }, () => {
        this.error = 'Invalid data';
        this.store.dispatch((0,_app_shared_ui_actions__WEBPACK_IMPORTED_MODULE_0__.stopLoading)());
      });
    }

  }

  LoginComponent.ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_services_electron_service__WEBPACK_IMPORTED_MODULE_3__.ElectronService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute));
  };

  LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    decls: 16,
    vars: 7,
    consts: [[1, "login-container", 3, "ngStyle"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "text-primary"], ["appearance", "outline"], ["matInput", "", "formControlName", "email", "placeholder", "Email", "type", "email"], ["appearance", "outline", 4, "ngIf"], ["matInput", "", "type", "password", "formControlName", "password", "placeholder", "*********", "autocomplete", "on"], ["class", "error", 4, "ngIf"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"], ["matInput", "", "formControlName", "dealerId", "placeholder", "Dealer id", "type", "string"], [1, "error"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_1_listener() {
          return ctx.login();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-form-field", 3)(5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Enter your email or your username");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, LoginComponent_mat_form_field_8_Template, 4, 0, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-form-field", 3)(10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Enter your password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, LoginComponent_p_13_Template, 2, 1, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c0, "url(" + ctx.url + ") no-repeat center center"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.dealerId);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.loginForm.invalid || ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton],
    styles: [".login-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: black;\n  background-size: cover;\n}\n\n.form[_ngcontent-%COMP%] {\n  display: grid;\n  width: 350px;\n  margin: auto;\n  background-color: white;\n  padding: 30px;\n  border-radius: 5px;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100px;\n  min-width: unset;\n  margin: auto;\n}\n\n.form[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  color: red;\n  text-align: center;\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsdUJBQUE7RUFJQSxzQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFFRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFBSjs7QUFHRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBREoiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uZm9ybSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHdpZHRoOiAzNTBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIG1pbi13aWR0aDogdW5zZXQ7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG5cbiAgLmVycm9yIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICB9XG59XG4iXX0= */"]
  });
  return LoginComponent;
})();

/***/ }),

/***/ 8189:
/*!**************************************************!*\
  !*** ./src/app/interceptors/auth.interceptor.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


let AuthInterceptor = /*#__PURE__*/(() => {
  class AuthInterceptor {
    intercept(request, next) {
      const token = localStorage.getItem('tkn');
      const dupReq = request.clone({
        headers: request.headers.set('x-authorization-truvideo', `Bearer ${token}`)
      });
      return next.handle(dupReq);
    }

  }

  AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
    return new (t || AuthInterceptor)();
  };

  AuthInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: AuthInterceptor,
    factory: AuthInterceptor.ɵfac
  });
  return AuthInterceptor;
})();

/***/ }),

/***/ 3108:
/*!**************************************!*\
  !*** ./src/app/models/IWorkspace.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltersTypes": () => (/* binding */ FiltersTypes),
/* harmony export */   "WORKSPACES": () => (/* binding */ WORKSPACES),
/* harmony export */   "WorkspaceFeatures": () => (/* binding */ WorkspaceFeatures),
/* harmony export */   "WorkspaceProvider": () => (/* binding */ WorkspaceProvider),
/* harmony export */   "WorkspaceType": () => (/* binding */ WorkspaceType)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);

var WorkspaceType = /*#__PURE__*/(() => {
  (function (WorkspaceType) {
    WorkspaceType["internal"] = "INTERNAL";
    WorkspaceType["external"] = "EXTERNAL";
    WorkspaceType["incoming"] = "INCOMING";
  })(WorkspaceType || (WorkspaceType = {}));

  return WorkspaceType;
})();
var FiltersTypes = /*#__PURE__*/(() => {
  (function (FiltersTypes) {
    FiltersTypes["check"] = "CHECK";
    FiltersTypes["selector"] = "SELECTOR";
  })(FiltersTypes || (FiltersTypes = {}));

  return FiltersTypes;
})();
var WorkspaceFeatures = /*#__PURE__*/(() => {
  (function (WorkspaceFeatures) {
    WorkspaceFeatures["canLogout"] = "canLogout";
    WorkspaceFeatures["canUseFilters"] = "canUseFilters";
    WorkspaceFeatures["canUseSearchFilter"] = "canUseSearchFilter";
    WorkspaceFeatures["canPinChats"] = "canPinChats";
    WorkspaceFeatures["needAuth"] = "needAuth";
    WorkspaceFeatures["canSendAttachments"] = "canSendAttachments";
    WorkspaceFeatures["canAddNewMembers"] = "canAddNewMembers";
    WorkspaceFeatures["canSeeConversationInfo"] = "canSeeConversationInfo";
    WorkspaceFeatures["canCreateConversation"] = "canCreateConversation";
    WorkspaceFeatures["showChatHeader"] = "showChatHeader";
    WorkspaceFeatures["electronWorkspace"] = "electronWorkspace";
    WorkspaceFeatures["canSeeHyperlinks"] = "canSeeHyperlinks";
    WorkspaceFeatures["canCreateGrupalConversations"] = "canCreateGrupalConversations";
    WorkspaceFeatures["canDeleteMessages"] = "canDeleteMessages";
    WorkspaceFeatures["canGetUserData"] = "canGetUserData";
    WorkspaceFeatures["canSwitchDealers"] = "canSwitchDealers";
    WorkspaceFeatures["canDisplayInWorkspacesColumn"] = "canDisplayInWorkspacesColumn";
    WorkspaceFeatures["canUseSmartResponses"] = "canUseSmartResponses";
    WorkspaceFeatures["canSeeDeliveryStatus"] = "canSeeDeliveryStatus";
    WorkspaceFeatures["canGetChannelInfo"] = "canGetChannelInfo";
    WorkspaceFeatures["validateOptIn"] = "validateOptin";
    WorkspaceFeatures["validateOptOut"] = "validateOptOut";
    WorkspaceFeatures["canMakeVideoCalls"] = "canMakeVideoCalls";
    WorkspaceFeatures["canUseAutoResponses"] = "canUseAutoResponses";
    WorkspaceFeatures["canDoScrollMessages"] = "canDoScrollMessages";
    WorkspaceFeatures["getManualMessages"] = "getManualMessages";
    WorkspaceFeatures["canCopyUrl"] = "canCopyUrl";
  })(WorkspaceFeatures || (WorkspaceFeatures = {}));

  return WorkspaceFeatures;
})();
var WorkspaceProvider = /*#__PURE__*/(() => {
  (function (WorkspaceProvider) {
    WorkspaceProvider["MessagingAPI"] = "messagingApiService";
    WorkspaceProvider["OrdersConversationAPI"] = "ordersConversationApiService";
  })(WorkspaceProvider || (WorkspaceProvider = {}));

  return WorkspaceProvider;
})();
const WORKSPACES = [{
  displayName: 'Orders Conversation API',
  shortVersion: 'OC',
  id: 'ORDERS_CONVERSATION',
  type: WorkspaceType.internal,
  serviceProvider: WorkspaceProvider.OrdersConversationAPI,
  features: [WorkspaceFeatures.showChatHeader, WorkspaceFeatures.needAuth, WorkspaceFeatures.validateOptIn, WorkspaceFeatures.validateOptOut, WorkspaceFeatures.canGetChannelInfo, WorkspaceFeatures.canUseAutoResponses, WorkspaceFeatures.getManualMessages // WorkspaceFeatures.canUseSmartResponses,
  ],
  filters: []
}, {
  displayName: 'Marketing',
  shortVersion: 'MA',
  id: 'MARKETING',
  type: WorkspaceType.incoming,
  serviceProvider: WorkspaceProvider.MessagingAPI,
  features: [WorkspaceFeatures.needAuth, WorkspaceFeatures.showChatHeader, WorkspaceFeatures.canDisplayInWorkspacesColumn, WorkspaceFeatures.canGetUserData, WorkspaceFeatures.canUseSearchFilter, WorkspaceFeatures.canSeeConversationInfo, WorkspaceFeatures.canLogout, WorkspaceFeatures.canSeeDeliveryStatus, WorkspaceFeatures.canGetChannelInfo, WorkspaceFeatures.validateOptOut, WorkspaceFeatures.canUseFilters],
  filters: [{
    type: FiltersTypes.check,
    value: true,
    index: 0,
    field: 'enabled',
    name: 'Active',
    tooltip: 'Hide conversation where user has opted out'
  }, {
    type: FiltersTypes.check,
    value: true,
    index: 1,
    field: 'onlyReplied',
    name: 'Replies',
    tooltip: 'Show conversations where the customer has replied'
  }],
  websocketUrl: '/messaging/messages/dealer/',
  useDealerIDWebsocket: true
}, {
  displayName: 'Reputation',
  shortVersion: 'RE',
  id: 'REPUTATION',
  type: WorkspaceType.incoming,
  serviceProvider: WorkspaceProvider.MessagingAPI,
  features: [WorkspaceFeatures.needAuth, WorkspaceFeatures.showChatHeader, WorkspaceFeatures.canDisplayInWorkspacesColumn, WorkspaceFeatures.canGetUserData, WorkspaceFeatures.canSeeDeliveryStatus, WorkspaceFeatures.canGetChannelInfo],
  filters: [],
  websocketUrl: '/messaging/messages/dealer/',
  useDealerIDWebsocket: true
}, {
  displayName: 'Internal chat',
  shortVersion: 'IC',
  id: 'INTERNAL_CHAT',
  type: WorkspaceType.internal,
  serviceProvider: WorkspaceProvider.MessagingAPI,
  features: [WorkspaceFeatures.needAuth, WorkspaceFeatures.showChatHeader, WorkspaceFeatures.canCreateConversation, WorkspaceFeatures.canGetUserData, WorkspaceFeatures.canDisplayInWorkspacesColumn, // WorkspaceFeatures.canSeeConversationInfo,
  WorkspaceFeatures.canAddNewMembers, WorkspaceFeatures.canSeeHyperlinks, WorkspaceFeatures.canUseSearchFilter, WorkspaceFeatures.electronWorkspace, WorkspaceFeatures.canDeleteMessages, WorkspaceFeatures.canLogout, WorkspaceFeatures.canSeeDeliveryStatus, WorkspaceFeatures.canGetChannelInfo, WorkspaceFeatures.canMakeVideoCalls, WorkspaceFeatures.canDoScrollMessages, WorkspaceFeatures.canCopyUrl, WorkspaceFeatures.canCreateGrupalConversations],
  config: {
    maxFiles: 1,
    dynamicLinks: [{
      pattern: /#+([a-zA-Z0-9_]+)/i,
      url: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlHyperlinkRepairOrder,
      previewTemplate: 'repairOrdersPreviewComponent',
      previewLastMessage: 'Repair order'
    }, {
      pattern: /vc=+([a-zA-Z0-9\-_]+)/i,
      url: null,
      previewTemplate: 'videoCallModal',
      previewLastMessage: 'Video call'
    }]
  },
  filters: [],
  websocketUrl: '/messaging/messages/user/',
  useDealerIDWebsocket: false
}];

/***/ }),

/***/ 8063:
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _app_models_IWorkspace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/models/IWorkspace */ 3108);
/* harmony import */ var _app_shared_ui_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/ui.actions */ 5299);
/* harmony import */ var _app_store_actions_app_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/store/actions/app.actions */ 7319);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentication.service */ 7053);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _electron_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./electron.service */ 655);
/* harmony import */ var _encrypt_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./encrypt.service */ 5754);












let AuthGuard = /*#__PURE__*/(() => {
  class AuthGuard {
    constructor(authService, router, store, electronService, encryptService) {
      this.authService = authService;
      this.router = router;
      this.store = store;
      this.electronService = electronService;
      this.encryptService = encryptService;
    }

    canActivate(route, state) {
      var _this = this;

      return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        // Step 1: Get the segments from the URL
        const index = state.url.indexOf('?');
        const urlSegments = index !== -1 ? state.url.substring(0, index).split('/') : state.url.split('/'); // Step 2: Load workspaces list and select the workspace from the url or enviroment

        _this.loadWorkspaces();

        _this.store.dispatch((0,_app_store_actions_app_actions__WEBPACK_IMPORTED_MODULE_3__.selectWorkspace)({
          selectedWorkspace: _this.urlHasWorkspace(urlSegments[1]) ? _app_models_IWorkspace__WEBPACK_IMPORTED_MODULE_1__.WORKSPACES.find(e => e.shortVersion === urlSegments[1]) : _app_models_IWorkspace__WEBPACK_IMPORTED_MODULE_1__.WORKSPACES.find(e => e.shortVersion === src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.defaultWorkspace)
        }));

        if (urlSegments[2] === 'workspace') {
          _this.store.dispatch((0,_app_shared_ui_actions__WEBPACK_IMPORTED_MODULE_2__.hideWorkspaces)());
        }

        if (urlSegments[2] === 'list') {
          _this.store.dispatch((0,_app_shared_ui_actions__WEBPACK_IMPORTED_MODULE_2__.setEmbededView)());

          _this.store.dispatch((0,_app_shared_ui_actions__WEBPACK_IMPORTED_MODULE_2__.setBackArrow)());
        }

        if (urlSegments[2] === 'channel' && urlSegments[3]) {
          _this.store.dispatch((0,_app_shared_ui_actions__WEBPACK_IMPORTED_MODULE_2__.setEmbededView)());

          _this.setChannels(route, urlSegments[3]);
        }

        if (urlSegments[2] === 'thread' && urlSegments[3]) {
          _this.store.dispatch((0,_app_shared_ui_actions__WEBPACK_IMPORTED_MODULE_2__.setEmbededView)());

          _this.setThreads(route, urlSegments[3]);
        }

        if (urlSegments[1] === 'videocall' && urlSegments[2]) {
          _this.store.dispatch((0,_app_shared_ui_actions__WEBPACK_IMPORTED_MODULE_2__.setEmbededView)());

          _this.store.dispatch((0,_app_store_actions_app_actions__WEBPACK_IMPORTED_MODULE_3__.setVideoCall)({
            videoCall: {
              room: urlSegments[2],
              name: route.queryParams['displayName'],
              type: Number(route.queryParams['type'])
            }
          }));
        } // Step 3: Check pre-authenticated token


        if (route.queryParams['tkn']) {
          yield _this.authService.loginWithParams(route.queryParams['tkn']);
        }

        if (_this.authService.isAuthenticaed()) {
          return true;
        }

        const queryParams = {
          redirect: true
        };

        if (route.queryParams['dealerId']) {
          queryParams.dealerId = route.queryParams['dealerId'];
        }

        _this.router.navigate(['login'], {
          queryParams
        });

        return false;
      })();
    }

    loadWorkspaces() {
      if (this.electronService.isElectron()) {
        this.store.dispatch((0,_app_store_actions_app_actions__WEBPACK_IMPORTED_MODULE_3__.loadWorkspaces)({
          workspaces: _app_models_IWorkspace__WEBPACK_IMPORTED_MODULE_1__.WORKSPACES.filter(workspace => workspace.features.some(e => e === _app_models_IWorkspace__WEBPACK_IMPORTED_MODULE_1__.WorkspaceFeatures.electronWorkspace) && workspace.features.some(e => e === _app_models_IWorkspace__WEBPACK_IMPORTED_MODULE_1__.WorkspaceFeatures.canDisplayInWorkspacesColumn))
        }));
      } else {
        this.store.dispatch((0,_app_store_actions_app_actions__WEBPACK_IMPORTED_MODULE_3__.loadWorkspaces)({
          workspaces: _app_models_IWorkspace__WEBPACK_IMPORTED_MODULE_1__.WORKSPACES.filter(workspace => workspace.features.some(feature => feature === _app_models_IWorkspace__WEBPACK_IMPORTED_MODULE_1__.WorkspaceFeatures.canDisplayInWorkspacesColumn))
        }));
      }
    }

    urlHasWorkspace(segment) {
      return segment && _app_models_IWorkspace__WEBPACK_IMPORTED_MODULE_1__.WORKSPACES.some(workspace => workspace.shortVersion === segment);
    }

    setChannels(route, channelId) {
      let messageFiltersJson = {};
      const filter = route.queryParams['filters'];

      if (filter) {
        // if (route.queryParams['secure'] as boolean) {
        //   const filterFixed = filter.replace(/ /g, '+');
        //   filter = this.encryptService.decrypt(filterFixed);
        // }
        const messageFilters = filter?.replace(/\\/g, '');
        messageFiltersJson = JSON.parse(messageFilters);
      } // this is for Order Detail view


      this.store.dispatch((0,_app_store_actions_app_actions__WEBPACK_IMPORTED_MODULE_3__.selectChannel)({
        selectedChannel: {
          uid: channelId,
          channelUid: null,
          displayName: messageFiltersJson?.orderId ? messageFiltersJson?.orderId.toString() : '',
          enabled: true,
          lastMessage: null,
          pinned: false,
          unreadMessages: 0,
          visible: true,
          imageURL: null,
          active: true,
          users: [],
          orderId: messageFiltersJson?.orderId,
          messages: [],
          channelMembers: []
        }
      }));
    }

    setThreads(route, phoneNumber) {
      const filter = route.queryParams['filters']; // if (route.queryParams['secure'] as boolean) {
      //   const filterFixed = filter.replace(/ /g, '+');
      //   filter = this.encryptService.decrypt(filterFixed);
      // }

      if (filter) {
        const messageFilters = filter?.replace(/\\/g, '');
        const messageFiltersJson = JSON.parse(messageFilters); // this is for OC view

        this.store.dispatch((0,_app_store_actions_app_actions__WEBPACK_IMPORTED_MODULE_3__.selectChannel)({
          selectedChannel: {
            uid: messageFiltersJson?.externalId,
            channelUid: null,
            displayName: decodeURIComponent(phoneNumber),
            enabled: true,
            lastMessage: null,
            pinned: false,
            unreadMessages: 0,
            visible: true,
            imageURL: null,
            active: true,
            users: [],
            orderId: messageFiltersJson?.orderId,
            optIn: true,
            optOut: false,
            messages: [],
            channelMembers: []
          }
        }));
      }
    }

  }

  AuthGuard.ɵfac = function AuthGuard_Factory(t) {
    return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_5__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_electron_service__WEBPACK_IMPORTED_MODULE_6__.ElectronService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_encrypt_service__WEBPACK_IMPORTED_MODULE_7__.EncryptService));
  };

  AuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
    token: AuthGuard,
    factory: AuthGuard.ɵfac,
    providedIn: 'root'
  });
  return AuthGuard;
})();

/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



let AuthService = /*#__PURE__*/(() => {
  class AuthService {
    constructor(httpClient) {
      this.httpClient = httpClient;
      this.ordersConversationApiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ordersConversationApiUrl;
    }

    getProfileInfo() {
      return this.httpClient.get(`${this.ordersConversationApiUrl}/profile/me`);
    }

    login(username, password, dealerId) {
      return this.httpClient.post(`${this.ordersConversationApiUrl}/${dealerId}/authentication/login`, {
        username,
        password,
        deviceUid: '1'
      });
    }

  }

  AuthService.ɵfac = function AuthService_Factory(t) {
    return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };

  AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AuthService,
    factory: AuthService.ɵfac,
    providedIn: 'root'
  });
  return AuthService;
})();

/***/ }),

/***/ 7053:
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var _usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _app_shared_ui_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/ui.actions */ 5299);
/* harmony import */ var _app_store_actions_app_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/store/actions/app.actions */ 7319);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ 4198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);










let AuthenticationService = /*#__PURE__*/(() => {
  class AuthenticationService {
    constructor(http, router, store, location) {
      this.http = http;
      this.router = router;
      this.store = store;
      this.location = location;
      this.autenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(false);
      this.JwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__.JwtHelperService();
      this.checkToken();
    }

    login(tokenv3, redirect) {
      var _this = this;

      return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        localStorage.setItem('tkn', tokenv3);

        _this.autenticationState.next(true);

        return redirect ? _this.location.back() : _this.router.navigate(['']);
      })();
    }

    loginWithParams(token) {
      var _this2 = this;

      return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        localStorage.setItem('tkn', token);

        _this2.autenticationState.next(true);
      })();
    }

    logout() {
      localStorage.removeItem('tkn');
      this.store.dispatch((0,_app_store_actions_app_actions__WEBPACK_IMPORTED_MODULE_2__.unsetChat)());
      this.autenticationState.next(false);
      this.store.dispatch((0,_app_shared_ui_actions__WEBPACK_IMPORTED_MODULE_1__.stopLoading)());
      this.router.navigate(['login']);
    }

    isAuthenticaed() {
      return this.autenticationState.value;
    }

    checkToken() {
      if (localStorage.getItem('tkn')) {
        return this.autenticationState.next(true);
      }
    }

  }

  AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
    return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.Location));
  };

  AuthenticationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: AuthenticationService,
    factory: AuthenticationService.ɵfac,
    providedIn: 'root'
  });
  return AuthenticationService;
})();

/***/ }),

/***/ 655:
/*!**********************************************!*\
  !*** ./src/app/services/electron.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElectronService": () => (/* binding */ ElectronService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 3488);


let ElectronService = /*#__PURE__*/(() => {
  class ElectronService {
    constructor(store) {
      this.store = store;

      if (this.isElectron()) {
        this.ipcRenderer = window.require('electron').ipcRenderer;
      }

      window.addEventListener('focus', () => {
        this._focus = true;
      });
      window.addEventListener('blur', () => {
        this._focus = false;
      });
    }

    sendNotification(notification) {
      if (this.isElectron()) {
        this.loadData(notification);
      }
    }

    isElectron() {
      return !!(window && window.process && window.process.type);
    }

    loadData(notification) {
      return this.ipcRenderer.send('notification', notification);
    }

    get focus() {
      return this._focus;
    }

    browserNotification(data) {
      if (!this.isElectron() && !this._focus) {
        Notification.requestPermission(function () {
          const notification = new Notification(data.title, {
            body: data.body,
            icon: '/assets/images/icon.png',
            dir: 'auto'
          });
          setTimeout(function () {
            notification.close();
          }, 3000);
        });
      }
    }

  }

  ElectronService.ɵfac = function ElectronService_Factory(t) {
    return new (t || ElectronService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Store));
  };

  ElectronService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ElectronService,
    factory: ElectronService.ɵfac,
    providedIn: 'root'
  });
  return ElectronService;
})();

/***/ }),

/***/ 5754:
/*!*********************************************!*\
  !*** ./src/app/services/encrypt.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EncryptService": () => (/* binding */ EncryptService)
/* harmony export */ });
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js */ 6240);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



let EncryptService = /*#__PURE__*/(() => {
  class EncryptService {
    decrypt(message) {
      const encryptedBase64Key = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.cryptoPswd;
      const parsedBase64Key = crypto_js__WEBPACK_IMPORTED_MODULE_0__.enc.Base64.parse(encryptedBase64Key);
      return crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.decrypt(message.trim(), parsedBase64Key, {
        mode: crypto_js__WEBPACK_IMPORTED_MODULE_0__.mode.ECB,
        padding: crypto_js__WEBPACK_IMPORTED_MODULE_0__.pad.Pkcs7
      }).toString(crypto_js__WEBPACK_IMPORTED_MODULE_0__.enc.Utf8);
    }

  }

  EncryptService.ɵfac = function EncryptService_Factory(t) {
    return new (t || EncryptService)();
  };

  EncryptService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: EncryptService,
    factory: EncryptService.ɵfac,
    providedIn: 'root'
  });
  return EncryptService;
})();

/***/ }),

/***/ 2687:
/*!****************************************************!*\
  !*** ./src/app/services/http-error.interceptor.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.service */ 7053);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);





let ErrorInterceptor = /*#__PURE__*/(() => {
  class ErrorInterceptor {
    constructor(auth, activatedRoute) {
      this.auth = auth;
      this.activatedRoute = activatedRoute;
    }

    intercept(request, next) {
      return next.handle(request).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)({
        next: () => null,
        error: error => {
          if (!this.activatedRoute.snapshot.queryParams['tkn'] && error.status === 401) {
            this.auth.logout();
          }
        }
      }));
    }

  }

  ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
    return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
  };

  ErrorInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ErrorInterceptor,
    factory: ErrorInterceptor.ɵfac
  });
  return ErrorInterceptor;
})();

/***/ }),

/***/ 141:
/*!*************************************************************!*\
  !*** ./src/app/shared/stomp-client/messaging-ws.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RxStompService": () => (/* binding */ RxStompService)
/* harmony export */ });
/* harmony import */ var _stomp_rx_stomp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stomp/rx-stomp */ 9894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let RxStompService = /*#__PURE__*/(() => {
  class RxStompService extends _stomp_rx_stomp__WEBPACK_IMPORTED_MODULE_0__.RxStomp {}

  RxStompService.ɵfac = /*@__PURE__*/function () {
    let ɵRxStompService_BaseFactory;
    return function RxStompService_Factory(t) {
      return (ɵRxStompService_BaseFactory || (ɵRxStompService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](RxStompService)))(t || RxStompService);
    };
  }();

  RxStompService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: RxStompService,
    factory: RxStompService.ɵfac,
    providedIn: 'root'
  });
  return RxStompService;
})();

/***/ }),

/***/ 2608:
/*!*********************************************************!*\
  !*** ./src/app/shared/stomp-client/rx-stomp-factory.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rxStompServiceFactory": () => (/* binding */ rxStompServiceFactory)
/* harmony export */ });
/* harmony import */ var _app_shared_stomp_client_rx_stomp_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/stomp-client/rx-stomp.config */ 7561);
/* harmony import */ var _messaging_ws_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messaging-ws.service */ 141);


function rxStompServiceFactory() {
  const rxStomp = new _messaging_ws_service__WEBPACK_IMPORTED_MODULE_1__.RxStompService();
  rxStomp.configure(_app_shared_stomp_client_rx_stomp_config__WEBPACK_IMPORTED_MODULE_0__.myRxStompConfig);
  rxStomp.activate();
  return rxStomp;
}

/***/ }),

/***/ 7561:
/*!********************************************************!*\
  !*** ./src/app/shared/stomp-client/rx-stomp.config.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "myRxStompConfig": () => (/* binding */ myRxStompConfig),
/* harmony export */   "socketProvider": () => (/* binding */ socketProvider)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sockjs-client */ 4166);
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_1__);


function socketProvider() {
  return new sockjs_client__WEBPACK_IMPORTED_MODULE_1__(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.messagingWsUrl);
}
const myRxStompConfig = {
  // Which server?
  webSocketFactory: socketProvider,
  // Headers
  // Typical keys: login, passcode, host
  // connectHeaders: {
  //   login: 'guest',
  //   passcode: 'guest',
  // },
  // How often to heartbeat?
  // Interval in milliseconds, set to 0 to disable
  heartbeatIncoming: 0,
  heartbeatOutgoing: 20000,
  // Wait in milliseconds before attempting auto reconnect
  // Set to 0 to disable
  // Typical value 500 (500 milli seconds)
  reconnectDelay: 500,
  // Will log diagnostics on console
  // It can be quite verbose, not recommended in production
  // Skip this key to stop logging to console
  debug: () => {// console.log(new Date(), msg);
  }
};

/***/ }),

/***/ 5299:
/*!**************************************!*\
  !*** ./src/app/shared/ui.actions.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "doScrollDown": () => (/* binding */ doScrollDown),
/* harmony export */   "hideWorkspaces": () => (/* binding */ hideWorkspaces),
/* harmony export */   "setBackArrow": () => (/* binding */ setBackArrow),
/* harmony export */   "setEmbededView": () => (/* binding */ setEmbededView),
/* harmony export */   "setFullScreenVideo": () => (/* binding */ setFullScreenVideo),
/* harmony export */   "setScrollBotom": () => (/* binding */ setScrollBotom),
/* harmony export */   "startLoading": () => (/* binding */ startLoading),
/* harmony export */   "startLoadingChannels": () => (/* binding */ startLoadingChannels),
/* harmony export */   "startLoadingResolve": () => (/* binding */ startLoadingResolve),
/* harmony export */   "startLoadingScroll": () => (/* binding */ startLoadingScroll),
/* harmony export */   "stopLoading": () => (/* binding */ stopLoading),
/* harmony export */   "stopLoadingChannels": () => (/* binding */ stopLoadingChannels),
/* harmony export */   "stopLoadingResolve": () => (/* binding */ stopLoadingResolve),
/* harmony export */   "stopLoadingScroll": () => (/* binding */ stopLoadingScroll),
/* harmony export */   "unsetFullScreenVideo": () => (/* binding */ unsetFullScreenVideo)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const startLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[UI Component] Is Loading');
const stopLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[UI Component] Stop Loading');
const stopLoadingChannels = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[UI Component] Stop Loading Channels');
const startLoadingChannels = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[UI Component] Is Loading Channels');
const stopLoadingResolve = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[UI Component] Stop Loading Resolve');
const startLoadingResolve = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[UI Component] Satrt Loading Resolve');
const hideWorkspaces = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[UI Component] Hide workspaces');
const setBackArrow = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[UI Component] Set back arrow');
const setEmbededView = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[UI Component] Set Embeded view');
const setFullScreenVideo = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[UI Component] Set full Screen video');
const unsetFullScreenVideo = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[UI Component] Unset full Screen video');
const startLoadingScroll = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[UI Component] Start loading scroll');
const stopLoadingScroll = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[UI Component] Stop loading scroll');
const doScrollDown = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[UI Component] Do scroll down', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setScrollBotom = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[UI Component] Set scroll botom', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 4785:
/*!**************************************!*\
  !*** ./src/app/shared/ui.reducer.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "uiReducer": () => (/* binding */ uiReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _ui_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.actions */ 5299);


const initialState = {
  isLoading: false,
  isLoadingResolve: true,
  isLoadingChannels: true,
  backArrow: false,
  showWorkspaces: true,
  isEmbededView: false,
  isFullScreenVideo: false,
  isLoadingScroll: false,
  scrollDown: null,
  showScrollBottom: false
};

const _uiReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_ui_actions__WEBPACK_IMPORTED_MODULE_0__.startLoading, state => ({ ...state,
  isLoading: true
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_ui_actions__WEBPACK_IMPORTED_MODULE_0__.stopLoading, state => ({ ...state,
  isLoading: false
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_ui_actions__WEBPACK_IMPORTED_MODULE_0__.startLoadingChannels, state => ({ ...state,
  isLoadingChannels: true
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_ui_actions__WEBPACK_IMPORTED_MODULE_0__.stopLoadingChannels, state => ({ ...state,
  isLoadingChannels: false
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_ui_actions__WEBPACK_IMPORTED_MODULE_0__.stopLoadingResolve, state => ({ ...state,
  isLoadingResolve: false
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_ui_actions__WEBPACK_IMPORTED_MODULE_0__.startLoadingResolve, state => ({ ...state,
  isLoadingResolve: true
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_ui_actions__WEBPACK_IMPORTED_MODULE_0__.setEmbededView, state => ({ ...state,
  isEmbededView: true
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_ui_actions__WEBPACK_IMPORTED_MODULE_0__.hideWorkspaces, state => ({ ...state,
  showWorkspaces: false
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_ui_actions__WEBPACK_IMPORTED_MODULE_0__.setBackArrow, state => ({ ...state,
  backArrow: true
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_ui_actions__WEBPACK_IMPORTED_MODULE_0__.setEmbededView, state => ({ ...state,
  isEmbededView: true
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_ui_actions__WEBPACK_IMPORTED_MODULE_0__.setFullScreenVideo, state => ({ ...state,
  isFullScreenVideo: true
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_ui_actions__WEBPACK_IMPORTED_MODULE_0__.unsetFullScreenVideo, state => ({ ...state,
  isFullScreenVideo: false
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_ui_actions__WEBPACK_IMPORTED_MODULE_0__.doScrollDown, (state, {
  id
}) => ({ ...state,
  scrollDown: id
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_ui_actions__WEBPACK_IMPORTED_MODULE_0__.startLoadingScroll, state => ({ ...state,
  isLoadingScroll: true
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_ui_actions__WEBPACK_IMPORTED_MODULE_0__.stopLoadingScroll, state => ({ ...state,
  isLoadingScroll: false
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_ui_actions__WEBPACK_IMPORTED_MODULE_0__.setScrollBotom, (state, {
  value
}) => ({ ...state,
  showScrollBottom: value
})));

function uiReducer(state, action) {
  return _uiReducer(state, action);
}

/***/ }),

/***/ 7319:
/*!**********************************************!*\
  !*** ./src/app/store/actions/app.actions.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addMemberCountInChannel": () => (/* binding */ addMemberCountInChannel),
/* harmony export */   "addMembersChannel": () => (/* binding */ addMembersChannel),
/* harmony export */   "changeOPT": () => (/* binding */ changeOPT),
/* harmony export */   "changeOPTIn": () => (/* binding */ changeOPTIn),
/* harmony export */   "changeOPTOut": () => (/* binding */ changeOPTOut),
/* harmony export */   "cleanUsersSelected": () => (/* binding */ cleanUsersSelected),
/* harmony export */   "clearUnreadMessages": () => (/* binding */ clearUnreadMessages),
/* harmony export */   "createDirectChannel": () => (/* binding */ createDirectChannel),
/* harmony export */   "createGroupChannel": () => (/* binding */ createGroupChannel),
/* harmony export */   "deleteMemberCountInChannel": () => (/* binding */ deleteMemberCountInChannel),
/* harmony export */   "deleteMemberInChannel": () => (/* binding */ deleteMemberInChannel),
/* harmony export */   "deleteMessagesById": () => (/* binding */ deleteMessagesById),
/* harmony export */   "deleteSelectedChannel": () => (/* binding */ deleteSelectedChannel),
/* harmony export */   "deselectChannel": () => (/* binding */ deselectChannel),
/* harmony export */   "getChannel": () => (/* binding */ getChannel),
/* harmony export */   "getCurrentMessages": () => (/* binding */ getCurrentMessages),
/* harmony export */   "leaveChannel": () => (/* binding */ leaveChannel),
/* harmony export */   "loadChannels": () => (/* binding */ loadChannels),
/* harmony export */   "loadChannelsSuccess": () => (/* binding */ loadChannelsSuccess),
/* harmony export */   "loadDealers": () => (/* binding */ loadDealers),
/* harmony export */   "loadMessageSuccess": () => (/* binding */ loadMessageSuccess),
/* harmony export */   "loadWorkspaces": () => (/* binding */ loadWorkspaces),
/* harmony export */   "pinChannel": () => (/* binding */ pinChannel),
/* harmony export */   "pushChannel": () => (/* binding */ pushChannel),
/* harmony export */   "resendMessage": () => (/* binding */ resendMessage),
/* harmony export */   "searchUsers": () => (/* binding */ searchUsers),
/* harmony export */   "selectChannel": () => (/* binding */ selectChannel),
/* harmony export */   "selectDealer": () => (/* binding */ selectDealer),
/* harmony export */   "selectWorkspace": () => (/* binding */ selectWorkspace),
/* harmony export */   "sendMessage": () => (/* binding */ sendMessage),
/* harmony export */   "setCompletedMessagesChannel": () => (/* binding */ setCompletedMessagesChannel),
/* harmony export */   "setDealers": () => (/* binding */ setDealers),
/* harmony export */   "setFailedMessage": () => (/* binding */ setFailedMessage),
/* harmony export */   "setFilterValue": () => (/* binding */ setFilterValue),
/* harmony export */   "setLastMessageSocket": () => (/* binding */ setLastMessageSocket),
/* harmony export */   "setLastmessage": () => (/* binding */ setLastmessage),
/* harmony export */   "setMessageAsSending": () => (/* binding */ setMessageAsSending),
/* harmony export */   "setMessages": () => (/* binding */ setMessages),
/* harmony export */   "setNewChannel": () => (/* binding */ setNewChannel),
/* harmony export */   "setNewMessage": () => (/* binding */ setNewMessage),
/* harmony export */   "setPageChannels": () => (/* binding */ setPageChannels),
/* harmony export */   "setRepairOrder": () => (/* binding */ setRepairOrder),
/* harmony export */   "setSearchTerm": () => (/* binding */ setSearchTerm),
/* harmony export */   "setUserSelected": () => (/* binding */ setUserSelected),
/* harmony export */   "setUsers": () => (/* binding */ setUsers),
/* harmony export */   "setVideoCall": () => (/* binding */ setVideoCall),
/* harmony export */   "toggleDarkmode": () => (/* binding */ toggleDarkmode),
/* harmony export */   "toggleSidebar": () => (/* binding */ toggleSidebar),
/* harmony export */   "unsetChannel": () => (/* binding */ unsetChannel),
/* harmony export */   "unsetChannels": () => (/* binding */ unsetChannels),
/* harmony export */   "unsetChat": () => (/* binding */ unsetChat),
/* harmony export */   "unsetDealers": () => (/* binding */ unsetDealers),
/* harmony export */   "unsetMessages": () => (/* binding */ unsetMessages),
/* harmony export */   "unsetUsers": () => (/* binding */ unsetUsers)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const sendMessage = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Send Message', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setLastmessage = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Set last message', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const selectWorkspace = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Select Workspace', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadWorkspaces = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Load WorkSpace', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadChannels = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Get channels', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadChannelsSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Get channels success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const unsetChannels = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Unset channels');
const loadMessageSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Get message success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const selectChannel = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Select channel', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const toggleSidebar = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App]  Toggle Sidebar', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const changeOPTOut = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App]  Change OptOut', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const changeOPTIn = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App]  Change OptIn', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const changeOPT = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App]  Change enabled', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const toggleDarkmode = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App]  Toggle Darkmode', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deselectChannel = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Deselect channel');
const getChannel = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Get channel', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setMessages = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Set Messages', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getCurrentMessages = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Get Current Messages', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const createDirectChannel = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Create Direct Channel', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const createGroupChannel = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Create Group Channel', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const pinChannel = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Pin Channel', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setUsers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Set Users', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const unsetUsers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Unset Users');
const searchUsers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Search Users ', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setUserSelected = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] set User selected', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const cleanUsersSelected = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Delete User selected');
const unsetChat = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] unset Chat');
const loadDealers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Load Dealers');
const unsetDealers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] unset Dealers');
const selectDealer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Select dealer', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setDealers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Set Dealers', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setSearchTerm = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Set search term', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setPageChannels = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Set page channels', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setNewChannel = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Set new Channel', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const unsetMessages = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Unset messages');
const unsetChannel = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Unset channel');
const setRepairOrder = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] set Repair Order', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setFilterValue = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] set filters value', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setNewMessage = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Set new message', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setLastMessageSocket = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Set last message socket', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const pushChannel = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Push channel ', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setVideoCall = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Set Video Call room ', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setCompletedMessagesChannel = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Set completed messages channel ');
const clearUnreadMessages = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Clear unread messages ');
const setFailedMessage = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Set failed message ', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const resendMessage = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Resend message ', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setMessageAsSending = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Set Message as sending ', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteMessagesById = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Set Message as sended ', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteMemberInChannel = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] delete member in channel ', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteMemberCountInChannel = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] delete member count in channel');
const addMemberCountInChannel = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] add member count in channel');
const addMembersChannel = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Add members channel ', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const leaveChannel = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Leave channel ');
const deleteSelectedChannel = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Delete selected channel');

/***/ }),

/***/ 7039:
/*!*******************************************************!*\
  !*** ./src/app/utils/directives/directives.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectivesModule": () => (/* binding */ DirectivesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _has_permissions_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./has-permissions.directive */ 6282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



let DirectivesModule = /*#__PURE__*/(() => {
  class DirectivesModule {}

  DirectivesModule.ɵfac = function DirectivesModule_Factory(t) {
    return new (t || DirectivesModule)();
  };

  DirectivesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: DirectivesModule
  });
  DirectivesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
  });
  return DirectivesModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DirectivesModule, {
    declarations: [_has_permissions_directive__WEBPACK_IMPORTED_MODULE_0__.HasPermissionsDirective],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_has_permissions_directive__WEBPACK_IMPORTED_MODULE_0__.HasPermissionsDirective]
  });
})();

/***/ }),

/***/ 6282:
/*!***************************************************************!*\
  !*** ./src/app/utils/directives/has-permissions.directive.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HasPermissionsDirective": () => (/* binding */ HasPermissionsDirective)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 3488);




let HasPermissionsDirective = /*#__PURE__*/(() => {
  class HasPermissionsDirective {
    constructor(viewContainer, templateRef, store) {
      this.viewContainer = viewContainer;
      this.templateRef = templateRef;
      this.store = store;
    }

    ngOnInit() {
      this.store.select('chat').subscribe(({
        selectedWorkSpace
      }) => {
        this.selectedWorkSpace = selectedWorkSpace;

        if (lodash__WEBPACK_IMPORTED_MODULE_0__.intersection(this.selectedWorkSpace?.features || [], this.hasPermissions)?.length > 0) {
          if (!this.embedded) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.embedded = true;
          }
        } else {
          this.viewContainer.clear();
          this.embedded = false;
        }
      });
    }

  }

  HasPermissionsDirective.ɵfac = function HasPermissionsDirective_Factory(t) {
    return new (t || HasPermissionsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store));
  };

  HasPermissionsDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: HasPermissionsDirective,
    selectors: [["", "hasPermissions", ""]],
    inputs: {
      hasPermissions: "hasPermissions"
    }
  });
  return HasPermissionsDirective;
})();

/***/ }),

/***/ 2114:
/*!******************************************************************!*\
  !*** ./src/app/utils/http-loader-factory/http-loader-factory.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/http-loader */ 8319);

function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__.TranslateHttpLoader(http);
}

/***/ }),

/***/ 6775:
/*!****************************************************************!*\
  !*** ./src/app/utils/translate-settings/translate-settings.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "translateSettings": () => (/* binding */ translateSettings)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _http_loader_factory_http_loader_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../http-loader-factory/http-loader-factory */ 2114);



const translateSettings = () => ({
  defaultLanguage: 'en',
  loader: {
    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateLoader,
    useFactory: _http_loader_factory_http_loader_factory__WEBPACK_IMPORTED_MODULE_0__.HttpLoaderFactory,
    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient]
  }
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  apiUrl: 'https://us-central1-truvideo-messaging---stg.cloudfunctions.net',
  ordersConversationApiUrl: 'https://rc.truvideo.com/api/v3',
  ordersConversationApiUrlV2: 'https://rc.truvideo.com/api/v2',
  assetsBasePath: 'https://messaging-ui-rc.truvideo.com',
  apiFirebaseUrl: 'https://rc.truvideo.com:443/api/v2',
  messagingWsUrl: 'https://websockets-api-rc.truvideo.com/connect',
  defaultWorkspace: 'RE',
  aws: {
    s3: {
      filesUploadBucketName: 'chat-rc--storage',
      accessKeyId: 'AKIATFYZPX3UXTVWBTZS',
      secretAccessKey: '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',
      region: 'us-west-2',
      fileBytesLimit: 104857600,
      identityPoolId: 'us-west-2:3f13d74a-7716-4935-bfda-9b3dff1da861'
    }
  },
  ordersAPI: 'https://order-api-rc.truvideo.com/api/v3',
  urlHyperlinkRepairOrder: 'https://rc.truvideo.com/crud/repair-order/view/',
  textProcessorApiUrl: 'https://ml-text-processor-api-rc.truvideo.com/api/v3',
  agoraAppID: '361f473f2da348d3b0c0ca0aa17447a2',
  cryptoPswd: 'jqWuEx0m3MRlR0RC',
  urlMesaging: 'https://messaging-ui-rc.truvideo.com/'
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}

_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 2480:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map