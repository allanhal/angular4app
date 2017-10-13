webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  color: darkgoldenrod;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 250%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\r\n    <li><a routerLink=\"/\">User</a></li>\r\n    <li><a routerLink=\"/pedido\">Pedido</a></li>\r\n    <li><a routerLink=\"/about\">About</a></li>\r\n</ul>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_user_user_component__ = __webpack_require__("../../../../../src/app/components/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_pedido_pedido_component__ = __webpack_require__("../../../../../src/app/components/pedido/pedido.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__components_user_user_component__["a" /* UserComponent */] },
    { path: 'pedido', component: __WEBPACK_IMPORTED_MODULE_9__components_pedido_pedido_component__["a" /* PedidoComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_8__components_about_about_component__["a" /* AboutComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_pedido_pedido_component__["a" /* PedidoComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__services_data_service__["a" /* DataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container py-5\">\r\n    <h2>angular4app </h2>\r\n    <p class=\"lead\">Version: {{version}}</p>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
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

var AboutComponent = (function () {
    function AboutComponent() {
        this.version = '1.0';
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/components/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/pedido/pedido.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pedido/pedido.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container py-5\">\n  <div class=\"text-center\">\n    <h1 class=\"display-1\">Angular 4</h1>\n  </div>\n  <div class=\"container py-5\">\n    <div class=\"row py-3\">\n      <div class=\"col-12\">\n        <table id=\"tablePedido\" class=\"display table table-responsive table-hover table-striped table-bordered bg-faded small\" cellspacing=\"0\"\n          width=\"100%\">\n          <thead>\n            <tr>\n              <th>Id</th>\n              <th>Nome</th>\n              <th>Telefone</th>\n              <th>Email</th>\n              <th>Tipo</th>\n              <th>Tamanho</th>\n              <th>Quadro</th>\n              <th>Garfo</th>\n              <th>Guidao</th>\n              <th>Aro</th>\n              <th>Pedivela</th>\n              <th>Preco</th>\n              <th>Tempo</th>\n              <th>Ações</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let pedido of pedidos\">\n              <td>\n                {{ pedido._id }}\n              </td>\n              <td>\n                {{ pedido.nome }}\n              </td>\n              <td>\n                {{ pedido.telefone }}\n              </td>\n              <td>\n                {{ pedido.email }}\n              </td>\n              <td>\n                {{ pedido.tipo }}\n              </td>\n              <td>\n                {{ pedido.tamanho }}\n              </td>\n              <td>\n                {{ pedido.quadro }}\n              </td>\n              <td>\n                {{ pedido.garfo }}\n              </td>\n              <td>\n                {{ pedido.guidao }}\n              </td>\n              <td>\n                {{ pedido.aro }}\n              </td>\n              <td>\n                {{ pedido.pedivela }}\n              </td>\n              <td>\n                {{ pedido.preco }}\n              </td>\n              <td>\n                {{ pedido.tempo }}\n              </td>\n              <td>\n                <button class=\"btn btn-sm btn-primary\" ng-click=\"editPedido(pedido)\">\n                  <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                </button>\n                <button class=\"btn btn-sm btn-danger\" ng-click=\"removePedido(pedido)\">\n                  <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                </button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n    <div class=\"row py-3\">\n      <div class=\"col-12 text-right\">\n        <button class=\"btn btn-sm btn-primary btn-lg\" ng-click=\"refreshPedidos()\">\n          <i class=\"fa fa-refresh\" aria-hidden=\"true\"></i> Atualizar</button>\n      </div>\n    </div>\n\n    <div class=\"row py-3 text-left\">\n      <div class=\"col-12\">\n        <label for=\"inputId\">Id:</label>\n        <input type=\"text\" class=\"form-control\" id=\"input\" ng-model=\"pedidoForm._id\" ng-keyup=\"pedidoFormKeyUp()\">\n      </div>\n    </div>\n    <div class=\"row py-3 text-left\">\n      <div class=\"col-12\">\n        <label for=\"inputNome\">Nome:</label>\n        <input type=\"text\" class=\"form-control\" id=\"input\" ng-model=\"pedidoForm.nome\" ng-keyup=\"pedidoFormKeyUp()\">\n      </div>\n    </div>\n    <div class=\"row py-3 text-left\">\n      <div class=\"col-12\">\n        <label for=\"inputTelefone\">Telefone:</label>\n        <input type=\"text\" class=\"form-control\" id=\"input\" ng-model=\"pedidoForm.telefone\" ng-keyup=\"pedidoFormKeyUp()\">\n      </div>\n    </div>\n    <div class=\"row py-3 text-left\">\n      <div class=\"col-12\">\n        <label for=\"inputEmail\">Email:</label>\n        <input type=\"text\" class=\"form-control\" id=\"input\" ng-model=\"pedidoForm.email\" ng-keyup=\"pedidoFormKeyUp()\">\n      </div>\n    </div>\n    <div class=\"row py-3 text-left\">\n      <div class=\"col-12\">\n        <label for=\"inputTipo\">Tipo:</label>\n        <input type=\"text\" class=\"form-control\" id=\"input\" ng-model=\"pedidoForm.tipo\" ng-keyup=\"pedidoFormKeyUp()\">\n      </div>\n    </div>\n    <div class=\"row py-3 text-left\">\n      <div class=\"col-12\">\n        <label for=\"inputTamanho\">Tamanho:</label>\n        <input type=\"text\" class=\"form-control\" id=\"input\" ng-model=\"pedidoForm.tamanho\" ng-keyup=\"pedidoFormKeyUp()\">\n      </div>\n    </div>\n    <div class=\"row py-3 text-left\">\n      <div class=\"col-12\">\n        <label for=\"inputQuadro\">Quadro:</label>\n        <input type=\"text\" class=\"form-control\" id=\"input\" ng-model=\"pedidoForm.quadro\" ng-keyup=\"pedidoFormKeyUp()\">\n      </div>\n    </div>\n    <div class=\"row py-3 text-left\">\n      <div class=\"col-12\">\n        <label for=\"inputGarfo\">Garfo:</label>\n        <input type=\"text\" class=\"form-control\" id=\"input\" ng-model=\"pedidoForm.garfo\" ng-keyup=\"pedidoFormKeyUp()\">\n      </div>\n    </div>\n    <div class=\"row py-3 text-left\">\n      <div class=\"col-12\">\n        <label for=\"inputGuidao\">Guidao:</label>\n        <input type=\"text\" class=\"form-control\" id=\"input\" ng-model=\"pedidoForm.guidao\" ng-keyup=\"pedidoFormKeyUp()\">\n      </div>\n    </div>\n    <div class=\"row py-3 text-left\">\n      <div class=\"col-12\">\n        <label for=\"inputAro\">Aro:</label>\n        <input type=\"text\" class=\"form-control\" id=\"input\" ng-model=\"pedidoForm.aro\" ng-keyup=\"pedidoFormKeyUp()\">\n      </div>\n    </div>\n    <div class=\"row py-3 text-left\">\n      <div class=\"col-12\">\n        <label for=\"inputPedivela\">Pedivela:</label>\n        <input type=\"text\" class=\"form-control\" id=\"input\" ng-model=\"pedidoForm.pedivela\" ng-keyup=\"pedidoFormKeyUp()\">\n      </div>\n    </div>\n    <div class=\"row py-3 text-left\">\n      <div class=\"col-12\">\n        <label for=\"inputPreco\">Preco:</label>\n        <input type=\"text\" class=\"form-control\" id=\"input\" ng-model=\"pedidoForm.preco\" ng-keyup=\"pedidoFormKeyUp()\">\n      </div>\n    </div>\n    <div class=\"row py-3 text-left\">\n      <div class=\"col-12\">\n        <label for=\"inputTempo\">Tempo:</label>\n        <input type=\"text\" class=\"form-control\" id=\"input\" ng-model=\"pedidoForm.tempo\" ng-keyup=\"pedidoFormKeyUp()\">\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-12 text-right\">\n        <button class=\"btn btn-sm btn-primary\" ng-click=\"submitPedido()\" ng-disabled=\"!pedidoFormChanged\">\n          <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Salvar</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/pedido/pedido.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PedidoComponent = (function () {
    function PedidoComponent(dataService) {
        this.dataService = dataService;
    }
    PedidoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getApi('pedido').subscribe(function (pedidos) {
            _this.pedidos = pedidos;
        });
    };
    return PedidoComponent;
}());
PedidoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-pedido',
        template: __webpack_require__("../../../../../src/app/components/pedido/pedido.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/pedido/pedido.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], PedidoComponent);

var _a;
//# sourceMappingURL=pedido.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container py-5\">\r\n    <h1>Hello world</h1>\r\n    <p>{{name}}</p>\r\n    <p>Sexo: {{sexo}}</p>\r\n\r\n    <ul>\r\n        <li>Age: {{age}}</li>\r\n        <li>Email: {{email}}</li>\r\n        <li>Address: </li>\r\n        <li>{{address.street}}</li>\r\n        <li>{{address.city}}</li>\r\n        <li>{{address.state}}</li>\r\n    </ul>\r\n\r\n    <button (click)=\"onClick()\">Click Me</button>\r\n    <button (click)=\"toggleEdit()\">Edit Me</button>\r\n\r\n    <div *ngIf=\"isEdit\">\r\n        <h2>Edit User</h2>\r\n        <form>\r\n            <div>\r\n                <label for=\"name\">Name: </label>\r\n                <input type=\"text\" [(ngModel)]=\"name\" name=\"name\">\r\n            </div>\r\n            <div>\r\n                <label for=\"age\">Age: </label>\r\n                <input type=\"number\" [(ngModel)]=\"age\" name=\"age\">\r\n            </div>\r\n            <div>\r\n                <label for=\"email\">Email: </label>\r\n                <input type=\"text\" [(ngModel)]=\"email\" name=\"email\">\r\n            </div>\r\n            <div>\r\n                <label for=\"street\">Street: </label>\r\n                <input type=\"text\" [(ngModel)]=\"address.street\" name=\"address.street\">\r\n            </div>\r\n            <div>\r\n                <label for=\"city\">City: </label>\r\n                <input type=\"text\" [(ngModel)]=\"address.city\" name=\"address.city\">\r\n            </div>\r\n            <div>\r\n                <label for=\"state\">State: </label>\r\n                <input type=\"text\" [(ngModel)]=\"address.state\" name=\"address.state\">\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <h1>\r\n        Hobbies\r\n    </h1>\r\n    <form (submit)=\"addHobby(hobby.value)\">\r\n        <div>\r\n            <label for=\"hobbt\">Hobby</label>\r\n            <input type=\"text\" #hobby>\r\n        </div>\r\n    </form>\r\n    <ul>\r\n        <li *ngFor='let hobby of hobbies; let i = index'>\r\n            {{i+1}}: {{hobby}}\r\n            <button (click)=\"deleteHobby(hobby)\">X</button>\r\n        </li>\r\n    </ul>\r\n\r\n    <h1>Pedidos</h1>\r\n    <div *ngFor=\"let pedido of pedidos\">\r\n        <hr>\r\n        <h4>{{pedido.nome}}</h4>\r\n        <p>{{pedido.tipo}}</p>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_address__ = __webpack_require__("../../../../../src/app/models/address.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_address___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__models_address__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_pedido__ = __webpack_require__("../../../../../src/app/models/pedido.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_pedido___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__models_pedido__);
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
    function UserComponent(dataService) {
        this.dataService = dataService;
        this.name = 'John Doe';
        this.sexo = 'F';
        this.isEdit = false;
        console.log('Constructor');
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ngOnInit');
        this.sexo = 'M';
        this.age = 30;
        this.address = {
            street: 'Marcos Macedo',
            city: 'Fortaleza',
            state: 'CE'
        };
        this.hobbies = ['Write code', 'Watch movies', 'Listen to music'];
        this.hello = true;
        this.dataService.getPedidos().subscribe(function (pedidos) {
            console.log(pedidos);
            _this.pedidos = pedidos;
        });
    };
    UserComponent.prototype.onClick = function () {
        console.log('HELLO');
        this.name = 'Allan';
        this.hobbies.push('New hobby');
    };
    UserComponent.prototype.addHobby = function (hobby) {
        console.log(hobby);
        this.hobbies.unshift(hobby);
        return false;
    };
    UserComponent.prototype.deleteHobby = function (hobby) {
        console.log(hobby);
        for (var i = 0; i < this.hobbies.length; i++) {
            if (this.hobbies[i] == hobby) {
                this.hobbies.splice(i, 1);
            }
        }
    };
    UserComponent.prototype.toggleEdit = function () {
        this.isEdit = !this.isEdit;
    };
    return UserComponent;
}());
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/components/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], UserComponent);

var _a;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/address.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=address.js.map

/***/ }),

/***/ "../../../../../src/app/models/pedido.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=pedido.js.map

/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(http) {
        this.http = http;
        console.log('DataService connect');
    }
    DataService.prototype.getPedidos = function () {
        return this.http.get('https://rest-on-demand.herokuapp.com/api/pedido').map(function (res) { return res.json(); });
    };
    DataService.prototype.getApi = function (type) {
        return this.http.get('https://rest-on-demand.herokuapp.com/api/' + type).map(function (res) { return res.json(); });
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

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
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map