webpackJsonp([7],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BookPage = /** @class */ (function () {
    function BookPage(theInAppBrowser) {
        this.theInAppBrowser = theInAppBrowser;
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
    }
    BookPage.prototype.openWithSystemBrowser = function (url) {
        var target = "_system";
        this.theInAppBrowser.create(url, target, this.options);
    };
    BookPage.prototype.openWithInAppBrowser = function (url) {
        var target = "_blank";
        this.theInAppBrowser.create(url, target, this.options);
    };
    BookPage.prototype.openWithCordovaBrowser = function (url) {
        var target = "_self";
        this.theInAppBrowser.create(url, target, this.options);
    };
    BookPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-book',template:/*ion-inline-start:"C:\wamp64\www\23cbecimat\app-web-generate\src\pages\book\book.html"*/'<!--\n  Generated template for the BookPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Livro do Programa</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding>\n      <button ion-button (click)="openWithSystemBrowser(\'http://www.metallum.com.br/23cbecimat/livro\')">Clique para abrir</button>\n      \n  </ion-content>\n'/*ion-inline-end:"C:\wamp64\www\23cbecimat\app-web-generate\src\pages\book\book.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], BookPage);
    return BookPage;
}());

//# sourceMappingURL=book.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewsPage = /** @class */ (function () {
    function NewsPage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.getData();
    }
    NewsPage.prototype.getData = function () {
        var _this = this;
        var url = 'http://www.metallum.com.br/23cbecimat/app-lista/avisos.php';
        var data = this.http.get(url);
        data.subscribe(function (result) {
            //console.log(result);
            _this.items = result;
        });
    };
    NewsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsPage');
    };
    NewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news',template:/*ion-inline-start:"C:\wamp64\www\23cbecimat\app-web-generate\src\pages\news\news.html"*/'<!--\n  Generated template for the NewsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Avisos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card *ngFor="let item of items">\n      <ion-card-content>\n        {{ item.msg }}\n      </ion-card-content>\n    </ion-card>  \n  \n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\23cbecimat\app-web-generate\src\pages\news\news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OralPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_info__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_finally__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_finally__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the OralPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OralPage = /** @class */ (function () {
    function OralPage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.show = true;
        this.carregando = false;
        this.getData();
    }
    /*public notify() {
      console.log("Toggled: "+ this.isToggled);
    }*/
    OralPage.prototype.getData = function () {
        var _this = this;
        this.carregando = true;
        var url = '';
        if (this.isToggled == 1) {
            url = 'http://www.metallum.com.br/23cbecimat/app-lista/json.php?t=oral&t2=palestra';
        }
        else {
            url = 'assets/lista.json';
        }
        console.log(url);
        var data = this.http.get(url);
        data.finally(function () { _this.carregando = false; _this.initializeItems(); })
            .subscribe(function (result) {
            _this.lista = result;
            console.log(_this.lista);
        });
    };
    OralPage.prototype.initializeItems = function () {
        this.items = this.lista;
    };
    OralPage.prototype.getDias = function () {
        this.show = false;
        this.initializeItems();
        var val = event.srcElement.id;
        if (val && val.trim() != '' && val != 'all') {
            this.items = this.items.filter(function (item) {
                return (item.apres_data.toLowerCase().indexOf(val.toLowerCase()) > -1 &&
                    (item.tipo.toLowerCase().indexOf('oral'.toLowerCase()) > -1 ||
                        item.tipo.toLowerCase().indexOf('palestra'.toLowerCase()) > -1));
            });
        }
        else {
            this.items = this.items.filter(function (item) {
                return (item.tipo.toLowerCase().indexOf('oral'.toLowerCase()) > -1 ||
                    item.tipo.toLowerCase().indexOf('palestra'.toLowerCase()) > -1);
            });
        }
    };
    OralPage.prototype.getItems = function (ev) {
        this.initializeItems();
        var val = ev.target.value;
        //console.log(this.items);
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return ((item.referencia && item.titulo &&
                    item.apres_sessao && item.apres_data
                    && item.nome && item.tipo) &&
                    (item.referencia.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                        item.titulo.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                        item.apres_sessao.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                        item.apres_data.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                        item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                        item.tipo.toLowerCase().indexOf(val.toLowerCase()) > -1));
            });
        }
    };
    OralPage.prototype.viewInfo = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__info_info__["a" /* InfoPage */], { programa: item });
    };
    OralPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad OralPage');
    };
    OralPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-oral',template:/*ion-inline-start:"C:\wamp64\www\23cbecimat\app-web-generate\src\pages\oral\oral.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Programação Geral</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n    \n      <ion-item>\n          <ion-label>Utilizar programa online</ion-label>\n          <ion-toggle  [(ngModel)]="isToggled" (ionChange)="getData()"></ion-toggle>\n        </ion-item>\n    <div padding>\n        <ion-segment [(ngModel)]="program">\n            <ion-segment-button value="all" id="all" (click)=\'getDias($event);\'>\n                Todos\n              </ion-segment-button>\n          <ion-segment-button value="05" id="2018-11-05" (click)=\'getDias($event);\'>\n            05\n          </ion-segment-button>\n          <ion-segment-button value="06" id="2018-11-06" (click)=\'getDias($event);\'>\n              06\n            </ion-segment-button>\n            <ion-segment-button value="07" id="2018-11-07" (click)=\'getDias($event);\'>\n                07\n              </ion-segment-button>\n              <ion-segment-button value="08" id="2018-11-08" (click)=\'getDias($event);\'>\n                  08\n                </ion-segment-button>\n        </ion-segment>\n      </div>\n\n\n\n\n    <ion-searchbar (ionInput)="getItems($event)" placeholder="Buscar em todos os dias"></ion-searchbar>\n\n    <ion-spinner [ngClass]="carregando ? \'show\':\'hide\'"></ion-spinner>\n    \n    <div padding *ngIf="show">\n      Clique acima para listar as apresentações por dia.\n      <p>Caso possua internet você poderá habilitar o programa online que estará sempre atualizado.</p>\n      <p>O programa offline pode conter alterações não realizadas.</p>\n    </div>\n\n    <div [ngSwitch]="program">\n  <ion-list *ngSwitchCase="\'all\'">\n    <button ion-item *ngFor="let item of items" (click)="viewInfo(item)">\n      <ion-label>\n          <h3><small>{{item.referencia}}</small> {{ item.campo }} {{ item.titulo }}</h3>\n        <small>\n            {{item.apres_data.substr(-2)}} / {{item.apres_hora.substr(0,5)}} / {{item.apres_sessao}} / {{item.tipo}}\n            <br>{{item.nome}}\n          </small>\n      </ion-label>\n    </button>  \n  </ion-list>\n\n  <ion-list *ngSwitchCase="\'05\'">\n    <button ion-item *ngFor="let item of items" (click)="viewInfo(item)">\n      <ion-label>\n        <h3><small>{{item.referencia}}</small> {{ item.campo }} {{ item.titulo }}</h3>\n        <small>\n            {{item.apres_data.substr(-2)}} / {{item.apres_hora.substr(0,5)}} / {{item.apres_sessao}} / {{item.tipo}}\n            <br>{{item.nome}}\n          </small>\n      </ion-label>\n    </button>  \n  </ion-list>\n\n  <ion-list *ngSwitchCase="\'06\'">\n      <button ion-item *ngFor="let item of items" (click)="viewInfo(item)">\n        <ion-label>\n            <h3><small>{{item.referencia}}</small> {{ item.campo }} {{ item.titulo }}</h3>\n          <small>\n              {{item.apres_data.substr(-2)}} / {{item.apres_hora.substr(0,5)}} / {{item.apres_sessao}} / {{item.tipo}}\n              <br>{{item.nome}}\n            </small>\n        </ion-label>\n      </button>  \n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'07\'">\n        <button ion-item *ngFor="let item of items" (click)="viewInfo(item)">\n          <ion-label>\n              <h3><small>{{item.referencia}}</small> {{ item.campo }} {{ item.titulo }}</h3>\n            <small>\n                {{item.apres_data.substr(-2)}} / {{item.apres_hora.substr(0,5)}} / {{item.apres_sessao}} / {{item.tipo}}\n                <br>{{item.nome}}\n              </small>\n          </ion-label>\n        </button>  \n      </ion-list>\n\n      <ion-list *ngSwitchCase="\'08\'">\n          <button ion-item *ngFor="let item of items" (click)="viewInfo(item)">\n            <ion-label>\n                <h3><small>{{item.referencia}}</small> {{ item.campo }} {{ item.titulo }}</h3>\n              <small>\n                  {{item.apres_data.substr(-2)}} / {{item.apres_hora.substr(0,5)}} / {{item.apres_sessao}} / {{item.tipo}}\n                  <br>{{item.nome}}\n                </small>\n            </ion-label>\n          </button>  \n        </ion-list>\n\n</div>\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\23cbecimat\app-web-generate\src\pages\oral\oral.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], OralPage);
    return OralPage;
}());

//# sourceMappingURL=oral.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PosterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_info__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_finally__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_finally__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the OralPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PosterPage = /** @class */ (function () {
    function PosterPage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.show = true;
        this.carregando = false;
        this.getData();
    }
    /*public notify() {
      console.log("Toggled: "+ this.isToggled);
    }*/
    PosterPage.prototype.getData = function () {
        var _this = this;
        this.carregando = true;
        var url = '';
        if (this.isToggled == 1) {
            url = 'http://www.metallum.com.br/23cbecimat/app-lista/json.php';
        }
        else {
            url = 'assets/lista.json';
        }
        var data = this.http.get(url);
        data.finally(function () { _this.carregando = false; _this.initializeItems(); })
            .subscribe(function (result) {
            //console.log(result);
            _this.lista = result;
        });
    };
    PosterPage.prototype.initializeItems = function () {
        this.items = this.lista;
    };
    PosterPage.prototype.getDias = function () {
        this.show = false;
        this.initializeItems();
        var val = event.srcElement.id;
        if (val && val.trim() != '' && val != 'all') {
            this.items = this.items.filter(function (item) {
                return (item.apres_data.toLowerCase().indexOf(val.toLowerCase()) > -1 &&
                    item.tipo.toLowerCase().indexOf('poster'.toLowerCase()) > -1);
            });
        }
        else {
            this.items = this.items.filter(function (item) {
                return (item.tipo.toLowerCase().indexOf('poster'.toLowerCase()) > -1);
            });
        }
    };
    PosterPage.prototype.getItems = function (ev) {
        this.initializeItems();
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return ((item.referencia && item.titulo &&
                    item.apres_sessao && item.apres_data
                    && item.nome && item.tipo) &&
                    (item.referencia.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                        item.titulo.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                        item.apres_sessao.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                        item.apres_data.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                        item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                        item.tipo.toLowerCase().indexOf(val.toLowerCase()) > -1));
            });
        }
    };
    PosterPage.prototype.viewInfo = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__info_info__["a" /* InfoPage */], { programa: item });
    };
    PosterPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad OralPage');
    };
    PosterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-poster',template:/*ion-inline-start:"C:\wamp64\www\23cbecimat\app-web-generate\src\pages\poster\poster.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Programação Poster</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  \n  <ion-content padding>\n      \n        <ion-item>\n            <ion-label>Utilizar programa online</ion-label>\n            <ion-toggle  [(ngModel)]="isToggled" (ionChange)="getData()"></ion-toggle>\n          </ion-item>\n      <div padding>\n          <ion-segment [(ngModel)]="program">\n              <ion-segment-button value="all" id="all" (click)=\'getDias($event);\'>\n                  Todos\n                </ion-segment-button>\n            <ion-segment-button value="05" id="2018-11-05" (click)=\'getDias($event);\'>\n              05\n            </ion-segment-button>\n            <ion-segment-button value="06" id="2018-11-06" (click)=\'getDias($event);\'>\n                06\n              </ion-segment-button>\n              <ion-segment-button value="07" id="2018-11-07" (click)=\'getDias($event);\'>\n                  07\n                </ion-segment-button>\n                <ion-segment-button value="08" id="2018-11-08" (click)=\'getDias($event);\'>\n                    08\n                  </ion-segment-button>\n          </ion-segment>\n        </div>\n  \n  \n  \n  \n      <ion-searchbar (ionInput)="getItems($event)" placeholder="Buscar"></ion-searchbar>\n  \n      <ion-spinner [ngClass]="carregando ? \'show\':\'hide\'"></ion-spinner>\n      \n      <div padding *ngIf="show">\n        Clique acima para listar as apresentações por dia.\n        <p>Caso possua internet você poderá habilitar o programa online que estará sempre atualizado.</p>\n        <p>O programa offline pode conter alterações não realizadas.</p>\n      </div>\n  \n      <div [ngSwitch]="program">\n    <ion-list *ngSwitchCase="\'all\'">\n      <button ion-item *ngFor="let item of items" (click)="viewInfo(item)">\n        <ion-label>\n            <h3><small>{{item.referencia}}</small> {{ item.campo }} {{ item.titulo }}</h3>\n          <small>\n              {{item.apres_data.substr(-2)}} / {{item.apres_hora.substr(0,5)}} / {{item.apres_sessao}} / {{item.tipo}}\n              <br>{{item.nome}}\n            </small>\n        </ion-label>\n      </button>  \n    </ion-list>\n  \n    <ion-list *ngSwitchCase="\'05\'">\n      <button ion-item *ngFor="let item of items" (click)="viewInfo(item)">\n        <ion-label>\n          <h3><small>{{item.referencia}}</small> {{ item.campo }} {{ item.titulo }}</h3>\n          <small>\n              {{item.apres_data.substr(-2)}} / {{item.apres_hora.substr(0,5)}} / {{item.apres_sessao}} / {{item.tipo}}\n              <br>{{item.nome}}\n            </small>\n        </ion-label>\n      </button>  \n    </ion-list>\n  \n    <ion-list *ngSwitchCase="\'06\'">\n        <button ion-item *ngFor="let item of items" (click)="viewInfo(item)">\n          <ion-label>\n              <h3><small>{{item.referencia}}</small> {{ item.campo }} {{ item.titulo }}</h3>\n            <small>\n                {{item.apres_data.substr(-2)}} / {{item.apres_hora.substr(0,5)}} / {{item.apres_sessao}} / {{item.tipo}}\n                <br>{{item.nome}}\n              </small>\n          </ion-label>\n        </button>  \n      </ion-list>\n  \n      <ion-list *ngSwitchCase="\'07\'">\n          <button ion-item *ngFor="let item of items" (click)="viewInfo(item)">\n            <ion-label>\n                <h3><small>{{item.referencia}}</small> {{ item.campo }} {{ item.titulo }}</h3>\n              <small>\n                  {{item.apres_data.substr(-2)}} / {{item.apres_hora.substr(0,5)}} / {{item.apres_sessao}} / {{item.tipo}}\n                  <br>{{item.nome}}\n                </small>\n            </ion-label>\n          </button>  \n        </ion-list>\n  \n        <ion-list *ngSwitchCase="\'08\'">\n            <button ion-item *ngFor="let item of items" (click)="viewInfo(item)">\n              <ion-label>\n                  <h3><small>{{item.referencia}}</small> {{ item.campo }} {{ item.titulo }}</h3>\n                <small>\n                    {{item.apres_data.substr(-2)}} / {{item.apres_hora.substr(0,5)}} / {{item.apres_sessao}} / {{item.tipo}}\n                    <br>{{item.nome}}\n                  </small>\n              </ion-label>\n            </button>  \n          </ion-list>\n  \n  </div>\n  \n  </ion-content>\n  '/*ion-inline-end:"C:\wamp64\www\23cbecimat\app-web-generate\src\pages\poster\poster.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], PosterPage);
    return PosterPage;
}());

//# sourceMappingURL=poster.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SitePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SitePage = /** @class */ (function () {
    function SitePage(theInAppBrowser) {
        this.theInAppBrowser = theInAppBrowser;
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
    }
    SitePage.prototype.openWithSystemBrowser = function (url) {
        var target = "_system";
        this.theInAppBrowser.create(url, target, this.options);
    };
    SitePage.prototype.openWithInAppBrowser = function (url) {
        var target = "_blank";
        this.theInAppBrowser.create(url, target, this.options);
    };
    SitePage.prototype.openWithCordovaBrowser = function (url) {
        var target = "_self";
        this.theInAppBrowser.create(url, target, this.options);
    };
    SitePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-site',template:/*ion-inline-start:"C:\wamp64\www\23cbecimat\app-web-generate\src\pages\site\site.html"*/'<!--\n  Generated template for the SitePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Site</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding>\n      <button ion-button (click)="openWithSystemBrowser(\'http://www.metallum.com.br/23cbecimat\')">Clique para abrir</button>\n      \n  </ion-content>\n'/*ion-inline-end:"C:\wamp64\www\23cbecimat\app-web-generate\src\pages\site\site.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], SitePage);
    return SitePage;
}());

//# sourceMappingURL=site.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SponsorsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SponsorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SponsorsPage = /** @class */ (function () {
    function SponsorsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SponsorsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SponsorsPage');
    };
    SponsorsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sponsors',template:/*ion-inline-start:"C:\wamp64\www\23cbecimat\app-web-generate\src\pages\sponsors\sponsors.html"*/'<!--\n  Generated template for the SponsorsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Patrocinadores</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n        <img src="assets/imgs/reoterm.jpg"/>\n    </ion-card>\n    <ion-card>\n        <img src="assets/imgs/zwick.jpg"/>\n    </ion-card>\n    <ion-card>\n        <img src="assets/imgs/agilent.png"/>\n    </ion-card>\n    <ion-card>\n        <img src="assets/imgs/bruker.jpg"/>\n    </ion-card>\n    <ion-card>\n        <img src="assets/imgs/altman-malvern.jpg"/>\n    </ion-card>\n    <ion-card>\n        <img src="assets/imgs/fritish.jpg"/>\n    </ion-card>\n    <ion-card>\n        <img src="assets/imgs/dairix.jpg"/>\n    </ion-card>\n    <ion-card>\n        <img src="assets/imgs/horiba.jpg"/>\n    </ion-card>\n    <ion-card>\n        <img src="assets/imgs/mbraun.jpg"/>\n    </ion-card>\n    <ion-card>\n        <img src="assets/imgs/horiba.jpg"/>\n    </ion-card>\n    <ion-card>\n        <img src="assets/imgs/netzsch.jpg"/>\n    </ion-card>\n    <ion-card>\n        <img src="assets/imgs/quantum.png"/>\n    </ion-card>\n    <ion-card>\n        <img src="assets/imgs/tennessine.jpg"/>\n    </ion-card>\n    <ion-card>\n        <img src="assets/imgs/tescan.jpg"/>\n    </ion-card>\n    <ion-card>\n        <img src="assets/imgs/thermofisher.jpg"/>\n    </ion-card>\n    <ion-card>\n        <img src="assets/imgs/eirich.jpg"/>\n    </ion-card>\n    <ion-card>\n        <img src="assets/imgs/lynxbrasil.jpg"/>\n    </ion-card>\n      \n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\23cbecimat\app-web-generate\src\pages\sponsors\sponsors.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SponsorsPage);
    return SponsorsPage;
}());

//# sourceMappingURL=sponsors.js.map

/***/ }),

/***/ 121:
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
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/book/book.module": [
		285,
		6
	],
	"../pages/info/info.module": [
		286,
		5
	],
	"../pages/news/news.module": [
		287,
		4
	],
	"../pages/oral/oral.module": [
		288,
		3
	],
	"../pages/poster/poster.module": [
		289,
		2
	],
	"../pages/site/site.module": [
		290,
		1
	],
	"../pages/sponsors/sponsors.module": [
		291,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 163;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_finally__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_finally__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.carregando = true;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\wamp64\www\23cbecimat\app-web-generate\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding class="fundo">\n    <img src="assets/imgs/logo.png"/>\n    <h2>04 a 08 de Novembro de 2018</h2>\n    <h3>Foz do Iguaçu – PR – Brasil</h3>\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\23cbecimat\app-web-generate\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_info_info__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_news_news__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_sponsors_sponsors__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_site_site__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_book_book__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_oral_oral__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_poster_poster__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_in_app_browser__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_sponsors_sponsors__["a" /* SponsorsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_site_site__["a" /* SitePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_book_book__["a" /* BookPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_oral_oral__["a" /* OralPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_poster_poster__["a" /* PosterPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/book/book.module#BookPageModule', name: 'BookPage', segment: 'book', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info/info.module#InfoPageModule', name: 'InfoPage', segment: 'info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news/news.module#NewsPageModule', name: 'NewsPage', segment: 'news', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/oral/oral.module#OralPageModule', name: 'OralPage', segment: 'oral', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/poster/poster.module#OralPageModule', name: 'PosterPage', segment: 'poster', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/site/site.module#SitePageModule', name: 'SitePage', segment: 'site', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sponsors/sponsors.module#SponsorsPageModule', name: 'SponsorsPage', segment: 'sponsors', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_sponsors_sponsors__["a" /* SponsorsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_site_site__["a" /* SitePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_book_book__["a" /* BookPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_oral_oral__["a" /* OralPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_poster_poster__["a" /* PosterPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_news_news__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_book_book__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_sponsors_sponsors__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_site_site__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_oral_oral__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_poster_poster__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Programação Geral', component: __WEBPACK_IMPORTED_MODULE_9__pages_oral_oral__["a" /* OralPage */] },
            { title: 'Programação Poster', component: __WEBPACK_IMPORTED_MODULE_10__pages_poster_poster__["a" /* PosterPage */] },
            { title: 'Avisos', component: __WEBPACK_IMPORTED_MODULE_5__pages_news_news__["a" /* NewsPage */] },
            { title: 'Livro do Programa', component: __WEBPACK_IMPORTED_MODULE_6__pages_book_book__["a" /* BookPage */] },
            { title: 'Patrocinadores', component: __WEBPACK_IMPORTED_MODULE_7__pages_sponsors_sponsors__["a" /* SponsorsPage */] },
            { title: 'Site', component: __WEBPACK_IMPORTED_MODULE_8__pages_site_site__["a" /* SitePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\wamp64\www\23cbecimat\app-web-generate\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\wamp64\www\23cbecimat\app-web-generate\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoPage = /** @class */ (function () {
    function InfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.programa = this.navParams.get('programa');
    }
    InfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoPage');
    };
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info',template:/*ion-inline-start:"C:\wamp64\www\23cbecimat\app-web-generate\src\pages\info\info.html"*/'<!--\n  Generated template for the InfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Detalhes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n\n  \n    <ion-card-content>\n        <small>\n            Dia: {{programa.apres_data.substr(-2)}} Hora: {{programa.apres_hora.substr(0,5)}} Sessão: {{programa.apres_sessao}} ({{programa.tipo}})\n          </small>\n          <h3>{{programa.referencia}}</h3>\n          <h2> {{programa.titulo}}</h2> \n      <p>Apresentador: {{programa.nome}} - {{programa.instituicao_sigla}}</p>\n      <p>Resumo <br> {{programa.resumo}}</p>\n    </ion-card-content>\n  \n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\23cbecimat\app-web-generate\src\pages\info\info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], InfoPage);
    return InfoPage;
}());

//# sourceMappingURL=info.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map