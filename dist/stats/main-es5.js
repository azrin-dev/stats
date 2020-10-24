(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+rn0":
    /*!***********************************************!*\
      !*** ./src/app/user/login/login.component.ts ***!
      \***********************************************/

    /*! exports provided: LoginComponent */

    /***/
    function rn0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var src_app_user_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/user/services/profile-service/profile-service.service */
      "BDC7");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function LoginComponent_div_0_mat_error_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_0_mat_error_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_0_mat_error_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Login Form ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_div_0_Template_form_ngSubmit_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "alternate_email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Enter email here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LoginComponent_div_0_mat_error_17_Template, 4, 0, "mat-error", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LoginComponent_div_0_mat_error_18_Template, 4, 0, "mat-error", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "vpn_key");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Enter password here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, LoginComponent_div_0_mat_error_27_Template, 4, 0, "mat-error", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "check_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-card-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Forgot Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.get("email").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.get("email").hasError("email"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.get("password").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.loginForm.invalid);
        }
      }

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(profileService, snackBar) {
          _classCallCheck(this, LoginComponent);

          this.profileService = profileService;
          this.snackBar = snackBar;
          this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
          this.profile = {};
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            var profile = this.profileService.profile.subscribe(function (response) {
              if (response && response.id) _this.profile = response;else _this.profile = null;
            });
          }
        }, {
          key: "login",
          value: function login() {
            this.profileService.login(this.loginForm.value);
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_user_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 1,
        vars: 1,
        consts: [["class", "lm__card", 4, "ngIf"], [1, "lm__card"], [1, "lm__form"], [3, "formGroup", "ngSubmit"], ["fxLayout", "column", "fxLayoutAlign", "center center"], ["appearance", "fill", 1, "lm__form-input"], ["matInput", "", "placeholder", "Email", "formControlName", "email", "required", "", "autocomplete", "email"], ["email", ""], ["matSuffix", "", "color", "primary"], [4, "ngIf"], ["matInput", "", "type", "password", "placeholder", "Password", "formControlName", "password", "required", "", "autocomplete", "password"], ["mat-raised-button", "", "type", "submit", "color", "primary", 1, "lm__form-button", 3, "disabled"], ["mat-button", "", "routerLink", "/user/forgot-password"], ["mat-button", "", "routerLink", "/user/register"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoginComponent_div_0_Template, 40, 5, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.profile);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatHint"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardFooter"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLink"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]],
        styles: [".login__input[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.login__form-button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRztFQUNHLGdCQUFBO0VBQ0EsbUJBQUE7QUFETjtBQUtHO0VBQ0csV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFITiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW57XG5cbiAgICZfX2lucHV0e1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgIH1cblxuICAgJl9fZm9ybS1idXR0b257XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgfVxufSJdfQ== */"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            opacity: 1
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            opacity: 0.5
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('true <=> false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(7000))]) //end trigger
          ]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss'],
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              opacity: 1
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              opacity: 0.5
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('true <=> false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(7000))]) //end trigger
            ]
          }]
        }], function () {
          return [{
            type: src_app_user_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "+vyC":
    /*!***********************************************!*\
      !*** ./src/app/layout/body/body.component.ts ***!
      \***********************************************/

    /*! exports provided: BodyComponent */

    /***/
    function vyC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BodyComponent", function () {
        return BodyComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../footer/footer.component */
      "kVkw");

      var BodyComponent = /*#__PURE__*/function () {
        function BodyComponent() {
          _classCallCheck(this, BodyComponent);
        }

        _createClass(BodyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BodyComponent;
      }();

      BodyComponent.ɵfac = function BodyComponent_Factory(t) {
        return new (t || BodyComponent)();
      };

      BodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BodyComponent,
        selectors: [["app-body"]],
        decls: 3,
        vars: 0,
        consts: [["fxLayout", "column", "fxLayoutAlign", "center center", 1, "lm__page-full"]],
        template: function BodyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9ib2R5L2JvZHkuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BodyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-body',
            templateUrl: './body.component.html',
            styleUrls: ['./body.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/azrin/Documents/GitHub/stats/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "12tB":
    /*!**********************************************************************************!*\
      !*** ./src/app/charts/configs/services/charts-service/charts-service.service.ts ***!
      \**********************************************************************************/

    /*! exports provided: ChartsService */

    /***/
    function tB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartsService", function () {
        return ChartsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ChartsService = /*#__PURE__*/function () {
        function ChartsService(http) {
          _classCallCheck(this, ChartsService);

          this.http = http;
        }

        _createClass(ChartsService, [{
          key: "linear",
          value: function linear(datas) {
            return this.http.post('/api/charts/regression/linear', datas);
          }
        }]);

        return ChartsService;
      }();

      ChartsService.ɵfac = function ChartsService_Factory(t) {
        return new (t || ChartsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      ChartsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ChartsService,
        factory: ChartsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "4QdO":
    /*!***********************************************************************!*\
      !*** ./src/app/user/biz-plan/bp-setup/biz-model/biz-model.service.ts ***!
      \***********************************************************************/

    /*! exports provided: BizModelService */

    /***/
    function QdO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BizModelService", function () {
        return BizModelService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var BizModelService = /*#__PURE__*/function () {
        function BizModelService(http) {
          _classCallCheck(this, BizModelService);

          this.http = http;
          this.company = {};
          this.compSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.company);
          this.compProfile = this.compSource;
        }

        _createClass(BizModelService, [{
          key: "edit",
          value: function edit(input) {
            var _this2 = this;

            return this.http.post('api/company/profile/edit', input).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (company) {
              _this2.compSource.next(company);

              return company;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
            }));
          }
        }]);

        return BizModelService;
      }();

      BizModelService.ɵfac = function BizModelService_Factory(t) {
        return new (t || BizModelService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      BizModelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: BizModelService,
        factory: BizModelService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BizModelService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "7UCR":
    /*!*************************************!*\
      !*** ./src/app/user/user.module.ts ***!
      \*************************************/

    /*! exports provided: UserModule */

    /***/
    function UCR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserModule", function () {
        return UserModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login/login.component */
      "+rn0");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./register/register.component */
      "cEwO");
      /* harmony import */


      var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./forgot-password/forgot-password.component */
      "gr6c");
      /* harmony import */


      var _auth_register_auth_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./auth-register/auth-register.component */
      "uKxu");
      /* harmony import */


      var _services_admin_auth_guard_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./services/admin-auth-guard/admin-auth-guard.service */
      "ob1b");
      /* harmony import */


      var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./services/auth/auth.service */
      "mHbZ");
      /* harmony import */


      var _services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./services/auth-guard/auth-guard.service */
      "rSRk");
      /* harmony import */


      var _services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./services/profile-service/profile-service.service */
      "BDC7");
      /* harmony import */


      var _main_logo_main_logo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./main-logo/main-logo.component */
      "jaHj");
      /* harmony import */


      var _material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../material.module */
      "vvyD");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _user_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./user-routing.module */
      "Yu5h");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "ZEn6");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _biz_plan_bp_setup_bp_setup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./biz-plan/bp-setup/bp-setup.component */
      "ZKr8");
      /* harmony import */


      var _biz_plan_bp_setup_biz_model_biz_model_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./biz-plan/bp-setup/biz-model/biz-model.component */
      "AwR5");
      /* harmony import */


      var _biz_plan_bp_setup_biz_model_biz_model_form_biz_model_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./biz-plan/bp-setup/biz-model/biz-model-form/biz-model-form.component */
      "dy2h");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "5+WD");

      var UserModule = function UserModule() {
        _classCallCheck(this, UserModule);
      };

      UserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: UserModule
      });
      UserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function UserModule_Factory(t) {
          return new (t || UserModule)();
        },
        providers: [_services_admin_auth_guard_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AdminAuthGuardService"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"], _services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_9__["ProfileService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_13__["UserRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__["FlexLayoutModule"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_20__["DragDropModule"]], _material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserModule, {
          declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"], _auth_register_auth_register_component__WEBPACK_IMPORTED_MODULE_5__["AuthRegisterComponent"], _main_logo_main_logo_component__WEBPACK_IMPORTED_MODULE_10__["MainLogoComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"], _biz_plan_bp_setup_bp_setup_component__WEBPACK_IMPORTED_MODULE_17__["BpSetupComponent"], _biz_plan_bp_setup_biz_model_biz_model_component__WEBPACK_IMPORTED_MODULE_18__["BizModelComponent"], _biz_plan_bp_setup_biz_model_biz_model_form_biz_model_form_component__WEBPACK_IMPORTED_MODULE_19__["BizModelFormComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_13__["UserRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__["FlexLayoutModule"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_20__["DragDropModule"]],
          exports: [_material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"], _auth_register_auth_register_component__WEBPACK_IMPORTED_MODULE_5__["AuthRegisterComponent"], _main_logo_main_logo_component__WEBPACK_IMPORTED_MODULE_10__["MainLogoComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"], _biz_plan_bp_setup_bp_setup_component__WEBPACK_IMPORTED_MODULE_17__["BpSetupComponent"], _biz_plan_bp_setup_biz_model_biz_model_component__WEBPACK_IMPORTED_MODULE_18__["BizModelComponent"], _biz_plan_bp_setup_biz_model_biz_model_form_biz_model_form_component__WEBPACK_IMPORTED_MODULE_19__["BizModelFormComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_13__["UserRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__["FlexLayoutModule"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_20__["DragDropModule"]],
            exports: [_material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"]],
            providers: [_services_admin_auth_guard_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AdminAuthGuardService"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"], _services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_9__["ProfileService"]],
            bootstrap: []
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "7mGz":
    /*!*********************************************!*\
      !*** ./src/app/user/dashboard/menu-data.ts ***!
      \*********************************************/

    /*! exports provided: menuBusiness */

    /***/
    function mGz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "menuBusiness", function () {
        return menuBusiness;
      });

      var menuBusiness = [{
        name: 'Business',
        link: '',
        icon: 'important_devices'
      }, {
        name: 'Business',
        link: '',
        icon: 'present_to_all'
      }, {
        name: 'Business',
        link: '',
        icon: 'remove_from_queue'
      }, {
        name: 'Business',
        link: '',
        icon: 'airplay'
      }, {
        name: 'Business',
        link: '',
        icon: 'business'
      }, {
        name: 'Business',
        link: '',
        icon: 'business'
      }];
      /***/
    },

    /***/
    "8OIv":
    /*!******************************************************!*\
      !*** ./src/app/configurations/animations/anim-fn.ts ***!
      \******************************************************/

    /*! exports provided: xEnter, yEnter, leftEnter, imageEnter, imageEnterDrop, imageLeave, iconButtonEnter, primaryButtonClick, xMouseEnter, banner1Enter, banner2Enter, banner3Enter, banner4Enter, banner5Enter */

    /***/
    function OIv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "xEnter", function () {
        return xEnter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "yEnter", function () {
        return yEnter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "leftEnter", function () {
        return leftEnter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "imageEnter", function () {
        return imageEnter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "imageEnterDrop", function () {
        return imageEnterDrop;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "imageLeave", function () {
        return imageLeave;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "iconButtonEnter", function () {
        return iconButtonEnter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "primaryButtonClick", function () {
        return primaryButtonClick;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "xMouseEnter", function () {
        return xMouseEnter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "banner1Enter", function () {
        return banner1Enter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "banner2Enter", function () {
        return banner2Enter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "banner3Enter", function () {
        return banner3Enter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "banner4Enter", function () {
        return banner4Enter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "banner5Enter", function () {
        return banner5Enter;
      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");

      var xEnter = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.x-enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0.3,
        transform: 'translateX(-100px)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(-30, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2.5s cubic-bezier(.39,-0.41,0,1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'none'
      }))])], {
        optional: true
      })]); //

      /*   Usage  *
         animations: [
            trigger('xEnter', [
               transition(':enter', [
                  useAnimation(xEnter)
         ]) ]) ]
      */

      var yEnter = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.y-enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0.3,
        transform: 'translateY(-100px)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(-30, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2.5s cubic-bezier(.55,-0.64,.24,2)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'rotate(-10deg)'
      }))])], {
        optional: true
      })]); //

      /*   Usage  *
         animations: [
            trigger('yEnter', [
               transition(':enter', [
                  useAnimation(yEnter)
         ]) ]) ]
      */

      var leftEnter = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.left-enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0.5,
        transform: 'translateX(400px)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(30, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('5.0s cubic-bezier(.55,-0.64,.24,2)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1
      }))])], {
        optional: true
      })]); //

      /*   Usage  *
         animations: [
            trigger('leftEnter', [
               transition(':enter', [
                  useAnimation(leftEnter)
         ]) ]) ]
      */

      var imageEnter = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.image-enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0.3
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(-30, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1.0s cubic-bezier(.03,.79,.9,.38)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'scaleX(1.2)'
      }))])], {
        optional: true
      })]); //

      /*   Usage  *
         animations: [
            trigger('imageEnter', [
               transition(':enter', [
                  useAnimation(imageEnter)
         ]) ]) ]
      */

      var imageEnterDrop = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.image-enter-drop', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0.3
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(-30, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1.5s cubic-bezier(.31,-0.91,0,1.31)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'translateY(10px)'
      }))])], {
        optional: true
      })]); //

      /*   Usage  *
         animations: [
            trigger('imageEnter', [
               transition(':enter', [
                  useAnimation(imageEnter)
         ]) ]) ]
      */

      var imageLeave = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.image-enter-leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0.3
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(-30, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2s cubic-bezier(.03,.79,.9,.38)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'none'
      }))])], {
        optional: true
      })]); //

      /*   Usage  *
         trigger('imageEnter', [
               transition(':enter', [
                  useAnimation(imageEnter)
            ]) ]) ]
      */

      var iconButtonEnter = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.y-icon-enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0.3,
        transform: 'translateY(50px)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(-30, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2.5s cubic-bezier(.18,-0.47,.39,1.36)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'none'
      }))])], {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.x-button-enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0.9,
        transform: 'scale(0.9, 0.9)',
        'background-color': '#fb002d'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(-30, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2.5s cubic-bezier(.18,-0.47,.39,1.36)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'none'
      }))])])]); //

      /*   Usage  *
         animations: [
            trigger('y-mouse-enter', [
               transition(':enter', [
                  useAnimation(yMouseEnter)
         ]) ]) ]
      */

      var primaryButtonClick = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.x-button-click', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0.9,
        transform: 'scale(0.9, 0.9)',
        'background-color': '#fb002d'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(-30, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2.5s cubic-bezier(.18,-0.47,.39,1.36)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'none'
      }))])])]); //

      /*   Usage  *
         animations: [
            trigger('y-mouse-enter', [
               transition(':enter', [
                  useAnimation(yMouseEnter)
         ]) ]) ]
      */

      var xMouseEnter = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.x-mouse-enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0.3,
        transform: 'translateX(-100px)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(-30, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2.5s cubic-bezier(.55,-0.64,.24,2)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'none'
      }))])], {
        optional: true
      })]); //

      /*   Usage  *
         animations: [
            trigger('iconButtonEnter', [
               transition(':enter', [
                  useAnimation(iconButtonEnter)
         ]) ]) ]
      */

      var banner1Enter = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.banner1-enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0.3,
        transform: 'translateX(-100px)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(-30, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2s cubic-bezier(.39,-0.41,0,1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'none'
      }))])], {
        optional: true
      })]); //

      /*   Usage  *
         animations: [
            trigger('banner1Enter', [
               transition(':enter', [
                  useAnimation(banner1Enter)
         ]) ]) ]
      */

      var banner2Enter = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.banner2-enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0.3,
        transform: 'translateX(200px)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(-30, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2s cubic-bezier(.42,.14,.93,.53)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'none'
      }))])], {
        optional: true
      })]); //

      /*   Usage  *
         animations: [
            trigger('banner2Enter', [
               transition(':enter', [
                  useAnimation(banner2Enter)
         ]) ]) ]
      */

      var banner3Enter = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.banner3-enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        transform: 'translateY(-100px)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(-30, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('3s cubic-bezier(.58,-0.36,0,1.91)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'none'
      }))])], {
        optional: true
      })]); //

      /*   Usage  *
         animations: [
            trigger('banner2Enter', [
               transition(':enter', [
                  useAnimation(banner2Enter)
         ]) ]) ]
      */

      var banner4Enter = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.banner4-enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0.3,
        transform: 'translateY(100px)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(-30, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2s cubic-bezier(.58,-0.36,0,1.91)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'translateY(-40px)'
      }))])], {
        optional: true
      })]); //

      /*   Usage  *
         animations: [
            trigger('banner2Enter', [
               transition(':enter', [
                  useAnimation(banner2Enter)
         ]) ]) ]
      */

      var banner5Enter = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.banner5-enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(-30, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2s cubic-bezier(.39,-0.41,0,1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'translateY(-40px)'
      }))])], {
        optional: true
      })]); //

      /*   Usage  *
         animations: [
            trigger('banner2Enter', [
               transition(':enter', [
                  useAnimation(banner2Enter)
         ]) ]) ]
      */

      /***/
    },

    /***/
    "9Qut":
    /*!*****************************************************!*\
      !*** ./src/app/charts/sectors/sectors.component.ts ***!
      \*****************************************************/

    /*! exports provided: SectorsComponent */

    /***/
    function Qut(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SectorsComponent", function () {
        return SectorsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @swimlane/ngx-charts */
      "zQsl");
      /* harmony import */


      var _configs_clickable_clickable_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../configs/clickable/clickable.component */
      "ufwi");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var SectorsComponent = /*#__PURE__*/function () {
        function SectorsComponent(router) {
          _classCallCheck(this, SectorsComponent);

          this.router = router;
          this.view = [700, 400];
          this.results = [{
            "name": "Agriculture",
            "value": 19031
          }, {
            "name": "Construction",
            "value": 81699
          }, {
            "name": "Manufacturing",
            "value": 60021
          }, {
            "name": "Mining",
            "value": 3273
          }, {
            "name": "Services",
            "value": 520282
          }, {
            "name": "Wholesale",
            "value": 495209
          }];
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

        _createClass(SectorsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "sectorSelected",
          value: function sectorSelected(event) {
            var link = event.name.toLowerCase();
            this.router.navigate(['states', link]);
          }
        }]);

        return SectorsComponent;
      }();

      SectorsComponent.ɵfac = function SectorsComponent_Factory(t) {
        return new (t || SectorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      SectorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SectorsComponent,
        selectors: [["app-sectors"]],
        decls: 12,
        vars: 14,
        consts: [["fxLayout", "column", "fxLAyoutAlign", "center center", 1, "lm__chart-container"], [3, "view", "results", "scheme", "animations", "labels", "trimLabels", "maxLabelLength", "legend", "legendTitle", "legendPosition", "gradient", "tooltipDisabled", "arcWidth", "explodeSlices", "select"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", 1, "lm__chart-navigator"], ["mat-mini-fab", "", "color", "primary", "routerLink", "/class"], ["mat-mini-fab", "", "color", "primary", "routerLink", "/forecast/selangor/services"]],
        template: function SectorsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Establishment by Sectors");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ngx-charts-pie-chart", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function SectorsComponent_Template_ngx_charts_pie_chart_select_3_listener($event) {
              return ctx.sectorSelected($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-clickable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "keyboard_arrow_left");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "keyboard_arrow_right");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("results", ctx.results)("scheme", ctx.colorScheme)("animations", ctx.animations)("labels", ctx.labels)("trimLabels", ctx.trimLabels)("maxLabelLength", ctx.maxLabelLength)("legend", ctx.showLegend)("legendTitle", ctx.legendTitle)("legendPosition", ctx.legendPosition)("gradient", ctx.gradient)("tooltipDisabled", ctx.tooltipDisabled)("arcWidth", ctx.arcWidth)("explodeSlices", ctx.explodeSlices);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["PieChartComponent"], _configs_clickable_clickable_component__WEBPACK_IMPORTED_MODULE_4__["ClickableComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9zZWN0b3JzL3NlY3RvcnMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectorsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sectors',
            templateUrl: './sectors.component.html',
            styleUrls: ['./sectors.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AwR5":
    /*!*************************************************************************!*\
      !*** ./src/app/user/biz-plan/bp-setup/biz-model/biz-model.component.ts ***!
      \*************************************************************************/

    /*! exports provided: BizModelComponent */

    /***/
    function AwR5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BizModelComponent", function () {
        return BizModelComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "5+WD");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _biz_model_form_biz_model_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./biz-model-form/biz-model-form.component */
      "dy2h");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function BizModelComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6);
        }
      }

      function BizModelComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7);
        }
      }

      function BizModelComponent_ng_template_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Done");
        }
      }

      var BizModelComponent = /*#__PURE__*/function () {
        function BizModelComponent(fb) {
          _classCallCheck(this, BizModelComponent);

          this.fb = fb;
          this.isLinear = false;
          this.todo = ['${company.name} is ${company.type} business speciaizing in ${company.specialization} which was established on ${company.est-date}.', '${company.name} is currently ${company.selling-activities} to ${company.market}.', '${company.name} is fully owned by ${company.shareholders}.', 'Our last year total revenue was ${company.year.revenue} which generated ${company.year.pbt}.', 'We are planning to expand our company in ${expansion.timeline} to cover ${expansion.area} to bolster/upgrade our sales and service activities in that area which could generate ${expansion.sales-forecast} in additional revenue for the company with projected ROI of ${expansion.roi}.', 'We are planning to develop a new product ${npd} by ${npd.timeline} which will use ${npd.model} New Product Development Model and commercialized around ${npd.launch}.'];
          this.done = ['${company.name} is ${company.type} business speciaizing in ${company.specialization} which was established on ${company.est-date}.'];
          this.title = 'About the Company & Business Model';
        }

        _createClass(BizModelComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.firstFormGroup = this.fb.group({
              firstCtrl: ['']
            });
          }
        }, {
          key: "drop",
          value: function drop(event) {
            if (event.previousContainer === event.container) {
              Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
            } else {
              Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
              var datas = event.container.data;
              var k;
              var text = datas.map(function (data) {
                if (k = '') k = "<p>".concat(data, "</p>");else k = k + "<p>".concat(data, "</p>");
                return k;
              });
              this.text = "".concat(text);
            }
          }
        }]);

        return BizModelComponent;
      }();

      BizModelComponent.ɵfac = function BizModelComponent_Factory(t) {
        return new (t || BizModelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]));
      };

      BizModelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BizModelComponent,
        selectors: [["app-biz-model"]],
        decls: 29,
        vars: 10,
        consts: [[3, "linear"], ["stepper", ""], [1, "lm__text-title-primary"], ["fxLayout", "row", "fxLayoutAlign", "space-evenly stretch", 1, "content"], [1, "container"], ["cdkDropList", "", 1, "list", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped"], ["todoList", "cdkDropList"], ["class", "list-item", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["doneList", "cdkDropList"], ["matStepLabel", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"], ["cdkDrag", "", 1, "list-item"]],
        template: function BizModelComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-horizontal-stepper", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-biz-model-form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "titlecase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Drag suggestions below to the right box to get started");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function BizModelComponent_Template_div_cdkDropListDropped_12_listener($event) {
              return ctx.drop($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BizModelComponent_div_14_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Drop suggestion here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function BizModelComponent_Template_div_cdkDropListDropped_18_listener($event) {
              return ctx.drop($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, BizModelComponent_div_20_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, BizModelComponent_ng_template_22_Template, 1, 0, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " You are now done. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BizModelComponent_Template_button_click_27_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

              return _r0.reset();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Reset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("linear", ctx.isLinear);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 8, ctx.title));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", ctx.todo)("cdkDropListConnectedTo", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.todo);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", ctx.done)("cdkDropListConnectedTo", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.done);
          }
        },
        directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStep"], _biz_model_form_biz_model_form_component__WEBPACK_IMPORTED_MODULE_4__["BizModelFormComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStepLabel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStepperPrevious"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["TitleCasePipe"]],
        styles: [".container[_ngcontent-%COMP%] {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 20px;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.list[_ngcontent-%COMP%] {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  display: block;\n  overflow: hidden;\n}\n\n.list-item[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  color: black;\n  font-size: 14px;\n}\n\n.list-item[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n\n\n.cdk-drop-dragging[_ngcontent-%COMP%]   .cdk-drag[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.stepper-container[_ngcontent-%COMP%] {\n  width: 1200px;\n}\n\n.note[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9iaXotcGxhbi9icC1zZXR1cC9iaXotbW9kZWwvYml6LW1vZGVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBR0EsbURBQUE7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLHFIQUFBO0FBREo7O0FBS0EsMkNBQUE7O0FBRUE7RUFDSSxzREFBQTtBQUhKOztBQU9BLDJDQUFBOztBQUVBO0VBQ0ksc0RBQUE7QUFMSjs7QUFRQTtFQUNJLFVBQUE7QUFMSjs7QUFRQTtFQUNJLGFBQUE7QUFMSjs7QUFRQTtFQUNJLGFBQUE7QUFMSiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvYml6LXBsYW4vYnAtc2V0dXAvYml6LW1vZGVsL2Jpei1tb2RlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIDIwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5saXN0IHtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5saXN0LWl0ZW0ge1xuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGN1cnNvcjogbW92ZTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubGlzdC1pdGVtOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuXG4vKiBIaWdobGlnaHQgdGhlIGxpc3QgaXRlbSB0aGF0IGlzIGJlaW5nIGRyYWdnZWQuICovXG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG5cbi8qIEFuaW1hdGUgaXRlbXMgYXMgdGhleSdyZSBiZWluZyBzb3J0ZWQuICovXG5cbi5jZGstZHJvcC1kcmFnZ2luZyAuY2RrLWRyYWcge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuXG4vKiBBbmltYXRlIGFuIGl0ZW0gdGhhdCBoYXMgYmVlbiBkcm9wcGVkLiAqL1xuXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLnN0ZXBwZXItY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTIwMHB4O1xufVxuXG4ubm90ZSB7XG4gICAgcGFkZGluZzogMTBweDtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BizModelComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-biz-model',
            templateUrl: './biz-model.component.html',
            styleUrls: ['./biz-model.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
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
    },

    /***/
    "BDC7":
    /*!**************************************************************************!*\
      !*** ./src/app/user/services/profile-service/profile-service.service.ts ***!
      \**************************************************************************/

    /*! exports provided: ProfileService */

    /***/
    function BDC7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileService", function () {
        return ProfileService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _httpOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../httpOptions */
      "hX/q");
      /* harmony import */


      var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @auth0/angular-jwt */
      "Nm8O");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");

      var ProfileService = /*#__PURE__*/function () {
        function ProfileService(http, router, snackBar) {
          _classCallCheck(this, ProfileService);

          this.http = http;
          this.router = router;
          this.snackBar = snackBar;
          this.decodedToken = false;
          this.user = {};
          this.country = '';
          this.loggedIn = false;
          this.locSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.country);
          this.location = this.locSource;
          this.userSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.user);
          this.profile = this.userSource;
          this.getUserSource();
        }

        _createClass(ProfileService, [{
          key: "getLocation",
          value: function getLocation() {
            var _this3 = this;

            this.http.post('/api/user/location', {
              location: ''
            }).subscribe(function (response) {
              return _this3.locSource.next(response.country);
            }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
            }));
          }
        }, {
          key: "checkAuthToken",
          value: function checkAuthToken(authToken) {
            var _this4 = this;

            return this.http.post('/api/user/register/authenticate', {
              authToken: authToken
            }).subscribe(function (response) {
              if (response && response.id) {
                var token = response.token;
                localStorage.setItem('token', token);

                _this4.userSource.next(response);

                _this4.snackBar.open('Your registration is successful, thank you for registering', 'X', {
                  duration: 10000,
                  panelClass: 'red-theme'
                });

                _this4.router.navigate(['/profile']);
              } else {
                _this4.snackBar.open('We encountered a problem with your registration, it might be that your token have expired. Please register again.', 'X', {
                  duration: 10000,
                  panelClass: 'red-theme'
                });
              }
            }, function (error) {
              return _this4.snackBar.open('We encountered a problem with your registration, it might be that your token have expired. Please register again.', 'X', {
                duration: 10000,
                panelClass: 'red-theme'
              });
            });
          }
        }, {
          key: "getUserSource",
          value: function getUserSource() {
            var _this5 = this;

            if (_httpOptions__WEBPACK_IMPORTED_MODULE_3__["jwtToken"]) {
              this.http.get('/api/user/profile', _httpOptions__WEBPACK_IMPORTED_MODULE_3__["httpOptions"]).subscribe(function (response) {
                var user = response[0];

                if (user && user._id) {
                  _this5.userSource.next(user);
                } else _this5.userSource = null;
              }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
              }));
            } else this.userSource.next(null);
          } //

        }, {
          key: "register",
          value: function register(formValue) {
            var _this6 = this;

            this.http.post('/api/user/register', formValue).subscribe(function (response) {
              if (response && response._id) {
                _this6.userSource.next(response);

                _this6.snackBar.open('Your registration is successfull. Please check your email for authentication', 'X', {
                  duration: 10000,
                  panelClass: 'red-theme'
                });
              }
            }, function (error) {
              return _this6.snackBar.open(error, 'X', {
                duration: 10000,
                panelClass: 'red-theme'
              });
            });
          } //

        }, {
          key: "login",
          value: function login(credentials) {
            var _this7 = this;

            return this.http.post("/api/user/login", credentials).subscribe(function (response) {
              if (response && response.id) {
                _this7.userSource.next(response);

                localStorage.setItem('token', response.token);

                _this7.snackBar.open('Congratulation, your login is successful.', 'X', {
                  duration: 10000,
                  panelClass: 'lm__panel-primary'
                });

                _this7.router.navigateByUrl("/user/dashboard");
              } else _this7.snackBar.open('Your login is not successful. Please check your email or password', 'X', {
                duration: 10000,
                panelClass: 'lm__panel-accent'
              });
            }, function (error) {
              return _this7.snackBar.open('We encountered a problem with your login: error.', 'X', {
                duration: 10000,
                panelClass: 'lm__panel-warn'
              });
            });
          }
        }, {
          key: "getLoggedStatus",
          value: function getLoggedStatus() {
            var token = localStorage.getItem('token');
            var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
            var expired = helper.isTokenExpired(token);
            var user = helper.decodeToken(token);
            if (!expired && user) return {
              expired: expired,
              user: user
            };else {
              this.snackBar.open('You are not authorized to acces this page, please Login', 'X', {
                duration: 10000,
                panelClass: 'red-theme'
              });
              this.router.navigate(['']);
            }
          } //

        }, {
          key: "getCities",
          value: function getCities(value) {
            return this.http.post('/api/user/profile/autocomplete/cities', value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
            }));
          }
        }, {
          key: "getStates",
          value: function getStates(value) {
            return this.http.post('/api/user/profile/autocomplete/states', value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
            }));
          }
        }, {
          key: "getCountries",
          value: function getCountries(value) {
            return this.http.post('/api/user/profile/autocomplete/countries', value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
            }));
          }
        }, {
          key: "updateStateCountryByCity",
          value: function updateStateCountryByCity(data) {
            return this.http.post('/api/user/profile/update/autocomplete/city/state-country', data, _httpOptions__WEBPACK_IMPORTED_MODULE_3__["httpOptions"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
            }));
          }
        }, {
          key: "updateCountryByState",
          value: function updateCountryByState(state) {
            return this.http.post('/api/user/profile/update/autocomplete/state/country', state, _httpOptions__WEBPACK_IMPORTED_MODULE_3__["httpOptions"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
            }));
          }
        }, {
          key: "updateUser",
          value: function updateUser(userData) {
            return this.http.post('/api/user/profile/update', userData, _httpOptions__WEBPACK_IMPORTED_MODULE_3__["httpOptions"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
            }));
          }
        }, {
          key: "updatePhoneCode",
          value: function updatePhoneCode(userData) {
            return this.http.post('/api/user/profile/update/autocomplete/country', userData, _httpOptions__WEBPACK_IMPORTED_MODULE_3__["httpOptions"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
            }));
          }
        }, {
          key: "forgotPassword",
          value: function forgotPassword(email) {
            return this.http.post('/api/user/forgot-password', {
              email: email
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
            }));
          }
        }, {
          key: "startLinkedin",
          value: function startLinkedin() {
            return this.http.get('/api/user/linkedin').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
            }));
          }
        }, {
          key: "approvedLinkedin",
          value: function approvedLinkedin(params) {
            return this.http.post('/api/user/linkedin/approved', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem('token');
            this.userSource.next(null);
            this.router.navigate(['/']);
          }
        }]);

        return ProfileService;
      }();

      ProfileService.ɵfac = function ProfileService_Factory(t) {
        return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]));
      };

      ProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ProfileService,
        factory: ProfileService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "BFhD":
    /*!*********************************************************************************!*\
      !*** ./src/app/charts/state-sector-forecast/state-sector-forecast.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: StateSectorForecastComponent */

    /***/
    function BFhD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StateSectorForecastComponent", function () {
        return StateSectorForecastComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_charts_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/charts/data */
      "yCXG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @swimlane/ngx-charts */
      "zQsl");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function StateSectorForecastComponent_mat_option_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var state_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", state_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, state_r2), " ");
        }
      }

      function StateSectorForecastComponent_mat_option_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sector_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", sector_r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, sector_r3), " ");
        }
      }

      ;

      var StateSectorForecastComponent = /*#__PURE__*/function () {
        function StateSectorForecastComponent(activatedRoute, router) {
          _classCallCheck(this, StateSectorForecastComponent);

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
              domain: ['#DD0066', '#FF7400', '#FFCE00', '#0B9822', '#043869', '#e02f80', '#ff9339', '#ffd939', '#24b23d', '#07447f', '#E65899', '#ffaa64', '#ffe164', '#46c05c', '#0b549a', '#b50052']
            },
            view: [700, 400]
          };
          this.selectForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            sector: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
          });
        }

        _createClass(StateSectorForecastComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.activatedRoute.params.subscribe(function (response) {
              var state = response.state;
              var sector = response.sector;
              _this8.title = "".concat(state, " ").concat(sector, " sector growth");
              _this8.chartSettings.legendTitle = "".concat(sector);
              var preData;
              var initData = src_app_charts_data__WEBPACK_IMPORTED_MODULE_1__["datas"].reduce(function (acc, data) {
                if (data.state.toLowerCase() === state) {
                  var stateData = data.period;
                  var sectorData = stateData.map(function (sectors) {
                    var sectorsKey = Object.keys(sectors);
                    if (sectorsKey = sector) preData = {
                      name: sectors.year,
                      value: sectors["".concat(sectorsKey)]
                    };
                    return preData;
                  });
                  acc = sectorData;
                }

                return acc;
              }, []);
              initData.reverse();
              var results = [{
                name: state,
                series: initData
              }];
              _this8.results = results;
            });
            var states = src_app_charts_data__WEBPACK_IMPORTED_MODULE_1__["datas"].map(function (data) {
              return data.state;
            });
            var iSectors;
            var period = src_app_charts_data__WEBPACK_IMPORTED_MODULE_1__["datas"][0]['period'];

            var _period = _slicedToArray(period, 1);

            iSectors = _period[0];
            var sectorsKey = Object.keys(iSectors);
            sectorsKey.splice(0, 1);
            var options = {
              states: states,
              sectors: sectorsKey
            };
            this.options = options;
          }
        }, {
          key: "onSelect",
          value: function onSelect() {
            var value = this.selectForm.value;
            value.state = value.state.toLowerCase();
            this.router.navigate(['forecast', value.state, value.sector]);
          }
        }]);

        return StateSectorForecastComponent;
      }();

      StateSectorForecastComponent.ɵfac = function StateSectorForecastComponent_Factory(t) {
        return new (t || StateSectorForecastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      StateSectorForecastComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: StateSectorForecastComponent,
        selectors: [["app-state-sector-forecast"]],
        decls: 27,
        vars: 31,
        consts: [["fxLayout", "column", "fxLayoutAlign", "center center", 1, "lm__chart-container"], [1, "chart-container", 2, "position", "static", "display", "inline-block", "transform", "none", 3, "scheme", "view", "results", "animations", "legend", "legendTitle", "legendPosition", "gradient", "xAxis", "yAxis", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "autoScale", "timeline", "showGridLines", "roundDomains", "tooltipDisabled", "trimXAxisTicks", "trimYAxisTicks", "maxXAxisTickLength", "maxYAxisTickLength"], [3, "formGroup"], ["fxLayout", "column", 1, "lm__chart-select"], ["required", "", "formControlName", "state"], ["disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "sector", 3, "selectionChange"], ["fxLayout", "row", "fxLayoutAlign", "left center", 1, "lm__chart-navigator"], ["mat-mini-fab", "", "color", "primary", "routerLink", "/sectors"], [3, "value"]],
        template: function StateSectorForecastComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ngx-charts-line-chart", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "titlecase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "State");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-option", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Select a state");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, StateSectorForecastComponent_mat_option_15_Template, 3, 4, "mat-option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Sector");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-select", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function StateSectorForecastComponent_Template_mat_select_selectionChange_19_listener() {
              return ctx.onSelect();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-option", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Select a sector");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, StateSectorForecastComponent_mat_option_22_Template, 3, 4, "mat-option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "keyboard_arrow_left");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 27, ctx.title));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.chartSettings.colorScheme)("view", ctx.chartSettings.view)("results", ctx.results)("animations", ctx.chartSettings.animations)("legend", ctx.chartSettings.showLegend)("legendTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 29, ctx.chartSettings.legendTitle))("legendPosition", ctx.chartSettings.legendPosition)("gradient", ctx.chartSettings.gradient)("xAxis", ctx.chartSettings.showXAxis)("yAxis", ctx.chartSettings.showYAxis)("showXAxisLabel", false)("showYAxisLabel", false)("xAxisLabel", "chartSettings.xAxisLabel")("yAxisLabel", "chartSettings.yAxisLabel")("autoScale", ctx.chartSettings.autoScale)("timeline", ctx.chartSettings.timeline)("showGridLines", ctx.chartSettings.showGridLines)("roundDomains", ctx.chartSettings.roundDomains)("tooltipDisabled", ctx.chartSettings.tooltipDisabled)("trimXAxisTicks", ctx.chartSettings.trimXAxisTicks)("trimYAxisTicks", ctx.chartSettings.trimYAxisTicks)("maxXAxisTickLength", ctx.chartSettings.maxXAxisTickLength)("maxYAxisTickLength", ctx.chartSettings.maxYAxisTickLength);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.selectForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options.states);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options.sectors);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__["LineChartComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["TitleCasePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9zdGF0ZS1zZWN0b3ItZm9yZWNhc3Qvc3RhdGUtc2VjdG9yLWZvcmVjYXN0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateSectorForecastComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-state-sector-forecast',
            templateUrl: './state-sector-forecast.component.html',
            styleUrls: ['./state-sector-forecast.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "GJ8s":
    /*!***************************************************************!*\
      !*** ./src/app/charts/intro/line-chart/line-chart.service.ts ***!
      \***************************************************************/

    /*! exports provided: LineChartService */

    /***/
    function GJ8s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LineChartService", function () {
        return LineChartService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var LineChartService = /*#__PURE__*/function () {
        function LineChartService(http) {
          _classCallCheck(this, LineChartService);

          this.http = http;
          this.dataY = 0;
          this.dataSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.dataY);
          this.dataYasObs = this.dataSource;
        }

        _createClass(LineChartService, [{
          key: "startGenerator",
          value: function startGenerator() {
            var CIRCLES = 2 * Math.PI; // Parameters

            var A = 0.1; // Amplitude

            var v = 5000 * CIRCLES; // Half a circle per second

            var start = 1;
            var k = 0; // Offset

            var t = 1;
            var posY = A * Math.sin(v * t) + k;
            var Y = posY;
            this.dataSource.next(Y);
          }
        }, {
          key: "getFakeData",
          value: function getFakeData() {
            return this.http.get('https://my-json-server.typicode.com/typicode/demo/db');
          }
        }]);

        return LineChartService;
      }();

      LineChartService.ɵfac = function LineChartService_Factory(t) {
        return new (t || LineChartService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      LineChartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LineChartService,
        factory: LineChartService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LineChartService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "HODp":
    /*!*************************************************!*\
      !*** ./src/app/charts/intro/intro.component.ts ***!
      \*************************************************/

    /*! exports provided: IntroComponent */

    /***/
    function HODp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IntroComponent", function () {
        return IntroComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _mind_map_mind_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./mind-map/mind-map.component */
      "OXFO");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var IntroComponent = /*#__PURE__*/function () {
        function IntroComponent() {
          _classCallCheck(this, IntroComponent);

          this.title = 'Market Size of Establishments in Malaysia';
          this.subtitle = 'Statistical Data Analysis as of June 2019';
          this.content = 'Prepared by: Azrin Amin';
        }

        _createClass(IntroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return IntroComponent;
      }();

      IntroComponent.ɵfac = function IntroComponent_Factory(t) {
        return new (t || IntroComponent)();
      };

      IntroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: IntroComponent,
        selectors: [["app-intro"]],
        decls: 16,
        vars: 3,
        consts: [["fxLayout", "column", "fxLAyoutAlign", "center center", 1, "lm__chart-container"], [1, "lm__text-title-primary"], [1, "lm__text-subtitle"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", 1, "lm__chart-navigator"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayoutGap", "20px"], ["mat-card-avatar", "", "src", "assets/images/azrin.jpg", "alt", ""], ["mat-mini-fab", "", "color", "primary", "routerLink", "/class"]],
        template: function IntroComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-mind-map");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "keyboard_arrow_right");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subtitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.content);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _mind_map_mind_map_component__WEBPACK_IMPORTED_MODULE_2__["MindMapComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutGapDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardAvatar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9pbnRyby9pbnRyby5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-intro',
            templateUrl: './intro.component.html',
            styleUrls: ['./intro.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "JzA9":
    /*!**********************************************!*\
      !*** ./src/app/user/dashboard/menus-data.ts ***!
      \**********************************************/

    /*! exports provided: menu01 */

    /***/
    function JzA9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "menu01", function () {
        return menu01;
      });
      /* harmony import */


      var _menu_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./menu-data */
      "7mGz");

      var menu01 = {
        name: 'Main Menu',
        menus: _menu_data__WEBPACK_IMPORTED_MODULE_0__["menuBusiness"]
      };
      /***/
    },

    /***/
    "OXFO":
    /*!*************************************************************!*\
      !*** ./src/app/charts/intro/mind-map/mind-map.component.ts ***!
      \*************************************************************/

    /*! exports provided: MindMapComponent */

    /***/
    function OXFO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MindMapComponent", function () {
        return MindMapComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _swimlane_ngx_graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @swimlane/ngx-graph */
      "L/je");
      /* harmony import */


      var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @swimlane/ngx-charts */
      "zQsl");

      function MindMapComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "g", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tooltipPlacement", "top")("tooltipType", "tooltip")("tooltipTitle", node_r2.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", node_r2.dimension.width)("height", node_r2.dimension.height)("fill", node_r2.data.color);
        }
      }

      var _c0 = function _c0() {
        return [600, 300];
      };

      var _c1 = function _c1() {
        return {
          id: "a",
          source: "1",
          target: "2"
        };
      };

      var _c2 = function _c2() {
        return {
          id: "b",
          source: "1",
          target: "3"
        };
      };

      var _c3 = function _c3() {
        return {
          id: "c",
          source: "3",
          target: "4"
        };
      };

      var _c4 = function _c4() {
        return {
          id: "d",
          source: "3",
          target: "5"
        };
      };

      var _c5 = function _c5() {
        return {
          id: "e",
          source: "4",
          target: "5"
        };
      };

      var _c6 = function _c6() {
        return {
          id: "f",
          source: "2",
          target: "6"
        };
      };

      var _c7 = function _c7(a0, a1, a2, a3, a4, a5) {
        return [a0, a1, a2, a3, a4, a5];
      };

      var _c8 = function _c8() {
        return {
          id: "1",
          label: "Node A"
        };
      };

      var _c9 = function _c9() {
        return {
          id: "2",
          label: "Node B"
        };
      };

      var _c10 = function _c10() {
        return {
          id: "3",
          label: "Node C"
        };
      };

      var _c11 = function _c11() {
        return {
          id: "4",
          label: "Node D"
        };
      };

      var _c12 = function _c12() {
        return {
          id: "5",
          label: "Node E"
        };
      };

      var _c13 = function _c13() {
        return {
          id: "6",
          label: "Node F"
        };
      };

      var MindMapComponent = /*#__PURE__*/function () {
        function MindMapComponent() {
          _classCallCheck(this, MindMapComponent);

          this.node = {
            data: {
              color: ['#DD0066', '#FF7400', '#FFCE00', '#0B9822', '#043869', '#e02f80', '#ff9339', '#ffd939', '#24b23d', '#07447f', '#E65899', '#ffaa64', '#ffe164', '#46c05c', '#0b549a', '#b50052']
            }
          };
        }

        _createClass(MindMapComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MindMapComponent;
      }();

      MindMapComponent.ɵfac = function MindMapComponent_Factory(t) {
        return new (t || MindMapComponent)();
      };

      MindMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MindMapComponent,
        selectors: [["app-mind-map"]],
        decls: 3,
        vars: 30,
        consts: [["layout", "dagre", 3, "view", "links", "nodes"], ["nodeTemplate", ""], ["ngx-tooltip", "", 1, "node", 3, "tooltipPlacement", "tooltipType", "tooltipTitle"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"]],
        template: function MindMapComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-graph", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MindMapComponent_ng_template_1_Template, 4, 6, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("links", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction6"](10, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c3), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c5), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c6)))("nodes", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction6"](23, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c9), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c11), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c13)));
          }
        },
        directives: [_swimlane_ngx_graph__WEBPACK_IMPORTED_MODULE_1__["GraphComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9pbnRyby9taW5kLW1hcC9taW5kLW1hcC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MindMapComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-mind-map',
            templateUrl: './mind-map.component.html',
            styleUrls: ['./mind-map.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Qfsr":
    /*!*****************************************************************************!*\
      !*** ./src/app/charts/states-construction/states-construction.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: StatesConstructionComponent */

    /***/
    function Qfsr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatesConstructionComponent", function () {
        return StatesConstructionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @swimlane/ngx-charts */
      "zQsl");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var StatesConstructionComponent = /*#__PURE__*/function () {
        function StatesConstructionComponent(router) {
          _classCallCheck(this, StatesConstructionComponent);

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
            domain: ['#DD0066', '#FF7400', '#FFCE00', '#0B9822', '#043869', '#e02f80', '#ff9339', '#ffd939', '#24b23d', '#07447f', '#E65899', '#ffaa64', '#ffe164', '#46c05c', '#0b549a', '#b50052']
          };
          this.single = [{
            "name": "Johor",
            "value": 9516
          }, {
            "name": "Kedah",
            "value": 3719
          }, {
            "name": "Kelantan",
            "value": 1604
          }, {
            "name": "Melaka",
            "value": 3719
          }, {
            "name": "N Sembilan",
            "value": 4144
          }, {
            "name": "Pahang",
            "value": 3353
          }, {
            "name": "Perak",
            "value": 5610
          }, {
            "name": "Perlis",
            "value": 1179
          }, {
            "name": "P Pinang",
            "value": 4799
          }, {
            "name": "Sabah",
            "value": 6809
          }, {
            "name": "Sarawak",
            "value": 6500
          }, {
            "name": "Selangor",
            "value": 16878
          }, {
            "name": "Terengganu",
            "value": 3288
          }, {
            "name": "Kuala Lumpur",
            "value": 10804
          }, {
            "name": "Labuan",
            "value": 277
          }, {
            "name": "Putrajaya",
            "value": 40
          }];
          this.showDataLabel = false;
        }

        _createClass(StatesConstructionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggle",
          value: function toggle() {
            this.showDataLabel = !this.showDataLabel;

            if (this.showDataLabel) {
              this.showDataLabel = true;
            } else {
              this.showDataLabel = false;
            }
          }
        }, {
          key: "onStateSelect",
          value: function onStateSelect(event) {
            var stateSelected = event.name.toLowerCase().split(' ').join('-');
            this.router.navigate(['history', stateSelected, this.legendTitle]);
          }
        }]);

        return StatesConstructionComponent;
      }();

      StatesConstructionComponent.ɵfac = function StatesConstructionComponent_Factory(t) {
        return new (t || StatesConstructionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      StatesConstructionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: StatesConstructionComponent,
        selectors: [["app-states-construction"]],
        decls: 15,
        vars: 15,
        consts: [["fxLayout", "column", "fxLayoutAlign", "center center", 1, "lm__chart-container"], [3, "view", "scheme", "results", "gradient", "xAxis", "yAxis", "legend", "legendTitle", "showXAxisLabel", "showYAxisLabel", "yAxisLabel", "showDataLabel", "select"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "lm__chart-control"], ["color", "primary", 3, "checked", "change"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", 1, "lm__chart-navigator"], ["mat-mini-fab", "", "color", "primary", "routerLink", "/sectors"]],
        template: function StatesConstructionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Construction Establishments by State");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ngx-charts-bar-horizontal", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function StatesConstructionComponent_Template_ngx_charts_bar_horizontal_select_3_listener($event) {
              return ctx.onStateSelect($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "titlecase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-slide-toggle", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function StatesConstructionComponent_Template_mat_slide_toggle_change_6_listener() {
              return ctx.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Show Data Label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "keyboard_arrow_left");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "keyboard_arrow_right");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("scheme", ctx.colorScheme)("results", ctx.single)("gradient", ctx.gradient)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("legend", ctx.showLegend)("legendTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 13, ctx.legendTitle))("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("yAxisLabel", ctx.yAxisLabel)("showDataLabel", ctx.showDataLabel);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.showDataLabel);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["BarHorizontalComponent"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["TitleCasePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9zdGF0ZXMtY29uc3RydWN0aW9uL3N0YXRlcy1jb25zdHJ1Y3Rpb24uY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatesConstructionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-states-construction',
            templateUrl: './states-construction.component.html',
            styleUrls: ['./states-construction.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "RqjG":
    /*!*******************************************************************************!*\
      !*** ./src/app/charts/state-sector-history/state-sector-history.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: StateSectorHistoryComponent */

    /***/
    function RqjG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StateSectorHistoryComponent", function () {
        return StateSectorHistoryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../data */
      "yCXG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @swimlane/ngx-charts */
      "zQsl");

      function StateSectorHistoryComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ngx-charts-bar-vertical", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 13, ctx_r0.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx_r0.view)("scheme", ctx_r0.colorScheme)("results", ctx_r0.single)("gradient", ctx_r0.gradient)("xAxis", ctx_r0.showXAxis)("yAxis", ctx_r0.showYAxis)("legend", ctx_r0.showLegend)("legendTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 15, ctx_r0.legendTitle))("showXAxisLabel", ctx_r0.showXAxisLabel)("showYAxisLabel", ctx_r0.showYAxisLabel)("yAxisLabel", ctx_r0.yAxisLabel)("showDataLabel", ctx_r0.showDataLabel);
        }
      }

      ;

      var StateSectorHistoryComponent = /*#__PURE__*/function () {
        function StateSectorHistoryComponent(activatedRoute) {
          _classCallCheck(this, StateSectorHistoryComponent);

          this.activatedRoute = activatedRoute;
          this.view = [700, 400]; // options

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
            domain: ['#DD0066', '#FF7400', '#FFCE00', '#0B9822', '#043869', '#e02f80', '#ff9339', '#ffd939', '#24b23d', '#07447f', '#E65899', '#ffaa64', '#ffe164', '#46c05c', '#0b549a', '#b50052']
          };
          this.showDataLabel = false;
          this.datas = _data__WEBPACK_IMPORTED_MODULE_1__["datas"];
        }

        _createClass(StateSectorHistoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.activatedRoute.params.subscribe(function (response) {
              var state = response.state;
              var sector = response.sector;
              _this9.title = "".concat(sector, " Establishment History for the State of ").concat(state);
              _this9.legendTitle = sector;
              var datas = _this9.datas;
              var stateDatas = datas.reduce(function (acc, data) {
                if (data.state.toLowerCase() === state) acc = data.period;
                return acc;
              }, {});
              var dataAcc = [];
              var data = stateDatas.reduce(function (acc, data) {
                if (data[sector]) dataAcc.push({
                  name: "".concat(data.year),
                  value: data[sector]
                });
                acc = dataAcc;
                return acc;
              }, []);
              _this9.single = data.reverse();
            });
          }
        }, {
          key: "toggle",
          value: function toggle() {
            this.showDataLabel = !this.showDataLabel;

            if (this.showDataLabel) {
              this.showDataLabel = true;
            } else {
              this.showDataLabel = false;
            }
          }
        }]);

        return StateSectorHistoryComponent;
      }();

      StateSectorHistoryComponent.ɵfac = function StateSectorHistoryComponent_Factory(t) {
        return new (t || StateSectorHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
      };

      StateSectorHistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: StateSectorHistoryComponent,
        selectors: [["app-state-sector-history"]],
        decls: 11,
        vars: 2,
        consts: [["class", "lm__chart-container", "fxLayout", "column", "fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "lm__chart-control"], ["color", "primary", 3, "checked", "change"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", 1, "lm__chart-navigator"], ["mat-mini-fab", "", "color", "primary", "routerLink", "/sectors"], ["mat-mini-fab", "", "color", "primary", "routerLink", "/forecast/selangor/services"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "lm__chart-container"], [3, "view", "scheme", "results", "gradient", "xAxis", "yAxis", "legend", "legendTitle", "showXAxisLabel", "showYAxisLabel", "yAxisLabel", "showDataLabel"]],
        template: function StateSectorHistoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StateSectorHistoryComponent_div_0_Template, 6, 17, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-slide-toggle", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function StateSectorHistoryComponent_Template_mat_slide_toggle_change_2_listener() {
              return ctx.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Show Data Label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "keyboard_arrow_left");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "keyboard_arrow_right");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.single);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.showDataLabel);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_8__["BarVerticalComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9zdGF0ZS1zZWN0b3ItaGlzdG9yeS9zdGF0ZS1zZWN0b3ItaGlzdG9yeS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateSectorHistoryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-state-sector-history',
            templateUrl: './state-sector-history.component.html',
            styleUrls: ['./state-sector-history.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./nav/nav.component */
      "izVM");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'stats';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
          }
        },
        directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Yu5h":
    /*!*********************************************!*\
      !*** ./src/app/user/user-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: userRoutes, UserRoutingModule */

    /***/
    function Yu5h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "userRoutes", function () {
        return userRoutes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function () {
        return UserRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login/login.component */
      "+rn0");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./register/register.component */
      "cEwO");
      /* harmony import */


      var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./forgot-password/forgot-password.component */
      "gr6c");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "ZEn6");
      /* harmony import */


      var _biz_plan_bp_setup_bp_setup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./biz-plan/bp-setup/bp-setup.component */
      "ZKr8");

      var userRoutes = [{
        path: 'user',
        children: [{
          path: 'login',
          component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
        }, {
          path: 'register',
          component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
        }, {
          path: 'forgot-password',
          component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordComponent"]
        }, {
          path: 'dashboard',
          component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]
        }, {
          path: 'business/plan',
          component: _biz_plan_bp_setup_bp_setup_component__WEBPACK_IMPORTED_MODULE_7__["BpSetupComponent"]
        }]
      }];

      var UserRoutingModule = function UserRoutingModule() {
        _classCallCheck(this, UserRoutingModule);
      };

      UserRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: UserRoutingModule
      });
      UserRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function UserRoutingModule_Factory(t) {
          return new (t || UserRoutingModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(userRoutes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserRoutingModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(userRoutes)]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./nav/nav.component */
      "izVM");
      /* harmony import */


      var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @swimlane/ngx-charts */
      "zQsl");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _charts_sectors_sectors_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./charts/sectors/sectors.component */
      "9Qut");
      /* harmony import */


      var _charts_class_class_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./charts/class/class.component */
      "yUbk");
      /* harmony import */


      var _charts_intro_intro_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./charts/intro/intro.component */
      "HODp");
      /* harmony import */


      var _charts_states_construction_states_construction_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./charts/states-construction/states-construction.component */
      "Qfsr");
      /* harmony import */


      var _charts_states_manufacturing_states_manufacturing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./charts/states-manufacturing/states-manufacturing.component */
      "cG3l");
      /* harmony import */


      var _layout_body_body_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./layout/body/body.component */
      "+vyC");
      /* harmony import */


      var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./layout/footer/footer.component */
      "kVkw");
      /* harmony import */


      var _charts_state_sector_history_state_sector_history_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./charts/state-sector-history/state-sector-history.component */
      "RqjG");
      /* harmony import */


      var _charts_states_sector_states_sector_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./charts/states-sector/states-sector.component */
      "s6hb");
      /* harmony import */


      var _charts_intro_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./charts/intro/line-chart/line-chart.component */
      "vu8l");
      /* harmony import */


      var _charts_intro_line_chart_line_chart_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./charts/intro/line-chart/line-chart.service */
      "GJ8s");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _swimlane_ngx_graph__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @swimlane/ngx-graph */
      "L/je");
      /* harmony import */


      var _charts_intro_mind_map_mind_map_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./charts/intro/mind-map/mind-map.component */
      "OXFO");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "5+WD");
      /* harmony import */


      var _material_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./material.module */
      "vvyD");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _user_user_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./user/user.module */
      "7UCR");
      /* harmony import */


      var _charts_configs_clickable_clickable_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./charts/configs/clickable/clickable.component */
      "ufwi");
      /* harmony import */


      var _charts_state_sector_forecast_state_sector_forecast_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./charts/state-sector-forecast/state-sector-forecast.component */
      "BFhD");
      /* harmony import */


      var _charts_regression_regression_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./charts/regression/regression.component */
      "cvbC");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_charts_intro_line_chart_line_chart_service__WEBPACK_IMPORTED_MODULE_17__["LineChartService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__["NgxChartsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"], _swimlane_ngx_graph__WEBPACK_IMPORTED_MODULE_20__["NgxGraphModule"], _material_module__WEBPACK_IMPORTED_MODULE_23__["MaterialModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_22__["DragDropModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"], _user_user_module__WEBPACK_IMPORTED_MODULE_26__["UserModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"], _charts_sectors_sectors_component__WEBPACK_IMPORTED_MODULE_7__["SectorsComponent"], _charts_class_class_component__WEBPACK_IMPORTED_MODULE_8__["ClassComponent"], _charts_intro_intro_component__WEBPACK_IMPORTED_MODULE_9__["IntroComponent"], _charts_states_construction_states_construction_component__WEBPACK_IMPORTED_MODULE_10__["StatesConstructionComponent"], _charts_states_manufacturing_states_manufacturing_component__WEBPACK_IMPORTED_MODULE_11__["StatesManufacturingComponent"], _layout_body_body_component__WEBPACK_IMPORTED_MODULE_12__["BodyComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"], _charts_state_sector_history_state_sector_history_component__WEBPACK_IMPORTED_MODULE_14__["StateSectorHistoryComponent"], _charts_states_sector_states_sector_component__WEBPACK_IMPORTED_MODULE_15__["StatesSectorComponent"], _charts_intro_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_16__["LineChartComponent"], _charts_intro_mind_map_mind_map_component__WEBPACK_IMPORTED_MODULE_21__["MindMapComponent"], _charts_configs_clickable_clickable_component__WEBPACK_IMPORTED_MODULE_27__["ClickableComponent"], _charts_state_sector_forecast_state_sector_forecast_component__WEBPACK_IMPORTED_MODULE_28__["StateSectorForecastComponent"], _charts_regression_regression_component__WEBPACK_IMPORTED_MODULE_29__["RegressionComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__["NgxChartsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"], _swimlane_ngx_graph__WEBPACK_IMPORTED_MODULE_20__["NgxGraphModule"], _material_module__WEBPACK_IMPORTED_MODULE_23__["MaterialModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_22__["DragDropModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"], _user_user_module__WEBPACK_IMPORTED_MODULE_26__["UserModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"], _charts_sectors_sectors_component__WEBPACK_IMPORTED_MODULE_7__["SectorsComponent"], _charts_class_class_component__WEBPACK_IMPORTED_MODULE_8__["ClassComponent"], _charts_intro_intro_component__WEBPACK_IMPORTED_MODULE_9__["IntroComponent"], _charts_states_construction_states_construction_component__WEBPACK_IMPORTED_MODULE_10__["StatesConstructionComponent"], _charts_states_manufacturing_states_manufacturing_component__WEBPACK_IMPORTED_MODULE_11__["StatesManufacturingComponent"], _layout_body_body_component__WEBPACK_IMPORTED_MODULE_12__["BodyComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"], _charts_state_sector_history_state_sector_history_component__WEBPACK_IMPORTED_MODULE_14__["StateSectorHistoryComponent"], _charts_states_sector_states_sector_component__WEBPACK_IMPORTED_MODULE_15__["StatesSectorComponent"], _charts_intro_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_16__["LineChartComponent"], _charts_intro_mind_map_mind_map_component__WEBPACK_IMPORTED_MODULE_21__["MindMapComponent"], _charts_configs_clickable_clickable_component__WEBPACK_IMPORTED_MODULE_27__["ClickableComponent"], _charts_state_sector_forecast_state_sector_forecast_component__WEBPACK_IMPORTED_MODULE_28__["StateSectorForecastComponent"], _charts_regression_regression_component__WEBPACK_IMPORTED_MODULE_29__["RegressionComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__["NgxChartsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"], _swimlane_ngx_graph__WEBPACK_IMPORTED_MODULE_20__["NgxGraphModule"], _material_module__WEBPACK_IMPORTED_MODULE_23__["MaterialModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_22__["DragDropModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"], _user_user_module__WEBPACK_IMPORTED_MODULE_26__["UserModule"]],
            providers: [_charts_intro_line_chart_line_chart_service__WEBPACK_IMPORTED_MODULE_17__["LineChartService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZEn6":
    /*!*******************************************************!*\
      !*** ./src/app/user/dashboard/dashboard.component.ts ***!
      \*******************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function ZEn6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _menus_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./menus-data */
      "JzA9");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function DashboardComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menu_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", menu_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", menu_r1.icon, " ");
        }
      }

      ;
      ;

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent() {
          _classCallCheck(this, DashboardComponent);

          this.menuGrp1 = _menus_data__WEBPACK_IMPORTED_MODULE_1__["menu01"];
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || DashboardComponent)();
      };

      DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DashboardComponent,
        selectors: [["app-dashboard"]],
        decls: 5,
        vars: 2,
        consts: [[1, "lc__dash-menu-item-title"], [1, "lc__dash-menu-item"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-around center", 1, "lc__dash-menu-icons"], ["class", "lc__dash-menu-icon", 3, "matTooltip", 4, "ngFor", "ngForOf"], [1, "lc__dash-menu-icon", 3, "matTooltip"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_div_4_Template, 3, 2, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.menuGrp1.name, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuGrp1.menus);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "ZKr8":
    /*!**************************************************************!*\
      !*** ./src/app/user/biz-plan/bp-setup/bp-setup.component.ts ***!
      \**************************************************************/

    /*! exports provided: BpSetupComponent */

    /***/
    function ZKr8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BpSetupComponent", function () {
        return BpSetupComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _biz_model_biz_model_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./biz-model/biz-model.component */
      "AwR5");

      var BpSetupComponent = /*#__PURE__*/function () {
        function BpSetupComponent() {
          _classCallCheck(this, BpSetupComponent);
        }

        _createClass(BpSetupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BpSetupComponent;
      }();

      BpSetupComponent.ɵfac = function BpSetupComponent_Factory(t) {
        return new (t || BpSetupComponent)();
      };

      BpSetupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BpSetupComponent,
        selectors: [["app-bp-setup"]],
        decls: 1,
        vars: 0,
        template: function BpSetupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-biz-model");
          }
        },
        directives: [_biz_model_biz_model_component__WEBPACK_IMPORTED_MODULE_1__["BizModelComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvYml6LXBsYW4vYnAtc2V0dXAvYnAtc2V0dXAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BpSetupComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-bp-setup',
            templateUrl: './bp-setup.component.html',
            styleUrls: ['./bp-setup.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "cEwO":
    /*!*****************************************************!*\
      !*** ./src/app/user/register/register.component.ts ***!
      \*****************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function cEwO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_user_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/user/services/profile-service/profile-service.service */
      "BDC7");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function RegisterComponent_mat_error_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_mat_error_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_mat_error_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_mat_error_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Minimum password is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " characters. Now you entered only ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.registerForm.get("password").errors.minlength.requiredLength);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.registerForm.get("password").errors.minlength.actualLength);
        }
      }

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(profileService, snackBar) {
          _classCallCheck(this, RegisterComponent);

          this.profileService = profileService;
          this.snackBar = snackBar;
          this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)])
          });
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "register",
          value: function register() {
            this.profileService.register(this.registerForm.value);
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_user_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]));
      };

      RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RegisterComponent,
        selectors: [["app-register"]],
        decls: 38,
        vars: 6,
        consts: [["fxLayout", "column", "fxLAyoutAlign", "center center", 1, "lm__card"], [3, "formGroup", "ngSubmit"], ["fxLayout", "column", "fxLAyoutAlign", "center center"], ["appearance", "fill"], ["matInput", "", "placeholder", "Email", "formControlName", "email", "required", "", "autocomplete", "email"], ["email", ""], ["matSuffix", "", "color", "primary"], [4, "ngIf"], ["matInput", "", "type", "password", "placeholder", "Password", "formControlName", "password", "required", "", "autocomplete", "password"], ["mat-raised-button", "", "type", "submit", "color", "primary", 1, "register__form-button", 3, "disabled"], ["mat-button", "", "routerLink", "/user/login"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Register Form ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_5_listener() {
              return ctx.register();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "alternate_email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Enter email here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RegisterComponent_mat_error_16_Template, 4, 0, "mat-error", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RegisterComponent_mat_error_17_Template, 4, 0, "mat-error", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "vpn_key");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Enter password here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RegisterComponent_mat_error_26_Template, 4, 0, "mat-error", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, RegisterComponent_mat_error_27_Template, 7, 2, "mat-error", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "check_circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Register ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "If you have already registered:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("email").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("email").hasError("email"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("password").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("password").hasError("minlength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.registerForm.invalid);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatHint"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDivider"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLink"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]],
        styles: [".register__input[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.register__form-button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRztFQUNHLGdCQUFBO0VBQ0EsbUJBQUE7QUFETjtBQUtHO0VBQ0csV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFITiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXJ7XG5cbiAgICZfX2lucHV0e1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgIH1cblxuICAgJl9fZm9ybS1idXR0b257XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgfVxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_user_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "cG3l":
    /*!*******************************************************************************!*\
      !*** ./src/app/charts/states-manufacturing/states-manufacturing.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: StatesManufacturingComponent */

    /***/
    function cG3l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatesManufacturingComponent", function () {
        return StatesManufacturingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @swimlane/ngx-charts */
      "zQsl");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var StatesManufacturingComponent = /*#__PURE__*/function () {
        function StatesManufacturingComponent() {
          _classCallCheck(this, StatesManufacturingComponent);

          this.title = 'Manufacturing Establishments by State';
          this.view = [700, 400]; // options

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
            domain: ['#DD0066', '#FF7400', '#FFCE00', '#0B9822', '#043869', '#e02f80', '#ff9339', '#ffd939', '#24b23d', '#07447f', '#E65899', '#ffaa64', '#ffe164', '#46c05c', '#0b549a', '#b50052']
          };
          this.single = [{
            "name": "Johor",
            "value": 9483
          }, {
            "name": "Kedah",
            "value": 3675
          }, {
            "name": "Kelantan",
            "value": 1956
          }, {
            "name": "Melaka",
            "value": 1629
          }, {
            "name": "N Sembilan",
            "value": 2112
          }, {
            "name": "Pahang",
            "value": 1958
          }, {
            "name": "Perak",
            "value": 4642
          }, {
            "name": "Perlis",
            "value": 425
          }, {
            "name": "P Pinang",
            "value": 5269
          }, {
            "name": "Sabah",
            "value": 2183
          }, {
            "name": "Sarawak",
            "value": 3579
          }, {
            "name": "Selangor",
            "value": 13915
          }, {
            "name": "Terengganu",
            "value": 2119
          }, {
            "name": "Kuala Lumpur",
            "value": 6918
          }, {
            "name": "Labuan",
            "value": 137
          }, {
            "name": "Putrajaya",
            "value": 21
          }];
          this.showDataLabel = false;
        }

        _createClass(StatesManufacturingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggle",
          value: function toggle() {
            this.showDataLabel = !this.showDataLabel;

            if (this.showDataLabel) {
              this.showDataLabel = true;
            } else {
              this.showDataLabel = false;
            }
          }
        }]);

        return StatesManufacturingComponent;
      }();

      StatesManufacturingComponent.ɵfac = function StatesManufacturingComponent_Factory(t) {
        return new (t || StatesManufacturingComponent)();
      };

      StatesManufacturingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: StatesManufacturingComponent,
        selectors: [["app-states-manufacturing"]],
        decls: 14,
        vars: 14,
        consts: [["fxLayout", "column", "fxLayoutAlign", "center center", 1, "lm__chart-container"], [3, "view", "scheme", "results", "gradient", "xAxis", "yAxis", "legend", "legendTitle", "showXAxisLabel", "showYAxisLabel", "yAxisLabel", "showDataLabel"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "lm__chart-control"], ["color", "primary", 3, "checked", "change"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", 1, "lm__chart-navigator"], ["mat-mini-fab", "", "color", "primary", "routerLink", "/sectors"]],
        template: function StatesManufacturingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ngx-charts-bar-horizontal", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-slide-toggle", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function StatesManufacturingComponent_Template_mat_slide_toggle_change_5_listener() {
              return ctx.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Show Data Label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "keyboard_arrow_left");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "keyboard_arrow_right");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("scheme", ctx.colorScheme)("results", ctx.single)("gradient", ctx.gradient)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("legend", ctx.showLegend)("legendTitle", ctx.legendTitle)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("yAxisLabel", ctx.yAxisLabel)("showDataLabel", ctx.showDataLabel);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.showDataLabel);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["BarHorizontalComponent"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9zdGF0ZXMtbWFudWZhY3R1cmluZy9zdGF0ZXMtbWFudWZhY3R1cmluZy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatesManufacturingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-states-manufacturing',
            templateUrl: './states-manufacturing.component.html',
            styleUrls: ['./states-manufacturing.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "cvbC":
    /*!***********************************************************!*\
      !*** ./src/app/charts/regression/regression.component.ts ***!
      \***********************************************************/

    /*! exports provided: RegressionComponent */

    /***/
    function cvbC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegressionComponent", function () {
        return RegressionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _configs_services_charts_service_charts_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../configs/services/charts-service/charts-service.service */
      "12tB");
      /* harmony import */


      var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @swimlane/ngx-charts */
      "zQsl");

      var RegressionComponent = /*#__PURE__*/function () {
        function RegressionComponent(chartsService) {
          _classCallCheck(this, RegressionComponent);

          this.chartsService = chartsService;
          this.view = [700, 400];
          this.colorScheme = {
            name: 'cool',
            selectable: true,
            group: 'Ordinal',
            domain: ['#DD0066', '#FF7400', '#FFCE00', '#0B9822', '#043869']
          };
          this.gradient = false;
          this.results = "plotData";
          this.animations = "animations";
          this.legend = false;
          this.legendTitle = "legendTitle";
          this.legendPosition = "right";
          this.xAxis = false;
          this.showXAxis = true;
          this.yAxis = true;
          this.showYAxis = true;
          this.showXAxisLabel = false;
          this.showYAxisLabel = false;
          this.xAxisLabel = 'angle';
          this.yAxisLabel = 'radius';
          this.autoScale = true;
          this.showGridLines = true;
          this.tooltipDisabled = true;
          this.showSeriesOnHover = true;
          this.trimYAxisTicks = true;
          this.activate = true;
          this.mathText = '3 - 1.5*sin(x) + cos(2*x) - 1.5*abs(cos(x))';
        }

        _createClass(RegressionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            var y = [56848, 56921, 53656, 54569].reverse();
            var x = [2019, 2018, 2017, 2016].reverse();
            var datas = {
              x: x,
              y: y
            };
            this.chartsService.linear(datas).subscribe(function (response) {
              console.log(response);
              var linearRegression = response.regression; // regression: "f(x) = 1010.2 * x - 1982580"

              var linearScore = response.score; // score: { r: 0.7935199383339885, r2: 0.6296738925335769}

              var linearSlope = response.slope; // slope: 1010.2

              var linearIntercept = response.intercept; // intercept: -1982580

              var twoPi = 2 * Math.PI;
              var length = 25;
              var series = Array.apply(null, {
                length: length
              }).map(function (d, i) {
                var x = i / (length - 1);
                var t = x * twoPi;
                return {
                  name: ~~(x * 360),
                  value: _this10.plotData
                };
              });
              _this10.plotData = series;
            });
          }
        }, {
          key: "select",
          value: function select(event) {
            console.log(event);
          }
        }]);

        return RegressionComponent;
      }();

      RegressionComponent.ɵfac = function RegressionComponent_Factory(t) {
        return new (t || RegressionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_configs_services_charts_service_charts_service_service__WEBPACK_IMPORTED_MODULE_1__["ChartsService"]));
      };

      RegressionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RegressionComponent,
        selectors: [["app-regression"]],
        decls: 4,
        vars: 39,
        consts: [[1, "chart-container", 2, "position", "static", "display", "inline-block", "transform", "none", 3, "view", "results", "animations", "legend", "legendTitle", "legendPosition", "gradient", "xAxis", "yAxis", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "autoScale", "timeline", "showGridLines", "rangeFillOpacity", "tooltipDisabled", "trimXAxisTicks", "trimYAxisTicks", "select"], [1, "chart-container", 2, "position", "static", "display", "inline-block", "transform", "none", 3, "view", "results", "animations", "legend", "legendTitle", "legendPosition", "gradient", "xAxis", "yAxis", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "autoScale", "showGridLines", "rangeFillOpacity", "tooltipDisabled", "showSeriesOnHover", "trimYAxisTicks"]],
        template: function RegressionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Equation Charts ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-charts-line-chart", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function RegressionComponent_Template_ngx_charts_line_chart_select_1_listener($event) {
              return ctx.select($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ngx-charts-polar-chart", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("results", ctx.plotData)("animations", ctx.animations)("legend", false)("legendTitle", ctx.legendTitle)("legendPosition", ctx.legendPosition)("gradient", ctx.gradient)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("showXAxisLabel", false)("showYAxisLabel", false)("xAxisLabel", "angle")("yAxisLabel", "radius")("autoScale", ctx.autoScale)("timeline", ctx.timeline)("showGridLines", ctx.showGridLines)("rangeFillOpacity", ctx.rangeFillOpacity)("tooltipDisabled", ctx.tooltipDisabled)("trimXAxisTicks", ctx.trimXAxisTicks)("trimYAxisTicks", ctx.trimYAxisTicks);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("results", ctx.plotData)("animations", ctx.animations)("legend", false)("legendTitle", ctx.legendTitle)("legendPosition", ctx.legendPosition)("gradient", ctx.gradient)("xAxis", false)("yAxis", true)("showXAxisLabel", false)("showYAxisLabel", false)("xAxisLabel", "angle")("yAxisLabel", "radius")("autoScale", ctx.autoScale)("showGridLines", ctx.showGridLines)("rangeFillOpacity", ctx.rangeFillOpacity)("tooltipDisabled", ctx.tooltipDisabled)("showSeriesOnHover", ctx.showSeriesOnHover)("trimYAxisTicks", ctx.trimYAxisTicks);
          }
        },
        directives: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["LineChartComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["PolarChartComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9yZWdyZXNzaW9uL3JlZ3Jlc3Npb24uY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegressionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-regression',
            templateUrl: './regression.component.html',
            styleUrls: ['./regression.component.scss']
          }]
        }], function () {
          return [{
            type: _configs_services_charts_service_charts_service_service__WEBPACK_IMPORTED_MODULE_1__["ChartsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "dy2h":
    /*!*********************************************************************************************!*\
      !*** ./src/app/user/biz-plan/bp-setup/biz-model/biz-model-form/biz-model-form.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: BizModelFormComponent */

    /***/
    function dy2h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BizModelFormComponent", function () {
        return BizModelFormComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_user_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/user/services/profile-service/profile-service.service */
      "BDC7");
      /* harmony import */


      var _biz_model_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../biz-model.service */
      "4QdO");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function BizModelFormComponent_div_10_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "check_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var list_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", list_r5.name, ": ", list_r5.descriptions, "");
        }
      }

      function BizModelFormComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BizModelFormComponent_div_10_div_2_Template, 5, 2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "cloud_upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Update ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.selected);
        }
      }

      function BizModelFormComponent_mat_optgroup_17_mat_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var description_r8 = ctx.$implicit;

          var group_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", group_r6.name + "-" + description_r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", description_r8, " ");
        }
      }

      function BizModelFormComponent_mat_optgroup_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-optgroup", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BizModelFormComponent_mat_optgroup_17_mat_option_1_Template, 2, 2, "mat-option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var group_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", group_r6.name)("disabled", group_r6.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r6.descriptions);
        }
      }

      ;
      ;

      var BizModelFormComponent = /*#__PURE__*/function () {
        function BizModelFormComponent(profileService, bizService, snackBar) {
          _classCallCheck(this, BizModelFormComponent);

          this.profileService = profileService;
          this.bizService = bizService;
          this.snackBar = snackBar;
          this.process = '';
          this.icon = 'cloud';
          this.colorOptions = 'primary';
          this.company = {
            name: 'Azrin Company'
          };
          this.comForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            nameCom: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("".concat(this.company.name || ''), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            ssmCom: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            categoryCom: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
          this.categories = [{
            name: 'Information Technology',
            descriptions: ['Develop computer applications', 'Develop website applications', 'Develop mobile applications']
          }, {
            name: 'Engineeering',
            descriptions: ['Provides electrical engineering services', 'Provides electronic engineering services', 'Provides mechanical engineering services']
          }, {
            name: 'Construction',
            descriptions: ['Provides high rise building services', 'Provides house building services']
          }];
        }

        _createClass(BizModelFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            this.profileService.profile.subscribe(function (response) {
              _this11.profile = response;
            });
            this.bizService.compProfile.subscribe(function (response) {
              if (response && response._id) _this11.company = response;else _this11.company = null;
            });
          }
        }, {
          key: "saveInput",
          value: function saveInput(elem) {
            var _this12 = this;

            var elementId = elem._elementRef.nativeElement.id;
            var element = document.getElementById(elementId);
            element.getElementsByTagName('mat-icon')[0].firstChild.replaceWith('cloud_upload');
            var input = element.getElementsByTagName('input')[0];
            var value = input.value;
            var name = input.name;
            var id = this.company.id || '';
            var company = {
              name: name,
              value: value,
              id: id
            };
            this.bizService.edit({
              company: company
            }).subscribe(function (response) {
              if (response && response._id) {
                element.getElementsByTagName('mat-icon')[0].firstChild.replaceWith('cloud_done');
                var msg = "".concat(name, " is sucessfully saved.").toUpperCase();

                _this12.snackBar.open(msg, 'X', {
                  duration: 5000,
                  panelClass: 'lm__panel-primary'
                });
              } else {
                element.getElementsByTagName('mat-icon')[0].firstChild.replaceWith('cloud_off');

                _this12.snackBar.open('Save operation fail, please try again', 'X', {
                  duration: 5000,
                  panelClass: 'lm__panel-accent'
                });
              }
            }, function (error) {
              element.getElementsByTagName('mat-icon')[0].firstChild.replaceWith('cloud_off');

              _this12.snackBar.open('Save operation error, please try again', 'X', {
                duration: 5000,
                panelClass: 'lm__panel-warn'
              });
            });
          }
        }, {
          key: "activeElem",
          value: function activeElem(elem) {
            var elementId = elem._elementRef.nativeElement.id;
            var element = document.getElementById(elementId);
            element.getElementsByTagName('mat-icon')[0].firstChild.replaceWith('cloud_queue');
          }
        }, {
          key: "saveSelected",
          value: function saveSelected(events) {
            //   console.log(events);
            var values = events.value;
            var k = [];
            var categories = values.reduce(function (acc, value) {
              var desc = value.split('-');
              var category = {
                name: desc[0],
                descriptions: desc[1]
              };
              k.push(category);
              acc = k;
              return acc;
            }, []);
            this.selected = categories;
            console.log(categories);
          }
        }, {
          key: "nameCom",
          get: function get() {
            return this.comForm.get('nameCom');
          }
        }, {
          key: "ssmCom",
          get: function get() {
            return this.comForm.get('ssmCom');
          }
        }, {
          key: "categoryCom",
          get: function get() {
            return this.comForm.get('categoryCom');
          }
        }]);

        return BizModelFormComponent;
      }();

      BizModelFormComponent.ɵfac = function BizModelFormComponent_Factory(t) {
        return new (t || BizModelFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_user_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_biz_model_service__WEBPACK_IMPORTED_MODULE_3__["BizModelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]));
      };

      BizModelFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BizModelFormComponent,
        selectors: [["app-biz-model-form"]],
        decls: 27,
        vars: 7,
        consts: [["fxFlex", "50", "fxFlex.lt-md", "100", "fxLayout", "column", "fxLayoutAlign", "center center", 1, "lm__form-container"], [3, "formGroup"], ["fxLayout", "column", 1, "lm__form"], ["id", "mff-01", 3, "color", "click"], ["name", ""], ["matInput", "", "name", "name", "placeholder", "Company Name", "formControlName", "nameCom", "required", "", 3, "keyup.enter"], ["matSuffix", "", "id", "mi-01", 3, "color"], ["class", "lc__select-box mat-elevation-z8", "fxLayout", "column", "fxLayoutAlign", "center center", 4, "ngIf"], ["formControlName", "categoryCom", "multiple", "", 3, "selectionChange"], [3, "label", "disabled", 4, "ngFor", "ngForOf"], ["id", "mff-02", 3, "color", "click"], ["ssmCom", ""], ["matInput", "", "name", "ssmCom", "placeholder", "Company ssmCom Number", "formControlName", "ssmCom", 3, "keyup.enter"], ["matSuffix", "", "id", "mi-02", 3, "color"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "lc__select-box", "mat-elevation-z8"], ["class", "lc__select-list", "fxLayout", "row", "fxLayoutAlign", "start", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "accent"], [1, "lm__icon"], ["fxLayout", "row", "fxLayoutAlign", "start", 1, "lc__select-list"], ["color", "accent", 1, "lm__icon"], [3, "label", "disabled"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
        template: function BizModelFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BizModelFormComponent_Template_mat_form_field_click_3_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

              return ctx.activeElem(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function BizModelFormComponent_Template_input_keyup_enter_5_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

              return ctx.saveInput(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "cloud");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Click to edit, press \"Enter\" to save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BizModelFormComponent_div_10_Template, 7, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Business Categories");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-select", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function BizModelFormComponent_Template_mat_select_selectionChange_14_listener($event) {
              return ctx.saveSelected($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Click to select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, BizModelFormComponent_mat_optgroup_17_Template, 2, 3, "mat-optgroup", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Click the \"down arrow\" to select.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BizModelFormComponent_Template_mat_form_field_click_20_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

              return ctx.activeElem(_r3);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function BizModelFormComponent_Template_input_keyup_enter_22_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

              return ctx.saveInput(_r3);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "cloud");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Click to edit, press \"Enter\" to save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.comForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.nameCom ? "accent" : "\xCDprikigjfgjmary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.nameCom ? "accent" : "primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", _r3 ? "accent" : "primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", _r3 ? "accent" : "primary");
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatHint"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOptgroup"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvYml6LXBsYW4vYnAtc2V0dXAvYml6LW1vZGVsL2Jpei1tb2RlbC1mb3JtL2Jpei1tb2RlbC1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BizModelFormComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-biz-model-form',
            templateUrl: 'biz-model-form.component.html',
            styleUrls: ['./biz-model-form.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_user_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]
          }, {
            type: _biz_model_service__WEBPACK_IMPORTED_MODULE_3__["BizModelService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "gr6c":
    /*!*******************************************************************!*\
      !*** ./src/app/user/forgot-password/forgot-password.component.ts ***!
      \*******************************************************************/

    /*! exports provided: ForgotPasswordComponent */

    /***/
    function gr6c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
        return ForgotPasswordComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/profile-service/profile-service.service */
      "BDC7");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function ForgotPasswordComponent_mat_error_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ForgotPasswordComponent_mat_error_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var ForgotPasswordComponent = /*#__PURE__*/function () {
        function ForgotPasswordComponent(profileService, snackBar) {
          _classCallCheck(this, ForgotPasswordComponent);

          this.profileService = profileService;
          this.snackBar = snackBar;
          this.fpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])
          });
        }

        _createClass(ForgotPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this13 = this;

            var email = this.fpForm.get('email').value;
            this.profileService.forgotPassword(email).subscribe(function (response) {
              _this13.snackBar.open('A password reset link has been emailed to your registered email.', 'X', {
                duration: 10000,
                panelClass: 'lm__panel-primary'
              });
            }, function (error) {
              return _this13.snackBar.open("Error: ".concat(error), 'X', {
                duration: 10000,
                panelClass: 'lm__panel-warn'
              });
            });
          }
        }]);

        return ForgotPasswordComponent;
      }();

      ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) {
        return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]));
      };

      ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ForgotPasswordComponent,
        selectors: [["app-forgot-password"]],
        decls: 33,
        vars: 5,
        consts: [[1, "card"], [1, "lm__form"], [3, "formGroup", "ngSubmit"], ["fxLayout", "column", "fxLayoutAlign", "center center"], ["appearance", "fill"], ["matInput", "", "placeholder", "Email", "formControlName", "email", "required", "", "autocomplete", "email", 1, "lm__form-input"], ["email", ""], ["matSuffix", "", "color", "primary"], [4, "ngIf"], ["mat-raised-button", "", "type", "submit", "color", "primary", 1, "lm__form-button", 3, "disabled"], ["fxLayout", "rows", "fxLayoutAlign", "center"], [1, "lm__form-footer"], ["mat-button", "", "routerLink", "/user/login"], ["mat-button", "", "routerLink", "/user/register"]],
        template: function ForgotPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Forgot Password ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_6_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "alternate_email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Enter email here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ForgotPasswordComponent_mat_error_17_Template, 4, 0, "mat-error", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ForgotPasswordComponent_mat_error_18_Template, 4, 0, "mat-error", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "check_circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Submit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card-actions", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Login ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " | ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Register ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.fpForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fpForm.get("email").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fpForm.get("email").hasError("email"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.fpForm.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.fpForm.errors, " ");
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatHint"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDivider"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLink"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-forgot-password',
            templateUrl: './forgot-password.component.html',
            styleUrls: ['./forgot-password.component.scss']
          }]
        }], function () {
          return [{
            type: _services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "hX/q":
    /*!**********************************************!*\
      !*** ./src/app/user/services/httpOptions.ts ***!
      \**********************************************/

    /*! exports provided: jwtToken, httpOptions */

    /***/
    function hXQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "jwtToken", function () {
        return jwtToken;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "httpOptions", function () {
        return httpOptions;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var jwtToken = localStorage.getItem('token');
      var httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
          'Content-Type': 'application/json',
          'jwtoken': jwtToken
        })
      };
      /***/
    },

    /***/
    "izVM":
    /*!**************************************!*\
      !*** ./src/app/nav/nav.component.ts ***!
      \**************************************/

    /*! exports provided: NavComponent */

    /***/
    function izVM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
        return NavComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _layout_body_body_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../layout/body/body.component */
      "+vyC");

      var NavComponent = /*#__PURE__*/function () {
        function NavComponent() {
          _classCallCheck(this, NavComponent);
        }

        _createClass(NavComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NavComponent;
      }();

      NavComponent.ɵfac = function NavComponent_Factory(t) {
        return new (t || NavComponent)();
      };

      NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavComponent,
        selectors: [["app-nav"]],
        decls: 1,
        vars: 0,
        template: function NavComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-body");
          }
        },
        directives: [_layout_body_body_component__WEBPACK_IMPORTED_MODULE_1__["BodyComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-nav',
            templateUrl: './nav.component.html',
            styleUrls: ['./nav.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "jaHj":
    /*!*******************************************************!*\
      !*** ./src/app/user/main-logo/main-logo.component.ts ***!
      \*******************************************************/

    /*! exports provided: MainLogoComponent */

    /***/
    function jaHj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainLogoComponent", function () {
        return MainLogoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");

      var MainLogoComponent = /*#__PURE__*/function () {
        function MainLogoComponent() {
          _classCallCheck(this, MainLogoComponent);

          this.logo = 'src/assets/images/azrin.jpg';
        }

        _createClass(MainLogoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MainLogoComponent;
      }();

      MainLogoComponent.ɵfac = function MainLogoComponent_Factory(t) {
        return new (t || MainLogoComponent)();
      };

      MainLogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MainLogoComponent,
        selectors: [["app-main-logo"]],
        decls: 2,
        vars: 1,
        consts: [["fxLayout", "column", "fxLayoutAlign", "center center"], ["alt", "", 1, "lm__logo", 3, "src"]],
        template: function MainLogoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbWFpbi1sb2dvL21haW4tbG9nby5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainLogoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-main-logo',
            templateUrl: './main-logo.component.html',
            styleUrls: ['./main-logo.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "kVkw":
    /*!***************************************************!*\
      !*** ./src/app/layout/footer/footer.component.ts ***!
      \***************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function kVkw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 2,
        vars: 0,
        consts: [["fxLayout", "column", "fxLayoutAlign", "center center", 1, "lm__footer"], ["src", "assets/images/logo.png", "routerLink", "/", 1, "lm__footer-logo"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "mHbZ":
    /*!****************************************************!*\
      !*** ./src/app/user/services/auth/auth.service.ts ***!
      \****************************************************/

    /*! exports provided: AuthService */

    /***/
    function mHbZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @auth0/angular-jwt */
      "Nm8O");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http, jwtHelper) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.jwtHelper = jwtHelper;
        }

        _createClass(AuthService, [{
          key: "login",
          value: function login(credentials) {
            console.log(credentials);
            return this.http.post("/api/user/login", credentials).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
            }));
          }
        }, {
          key: "isLoggedIn",
          value: function isLoggedIn() {
            var token = localStorage.getItem('token');
            var tokenExpired = this.jwtHelper.isTokenExpired(token);

            if (!tokenExpired) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "currentUser",
          get: function get() {
            var token = localStorage.getItem('token');

            if (!token) {
              return null;
            }

            if (token) {
              return this.jwtHelper.decodeToken(token);
            }
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }, {
            type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ob1b":
    /*!****************************************************************************!*\
      !*** ./src/app/user/services/admin-auth-guard/admin-auth-guard.service.ts ***!
      \****************************************************************************/

    /*! exports provided: AdminAuthGuardService */

    /***/
    function ob1b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminAuthGuardService", function () {
        return AdminAuthGuardService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../profile-service/profile-service.service */
      "BDC7");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");

      var AdminAuthGuardService = /*#__PURE__*/function () {
        function AdminAuthGuardService(profileService, router, snackBar) {
          _classCallCheck(this, AdminAuthGuardService);

          this.profileService = profileService;
          this.router = router;
          this.snackBar = snackBar;
        }

        _createClass(AdminAuthGuardService, [{
          key: "canActivate",
          value: function canActivate() {
            var status = this.profileService.getLoggedStatus();
            if (status.user.admin) return true;else {
              this.snackBar.open('You are not authorized to acces this page, please Login', 'X', {
                duration: 10000,
                panelClass: 'red-theme'
              });
              this.router.navigate(['']);
              return false;
            }
          } //

        }]);

        return AdminAuthGuardService;
      }();

      AdminAuthGuardService.ɵfac = function AdminAuthGuardService_Factory(t) {
        return new (t || AdminAuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]));
      };

      AdminAuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AdminAuthGuardService,
        factory: AdminAuthGuardService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminAuthGuardService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "rSRk":
    /*!****************************************************************!*\
      !*** ./src/app/user/services/auth-guard/auth-guard.service.ts ***!
      \****************************************************************/

    /*! exports provided: AuthGuardService */

    /***/
    function rSRk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
        return AuthGuardService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../profile-service/profile-service.service */
      "BDC7");

      var AuthGuardService = /*#__PURE__*/function () {
        function AuthGuardService(router, profileService) {
          _classCallCheck(this, AuthGuardService);

          this.router = router;
          this.profileService = profileService;
        }

        _createClass(AuthGuardService, [{
          key: "canActivate",
          value: function canActivate(routes, state) {
            var user = this.profileService.getLoggedStatus();
            if (!user.expired) return true;else return false;
          }
        }]);

        return AuthGuardService;
      }();

      AuthGuardService.ɵfac = function AuthGuardService_Factory(t) {
        return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]));
      };

      AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuardService,
        factory: AuthGuardService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "s6hb":
    /*!*****************************************************************!*\
      !*** ./src/app/charts/states-sector/states-sector.component.ts ***!
      \*****************************************************************/

    /*! exports provided: StatesSectorComponent */

    /***/
    function s6hb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatesSectorComponent", function () {
        return StatesSectorComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../data */
      "yCXG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @swimlane/ngx-charts */
      "zQsl");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _configs_clickable_clickable_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../configs/clickable/clickable.component */
      "ufwi");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var StatesSectorComponent = /*#__PURE__*/function () {
        function StatesSectorComponent(activatedRoute, router) {
          _classCallCheck(this, StatesSectorComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.view = [700, 400]; // options

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
            domain: ['#DD0066', '#FF7400', '#FFCE00', '#0B9822', '#043869', '#e02f80', '#ff9339', '#ffd939', '#24b23d', '#07447f', '#E65899', '#ffaa64', '#ffe164', '#46c05c', '#0b549a', '#b50052']
          };
          this.showDataLabel = false;
        }

        _createClass(StatesSectorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this14 = this;

            this.activatedRoute.params.subscribe(function (response) {
              var sector = response.sector;
              _this14.title = "".concat(sector, " establishments by state");
              _this14.legendTitle = sector;
              _this14.yAxisTicks = _data__WEBPACK_IMPORTED_MODULE_1__["datas"]['state'];
              var k = [];

              var t = _data__WEBPACK_IMPORTED_MODULE_1__["datas"].reduce(function (acc, data) {
                k.push({
                  name: data.state,
                  value: data.period[0]["".concat(sector)]
                });
                acc = k;
                return acc;
              }, []);

              _this14.single = t;
            });
          }
        }, {
          key: "toggle",
          value: function toggle() {
            this.showDataLabel = !this.showDataLabel;

            if (this.showDataLabel) {
              this.showDataLabel = true;
            } else {
              this.showDataLabel = false;
            }
          }
        }, {
          key: "onStateSelect",
          value: function onStateSelect(event) {
            var stateSelected = event.name.toLowerCase().split(' ').join('-');
            this.router.navigate(['history', stateSelected, this.legendTitle]);
          }
        }]);

        return StatesSectorComponent;
      }();

      StatesSectorComponent.ɵfac = function StatesSectorComponent_Factory(t) {
        return new (t || StatesSectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      StatesSectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: StatesSectorComponent,
        selectors: [["app-states-sector"]],
        decls: 18,
        vars: 21,
        consts: [["fxLayout", "column", "fxLayoutAlign", "center center", 1, "lm__chart-container"], [3, "view", "scheme", "results", "gradient", "xAxis", "yAxis", "legend", "legendTitle", "showXAxisLabel", "showYAxisLabel", "yAxisTicks", "yAxisLabel", "showDataLabel", "select"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "lm__chart-control"], ["color", "primary", 3, "checked", "change"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", 1, "lm__chart-navigator"], ["mat-mini-fab", "", "color", "primary", "routerLink", "/sectors"]],
        template: function StatesSectorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngx-charts-bar-horizontal", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function StatesSectorComponent_Template_ngx_charts_bar_horizontal_select_4_listener($event) {
              return ctx.onStateSelect($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "titlecase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "titlecase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-slide-toggle", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function StatesSectorComponent_Template_mat_slide_toggle_change_8_listener() {
              return ctx.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Show Data Label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-clickable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "keyboard_arrow_left");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "keyboard_arrow_right");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 15, ctx.title));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("scheme", ctx.colorScheme)("results", ctx.single)("gradient", ctx.gradient)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("legend", ctx.showLegend)("legendTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 17, ctx.legendTitle))("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("yAxisTicks", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 19, ctx.yAxisTicks))("yAxisLabel", ctx.yAxisLabel)("showDataLabel", ctx.showDataLabel);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.showDataLabel);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["BarHorizontalComponent"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggle"], _configs_clickable_clickable_component__WEBPACK_IMPORTED_MODULE_6__["ClickableComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["TitleCasePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9zdGF0ZXMtc2VjdG9yL3N0YXRlcy1zZWN0b3IuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatesSectorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-states-sector',
            templateUrl: './states-sector.component.html',
            styleUrls: ['./states-sector.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "uKxu":
    /*!***************************************************************!*\
      !*** ./src/app/user/auth-register/auth-register.component.ts ***!
      \***************************************************************/

    /*! exports provided: AuthRegisterComponent */

    /***/
    function uKxu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthRegisterComponent", function () {
        return AuthRegisterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var src_app_configurations_animations_anim_fn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/configurations/animations/anim-fn */
      "8OIv");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_user_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/user/services/profile-service/profile-service.service */
      "BDC7");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function AuthRegisterComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthRegisterComponent_div_14_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.agreeTnc();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "touch_app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " I agree to the Terms and Conditions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@iconClickButton", undefined);
        }
      }

      function AuthRegisterComponent_ng_template_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthRegisterComponent_ng_template_15_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.agreeTnc();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "touch_app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " I agree to the Terms and Conditions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@iconClickButton", undefined);
        }
      }

      var AuthRegisterComponent = /*#__PURE__*/function () {
        function AuthRegisterComponent(activatedRoute, profileService) {
          _classCallCheck(this, AuthRegisterComponent);

          this.activatedRoute = activatedRoute;
          this.profileService = profileService;
          this.mouseEnter = false;
        }

        _createClass(AuthRegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "mouseEnterCard",
          value: function mouseEnterCard(event) {
            this.mouseEnter = event.returnValue;
          }
        }, {
          key: "mouseLeaveCard",
          value: function mouseLeaveCard(event) {
            this.mouseEnter = !event.returnValue;
          }
        }, {
          key: "agreeTnc",
          value: function agreeTnc() {
            var _this15 = this;

            this.activatedRoute.params.subscribe(function (params) {
              var authToken = params.authToken;
              _this15.authToken = authToken;

              _this15.sendAuthToken(authToken);
            });
          }
        }, {
          key: "sendAuthToken",
          value: function sendAuthToken(authToken) {
            this.profileService.checkAuthToken(authToken);
          }
        }]);

        return AuthRegisterComponent;
      }();

      AuthRegisterComponent.ɵfac = function AuthRegisterComponent_Factory(t) {
        return new (t || AuthRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_user_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]));
      };

      AuthRegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AuthRegisterComponent,
        selectors: [["app-auth-register"]],
        decls: 17,
        vars: 2,
        consts: [["fxLayout", "column", "fxLayoutAlign", "center center", 1, "lm__page-min70vh-hidden"], [1, "lm__logo-4rem"], [1, "lm__card", 3, "mouseenter", "mouseleave"], [1, "lm__card-title"], ["mat-button", "", "color", "accent", 1, "auth__tnc-button"], ["class", "auth__button", "fxLayout", "column", "fxLayoutAlign", "center center", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "auth__button"], ["mat-raised-button", "", "color", "primary", 1, "x-button-enter", 3, "click"], [1, "y-icon-enter"]],
        template: function AuthRegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " azrin.dev ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function AuthRegisterComponent_Template_div_mouseenter_3_listener($event) {
              return ctx.mouseEnterCard($event);
            })("mouseleave", function AuthRegisterComponent_Template_div_mouseleave_3_listener($event) {
              return ctx.mouseLeaveCard($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-title", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Email Authentication ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "If you agree to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Terms and Conditions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " of our website, please click the authentication button below;");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AuthRegisterComponent_div_14_Template, 5, 1, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AuthRegisterComponent_ng_template_15_Template, 5, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mouseEnter)("ngIfElse", _r1);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]],
        styles: [".auth__tnc-button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2, 1.2);\n}\n.auth__button[_ngcontent-%COMP%] {\n  padding-top: 5vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9hdXRoLXJlZ2lzdGVyL2F1dGgtcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSU07RUFDRywwQkFBQTtBQUhUO0FBUUc7RUFDRyxnQkFBQTtBQU5OIiwiZmlsZSI6InNyYy9hcHAvdXNlci9hdXRoLXJlZ2lzdGVyL2F1dGgtcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aHtcblxuICAgJl9fdG5jeyAgICAgXG5cbiAgICAgICYtYnV0dG9uOmhvdmVye1xuICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIsIDEuMik7XG4gICAgICB9XG4gICB9XG5cblxuICAgJl9fYnV0dG9ue1xuICAgICAgcGFkZGluZy10b3A6IDV2aDtcblxuICAgfVxufSJdfQ== */"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('iconClickButton', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(src_app_configurations_animations_anim_fn__WEBPACK_IMPORTED_MODULE_2__["iconButtonEnter"])])])]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthRegisterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-auth-register',
            templateUrl: './auth-register.component.html',
            styleUrls: ['./auth-register.component.scss'],
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('iconClickButton', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(src_app_configurations_animations_anim_fn__WEBPACK_IMPORTED_MODULE_2__["iconButtonEnter"])])])]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: src_app_user_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ufwi":
    /*!*****************************************************************!*\
      !*** ./src/app/charts/configs/clickable/clickable.component.ts ***!
      \*****************************************************************/

    /*! exports provided: ClickableComponent */

    /***/
    function ufwi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClickableComponent", function () {
        return ClickableComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var ClickableComponent = /*#__PURE__*/function () {
        function ClickableComponent() {
          _classCallCheck(this, ClickableComponent);
        }

        _createClass(ClickableComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ClickableComponent;
      }();

      ClickableComponent.ɵfac = function ClickableComponent_Factory(t) {
        return new (t || ClickableComponent)();
      };

      ClickableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ClickableComponent,
        selectors: [["app-clickable"]],
        decls: 5,
        vars: 0,
        consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "lm__chart-control"], ["color", "accent"]],
        template: function ClickableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "touch_app");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "* Click any sector on the chart to see detail");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9jb25maWdzL2NsaWNrYWJsZS9jbGlja2FibGUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClickableComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-clickable',
            templateUrl: './clickable.component.html',
            styleUrls: ['./clickable.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: routes, AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _charts_sectors_sectors_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./charts/sectors/sectors.component */
      "9Qut");
      /* harmony import */


      var _charts_class_class_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./charts/class/class.component */
      "yUbk");
      /* harmony import */


      var _charts_intro_intro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./charts/intro/intro.component */
      "HODp");
      /* harmony import */


      var _charts_states_construction_states_construction_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./charts/states-construction/states-construction.component */
      "Qfsr");
      /* harmony import */


      var _charts_states_manufacturing_states_manufacturing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./charts/states-manufacturing/states-manufacturing.component */
      "cG3l");
      /* harmony import */


      var _charts_state_sector_history_state_sector_history_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./charts/state-sector-history/state-sector-history.component */
      "RqjG");
      /* harmony import */


      var _charts_states_sector_states_sector_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./charts/states-sector/states-sector.component */
      "s6hb");
      /* harmony import */


      var src_app_user_user_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/user/user-routing.module */
      "Yu5h");
      /* harmony import */


      var _charts_state_sector_forecast_state_sector_forecast_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./charts/state-sector-forecast/state-sector-forecast.component */
      "BFhD");
      /* harmony import */


      var _charts_regression_regression_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./charts/regression/regression.component */
      "cvbC");

      var routes = [{
        path: '',
        component: _charts_intro_intro_component__WEBPACK_IMPORTED_MODULE_4__["IntroComponent"]
      }, {
        path: 'class',
        component: _charts_class_class_component__WEBPACK_IMPORTED_MODULE_3__["ClassComponent"]
      }, {
        path: 'sectors',
        component: _charts_sectors_sectors_component__WEBPACK_IMPORTED_MODULE_2__["SectorsComponent"]
      }, {
        path: 'states/:sector',
        component: _charts_states_sector_states_sector_component__WEBPACK_IMPORTED_MODULE_8__["StatesSectorComponent"]
      }, {
        path: 'states/construction',
        component: _charts_states_construction_states_construction_component__WEBPACK_IMPORTED_MODULE_5__["StatesConstructionComponent"]
      }, {
        path: 'states/manufacturing',
        component: _charts_states_manufacturing_states_manufacturing_component__WEBPACK_IMPORTED_MODULE_6__["StatesManufacturingComponent"]
      }, {
        path: 'history/:state/:sector',
        component: _charts_state_sector_history_state_sector_history_component__WEBPACK_IMPORTED_MODULE_7__["StateSectorHistoryComponent"]
      }, {
        path: 'forecast/:state/:sector',
        component: _charts_state_sector_forecast_state_sector_forecast_component__WEBPACK_IMPORTED_MODULE_10__["StateSectorForecastComponent"]
      }, {
        path: 'forecast/linear',
        component: _charts_regression_regression_component__WEBPACK_IMPORTED_MODULE_11__["RegressionComponent"]
      }, {
        path: 'user',
        redirectTo: '/user/login',
        pathMatch: 'full'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(src_app_user_user_routing_module__WEBPACK_IMPORTED_MODULE_9__["userRoutes"])], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(src_app_user_user_routing_module__WEBPACK_IMPORTED_MODULE_9__["userRoutes"])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vu8l":
    /*!*****************************************************************!*\
      !*** ./src/app/charts/intro/line-chart/line-chart.component.ts ***!
      \*****************************************************************/

    /*! exports provided: LineChartComponent */

    /***/
    function vu8l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LineChartComponent", function () {
        return LineChartComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _line_chart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./line-chart.service */
      "GJ8s");
      /* harmony import */


      var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @swimlane/ngx-charts */
      "zQsl");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var LineChartComponent = /*#__PURE__*/function () {
        function LineChartComponent(lineChartService) {
          _classCallCheck(this, LineChartComponent);

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
          this.showGridLines = false;
          this.autoScale = true;
          this.colorScheme = {
            name: 'cool',
            selectable: true,
            group: 'Ordinal',
            domain: ['#DD0066', '#FF7400', '#FFCE00', '#0B9822', '#043869', '#e02f80', '#ff9339', '#ffd939', '#24b23d', '#07447f', '#E65899', '#ffaa64', '#ffe164', '#46c05c', '#0b549a', '#b50052']
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

        _createClass(LineChartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            this.lineChartService.startGenerator();
            this.lineChartService.dataYasObs.subscribe(function (response) {
              console.log(response);
              _this16.single = {
                name: 'api',
                series: [{
                  value: response
                }]
              };
            });
            this.lineChartService.getFakeData().subscribe(function (response) {
              console.log(response);
            });
          }
        }, {
          key: "select",
          value: function select(event) {
            console.log(event);
          }
        }]);

        return LineChartComponent;
      }();

      LineChartComponent.ɵfac = function LineChartComponent_Factory(t) {
        return new (t || LineChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_line_chart_service__WEBPACK_IMPORTED_MODULE_1__["LineChartService"]));
      };

      LineChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LineChartComponent,
        selectors: [["app-line-chart"]],
        decls: 2,
        vars: 21,
        consts: [[3, "view", "scheme", "results", "animations", "rangeFillOpacity", "legend", "legendTitle", "legendPosition", "xAxis", "yAxis", "roundDomains", "showGridLines", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "gradient", "timeline", "autoScale"]],
        template: function LineChartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-charts-line-chart", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "titlecase");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("scheme", ctx.colorScheme)("results", ctx.single)("animations", ctx.useAnimation)("rangeFillOpacity", ctx.rangeFillOpacity)("legend", ctx.showLegend)("legendTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 19, ctx.legendTitle))("legendPosition", ctx.legendPosition)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("roundDomains", ctx.roundDomains)("showGridLines", ctx.showGridLines)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("xAxisLabel", ctx.xAxisLabel)("yAxisLabel", ctx.yAxisLabel)("gradient", ctx.gradient)("timeline", ctx.timeline)("autoScale", ctx.autoScale);
          }
        },
        directives: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["LineChartComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9pbnRyby9saW5lLWNoYXJ0L2xpbmUtY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LineChartComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-line-chart',
            templateUrl: 'line-chart.component.html',
            styleUrls: ['./line-chart.component.scss']
          }]
        }], function () {
          return [{
            type: _line_chart_service__WEBPACK_IMPORTED_MODULE_1__["LineChartService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vvyD":
    /*!************************************!*\
      !*** ./src/app/material.module.ts ***!
      \************************************/

    /*! exports provided: MaterialModule */

    /***/
    function vvyD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
        return MaterialModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_material_tree__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/tree */
      "8yBR");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "jaxi");
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/badge */
      "TU8p");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/slider */
      "5RNC");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      "2ChS");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm"); // Angular Material Modules


      var MaterialModule = function MaterialModule() {
        _classCallCheck(this, MaterialModule);
      };

      MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MaterialModule
      });
      MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MaterialModule_Factory(t) {
          return new (t || MaterialModule)();
        },
        imports: [[_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_22__["MatTreeModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__["MatStepperModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__["MatAutocompleteModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__["MatButtonToggleModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_27__["MatBadgeModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__["MatChipsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__["MatSliderModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__["MatDividerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__["MatProgressSpinnerModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_34__["MatBottomSheetModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"]], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_22__["MatTreeModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__["MatStepperModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_27__["MatBadgeModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__["MatChipsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__["MatSliderModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__["MatDividerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__["MatProgressSpinnerModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_34__["MatBottomSheetModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
          imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_22__["MatTreeModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__["MatStepperModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__["MatAutocompleteModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__["MatButtonToggleModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_27__["MatBadgeModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__["MatChipsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__["MatSliderModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__["MatDividerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__["MatProgressSpinnerModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_34__["MatBottomSheetModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"]],
          exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_22__["MatTreeModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__["MatStepperModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_27__["MatBadgeModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__["MatChipsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__["MatSliderModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__["MatDividerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__["MatProgressSpinnerModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_34__["MatBottomSheetModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_22__["MatTreeModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__["MatStepperModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__["MatAutocompleteModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__["MatButtonToggleModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_27__["MatBadgeModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__["MatChipsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__["MatSliderModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__["MatDividerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__["MatProgressSpinnerModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_34__["MatBottomSheetModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"]],
            exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_22__["MatTreeModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__["MatStepperModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_27__["MatBadgeModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__["MatChipsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__["MatSliderModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__["MatDividerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__["MatProgressSpinnerModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_34__["MatBottomSheetModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "yCXG":
    /*!********************************!*\
      !*** ./src/app/charts/data.ts ***!
      \********************************/

    /*! exports provided: datas */

    /***/
    function yCXG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "datas", function () {
        return datas;
      });

      var datas = [{
        state: 'Johor',
        period: [{
          year: "2019",
          services: 56848,
          wholesale: 49209,
          construction: 9516,
          manufacturing: 9843,
          agriculture: 3268,
          mining: 242
        }, {
          year: "2018",
          services: 56921,
          wholesale: 49080,
          construction: 9463,
          manufacturing: 9432,
          agriculture: 3260,
          mining: 242
        }, {
          year: "2017",
          services: 53656,
          wholesale: 52070,
          construction: 9106,
          manufacturing: 9666,
          agriculture: 3012,
          mining: 237
        }, {
          year: "2016",
          services: 54569,
          wholesale: 47298,
          construction: 8061,
          manufacturing: 9881,
          agriculture: 2968,
          mining: 190
        }]
      }, {
        state: 'Kedah',
        period: [{
          year: "2019",
          services: 25697,
          wholesale: 24747,
          construction: 3719,
          manufacturing: 3675,
          agriculture: 880,
          mining: 87
        }, {
          year: "2018",
          services: 25720,
          wholesale: 24727,
          construction: 3707,
          manufacturing: 3673,
          agriculture: 877,
          mining: 87
        }, {
          year: "2017",
          services: 25465,
          wholesale: 25080,
          construction: 3628,
          manufacturing: 3788,
          agriculture: 892,
          mining: 84
        }, {
          year: "2016",
          services: 25913,
          wholesale: 22947,
          construction: 3274,
          manufacturing: 3660,
          agriculture: 861,
          mining: 50
        }]
      }, {
        state: 'Kelantan',
        period: [{
          year: "2019",
          services: 19114,
          wholesale: 29049,
          construction: 1604,
          manufacturing: 1956,
          agriculture: 791,
          mining: 151
        }, {
          year: "2018",
          services: 19102,
          wholesale: 29049,
          construction: 1590,
          manufacturing: 1955,
          agriculture: 791,
          mining: 151
        }, {
          year: "2017",
          services: 19134,
          wholesale: 28107,
          construction: 1478,
          manufacturing: 1984,
          agriculture: 811,
          mining: 148
        }, {
          year: "2016",
          services: 21958,
          wholesale: 26402,
          construction: 1091,
          manufacturing: 2099,
          agriculture: 996,
          mining: 101
        }]
      }, {
        state: 'Melaka',
        period: [{
          year: "2019",
          services: 17807,
          wholesale: 17153,
          construction: 3179,
          manufacturing: 1629,
          agriculture: 784,
          mining: 44
        }, {
          year: "2018",
          services: 17806,
          wholesale: 17143,
          construction: 3166,
          manufacturing: 2110,
          agriculture: 784,
          mining: 44
        }, {
          year: "2017",
          services: 17848,
          wholesale: 17143,
          construction: 3111,
          manufacturing: 1720,
          agriculture: 808,
          mining: 41
        }, {
          year: "2016",
          services: 18688,
          wholesale: 16129,
          construction: 2896,
          manufacturing: 1808,
          agriculture: 880,
          mining: 37
        }]
      }, {
        state: 'N-sembilan',
        period: [{
          year: "2019",
          services: 18410,
          wholesale: 14328,
          construction: 4144,
          manufacturing: 2112,
          agriculture: 726,
          mining: 66
        }, {
          year: "2018",
          services: 18410,
          wholesale: 14321,
          construction: 4129,
          manufacturing: 2110,
          agriculture: 726,
          mining: 66
        }, {
          year: "2017",
          services: 18222,
          wholesale: 14773,
          construction: 3993,
          manufacturing: 2113,
          agriculture: 741,
          mining: 66
        }, {
          year: "2016",
          services: 18162,
          wholesale: 13267,
          construction: 3745,
          manufacturing: 1978,
          agriculture: 693,
          mining: 38
        }]
      }, {
        state: 'Pahang',
        period: [{
          year: "2019",
          services: 17130,
          wholesale: 20352,
          construction: 3353,
          manufacturing: 1958,
          agriculture: 1674,
          mining: 341
        }, {
          year: "2018",
          services: 17058,
          wholesale: 20338,
          construction: 3339,
          manufacturing: 1952,
          agriculture: 1661,
          mining: 341
        }, {
          year: "2017",
          services: 16805,
          wholesale: 20558,
          construction: 3270,
          manufacturing: 1936,
          agriculture: 1696,
          mining: 218
        }, {
          year: "2016",
          services: 17344,
          wholesale: 18669,
          construction: 2901,
          manufacturing: 2138,
          agriculture: 1662,
          mining: 251
        }]
      }, {
        state: 'Perak',
        period: [{
          year: "2019",
          services: 34675,
          wholesale: 35465,
          construction: 5610,
          manufacturing: 4642,
          agriculture: 2194,
          mining: 232
        }, {
          year: "2018",
          services: 35203,
          wholesale: 35087,
          construction: 5575,
          manufacturing: 4619,
          agriculture: 2185,
          mining: 228
        }, {
          year: "2017",
          services: 35163,
          wholesale: 39566,
          construction: 5443,
          manufacturing: 4916,
          agriculture: 2154,
          mining: 218
        }, {
          year: "2016",
          services: 36601,
          wholesale: 37865,
          construction: 4924,
          manufacturing: 4810,
          agriculture: 2222,
          mining: 160
        }]
      }, {
        state: 'Perlis',
        period: [{
          year: "2019",
          services: 3614,
          wholesale: 3552,
          construction: 1179,
          manufacturing: 425,
          agriculture: 107,
          mining: 5
        }, {
          year: "2018",
          services: 3612,
          wholesale: 3551,
          construction: 1176,
          manufacturing: 423,
          agriculture: 107,
          mining: 5
        }, {
          year: "2017",
          services: 3631,
          wholesale: 2989,
          construction: 1176,
          manufacturing: 459,
          agriculture: 108,
          mining: 6
        }, {
          year: "2016",
          services: 3612,
          wholesale: 2719,
          construction: 1128,
          manufacturing: 385,
          agriculture: 108,
          mining: 4
        }]
      }, {
        state: 'P-pinang',
        period: [{
          year: "2019",
          services: 38316,
          wholesale: 33097,
          construction: 4799,
          manufacturing: 5269,
          agriculture: 895,
          mining: 146
        }, {
          year: "2018",
          services: 38281,
          wholesale: 32956,
          construction: 4769,
          manufacturing: 5268,
          agriculture: 895,
          mining: 146
        }, {
          year: "2017",
          services: 38375,
          wholesale: 35543,
          construction: 4620,
          manufacturing: 5174,
          agriculture: 905,
          mining: 142
        }, {
          year: "2016",
          services: 37144,
          wholesale: 32318,
          construction: 3985,
          manufacturing: 5519,
          agriculture: 923,
          mining: 111
        }]
      }, {
        state: 'Sabah',
        period: [{
          year: "2019",
          services: 30529,
          wholesale: 40134,
          construction: 6809,
          manufacturing: 2183,
          agriculture: 2554,
          mining: 144
        }, {
          year: "2018",
          services: 30091,
          wholesale: 40088,
          construction: 7213,
          manufacturing: 2246,
          agriculture: 2569,
          mining: 144
        }, {
          year: "2017",
          services: 28996,
          wholesale: 32529,
          construction: 6882,
          manufacturing: 2287,
          agriculture: 2567,
          mining: 156
        }, {
          year: "2016",
          services: 28375,
          wholesale: 30490,
          construction: 5978,
          manufacturing: 2099,
          agriculture: 2359,
          mining: 87
        }]
      }, {
        state: 'Sarawak',
        period: [{
          year: "2019",
          services: 34783,
          wholesale: 31580,
          construction: 6500,
          manufacturing: 3579,
          agriculture: 2128,
          mining: 276
        }, {
          year: "2018",
          services: 33617,
          wholesale: 31502,
          construction: 5865,
          manufacturing: 3342,
          agriculture: 2057,
          mining: 276
        }, {
          year: "2017",
          services: 33310,
          wholesale: 35370,
          construction: 5525,
          manufacturing: 3357,
          agriculture: 2026,
          mining: 279
        }, {
          year: "2016",
          services: 32880,
          wholesale: 32972,
          construction: 4416,
          manufacturing: 3033,
          agriculture: 1816,
          mining: 150
        }]
      }, {
        state: 'Selangor',
        period: [{
          year: "2019",
          services: 114758,
          wholesale: 109902,
          construction: 16878,
          manufacturing: 13915,
          agriculture: 1728,
          mining: 646
        }, {
          year: "2018",
          services: 114435,
          wholesale: 109459,
          construction: 16726,
          manufacturing: 13852,
          agriculture: 1727,
          mining: 647
        }, {
          year: "2017",
          services: 113382,
          wholesale: 109889,
          construction: 15707,
          manufacturing: 13819,
          agriculture: 1776,
          mining: 620
        }, {
          year: "2016",
          services: 105836,
          wholesale: 91752,
          construction: 12673,
          manufacturing: 12759,
          agriculture: 1346,
          mining: 300
        }]
      }, {
        state: 'Terengganu',
        period: [{
          year: "2019",
          services: 14612,
          wholesale: 17262,
          construction: 3288,
          manufacturing: 2119,
          agriculture: 500,
          mining: 178
        }, {
          year: "2018",
          services: 14508,
          wholesale: 17120,
          construction: 3281,
          manufacturing: 2081,
          agriculture: 499,
          mining: 177
        }, {
          year: "2017",
          services: 14578,
          wholesale: 16549,
          construction: 3239,
          manufacturing: 2179,
          agriculture: 518,
          mining: 183
        }, {
          year: "2016",
          services: 19197,
          wholesale: 13285,
          construction: 2899,
          manufacturing: 2394,
          agriculture: 580,
          mining: 151
        }]
      }, {
        state: 'K-lumpur',
        period: [{
          year: "2019",
          services: 91468,
          wholesale: 67830,
          construction: 10804,
          manufacturing: 6918,
          agriculture: 790,
          mining: 709
        }, {
          year: "2018",
          services: 91662,
          wholesale: 72801,
          construction: 10739,
          manufacturing: 6930,
          agriculture: 790,
          mining: 709
        }, {
          year: "2017",
          services: 89713,
          wholesale: 79052,
          construction: 10336,
          manufacturing: 7412,
          agriculture: 860,
          mining: 679
        }, {
          year: "2016",
          services: 81982,
          wholesale: 71738,
          construction: 8412,
          manufacturing: 5728,
          agriculture: 561,
          mining: 367
        }]
      }, {
        state: 'Labuan',
        period: [{
          year: "2019",
          services: 1634,
          wholesale: 1137,
          construction: 277,
          manufacturing: 137,
          agriculture: 12,
          mining: 6
        }, {
          year: "2018",
          services: 1654,
          wholesale: 1158,
          construction: 277,
          manufacturing: 137,
          agriculture: 12,
          mining: 6
        }, {
          year: "2017",
          services: 1639,
          wholesale: 1631,
          construction: 273,
          manufacturing: 143,
          agriculture: 16,
          mining: 8
        }, {
          year: "2016",
          services: 1560,
          wholesale: 1085,
          construction: 249,
          manufacturing: 136,
          agriculture: 11,
          mining: 7
        }]
      }, {
        state: 'Putrajaya',
        period: [{
          year: "2019",
          services: 887,
          wholesale: 412,
          construction: 40,
          manufacturing: 21,
          agriculture: 0,
          mining: 0
        }, {
          year: "2018",
          services: 1009,
          wholesale: 410,
          construction: 46,
          manufacturing: 16,
          agriculture: 0,
          mining: 0
        }, {
          year: "2017",
          services: 996,
          wholesale: 417,
          construction: 52,
          manufacturing: 29,
          agriculture: 0,
          mining: 0
        }, {
          year: "2016",
          services: 969,
          wholesale: 330,
          construction: 47,
          manufacturing: 34,
          agriculture: 0,
          mining: 0
        }]
      }];
      /***/
    },

    /***/
    "yUbk":
    /*!*************************************************!*\
      !*** ./src/app/charts/class/class.component.ts ***!
      \*************************************************/

    /*! exports provided: ClassComponent */

    /***/
    function yUbk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClassComponent", function () {
        return ClassComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @swimlane/ngx-charts */
      "zQsl");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var ClassComponent = /*#__PURE__*/function () {
        function ClassComponent() {
          _classCallCheck(this, ClassComponent);

          this.view = [700, 400]; // options

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
          this.single = [{
            "name": "Large",
            "value": 31136
          }, {
            "name": "Medium",
            "value": 17568
          }, {
            "name": "Small",
            "value": 230891
          }, {
            "name": "Micro",
            "value": 899920
          }];
          this.showDataLabel = false;
        }

        _createClass(ClassComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggle",
          value: function toggle() {
            this.showDataLabel = !this.showDataLabel;

            if (this.showDataLabel) {
              this.showDataLabel = true;
            } else {
              this.showDataLabel = false;
            }
          }
        }]);

        return ClassComponent;
      }();

      ClassComponent.ɵfac = function ClassComponent_Factory(t) {
        return new (t || ClassComponent)();
      };

      ClassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ClassComponent,
        selectors: [["app-class"]],
        decls: 14,
        vars: 13,
        consts: [["fxLayout", "column", "fxLayoutAlign", "center center", 1, "lm__chart-container"], [3, "view", "scheme", "results", "gradient", "xAxis", "yAxis", "legend", "legendTitle", "showXAxisLabel", "showYAxisLabel", "yAxisLabel", "showDataLabel"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "lm__chart-control"], ["color", "primary", 3, "checked", "change"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", 1, "lm__chart-navigator"], ["mat-mini-fab", "", "color", "primary", "routerLink", "/"], ["mat-mini-fab", "", "color", "primary", "routerLink", "/sectors"]],
        template: function ClassComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Establishments by Classifications");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ngx-charts-bar-vertical", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-slide-toggle", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ClassComponent_Template_mat_slide_toggle_change_5_listener() {
              return ctx.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Show Data Label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "keyboard_arrow_left");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "keyboard_arrow_right");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("scheme", ctx.colorScheme)("results", ctx.single)("gradient", ctx.gradient)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("legend", ctx.showLegend)("legendTitle", ctx.legendTitle)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("yAxisLabel", ctx.yAxisLabel)("showDataLabel", ctx.showDataLabel);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.showDataLabel);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["BarVerticalComponent"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9jbGFzcy9jbGFzcy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClassComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-class',
            templateUrl: './class.component.html',
            styleUrls: ['./class.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map