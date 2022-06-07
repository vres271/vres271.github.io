(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/account/account.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/account/account.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3><span  class=\"text-capitalize\">{{'type.account'|translate}}</span> : {{(account?'Edit':'Create')|translate|lowercase }}</h3>\r\n<form  [formGroup]=\"accountForm\" (submit)=\"onAccountFormSubmit()\">\r\n  <fieldset  [disabled]=\"(account&&!app.accounts.r.m)||(!account&&!app.accounts.r.a)\" >\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label for=\"name\" translate>accounts.name</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"form-group\">\r\n              <label for=\"wtoken\" translate>accounts.wtoken</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"wtoken\" formControlName=\"wtoken\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-primary\">{{(account?'Save_changes':'Add_new')|translate}}</button>\r\n        <button *ngIf=\"account\" (click)=\"initAccount()\" type=\"button\" class=\"btn btn-secondary ml-1\" translate>accounts.Init</button>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div *ngIf=\"initializing\" class=\"silver text-center m-3\"><fa-icon [icon]=\"faCog\" [spin]=\"true\"></fa-icon> {{'accounts.Trying to init this Account'|translate}}...</div>\r\n        <div *ngIf=\"initResult\">\r\n          <div *ngIf=\"initResult.connected\" class=\"alert alert-success\" role=\"alert\">{{'accounts.Connected to Wialon as'|translate}} <strong>{{initResult.wuser.nm}}</strong></div>          \r\n          <div *ngIf=\"initResult.connect_error\" class=\"alert alert-danger\" role=\"alert\">{{'accounts.Wialon connect error'|translate}} <div>Error {{initResult.connect_error.error}}: {{initResult.connect_error.reason}}</div></div>          \r\n          <div *ngIf=\"initResult.wunits_loaded\" class=\"alert alert-success\" role=\"alert\">{{'accounts.Wialon Units list loaded'|translate}}: <strong>{{initResult.wunits.items.length}}</strong> {{'accounts.items'|translate}}</div>          \r\n          <div *ngIf=\"initResult.wunits_error\" class=\"alert alert-danger\" role=\"alert\">{{'accounts.Wialon Units list loading error'|translate}} <div>Error: {{initResult.wunits_error.error}}</div></div>          \r\n          <div *ngIf=\"initResult.wnotifications_loaded\" class=\"alert alert-success\" role=\"alert\">{{'accounts.Wialon Notifications found'|translate}}: <strong>{{initResult.wnotifications.items.length}}</strong> {{'accounts.items'|translate}}</div>          \r\n          <div *ngIf=\"initResult.wnotifications_error\" class=\"alert alert-danger\" role=\"alert\">{{'accounts.Wialon Notifications search error'|translate}} <div>Error: {{initResult.wnotifications_error.error}} : {{initResult.wnotifications_error.reason}}</div></div>          \r\n          <div *ngIf=\"initResult.fl_notification_found\" class=\"alert alert-success\" role=\"alert\">\r\n            {{'accounts.FuelLimit notification found'|translate}}:  <strong>{{initResult.fl_notification_found.n}}</strong>\r\n            <div *ngIf=\"initResult.fl_notification_found.un.length\">\r\n              {{'accounts.Used units'|translate}}:\r\n              <ul>\r\n                <li *ngFor=\"let nUnitId of initResult.fl_notification_found.un\">{{app.units._index.id[nUnitId].nm}}</li>\r\n              </ul>\r\n            </div>\r\n          </div>          \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </fieldset>\r\n  \r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/accounts/accounts.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/accounts/accounts.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-items-controls [app]=\"app\" [itemType]=\"itemType\" ></app-items-controls>\r\n<app-items-table [app]=\"app\" [itemType]=\"itemType\" [options]=\"tableOptions\"></app-items-table>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/app.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/app.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-header></app-header>\r\n<div id=\"outlet-container\" class=\"container-fluid\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/categories/categories.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/categories/categories.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-items-controls [app]=\"app\" [itemType]=\"itemType\" ></app-items-controls>\r\n<app-items-table [app]=\"app\" [itemType]=\"itemType\" [options]=\"tableOptions\"></app-items-table>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/category/category.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/category/category.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\r\n  <span  class=\"text-capitalize\">{{'type.category'|translate}}</span> : {{(category?'Edit':'Create')|translate|lowercase }}\r\n  <span  *ngIf=\"!category\">\r\n    (<span class=\"{{importMode?'pointer silver':''}}\" (click)=\"importMode=false\" translate>Single Item</span> | \r\n    <span  class=\"{{!importMode?'pointer silver':''}}\" (click)=\"importMode=true\" translate>Multiple</span>) \r\n  </span>\r\n</h3>\r\n\r\n<div *ngIf=\"importMode\">\r\n  <app-items-import [app]=\"app\" [itemType]=\"itemType\" [options]=\"importOptions\" (parse)=\"parsedItems=$event\"></app-items-import>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <button  type=\"button\" (click)=\"importItems(parsedItems.items)\" [disabled]=\"!parsedItems.items.length||parsedItems.errors.length||!app.categories.ready\"  class=\"btn btn-primary btn-block\" >{{(category?'Save_changes':'Add new Items')|translate}} ({{parsedItems.items.length}})</button> \r\n    </div>\r\n    <div class=\"col-md-8\">\r\n      <div *ngIf=\"multiAddErrors.length\" class=\"alert alert-danger\" role=\"alert\">\r\n        <b><span  class=\"text-capitalize\" translate>errors</span>: {{multiAddErrors.length}}</b>\r\n        <ul>\r\n          <li *ngFor=\"let res of multiAddErrors\"><span *ngIf=\"res.error\">{{res.error}}</span></li>\r\n        </ul>\r\n      </div>\r\n      <div *ngIf=\"parsedItems.errors&&parsedItems.errors.length\" class=\"alert alert-danger\" role=\"alert\">\r\n        <b><span  class=\"text-capitalize\" translate>errors</span>: {{parsedItems.errors.length}}</b>\r\n        <ul>\r\n          <li *ngFor=\"let error of parsedItems.errors\">\r\n            <span translate>row</span>: {{error.row}}, \r\n            <span translate>field</span>: <span class=\"font-italic\" translate>categories.{{error.fieldName}}</span>, \r\n            <span translate>error</span>: <span class=\"font-italic\" translate>{{error.result.msg}}</span></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<form  [formGroup]=\"itemForm\"  *ngIf=\"!importMode\" (submit)=\"onItemFormSubmit()\">\r\n  <fieldset  [disabled]=\"(category&&!app.categories.r.m)||(!category&&!app.categories.r.a)\" >\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"seasonId\" translate>categories.seasonId</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"seasonId\" formControlName=\"seasonId\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\" translate>categories.name</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"ageFrom\" translate>categories.ageFrom</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"ageFrom\" formControlName=\"ageFrom\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"ageTo\" translate>categories.ageTo</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"ageTo\" formControlName=\"ageTo\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary\">{{(category?'Save_changes':'Add_new')|translate}}</button>\r\n  </fieldset>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/commands/commands.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/commands/commands.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"commandForm\" (submit)=\"sendCommand()\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <div class=\"input-group\">\r\n        <div class=\"input-group-prepend\">\r\n          <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"showSendedComandsList=!showSendedComandsList\" translate>Prev</button>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"text\"  placeholder=\"{{'Command text'|translate}}\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <app-search-select [item]=\"command\" [refSvc]=\"app.units\" [form]=\"commandForm\" [controlIdKey]=\"'units_id'\"  [refNameKey]=\"'nm'\"></app-search-select>\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n      <select class=\"form-control\"  formControlName=\"service\" >\r\n        <option value=\"wialon\">Wialon</option>\r\n        <option value=\"flespi\" disabled>Flespi</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <button type=\"submit\"  class=\"ml-2 btn btn-primary\" translate >Send</button>\r\n      <button type=\"button\" (click)=\"getCommandsMessages()\"  class=\"ml-2 btn btn-light\" translate>Messages</button>\r\n    </div>\r\n  </div>\r\n</form>\r\n\r\n<div *ngIf=\"showSendedComandsList\" class=\"card mt-2\" style=\"position: absolute;\">\r\n  <div class=\"card-body\">\r\n    <div *ngFor=\"let text of sendedCommandsList; index as i;\">\r\n      <span class=\"tomato pointer\" (click)=\"delCommandFromSendedList(text);\"><span class=\"mr-5\">X</span></span>\r\n      <span class=\"pointer\" (click)=\"setCommandText(text); showSendedComandsList=false; \">{{text}}</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"commands.sending\" class=\"card mt-2\" style=\"position: absolute; left: 40%;\">\r\n  <div class=\"card-body\">\r\n    <div  class=\"silver text-center \"><fa-icon [icon]=\"faCog\" [spin]=\"true\"></fa-icon> {{'Waiting for sending command...'|translate}}</div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"messages.waiting\" class=\"card mt-2\" style=\"position: absolute; left: 40%;\">\r\n  <div class=\"card-body\">\r\n    <div class=\"silver text-center \"><fa-icon [icon]=\"faCog\" [spin]=\"true\"></fa-icon> {{'Waiting for request messages...'|translate}}</div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"commandResult\" class=\"mt-2\">\r\n  <label>\r\n    <h5 style=\"display: inline;\">Sending result: {{commands.sending?'...':''}} {{!commands.sending&&(commandResult.error?'no':'yes')}}</h5>\r\n      <span class=\"pointer badge badge-light\" (click)=\"showResult=false\">Hide</span> \r\n      <span class=\"pointer badge badge-{{!viewAsSource?'primary':'secondary'}}\" (click)=\"viewAsSource=false; showResult=true;\">Parsed</span> \r\n      <span class=\"ml-1 pointer badge badge-{{viewAsSource?'primary':'secondary'}}\" (click)=\"viewAsSource=true; showResult=true;\">Source</span>\r\n  </label>\r\n  <div *ngIf=\"showResult\">\r\n    <div *ngIf=\"!viewAsSource\">\r\n      <table class=\"table\">\r\n        <tbody>\r\n          <tr>\r\n            <td>{{commandResult.request_time*1000|date: 'yyyy-MM-dd HH:mm:ss'}}</td>\r\n            <td>Request</td>\r\n            <td>{{commandResult.request}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td>{{commandResult.response_time*1000|date: 'yyyy-MM-dd HH:mm:ss'}}</td>\r\n            <td>Response</td>\r\n            <td>\r\n              {{commandResult.response}}\r\n              <div *ngIf=\"commandResult.create_command\">create_command: {{commandResult.create_command[0]}}</div>\r\n              <div *ngIf=\"commandResult.sended!==undefined\">sended: {{!commandResult.error?'yes':'no'}} <span class=\"red\">{{commandResult.error|json}}</span></div>\r\n              <div *ngIf=\"commandResult.delete_command\">delete_command: {{commandResult.delete_command[0]}}</div>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <pre *ngIf=\"viewAsSource\" style=\"font-size: 12px; font-family: 'Lucida Console', Monaco, monospace; color: rgba(0,0,0,.7);\">{{commandResult|json}}</pre>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"messages.items.length\" class=\"mt-2\">\r\n    <h5>Commands log</h5>\r\n    <table class=\"table\">\r\n      <colgroup>\r\n        <col width=\"180px\">\r\n        <col width=\"50px\">\r\n      </colgroup>\r\n      <tbody>\r\n        <tr *ngFor=\"let message of messages.items\">\r\n          <td>{{message.t*1000|date: 'yyyy-MM-dd HH:mm:ss'}}</td>\r\n          <td>\r\n            <fa-icon *ngIf=\"message.cp\" [icon]=\"faAngleDoubleLeft\" ></fa-icon>\r\n            <fa-icon *ngIf=\"!message.cp\" [icon]=\"faAngleDoubleRight\" ></fa-icon>\r\n          </td>\r\n          <!-- <td>{{message.pos.x}},{{message.pos.y}}</td> -->\r\n          <td>{{message.p.gprs_answer}}{{message.cp}}</td>\r\n          <!-- <td><span *ngFor=\"let key of message.p|keys\">{{key}}: {{message.p[key]}};</span></td> -->\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n</div>\r\n\r\n\r\n\r\n    <!-- <div class=\"col-md-4\"> -->\r\n          <!-- RFIDSet 6651865,1,5000,150 -->\r\n          <!-- <br>RFIDInfo 6651865 -->\r\n    <!-- </div> -->\r\n<!-- <div class=\"row mb-4\"> -->\r\n  <!-- <div class=\"col-md-1\"> -->\r\n    <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"test.delay\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Delay\"> -->\r\n  <!-- </div> -->\r\n  <!-- <div class=\"col-md-1\"> -->\r\n    <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"test.N\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"N\"> -->\r\n  <!-- </div> -->\r\n  <!-- <div class=\"col-md-1\"> -->\r\n    <!-- <button type=\"button\" (click)=\"testLimit()\"  class=\" btn btn-primary\">testLimit</button> -->\r\n  <!-- </div> -->\r\n  <!-- <div class=\"col-md-1\"> -->\r\n    <!-- <button type=\"button\" (click)=\"testLimitParallel()\"  class=\" btn btn-primary\">testLimitParallel</button> -->\r\n  <!-- </div> -->\r\n<!-- </div> -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/common/input-tree/input-tree.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/common/input-tree/input-tree.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"input_tree_{{controlIdKey}}\" class=\"tree\"></div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/common/items-controls/items-controls.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/common/items-controls/items-controls.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\r\n  <div class=\"form-row\">\r\n    <div *ngIf=\"addPath\" class=\"col\" style=\"max-width: 62px; min-width: 62px;\">  \r\n      <button  type=\"button\" class=\"form-control\" [disabled]=\"!svc.r.a\" routerLink=\"/{{addPath}}\" class=\"btn btn-secondary\" translate>Add</button>\r\n    </div>\r\n    <div class=\"col filter\" *ngFor=\"let inputName of s.filter|keys\">\r\n      <input [(ngModel)]=\"s.filter[inputName]\" [ngModelOptions]=\"{standalone: true}\" type=\"text\" class=\"form-control\" placeholder=\"{{(itemType+'.'+inputName)|translate}}\">\r\n    </div>\r\n    <div class=\"col\" style=\"max-width: 51px; min-width: 51px;\">\r\n      <button type=\"button\" (click)=\"resetFilter()\" class=\"btn btn-light\"><fa-icon  [icon]=\"faBan\" class=\"grey\" title=\"Reset filters\"></fa-icon></button>\r\n    </div>\r\n    <div class=\"col\" style=\"max-width: 100px; min-width: 100px;\">\r\n      <select  [(ngModel)]=\"s.limit\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\r\n        <option *ngFor=\"let _limit of limits\">{{_limit}}</option>\r\n      </select>\r\n    </div>\r\n    <div *ngIf=\"options.exportBtn\" class=\"col\" style=\"max-width: 45px; min-width: 45px;\">\r\n      <button type=\"button\" (click)=\"export()\" class=\"btn btn-light\"><fa-icon  [icon]=\"faFileExcel\" class=\"grey\" title=\"Export table to Excell file (xlsx)\"></fa-icon></button>\r\n    </div>\r\n    <div *ngIf=\"options.clearBtn\" class=\"col\" >\r\n      <button *ngIf=\"!clearDialog\" type=\"button\" (click)=\"clearDialog = true\" class=\"btn btn-light\"><fa-icon  [icon]=\"faTrashAlt\" class=\"tomato\" title=\"Clear table\"></fa-icon></button>\r\n      <button *ngIf=\"clearDialog\" type=\"button\" (click)=\"clearDialog = false\" class=\"btn btn-outline-secondary\">Cancel</button>\r\n      <button *ngIf=\"clearDialog\" type=\"button\" (click)=\"clear();\" class=\"btn btn-danger ml-2\">Clear</button>\r\n\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/common/items-import/items-import.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/common/items-import/items-import.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"row\">\r\n          <div class=\"col\" *ngFor=\"let field of options.fields\">\r\n            <label translate>tags.{{field.name}}</label>\r\n            <div>\r\n            <select   [(ngModel)]=\"field.src\"  (change)=\"parseSrcData()\"  class=\"form-control\">\r\n              <option value=\"skip\" translate>ITEMS-IMPORT.skip</option>\r\n              <option value=\"value\" translate>ITEMS-IMPORT.value</option>\r\n              <option value=\"0\">{{'ITEMS-IMPORT.column'|translate}} 1</option>\r\n              <option value=\"1\">{{'ITEMS-IMPORT.column'|translate}} 2</option>\r\n              <option value=\"2\">{{'ITEMS-IMPORT.column'|translate}} 3</option>\r\n              <option value=\"3\">{{'ITEMS-IMPORT.column'|translate}} 4</option>\r\n              <option value=\"4\">{{'ITEMS-IMPORT.column'|translate}} 5</option>\r\n              <option value=\"5\">{{'ITEMS-IMPORT.column'|translate}} 6</option>\r\n              <option value=\"6\">{{'ITEMS-IMPORT.column'|translate}} 7</option>\r\n              <option value=\"7\">{{'ITEMS-IMPORT.column'|translate}} 8</option>\r\n              <option value=\"8\">{{'ITEMS-IMPORT.column'|translate}} 9</option>\r\n              <option value=\"9\">{{'ITEMS-IMPORT.column'|translate}} 10</option>\r\n            </select>        \r\n            <input *ngIf=\"field.src==='value'\" [(ngModel)]=\"field.value\"  (keyup)=\"parseSrcData()\" (change)=\"parseSrcData()\" type=\"text\" class=\"form-control mt-1\" placeholder=\"{{'ITEMS-IMPORT.Enter constant value'|translate}}\">\r\n            </div>\r\n          </div> \r\n          <div class=\"col\" style=\"min-width: 150px; max-width: 150px;\">\r\n            <label translate>ITEMS-IMPORT.delitmer</label>\r\n            <select   [(ngModel)]=\"delitmer\"  (change)=\"parseSrcData()\"  class=\"form-control\">\r\n              <option value=\"\" translate>ITEMS-IMPORT.auto</option>\r\n              <option value=\"\\s\" translate>ITEMS-IMPORT.space</option>\r\n              <option value=\"\\t\" translate>ITEMS-IMPORT.tabulation</option>\r\n              <option value=\",\">,</option>\r\n              <option value=\";\">;</option>\r\n            </select>        \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row mt-2\">\r\n  <div class=\"col-md-4\">\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleFormControlTextarea1\" translate>ITEMS-IMPORT.Source data</label>\r\n      <textarea class=\"form-control\" (change)=\"parseSrcData()\" (keyup)=\"parseSrcData()\" [(ngModel)]=\"srcData\" id=\"exampleFormControlTextarea1\" rows=\"10\"></textarea>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-8\">\r\n    <label  translate>ITEMS-IMPORT.Parsed Items</label>\r\n    <div class=\"p-1 table-wrapper\">\r\n      <table class=\"table table-sm\" *ngIf=\"parsedItems&&parsedItems.length\">\r\n        <thead>\r\n          <tr>\r\n            <th width=\"50px\"></th>\r\n            <th *ngFor=\"let field of notSkypped(options.fields)\"  translate>tags.{{field.name}}</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let item of parsedItems; index as i;\">\r\n            <td class=\"silver\"><small>{{i+1}}</small></td>\r\n            <td \r\n              *ngFor=\"let key of item | keys\" \r\n              class=\"{{item._state&&item._state[key]&&'table-'+item._state[key].class}} {{key==='_state'&&'hidden'}}\"\r\n              title=\"{{item._state&&item._state[key]&&item._state[key].msg|translate}}\"\r\n              >{{item[key]}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>    \r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/common/items-paginator/items-paginator.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/common/items-paginator/items-paginator.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav *ngIf=\"result.items.length-s.limit>0\" aria-label=\"Page navigation example\">\r\n  <ul class=\"pagination justify-content-center\">\r\n    <li class=\"page-item pointer\"><span (click)=\"s.limit=s.limit*2\" class=\"page-link\" >{{'ITEMS-PAGINATOR.Show_other_n_rows' | translate : {n:((result.items.length-s.limit>=s.limit)?s.limit:(result.items.length-s.limit))} }}</span></li>\r\n  </ul>\r\n</nav>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/common/items-table/items-table.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/common/items-table/items-table.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"svc.r.r\">\r\n  <table  class=\"mt-2 table {{!svc.ready?'not-ready':'ready'}}\" id=\"items-table\">\r\n    <thead>\r\n      <tr>\r\n        <th *ngIf=\"options.indexCol\" scope=\"col\" width=\"30px\">#</th>\r\n        <th *ngIf=\"options.logLink\" scope=\"col\" width=\"30px\"></th>\r\n        <th scope=\"col\" *ngFor=\"let fieldName of options.fieldNames\" translate>{{itemType+'.'+fieldName}}</th>\r\n        <th scope=\"col\" width=\"30px\"></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr \r\n        [ngClass]=\"[(item._added?'added':''),(item.b?'blocked':'')]\" \r\n        title=\"{{(item.b?('blocked '+(item.b|date : 'yyyy-MM-dd HH:mm:ss')):'')}}\"  \r\n        *ngFor=\"let item of svc.items | myFilter: s.filter | orderBy : options.orderBy | asResult : result | slice:0:s.limit ; index as i;\"\r\n        >\r\n        <th *ngIf=\"options.indexCol\" scope=\"row\">{{i+1}}</th>\r\n        <td *ngIf=\"options.logLink\"><a class=\"{{!app.log.r.d&&'disabled'}}\" href=\"\" [routerLink]=\"'/log/'+app.ref.object_types[itemType]+'/'+item.id\" title=\"Show log by this item\"><fa-icon [icon]=\"faListAlt\"></fa-icon></a></td>\r\n        <td *ngFor=\"let fieldName of options.fieldNames; index as i; \" >\r\n          <a \r\n            *ngIf=\"options.fields&&options.fields[fieldName]&&options.fields[fieldName].type==='link'\" \r\n            href=\"\" \r\n            [routerLink]=\"linkPath(item, fieldName)\" \r\n            title=\"{{'Edit'|translate}}\"\r\n            >{{item[fieldName]}}</a>\r\n          <span \r\n            *ngIf=\"options.fields&&options.fields[fieldName]&&options.fields[fieldName].type==='icon' && options.fields[fieldName].expr(item)\" \r\n            [title]=\"options.fields[fieldName].title\" \r\n            style=\"white-space: nowrap;\">\r\n            <fa-icon [icon]=\"options.fields[fieldName].icon\" class=\"{{options.fields[fieldName].classes}}\"></fa-icon>\r\n            <sup *ngIf=\"options.fields[fieldName].badge\">\r\n              <span class=\"badge badge-{{options.fields[fieldName].badge.class}}\">{{options.fields[fieldName].badge.expr(item)}}</span>\r\n            </sup>\r\n          </span>\r\n          <span *ngIf=\"options.fields&&options.fields[fieldName]&&options.fields[fieldName].type==='large'\" title=\"{{item[fieldName]}}\">{{item[options.fields[fieldName].shortName]}}</span>\r\n          <span *ngIf=\"options.fields&&options.fields[fieldName]&&options.fields[fieldName].type==='date'\" title=\"{{item[fieldName]|date : options.fields[fieldName].format?options.fields[fieldName].format:'yyyy-MM-dd HH:mm:ss'}}\">{{item[fieldName]|date : options.fields[fieldName].format?options.fields[fieldName].format:'yyyy-MM-dd HH:mm:ss'}}</span>\r\n          <span *ngIf=\"options.fields&&options.fields[fieldName]&&options.fields[fieldName].type==='edit'\"><input type=\"text\" class=\"form-control\" [ngModel]=\"item[fieldName]\" (change)=\"save(item, fieldName, $event)\"></span>\r\n          <span *ngIf=\"!(options.fields&&options.fields[fieldName])\">{{item[fieldName]}}</span>\r\n        </td>\r\n        <td *ngIf=\"options.delBtn\"><span class=\"tomato pointer {{!(svc.r.d&&!item.b)&&'disabled'}}\" (click)=\"(svc.r.d&&!item.b)&&del(item);\" title=\"{{'Del'|translate}}\"><fa-icon [icon]=\"faTrashAlt\"></fa-icon></span></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n<div  *ngIf=\"!svc.r.r\" class=\"alert alert-warning text-center\" role=\"alert\">{{'ITEMS-TABLE.Access_denied' | translate}} {{'types.'+itemType| translate}}</div>\r\n<app-items-paginator [state]=\"app.state.items[itemType]\"     [result]=\"result\"></app-items-paginator>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/common/multi-select/multi-select.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/common/multi-select/multi-select.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<fieldset [disabled]=\"disabled\">\r\n  <div>\r\n    <div class=\"form-group select-container\">\r\n      <label for=\"added_items_{{controlIdKey}}\">{{'Added'|translate}} <span  translate>types.{{controlIdKey}}</span></label>\r\n      <select multiple size=\"10\" class=\"form-control\" *ngIf=\"refSvc.ready\" id=\"added_items_{{controlIdKey}}\" >\r\n        <option (dblclick)=\"removeItem(optionItem); \"  *ngFor=\"let optionItem of refSvc.items|inListFilter : form.controls[controlIdKey].value : true\"  value=\"{{optionItem.id}}\">{{keyNames(optionItem)}}</option>\r\n      </select>    \r\n    </div>\r\n    <div class=\" buttons-container\">\r\n      <button (click)=\"addItems()\" type=\"button\" class=\"btn btn-light\" ><</button>\r\n      <button (click)=\"removeItems()\" type=\"button\" class=\"btn btn-light\" >></button>\r\n    </div>\r\n    <div class=\"form-group select-container\">\r\n      <label  for=\"other_items_{{controlIdKey}}\">{{'All_Other'|translate}} <span  translate>types.{{controlIdKey}}</span></label>\r\n      <select multiple size=\"10\" class=\"form-control\" *ngIf=\"refSvc.ready\" id=\"other_items_{{controlIdKey}}\">\r\n        <option (dblclick)=\"addItem(optionItem)\" *ngFor=\"let optionItem of refSvc.items|inListFilter : form.controls[controlIdKey].value : false\" value=\"{{optionItem.id}}\">{{keyNames(optionItem)}}</option>\r\n      </select>    \r\n    </div>\r\n  </div>\r\n</fieldset>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/common/search-select/search-select.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/common/search-select/search-select.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"select-container\">\r\n  <input \r\n    type=\"{{!filterShow?'text':'hidden'}}\"\r\n    \r\n    value=\"{{(refSvc.ready&&refSvc._index.id[form.controls[controlIdKey].value])?refSvc._index.id[form.controls[controlIdKey].value][refNameKey]:''}}\" \r\n    (focus)=\"filterShow=true\"\r\n    class=\"form-control\"  \r\n    placeholder=\"{{(!refSvc.ready?'SEARCH-SELECT.Loading_list':'')|translate}}\" \r\n  >\r\n  <div class=\"select-dropdown\" *ngIf=\"filter&&filter.length>0\" >\r\n    <!-- <div *ngIf=\"filter&&filter.length>0&&(result.items.length<1)\" class=\"silver text-center\" style=\"padding: 15px;\">Not found</div> -->\r\n    <div *ngIf=\"!refSvc.ready\" class=\"loading-spinner silver text-center\" ><fa-icon [icon]=\"faCog\" [spin]=\"true\"></fa-icon></div>\r\n    <div *ngIf=\"refSvc.ready\" (click)=\"form.controls[controlIdKey].setValue(0); filter=''; filterShow=false; srcFilter='';\"  class=\"pointer silver text-center\" > -- {{'SEARCH-SELECT.Not selected'|translate}} -- </div>\r\n    <div \r\n      (click)=\"form.controls[controlIdKey].setValue(item.id); filter=''; filterShow=false;  srcFilter='';\" \r\n      *ngFor=\"let item of refSvc.items | myFilter:filter:[refNameKey] \" \r\n      class=\"pointer\" \r\n      >{{item[refNameKey]}}</div>\r\n  </div>\r\n  <div *ngIf=\"filterShow\" class=\"select-filter\">\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" debounce [delay]=\"400\"   (func)=\"filter=srcFilter\" (blur)=\"filterShow=false; \" [(ngModel)]=\"srcFilter\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\"  name=\"filter\" placeholder=\"{{'SEARCH-SELECT.Search_another_Item'|translate}}\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/competitor/competitor.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/competitor/competitor.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\r\n  <span  class=\"text-capitalize\">{{'type.competitor'|translate}}</span> : {{(competitor?'Edit':'Create')|translate|lowercase }}\r\n  <span  *ngIf=\"!competitor\">\r\n    (<span class=\"{{importMode?'pointer silver':''}}\" (click)=\"importMode=false\" translate>Single Item</span> | \r\n    <span  class=\"{{!importMode?'pointer silver':''}}\" (click)=\"importMode=true\" translate>Multiple</span>) \r\n  </span>\r\n\r\n</h3>\r\n\r\n<div *ngIf=\"importMode\">\r\n  <app-items-import [app]=\"app\" [itemType]=\"itemType\" [options]=\"importOptions\" (parse)=\"parsedItems=$event\"></app-items-import>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <button  type=\"button\" (click)=\"importItems(parsedItems.items)\" [disabled]=\"!parsedItems.items.length||parsedItems.errors.length||!app.competitors.ready\"  class=\"btn btn-primary btn-block\" >{{(competitor?'Save_changes':'Add new Items')|translate}} ({{parsedItems.items.length}})</button> \r\n    </div>\r\n    <div class=\"col-md-8\">\r\n      <div *ngIf=\"multiAddErrors.length\" class=\"alert alert-danger\" role=\"alert\">\r\n        <b><span  class=\"text-capitalize\" translate>errors</span>: {{multiAddErrors.length}}</b>\r\n        <ul>\r\n          <li *ngFor=\"let res of multiAddErrors\"><span *ngIf=\"res.error\">{{res.error}}</span></li>\r\n        </ul>\r\n      </div>\r\n      <div *ngIf=\"parsedItems.errors&&parsedItems.errors.length\" class=\"alert alert-danger\" role=\"alert\">\r\n        <b><span  class=\"text-capitalize\" translate>errors</span>: {{parsedItems.errors.length}}</b>\r\n        <ul>\r\n          <li *ngFor=\"let error of parsedItems.errors\">\r\n            <span translate>row</span>: {{error.row}}, \r\n            <span translate>field</span>: <span class=\"font-italic\" translate>competitors.{{error.fieldName}}</span>, \r\n            <span translate>error</span>: <span class=\"font-italic\" translate>{{error.result.msg}}</span></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<form  [formGroup]=\"competitorForm\"  *ngIf=\"!importMode\" (submit)=\"onCompetitorFormSubmit()\">\r\n  <fieldset  [disabled]=\"(competitor&&!app.competitors.r.m)||(!competitor&&!app.competitors.r.a)\" >\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"regDate\" translate>competitors.regDate</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"regDate\" formControlName=\"regDate\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"num\" translate>competitors.num</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"num\" formControlName=\"num\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name1\" translate>competitors.name1</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"name1\" formControlName=\"name1\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name2\" translate>competitors.name2</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"name2\" formControlName=\"name2\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name3\" translate>competitors.name3</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"name3\" formControlName=\"name3\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"birdthDate\" translate>competitors.birdthDate</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"birdthDate\" formControlName=\"birdthDate\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"categoryId\" translate>competitors.categoryId</label>\r\n          <input type=\"hidden\" class=\"form-control\" id=\"categoryId\" formControlName=\"categoryId\">\r\n          <app-search-select [item]=\"item\" [refSvc]=\"app.categories\" [form]=\"competitorForm\" [controlIdKey]=\"'categoryId'\"  [refNameKey]=\"'name'\"></app-search-select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- <div class=\"row\"> -->\r\n      <!-- <div class=\"col-md-4\"> -->\r\n        <!-- <div class=\"form-group\"> -->\r\n          <!-- <label for=\"categoryId\" translate>competitors.categoryId</label> -->\r\n          <!-- <input type=\"text\" class=\"form-control\" id=\"categoryId\" formControlName=\"categoryId\"> -->\r\n        <!-- </div> -->\r\n      <!-- </div> -->\r\n    <!-- </div> -->\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"team\" translate>competitors.team</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"team\" formControlName=\"team\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"desc\" translate>competitors.desc</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"desc\" formControlName=\"desc\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary\">{{(competitor?'Save_changes':'Add_new')|translate}}</button>\r\n  </fieldset>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/competitors/competitors.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/competitors/competitors.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-items-controls [app]=\"app\" [itemType]=\"itemType\" [options]=\"contolsOptions\"></app-items-controls>\r\n<app-items-table [app]=\"app\" [itemType]=\"itemType\" [options]=\"tableOptions\"></app-items-table>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/distributions/distributions.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/distributions/distributions.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-items-controls [app]=\"app\" [itemType]=\"itemType\" ></app-items-controls>\r\n<app-items-table [app]=\"app\" [itemType]=\"itemType\" [options]=\"tableOptions\"></app-items-table>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/go/go.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/go/go.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!app.go.race\">\r\n  <h4>Select race:</h4>\r\n    <table  class=\"mt-2 table\" id=\"items-table\">\r\n      <tr *ngFor=\"let item of app.races.items\">\r\n        <td><a class=\"nav-link\" routerLink=\"/go/{{item.id}}\"  href=\"\">{{item.name}}</a></td>\r\n      </tr>\r\n    </table>\r\n</div>\r\n\r\n<div *ngIf=\"app.go.race\">\r\n  <div class=\"row\"  id=\"recontainer\" >\r\n    <div class=\"col-md-7 \">\r\n      <div >\r\n        <form class=\"form-inline mb-2\">\r\n          <div class=\"form-group mr-1\">\r\n            <button type=\"button\" (click)=\"resetEventsFilter()\" class=\"btn btn-light\"><fa-icon  [icon]=\"faBan\" class=\"grey\" title=\"Reset filters\"></fa-icon></button>\r\n          </div>\r\n          <div class=\"form-group mr-1\">\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"s.eventsFilter.competitorNameNum\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Участник\">\r\n          </div>\r\n          <div class=\"form-group mr-1\">\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"s.eventsFilter.categoryName\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Категория\">\r\n          </div>\r\n          <div class=\"form-group mr-1\">\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"s.eventsFilter._lap\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Круг\">\r\n          </div>\r\n          <div class=\"form-group mr-1\">\r\n            <select class=\"form-control\" [(ngModel)]=\"s.eventsTimeScale\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Масштаб времени\">\r\n              <option value=\"\">0</option>\r\n              <option value=\"10000\">1/10000</option>\r\n              <option value=\"1000\">1/1000</option>\r\n              <option value=\"100\">1/100</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group mr-1\">\r\n            <select class=\"form-control\" [(ngModel)]=\"s.eventsLimit\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Кол-во\">\r\n              <option value=\"10000\">10000</option>\r\n              <option value=\"1000\">1000</option>\r\n              <option value=\"100\">100</option>\r\n              <option value=\"50\">50</option>\r\n              <option value=\"20\">20</option>\r\n            </select>\r\n          </div>\r\n        </form>\r\n        <div class=\"scrolled\">\r\n          <div \r\n            *ngFor=\"let item of app.go.raceEvents  | myFilter: s.eventsFilter| slice:0:s.eventsLimit; index as i;\" \r\n            class=\"row reg {{item.eventType==2?'start':''}} {{item.eventType==3?'finish':''}}\"\r\n            (dblclick)=\"switchEditEventForm(item)\"\r\n            [ngStyle]=\"s.eventsTimeScale?{'margin-top': delayH(item, app.go.raceEvents, i)}:{}\"\r\n            >\r\n            <div class=\"col-md-1\">\r\n              <h3>{{item.competitorNum}}</h3>\r\n              <button *ngIf=\"editEventId===item.id\" type=\"button\" (click)=\"saveEvent(item)\" class=\"btn btn-primary\"><fa-icon  [icon]=\"faSave\"  title=\"Save\"></fa-icon></button>\r\n            </div>\r\n            <div class=\"col-md-5\">\r\n              <div *ngIf=\"editEventId!==item.id\">{{item.competitorName}}</div>\r\n              <div *ngIf=\"editEventId===item.id\">\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"editEventFilter.fullNameNum\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Участник\" (keyup)=\"setEditCopetitorId(item)\">\r\n                <select class=\"form-control\"  [(ngModel)]=\"item.competitorId\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Масштаб времени\">\r\n                  <option value=\"{{competitor.id}}\" *ngFor=\"let competitor of app.competitors.items | myFilter: editEventFilter | slice:0:10| asResult : editEventFilterresult;\">{{competitor.fullNameNum}}</option>\r\n                </select>\r\n              </div>\r\n              <small>\r\n                {{(item.t-app.go.start.t-4*3600000)|date:'HH:mm:ss.SSS'}}\r\n                <span *ngIf=\"item._lapT\">{{(item._lapT-4*3600000)|date:'HH:mm:ss.SSS'}}</span>\r\n              </small>\r\n              <h4 *ngIf=\"item.eventType==2\">Start Race</h4>\r\n              <h4 *ngIf=\"item.eventType==3\">Finish Race</h4>\r\n            </div>\r\n            <div class=\"col-md-5\">\r\n              {{item.categoryName}}\r\n            </div>\r\n            <div class=\"col-md-1\"><small *ngIf=\"item._lap\">{{item._lap}} круг</small></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-5\">\r\n      <h5>\r\n        {{app.go.race.name}} \r\n        <span *ngIf=\"app.go.start\"> | {{app.go.start.t|date:'HH:mm:ss.SSS'}}</span>\r\n        <span *ngIf=\"app.go.finish\"> | {{app.go.finish.t|date:'HH:mm:ss.SSS'}}</span>\r\n        <span *ngIf=\"app.go.start && !app.go.start\"> | {{(app.go.t-app.go.start.t-4*3600000 )|date:'HH:mm:ss.SSS'}}</span>\r\n      </h5>\r\n      <form  (submit)=\"app.go.start&&onFormSubmit(1,result.items[0].id)\" >\r\n        <fieldset>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control form-control-lg\" [(ngModel)]=\"s.filter.competitorName\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Фильтр\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6 text-right\">\r\n              <div class=\"form-group\">\r\n                <!-- <button class=\"btn btn-primary btn-lg mr-2\" type=\"submit\">Register lap</button> -->\r\n                <button class=\"btn btn-primary btn-lg mr-2\" [disabled]=\"!app.go.start\"  type=\"button\" (click)=\"onFormSubmit(1,0);\" >Пустое</button>\r\n                <button class=\"btn btn-primary btn-lg mr-2\" [disabled]=\"app.go.start\" type=\"button\" (click)=\"onFormSubmit(2,0);\" >Start</button>\r\n                <button class=\"btn btn-primary btn-lg mr-2\" [disabled]=\"app.go.finish||!app.go.start\" type=\"button\" (click)=\" onFormSubmit(3,0);\" >Finish</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </fieldset>\r\n      </form>\r\n      <table class=\"table\">\r\n        <tr \r\n          *ngFor=\"let item of app.competitors.items | myFilter:{fullNameNum:s.filter.competitorName} | slice:0:10 | asResult : result; index as i;\"  \r\n          (click)=\"app.go.start&&onFormSubmit(1,item.id);\"\r\n          class=\"clickable\" \r\n          >\r\n          <td width=\"40px\">{{item.num}}</td>\r\n          <td>{{item.fullName}}</td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav *ngIf=\"core.session\" class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand logo\" routerLink=\"/\" href=\"\">\r\n    <img src=\"favicon.ico\" alt=\"\" > MF Timing\r\n  </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item \"  ><a class=\"nav-link\" routerLink=\"/go\" [routerLinkActive]=\"'active'\" href=\"\" translate>Go</a></li>\r\n      <li class=\"nav-item \"  ><a class=\"nav-link\" routerLink=\"/races\" [routerLinkActive]=\"'active'\" href=\"\" translate>Race</a></li>\r\n      <li class=\"nav-item \"  *ngIf=\"r&&r.competitors\"><a class=\"nav-link\" routerLink=\"/competitors\" [routerLinkActive]=\"'active'\" href=\"\" translate>Competitors</a></li>\r\n      <li class=\"nav-item \"  *ngIf=\"r&&r.category\"><a class=\"nav-link\" routerLink=\"/categories\" [routerLinkActive]=\"'active'\" href=\"\" translate>Categories</a></li>\r\n      <app-nav-trash *ngIf=\"r&&r.trash\" [app]=\"app\"></app-nav-trash>\r\n      <app-nav-appevts-log [app]=\"app\"></app-nav-appevts-log>\r\n    </ul>\r\n    <span *ngIf=\"!app.ready\" class=\"navbar-text silver\"><fa-icon [icon]=\"faCog\" [spin]=\"true\"></fa-icon> loading...</span>\r\n    <span class=\"navbar-text\">\r\n      <a href=\"\" routerLink=\"/user/{{core.user.id}}\">{{core.user.name}}</a> | <span title=\"Sign Out\" (click)=\"logOut()\" class=\"pointer\" style=\"vertical-align: -1px;\"><fa-icon [icon]=\"faSignOutAlt\" ></fa-icon></span>\r\n    </span>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center\">\r\n  <br>\r\n  <br>\r\n      <img src=\"favicon.ico\" alt=\"\" id=\"logo\"><br><br>\r\n      <div id=\"h\">\r\n        <h1 class=\"display-4\">MF Timing</h1>\r\n        <p class=\"lead\" translate>Na nah epta...</p>\r\n      </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/log/log.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/log/log.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-items-controls [app]=\"app\" [itemType]=\"'log'\" ></app-items-controls>\r\n<div *ngIf=\"app.log.r.r\">\r\n  <table  class=\"table mt-2 {{!app.log.ready?'not-ready':'ready'}}\">\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\" width=\"30px\"><span class=\"pointer\" (click)=\"refresh()\" translate >#</span></th>\r\n        <th scope=\"col\" translate >log.dt</th>\r\n        <th scope=\"col\" translate >log.userName</th>\r\n        <th scope=\"col\" translate >log.ip</th>\r\n        <th scope=\"col\" translate >log.usessions_id</th>\r\n        <th scope=\"col\" translate >log.objectTypeName</th>\r\n        <th scope=\"col\" translate >log.object_name</th>\r\n        <th scope=\"col\" translate >log.actionTypeName</th>\r\n        <th scope=\"col\" translate >log.data</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let item of app.log.items | myFilter: app.state.items.log.filter  | asResult : result | slice:0:app.state.items.log.limit ;  index as i;\"  class=\"{{['','','table-danger'][1*item.type]}}\">\r\n        <th scope=\"row\">{{i+1}}</th>\r\n        <td>{{item.dt|date : 'yyyy-MM-dd HH:mm:ss'}}</td>\r\n        <td>{{item.userName}}</td>\r\n        <td>{{item.ip}}</td>\r\n        <td>{{item.usessions_id}}</td>\r\n        <td translate>types.{{item.objectTypeName}}</td>\r\n        <td><span title=\"{{item.object_d?('Deleted: '+(item.object_d |date: 'yyyy-MM-dd HH:mm:ss')):''}}\" class=\"{{item.object_d&&'deleted'}}\">{{item.object_name}}</span></td>\r\n        <td translate>log.action_types.{{item.actionTypeName}}</td>\r\n        <td>\r\n          <div *ngIf=\"item.data\" >\r\n            <div *ngFor=\"let key of item.data|keys\">{{key}}:\r\n              <span *ngIf=\"item.data[key]\">\r\n                <span *ngIf=\"!item.data[key].keys\">\"{{item.data[key]}}\";</span>\r\n                <span *ngIf=\"item.data[key].length===2\">\"{{item.data[key][0]}}\" -> \"{{item.data[key][1]}}\";</span>\r\n                <div *ngIf=\"item.data[key].length===undefined\">\r\n                  <div style=\"margin-left: 20px;\" *ngFor=\"let key2 of item.data[key] | keys\">{{key2}}: \"{{item.data[key][key2][0]===null?'null':item.data[key][key2][0]}}\" -> \"{{item.data[key][key2][1]===null?'null':item.data[key][key2][1]}}\";</div>\r\n                </div>\r\n              </span>\r\n           </div>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n<div  *ngIf=\"!app.log.r.r\" class=\"alert alert-warning text-center\" role=\"alert\" translate>Access_denied_to_this_items</div>>\r\n<app-items-paginator [state]=\"app.state.items.log\"    [result]=\"result\"></app-items-paginator>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/nav-appevts-log/nav-appevts-log.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/nav-appevts-log/nav-appevts-log.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li *ngIf=\"app.APPEvents.evtsList.length>0\" class=\"nav-item \">\r\n  <div class=\"nav-appevts-log ml-3\">\r\n    <div class=\"evt-item\" *ngFor=\"let evt of app.APPEvents.evtsList.filter(filterByTypes)  \">\r\n      <span class=\"date\">{{evt.t|date : 'HH:mm:ss'}}:</span>\r\n      {{('log.action_types.'+app.ref.action_types[evt.a])|translate}} \r\n      {{('types.'+app.ref.object_types[evt.tp])|translate}}\r\n      <b *ngIf=\"app[app.ref.object_types[evt.tp]]\">{{app[app.ref.object_types[evt.tp]]._index.id[evt.id]?app[app.ref.object_types[evt.tp]]._index.id[evt.id].name:''}}</b> \r\n    </div>\r\n  </div>\r\n</li>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/nav-trash/nav-trash.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/nav-trash/nav-trash.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle dropdown-no-caret \" [routerLinkActive]=\"'active'\" href=\"#\" role=\"button\" data-toggle=\"dropdown\"  aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <fa-icon class=\"silver\"  [icon]=\"faTrashAlt\"></fa-icon>\r\n          <sup *ngIf=\"checkSize()\" ><span  class=\"badge badge-danger\">{{trashSize}}</span></sup>\r\n        </a>\r\n        <div  class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\"><!-- [hidden]=\"!trashSize\" -->\r\n          <div *ngFor=\"let itemType of app.trash.trashTypes\">\r\n            <a routerLink=\"/trash/{{itemType}}\" *ngIf=\"app[itemType].trash.length\" class=\"dropdown-item text-capitalize\"  title=\"{{'trash.Show_all_deleted_t'|translate : {t:('types.'+itemType|translate)} }} \" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\"><small translate>types.{{itemType}} <sup><span  class=\"badge badge-danger\">{{1*app[itemType].trash.length}}</span></sup></small></a>\r\n            <div class=\"dropdown-item pointer\" *ngFor=\"let item of app[itemType].trash\" (click)=\"$event.stopPropagation();\">\r\n              <span class=\"pointer grey mr-1\" title=\"{{'trash.Restore_this_Item'|translate}}\" (click)=\"restore(item, $event)\"><fa-icon [icon]=\"faTrashRestore\"></fa-icon> </span> \r\n              <!-- <a  routerLink=\"/trash/{{itemType}}/{{item.id}}\" href=\"\" class=\"grey\">{{item.name}}</a> -->\r\n              <span  class=\"grey\">{{item.name}}</span>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"trashSize\" class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item \" routerLink=\"/trash\"  translate>trash.All_deleted_Items</a>\r\n        </div>\r\n      </li>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/race/race.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/race/race.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\n  <span  class=\"text-capitalize\">{{'type.race'|translate}}</span> : {{(race?'Edit':'Create')|translate|lowercase }}\n</h3>\n\n<form  [formGroup]=\"itemForm\"  *ngIf=\"!importMode\" (submit)=\"onItemFormSubmit()\">\n  <fieldset  [disabled]=\"(race&&!app.races.r.m)||(!race&&!app.races.r.a)\" >\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label for=\"seasonId\" translate>races.seasonId</label>\n          <input type=\"text\" class=\"form-control\" id=\"seasonId\" formControlName=\"seasonId\">\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label for=\"name\" translate>races.name</label>\n          <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\">\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label for=\"from\" translate>races.from</label>\n          <input type=\"text\" class=\"form-control\" id=\"from\" formControlName=\"from\">\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label for=\"to\" translate>races.to</label>\n          <input type=\"text\" class=\"form-control\" id=\"to\" formControlName=\"to\">\n        </div>\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">{{(race?'Save_changes':'Add_new')|translate}}</button>\n  </fieldset>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/races/races.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/races/races.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-items-controls [app]=\"app\" [itemType]=\"itemType\" [options]=\"contolsOptions\"></app-items-controls>\n<app-items-table [app]=\"app\" [itemType]=\"itemType\" [options]=\"tableOptions\"></app-items-table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/reciever/reciever.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/reciever/reciever.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3><span  class=\"text-capitalize\">{{'type.reciever'|translate}}</span> : {{(reciever?'Edit':'Create')|translate|lowercase }}</h3>\r\n<form  [formGroup]=\"recieverForm\" (submit)=\"onRecieverFormSubmit()\">\r\n  <fieldset  [disabled]=\"(reciever&&!app.recievers.r.m)||(!reciever&&!app.recievers.r.a)\" >\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"units_id\" translate>recievers.units_id</label>\r\n          <input type=\"hidden\" class=\"form-control\" id=\"units_id\" formControlName=\"units_id\">\r\n          <app-search-select [item]=\"item\" [refSvc]=\"app.units\" [form]=\"recieverForm\" [controlIdKey]=\"'units_id'\"  [refNameKey]=\"'nm'\"></app-search-select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-2\">\r\n        <div class=\"form-group\">\r\n          <label for=\"tz\" translate>recievers.tz</label>\r\n          <input type=\"number\" min=\"-24\" max=\"24\" class=\"form-control\" id=\"tz\" formControlName=\"tz\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-2\">\r\n        <div class=\"form-group\">\r\n          <label for=\"k\" translate>recievers.k</label>\r\n          <input type=\"number\" class=\"form-control\" id=\"k\" formControlName=\"k\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <input type=\"hidden\" class=\"form-control\" id=\"tags\" formControlName=\"tags\">\r\n      <app-multi-select [disabled]=\"reciever&&!app.core.user.rights.items.recievers_tags.m\" [item]=\"item\" [refSvc]=\"app.tags\" [form]=\"recieverForm\" [controlIdKey]=\"'tags'\"  [refNameKeys]=\"['fullNname']\"></app-multi-select>\r\n    <button type=\"submit\" [disabled]=\"submitDisabled\" class=\"btn btn-primary\">{{(reciever?'Save_changes':'Add_new')|translate}}</button>\r\n  </fieldset>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/recievers/recievers.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/recievers/recievers.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-items-controls [app]=\"app\" [itemType]=\"itemType\" ></app-items-controls>\r\n<app-items-table [app]=\"app\" [itemType]=\"itemType\" [options]=\"tableOptions\"></app-items-table>\r\n\r\n<!-- <div *ngIf=\"app.recievers.r.r\">\r\n<table class=\"mt-2 table {{!app.recievers.ready?'not-ready':'ready'}}\">\r\n  <thead>\r\n    <tr>\r\n      <th scope=\"col\" width=\"30px\">#</th>\r\n      <th scope=\"col\" width=\"30px\"></th>\r\n      <th scope=\"col\">Name</th>\r\n      <th scope=\"col\">unitHw</th>\r\n      <th scope=\"col\">units_id</th>\r\n      <th scope=\"col\">Tags</th>\r\n      <th scope=\"col\" width=\"30px\"></th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let item of app.recievers.items | myFilter: app.state.items.recievers.filter | slice:0:25 ; async as itemsResult ; index as i;\">\r\n      <th scope=\"row\">{{i+1}}</th>\r\n      <td><a  class=\"{{!app.log.r.d&&'disabled'}}\" href=\"\" [routerLink]=\"'/log/10/'+item.id\" title=\"Show log by this item\"><fa-icon [icon]=\"faListAlt\"></fa-icon></a></td>\r\n      <td><a  href=\"\" [routerLink]=\"'/reciever/'+item.id\" (click)=\"filter=''\">{{item.name}}</a></td>\r\n      <td>{{item.unitHwName}}</td>\r\n      <td>{{item.unitUid}}</td>\r\n      <td>\r\n        <span *ngIf=\"item.tags&&app.tags.ready&&app.tags.items.length\">\r\n          <a  href=\"\" [routerLink]=\"'/tag/'+tagId\"  *ngFor=\"let tagId of item.tags\">{{app.tags._index.id[tagId].num}}; </a>\r\n        </span>\r\n      </td>\r\n      <td><span class=\"tomato pointer {{!app.recievers.r.d&&'disabled'}}\" (click)=\"app.recievers.r.d&&delItem(item);\"><fa-icon [icon]=\"faTrashAlt\"></fa-icon></span></td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n</div>\r\n<div  *ngIf=\"!app.recievers.r.r\" class=\"alert alert-warning text-center\" role=\"alert\">Access denied. You have no read access to this items</div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/rtqueue/rtqueue.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/rtqueue/rtqueue.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-items-controls [app]=\"app\" [itemType]=\"'rtqueue'\" ></app-items-controls>\r\n<div *ngIf=\"app.rtqueue.r.r \">\r\n  <table  class=\"table mt-2 {{!app.rtqueue.ready?'not-ready':'ready'}}\">\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\" ><span class=\"pointer\" (click)=\"refresh()\" translate >rtqueue.c</span></th>\r\n        <th scope=\"col\" translate >rtqueue.typeName</th>\r\n        <th scope=\"col\" translate >rtqueue.recieverName</th>\r\n        <th scope=\"col\" translate >rtqueue.unitNm</th>\r\n        <th scope=\"col\" translate >rtqueue.units_imei</th>\r\n        <th scope=\"col\" translate >rtqueue.tags_id</th>\r\n        <th scope=\"col\" translate >rtqueue.tags_num</th>\r\n        <th scope=\"col\" translate >rtqueue.value</th>\r\n        <th scope=\"col\" translate >rtqueue.userName</th>\r\n        <th scope=\"col\" translate >rtqueue.started</th>\r\n        <th scope=\"col\" translate >rtqueue.finished</th>\r\n        <th scope=\"col\" translate >rtqueue.statusName</th>\r\n        <th scope=\"col\" translate >rtqueue.try</th>\r\n        <th scope=\"col\" translate >rtqueue.try_limit</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let item of app.rtqueue.items | myFilter: s.filter | orderBy : ['-c','-id'] \">\r\n        <td>{{item.c|date : 'yyyy-MM-dd HH:mm:ss'}}</td>\r\n        <td translate>rtqueue.types.{{item.typeName}}</td>\r\n        <td title=\"{{item.recieverName}}\">#{{item.recievers_id}}</td>\r\n        <td title=\"{{item.unitNm}}\">#{{item.units_id}}</td>\r\n        <td>{{item.units_imei}}</td>\r\n        <td title=\"{{item.tagName}}\">#{{item.tags_id}}</td>\r\n        <td>{{item.tags_num}}</td>\r\n        <td>{{item.value}}</td>\r\n        <td>{{item.userName}}</td>\r\n        <td>{{item.started|date : 'yyyy-MM-dd HH:mm:ss'}}</td>\r\n        <td>{{item.finished|date : 'yyyy-MM-dd HH:mm:ss'}}</td>\r\n        <td title=\"{{item.result}}\" translate>rtqueue.statuses.{{item.statusName}}</td>\r\n        <td>{{item.try}}</td>\r\n        <td>{{item.try_limit}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n<div  *ngIf=\"!app.rtqueue.r.r \" class=\"alert alert-warning text-center\" role=\"alert\" translate>Access_denied_to_this_items</div>\r\n<!-- <app-items-paginator *ngIf=\"app.rtqueue.ready\" [state]=\"app.state.items.rtqueue\"    [result]=\"result\"></app-items-paginator> -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/settings/settings.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/settings/settings.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mb-2\">\r\n    <ul class=\"nav nav-tabs\">\r\n      <li class=\"nav-item\" *ngFor=\"let type of settingsTypes\">\r\n        <a class=\"nav-link {{settingsType&&type===settingsType&&'active'}}\"  routerLink=\"/settings/{{type}}\" href=\"\" translate>{{type}}</a>\r\n      </li>\r\n    </ul>\r\n</div>\r\n\r\n<div *ngIf=\"settingsType==='main'\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <div class=\"form-group\">\r\n        <label for=\"lng\" translate>lng</label>\r\n        <select #langSelect (change)=\"changeLng(langSelect.value)\" class=\"form-control\">\r\n          <option *ngFor=\"let lang of translate.getLangs()\" [value]=\"lang\" [selected]=\"lang === translate.currentLang\">{{ lang }}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"appevts_refresh_interval\" translate>appevts_refresh_interval</label>\r\n        <input type=\"number\" pattern=\"^0*[1-9]\\d*$\" inputmode=\"nymeric\" min=\"3\" max=\"300\" step=\"1\"  class=\"form-control\" [(ngModel)]=\"app.settings.items.appevts_refresh_interval\" [ngModelOptions]=\"{standalone: true}\"  >\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"commands_pimary_service\" translate>commands_primary_service</label>\r\n        <select class=\"form-control\"  [(ngModel)]=\"app.settings.items.commands_primary_service\" [ngModelOptions]=\"{standalone: true}\">\r\n          <option value=\"flespi\" disabled>Flespi</option>\r\n          <option value=\"wialon\">Wialon</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"commands_pimary_service\" translate>commands_secondary_service</label>\r\n        <select class=\"form-control\"  [(ngModel)]=\"app.settings.items.commands_secondary_service\" [ngModelOptions]=\"{standalone: true}\">\r\n          <option value=\"\" translate>Disabled</option>\r\n          <option value=\"flespi\" disabled>Flespi</option>\r\n          <option value=\"wialon\">Wialon</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<button type=\"button\" (click)=\"save()\" class=\"btn btn-primary\" translate>Save changes</button>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sign-in/sign-in.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sign-in/sign-in.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center logo\" >\r\n  <svg version=\"1.1\" id=\"logo-svg\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.999 511.999\" style=\"enable-background:new 0 0 511.999 511.999;\" xml:space=\"preserve\"> <path style=\"fill:#D9D9D9;\" d=\"M124.163,0.957c-6.37-2.681-13.702,0.477-16.159,6.938L97.283,36.087 c-2.337,6.147,0.618,13.025,6.668,15.601C187.617,87.3,228.898,149.43,229.322,150.08l22.911-14.84l22.961-14.762 C273.108,117.235,224.681,43.262,124.163,0.957z\"/> <rect x=\"365.043\" y=\"421.706\" style=\"fill:#464655;\" width=\"50.472\" height=\"90.293\"/> <path style=\"fill:#D9D9D9;\" d=\"M243.973,384.346c-8.868,0-16.057-7.189-16.057-16.057c0-8.868,7.189-16.057,16.057-16.057 c27.051,0,49.06-22.009,49.06-49.059v-36.756c0-8.868,7.189-16.057,16.057-16.057s16.057,7.189,16.057,16.057v36.756 C325.146,347.931,288.732,384.346,243.973,384.346z\"/> <path style=\"fill:#464655;\" d=\"M374.085,439.285h-88.369c-35.58,0-64.526-28.946-64.526-64.526v-110.48 c0-11.824,9.585-21.409,21.409-21.409c11.824,0,21.409,9.585,21.409,21.409v110.48c0,11.97,9.739,21.708,21.708,21.708h88.369 c11.824,0,21.409,9.585,21.409,21.409S385.91,439.285,374.085,439.285z\"/> <path style=\"opacity:0.1;enable-background:new    ;\" d=\"M198.358,114.485c20.491,19.829,30.754,35.273,30.965,35.595l22.911-14.84 l22.961-14.762c-0.92-1.43-10.854-16.613-30.285-36.767L198.358,114.485z\"/> <path style=\"opacity:0.1;enable-background:new    ;\" d=\"M264.008,264.279c0-11.824-9.585-21.409-21.409-21.409 c-11.824,0-21.409,9.585-21.409,21.409v47.073h42.818V264.279z\"/> <path style=\"opacity:0.1;enable-background:new    ;\" d=\"M374.085,396.466h-35.805v42.818h35.805 c11.824,0,21.409-9.585,21.409-21.409S385.91,396.466,374.085,396.466z\"/> <path style=\"opacity:0.1;enable-background:new    ;\" d=\"M309.09,250.36c-8.868,0-16.057,7.189-16.057,16.057v36.756 c0,2.787-0.246,5.518-0.695,8.18h32.257c0.047,0,0.092,0.006,0.139,0.007c0.271-2.693,0.412-5.424,0.412-8.187v-36.756 C325.146,257.549,317.957,250.36,309.09,250.36z\"/> <path style=\"fill:#FF462E;\" d=\"M266.782,101.334l-56.456,37.318l2.464,2.464c13.496,13.496,13.496,35.377,0,48.874l0,0 c-6.482,6.482-10.122,15.271-10.122,24.437v70.163h121.926c22.338,0,40.447,18.109,40.447,40.447v114.245h50.468V304.34 C415.509,209.135,352.996,128.538,266.782,101.334z\"/> <path style=\"opacity:0.1;enable-background:new    ;\" d=\"M266.782,101.334l-8.283,5.475 c78.229,31.466,133.461,108.042,133.461,197.529v134.946h23.55V304.34C415.509,209.135,352.996,128.538,266.782,101.334z\"/></svg>\r\n  <span>FuelLimit</span>\r\n</h1>\r\n<div class=\"text-center\">\r\n  <form class=\"form-signin\" [formGroup]=\"signInForm\"  (ngSubmit)=\"onFromSubmit();\">\r\n    <!-- <h3 class=\"h3 mb-3 font-weight-normal\" translate>sign-in.Please sign in</h3> -->\r\n    <label for=\"inputName\" class=\"sr-only\" translate>sign-in.User Name</label>\r\n    <input formControlName=\"name\" type=\"text\" id=\"inputName\" class=\"form-control\" placeholder=\"{{'sign-in.User Name'|translate}}\" required autofocus>\r\n    <label for=\"inputPassword\" class=\"sr-only\" translate>sign-in.Password</label>\r\n    <input formControlName=\"password\" type=\"password\" id=\"inputPassword\" class=\"form-control mt-1\" placeholder=\"{{'sign-in.Password'|translate}}\" required>\r\n    <!-- <div class=\"checkbox mb-3\"> -->\r\n      <!-- <label> -->\r\n        <!-- <input type=\"checkbox\" value=\"remember-me\"> Remember me -->\r\n      <!-- </label> -->\r\n    <!-- </div> -->\r\n    <button class=\"btn btn-lg btn-primary btn-block\"  type=\"submit\" translate>{{'sign-in.Sign in'}}</button>\r\n    <!-- <p class=\"mt-5 mb-3 text-muted\">&copy; 2017-2019</p> -->\r\n  </form>\r\n  <div class=\"col-md-4 offset-md-4\"  *ngIf=\"signInFormError\">\r\n    <div  class=\"alert alert-danger\" role=\"alert\">\r\n      <strong class=\"text-capitalize\"  translate>error</strong>! <br>{{'sign-in.errors.'+signInFormError|translate}}\r\n    </div>  \r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/tag/tag.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/tag/tag.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\r\n  <span  class=\"text-capitalize\">{{'type.tag'|translate}}</span> : {{(tag?'Edit':'Create')|translate|lowercase }} \r\n  <span  *ngIf=\"!tag\">\r\n    (<span class=\"{{importMode?'pointer silver':''}}\" (click)=\"importMode=false\" translate>Single Item</span> | \r\n    <span  class=\"{{!importMode?'pointer silver':''}}\" (click)=\"importMode=true\" translate>Multiple</span>) \r\n  </span>\r\n  <span *ngIf=\"tag&&tag.b\">[<fa-icon [icon]=\"faCog\" [spin]=\"true\" class=\"grey\"></fa-icon> {{'blocked'|translate}} {{tag.b|date: 'yyyy-MM-dd HH:mm:ss'}}]</span>\r\n</h3>\r\n\r\n<div *ngIf=\"importMode\">\r\n  <app-items-import [app]=\"app\" [itemType]=\"itemType\" [options]=\"importOptions\" (parse)=\"parsedItems=$event\"></app-items-import>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <button  type=\"button\" (click)=\"importItems(parsedItems.items)\" [disabled]=\"!parsedItems.items.length||parsedItems.errors.length||!app.tags.ready\"  class=\"btn btn-primary btn-block\" >{{(tag?'Save_changes':'Add new Items')|translate}} ({{parsedItems.items.length}})</button> \r\n    </div>\r\n    <div class=\"col-md-8\">\r\n      <div *ngIf=\"multiAddErrors.length\" class=\"alert alert-danger\" role=\"alert\">\r\n        <b><span  class=\"text-capitalize\" translate>errors</span>: {{multiAddErrors.length}}</b>\r\n        <ul>\r\n          <li *ngFor=\"let res of multiAddErrors\"><span *ngIf=\"res.error\">{{res.error}}</span></li>\r\n        </ul>\r\n      </div>\r\n      <div *ngIf=\"parsedItems.errors&&parsedItems.errors.length\" class=\"alert alert-danger\" role=\"alert\">\r\n        <b><span  class=\"text-capitalize\" translate>errors</span>: {{parsedItems.errors.length}}</b>\r\n        <ul>\r\n          <li *ngFor=\"let error of parsedItems.errors\">\r\n            <span translate>row</span>: {{error.row}}, \r\n            <span translate>field</span>: <span class=\"font-italic\" translate>tags.{{error.fieldName}}</span>, \r\n            <span translate>error</span>: <span class=\"font-italic\" translate>{{error.result.msg}}</span></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<form  [formGroup]=\"tagForm\" *ngIf=\"!importMode\" (submit)=\"onTagFormSubmit()\">\r\n  <fieldset  [disabled]=\"(tag&&!app.tags.r.m)||(!tag&&!app.tags.r.a)||(tag&&tag.b)\" >\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"form-group\">\r\n              <label for=\"num\" translate>tags.num</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"num\" formControlName=\"num\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"form-group\">\r\n              <label for=\"units_id\" translate>tags.units_id</label>\r\n              <input type=\"hidden\" class=\"form-control\" id=\"units_id\" formControlName=\"units_id\">\r\n              <app-search-select [item]=\"item\" [refSvc]=\"app.units\" [form]=\"tagForm\" [controlIdKey]=\"'units_id'\"  [refNameKey]=\"'nm'\"></app-search-select>\r\n            </div>\r\n          </div>\r\n        </div> \r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"form-group\">\r\n              <label for=\"drivers_id\" translate>tags.drivers_id</label>\r\n              <input type=\"hidden\" class=\"form-control\" id=\"drivers_id\" formControlName=\"drivers_id\">\r\n              <app-search-select [item]=\"item\" [refSvc]=\"app.drivers\" [form]=\"tagForm\" [controlIdKey]=\"'drivers_id'\"  [refNameKey]=\"'name1'\"></app-search-select>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">  \r\n            <button type=\"submit\"  [disabled]=\"(tag&&!app.drivers.r.m)||(!tag&&!app.drivers.r.a)||saving\"  class=\"btn btn-primary btn-block\" >{{(tag?'Save_changes':'Add_new')|translate}}</button>          \r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div  *ngIf=\"tag\" class=\"col-md-8\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <div class=\"form-group\">\r\n              <label for=\"total_limit\" translate>tags.total_limit</label>\r\n              <div class=\"input-group mb-3\">\r\n                <input  [(ngModel)]=\"total_limit\" [ngModelOptions]=\"{standalone: true}\"  type=\"text\" class=\"form-control\">\r\n                <div class=\"input-group-append\">\r\n                  <button (click)=\"changeTagValue('total_limit_change',total_limit)\" [disabled]=\"tag&&!tag.recievers.length\" class=\"btn btn-outline-secondary\" type=\"button\" translate>Set</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"day_limit\" translate>tags.day_limit</label>\r\n              <div class=\"input-group mb-3\">\r\n                <input  [(ngModel)]=\"day_limit\" [ngModelOptions]=\"{standalone: true}\"  type=\"text\"  class=\"form-control\">\r\n                <div class=\"input-group-append\">\r\n                  <button (click)=\"changeTagValue('day_limit_change',day_limit)\" [disabled]=\"tag&&!tag.recievers.length\" class=\"btn btn-outline-secondary\" type=\"button\" translate>Set</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <div class=\"form-group\">\r\n              <label for=\"total_balance\" translate>tags.total_balance</label>\r\n              <!-- <div class=\"input-group mb-3\"> -->\r\n                <input  [(ngModel)]=\"total_balance\" [ngModelOptions]=\"{standalone: true}\" [readonly]=\"tag&&tag.recievers.length\" type=\"text\" class=\"form-control\">\r\n                <!-- <div class=\"input-group-append\"> -->\r\n                  <!-- <button (click)=\"changeTagValue('total_balance_change',total_balance)\" class=\"btn btn-outline-secondary\" type=\"button\" >Set</button> -->\r\n                <!-- </div> -->\r\n              <!-- </div> -->\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"day_balance\" translate>tags.day_balance</label>\r\n              <!-- <div class=\"input-group mb-3\"> -->\r\n                <input  [(ngModel)]=\"day_balance\" [ngModelOptions]=\"{standalone: true}\" [readonly]=\"tag&&tag.recievers.length\" type=\"text\"  class=\"form-control\">\r\n                <!-- <div class=\"input-group-append\"> -->\r\n                  <!-- <button (click)=\"changeTagValue('day_balance_change',day_balance)\" class=\"btn btn-outline-secondary\" type=\"button\" >Set</button> -->\r\n                <!-- </div> -->\r\n              <!-- </div> -->\r\n            </div>\r\n          </div>\r\n          <div  *ngIf=\"tag\" class=\"col-md-4\">\r\n            <div class=\"form-group\">\r\n              <label for=\"day_balance\" ><span translate>reset</span><span *ngIf=\"resetClicked\">: <span translate >Are you sure</span>?</span></label><br>\r\n              <button [disabled]=\"tag&&!tag.recievers.length\" *ngIf=\"!resetClicked\" (click)=\"resetClicked=true\"  class=\"btn btn-outline-warning\" type=\"button\" translate>tags.Reset Tag balance</button>\r\n              <div>\r\n                <button *ngIf=\"resetClicked\" (click)=\"changeTagValue('tag_reset',0); resetClicked=false\"  class=\"btn btn-warning\" type=\"button\" translate>Yes </button>\r\n                <button *ngIf=\"resetClicked\" (click)=\"resetClicked=false\"  class=\"btn btn-secondary ml-2\" type=\"button\" translate>No</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"tag&&tag.recievers.length\" class=\"card \" >\r\n          <div class=\"card-header \">\r\n            <span translate>tags.This tag added to reciever(s)</span>\r\n          </div>\r\n          <ul class=\"list-group list-group-flush \">\r\n            <li class=\"list-group-item \" *ngFor=\"let recieverUnitName of tag.recieverUnitNamesArray\">\r\n              {{recieverUnitName}}\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div *ngIf=\"tag&&!tag.recievers.length\" class=\"card \" >\r\n          <div class=\"card-header \">\r\n            <span translate>tags.This tag is not added to any receiver</span>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"tag&&tag.rtqerrors&&tag.rtqerrors.length\" class=\"card mt-2\" >\r\n          <div class=\"card-header \">\r\n            <span translate>RTQueue Errors <sup><span class=\"badge badge-danger\">{{tag.rtqerrors.length}}</span></sup></span>\r\n          </div>\r\n          <ul class=\"list-group list-group-flush \">\r\n            <li class=\"list-group-item \" *ngFor=\"let rtqerror of tag.rtqerrors\">\r\n              <div class=\"row grey small\">\r\n                <div class=\"col-md-6\">\r\n                  Действие: <span translate>{{'rtqueue.types.'+app.ref.rtqueue_types[rtqerror.type]}}</span>\r\n                  <span *ngIf=\"rtqerror.value\"> | <span translate>value</span>: {{rtqerror.value}}</span>  \r\n                   | <span translate>Try</span>: {{rtqerror.try}}/{{rtqerror.try_limit}}\r\n                </div>\r\n                <div class=\"col-md-6 text-right\">\r\n                  {{rtqerror.finished|date : 'yyyy-MM-dd HH:mm:ss'}} \r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-9\">\r\n                  <span class=\"font-weight-bold\">Ресивер</span>: {{app.recievers._index.id[rtqerror.recievers_id]&&app.recievers._index.id[rtqerror.recievers_id].name}}\r\n                  <div><span class=\"font-weight-bold\">Response</span>: <span class=\"text-danger\">{{rtqerror.result}}</span></div>\r\n                </div>\r\n                <div class=\"col-md-3 text-right\">\r\n                  <button type=\"button\" (click)=\"retryRTTask(rtqerror)\" class=\"btn btn-outline-secondary btn-sm mt-3 \">Retry</button>\r\n                  <button type=\"button\" (click)=\"cancelRTTask(rtqerror)\" class=\"btn btn-outline-danger btn-sm mt-3 ml-1\">Cancel</button>\r\n                </div>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"!tag\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label for=\"total_limit\" translate>tags.total_limit</label>\r\n              <input   type=\"text\" class=\"form-control\" formControlName=\"total_limit\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"day_limit\" translate>tags.day_limit</label>\r\n              <input   type=\"text\"  class=\"form-control\" formControlName=\"day_limit\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label for=\"total_balance\" translate>tags.total_balance</label>\r\n              <input   type=\"text\" class=\"form-control\" formControlName=\"total_balance\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"day_balance\" translate>tags.day_balance</label>\r\n              <input   type=\"text\"  class=\"form-control\" formControlName=\"day_balance\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-8\" *ngIf=\"saving||savingResults\">\r\n\r\n        <br>\r\n        <br>\r\n        <label>Sync results \r\n          <span class=\"pointer badge badge-{{!viewAsSource?'primary':'secondary'}}\" (click)=\"viewAsSource=false\">Parsed</span> \r\n          <span class=\"ml-1 pointer badge badge-{{viewAsSource?'primary':'secondary'}}\" (click)=\"viewAsSource=true\">Source</span>\r\n        </label>\r\n        <div *ngIf=\"saving\" class=\"silver\"><fa-icon [icon]=\"faCog\" [spin]=\"true\"></fa-icon> Waiting for saving and sync results...</div>\r\n        <div *ngIf=\"savingResults\">\r\n          <div *ngIf=\"!viewAsSource\">\r\n            <div>\r\n              Item saved:\r\n                <b *ngIf=\"savingResults.saved\" class=\"green\">Yes</b>\r\n                <b *ngIf=\"!savingResults.saved\" class=\"red\">No</b>\r\n            </div>\r\n            <div *ngIf=\"savingResults.saved\">\r\n              <h5>Changed</h5> \r\n              <table class=\"table  table-sm\">\r\n                <tr><th>Field</th><th>Old value</th><th>New value</th></tr>\r\n                <tr *ngFor=\"let key of savingResults.difference|keys\">\r\n                  <td>{{key}}</td>\r\n                  <td>{{savingResults.difference[key][0]}}</td>\r\n                  <td>{{savingResults.difference[key][1]}}</td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n            <div *ngIf=\"savingResults.update_limits&&(savingResults.update_limits|keys).length\" >\r\n              <h5>Setting Limits</h5>\r\n              <div *ngFor=\"let rtrows of savingResults.update_limits.rtrows\" class=\"card mb-2\">\r\n                <div class=\"card-body\">\r\n                  <h6 class=\"card-title\">\r\n                    Reciever #{{rtrows.rid}} \r\n                    : {{app.recievers._index.id[rtrows.rid].unitNm}} \r\n                    : {{app.recievers._index.id[rtrows.rid].unitHwName}} \r\n                    : {{rtrows.uid}}\r\n                  </h6>\r\n                  <div class=\"card-text\">\r\n                    <div *ngIf=\"rtrows.alreadySaved\"><fa-icon [icon]=\"faCheckCircle\" class=\"green\"></fa-icon> Already saved at {{rtrows.rtupd|date: 'yyyy-MM-dd HH:mm:ss'}}</div>\r\n                    <table *ngIf=\"rtrows.sendLimitToReciever\" class=\"table  table-sm\">\r\n                      <tr>\r\n                        <td width=\"130px\">Set response</td> \r\n                        <td>\r\n                          <span *ngIf=\"!rtrows.sendLimitToReciever.set_response\" class=\"silver\">No answer</span> \r\n                          <span *ngIf=\"rtrows.sendLimitToReciever.set_response\">{{rtrows.sendLimitToReciever.set_response}}</span> \r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Saved</td> \r\n                        <td><b *ngIf=\"rtrows.sendLimitToReciever.saved\" class=\"green\">Yes</b><b *ngIf=\"!rtrows.sendLimitToReciever.saved\" class=\"red\">No</b></td> \r\n                      </tr>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <pre *ngIf=\"viewAsSource\" style=\"font-size: 12px; font-family: 'Lucida Console', Monaco, monospace; color: rgba(0,0,0,.7);\">{{savingResults|json}}</pre>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </fieldset>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/tags/tags.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/tags/tags.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-items-controls [app]=\"app\" [itemType]=\"itemType\" ></app-items-controls>\r\n<app-items-table [app]=\"app\" [itemType]=\"itemType\" [options]=\"tableOptions\"></app-items-table>\r\n\r\n<!-- <div *ngIf=\"app.tags.r.r\"> -->\r\n<!-- <table class=\"mt-2 table {{!app.tags.ready?'not-ready':'ready'}}\"> -->\r\n  <!-- <thead> -->\r\n    <!-- <tr> -->\r\n      <!-- <th scope=\"col\" width=\"30px\">#</th> -->\r\n      <!-- <th scope=\"col\" width=\"30px\"></th> -->\r\n      <!-- <th scope=\"col\" width=\"30px\">#</th> -->\r\n      <!-- <th scope=\"col\">num</th> -->\r\n      <!-- <th scope=\"col\">unitNm</th> -->\r\n      <!-- <th scope=\"col\">driverName</th> -->\r\n      <!-- <th scope=\"col\">day_limit</th> -->\r\n      <!-- <th scope=\"col\">total_limit</th> -->\r\n      <!-- <th scope=\"col\" width=\"30px\"></th> -->\r\n    <!-- </tr> -->\r\n  <!-- </thead> -->\r\n  <!-- <tbody> -->\r\n    <!-- <tr *ngFor=\"let item of app.tags.items | myFilter: app.state.items.tags.filter | slice:0:25 ; async as itemsResult ; index as i;\"> -->\r\n      <!-- <th scope=\"row\">{{i+1}}</th> -->\r\n      <!-- <td><a  class=\"{{!app.log.r.d&&'disabled'}}\" href=\"\" [routerLink]=\"'/log/11/'+item.id\" title=\"Show log by this item\"><fa-icon [icon]=\"faListAlt\"></fa-icon></a></td> -->\r\n      <!-- <td><a  href=\"\" [routerLink]=\"'/tag/'+item.id\" (click)=\"filter=''\">{{item.num}}</a></td> -->\r\n      <!-- <td>{{item.unitNm}}</td> -->\r\n      <!-- <td><a  href=\"\" [routerLink]=\"'/driver/'+item.drivers_id\" (click)=\"filter=''\">{{item.driverName}}</a></td> -->\r\n      <!-- <td>{{item.day_limit}}</td> -->\r\n      <!-- <td>{{item.total_limit}}</td> -->\r\n      <!-- <td><span class=\"tomato pointer {{!app.tags.r.d&&'disabled'}}\" (click)=\"app.tags.r.d&&delTag(item);\"><fa-icon [icon]=\"faTrashAlt\"></fa-icon></span></td> -->\r\n    <!-- </tr> -->\r\n  <!-- </tbody> -->\r\n<!-- </table> -->\r\n<!-- </div> -->\r\n<!-- <div  *ngIf=\"!app.tags.r.r\" class=\"alert alert-warning text-center\" role=\"alert\">Access denied. You have no read access to this items</div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/trash/trash.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/trash/trash.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-2\">\r\n  <div class=\"col-md-8\">\r\n    <div class=\"\">\r\n      <ul class=\"nav nav-tabs\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link {{!objectType&&'active'}}\"  routerLink=\"/trash\" href=\"\" translate>All</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngFor=\"let type of app.trash.trashTypes\">\r\n          <a class=\"nav-link {{objectType&&type===objectType&&'active'}} text-capitalize\"  routerLink=\"/trash/{{type}}\" href=\"\" translate>types.{{type}}</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <app-items-controls  [app]=\"app\" [itemType]=\"'trash'\" ></app-items-controls>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"objectType&&app.trash.ready&&app.trash.items[objectType]\">\r\n  <table  class=\"mt-2 table {{!app.trash.ready?'not-ready':'ready'}}\">\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\" width=\"30px\">#</th>\r\n        <th scope=\"col\" width=\"30px\"></th>\r\n        <th scope=\"col\"  translate>trash.name</th>\r\n        <th scope=\"col\"  width=\"230px\" translate>trash.d</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let item of app.trash.items[objectType] | myFilter: app.state.items.trash.filter | orderBy: ['-d']   | asResult : result | slice:0:app.state.items.trash.limit ; index as i;\">\r\n        <th scope=\"row\">{{i+1}}</th>\r\n        <td ><span class=\"pointer grey \" title=\"{{'trash.Restore_this_Item'|translate}}\" (click)=\"restore(item)\"><fa-icon [icon]=\"faTrashRestore\"></fa-icon></span></td>\r\n        <td>{{item.name}}</td>\r\n        <td>{{item.d |date: 'yyyy-MM-dd HH:mm:ss'}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <app-items-paginator [state]=\"app.state.items.trash\"    [result]=\"result\"></app-items-paginator>\r\n</div>\r\n\r\n<div *ngIf=\"!objectType&&app.trash.ready&&app.trash.allItems\" >\r\n<table class=\"mt-2 table {{!app.trash.ready?'not-ready':'ready'}}\">\r\n  <thead>\r\n    <tr>\r\n      <th scope=\"col\" width=\"30px\">#</th>\r\n      <th scope=\"col\" width=\"30px\"></th>\r\n      <th scope=\"col\" translate>trash.itemType</th>\r\n      <th scope=\"col\" translate>trash.name</th>\r\n      <th scope=\"col\"  width=\"230px\" translate>trash.d</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let item of app.trash.allItems | myFilter: app.state.items.trash.filter | orderBy: ['-d'] | asResult : result | slice:0:app.state.items.trash.limit ; index as i;\">\r\n      <th scope=\"row\">{{i+1}}</th>\r\n      <td ><span class=\"pointer grey \" title=\"{{'trash.Restore_this_Item'|translate}}\" (click)=\"restore(item)\"><fa-icon [icon]=\"faTrashRestore\"></fa-icon></span></td>\r\n      <td  translate>types.{{item.itemType}}</td>\r\n      <td>{{item.name}}</td>\r\n      <td>{{item.d |date: 'yyyy-MM-dd HH:mm:ss'}}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n  <app-items-paginator [state]=\"app.state.items.trash\"    [result]=\"result\"></app-items-paginator>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/user-group/user-group.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/user-group/user-group.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3><span  class=\"text-capitalize\">{{'type.ugroup'|translate}}</span> : {{(userGroup.id?'Edit':'Create')|translate|lowercase }}</h3>\r\n<form  [formGroup]=\"userGroupForm\" (submit)=\"onUserGroupFormSubmit()\">\r\n  <fieldset  [disabled]=\"(userGroup&&!app.ugroups.r.m)||(!userGroup&&!app.ugroups.r.a)\" >\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4  col-xl-2\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\" translate>ugroups.name</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-8  col-xl-10\">\r\n        <div class=\"form-group\">\r\n          <label for=\"rights\" translate>ugroups.rights</label>\r\n          <input type=\"hidden\" class=\"form-control\" id=\"rights\" formControlName=\"rights\">\r\n          <app-input-tree *ngIf=\"userGroup._ready\" [item]=\"userGroup\" [form]=\"userGroupForm\" [sourceTree]=\"app.core.user.rights\" [controlIdKey]=\"'rights'\" ></app-input-tree>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary\">{{(userGroup.id?'Save_changes':'Add_new')|translate}}</button>\r\n  </fieldset>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/user-groups/user-groups.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/user-groups/user-groups.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-items-controls [app]=\"app\" [itemType]=\"itemType\" ></app-items-controls>\r\n<app-items-table [app]=\"app\" [itemType]=\"itemType\"></app-items-table>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/user/user.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/user/user.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3><span  class=\"text-capitalize\">{{'type.user'|translate}}</span> : {{(user.id?'Edit':'Create')|translate|lowercase }}</h3>\r\n<form  [formGroup]=\"userForm\" (submit)=\"onUserFormSubmit($event)\">\r\n  <fieldset  [disabled]=\"(user.id&&!app.users.r.m)||(!user.id&&!app.users.r.a)\" >\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3 col-xl-2 \">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\" translate>users.name</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"password\" translate>users.password</label>\r\n          <div class=\"input-group mb-3\">\r\n            <input type=\"{{passwordsVisible?'text':'password'}}\" class=\"form-control\" id=\"password\" formControlName=\"password\"\r\n              (keyup)=\"checkPasswordConfirmation()\"\r\n              (change)=\"checkPasswordConfirmation()\"\r\n            >\r\n            <div class=\"input-group-append\">\r\n              <span class=\"input-group-text pointer\" (click)=\"passwordsVisible=!passwordsVisible\" ><fa-icon [icon]=\"passwordsVisible?faEye:faEyeSlash\"></fa-icon></span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"password_confirmation\" translate>users.password_confirmation</label>\r\n          <div class=\"input-group mb-3\">\r\n            <input type=\"{{passwordsVisible?'text':'password'}}\" class=\"form-control {{!userForm.controls.password.valid&&'ng-invalid'}}\" id=\"password_confirmation\" \r\n              (keyup)=\"checkPasswordConfirmation($event)\"\r\n              (change)=\"checkPasswordConfirmation($event)\"\r\n            >\r\n            <div class=\"input-group-append\">\r\n              <span class=\"input-group-text pointer\" (click)=\"passwordsVisible=!passwordsVisible\" ><fa-icon [icon]=\"passwordsVisible?faEye:faEyeSlash\" ></fa-icon></span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"email\" translate>users.email</label>\r\n          <input type=\"email\" class=\"form-control\" id=\"email\" formControlName=\"email\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-{{userForm.dirty?'primary':'secondary'}}\" [disabled]=\"!userForm.valid\" >{{(user.id?'Save_changes':'Add_new')|translate}}</button>\r\n  </fieldset>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/users/users.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/users/users.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"app.users.r.r\">\r\n<app-items-controls [app]=\"app\" [itemType]=\"'users'\" ></app-items-controls>\r\n<table class=\"mt-2 table {{!app.users.ready?'not-ready':'ready'}}\">\r\n  <thead>\r\n    <tr>\r\n      <th scope=\"col\" width=\"30px\">#</th>\r\n      <th scope=\"col\" width=\"10px\"></th>\r\n      <th scope=\"col\" width=\"200px\" translate>users.name</th>\r\n      <th scope=\"col\" translate>users.email</th>\r\n      <th scope=\"col\" width=\"30px\">#</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let item of app.users.items | myFilter: app.state.items.users.filter  | asResult : result | slice:0:app.state.items.users.limit ;  index as i;\">\r\n      <th scope=\"row\">{{i+1}}</th>\r\n      <td><fa-icon *ngIf=\"item.root\" [icon]=\"faUserLock\" class=\"grey\" title=\"{{'Root user'|translate}}\"></fa-icon></td>\r\n      <td><a  href=\"\" [routerLink]=\"'/user/'+item.id\" (click)=\"filter=''\">{{item.name}}</a></td>\r\n      <td>{{item.email}}</td>\r\n      <td><span class=\"tomato pointer {{(item.root||!app.users.r.d)&&'disabled'}}\" (click)=\"(!item.root&&app.users.r.d)&&delUser(item);\"><fa-icon [icon]=\"faTrashAlt\"></fa-icon></span></td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n</div>\r\n<div  *ngIf=\"!app.users.r.r\" class=\"alert alert-warning text-center\" role=\"alert\">Access denied. You have no read access to this items</div>\r\n<app-items-paginator [state]=\"app.state.items.users\"    [result]=\"result\"></app-items-paginator>\r\n"

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
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_competitors_competitors_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/competitors/competitors.component */ "./src/app/components/competitors/competitors.component.ts");
/* harmony import */ var _components_competitor_competitor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/competitor/competitor.component */ "./src/app/components/competitor/competitor.component.ts");
/* harmony import */ var _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/categories/categories.component */ "./src/app/components/categories/categories.component.ts");
/* harmony import */ var _components_category_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/category/category.component */ "./src/app/components/category/category.component.ts");
/* harmony import */ var _components_races_races_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/races/races.component */ "./src/app/components/races/races.component.ts");
/* harmony import */ var _components_race_race_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/race/race.component */ "./src/app/components/race/race.component.ts");
/* harmony import */ var _components_go_go_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/go/go.component */ "./src/app/components/go/go.component.ts");
/* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ "./src/app/components/sign-in/sign-in.component.ts");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/users/users.component */ "./src/app/components/users/users.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_user_groups_user_groups_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/user-groups/user-groups.component */ "./src/app/components/user-groups/user-groups.component.ts");
/* harmony import */ var _components_user_group_user_group_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/user-group/user-group.component */ "./src/app/components/user-group/user-group.component.ts");
/* harmony import */ var _components_tags_tags_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/tags/tags.component */ "./src/app/components/tags/tags.component.ts");
/* harmony import */ var _components_tag_tag_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/tag/tag.component */ "./src/app/components/tag/tag.component.ts");
/* harmony import */ var _components_recievers_recievers_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/recievers/recievers.component */ "./src/app/components/recievers/recievers.component.ts");
/* harmony import */ var _components_reciever_reciever_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/reciever/reciever.component */ "./src/app/components/reciever/reciever.component.ts");
/* harmony import */ var _components_log_log_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/log/log.component */ "./src/app/components/log/log.component.ts");
/* harmony import */ var _components_trash_trash_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/trash/trash.component */ "./src/app/components/trash/trash.component.ts");
/* harmony import */ var _components_commands_commands_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/commands/commands.component */ "./src/app/components/commands/commands.component.ts");
/* harmony import */ var _components_distributions_distributions_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/distributions/distributions.component */ "./src/app/components/distributions/distributions.component.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");
/* harmony import */ var _components_account_account_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/account/account.component */ "./src/app/components/account/account.component.ts");
/* harmony import */ var _components_accounts_accounts_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/accounts/accounts.component */ "./src/app/components/accounts/accounts.component.ts");
/* harmony import */ var _components_rtqueue_rtqueue_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/rtqueue/rtqueue.component */ "./src/app/components/rtqueue/rtqueue.component.ts");




























var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'competitors', component: _components_competitors_competitors_component__WEBPACK_IMPORTED_MODULE_4__["CompetitorsComponent"] },
    { path: 'competitor', component: _components_competitor_competitor_component__WEBPACK_IMPORTED_MODULE_5__["CompetitorComponent"] },
    { path: 'competitor/:competitorId', component: _components_competitor_competitor_component__WEBPACK_IMPORTED_MODULE_5__["CompetitorComponent"] },
    { path: 'categories', component: _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_6__["CategoriesComponent"] },
    { path: 'category', component: _components_category_category_component__WEBPACK_IMPORTED_MODULE_7__["CategoryComponent"] },
    { path: 'category/:categoryId', component: _components_category_category_component__WEBPACK_IMPORTED_MODULE_7__["CategoryComponent"] },
    { path: 'races', component: _components_races_races_component__WEBPACK_IMPORTED_MODULE_8__["RacesComponent"] },
    { path: 'race/:raceId', component: _components_race_race_component__WEBPACK_IMPORTED_MODULE_9__["RaceComponent"] },
    { path: 'race', component: _components_race_race_component__WEBPACK_IMPORTED_MODULE_9__["RaceComponent"] },
    { path: 'go/:raceId', component: _components_go_go_component__WEBPACK_IMPORTED_MODULE_10__["GoComponent"] },
    { path: 'go', component: _components_go_go_component__WEBPACK_IMPORTED_MODULE_10__["GoComponent"] },
    { path: 'login', component: _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_11__["SignInComponent"] },
    { path: 'users', component: _components_users_users_component__WEBPACK_IMPORTED_MODULE_12__["UsersComponent"] },
    { path: 'user', component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_13__["UserComponent"] },
    { path: 'user/:userId', component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_13__["UserComponent"] },
    { path: 'user-groups', component: _components_user_groups_user_groups_component__WEBPACK_IMPORTED_MODULE_14__["UserGroupsComponent"] },
    { path: 'user-group', component: _components_user_group_user_group_component__WEBPACK_IMPORTED_MODULE_15__["UserGroupComponent"] },
    { path: 'user-group/:userGroupId', component: _components_user_group_user_group_component__WEBPACK_IMPORTED_MODULE_15__["UserGroupComponent"] },
    { path: 'tags', component: _components_tags_tags_component__WEBPACK_IMPORTED_MODULE_16__["TagsComponent"] },
    { path: 'tag', component: _components_tag_tag_component__WEBPACK_IMPORTED_MODULE_17__["TagComponent"] },
    { path: 'tag/:tagId', component: _components_tag_tag_component__WEBPACK_IMPORTED_MODULE_17__["TagComponent"] },
    { path: 'recievers', component: _components_recievers_recievers_component__WEBPACK_IMPORTED_MODULE_18__["RecieversComponent"] },
    { path: 'reciever', component: _components_reciever_reciever_component__WEBPACK_IMPORTED_MODULE_19__["RecieverComponent"] },
    { path: 'reciever/:recieverId', component: _components_reciever_reciever_component__WEBPACK_IMPORTED_MODULE_19__["RecieverComponent"] },
    { path: 'log', component: _components_log_log_component__WEBPACK_IMPORTED_MODULE_20__["LogComponent"] },
    { path: 'log/:objectType/:objectId', component: _components_log_log_component__WEBPACK_IMPORTED_MODULE_20__["LogComponent"] },
    { path: 'trash', component: _components_trash_trash_component__WEBPACK_IMPORTED_MODULE_21__["TrashComponent"] },
    { path: 'trash/:objectType', component: _components_trash_trash_component__WEBPACK_IMPORTED_MODULE_21__["TrashComponent"] },
    { path: 'trash/:objectType/:objectId', component: _components_trash_trash_component__WEBPACK_IMPORTED_MODULE_21__["TrashComponent"] },
    { path: 'commands', component: _components_commands_commands_component__WEBPACK_IMPORTED_MODULE_22__["CommandsComponent"] },
    { path: 'distributions', component: _components_distributions_distributions_component__WEBPACK_IMPORTED_MODULE_23__["DistributionsComponent"] },
    { path: 'settings', component: _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_24__["SettingsComponent"] },
    { path: 'settings/:settingsType', component: _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_24__["SettingsComponent"] },
    { path: 'accounts', component: _components_accounts_accounts_component__WEBPACK_IMPORTED_MODULE_26__["AccountsComponent"] },
    { path: 'account', component: _components_account_account_component__WEBPACK_IMPORTED_MODULE_25__["AccountComponent"] },
    { path: 'account/:accountId', component: _components_account_account_component__WEBPACK_IMPORTED_MODULE_25__["AccountComponent"] },
    { path: 'rtqueue', component: _components_rtqueue_rtqueue_component__WEBPACK_IMPORTED_MODULE_27__["RTQueueComponent"] },
];
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

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_indexed_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-indexed-db */ "./node_modules/ngx-indexed-db/fesm5/ngx-indexed-db.js");
/* harmony import */ var _db_migration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./db.migration */ "./src/app/db.migration.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/app.component */ "./src/app/components/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var ngx_debounce__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-debounce */ "./node_modules/ngx-debounce/fesm5/ngx-debounce.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _services_core_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/core.service */ "./src/app/services/core.service.ts");
/* harmony import */ var _services_lstorage_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/lstorage.service */ "./src/app/services/lstorage.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _pipes_my_filter_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pipes/my-filter.pipe */ "./src/app/pipes/my-filter.pipe.ts");
/* harmony import */ var _pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pipes/keys.pipe */ "./src/app/pipes/keys.pipe.ts");
/* harmony import */ var _pipes_as_result_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pipes/as-result.pipe */ "./src/app/pipes/as-result.pipe.ts");
/* harmony import */ var _pipes_in_list_filter_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pipes/in-list-filter.pipe */ "./src/app/pipes/in-list-filter.pipe.ts");
/* harmony import */ var _pipes_order_by_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pipes/order-by.pipe */ "./src/app/pipes/order-by.pipe.ts");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/items.service */ "./src/app/services/items.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_competitors_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/competitors.service */ "./src/app/services/competitors.service.ts");
/* harmony import */ var _services_competitor_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/competitor.service */ "./src/app/services/competitor.service.ts");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/categories.service */ "./src/app/services/categories.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _services_races_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/races.service */ "./src/app/services/races.service.ts");
/* harmony import */ var _services_race_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/race.service */ "./src/app/services/race.service.ts");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _services_user_groups_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./services/user-groups.service */ "./src/app/services/user-groups.service.ts");
/* harmony import */ var _services_user_group_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./services/user-group.service */ "./src/app/services/user-group.service.ts");
/* harmony import */ var _services_tags_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./services/tags.service */ "./src/app/services/tags.service.ts");
/* harmony import */ var _services_tag_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./services/tag.service */ "./src/app/services/tag.service.ts");
/* harmony import */ var _services_units_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./services/units.service */ "./src/app/services/units.service.ts");
/* harmony import */ var _services_unit_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./services/unit.service */ "./src/app/services/unit.service.ts");
/* harmony import */ var _services_hwtypes_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./services/hwtypes.service */ "./src/app/services/hwtypes.service.ts");
/* harmony import */ var _services_hwtype_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./services/hwtype.service */ "./src/app/services/hwtype.service.ts");
/* harmony import */ var _services_recievers_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./services/recievers.service */ "./src/app/services/recievers.service.ts");
/* harmony import */ var _services_reciever_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./services/reciever.service */ "./src/app/services/reciever.service.ts");
/* harmony import */ var _services_log_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./services/log.service */ "./src/app/services/log.service.ts");
/* harmony import */ var _services_log_item_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./services/log-item.service */ "./src/app/services/log-item.service.ts");
/* harmony import */ var _services_commands_service__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./services/commands.service */ "./src/app/services/commands.service.ts");
/* harmony import */ var _services_messages_service__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./services/messages.service */ "./src/app/services/messages.service.ts");
/* harmony import */ var _services_distribution_service__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./services/distribution.service */ "./src/app/services/distribution.service.ts");
/* harmony import */ var _services_distributions_service__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./services/distributions.service */ "./src/app/services/distributions.service.ts");
/* harmony import */ var _services_trash_service__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./services/trash.service */ "./src/app/services/trash.service.ts");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _services_appevents_service__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./services/appevents.service */ "./src/app/services/appevents.service.ts");
/* harmony import */ var _services_reference_service__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./services/reference.service */ "./src/app/services/reference.service.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _services_rtqueue_service__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./services/rtqueue.service */ "./src/app/services/rtqueue.service.ts");
/* harmony import */ var _services_rtqueue_item_service__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./services/rtqueue-item.service */ "./src/app/services/rtqueue-item.service.ts");
/* harmony import */ var _services_accounts_service__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./services/accounts.service */ "./src/app/services/accounts.service.ts");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./services/account.service */ "./src/app/services/account.service.ts");
/* harmony import */ var _services_test_service__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./services/test.service */ "./src/app/services/test.service.ts");
/* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ "./src/app/components/sign-in/sign-in.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_common_items_controls_items_controls_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./components/common/items-controls/items-controls.component */ "./src/app/components/common/items-controls/items-controls.component.ts");
/* harmony import */ var _components_common_items_table_items_table_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./components/common/items-table/items-table.component */ "./src/app/components/common/items-table/items-table.component.ts");
/* harmony import */ var _components_common_items_paginator_items_paginator_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./components/common/items-paginator/items-paginator.component */ "./src/app/components/common/items-paginator/items-paginator.component.ts");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./components/users/users.component */ "./src/app/components/users/users.component.ts");
/* harmony import */ var _components_user_groups_user_groups_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./components/user-groups/user-groups.component */ "./src/app/components/user-groups/user-groups.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_user_group_user_group_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./components/user-group/user-group.component */ "./src/app/components/user-group/user-group.component.ts");
/* harmony import */ var _components_tags_tags_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./components/tags/tags.component */ "./src/app/components/tags/tags.component.ts");
/* harmony import */ var _components_tag_tag_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./components/tag/tag.component */ "./src/app/components/tag/tag.component.ts");
/* harmony import */ var _components_recievers_recievers_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./components/recievers/recievers.component */ "./src/app/components/recievers/recievers.component.ts");
/* harmony import */ var _components_reciever_reciever_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./components/reciever/reciever.component */ "./src/app/components/reciever/reciever.component.ts");
/* harmony import */ var _components_common_search_select_search_select_component__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./components/common/search-select/search-select.component */ "./src/app/components/common/search-select/search-select.component.ts");
/* harmony import */ var _components_common_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./components/common/multi-select/multi-select.component */ "./src/app/components/common/multi-select/multi-select.component.ts");
/* harmony import */ var _components_competitors_competitors_component__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./components/competitors/competitors.component */ "./src/app/components/competitors/competitors.component.ts");
/* harmony import */ var _components_competitor_competitor_component__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./components/competitor/competitor.component */ "./src/app/components/competitor/competitor.component.ts");
/* harmony import */ var _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./components/categories/categories.component */ "./src/app/components/categories/categories.component.ts");
/* harmony import */ var _components_category_category_component__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./components/category/category.component */ "./src/app/components/category/category.component.ts");
/* harmony import */ var _components_common_input_tree_input_tree_component__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./components/common/input-tree/input-tree.component */ "./src/app/components/common/input-tree/input-tree.component.ts");
/* harmony import */ var _components_log_log_component__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./components/log/log.component */ "./src/app/components/log/log.component.ts");
/* harmony import */ var _components_nav_trash_nav_trash_component__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./components/nav-trash/nav-trash.component */ "./src/app/components/nav-trash/nav-trash.component.ts");
/* harmony import */ var _components_trash_trash_component__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./components/trash/trash.component */ "./src/app/components/trash/trash.component.ts");
/* harmony import */ var _components_commands_commands_component__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./components/commands/commands.component */ "./src/app/components/commands/commands.component.ts");
/* harmony import */ var _components_distributions_distributions_component__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./components/distributions/distributions.component */ "./src/app/components/distributions/distributions.component.ts");
/* harmony import */ var _components_nav_appevts_log_nav_appevts_log_component__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./components/nav-appevts-log/nav-appevts-log.component */ "./src/app/components/nav-appevts-log/nav-appevts-log.component.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");
/* harmony import */ var _components_accounts_accounts_component__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./components/accounts/accounts.component */ "./src/app/components/accounts/accounts.component.ts");
/* harmony import */ var _components_account_account_component__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./components/account/account.component */ "./src/app/components/account/account.component.ts");
/* harmony import */ var _components_rtqueue_rtqueue_component__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./components/rtqueue/rtqueue.component */ "./src/app/components/rtqueue/rtqueue.component.ts");
/* harmony import */ var _components_common_items_import_items_import_component__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./components/common/items-import/items-import.component */ "./src/app/components/common/items-import/items-import.component.ts");
/* harmony import */ var _components_races_races_component__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./components/races/races.component */ "./src/app/components/races/races.component.ts");
/* harmony import */ var _components_race_race_component__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./components/race/race.component */ "./src/app/components/race/race.component.ts");
/* harmony import */ var _components_go_go_component__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./components/go/go.component */ "./src/app/components/go/go.component.ts");
































































































// AoT requires an exported function for factories
function HttpLoaderFactory(httpClient) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](httpClient, 'assets/i18n/');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _components_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_61__["SignInComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_62__["HomeComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_63__["HeaderComponent"],
                _components_users_users_component__WEBPACK_IMPORTED_MODULE_67__["UsersComponent"],
                _components_user_groups_user_groups_component__WEBPACK_IMPORTED_MODULE_68__["UserGroupsComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_69__["UserComponent"],
                _components_user_group_user_group_component__WEBPACK_IMPORTED_MODULE_70__["UserGroupComponent"],
                _components_tags_tags_component__WEBPACK_IMPORTED_MODULE_71__["TagsComponent"],
                _components_tag_tag_component__WEBPACK_IMPORTED_MODULE_72__["TagComponent"],
                _pipes_my_filter_pipe__WEBPACK_IMPORTED_MODULE_18__["MyFilterPipe"],
                _pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_19__["KeysPipe"],
                _components_recievers_recievers_component__WEBPACK_IMPORTED_MODULE_73__["RecieversComponent"],
                _components_reciever_reciever_component__WEBPACK_IMPORTED_MODULE_74__["RecieverComponent"],
                _pipes_in_list_filter_pipe__WEBPACK_IMPORTED_MODULE_21__["InListFilterPipe"],
                _components_common_search_select_search_select_component__WEBPACK_IMPORTED_MODULE_75__["SearchSelectComponent"],
                _components_common_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_76__["MultiSelectComponent"],
                _pipes_as_result_pipe__WEBPACK_IMPORTED_MODULE_20__["AsResultPipe"],
                _components_competitors_competitors_component__WEBPACK_IMPORTED_MODULE_77__["CompetitorsComponent"],
                _components_competitor_competitor_component__WEBPACK_IMPORTED_MODULE_78__["CompetitorComponent"],
                _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_79__["CategoriesComponent"],
                _components_category_category_component__WEBPACK_IMPORTED_MODULE_80__["CategoryComponent"],
                _components_common_input_tree_input_tree_component__WEBPACK_IMPORTED_MODULE_81__["InputTreeComponent"],
                _components_log_log_component__WEBPACK_IMPORTED_MODULE_82__["LogComponent"],
                _pipes_order_by_pipe__WEBPACK_IMPORTED_MODULE_22__["OrderByPipe"],
                _components_nav_trash_nav_trash_component__WEBPACK_IMPORTED_MODULE_83__["NavTrashComponent"],
                _components_trash_trash_component__WEBPACK_IMPORTED_MODULE_84__["TrashComponent"],
                _components_common_items_controls_items_controls_component__WEBPACK_IMPORTED_MODULE_64__["ItemsControlsComponent"],
                _components_common_items_table_items_table_component__WEBPACK_IMPORTED_MODULE_65__["ItemsTableComponent"],
                _components_common_items_paginator_items_paginator_component__WEBPACK_IMPORTED_MODULE_66__["ItemsPaginatorComponent"],
                _components_commands_commands_component__WEBPACK_IMPORTED_MODULE_85__["CommandsComponent"],
                _components_distributions_distributions_component__WEBPACK_IMPORTED_MODULE_86__["DistributionsComponent"],
                _components_nav_appevts_log_nav_appevts_log_component__WEBPACK_IMPORTED_MODULE_87__["NavAPPEvtsLogComponent"],
                _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_88__["SettingsComponent"],
                _components_accounts_accounts_component__WEBPACK_IMPORTED_MODULE_89__["AccountsComponent"],
                _components_account_account_component__WEBPACK_IMPORTED_MODULE_90__["AccountComponent"],
                _components_rtqueue_rtqueue_component__WEBPACK_IMPORTED_MODULE_91__["RTQueueComponent"],
                _components_common_items_import_items_import_component__WEBPACK_IMPORTED_MODULE_92__["ItemsImportComponent"],
                _components_races_races_component__WEBPACK_IMPORTED_MODULE_93__["RacesComponent"],
                _components_race_race_component__WEBPACK_IMPORTED_MODULE_94__["RaceComponent"],
                _components_go_go_component__WEBPACK_IMPORTED_MODULE_95__["GoComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                ngx_indexed_db__WEBPACK_IMPORTED_MODULE_4__["NgxIndexedDBModule"].forRoot(Object(_db_migration__WEBPACK_IMPORTED_MODULE_5__["myDBConfig"])()),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"],
                ngx_debounce__WEBPACK_IMPORTED_MODULE_13__["DebounceModule"],
                ngx_export_as__WEBPACK_IMPORTED_MODULE_14__["ExportAsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                })
            ],
            providers: [
                _services_core_service__WEBPACK_IMPORTED_MODULE_15__["CoreService"],
                _services_lstorage_service__WEBPACK_IMPORTED_MODULE_16__["LStorageService"],
                _services_api_service__WEBPACK_IMPORTED_MODULE_17__["APIService"],
                _services_item_service__WEBPACK_IMPORTED_MODULE_23__["ItemService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_26__["UserService"],
                _services_user_groups_service__WEBPACK_IMPORTED_MODULE_35__["UserGroupsService"],
                _services_items_service__WEBPACK_IMPORTED_MODULE_24__["ItemsService"],
                _services_users_service__WEBPACK_IMPORTED_MODULE_25__["UsersService"],
                _services_competitors_service__WEBPACK_IMPORTED_MODULE_27__["CompetitorsService"],
                _services_competitor_service__WEBPACK_IMPORTED_MODULE_28__["CompetitorService"],
                _services_categories_service__WEBPACK_IMPORTED_MODULE_29__["CategoriesService"],
                _services_category_service__WEBPACK_IMPORTED_MODULE_30__["CategoryService"],
                _services_races_service__WEBPACK_IMPORTED_MODULE_31__["RacesService"],
                _services_race_service__WEBPACK_IMPORTED_MODULE_32__["RaceService"],
                _services_events_service__WEBPACK_IMPORTED_MODULE_33__["EventsService"],
                _services_event_service__WEBPACK_IMPORTED_MODULE_34__["EventService"],
                _services_user_group_service__WEBPACK_IMPORTED_MODULE_36__["UserGroupService"],
                _services_tags_service__WEBPACK_IMPORTED_MODULE_37__["TagsService"],
                _services_tag_service__WEBPACK_IMPORTED_MODULE_38__["TagService"],
                _services_units_service__WEBPACK_IMPORTED_MODULE_39__["UnitsService"],
                _services_unit_service__WEBPACK_IMPORTED_MODULE_40__["UnitService"],
                _services_hwtypes_service__WEBPACK_IMPORTED_MODULE_41__["HWTypesService"],
                _services_hwtype_service__WEBPACK_IMPORTED_MODULE_42__["HWTypeService"],
                _services_recievers_service__WEBPACK_IMPORTED_MODULE_43__["RecieversService"],
                _services_reciever_service__WEBPACK_IMPORTED_MODULE_44__["RecieverService"],
                _services_log_service__WEBPACK_IMPORTED_MODULE_45__["LogService"],
                _services_log_item_service__WEBPACK_IMPORTED_MODULE_46__["LogItemService"],
                _services_trash_service__WEBPACK_IMPORTED_MODULE_51__["TrashService"],
                _services_distribution_service__WEBPACK_IMPORTED_MODULE_49__["DistributionService"],
                _services_distributions_service__WEBPACK_IMPORTED_MODULE_50__["DistributionsService"],
                _services_state_service__WEBPACK_IMPORTED_MODULE_52__["StateService"],
                _services_commands_service__WEBPACK_IMPORTED_MODULE_47__["CommandsService"],
                _services_messages_service__WEBPACK_IMPORTED_MODULE_48__["MessagesService"],
                _services_appevents_service__WEBPACK_IMPORTED_MODULE_53__["APPEventsService"],
                _services_reference_service__WEBPACK_IMPORTED_MODULE_54__["ReferenceService"],
                _services_settings_service__WEBPACK_IMPORTED_MODULE_55__["SettingsService"],
                _services_rtqueue_service__WEBPACK_IMPORTED_MODULE_56__["RTQueueService"],
                _services_rtqueue_item_service__WEBPACK_IMPORTED_MODULE_57__["RTQueueItemService"],
                _services_accounts_service__WEBPACK_IMPORTED_MODULE_58__["AccountsService"],
                _services_account_service__WEBPACK_IMPORTED_MODULE_59__["AccountService"],
                _services_test_service__WEBPACK_IMPORTED_MODULE_60__["TestService"],
            ],
            bootstrap: [_components_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes/indexable.ts":
/*!**************************************!*\
  !*** ./src/app/classes/indexable.ts ***!
  \**************************************/
/*! exports provided: Indexable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Indexable", function() { return Indexable; });
var Indexable = /** @class */ (function () {
    function Indexable() {
        this.items = [];
        this._index = {};
        this._indexableProps = [];
        this.items = [];
        this._index = {};
    }
    Indexable.prototype.createIndex = function (items) {
        var _this = this;
        this._indexableProps.forEach(function (prop) {
            _this._index[prop] = {};
            items.forEach(function (item) {
                if (item[prop])
                    _this._index[prop][item[prop]] = item;
            });
        });
        return this._index;
    };
    return Indexable;
}());



/***/ }),

/***/ "./src/app/components/account/account.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/account/account.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/account/account.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/account/account.component.ts ***!
  \*********************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");









var AccountComponent = /** @class */ (function () {
    function AccountComponent(route, fb, app, router) {
        this.route = route;
        this.fb = fb;
        this.app = app;
        this.router = router;
        this.account = null;
        this.initializing = false;
        this.faCog = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faCog"];
    }
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        this.app.ifAccountsReady()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return _this.route.params; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (params) { return (params['accountId'] ? _this.app.accounts._index.id[params['accountId']].get() : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(undefined)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (item) { _this.account = item; }))
            .subscribe(function () {
            if (_this.account)
                _this.accountForm.patchValue(_this.account);
        });
    };
    AccountComponent.prototype.initForm = function () {
        this.accountForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            wtoken: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
        });
    };
    AccountComponent.prototype.onAccountFormSubmit = function () {
        this.account ? this.saveAccount() : this.addAccount();
    };
    AccountComponent.prototype.addAccount = function () {
        var _this = this;
        this.app.accounts.add(this.accountForm.value)
            .subscribe(function (res) {
            var newUserId = null;
            if (res.id)
                newUserId = res.id;
            _this.app.accounts.get()
                .subscribe(function () {
                if (newUserId)
                    _this.router.navigate(['accounts']);
            });
        });
    };
    AccountComponent.prototype.saveAccount = function () {
        var _this = this;
        for (var key in this.accountForm.value) {
            this.account[key] = this.accountForm.value[key];
        }
        this.account.save()
            .subscribe(function (res) {
            _this.app.accounts.get()
                .subscribe();
            _this.router.navigate(['accounts']);
        });
    };
    AccountComponent.prototype.initAccount = function () {
        var _this = this;
        this.initializing = true;
        for (var key in this.accountForm.value) {
            this.account[key] = this.accountForm.value[key];
        }
        this.initResult = {};
        this.account.init().subscribe(function (result) { _this.initResult = result; _this.initializing = false; });
    };
    AccountComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! raw-loader!./account.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.scss */ "./src/app/components/account/account.component.scss")]
        })
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/components/accounts/accounts.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/accounts/accounts.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudHMvYWNjb3VudHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/accounts/accounts.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/accounts/accounts.component.ts ***!
  \***********************************************************/
/*! exports provided: AccountsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsComponent", function() { return AccountsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");



var AccountsComponent = /** @class */ (function () {
    function AccountsComponent(app) {
        this.app = app;
        this.itemType = 'accounts';
        this.tableOptions = {
            delBtn: false
        };
    }
    AccountsComponent.prototype.ngOnInit = function () {
    };
    AccountsComponent.ctorParameters = function () { return [
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
    ]; };
    AccountsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-accounts',
            template: __webpack_require__(/*! raw-loader!./accounts.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/accounts/accounts.component.html"),
            styles: [__webpack_require__(/*! ./accounts.component.scss */ "./src/app/components/accounts/accounts.component.scss")]
        })
    ], AccountsComponent);
    return AccountsComponent;
}());



/***/ }),

/***/ "./src/app/components/app.component.scss":
/*!***********************************************!*\
  !*** ./src/app/components/app.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#outlet-container {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9EOlxcT1NQYW5lbFxcZG9tYWluc1xcbWZ0aW1pbmdcXGZyb250ZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI291dGxldC1jb250YWluZXJ7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufSIsIiNvdXRsZXQtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/app.component.ts":
/*!*********************************************!*\
  !*** ./src/app/components/app.component.ts ***!
  \*********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/core.service */ "./src/app/services/core.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_lstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/lstorage.service */ "./src/app/services/lstorage.service.ts");







var AppComponent = /** @class */ (function () {
    function AppComponent(core, app, router, translate, storage) {
        this.core = core;
        this.app = app;
        this.router = router;
        this.translate = translate;
        this.storage = storage;
        this.title = 'rfid-limit';
        this.param = { value: 'world' };
        translate.addLangs(['en', 'ru']);
        translate.setDefaultLang('ru');
        var storedLng = String(this.storage.get('lng'));
        var browserLang = storedLng ? storedLng : translate.getBrowserLang();
        translate.use(browserLang.match(/en|ru/) ? browserLang : 'ru');
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.core.init()
            .subscribe(function (res) { });
        this.app.init();
        this.core.onLoggedIn()
            .subscribe(function (res) {
            if (_this.router.isActive('login', false))
                _this.router.navigate(['units']);
        });
        this.core.onCheckAuthError()
            .subscribe(function (res) { _this.core.clearSession(); if (!_this.router.isActive('login', false))
            _this.router.navigate(['login']); });
        this.app.onAppReady()
            .subscribe();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _services_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"] },
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _services_lstorage_service__WEBPACK_IMPORTED_MODULE_6__["LStorageService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/components/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/components/categories/categories.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/categories/categories.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/categories/categories.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/categories/categories.component.ts ***!
  \***************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");



var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(app) {
        this.app = app;
        this.tableOptions = {
            fieldNames: [
                // 'accountId',
                // 'seasonId',
                'name',
                'ageFrom',
                'ageTo',
            ],
            fields: {
                name: { type: 'link' },
            },
        };
        this.itemType = 'categories';
    }
    CategoriesComponent.prototype.ngOnInit = function () {
    };
    CategoriesComponent.ctorParameters = function () { return [
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
    ]; };
    CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! raw-loader!./categories.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.scss */ "./src/app/components/categories/categories.component.scss")]
        })
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/components/category/category.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/category/category.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/category/category.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/category/category.component.ts ***!
  \***********************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");







var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(route, fb, app, router) {
        this.route = route;
        this.fb = fb;
        this.app = app;
        this.router = router;
        this.category = null;
        this.importOptions = {
            fields: [
                { name: 'seasonId', src: 'value', value: '1', validators: ['required'] },
                { name: 'name', src: 0, validators: ['required'] },
                { name: 'ageFrom', src: 'value', value: '0', validators: ['required'] },
                { name: 'ageTo', src: 'value', value: '0', validators: ['required'] },
            ],
            delitmer: '\\t',
        };
        this.multiAddErrors = [];
        this.parsedItems = { items: [], errors: [] };
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        this.app.ifAppReady()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.route.params; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (params) {
            _this.category = _this.app.categories._index.id[params['categoryId']];
        }))
            .subscribe(function () {
            if (_this.category)
                _this.itemForm.patchValue(_this.category);
        });
    };
    CategoryComponent.prototype.initForm = function () {
        this.itemForm = this.fb.group({
            seasonId: ['', []],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            ageFrom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            ageTo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
        });
    };
    CategoryComponent.prototype.onItemFormSubmit = function () {
        this.category ? this.saveCategory() : this.addCategory();
    };
    CategoryComponent.prototype.addCategory = function () {
        var _this = this;
        console.log(this.itemForm);
        this.app.categories.add(this.itemForm.value)
            .subscribe(function (res) {
            var newItemId = null;
            if (res.id)
                newItemId = res.id;
            _this.app.categories.get()
                .subscribe(function () {
                if (newItemId)
                    _this.router.navigate(['categories']);
            });
        });
    };
    CategoryComponent.prototype.saveCategory = function () {
        var _this = this;
        for (var key in this.itemForm.value) {
            this.category[key] = this.itemForm.value[key];
        }
        this.category.save()
            .subscribe(function (res) {
            _this.app.categories.get()
                .subscribe();
            _this.router.navigate(['categories']);
        });
    };
    CategoryComponent.prototype.importItems = function (items) {
        var _this = this;
        this.app.categories.addMultiple(items)
            .subscribe(function (res) {
            _this.multiAddErrors = res.added.filter(function (item) { return !item.id; });
            _this.app.categories.get()
                .subscribe();
            if (_this.multiAddErrors.length === 0)
                _this.router.navigate(['categories']);
        });
    };
    CategoryComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! raw-loader!./category.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.scss */ "./src/app/components/category/category.component.scss")]
        })
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/components/commands/commands.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/commands/commands.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbWFuZHMvY29tbWFuZHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/commands/commands.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/commands/commands.component.ts ***!
  \***********************************************************/
/*! exports provided: CommandsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandsComponent", function() { return CommandsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_test_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/test.service */ "./src/app/services/test.service.ts");
/* harmony import */ var _services_lstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/lstorage.service */ "./src/app/services/lstorage.service.ts");
/* harmony import */ var _services_commands_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/commands.service */ "./src/app/services/commands.service.ts");
/* harmony import */ var _services_messages_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/messages.service */ "./src/app/services/messages.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");









var CommandsComponent = /** @class */ (function () {
    function CommandsComponent(app, fb, test, storage, commands, messages) {
        this.app = app;
        this.fb = fb;
        this.test = test;
        this.storage = storage;
        this.commands = commands;
        this.messages = messages;
        this.faCog = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faCog"];
        this.faTrashAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faTrashAlt"];
        this.faAngleDoubleLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faAngleDoubleLeft"];
        this.faAngleDoubleRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faAngleDoubleRight"];
        this.commandResult = null;
        this.sendedCommandsList = [];
        this.command = { units_id: 0 };
    }
    CommandsComponent.prototype.ngOnInit = function () {
        this.initForm();
        var storedCommand = this.storage.get('lastCommand');
        if (storedCommand)
            this.command = storedCommand;
        var sendedCommandsList = this.storage.get('sendedCommandsList');
        if (sendedCommandsList)
            this.sendedCommandsList = sendedCommandsList;
        if (this.command)
            this.commandForm.patchValue(this.command);
    };
    CommandsComponent.prototype.initForm = function () {
        this.commandForm = this.fb.group({
            units_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            text: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            service: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
        });
    };
    CommandsComponent.prototype.sendCommand = function () {
        var _this = this;
        if (!this.commandForm.value.units_id)
            return false;
        if (!this.commandForm.value.service)
            return false;
        this.commandResult = null;
        this.storage.set('lastCommand', this.commandForm.value);
        if (this.sendedCommandsList.indexOf(this.commandForm.value.text) < 0) {
            this.sendedCommandsList.push(this.commandForm.value.text);
            this.storage.set('sendedCommandsList', this.sendedCommandsList);
        }
        this.commands.send(this.commandForm.value)
            .subscribe(function (res) {
            _this.commandResult = res;
            setTimeout(function () { _this.getCommandsMessages(); }, 10000);
        });
    };
    CommandsComponent.prototype.getCommandsMessages = function () {
        this.messages.get({
            units_id: this.commandForm.value.units_id,
            service: this.commandForm.value.service
        })
            .subscribe(function (res) {
        });
    };
    CommandsComponent.prototype.setCommandText = function (text) {
        this.commandForm.patchValue({ text: text });
    };
    CommandsComponent.prototype.delCommandFromSendedList = function (text) {
        var index = this.sendedCommandsList.indexOf(text);
        if (index > -1)
            this.sendedCommandsList.splice(index, 1);
    };
    CommandsComponent.ctorParameters = function () { return [
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_test_service__WEBPACK_IMPORTED_MODULE_4__["TestService"] },
        { type: _services_lstorage_service__WEBPACK_IMPORTED_MODULE_5__["LStorageService"] },
        { type: _services_commands_service__WEBPACK_IMPORTED_MODULE_6__["CommandsService"] },
        { type: _services_messages_service__WEBPACK_IMPORTED_MODULE_7__["MessagesService"] }
    ]; };
    CommandsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-commands',
            template: __webpack_require__(/*! raw-loader!./commands.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/commands/commands.component.html"),
            styles: [__webpack_require__(/*! ./commands.component.scss */ "./src/app/components/commands/commands.component.scss")]
        })
    ], CommandsComponent);
    return CommandsComponent;
}());



/***/ }),

/***/ "./src/app/components/common/input-tree/input-tree.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/common/input-tree/input-tree.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL2lucHV0LXRyZWUvaW5wdXQtdHJlZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/common/input-tree/input-tree.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/common/input-tree/input-tree.component.ts ***!
  \**********************************************************************/
/*! exports provided: InputTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTreeComponent", function() { return InputTreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");



var InputTreeComponent = /** @class */ (function () {
    function InputTreeComponent(translate) {
        this.translate = translate;
        this.updateEvent = new Event('treeUpdated');
        this.translateData = {};
    }
    InputTreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        //fromEvent(document, 'treeUpdated').subscribe(_=>{this.initRightsTree(this.item);});
        this.translate.get('INPUT-TREE').subscribe(function (res) { _this.translateData = res; });
        this.translate.get('types').subscribe(function (res) {
            for (var key in res) {
                _this.translateData[key] = res[key];
            }
        });
    };
    InputTreeComponent.prototype.ngAfterViewInit = function () {
        this.initRightsTree(this.item);
    };
    InputTreeComponent.prototype.initRightsTree = function (item) {
        var _this = this;
        var cnt = document.getElementById('input_tree_' + this.controlIdKey);
        cnt && (cnt.innerHTML = '');
        var setCheckboxView = function (checkbox, value) {
            if (value === 1 || value === true) {
                checkbox.checked = true;
                checkbox.className = 'true';
            }
            else if (value === 0 || value === false) {
                checkbox.checked = false;
                checkbox.className = 'false';
            }
            else if (value === null || value === undefined) {
                checkbox.checked = false;
                checkbox.className = 'null';
            }
        };
        var switchCheckbox = function (checkbox, value) {
            if (value === 1 || value === true) {
                value = 0;
            }
            else if (value === 0 || value === false) {
                value = null;
            }
            else if (value === null || value === undefined) {
                value = 1;
            }
            setCheckboxView(checkbox, value);
            return value;
        };
        var goDeeper = function (compiledObject, valuesObject, parentEelem, level, parentObject, key) {
            if (compiledObject && (typeof (compiledObject) === 'object')) {
                var _loop_1 = function (key_1) {
                    var elem = document.createElement('div');
                    if (typeof (compiledObject[key_1]) === 'object') {
                        if (valuesObject && !valuesObject[key_1])
                            valuesObject[key_1] = {};
                        var span = document.createElement('span');
                        var text = document.createTextNode(_this.translateData[key_1] ? _this.translateData[key_1] : key_1);
                        span.appendChild(text);
                        span.className = 'branch-header';
                        elem._childrenChecked = 0;
                        span.onclick = function () {
                            var childrenDivs = elem.children;
                            for (var key1 in childrenDivs) {
                                if (childrenDivs[key1].children && childrenDivs[key1].children[0] && childrenDivs[key1].children[0].children[0]) {
                                    var checkbox = childrenDivs[key1].children[0].children[0];
                                    if (checkbox.type === 'checkbox' && !checkbox.disabled) {
                                        checkbox.checked = 1 * elem._childrenChecked;
                                        checkbox.onchange();
                                    }
                                }
                            }
                            elem._childrenChecked = !elem._childrenChecked;
                        };
                        parentEelem.appendChild(span);
                    }
                    else {
                        elem.className = 'inline';
                    }
                    parentEelem.appendChild(elem);
                    goDeeper(compiledObject[key_1], valuesObject[key_1], elem, level + 1, valuesObject, key_1);
                };
                for (var key_1 in compiledObject) {
                    _loop_1(key_1);
                }
            }
            else {
                var label = document.createElement('label');
                var text = document.createTextNode(_this.translateData[key] ? _this.translateData[key] : key);
                var checkbox_1 = document.createElement('input');
                checkbox_1.type = 'checkbox';
                label.appendChild(checkbox_1);
                label.appendChild(text);
                parentEelem.appendChild(label);
                if (compiledObject === 0) {
                    checkbox_1.disabled = true;
                    label.className = 'disabled';
                    //label.style.color = 'red';
                }
                else {
                    setCheckboxView(checkbox_1, valuesObject);
                    checkbox_1.onchange = function (e) {
                        valuesObject = switchCheckbox(checkbox_1, valuesObject);
                        parentObject[key] = valuesObject;
                        _this.form.controls[_this.controlIdKey].setValue(item[_this.controlIdKey]);
                        if (e) {
                            e.stopPropagation();
                            e.preventDefault();
                        }
                        return false;
                    };
                }
            }
        };
        if (!item[this.controlIdKey])
            item[this.controlIdKey] = {};
        this.form.controls['rights'].setValue(item[this.controlIdKey]);
        goDeeper(this.sourceTree, item[this.controlIdKey], cnt, 0, item[this.controlIdKey], '');
    };
    InputTreeComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('form')
    ], InputTreeComponent.prototype, "form", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('controlIdKey')
    ], InputTreeComponent.prototype, "controlIdKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('sourceTree')
    ], InputTreeComponent.prototype, "sourceTree", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('item')
    ], InputTreeComponent.prototype, "item", void 0);
    InputTreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input-tree',
            template: __webpack_require__(/*! raw-loader!./input-tree.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/common/input-tree/input-tree.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./input-tree.component.scss */ "./src/app/components/common/input-tree/input-tree.component.scss")]
        })
    ], InputTreeComponent);
    return InputTreeComponent;
}());



/***/ }),

/***/ "./src/app/components/common/items-controls/items-controls.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/common/items-controls/items-controls.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col.filter {\n  max-width: 270px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vaXRlbXMtY29udHJvbHMvRDpcXE9TUGFuZWxcXGRvbWFpbnNcXG1mdGltaW5nXFxmcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29tbW9uXFxpdGVtcy1jb250cm9sc1xcaXRlbXMtY29udHJvbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL2l0ZW1zLWNvbnRyb2xzL2l0ZW1zLWNvbnRyb2xzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL2l0ZW1zLWNvbnRyb2xzL2l0ZW1zLWNvbnRyb2xzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbC5maWx0ZXJ7XHJcbiAgbWF4LXdpZHRoOiAyNzBweDtcclxufSIsIi5jb2wuZmlsdGVyIHtcbiAgbWF4LXdpZHRoOiAyNzBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/common/items-controls/items-controls.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/common/items-controls/items-controls.component.ts ***!
  \******************************************************************************/
/*! exports provided: ItemsControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsControlsComponent", function() { return ItemsControlsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");




var ItemsControlsComponent = /** @class */ (function () {
    function ItemsControlsComponent(exportAsService) {
        this.exportAsService = exportAsService;
        this._options = {};
        this.options = {
            exportBtn: true,
            clearBtn: false,
        };
        this.faBan = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBan"];
        this.faFileExcel = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faFileExcel"];
        this.faTrashAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTrashAlt"];
        this.svc = null;
        this.addPath = '';
        this.limits = [];
        this.exportAsConfig = {
            type: 'xlsx',
            elementIdOrContent: 'items-table'
        };
        this.clearDialog = false;
    }
    ItemsControlsComponent.prototype.ngOnInit = function () {
        for (var key in this._options) {
            this.options[key] = this._options[key];
        }
        this.svc = this.app[this.itemType];
        this.addPath = this.app.addPaths[this.itemType];
        if (this.app.state.items[this.itemType])
            this.s = this.app.state.items[this.itemType];
        var _limit = 1 * this.app.state.default.limit;
        this.limits = [];
        this.limits.push(_limit);
        while (_limit <= 1000) {
            _limit += 1 * _limit;
            this.limits.push(_limit);
        }
    };
    ItemsControlsComponent.prototype.resetFilter = function () {
        this.app.state.resetFilter(this.itemType);
    };
    ItemsControlsComponent.prototype.export = function () {
        // download the file using old school javascript method
        this.exportAsService.save(this.exportAsConfig, this.itemType).subscribe(function () {
            // save started
        });
        // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
        // this.exportAsService.get(this.exportAsConfig).subscribe(content => {
        //   console.log(content);
        // });
    };
    ItemsControlsComponent.prototype.clear = function () {
        var _this = this;
        this.svc.clear().subscribe(function () {
            _this.svc.get().subscribe();
            _this.clearDialog = false;
        });
    };
    ItemsControlsComponent.ctorParameters = function () { return [
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_3__["ExportAsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('app')
    ], ItemsControlsComponent.prototype, "app", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('itemType')
    ], ItemsControlsComponent.prototype, "itemType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('options')
    ], ItemsControlsComponent.prototype, "_options", void 0);
    ItemsControlsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-items-controls',
            template: __webpack_require__(/*! raw-loader!./items-controls.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/common/items-controls/items-controls.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./items-controls.component.scss */ "./src/app/components/common/items-controls/items-controls.component.scss")]
        })
    ], ItemsControlsComponent);
    return ItemsControlsComponent;
}());



/***/ }),

/***/ "./src/app/components/common/items-import/items-import.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/components/common/items-import/items-import.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-wrapper {\n  height: 254px;\n  overflow-y: auto;\n  border: 1px solid #d6d6d6;\n  border-radius: 3px;\n}\n\n.hidden {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vaXRlbXMtaW1wb3J0L0Q6XFxPU1BhbmVsXFxkb21haW5zXFxtZnRpbWluZ1xcZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNvbW1vblxcaXRlbXMtaW1wb3J0XFxpdGVtcy1pbXBvcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL2l0ZW1zLWltcG9ydC9pdGVtcy1pbXBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbW1vbi9pdGVtcy1pbXBvcnQvaXRlbXMtaW1wb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLXdyYXBwZXJ7XHJcbiAgaGVpZ2h0OiAyNTRweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNmQ2ZDY7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcbi5oaWRkZW57XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4iLCIudGFibGUtd3JhcHBlciB7XG4gIGhlaWdodDogMjU0cHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNmQ2ZDY7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/common/items-import/items-import.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/common/items-import/items-import.component.ts ***!
  \**************************************************************************/
/*! exports provided: ItemsImportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsImportComponent", function() { return ItemsImportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ItemsImportComponent = /** @class */ (function () {
    function ItemsImportComponent() {
        this.onParse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        //public srcData:string = 'RFIDset 2787810,0,0,0\nRFIDset 2787811,0,0,0\nRFIDset 2787812,0,0,0\nRFIDset 2787813,0,0,0\nRFIDset 2787814,0,0,0\nRFIDset 2787815,0,0,0\nRFIDset 2787816,0,0,0\nRFIDset 2787817,0,0,0\nRFIDset 2787818,0,0,0\nRFIDset 2787819,0,0,0';
        this.srcData = '';
        this.parsedItems = [];
        this.delitmer = '';
        this.errors = [];
        this.validators = {
            required: function (value, key, items, index) {
                if (!value)
                    return { class: 'danger', msg: 'empty value', type: 'error' };
            },
            uniq: function (value, key, items, index) {
                if (value) {
                    if (index[key] && index[key][value]) {
                        return { class: 'danger', msg: 'value not uniq', type: 'error' };
                    }
                }
            },
        };
    }
    ItemsImportComponent.prototype.ngOnInit = function () {
        //this.parseSrcData();
        if (this.options && this.options.delitmer)
            this.delitmer = this.options.delitmer;
    };
    ItemsImportComponent.prototype.parseSrcData = function () {
        var _this = this;
        var index = {};
        this.errors = [];
        this.parsedItems = this.srcData.split(/[\n\r]/).map(function (row, i) {
            var arr = row.split(new RegExp(_this.delitmer ? _this.delitmer : /[\t\s,;]/));
            var item = { _state: {} };
            for (var key in _this.options.fields) {
                var field = _this.options.fields[key];
                if (field.src === 'value') {
                    if (field.value !== undefined)
                        item[field.name] = field.value.trim();
                }
                else if (field.relItems && field.relItemsProp) {
                    if (arr[field.src] !== undefined) {
                        if (field.relItems && field.relItems._index && field.relItems._index[field.relItemsProp] && field.relItems._index[field.relItemsProp][arr[field.src].trim()]) {
                            item[field.name] = field.relItems._index[field.relItemsProp][arr[field.src].trim()].id;
                        }
                    }
                }
                else {
                    if (arr[field.src] !== undefined)
                        item[field.name] = arr[field.src].trim();
                }
                if (field.validators) {
                    for (var vkey in field.validators) {
                        var validator = field.validators[vkey];
                        var validatorFunc = null;
                        if (typeof validator === 'function') {
                            validatorFunc = validator;
                        }
                        else if (typeof validator === 'string' && _this.validators[validator]) {
                            validatorFunc = _this.validators[validator];
                        }
                        if (validatorFunc) {
                            var result = validatorFunc(item[field.name], field.name, _this.parsedItems, index);
                            if (result) {
                                item._state[field.name] = result;
                                if (result.type && result.type === 'error') {
                                    _this.errors.push({ result: result, row: i + 1, fieldName: field.name });
                                }
                            }
                            ;
                        }
                    }
                }
                if (item[field.name] !== undefined && item[field.name] !== '') {
                    if (index[field.name] === undefined)
                        index[field.name] = {};
                    index[field.name][item[field.name]] = item;
                }
            }
            return item;
        }).filter(function (item) { return JSON.stringify(item) !== '{}'; });
        var items = [];
        for (var ckey in this.parsedItems) {
            var copy = Object.assign({}, this.parsedItems[ckey]);
            delete copy._state;
            items.push(copy);
        }
        ;
        this.onParse.emit({ items: items, errors: this.errors });
    };
    ItemsImportComponent.prototype.notSkypped = function (items) {
        return items.filter(function (item) { return (item.src !== 'skip'); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('app')
    ], ItemsImportComponent.prototype, "app", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('itemType')
    ], ItemsImportComponent.prototype, "itemType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('options')
    ], ItemsImportComponent.prototype, "options", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('parse')
    ], ItemsImportComponent.prototype, "onParse", void 0);
    ItemsImportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-items-import',
            template: __webpack_require__(/*! raw-loader!./items-import.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/common/items-import/items-import.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./items-import.component.scss */ "./src/app/components/common/items-import/items-import.component.scss")]
        })
    ], ItemsImportComponent);
    return ItemsImportComponent;
}());



/***/ }),

/***/ "./src/app/components/common/items-paginator/items-paginator.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/components/common/items-paginator/items-paginator.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL2l0ZW1zLXBhZ2luYXRvci9pdGVtcy1wYWdpbmF0b3IuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/common/items-paginator/items-paginator.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/common/items-paginator/items-paginator.component.ts ***!
  \********************************************************************************/
/*! exports provided: ItemsPaginatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsPaginatorComponent", function() { return ItemsPaginatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ItemsPaginatorComponent = /** @class */ (function () {
    function ItemsPaginatorComponent() {
    }
    ItemsPaginatorComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('state')
    ], ItemsPaginatorComponent.prototype, "s", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('result')
    ], ItemsPaginatorComponent.prototype, "result", void 0);
    ItemsPaginatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-items-paginator',
            template: __webpack_require__(/*! raw-loader!./items-paginator.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/common/items-paginator/items-paginator.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./items-paginator.component.scss */ "./src/app/components/common/items-paginator/items-paginator.component.scss")]
        })
    ], ItemsPaginatorComponent);
    return ItemsPaginatorComponent;
}());



/***/ }),

/***/ "./src/app/components/common/items-table/items-table.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/common/items-table/items-table.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes firstAdd {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.added {\n  -webkit-animation-name: firstAdd;\n  -webkit-animation-duration: 0.3s;\n  -webkit-animation-iteration-count: 1;\n  -webkit-animation-timing-function: ease-in-out;\n  -webkit-animation-direction: alternate;\n}\n@-webkit-keyframes blocked {\n  from {\n    background-position: 0px;\n  }\n  to {\n    background-position: 109px;\n  }\n}\n.blocked {\n  opacity: 0.3;\n  background: url(\"/assets/images/blockedBG.png\");\n  background-repeat: repeat;\n  -webkit-animation-name: blocked;\n  -webkit-animation-duration: 2s;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vaXRlbXMtdGFibGUvRDpcXE9TUGFuZWxcXGRvbWFpbnNcXG1mdGltaW5nXFxmcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29tbW9uXFxpdGVtcy10YWJsZVxcaXRlbXMtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL2l0ZW1zLXRhYmxlL2l0ZW1zLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxVQUFBO0VDQ0Y7RURDQTtJQUNFLFVBQUE7RUNDRjtBQUNGO0FERUE7RUFDRSxnQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLHNDQUFBO0FDQUY7QURHQTtFQUNFO0lBQ0Usd0JBQUE7RUNBRjtFREVBO0lBQ0UsMEJBQUE7RUNBRjtBQUNGO0FER0E7RUFDRSxZQUFBO0VBRUEsK0NBQUE7RUFFQSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQ0FBQTtFQUNBLHlDQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbW1vbi9pdGVtcy10YWJsZS9pdGVtcy10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkAtd2Via2l0LWtleWZyYW1lcyBmaXJzdEFkZCB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLmFkZGVke1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZpcnN0QWRkO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAuM3M7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluLW91dDtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGJsb2NrZWQge1xyXG4gIGZyb20ge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4OyAgICBcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTA5cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYmxvY2tlZHtcclxuICBvcGFjaXR5OiAuMztcclxuICAvLyBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL3Byb2dyZXNzX2JnMy5naWYnKTtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2Jsb2NrZWRCRy5wbmcnKTtcclxuICAvLyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6ICByZXBlYXQ7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYmxvY2tlZDtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAvLyAtd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcclxuIFxyXG59XHJcblxyXG4iLCJALXdlYmtpdC1rZXlmcmFtZXMgZmlyc3RBZGQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uYWRkZWQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmaXJzdEFkZDtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuM3M7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBibG9ja2VkIHtcbiAgZnJvbSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4O1xuICB9XG4gIHRvIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDlweDtcbiAgfVxufVxuLmJsb2NrZWQge1xuICBvcGFjaXR5OiAwLjM7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2Jsb2NrZWRCRy5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJsb2NrZWQ7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/common/items-table/items-table.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/common/items-table/items-table.component.ts ***!
  \************************************************************************/
/*! exports provided: ItemsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsTableComponent", function() { return ItemsTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var ItemsTableComponent = /** @class */ (function () {
    function ItemsTableComponent() {
        this.result = { items: [] };
        this.faTrashAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTrashAlt"];
        this.faListAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faListAlt"];
        this.svc = null;
        this.editPath = '';
        this.options = {
            orderBy: null,
            fieldNames: ['name'],
            logLink: false,
            delBtn: true,
            indexCol: true,
            fields: { name: { type: 'link' } }
        };
        this.edit = [];
    }
    ItemsTableComponent.prototype.ngOnInit = function () {
        this.svc = this.app[this.itemType];
        this.editPath = this.app.addPaths[this.itemType];
        this.s = this.app.state.items[this.itemType];
        for (var key in this._options) {
            this.options[key] = this._options[key];
        }
    };
    ItemsTableComponent.prototype.del = function (item) {
        var _this = this;
        item.del()
            .subscribe(function (res) {
            _this.svc.get().subscribe();
        });
    };
    ItemsTableComponent.prototype.linkPath = function (item, fieldName) {
        return this.options.fields && this.options.fields[fieldName].path ? this.options.fields && ('/' + this.options.fields[fieldName].path + '/' + item[this.options.fields[fieldName].idName]) : ('/' + this.editPath + '/' + item.id);
    };
    ItemsTableComponent.prototype.save = function (item, fieldName, value) {
        var bck = '';
        if (item[fieldName] !== undefined)
            bck = '' + item[fieldName];
        item[fieldName] = value.target.value;
        item.save()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (res) {
            console.log('Save error');
            item[fieldName] = bck;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(res);
        }))
            .subscribe(function (res) { });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('app')
    ], ItemsTableComponent.prototype, "app", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('itemType')
    ], ItemsTableComponent.prototype, "itemType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('options')
    ], ItemsTableComponent.prototype, "_options", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('result')
    ], ItemsTableComponent.prototype, "result", void 0);
    ItemsTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-items-table',
            template: __webpack_require__(/*! raw-loader!./items-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/common/items-table/items-table.component.html"),
            styles: [__webpack_require__(/*! ./items-table.component.scss */ "./src/app/components/common/items-table/items-table.component.scss")]
        })
    ], ItemsTableComponent);
    return ItemsTableComponent;
}());



/***/ }),

/***/ "./src/app/components/common/multi-select/multi-select.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/components/common/multi-select/multi-select.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".select-container {\n  display: inline-block;\n  min-width: 500px;\n}\n\n.buttons-container {\n  display: inline-block;\n  min-width: 30px;\n  vertical-align: top;\n  margin-top: 27px;\n}\n\n.buttons-container button {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vbXVsdGktc2VsZWN0L0Q6XFxPU1BhbmVsXFxkb21haW5zXFxtZnRpbWluZ1xcZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNvbW1vblxcbXVsdGktc2VsZWN0XFxtdWx0aS1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL211bHRpLXNlbGVjdC9tdWx0aS1zZWxlY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDRUY7O0FEREU7RUFDRSxXQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbW1vbi9tdWx0aS1zZWxlY3QvbXVsdGktc2VsZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdC1jb250YWluZXJ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1pbi13aWR0aDogNTAwcHg7XHJcbn1cclxuLmJ1dHRvbnMtY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBtYXJnaW4tdG9wOiAyN3B4O1xyXG4gIGJ1dHRvbntcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gIH1cclxufSIsIi5zZWxlY3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtaW4td2lkdGg6IDUwMHB4O1xufVxuXG4uYnV0dG9ucy1jb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1pbi13aWR0aDogMzBweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgbWFyZ2luLXRvcDogMjdweDtcbn1cbi5idXR0b25zLWNvbnRhaW5lciBidXR0b24ge1xuICBtYXJnaW46IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/common/multi-select/multi-select.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/common/multi-select/multi-select.component.ts ***!
  \**************************************************************************/
/*! exports provided: MultiSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSelectComponent", function() { return MultiSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MultiSelectComponent = /** @class */ (function () {
    function MultiSelectComponent() {
        this.disabled = false;
    }
    MultiSelectComponent.prototype.ngOnInit = function () {
    };
    MultiSelectComponent.prototype.addItem = function (item) {
        if (this.disabled)
            return;
        var items = this.form.controls[this.controlIdKey].value.slice();
        items.push(item.id);
        this.form.controls[this.controlIdKey].setValue(items);
    };
    MultiSelectComponent.prototype.removeItem = function (item) {
        if (this.disabled)
            return;
        var items = this.form.controls[this.controlIdKey].value.slice();
        items.splice(items.indexOf(item.id), 1);
        this.form.controls[this.controlIdKey].setValue(items);
    };
    MultiSelectComponent.prototype.addItems = function (e) {
        if (this.disabled)
            return;
        var items = this.form.controls[this.controlIdKey].value.slice();
        var options = (function (elem) { return elem.options; })(document.getElementById('other_items_' + this.controlIdKey));
        for (var key in options) {
            var option = options[key];
            if (option.selected) {
                items.push(1 * option.value);
            }
        }
        this.form.controls[this.controlIdKey].setValue(items);
    };
    MultiSelectComponent.prototype.removeItems = function (e) {
        if (this.disabled)
            return;
        var items = this.form.controls[this.controlIdKey].value.slice();
        var options = (function (elem) { return elem.options; })(document.getElementById('added_items_' + this.controlIdKey));
        for (var key in options) {
            var option = options[key];
            if (option.selected) {
                items.splice(items.indexOf(1 * option.value), 1);
            }
        }
        this.form.controls[this.controlIdKey].setValue(items);
    };
    MultiSelectComponent.prototype.keyNames = function (item) {
        var result = [];
        this.refNameKeys.forEach(function (keyName) { if (item[keyName] !== undefined)
            result.push(item[keyName]); });
        return result.join(' ');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('form')
    ], MultiSelectComponent.prototype, "form", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('controlIdKey')
    ], MultiSelectComponent.prototype, "controlIdKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('refSvc')
    ], MultiSelectComponent.prototype, "refSvc", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('item')
    ], MultiSelectComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('refNameKeys')
    ], MultiSelectComponent.prototype, "refNameKeys", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disabled')
    ], MultiSelectComponent.prototype, "disabled", void 0);
    MultiSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-multi-select',
            template: __webpack_require__(/*! raw-loader!./multi-select.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/common/multi-select/multi-select.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./multi-select.component.scss */ "./src/app/components/common/multi-select/multi-select.component.scss")]
        })
    ], MultiSelectComponent);
    return MultiSelectComponent;
}());



/***/ }),

/***/ "./src/app/components/common/search-select/search-select.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/common/search-select/search-select.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".select-container {\n  position: relative;\n}\n.select-container .select-dropdown {\n  position: absolute;\n  top: 40px;\n  background: white;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  overflow-y: scroll;\n  max-height: 200px;\n  display: block;\n  padding: 10px;\n  z-index: 100;\n  width: 400px;\n}\n.select-container .select-dropdown .loading-spinner {\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vc2VhcmNoLXNlbGVjdC9EOlxcT1NQYW5lbFxcZG9tYWluc1xcbWZ0aW1pbmdcXGZyb250ZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb21tb25cXHNlYXJjaC1zZWxlY3RcXHNlYXJjaC1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL3NlYXJjaC1zZWxlY3Qvc2VhcmNoLXNlbGVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7QURFRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0FKO0FEQ0k7RUFDRSxhQUFBO0FDQ04iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbW1vbi9zZWFyY2gtc2VsZWN0L3NlYXJjaC1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0LWNvbnRhaW5lcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLnNlbGVjdC1maWx0ZXJ7XHJcbiAgfVxyXG4gIC5zZWxlY3QtZHJvcGRvd257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDEpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMSkgO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAubG9hZGluZy1zcGlubmVyIHtcclxuICAgICAgcGFkZGluZzogMTVweDtcclxuICAgIH1cclxuICB9XHJcbn0iLCIuc2VsZWN0LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWxlY3QtY29udGFpbmVyIC5zZWxlY3QtZHJvcGRvd24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHotaW5kZXg6IDEwMDtcbiAgd2lkdGg6IDQwMHB4O1xufVxuLnNlbGVjdC1jb250YWluZXIgLnNlbGVjdC1kcm9wZG93biAubG9hZGluZy1zcGlubmVyIHtcbiAgcGFkZGluZzogMTVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/common/search-select/search-select.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/common/search-select/search-select.component.ts ***!
  \****************************************************************************/
/*! exports provided: SearchSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchSelectComponent", function() { return SearchSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchSelectComponent = /** @class */ (function () {
    function SearchSelectComponent() {
        this.result = { items: [] };
    }
    SearchSelectComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('form')
    ], SearchSelectComponent.prototype, "form", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('controlIdKey')
    ], SearchSelectComponent.prototype, "controlIdKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('refSvc')
    ], SearchSelectComponent.prototype, "refSvc", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('item')
    ], SearchSelectComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('refNameKey')
    ], SearchSelectComponent.prototype, "refNameKey", void 0);
    SearchSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-select',
            template: __webpack_require__(/*! raw-loader!./search-select.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/common/search-select/search-select.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./search-select.component.scss */ "./src/app/components/common/search-select/search-select.component.scss")]
        })
    ], SearchSelectComponent);
    return SearchSelectComponent;
}());



/***/ }),

/***/ "./src/app/components/competitor/competitor.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/competitor/competitor.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGV0aXRvci9jb21wZXRpdG9yLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/competitor/competitor.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/competitor/competitor.component.ts ***!
  \***************************************************************/
/*! exports provided: CompetitorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetitorComponent", function() { return CompetitorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");







var CompetitorComponent = /** @class */ (function () {
    function CompetitorComponent(route, fb, app, router) {
        this.route = route;
        this.fb = fb;
        this.app = app;
        this.router = router;
        this.competitor = null;
        this.importOptions = {
            fields: [
                { name: 'regDate', src: 0, validators: ['required'] },
                { name: 'num', src: 8 },
                { name: 'name1', src: 1, validators: ['required'] },
                { name: 'name2', src: 2, validators: ['required'] },
                { name: 'name3', src: 3, validators: [] },
                { name: 'birdthDate', src: 4, validators: [] },
                // {name: 'categoryId', src: 'value', value: ''},
                { name: 'categoryId', src: 5, relItems: this.app.categories, relItemsProp: 'name' },
                { name: 'team', src: 6 },
            ],
            delitmer: '\\t',
        };
        this.multiAddErrors = [];
        this.parsedItems = { items: [], errors: [] };
    }
    CompetitorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        this.app.ifAppReady()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.route.params; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (params) {
            _this.competitor = _this.app.competitors._index.id[params['competitorId']];
        }))
            .subscribe(function () {
            if (_this.competitor)
                _this.competitorForm.patchValue(_this.competitor);
        });
    };
    CompetitorComponent.prototype.initForm = function () {
        this.competitorForm = this.fb.group({
            regDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            num: ['', []],
            name1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            name2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            name3: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            birdthDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            categoryId: ['', []],
            team: ['', []],
            desc: ['', []],
        });
    };
    CompetitorComponent.prototype.onCompetitorFormSubmit = function () {
        this.competitor ? this.saveCompetitor() : this.addCompetitor();
    };
    CompetitorComponent.prototype.addCompetitor = function () {
        var _this = this;
        this.app.competitors.add(this.competitorForm.value)
            .subscribe(function (res) {
            var newUserId = null;
            if (res.id)
                newUserId = res.id;
            _this.app.competitors.get()
                .subscribe(function () {
                if (newUserId)
                    _this.router.navigate(['competitors']);
            });
        });
    };
    CompetitorComponent.prototype.saveCompetitor = function () {
        var _this = this;
        for (var key in this.competitorForm.value) {
            this.competitor[key] = this.competitorForm.value[key];
        }
        this.competitor.save()
            .subscribe(function (res) {
            _this.app.competitors.get()
                .subscribe();
            _this.router.navigate(['competitors']);
        });
    };
    CompetitorComponent.prototype.importItems = function (items) {
        var _this = this;
        this.app.competitors.addMultiple(items)
            .subscribe(function (res) {
            _this.multiAddErrors = res.added.filter(function (item) { return !item.id; });
            _this.app.competitors.get()
                .subscribe();
            if (_this.multiAddErrors.length === 0)
                _this.router.navigate(['competitors']);
        });
    };
    CompetitorComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    CompetitorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-competitor',
            template: __webpack_require__(/*! raw-loader!./competitor.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/competitor/competitor.component.html"),
            styles: [__webpack_require__(/*! ./competitor.component.scss */ "./src/app/components/competitor/competitor.component.scss")]
        })
    ], CompetitorComponent);
    return CompetitorComponent;
}());



/***/ }),

/***/ "./src/app/components/competitors/competitors.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/competitors/competitors.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGV0aXRvcnMvY29tcGV0aXRvcnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/competitors/competitors.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/competitors/competitors.component.ts ***!
  \*****************************************************************/
/*! exports provided: CompetitorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetitorsComponent", function() { return CompetitorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");



var CompetitorsComponent = /** @class */ (function () {
    function CompetitorsComponent(app) {
        this.app = app;
        this.contolsOptions = {
            clearBtn: true
        };
        this.tableOptions = {
            fieldNames: [
                'regDate',
                'num',
                'fullName',
                'birdthDate',
                'categoryName',
                'team',
                'desc',
            ],
            fields: {
                num: { type: 'edit' },
                fullName: { type: 'link' },
            },
        };
        this.itemType = 'competitors';
    }
    CompetitorsComponent.prototype.ngOnInit = function () {
    };
    CompetitorsComponent.ctorParameters = function () { return [
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
    ]; };
    CompetitorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-competitors',
            template: __webpack_require__(/*! raw-loader!./competitors.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/competitors/competitors.component.html"),
            styles: [__webpack_require__(/*! ./competitors.component.scss */ "./src/app/components/competitors/competitors.component.scss")]
        })
    ], CompetitorsComponent);
    return CompetitorsComponent;
}());



/***/ }),

/***/ "./src/app/components/distributions/distributions.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/distributions/distributions.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlzdHJpYnV0aW9ucy9kaXN0cmlidXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/distributions/distributions.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/distributions/distributions.component.ts ***!
  \*********************************************************************/
/*! exports provided: DistributionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistributionsComponent", function() { return DistributionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");



var DistributionsComponent = /** @class */ (function () {
    function DistributionsComponent(app) {
        this.app = app;
        this.itemType = 'distributions';
        this.tableOptions = {
            orderBy: ['-dt'],
            fieldNames: ['dt', 'recieverName', 'tagName', 'tagDriverName', 'amount', 'total_limit', 'day_limit', 'total_balance', 'day_balance'],
            delBtn: false,
            indexCol: false,
            fields: {
                recieverName: { type: 'link', path: 'reciever', idName: 'recievers_id' },
                tagName: { type: 'link', path: 'tag', idName: 'tags_id' },
                tagDriverName: { type: 'link', path: 'driver', idName: 'tagDriverId' },
                dt: { type: 'date' },
            }
        };
    }
    DistributionsComponent.prototype.ngOnInit = function () {
    };
    DistributionsComponent.ctorParameters = function () { return [
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
    ]; };
    DistributionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-distributions',
            template: __webpack_require__(/*! raw-loader!./distributions.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/distributions/distributions.component.html"),
            styles: [__webpack_require__(/*! ./distributions.component.scss */ "./src/app/components/distributions/distributions.component.scss")]
        })
    ], DistributionsComponent);
    return DistributionsComponent;
}());



/***/ }),

/***/ "./src/app/components/go/go.component.scss":
/*!*************************************************!*\
  !*** ./src/app/components/go/go.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reg {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  margin: 2px;\n  border-radius: 5px;\n  background: rgba(0, 170, 255, 0.08);\n}\n.reg.start {\n  background: rgba(85, 255, 0, 0.1);\n}\n.reg.finish {\n  background: rgba(255, 128, 0, 0.1);\n}\n.clickable {\n  cursor: pointer;\n}\n.clickable:hover {\n  background: rgba(0, 20, 30, 0.1);\n}\n.scrolled {\n  overflow-y: auto;\n  max-height: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nby9EOlxcT1NQYW5lbFxcZG9tYWluc1xcbWZ0aW1pbmdcXGZyb250ZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxnb1xcZ28uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZ28vZ28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0FDQ0Y7QURBRTtFQUNFLGlDQUFBO0FDRUo7QURBRTtFQUNFLGtDQUFBO0FDRUo7QURFQTtFQUNFLGVBQUE7QUNDRjtBREFFO0VBQ0UsZ0NBQUE7QUNFSjtBREVBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nby9nby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWd7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMSk7XHJcbiAgbWFyZ2luOiAycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQ6IGhzbGEoMjAwLDI1MCw1MCwuMDgpO1xyXG4gICYuc3RhcnR7XHJcbiAgICBiYWNrZ3JvdW5kOiBoc2xhKDEwMCwyNTAsNTAsLjEpO1xyXG4gIH1cclxuICAmLmZpbmlzaHtcclxuICAgIGJhY2tncm91bmQ6IGhzbGEoMzAsMjUwLDUwLC4xKTtcclxuICB9XHJcbn1cclxuXHJcbi5jbGlja2FibGV7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICY6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMjAsMzAsLjEpXHJcbiAgfVxyXG59XHJcblxyXG4uc2Nyb2xsZWR7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBtYXgtaGVpZ2h0OiA1MDBweDsgIFxyXG59IiwiLnJlZyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgbWFyZ2luOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAxNzAsIDI1NSwgMC4wOCk7XG59XG4ucmVnLnN0YXJ0IHtcbiAgYmFja2dyb3VuZDogcmdiYSg4NSwgMjU1LCAwLCAwLjEpO1xufVxuLnJlZy5maW5pc2gge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTI4LCAwLCAwLjEpO1xufVxuXG4uY2xpY2thYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNsaWNrYWJsZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMjAsIDMwLCAwLjEpO1xufVxuXG4uc2Nyb2xsZWQge1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/go/go.component.ts":
/*!***********************************************!*\
  !*** ./src/app/components/go/go.component.ts ***!
  \***********************************************/
/*! exports provided: GoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoComponent", function() { return GoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");







var GoComponent = /** @class */ (function () {
    function GoComponent(route, app, router) {
        var _this = this;
        this.route = route;
        this.app = app;
        this.router = router;
        this.newEvent = null;
        this.editEventId = 0;
        this.editEventFilter = {
            fullNameNum: '',
        };
        this.faBan = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faBan"];
        this.faSave = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSave"];
        this.result = { items: [] };
        this.editEventFilterresult = { items: [] };
        this.delayH = function (item, items, i) {
            if (!_this.s.eventsTimeScale)
                return '';
            if (item && items && item.eventType != 3) {
                var m = 0;
                if (items[i - 1]) {
                    m = items[i - 1].t - item.t;
                }
                else {
                    //m = 0;
                    m = _this.app.go.t - item.t;
                }
                return parseInt(String(m / _this.s.eventsTimeScale)) + 'px';
            }
            return '';
        };
        this.onFormSubmit = function (eventType, competitorId) {
            _this.newEvent.eventType = eventType;
            _this.newEvent.competitorId = competitorId;
            _this.newEvent.t = 1 * _this.app.go.t;
            _this.app.events.add(_this.newEvent)
                .subscribe(function (res) {
                _this.app.events.get()
                    .subscribe(function () {
                    _this.app.go.get();
                });
            });
        };
    }
    GoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.s = this.app.state.items['go'];
        this.app.ifAppReady()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () { return _this.route.params; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (params) {
            if (params['raceId']) {
                _this.app.go.race = _this.app.races._index.id[params['raceId']];
                _this.newEvent = {
                    accountId: 0,
                    eventType: 1,
                    raceId: _this.app.go.race.id,
                    competitorId: 0,
                    t: 0,
                    desc: '',
                    d: 0,
                };
                _this.app.go.get();
                // const iid = setInterval(()=>{
                //   const elem = document.getElementById('recontainer');
                //   if(elem) {
                //     const resizeObserver = new ResizeObserver((e:any) => {
                //       // console.log(e[0].target.offsetHeight)
                //       console.log(elem.offsetHeight)
                //     }); 
                //     resizeObserver.observe(elem);
                //     window.clearInterval(iid);
                //     return;
                //   }
                // },100)
            }
            else {
                _this.app.go.reset();
            }
        })).subscribe(function () { });
    };
    GoComponent.prototype.resetEventsFilter = function () {
        this.s.eventsFilter = {
            fullNameNum: '',
        };
    };
    GoComponent.prototype.setEditCopetitorId = function (item) {
        item.competitorId = this.editEventFilterresult.items[0] ? this.editEventFilterresult.items[0].id : 0;
    };
    GoComponent.prototype.switchEditEventForm = function (item) {
        var _this = this;
        if (this.editEventId !== item.id) {
            this.editEventId = item.id;
        }
        else {
            item.save()
                .subscribe(function () {
                _this.editEventId = 0;
                _this.app.go.get();
            });
        }
    };
    GoComponent.prototype.saveEvent = function (item) {
        var _this = this;
        item.save()
            .subscribe(function () {
            _this.editEventId = 0;
            _this.app.go.get();
        });
    };
    GoComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('result')
    ], GoComponent.prototype, "result", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('editEventFilterresult')
    ], GoComponent.prototype, "editEventFilterresult", void 0);
    GoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-go',
            template: __webpack_require__(/*! raw-loader!./go.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/go/go.component.html"),
            styles: [__webpack_require__(/*! ./go.component.scss */ "./src/app/components/go/go.component.scss")]
        })
    ], GoComponent);
    return GoComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  font-weight: 600;\n}\n.logo #logo-svg {\n  width: 24px;\n  margin-top: -8px;\n  margin-right: -7px;\n}\n.logo img {\n  width: 32px;\n  margin-top: -7px;\n}\n.silver {\n  color: silver;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvRDpcXE9TUGFuZWxcXGRvbWFpbnNcXG1mdGltaW5nXFxmcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0Y7QURBRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDRUo7QURBRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ0VKO0FEQ0E7RUFDRSxhQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAjbG9nby1zdmd7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIG1hcmdpbi10b3A6IC04cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC03cHg7XHJcbiAgfVxyXG4gIGltZ3tcclxuICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTdweDtcclxuICB9XHJcbn1cclxuLnNpbHZlcntcclxuICBjb2xvcjogc2lsdmVyO1xyXG59XHJcbiIsIi5sb2dvIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5sb2dvICNsb2dvLXN2ZyB7XG4gIHdpZHRoOiAyNHB4O1xuICBtYXJnaW4tdG9wOiAtOHB4O1xuICBtYXJnaW4tcmlnaHQ6IC03cHg7XG59XG4ubG9nbyBpbWcge1xuICB3aWR0aDogMzJweDtcbiAgbWFyZ2luLXRvcDogLTdweDtcbn1cblxuLnNpbHZlciB7XG4gIGNvbG9yOiBzaWx2ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _services_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/core.service */ "./src/app/services/core.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(core, app, router) {
        this.core = core;
        this.app = app;
        this.router = router;
        this.faCog = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCog"];
        this.faSignOutAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSignOutAlt"];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.core.onLoggedIn().subscribe(function (_) {
            _this.r = _this.core.user.rights.nav.header;
        });
    };
    HeaderComponent.prototype.logOut = function () {
        var _this = this;
        this.core.logOut().subscribe(function (res) {
            if (res.logout)
                _this.router.navigate(['login']);
        });
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _services_core_service__WEBPACK_IMPORTED_MODULE_4__["CoreService"] },
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes anim-appear {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes anim-appear {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n#logo {\n  margin: 20px;\n  -webkit-animation: anim-appear 3s ease-in;\n          animation: anim-appear 3s ease-in;\n}\n#h {\n  -webkit-animation: anim-appear 5s ease-in;\n          animation: anim-appear 5s ease-in;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0Q6XFxPU1BhbmVsXFxkb21haW5zXFxtZnRpbWluZ1xcZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFBSSxVQUFBO0VDRUo7RUREQTtJQUFLLFVBQUE7RUNJTDtFREhBO0lBQU0sVUFBQTtFQ01OO0FBQ0Y7QURWQTtFQUNFO0lBQUksVUFBQTtFQ0VKO0VEREE7SUFBSyxVQUFBO0VDSUw7RURIQTtJQUFNLFVBQUE7RUNNTjtBQUNGO0FESkE7RUFDRSxZQUFBO0VBQ0EseUNBQUE7VUFBQSxpQ0FBQTtBQ01GO0FERkE7RUFDRSx5Q0FBQTtVQUFBLGlDQUFBO0FDS0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgYW5pbS1hcHBlYXIge1xyXG4gIDAlIHtvcGFjaXR5OiAwOyB9IFxyXG4gIDUwJSB7b3BhY2l0eTogMDsgfSBcclxuICAxMDAlIHtvcGFjaXR5OiAxO30gXHJcbn1cclxuXHJcbiNsb2dve1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBhbmltYXRpb246IGFuaW0tYXBwZWFyIDNzIGVhc2UtaW47IFxyXG5cclxufVxyXG5cclxuI2h7XHJcbiAgYW5pbWF0aW9uOiBhbmltLWFwcGVhciA1cyBlYXNlLWluOyBcclxufSIsIkBrZXlmcmFtZXMgYW5pbS1hcHBlYXIge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuI2xvZ28ge1xuICBtYXJnaW46IDIwcHg7XG4gIGFuaW1hdGlvbjogYW5pbS1hcHBlYXIgM3MgZWFzZS1pbjtcbn1cblxuI2gge1xuICBhbmltYXRpb246IGFuaW0tYXBwZWFyIDVzIGVhc2UtaW47XG59Il19 */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/core.service */ "./src/app/services/core.service.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(core, router) {
        this.core = core;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _services_core_service__WEBPACK_IMPORTED_MODULE_3__["CoreService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/log/log.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/log/log.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9nL2xvZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/log/log.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/log/log.component.ts ***!
  \*************************************************/
/*! exports provided: LogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogComponent", function() { return LogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var LogComponent = /** @class */ (function () {
    function LogComponent(route, app) {
        this.route = route;
        this.app = app;
        this.result = { items: [] };
    }
    LogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.app.ifAppReady()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.route.params; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (params) {
            _this.app.log.get(params).subscribe();
        })).subscribe();
    };
    LogComponent.prototype.refresh = function () {
        this.app.log.get().subscribe();
    };
    LogComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
    ]; };
    LogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-log',
            template: __webpack_require__(/*! raw-loader!./log.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/log/log.component.html"),
            styles: [__webpack_require__(/*! ./log.component.scss */ "./src/app/components/log/log.component.scss")]
        })
    ], LogComponent);
    return LogComponent;
}());



/***/ }),

/***/ "./src/app/components/nav-appevts-log/nav-appevts-log.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/nav-appevts-log/nav-appevts-log.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2LWFwcGV2dHMtbG9nL25hdi1hcHBldnRzLWxvZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/nav-appevts-log/nav-appevts-log.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/nav-appevts-log/nav-appevts-log.component.ts ***!
  \*************************************************************************/
/*! exports provided: NavAPPEvtsLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavAPPEvtsLogComponent", function() { return NavAPPEvtsLogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavAPPEvtsLogComponent = /** @class */ (function () {
    function NavAPPEvtsLogComponent() {
    }
    NavAPPEvtsLogComponent.prototype.ngOnInit = function () {
    };
    NavAPPEvtsLogComponent.prototype.filterByTypes = function (item) {
        return (item.a !== 5 && item.a !== 6);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('app')
    ], NavAPPEvtsLogComponent.prototype, "app", void 0);
    NavAPPEvtsLogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-appevts-log',
            template: __webpack_require__(/*! raw-loader!./nav-appevts-log.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/nav-appevts-log/nav-appevts-log.component.html"),
            styles: [__webpack_require__(/*! ./nav-appevts-log.component.scss */ "./src/app/components/nav-appevts-log/nav-appevts-log.component.scss")]
        })
    ], NavAPPEvtsLogComponent);
    return NavAPPEvtsLogComponent;
}());



/***/ }),

/***/ "./src/app/components/nav-trash/nav-trash.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/nav-trash/nav-trash.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2LXRyYXNoL25hdi10cmFzaC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/nav-trash/nav-trash.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/nav-trash/nav-trash.component.ts ***!
  \*************************************************************/
/*! exports provided: NavTrashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavTrashComponent", function() { return NavTrashComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



var NavTrashComponent = /** @class */ (function () {
    function NavTrashComponent() {
        this.faTrashAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTrashAlt"];
        this.faTrashRestore = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTrashRestore"];
        this.trashSize = 0;
    }
    NavTrashComponent.prototype.ngOnInit = function () { };
    NavTrashComponent.prototype.checkSize = function () {
        this.trashSize = this.app.trash.Length;
        return this.trashSize;
    };
    NavTrashComponent.prototype.restore = function (item, e) {
        var _this = this;
        e.stopPropagation();
        e.preventDefault();
        this.app.trash.restore(item)
            .subscribe(function (res) {
            if (res.restored)
                _this.app.trash.removeItem(item);
        });
        return false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('app')
    ], NavTrashComponent.prototype, "app", void 0);
    NavTrashComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-trash',
            template: __webpack_require__(/*! raw-loader!./nav-trash.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/nav-trash/nav-trash.component.html"),
            styles: [__webpack_require__(/*! ./nav-trash.component.scss */ "./src/app/components/nav-trash/nav-trash.component.scss")]
        })
    ], NavTrashComponent);
    return NavTrashComponent;
}());



/***/ }),

/***/ "./src/app/components/race/race.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/race/race.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmFjZS9yYWNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/race/race.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/race/race.component.ts ***!
  \***************************************************/
/*! exports provided: RaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaceComponent", function() { return RaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");







var RaceComponent = /** @class */ (function () {
    function RaceComponent(route, fb, app, router) {
        this.route = route;
        this.fb = fb;
        this.app = app;
        this.router = router;
        this.race = null;
    }
    RaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        this.app.ifAppReady()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.route.params; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (params) {
            _this.race = _this.app.races._index.id[params['raceId']];
        }))
            .subscribe(function () {
            if (_this.race)
                _this.itemForm.patchValue(_this.race);
        });
    };
    RaceComponent.prototype.initForm = function () {
        this.itemForm = this.fb.group({
            seasonId: ['', []],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            from: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            to: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
        });
    };
    RaceComponent.prototype.onItemFormSubmit = function () {
        this.race ? this.saveRace() : this.addRace();
    };
    RaceComponent.prototype.addRace = function () {
        var _this = this;
        console.log(this.itemForm);
        this.app.races.add(this.itemForm.value)
            .subscribe(function (res) {
            var newItemId = null;
            if (res.id)
                newItemId = res.id;
            _this.app.races.get()
                .subscribe(function () {
                if (newItemId)
                    _this.router.navigate(['races']);
            });
        });
    };
    RaceComponent.prototype.saveRace = function () {
        var _this = this;
        for (var key in this.itemForm.value) {
            this.race[key] = this.itemForm.value[key];
        }
        this.race.save()
            .subscribe(function (res) {
            _this.app.races.get()
                .subscribe();
            _this.router.navigate(['races']);
        });
    };
    RaceComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    RaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-race',
            template: __webpack_require__(/*! raw-loader!./race.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/race/race.component.html"),
            styles: [__webpack_require__(/*! ./race.component.scss */ "./src/app/components/race/race.component.scss")]
        })
    ], RaceComponent);
    return RaceComponent;
}());



/***/ }),

/***/ "./src/app/components/races/races.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/races/races.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmFjZXMvcmFjZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/races/races.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/races/races.component.ts ***!
  \*****************************************************/
/*! exports provided: RacesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RacesComponent", function() { return RacesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");



var RacesComponent = /** @class */ (function () {
    function RacesComponent(app) {
        this.app = app;
        this.contolsOptions = {
        // clearBtn: true
        };
        this.tableOptions = {
            fieldNames: [
                'name',
                'from',
                'to',
            ],
            fields: {
                name: { type: 'link' },
            },
        };
        this.itemType = 'races';
    }
    RacesComponent.prototype.ngOnInit = function () {
    };
    RacesComponent.ctorParameters = function () { return [
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
    ]; };
    RacesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-races',
            template: __webpack_require__(/*! raw-loader!./races.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/races/races.component.html"),
            styles: [__webpack_require__(/*! ./races.component.scss */ "./src/app/components/races/races.component.scss")]
        })
    ], RacesComponent);
    return RacesComponent;
}());



/***/ }),

/***/ "./src/app/components/reciever/reciever.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/reciever/reciever.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".select-dropdown {\n  z-index: 100;\n  background: white;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  overflow-y: scroll;\n  max-height: 200px;\n  width: 500px;\n  display: block;\n  position: absolute;\n  padding: 10px;\n}\n.select-dropdown .loading-spinner {\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWNpZXZlci9EOlxcT1NQYW5lbFxcZG9tYWluc1xcbWZ0aW1pbmdcXGZyb250ZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxyZWNpZXZlclxccmVjaWV2ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcmVjaWV2ZXIvcmVjaWV2ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0NGO0FEQUU7RUFDRSxhQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlY2lldmVyL3JlY2lldmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdC1kcm9wZG93bntcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwxKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xKSA7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICAubG9hZGluZy1zcGlubmVyIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG59XHJcbiIsIi5zZWxlY3QtZHJvcGRvd24ge1xuICB6LWluZGV4OiAxMDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiA1MDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5zZWxlY3QtZHJvcGRvd24gLmxvYWRpbmctc3Bpbm5lciB7XG4gIHBhZGRpbmc6IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/reciever/reciever.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/reciever/reciever.component.ts ***!
  \***********************************************************/
/*! exports provided: RecieverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecieverComponent", function() { return RecieverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");








var RecieverComponent = /** @class */ (function () {
    function RecieverComponent(route, fb, app, router) {
        this.route = route;
        this.fb = fb;
        this.app = app;
        this.router = router;
        this.faCog = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faCog"];
        this.reciever = null;
        this.submitDisabled = false;
    }
    RecieverComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        this.app.ifAppReady()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.route.params; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (params) {
            _this.reciever = _this.app.recievers._index.id[params['recieverId']];
        }))
            .subscribe(function () {
            if (_this.reciever)
                _this.recieverForm.patchValue(_this.reciever);
        });
    };
    RecieverComponent.prototype.initForm = function () {
        this.recieverForm = this.fb.group({
            units_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            tz: [(new Date()).getTimezoneOffset() / -60, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            k: [10, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            tags: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
        });
    };
    RecieverComponent.prototype.onRecieverFormSubmit = function () {
        this.reciever ? this.saveReciever() : this.addReciever();
    };
    RecieverComponent.prototype.addReciever = function () {
        var _this = this;
        this.submitDisabled = true;
        this.app.recievers.add(this.recieverForm.value)
            .subscribe(function (res) {
            _this.submitDisabled = false;
            var newUserId = null;
            if (res.id)
                newUserId = res.id;
            _this.app.recievers.get()
                .subscribe(function () {
                if (newUserId) {
                    _this.app.tags.get().subscribe();
                    _this.router.navigate(['recievers']);
                }
                ;
            });
        });
    };
    RecieverComponent.prototype.saveReciever = function () {
        var _this = this;
        for (var key in this.recieverForm.value) {
            this.reciever[key] = this.recieverForm.value[key];
        }
        this.submitDisabled = true;
        this.reciever.save()
            .subscribe(function (res) {
            _this.submitDisabled = false;
            _this.app.recievers.get()
                .subscribe(function (_) {
                if (res.saved || (res.saved_mtm && res.saved_mtm.tags && (res.saved_mtm.tags.deleted || res.saved_mtm.tags.added))) {
                    _this.app.tags.get().subscribe();
                    _this.router.navigate(['recievers']);
                }
            });
        });
    };
    RecieverComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    RecieverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reciever',
            template: __webpack_require__(/*! raw-loader!./reciever.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/reciever/reciever.component.html"),
            styles: [__webpack_require__(/*! ./reciever.component.scss */ "./src/app/components/reciever/reciever.component.scss")]
        })
    ], RecieverComponent);
    return RecieverComponent;
}());



/***/ }),

/***/ "./src/app/components/recievers/recievers.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/recievers/recievers.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVjaWV2ZXJzL3JlY2lldmVycy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/recievers/recievers.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/recievers/recievers.component.ts ***!
  \*************************************************************/
/*! exports provided: RecieversComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecieversComponent", function() { return RecieversComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");




var RecieversComponent = /** @class */ (function () {
    function RecieversComponent(app) {
        this.app = app;
        this.faListAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faListAlt"];
        this.tableOptions = {
            fieldNames: ['name', 'unitHwName', 'unitUid', 'tagNums', 'tz', 'k'],
            logLink: true,
            fields: {
                name: { type: 'link' },
                tagNums: {
                    type: 'large',
                    shortName: 'shortTagNums',
                }
            }
        };
        this.itemType = 'recievers';
    }
    RecieversComponent.prototype.ngOnInit = function () {
    };
    RecieversComponent.ctorParameters = function () { return [
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] }
    ]; };
    RecieversComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recievers',
            template: __webpack_require__(/*! raw-loader!./recievers.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/recievers/recievers.component.html"),
            styles: [__webpack_require__(/*! ./recievers.component.scss */ "./src/app/components/recievers/recievers.component.scss")]
        })
    ], RecieversComponent);
    return RecieversComponent;
}());



/***/ }),

/***/ "./src/app/components/rtqueue/rtqueue.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/rtqueue/rtqueue.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcnRxdWV1ZS9ydHF1ZXVlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/rtqueue/rtqueue.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/rtqueue/rtqueue.component.ts ***!
  \*********************************************************/
/*! exports provided: RTQueueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTQueueComponent", function() { return RTQueueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");





var RTQueueComponent = /** @class */ (function () {
    function RTQueueComponent(route, app) {
        this.route = route;
        this.app = app;
        this.svc = null;
        this.itemType = 'rtqueue';
    }
    RTQueueComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.svc = this.app[this.itemType];
        this.s = this.app.state.items[this.itemType];
        this.app.ifAppReady()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () { return _this.route.params; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (params) {
            _this.app.rtqueue.get(params).subscribe();
        })).subscribe();
    };
    RTQueueComponent.prototype.refresh = function () {
        this.app.rtqueue.get().subscribe();
    };
    RTQueueComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"] }
    ]; };
    RTQueueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rtqueue',
            template: __webpack_require__(/*! raw-loader!./rtqueue.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/rtqueue/rtqueue.component.html"),
            styles: [__webpack_require__(/*! ./rtqueue.component.scss */ "./src/app/components/rtqueue/rtqueue.component.scss")]
        })
    ], RTQueueComponent);
    return RTQueueComponent;
}());



/***/ }),

/***/ "./src/app/components/settings/settings.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/settings/settings.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/settings/settings.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/settings/settings.component.ts ***!
  \***********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _services_lstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/lstorage.service */ "./src/app/services/lstorage.service.ts");







var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(route, router, app, translate, storage) {
        this.route = route;
        this.router = router;
        this.app = app;
        this.translate = translate;
        this.storage = storage;
        this.settingsTypes = ['main'];
        this.settingsType = '';
        var browserLang = translate.getBrowserLang();
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.app.ifAppReady()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () { return _this.route.params; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (params) {
            if (!params.settingsType)
                _this.router.navigate(['settings/' + _this.settingsTypes[0]]);
            _this.settingsType = params.settingsType;
        })).subscribe();
    };
    SettingsComponent.prototype.save = function () {
        this.app.settings.save()
            .subscribe();
    };
    SettingsComponent.prototype.changeLng = function (lng) {
        this.storage.set('lng', lng);
        this.translate.use(lng);
    };
    SettingsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _services_lstorage_service__WEBPACK_IMPORTED_MODULE_6__["LStorageService"] }
    ]; };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/components/settings/settings.component.scss")]
        })
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-signin {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: auto;\n  margin-top: 30px;\n}\n\n.form-signin .checkbox {\n  font-weight: 400;\n}\n\n.form-signin .form-control {\n  position: relative;\n  box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px;\n}\n\n.form-signin .form-control:focus {\n  z-index: 2;\n}\n\n.form-signin input[type=email] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.form-signin input[type=password] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.logo {\n  position: relative;\n  font-size: 50px;\n  font-weight: 400;\n  color: black;\n  margin-top: 15%;\n  margin-left: -30px;\n}\n\n#logo-svg {\n  width: 60px;\n  margin-top: -18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWduLWluL0Q6XFxPU1BhbmVsXFxkb21haW5zXFxtZnRpbWluZ1xcZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNpZ24taW5cXHNpZ24taW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENBO0VBQ0UsZ0JBQUE7QUNFRjs7QURBQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNHRjs7QUREQTtFQUNFLFVBQUE7QUNJRjs7QURGQTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtBQ0tGOztBREhBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FDTUY7O0FESkE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNPRjs7QURMQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQ1FGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1zaWduaW4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMzMwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4uZm9ybS1zaWduaW4gLmNoZWNrYm94IHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9XCJlbWFpbFwiXSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG59XHJcbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxufVxyXG4ubG9nb3tcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIG1hcmdpbi10b3A6IDE1JTtcclxuICBtYXJnaW4tbGVmdDogLTMwcHg7XHJcbn1cclxuI2xvZ28tc3Zne1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIG1hcmdpbi10b3A6IC0xOHB4O1xyXG59XHJcbiIsIi5mb3JtLXNpZ25pbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDMzMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5mb3JtLXNpZ25pbiAuY2hlY2tib3gge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgei1pbmRleDogMjtcbn1cblxuLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9ZW1haWxdIHtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG5cbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xufVxuXG4ubG9nbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi10b3A6IDE1JTtcbiAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xufVxuXG4jbG9nby1zdmcge1xuICB3aWR0aDogNjBweDtcbiAgbWFyZ2luLXRvcDogLTE4cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.ts ***!
  \*********************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/core.service */ "./src/app/services/core.service.ts");





var SignInComponent = /** @class */ (function () {
    function SignInComponent(core, fb, router) {
        this.core = core;
        this.fb = fb;
        this.router = router;
        this.signInFormError = '';
    }
    SignInComponent.prototype.ngOnInit = function () {
        //if(this.core.session) this.router.navigate(['']);
        this.initForm();
    };
    SignInComponent.prototype.initForm = function () {
        this.signInForm = this.fb.group({
            name: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]
            ],
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]
            ]
        });
    };
    SignInComponent.prototype.onFromSubmit = function (event) {
        var _this = this;
        this.signInFormError = '';
        this.core.login(this.signInForm.value)
            .subscribe(function (res) {
            if (res.sid) {
                _this.router.navigate(['']);
            }
            else {
                _this.signInFormError = (res.error && res.error.error) ? res.error.error : 'Unknown error';
            }
        });
        return false;
    };
    SignInComponent.ctorParameters = function () { return [
        { type: _services_core_service__WEBPACK_IMPORTED_MODULE_4__["CoreService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! raw-loader!./sign-in.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.scss */ "./src/app/components/sign-in/sign-in.component.scss")]
        })
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/components/tag/tag.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/tag/tag.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFnL3RhZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/tag/tag.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/tag/tag.component.ts ***!
  \*************************************************/
/*! exports provided: TagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagComponent", function() { return TagComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _services_test_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/test.service */ "./src/app/services/test.service.ts");









var TagComponent = /** @class */ (function () {
    function TagComponent(route, fb, app, test, router) {
        this.route = route;
        this.fb = fb;
        this.app = app;
        this.test = test;
        this.router = router;
        this.faCog = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCog"];
        this.faCheckCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCheckCircle"];
        this.faFileImport = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFileImport"];
        this.tag = null;
        this.filter = '';
        this.savingResults = null;
        this.saving = false;
        this.refreshUnitsState = '';
        this.refreshUnitsStatus = '';
        this.importOptions = { fields: [
                { name: 'num', src: 1, validators: ['required', 'uniq']
                },
                { name: 'total_limit', src: 3 },
                { name: 'day_limit', src: 4 },
                { name: 'total_balance', src: 'skip' },
                { name: 'day_balance', src: 'skip' },
            ] };
        this.multiAddErrors = [];
        this.parsedItems = { items: [], errors: [] };
    }
    TagComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        this.app.ifAppReady()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.route.params; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (params) {
            _this.tag = _this.app.tags._index.id[params['tagId']];
        }))
            .subscribe(function () {
            if (_this.tag) {
                _this.tagForm.patchValue(_this.tag);
                _this.total_limit = _this.tag.total_limit;
                _this.day_limit = _this.tag.day_limit;
                _this.total_balance = _this.tag.total_balance;
                _this.day_balance = _this.tag.day_balance;
            }
            //this.commandService  = this.app.settings.items.commands_primary_service;
        });
    };
    TagComponent.prototype.initForm = function () {
        this.tagForm = this.fb.group({
            num: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            units_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            drivers_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            total_limit: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            day_limit: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            total_balance: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            day_balance: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
        });
    };
    TagComponent.prototype.onTagFormSubmit = function () {
        this.tag ? this.saveTag() : this.addTag();
    };
    TagComponent.prototype.addTag = function () {
        var _this = this;
        this.app.tags.add(this.tagForm.value)
            .subscribe(function (res) {
            var newId = null;
            if (res.id)
                newId = res.id;
            _this.app.tags.get()
                .subscribe(function () {
                if (newId)
                    _this.router.navigate(['tag/' + newId]);
            });
        });
    };
    TagComponent.prototype.saveTag = function () {
        var _this = this;
        for (var key in this.tagForm.value) {
            this.tag[key] = this.tagForm.value[key];
        }
        this.tag.total_limit = this.total_limit;
        this.tag.day_limit = this.day_limit;
        this.tag.total_balance = this.total_balance;
        this.tag.day_balance = this.day_balance;
        delete this.tag.rtqerrors;
        this.saving = true;
        this.savingResults = null;
        //this.tag.save({commandService: this.commandService})
        this.tag.save()
            .subscribe(function (res) {
            _this.savingResults = res;
            _this.saving = false;
            _this.app.tags.get()
                .subscribe();
            _this.router.navigate(['tags']);
        });
    };
    TagComponent.prototype.changeTagValue = function (type, newValue) {
        var _this = this;
        this.tag.changeTagValue({ type: type, newValue: newValue })
            .subscribe(function (res) {
            _this.app.tags.get()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
                _this.tag = _this.app.tags._index.id[_this.tag.id];
                _this.tagForm.patchValue(_this.tag);
                _this.total_limit = _this.tag.total_limit;
                _this.day_limit = _this.tag.day_limit;
                _this.total_balance = _this.tag.total_balance;
                _this.day_balance = _this.tag.day_balance;
            }))
                .subscribe();
        });
    };
    TagComponent.prototype.retryRTTask = function (rtqItem) {
        var _this = this;
        this.app.rtqueue.rtqueueItemService.retry(rtqItem)
            .subscribe(function (res) {
            _this.app.tags.get().subscribe(function (_) {
                _this.tag = _this.app.tags._index.id[_this.tag.id];
                _this.tagForm.patchValue(_this.tag);
            });
        });
    };
    TagComponent.prototype.cancelRTTask = function (rtqItem) {
        var _this = this;
        this.app.rtqueue.rtqueueItemService.setStatus(rtqItem, { status: 5 })
            .subscribe(function (res) {
            _this.app.tags.get().subscribe(function (_) {
                _this.tag = _this.app.tags._index.id[_this.tag.id];
                _this.tagForm.patchValue(_this.tag);
            });
        });
    };
    TagComponent.prototype.importItems = function (items) {
        var _this = this;
        this.app.tags.addMultiple(items)
            .subscribe(function (res) {
            _this.multiAddErrors = res.added.filter(function (item) { return !item.id; });
            _this.app.tags.get()
                .subscribe();
            if (_this.multiAddErrors.length === 0)
                _this.router.navigate(['tags']);
        });
    };
    TagComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"] },
        { type: _services_test_service__WEBPACK_IMPORTED_MODULE_7__["TestService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    TagComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tag',
            template: __webpack_require__(/*! raw-loader!./tag.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/tag/tag.component.html"),
            styles: [__webpack_require__(/*! ./tag.component.scss */ "./src/app/components/tag/tag.component.scss")]
        })
    ], TagComponent);
    return TagComponent;
}());



/***/ }),

/***/ "./src/app/components/tags/tags.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/tags/tags.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFncy90YWdzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/tags/tags.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/tags/tags.component.ts ***!
  \***************************************************/
/*! exports provided: TagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsComponent", function() { return TagsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");




var TagsComponent = /** @class */ (function () {
    function TagsComponent(app) {
        this.app = app;
        this.faListAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faListAlt"];
        this.faExclamationTriangle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faExclamationTriangle"];
        this.tableOptions = {
            fieldNames: ['rtqerrors', 'num', 'unitNm', 'driverName', 'recieverUnitNames', 'total_limit', 'day_limit', 'total_balance', 'day_balance'],
            logLink: true,
            fields: {
                num: { type: 'link' },
                rtqerrors: {
                    type: 'icon',
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faExclamationTriangle"],
                    title: 'Errors in RTQueue',
                    classes: 'text-danger',
                    expr: function (item) { return (item.rtqerrors && item.rtqerrors.length > 0); },
                    badge: {
                        class: 'secondary',
                        expr: function (item) { return item.rtqerrors && item.rtqerrors.length; },
                    },
                },
                driverName: {
                    type: 'link',
                    path: 'driver',
                    idName: 'drivers_id',
                },
                recieverUnitNames: {
                    type: 'large',
                    shortName: 'shortRecieverUnitNames',
                }
            }
        };
        this.itemType = 'tags';
    }
    TagsComponent.prototype.ngOnInit = function () {
        //console.log(this.app.rtqueue)
    };
    TagsComponent.ctorParameters = function () { return [
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] }
    ]; };
    TagsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tags',
            template: __webpack_require__(/*! raw-loader!./tags.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/tags/tags.component.html"),
            styles: [__webpack_require__(/*! ./tags.component.scss */ "./src/app/components/tags/tags.component.scss")]
        })
    ], TagsComponent);
    return TagsComponent;
}());



/***/ }),

/***/ "./src/app/components/trash/trash.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/trash/trash.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJhc2gvdHJhc2guY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/trash/trash.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/trash/trash.component.ts ***!
  \*****************************************************/
/*! exports provided: TrashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrashComponent", function() { return TrashComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");






var TrashComponent = /** @class */ (function () {
    function TrashComponent(route, app) {
        this.route = route;
        this.app = app;
        this.objectType = '';
        this.faTrashAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTrashAlt"];
        this.faTrashRestore = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTrashRestore"];
        this.result = { items: [] };
    }
    TrashComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.app.ifAppReady()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () { return _this.route.params; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (params) {
            _this.objectType = params.objectType;
            _this.app.trash.get(params.objectType, params.objectId).subscribe();
        })).subscribe();
    };
    TrashComponent.prototype.restore = function (item) {
        var _this = this;
        this.app.trash.restore(item)
            .pipe(
        //switchMap(_=>this.app.trash.get(this.objectType))
        ).subscribe(function (res) {
            if (res.restored)
                _this.app.trash.removeItem(item);
        });
        return false;
    };
    TrashComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"] }
    ]; };
    TrashComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trash',
            template: __webpack_require__(/*! raw-loader!./trash.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/trash/trash.component.html"),
            styles: [__webpack_require__(/*! ./trash.component.scss */ "./src/app/components/trash/trash.component.scss")]
        })
    ], TrashComponent);
    return TrashComponent;
}());



/***/ }),

/***/ "./src/app/components/user-group/user-group.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/user-group/user-group.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1ncm91cC91c2VyLWdyb3VwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/user-group/user-group.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/user-group/user-group.component.ts ***!
  \***************************************************************/
/*! exports provided: UserGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGroupComponent", function() { return UserGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");








var UserGroupComponent = /** @class */ (function () {
    function UserGroupComponent(route, fb, app, router) {
        this.route = route;
        this.fb = fb;
        this.app = app;
        this.router = router;
        this.userGroup = {};
    }
    UserGroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        this.app.ifAppReady()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return _this.route.params; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (params) { return (params['userGroupId'] ? _this.app.ugroups._index.id[params['userGroupId']].get() : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(undefined)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (item) { _this.userGroup = item; }))
            .subscribe(function () {
            if (_this.userGroup) {
                _this.userGroupForm.patchValue(_this.userGroup);
            }
            else {
                _this.userGroup = { _ready: true };
            }
        });
    };
    UserGroupComponent.prototype.initForm = function () {
        this.userGroupForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            rights: ['', []],
        });
    };
    UserGroupComponent.prototype.onUserGroupFormSubmit = function () {
        this.userGroup.id ? this.saveUserGroup() : this.addUserGroup();
    };
    UserGroupComponent.prototype.addUserGroup = function () {
        var _this = this;
        this.app.ugroups.add(this.userGroupForm.value)
            .subscribe(function (res) {
            var newUserId = null;
            if (res.id)
                newUserId = res.id;
            _this.app.ugroups.get()
                .subscribe(function () {
                if (newUserId)
                    _this.router.navigate(['user-groups']);
            });
        });
    };
    UserGroupComponent.prototype.saveUserGroup = function () {
        var _this = this;
        for (var key in this.userGroupForm.value) {
            this.userGroup[key] = this.userGroupForm.value[key];
        }
        this.userGroup.save()
            .subscribe(function (res) {
            _this.app.ugroups.get()
                .subscribe();
            _this.router.navigate(['user-groups']);
        });
    };
    UserGroupComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    UserGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-group',
            template: __webpack_require__(/*! raw-loader!./user-group.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/user-group/user-group.component.html"),
            styles: [__webpack_require__(/*! ./user-group.component.scss */ "./src/app/components/user-group/user-group.component.scss")]
        })
    ], UserGroupComponent);
    return UserGroupComponent;
}());



/***/ }),

/***/ "./src/app/components/user-groups/user-groups.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-groups/user-groups.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1ncm91cHMvdXNlci1ncm91cHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/user-groups/user-groups.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/user-groups/user-groups.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserGroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGroupsComponent", function() { return UserGroupsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");




var UserGroupsComponent = /** @class */ (function () {
    function UserGroupsComponent(app) {
        this.app = app;
        this.faTrashAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTrashAlt"];
        this.itemType = 'ugroups';
    }
    UserGroupsComponent.prototype.ngOnInit = function () {
    };
    UserGroupsComponent.ctorParameters = function () { return [
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] }
    ]; };
    UserGroupsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-groups',
            template: __webpack_require__(/*! raw-loader!./user-groups.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/user-groups/user-groups.component.html"),
            styles: [__webpack_require__(/*! ./user-groups.component.scss */ "./src/app/components/user-groups/user-groups.component.scss")]
        })
    ], UserGroupsComponent);
    return UserGroupsComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");










var UserComponent = /** @class */ (function () {
    function UserComponent(route, fb, app, router, userService) {
        this.route = route;
        this.fb = fb;
        this.app = app;
        this.router = router;
        this.userService = userService;
        this.user = {};
        this.faEyeSlash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faEyeSlash"];
        this.faEye = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faEye"];
        this.userPasswordConfirm = ''; // Kostyl!!!!
        this.passwordsVisible = false;
        this.updateEvent = new Event('treeUpdated');
    }
    UserComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.getUser(this.app.ifAppReady());
    };
    UserComponent.prototype.getUser = function (onready) {
        var _this = this;
        onready.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return _this.route.params; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (params) { return (params['userId'] ? _this.app.users._index.id[params['userId']].get() : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(undefined)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (item) { _this.user = item; }))
            .subscribe(function () {
            if (_this.user) {
                _this.userForm.patchValue(_this.user);
            }
            else {
                _this.userForm.get('password').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
                _this.userForm.controls['password'].updateValueAndValidity();
                _this.user = { _ready: true };
            }
            document.dispatchEvent(_this.updateEvent);
        });
    };
    UserComponent.prototype.initForm = function () {
        this.userForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            password: ['', []],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
            d: [0, []],
        });
    };
    UserComponent.prototype.checkPasswordConfirmation = function (e) {
        if (e)
            this.userPasswordConfirm = e.srcElement.value;
        if (this.userPasswordConfirm !== this.userForm.controls['password'].value) {
            this.userForm.controls['password'].setErrors({ nonConfirmed: true });
            return false;
        }
        this.userForm.controls['password'].setErrors({ nonConfirmed: null });
        this.userForm.controls['password'].updateValueAndValidity();
    };
    UserComponent.prototype.onUserFormSubmit = function (e) {
        this.user.id ? this.saveUser() : this.addUser();
        return false;
    };
    UserComponent.prototype.addUser = function () {
        var _this = this;
        this.app.users.add(this.userForm.value)
            .subscribe(function (res) {
            var newUserId = null;
            if (res.id)
                newUserId = res.id;
            _this.app.users.get()
                .subscribe(function () {
                if (newUserId)
                    _this.router.navigate(['users']);
            });
        });
    };
    UserComponent.prototype.saveUser = function () {
        var _this = this;
        for (var key in this.userForm.value) {
            this.user[key] = this.userForm.value[key];
        }
        this.user.save()
            .subscribe(function (res) {
            _this.app.users.get()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (_) { return _this.getUser(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null)); }))
                .subscribe();
            _this.router.navigate(['users']);
        });
    };
    UserComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }
    ]; };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/components/user/user.component.scss")]
        })
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/components/users/users.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/users/users.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMvdXNlcnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/users/users.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/users/users.component.ts ***!
  \*****************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");




var UsersComponent = /** @class */ (function () {
    function UsersComponent(app) {
        this.app = app;
        this.faTrashAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTrashAlt"];
        this.faUserLock = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUserLock"];
        this.result = { items: [] };
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent.prototype.getUsers = function () {
        this.app.users.get().subscribe();
    };
    UsersComponent.prototype.delUser = function (user) {
        var _this = this;
        user.del()
            .subscribe(function (res) {
            _this.app.users.get().subscribe();
        });
    };
    UsersComponent.ctorParameters = function () { return [
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] }
    ]; };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/components/users/users.component.scss")]
        })
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/db.migration.ts":
/*!*********************************!*\
  !*** ./src/app/db.migration.ts ***!
  \*********************************/
/*! exports provided: myDBConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myDBConfig", function() { return myDBConfig; });
// Ahead of time compiles requires an exported function for factories
var migrationFactory = function () {
    // The animal table was added with version 2 but none of the existing tables or data needed
    // to be modified so a migrator for that version is not included.
    return {
        7: function (db, transaction) {
            var store = transaction.objectStore('competitors');
            store.createIndex('email', 'email', { unique: false });
            store.createIndex('phone', 'phone', { unique: false });
        },
        8: function (db, transaction) {
            var store = transaction.objectStore('users');
            store.createIndex('email', 'email', { unique: false });
        },
        9: function (db, transaction) {
            var store = transaction.objectStore('users');
            store.createIndex('root', 'root', { unique: false });
        },
    };
};
function myDBConfig() {
    return {
        name: 'MyDb',
        version: 9,
        objectStoresMeta: [
            {
                store: 'accounts',
                storeConfig: { keyPath: 'id', autoIncrement: true },
                storeSchema: [
                    { name: 'name', keypath: 'name', options: { unique: true } },
                    { name: 'dt', keypath: 'dt', options: { unique: false } },
                    { name: 'd', keypath: 'd', options: { unique: false } },
                ]
            },
            {
                store: 'users',
                storeConfig: { keyPath: 'id', autoIncrement: true },
                storeSchema: [
                    { name: 'accountId', keypath: 'accountId', options: { unique: false } },
                    { name: 'name', keypath: 'name', options: { unique: true } },
                    { name: 'password', keypath: 'password', options: { unique: false } },
                    { name: 'd', keypath: 'd', options: { unique: false } },
                ]
            },
            {
                store: 'seasons',
                storeConfig: { keyPath: 'id', autoIncrement: true },
                storeSchema: [
                    { name: 'accountId', keypath: 'accountId', options: { unique: false } },
                    { name: 'name', keypath: 'name', options: { unique: true } },
                    { name: 'from', keypath: 'from', options: { unique: false } },
                    { name: 'to', keypath: 'to', options: { unique: false } },
                    { name: 'd', keypath: 'd', options: { unique: false } },
                ]
            },
            {
                store: 'categories',
                storeConfig: { keyPath: 'id', autoIncrement: true },
                storeSchema: [
                    { name: 'accountId', keypath: 'accountId', options: { unique: false } },
                    { name: 'seasonId', keypath: 'seasonId', options: { unique: false } },
                    { name: 'name', keypath: 'name', options: { unique: true } },
                    { name: 'ageFrom', keypath: 'ageFrom', options: { unique: false } },
                    { name: 'ageTo', keypath: 'ageTo', options: { unique: false } },
                    { name: 'd', keypath: 'd', options: { unique: false } },
                ]
            },
            {
                store: 'races',
                storeConfig: { keyPath: 'id', autoIncrement: true },
                storeSchema: [
                    { name: 'accountId', keypath: 'accountId', options: { unique: false } },
                    { name: 'seasonId', keypath: 'seasonId', options: { unique: false } },
                    { name: 'name', keypath: 'name', options: { unique: true } },
                    { name: 'from', keypath: 'from', options: { unique: false } },
                    { name: 'to', keypath: 'to', options: { unique: false } },
                    { name: 'd', keypath: 'd', options: { unique: false } },
                ]
            },
            {
                store: 'competitors',
                storeConfig: { keyPath: 'id', autoIncrement: true },
                storeSchema: [
                    { name: 'accountId', keypath: 'accountId', options: { unique: false } },
                    { name: 'regDate', keypath: 'regDate', options: { unique: false } },
                    { name: 'num', keypath: 'num', options: { unique: false } },
                    { name: 'name1', keypath: 'name1', options: { unique: false } },
                    { name: 'name2', keypath: 'name2', options: { unique: false } },
                    { name: 'name3', keypath: 'name3', options: { unique: false } },
                    { name: 'birdthDate', keypath: 'birdthDate', options: { unique: false } },
                    { name: 'categoryId', keypath: 'categoryId', options: { unique: false } },
                    { name: 'team', keypath: 'team', options: { unique: false } },
                    { name: 'desc', keypath: 'desc', options: { unique: false } },
                    { name: 'd', keypath: 'd', options: { unique: false } },
                ]
            },
            {
                store: 'events',
                storeConfig: { keyPath: 'id', autoIncrement: true },
                storeSchema: [
                    { name: 'accountId', keypath: 'accountId', options: { unique: false } },
                    { name: 'eventType', keypath: 'eventType', options: { unique: false } },
                    { name: 'raceId', keypath: 'raceId', options: { unique: false } },
                    { name: 'competitorId', keypath: 'competitorId', options: { unique: false } },
                    { name: 't', keypath: 't', options: { unique: false } },
                    { name: 'desc', keypath: 'desc', options: { unique: false } },
                    { name: 'd', keypath: 'd', options: { unique: false } },
                ]
            },
            {
                store: 'log',
                storeConfig: { keyPath: 'id', autoIncrement: true },
                storeSchema: [
                    { name: 'accountId', keypath: 'accountId', options: { unique: false } },
                    { name: 'type', keypath: 'type', options: { unique: false } },
                    { name: 'userId', keypath: 'userId', options: { unique: false } },
                    { name: 'objectType', keypath: 'objectType', options: { unique: false } },
                    { name: 'objectId', keypath: 'objectId', options: { unique: false } },
                    { name: 't', keypath: 't', options: { unique: true } },
                    { name: 'data', keypath: 'data', options: { unique: false } },
                ]
            },
        ],
        // provide the migration factory to the DBConfig
        migrationFactory: migrationFactory
    };
}
;


/***/ }),

/***/ "./src/app/pipes/as-result.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/as-result.pipe.ts ***!
  \*****************************************/
/*! exports provided: AsResultPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsResultPipe", function() { return AsResultPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AsResultPipe = /** @class */ (function () {
    function AsResultPipe() {
    }
    AsResultPipe.prototype.transform = function (items, result) {
        result.items = items;
        return items;
    };
    AsResultPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'asResult',
            pure: false
        })
    ], AsResultPipe);
    return AsResultPipe;
}());



/***/ }),

/***/ "./src/app/pipes/in-list-filter.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/pipes/in-list-filter.pipe.ts ***!
  \**********************************************/
/*! exports provided: InListFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InListFilterPipe", function() { return InListFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InListFilterPipe = /** @class */ (function () {
    function InListFilterPipe() {
    }
    InListFilterPipe.prototype.transform = function (items, list, exist, indexKey) {
        if (exist === void 0) { exist = true; }
        if (indexKey === void 0) { indexKey = 'id'; }
        if (!items || !list)
            return items;
        return items.filter(function (item) { return (exist === (list.indexOf(item[indexKey]) >= 0)); });
    };
    InListFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'inListFilter'
        })
    ], InListFilterPipe);
    return InListFilterPipe;
}());



/***/ }),

/***/ "./src/app/pipes/keys.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/keys.pipe.ts ***!
  \************************************/
/*! exports provided: KeysPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeysPipe", function() { return KeysPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value) {
        if (!value) {
            return null;
        }
        return Object.keys(value);
    };
    KeysPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'keys'
        })
    ], KeysPipe);
    return KeysPipe;
}());



/***/ }),

/***/ "./src/app/pipes/my-filter.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/my-filter.pipe.ts ***!
  \*****************************************/
/*! exports provided: MyFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFilterPipe", function() { return MyFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyFilterPipe = /** @class */ (function () {
    function MyFilterPipe() {
    }
    MyFilterPipe.prototype.transform = function (items, filter, byKeys) {
        if (byKeys === void 0) { byKeys = null; }
        if (!items || !filter) {
            return items;
        }
        //if(filter.length<=1) return items;
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        if (typeof filter === 'string') {
            if (filter === '')
                return items;
            return items.filter(function (item) {
                if (byKeys) {
                    for (var key in byKeys) {
                        if (item[byKeys[key]] !== undefined) {
                            if (RegExp(filter, 'i').test(item[byKeys[key]]))
                                return true;
                        }
                    }
                }
                else {
                    for (var key in item) {
                        if (RegExp(filter, 'i').test(item[key]))
                            return true;
                    }
                }
                return false;
            });
        }
        else if (typeof filter === 'object') {
            return items.filter(function (item) {
                var result = true;
                for (var key in filter) {
                    if (filter[key] === null && (item[key] === undefined || item[key] === false)) {
                        result = result && true;
                    }
                    else {
                        if ((filter[key] !== '') && (item[key] !== undefined)) {
                            result = result && (RegExp(filter[key], 'i').test(item[key]));
                        }
                    }
                }
                return result;
            });
        }
        return false;
    };
    MyFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'myFilter',
            pure: false
        })
    ], MyFilterPipe);
    return MyFilterPipe;
}());



/***/ }),

/***/ "./src/app/pipes/order-by.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/order-by.pipe.ts ***!
  \****************************************/
/*! exports provided: OrderByPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByPipe", function() { return OrderByPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderByPipe = /** @class */ (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (obj, orderFields) {
        if (!orderFields)
            return obj;
        orderFields.forEach(function (currentField) {
            var orderType = 'ASC';
            if (currentField[0] === '-') {
                currentField = currentField.substring(1);
                orderType = 'DESC';
            }
            obj.sort(function (a, b) {
                if (orderType === 'ASC') {
                    if (a[currentField] < b[currentField])
                        return -1;
                    if (a[currentField] > b[currentField])
                        return 1;
                    return 0;
                }
                else {
                    if (a[currentField] < b[currentField])
                        return 1;
                    if (a[currentField] > b[currentField])
                        return -1;
                    return 0;
                }
            });
        });
        return obj;
    };
    OrderByPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'orderBy'
        })
    ], OrderByPipe);
    return OrderByPipe;
}());

// import { Pipe, PipeTransform } from '@angular/core';
// import { orderBy } from 'lodash';
// @Pipe({
//   name: 'orderBy'
// })
// export class OrderByPipe implements PipeTransform {
//   transform = orderBy;
// }


/***/ }),

/***/ "./src/app/services/account.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/account.service.ts ***!
  \*********************************************/
/*! exports provided: Account, AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Account", function() { return Account; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");




var Account = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Account, _super);
    function Account(item_, _parent) {
        var _this = _super.call(this, item_, _parent) || this;
        _this._parent = _parent;
        return _this;
    }
    Account.prototype.init = function (params) {
        return this._parent._itemService.init(this);
    };
    Account.ctorParameters = function () { return [
        null,
        null
    ]; };
    Account = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
        //test
    ], Account);
    return Account;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["Item"]));

var AccountService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AccountService, _super);
    function AccountService(api) {
        var _this = _super.call(this, api) || this;
        _this.api = api;
        _this._itemType = 'accounts';
        return _this;
    }
    AccountService.prototype.create = function (item_, parent) {
        return new Account(item_, parent);
    };
    AccountService.prototype.init = function (item) {
        return this.api.request('POST', this._itemType + '/' + item.id, { action: 'init', item: { wtoken: item.wtoken } });
    };
    AccountService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] }
    ]; };
    return AccountService;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"]));



/***/ }),

/***/ "./src/app/services/accounts.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/accounts.service.ts ***!
  \**********************************************/
/*! exports provided: AccountsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsService", function() { return AccountsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/account.service */ "./src/app/services/account.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/items.service */ "./src/app/services/items.service.ts");





var AccountsService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AccountsService, _super);
    function AccountsService(api, accountService) {
        var _this = _super.call(this, api, accountService) || this;
        _this.api = api;
        _this.accountService = accountService;
        return _this;
    }
    AccountsService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] },
        { type: _services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"] }
    ]; };
    AccountsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AccountsService);
    return AccountsService;
}(_services_items_service__WEBPACK_IMPORTED_MODULE_4__["ItemsService"]));



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: APIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIService", function() { return APIService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_indexed_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-indexed-db */ "./node_modules/ngx-indexed-db/fesm5/ngx-indexed-db.js");






var APIService = /** @class */ (function () {
    function APIService(httpClient, dbService) {
        this.httpClient = httpClient;
        this.dbService = dbService;
        this.apiUrl = 'https://rfid-limit/api/';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        if (location.host !== 'localhost:4200')
            this.apiUrl = 'api/';
    }
    APIService.prototype.request = function (type, svc, params) {
        var _this = this;
        //console.log(type,svc,params);
        var arr = svc.split('/');
        svc = arr[0];
        var getParams = arr.splice(1);
        if (svc === 'core') {
            if (type === 'GET' && getParams[0] === 'auth') {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({
                    auth: true,
                    ref: {},
                    settings: {},
                    user: {
                        root: true,
                        name: 'user',
                        rights: {
                            items: {
                                users: { r: true, m: true, a: true, d: true },
                                seasons: { r: true, m: true, a: true, d: true },
                                categories: { r: true, m: true, a: true, d: true },
                                race: { r: true, m: true, a: true, d: true },
                                races: { r: true, m: true, a: true, d: true },
                                competitors: { r: true, m: true, a: true, d: true },
                                log: { r: true, m: true, a: true, d: true },
                            },
                            nav: {
                                header: {
                                    users: true,
                                    seasons: true,
                                    category: true,
                                    race: true,
                                    races: true,
                                    competitors: true,
                                    log: true,
                                }
                            }
                        },
                    },
                    sid: '123',
                }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(1000));
            }
        }
        else if (svc === 'users' || svc === 'log' || svc === 'competitors' || svc === 'categories' || svc === 'races' || svc === 'events') {
            if (type === 'GET') {
                if (!getParams[0]) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.dbService.getAll(svc))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return ({ items: res.filter(function (item) { return !item.d; }) }); }));
                }
                else {
                    var id = Number(getParams[0]);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.dbService.getByKey(svc, id))
                        .pipe(
                    //tap(v=>console.log(v)),
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return ({ item: res }); }));
                }
            }
            else if (type === 'PUT') {
                if (!getParams[0]) {
                }
                else {
                    var id = Number(getParams[0]);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.dbService.update(svc, params))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return ({ item: res }); }));
                }
            }
            else if (type === 'POST') {
                if (!getParams[0]) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.dbService.add(svc, params))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return ({ id: res }); }));
                }
                else if (getParams[0] === 'multiple') {
                    params.forEach(function (item) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(_this.dbService.add(svc, item))
                            .subscribe();
                    });
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ added: params.map(function (item) { return ({ id: 123 }); }) });
                }
            }
            else if (type === 'DELETE') {
                if (getParams[0]) {
                    var id = Number(getParams[0]);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.dbService.getByKey(svc, id))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (item) { item.d = Math.round(new Date().getTime() / 1000); return item; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (item) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(_this.dbService.update(svc, item)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return ({ deleted: true }); }));
                }
                else {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.dbService.clear(svc))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return ({ deleted: res }); }));
                }
            }
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        var url = this.apiUrl + svc;
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (params)
            httpParams = httpParams.set('params', JSON.stringify(params));
        var body = httpParams.toString().replace('+', '%2b');
        return this.httpClient.request(type, url, { body: body, headers: this.headers, withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    APIService.prototype.errorHandler = function (error) {
        if (error.status === 401) {
            var checkAuthError = new Event('coreCheckAuthError');
            document.dispatchEvent(checkAuthError);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(error);
    };
    APIService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_indexed_db__WEBPACK_IMPORTED_MODULE_5__["NgxIndexedDBService"] }
    ]; };
    APIService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], APIService);
    return APIService;
}());



/***/ }),

/***/ "./src/app/services/app.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/app.service.ts ***!
  \*****************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/core.service */ "./src/app/services/core.service.ts");
/* harmony import */ var _services_competitors_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/competitors.service */ "./src/app/services/competitors.service.ts");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/categories.service */ "./src/app/services/categories.service.ts");
/* harmony import */ var _services_races_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/races.service */ "./src/app/services/races.service.ts");
/* harmony import */ var _services_go_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/go.service */ "./src/app/services/go.service.ts");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_user_groups_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/user-groups.service */ "./src/app/services/user-groups.service.ts");
/* harmony import */ var _services_tags_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/tags.service */ "./src/app/services/tags.service.ts");
/* harmony import */ var _services_units_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/units.service */ "./src/app/services/units.service.ts");
/* harmony import */ var _services_hwtypes_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/hwtypes.service */ "./src/app/services/hwtypes.service.ts");
/* harmony import */ var _services_recievers_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/recievers.service */ "./src/app/services/recievers.service.ts");
/* harmony import */ var _services_log_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/log.service */ "./src/app/services/log.service.ts");
/* harmony import */ var _services_trash_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../services/trash.service */ "./src/app/services/trash.service.ts");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _services_distributions_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../services/distributions.service */ "./src/app/services/distributions.service.ts");
/* harmony import */ var _services_appevents_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../services/appevents.service */ "./src/app/services/appevents.service.ts");
/* harmony import */ var _services_reference_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../services/reference.service */ "./src/app/services/reference.service.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _services_accounts_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../services/accounts.service */ "./src/app/services/accounts.service.ts");
/* harmony import */ var _services_rtqueue_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../services/rtqueue.service */ "./src/app/services/rtqueue.service.ts");


























var AppService = /** @class */ (function () {
    function AppService(core, trash, settings, ref, APPEvents, state, users, categories, competitors, races, events, go, log, accounts, seasons, ugroups, tags, units, hwtypes, recievers, distributions, rtqueue) {
        this.core = core;
        this.trash = trash;
        this.settings = settings;
        this.ref = ref;
        this.APPEvents = APPEvents;
        this.state = state;
        this.users = users;
        this.categories = categories;
        this.competitors = competitors;
        this.races = races;
        this.events = events;
        this.go = go;
        this.log = log;
        this.accounts = accounts;
        this.seasons = seasons;
        this.ugroups = ugroups;
        this.tags = tags;
        this.units = units;
        this.hwtypes = hwtypes;
        this.recievers = recievers;
        this.distributions = distributions;
        this.rtqueue = rtqueue;
        this.readyEvent = new Event('appReady');
        this.accountsReadyEvent = new Event('accountsReady');
        this.ready = false;
        this.addPaths = {
            users: 'user',
            competitors: 'competitor',
            categories: 'category',
            races: 'race',
            events: 'event',
            ugroups: 'user-group',
            recievers: 'reciever',
            accounts: 'account',
            log: '',
        };
        this.users.app = this;
        this.ugroups.app = this;
        this.tags.app = this;
        this.units.app = this;
        this.hwtypes.app = this;
        this.recievers.app = this;
        this.competitors.app = this;
        this.categories.app = this;
        this.races.app = this;
        this.events.app = this;
        this.log.app = this;
        this.trash.app = this;
        this.distributions.app = this;
        this.accounts.app = this;
        this.rtqueue.app = this;
        this.trash.trashTypes = ['tags', 'recievers', 'competitors', 'categories', 'races', 'events', 'users', 'ugroups'];
        this.state.createDefaults(['tags', 'recievers', 'competitors', 'categories', 'races', 'events', 'users', 'ugroups', 'log', 'trash', 'distributions', 'accounts', 'rtqueue']);
    }
    AppService.prototype.onAppReady = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'appReady');
    };
    AppService.prototype.ifAppReady = function () {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["iif"])(function () { return _this.ready; }, Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true), _this.onAppReady()); }));
    };
    AppService.prototype.ifAccountsReady = function () {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["iif"])(function () { return _this.accounts.ready; }, Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'accountsReady')); }));
    };
    AppService.prototype.init = function () {
        var _this = this;
        this.core.onLoggedIn()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
            _this.settings.set(_this.core.settings);
            _this.ref.set(_this.core.ref);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { _this.ready = false; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { _this.core.createRightsAliases([_this.users, _this.log, _this.competitors, _this.categories, _this.races, _this.events]); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_) { return _this.users.get(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_) { return _this.ugroups.get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_) { return _this.tags.get(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_) { return _this.recievers.get(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_) { return _this.competitors.get(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_) { return _this.categories.get(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_) { return _this.races.get(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_) { return _this.events.get(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_) { return _this.distributions.get(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_) { return _this.rtqueue.get(); })); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { _this.units.get().subscribe(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { _this.hwtypes.get().subscribe(); }), 
        //tap(_=>{this.rtqueue.get().subscribe()}),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { _this.APPEvents.startAutoRefresh().subscribe(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { if (_this.core.user.super)
            _this.accounts.get().subscribe(function (_) { document.dispatchEvent(_this.accountsReadyEvent); }); }))
            .subscribe(function (res) {
            _this.ready = true;
            document.dispatchEvent(_this.readyEvent);
        });
    };
    AppService.ctorParameters = function () { return [
        { type: _services_core_service__WEBPACK_IMPORTED_MODULE_4__["CoreService"] },
        { type: _services_trash_service__WEBPACK_IMPORTED_MODULE_17__["TrashService"] },
        { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_22__["SettingsService"] },
        { type: _services_reference_service__WEBPACK_IMPORTED_MODULE_21__["ReferenceService"] },
        { type: _services_appevents_service__WEBPACK_IMPORTED_MODULE_20__["APPEventsService"] },
        { type: _services_state_service__WEBPACK_IMPORTED_MODULE_18__["StateService"] },
        { type: _services_users_service__WEBPACK_IMPORTED_MODULE_10__["UsersService"] },
        { type: _services_categories_service__WEBPACK_IMPORTED_MODULE_6__["CategoriesService"] },
        { type: _services_competitors_service__WEBPACK_IMPORTED_MODULE_5__["CompetitorsService"] },
        { type: _services_races_service__WEBPACK_IMPORTED_MODULE_7__["RacesService"] },
        { type: _services_events_service__WEBPACK_IMPORTED_MODULE_9__["EventsService"] },
        { type: _services_go_service__WEBPACK_IMPORTED_MODULE_8__["GoService"] },
        { type: _services_log_service__WEBPACK_IMPORTED_MODULE_16__["LogService"] },
        { type: _services_accounts_service__WEBPACK_IMPORTED_MODULE_23__["AccountsService"] },
        { type: _services_trash_service__WEBPACK_IMPORTED_MODULE_17__["TrashService"] },
        { type: _services_user_groups_service__WEBPACK_IMPORTED_MODULE_11__["UserGroupsService"] },
        { type: _services_tags_service__WEBPACK_IMPORTED_MODULE_12__["TagsService"] },
        { type: _services_units_service__WEBPACK_IMPORTED_MODULE_13__["UnitsService"] },
        { type: _services_hwtypes_service__WEBPACK_IMPORTED_MODULE_14__["HWTypesService"] },
        { type: _services_recievers_service__WEBPACK_IMPORTED_MODULE_15__["RecieversService"] },
        { type: _services_distributions_service__WEBPACK_IMPORTED_MODULE_19__["DistributionsService"] },
        { type: _services_rtqueue_service__WEBPACK_IMPORTED_MODULE_24__["RTQueueService"] }
    ]; };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/services/appevents.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/appevents.service.ts ***!
  \***********************************************/
/*! exports provided: APPEvent, APPEventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPEvent", function() { return APPEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPEventsService", function() { return APPEventsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _classes_indexable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../classes/indexable */ "./src/app/classes/indexable.ts");







var APPEvent = /** @class */ (function () {
    function APPEvent(item_, _parent) {
        this._parent = _parent;
        for (var key in item_) {
            this[key] = item_[key];
        }
    }
    APPEvent.ctorParameters = function () { return [
        null,
        null
    ]; };
    APPEvent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], APPEvent);
    return APPEvent;
}());

var APPEventsService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](APPEventsService, _super);
    function APPEventsService(api, settings) {
        var _this = _super.call(this) || this;
        _this.api = api;
        _this.settings = settings;
        //private autoRefreshDelay: number = 5*1000;
        _this._indexableProps = ['id'];
        _this.lastCheckTime = 0;
        _this.evtsList = [];
        return _this;
    }
    APPEventsService.prototype.get = function () {
        return this.api.request('GET', 'evts/' + this.lastCheckTime);
    };
    APPEventsService.prototype.startAutoRefresh = function () {
        var _this = this;
        var lastAutoRefreshTime = new Date().getTime();
        this.autoRefreshInterval = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(100);
        return this.autoRefreshInterval
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (_) { return (lastAutoRefreshTime - 100 + _this.settings.items.appevts_refresh_interval * 1000) < (new Date().getTime()) && (lastAutoRefreshTime - 100 + 3000) < (new Date().getTime()); }), 
        //tap((res)=>{console.log(lastAutoRefreshTime - (new Date().getTime()))}),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { lastAutoRefreshTime = new Date().getTime(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_) { return _this.get(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) { if (res.t)
            _this.lastCheckTime = res.t; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) { if (res.i)
            res.i.forEach(function (item) { _this.handle(item); _this.evtsList.unshift(item); }); }));
    };
    APPEventsService.prototype.handle = function (event) {
        this.appEvent = new CustomEvent('appEvent', {
            bubbles: false,
            detail: event
        });
        document.dispatchEvent(this.appEvent);
    };
    APPEventsService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"] },
        { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"] }
    ]; };
    return APPEventsService;
}(_classes_indexable__WEBPACK_IMPORTED_MODULE_6__["Indexable"]));



/***/ }),

/***/ "./src/app/services/categories.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/categories.service.ts ***!
  \************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/items.service */ "./src/app/services/items.service.ts");





var CategoriesService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CategoriesService, _super);
    function CategoriesService(api, competitorService) {
        var _this = _super.call(this, api, competitorService) || this;
        _this.api = api;
        _this.competitorService = competitorService;
        return _this;
    }
    CategoriesService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] },
        { type: _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] }
    ]; };
    CategoriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CategoriesService);
    return CategoriesService;
}(_services_items_service__WEBPACK_IMPORTED_MODULE_4__["ItemsService"]));



/***/ }),

/***/ "./src/app/services/category.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: Category, CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");




var Category = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Category, _super);
    function Category(item_, _parent) {
        var _this = _super.call(this, item_, _parent) || this;
        _this._parent = _parent;
        return _this;
    }
    Category.ctorParameters = function () { return [
        null,
        null
    ]; };
    Category = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], Category);
    return Category;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["Item"]));

var CategoryService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CategoryService, _super);
    function CategoryService(api) {
        var _this = _super.call(this, api) || this;
        _this.api = api;
        _this._itemType = 'categories';
        return _this;
    }
    CategoryService.prototype.create = function (item_, parent) {
        return new Category(item_, parent);
    };
    CategoryService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] }
    ]; };
    return CategoryService;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"]));



/***/ }),

/***/ "./src/app/services/commands.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/commands.service.ts ***!
  \**********************************************/
/*! exports provided: CommandsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandsService", function() { return CommandsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_units_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/units.service */ "./src/app/services/units.service.ts");





var CommandsService = /** @class */ (function () {
    function CommandsService(api, units) {
        this.api = api;
        this.units = units;
        this.sending = false;
    }
    CommandsService.prototype.send = function (params) {
        var _this = this;
        this.sending = true;
        return this.api.request('POST', 'command', {
            imei: this.units._index.id[params.units_id].uid,
            unit_id: params.units_id,
            command_text: params.text,
            commands_service: params.service
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { _this.sending = false; }));
    };
    CommandsService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] },
        { type: _services_units_service__WEBPACK_IMPORTED_MODULE_4__["UnitsService"] }
    ]; };
    CommandsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CommandsService);
    return CommandsService;
}());



/***/ }),

/***/ "./src/app/services/competitor.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/competitor.service.ts ***!
  \************************************************/
/*! exports provided: Competitor, CompetitorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Competitor", function() { return Competitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetitorService", function() { return CompetitorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");




var Competitor = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Competitor, _super);
    function Competitor(item_, _parent) {
        var _this = _super.call(this, item_, _parent) || this;
        _this._parent = _parent;
        return _this;
    }
    Object.defineProperty(Competitor.prototype, "fullName", {
        get: function () {
            return this.name1 + ' ' + this.name2 + ' ' + this.name3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Competitor.prototype, "fullNameNum", {
        get: function () {
            return this.num + ' ' + this.name1 + ' ' + this.name2 + ' ' + this.name3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Competitor.prototype, "categoryName", {
        get: function () {
            return (this._parent.app && this._parent.app.categories._index && this._parent.app.categories._index.id && this._parent.app.categories._index.id[this.categoryId]) ? this._parent.app.categories._index.id[this.categoryId].name : '';
        },
        enumerable: true,
        configurable: true
    });
    Competitor.ctorParameters = function () { return [
        null,
        null
    ]; };
    Competitor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], Competitor);
    return Competitor;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["Item"]));

var CompetitorService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CompetitorService, _super);
    function CompetitorService(api) {
        var _this = _super.call(this, api) || this;
        _this.api = api;
        _this._itemType = 'competitors';
        return _this;
    }
    CompetitorService.prototype.create = function (item_, parent) {
        return new Competitor(item_, parent);
    };
    CompetitorService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] }
    ]; };
    return CompetitorService;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"]));



/***/ }),

/***/ "./src/app/services/competitors.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/competitors.service.ts ***!
  \*************************************************/
/*! exports provided: CompetitorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetitorsService", function() { return CompetitorsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_competitor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/competitor.service */ "./src/app/services/competitor.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/items.service */ "./src/app/services/items.service.ts");





var CompetitorsService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CompetitorsService, _super);
    function CompetitorsService(api, competitorService) {
        var _this = _super.call(this, api, competitorService) || this;
        _this.api = api;
        _this.competitorService = competitorService;
        return _this;
    }
    CompetitorsService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] },
        { type: _services_competitor_service__WEBPACK_IMPORTED_MODULE_2__["CompetitorService"] }
    ]; };
    CompetitorsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CompetitorsService);
    return CompetitorsService;
}(_services_items_service__WEBPACK_IMPORTED_MODULE_4__["ItemsService"]));



/***/ }),

/***/ "./src/app/services/core.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/core.service.ts ***!
  \******************************************/
/*! exports provided: CoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreService", function() { return CoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");





var CoreService = /** @class */ (function () {
    function CoreService(api) {
        this.api = api;
        this.loggedInEvent = new Event('coreloggedIn');
        this.checkAuthError = new Event('coreCheckAuthError');
        this.readyEvent = new Event('coreReady');
        this.session = null;
        this.user = null;
    }
    CoreService.prototype.onLoggedIn = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'coreloggedIn');
    };
    CoreService.prototype.onCheckAuthError = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'coreCheckAuthError');
    };
    CoreService.prototype.init = function () {
        var _this = this;
        return this.api.request('GET', 'core/auth')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { _this.clearSession(); document.dispatchEvent(_this.checkAuthError); return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(err); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
            _this.ref = res.ref;
            _this.settings = res.settings;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) { return _this.createSession(res); }));
    };
    CoreService.prototype.login = function (LoginData) {
        var _this = this;
        return this.api.request('POST', 'core/login', LoginData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { _this.clearSession(); throw err; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
            _this.ref = res.ref;
            _this.settings = res.settings;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) { return _this.createSession(res); }));
    };
    CoreService.prototype.logOut = function () {
        var _this = this;
        return this.api.request('DELETE', 'core/logout')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
            if (res.logout)
                _this.clearSession();
            return res;
        }));
    };
    CoreService.prototype.clearSession = function () {
        this.session = null;
        this.user = null;
    };
    CoreService.prototype.createSession = function (res) {
        if (res.user) {
            this.user = res.user;
            this.session = { sid: res.sid };
            document.dispatchEvent(this.loggedInEvent);
            return this.session;
        }
        return null;
    };
    CoreService.prototype.getUser = function () {
        return this.api.request('GET', 'core/getuser');
    };
    CoreService.prototype.getUsers = function () {
        return this.api.request('GET', 'users');
    };
    CoreService.prototype.createRightsAliases = function (services) {
        var _this = this;
        services.forEach(function (svc) {
            if (svc._itemService._itemType && _this.user.rights.items[svc._itemService._itemType]) {
                svc.r = _this.user.rights.items[svc._itemService._itemType];
            }
        });
    };
    CoreService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"] }
    ]; };
    CoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CoreService);
    return CoreService;
}());



/***/ }),

/***/ "./src/app/services/distribution.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/distribution.service.ts ***!
  \**************************************************/
/*! exports provided: Distribution, DistributionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Distribution", function() { return Distribution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistributionService", function() { return DistributionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");




var Distribution = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Distribution, _super);
    function Distribution(item_, _parent) {
        var _this = _super.call(this, item_, _parent) || this;
        _this._parent = _parent;
        return _this;
    }
    Object.defineProperty(Distribution.prototype, "name", {
        get: function () {
            return '#' + this.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Distribution.prototype, "recieverName", {
        get: function () {
            return (this._parent.app && this._parent.app.recievers._index && this._parent.app.recievers._index.id && this._parent.app.recievers._index.id[this.recievers_id]) ? this._parent.app.recievers._index.id[this.recievers_id].name : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Distribution.prototype, "tagName", {
        get: function () {
            return (this._parent.app && this._parent.app.tags._index && this._parent.app.tags._index.id && this._parent.app.tags._index.id[this.tags_id]) ? this._parent.app.tags._index.id[this.tags_id].name : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Distribution.prototype, "tagDriverName", {
        get: function () {
            return (this._parent.app && this._parent.app.tags._index && this._parent.app.tags._index.id && this._parent.app.tags._index.id[this.tags_id]) ? this._parent.app.tags._index.id[this.tags_id].driverName : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Distribution.prototype, "tagDriverId", {
        get: function () {
            return (this._parent.app && this._parent.app.tags._index && this._parent.app.tags._index.id && this._parent.app.tags._index.id[this.tags_id]) ? this._parent.app.tags._index.id[this.tags_id].drivers_id : '';
        },
        enumerable: true,
        configurable: true
    });
    Distribution.ctorParameters = function () { return [
        null,
        null
    ]; };
    Distribution = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], Distribution);
    return Distribution;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["Item"]));

var DistributionService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DistributionService, _super);
    function DistributionService(api) {
        var _this = _super.call(this, api) || this;
        _this.api = api;
        _this._itemType = 'distributions';
        return _this;
    }
    DistributionService.prototype.create = function (item_, parent) {
        return new Distribution(item_, parent);
    };
    DistributionService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] }
    ]; };
    return DistributionService;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"]));



/***/ }),

/***/ "./src/app/services/distributions.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/distributions.service.ts ***!
  \***************************************************/
/*! exports provided: DistributionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistributionsService", function() { return DistributionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_distribution_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/distribution.service */ "./src/app/services/distribution.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/items.service */ "./src/app/services/items.service.ts");





var DistributionsService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DistributionsService, _super);
    function DistributionsService(api, distributionService) {
        var _this = _super.call(this, api, distributionService) || this;
        _this.api = api;
        _this.distributionService = distributionService;
        return _this;
    }
    DistributionsService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] },
        { type: _services_distribution_service__WEBPACK_IMPORTED_MODULE_2__["DistributionService"] }
    ]; };
    DistributionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], DistributionsService);
    return DistributionsService;
}(_services_items_service__WEBPACK_IMPORTED_MODULE_4__["ItemsService"]));



/***/ }),

/***/ "./src/app/services/event.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/event.service.ts ***!
  \*******************************************/
/*! exports provided: Event, EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");




var Event = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Event, _super);
    function Event(item_, _parent) {
        var _this = _super.call(this, item_, _parent) || this;
        _this._parent = _parent;
        return _this;
    }
    Object.defineProperty(Event.prototype, "competitor", {
        get: function () {
            return (this.competitorId && this._parent.app && this._parent.app.competitors._index && this._parent.app.competitors._index.id && this._parent.app.competitors._index.id[this.competitorId]) ? this._parent.app.competitors._index.id[this.competitorId] : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "competitorName", {
        get: function () {
            return this.competitor ? this.competitor.fullName : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "competitorNum", {
        get: function () {
            return this.competitor ? this.competitor.num : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "competitorNameNum", {
        get: function () {
            return this.competitor ? this.competitor.fullNameNum : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "categoryName", {
        get: function () {
            return this.competitor ? this.competitor.categoryName : '';
        },
        enumerable: true,
        configurable: true
    });
    Event.ctorParameters = function () { return [
        null,
        null
    ]; };
    Event = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], Event);
    return Event;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["Item"]));

var EventService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EventService, _super);
    function EventService(api) {
        var _this = _super.call(this, api) || this;
        _this.api = api;
        _this._itemType = 'events';
        _this.eventTypes = ['', 'lap', 'start', 'finish'];
        return _this;
    }
    EventService.prototype.create = function (item_, parent) {
        return new Event(item_, parent);
    };
    EventService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] }
    ]; };
    return EventService;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"]));



/***/ }),

/***/ "./src/app/services/events.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/events.service.ts ***!
  \********************************************/
/*! exports provided: EventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsService", function() { return EventsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/items.service */ "./src/app/services/items.service.ts");





var EventsService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EventsService, _super);
    function EventsService(api, eventService) {
        var _this = _super.call(this, api, eventService) || this;
        _this.api = api;
        _this.eventService = eventService;
        return _this;
    }
    EventsService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] },
        { type: _services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"] }
    ]; };
    EventsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], EventsService);
    return EventsService;
}(_services_items_service__WEBPACK_IMPORTED_MODULE_4__["ItemsService"]));



/***/ }),

/***/ "./src/app/services/go.service.ts":
/*!****************************************!*\
  !*** ./src/app/services/go.service.ts ***!
  \****************************************/
/*! exports provided: GoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoService", function() { return GoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/events.service */ "./src/app/services/events.service.ts");



var GoService = /** @class */ (function () {
    function GoService(events) {
        var _this = this;
        this.events = events;
        this.race = null;
        this.t = (new Date()).getTime();
        this.tIntervalId = 0;
        this.start = null;
        this.finish = null;
        this.raceEvents = null;
        this.tIntervalId = setInterval(function () {
            _this.t = (new Date()).getTime();
        }, 10);
    }
    GoService.prototype.get = function () {
        var _this = this;
        this.raceEvents = this.events.items.filter(function (item) { return 1 * item.raceId === 1 * _this.race.id; }).sort(function (a, b) { return (a.t - b.t); });
        var compLaps = {};
        var compLapsT = {};
        this.raceEvents.forEach(function (item) {
            if (item.eventType === 2) {
                _this.start = item;
            }
            if (item.eventType === 3) {
                _this.finish = item;
            }
            if (item.eventType === 1 && item.competitorId) {
                if (!compLaps[item.competitorId])
                    compLaps[item.competitorId] = 0;
                compLaps[item.competitorId]++;
                item._lap = compLaps[item.competitorId];
                if (!compLapsT[item.competitorId] && _this.start) {
                    item._lapT = item.t - _this.start.t;
                }
                else {
                    item._lapT = item.t - compLapsT[item.competitorId];
                }
                compLapsT[item.competitorId] = item.t;
            }
        });
        this.raceEvents = this.raceEvents.sort(function (a, b) { return (b.t - a.t); });
    };
    GoService.prototype.reset = function () {
        this.race = null;
        this.start = null;
        this.finish = null;
        this.raceEvents = null;
    };
    GoService.ctorParameters = function () { return [
        { type: _services_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"] }
    ]; };
    GoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], GoService);
    return GoService;
}());



/***/ }),

/***/ "./src/app/services/hwtype.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/hwtype.service.ts ***!
  \********************************************/
/*! exports provided: HWType, HWTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HWType", function() { return HWType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HWTypeService", function() { return HWTypeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");




var HWType = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HWType, _super);
    function HWType(item_, _parent) {
        var _this = _super.call(this, item_, _parent) || this;
        _this._parent = _parent;
        return _this;
    }
    HWType.ctorParameters = function () { return [
        null,
        null
    ]; };
    HWType = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], HWType);
    return HWType;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["Item"]));

var HWTypeService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HWTypeService, _super);
    function HWTypeService(api) {
        var _this = _super.call(this, api) || this;
        _this.api = api;
        _this._itemType = 'hw_types';
        return _this;
    }
    HWTypeService.prototype.create = function (item_, parent) {
        return new HWType(item_, parent);
    };
    HWTypeService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] }
    ]; };
    return HWTypeService;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"]));



/***/ }),

/***/ "./src/app/services/hwtypes.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/hwtypes.service.ts ***!
  \*********************************************/
/*! exports provided: HWTypesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HWTypesService", function() { return HWTypesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_hwtype_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/hwtype.service */ "./src/app/services/hwtype.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/items.service */ "./src/app/services/items.service.ts");





var HWTypesService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HWTypesService, _super);
    function HWTypesService(api, hwtypeService) {
        var _this = _super.call(this, api, hwtypeService) || this;
        _this.api = api;
        _this.hwtypeService = hwtypeService;
        return _this;
    }
    HWTypesService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] },
        { type: _services_hwtype_service__WEBPACK_IMPORTED_MODULE_2__["HWTypeService"] }
    ]; };
    HWTypesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], HWTypesService);
    return HWTypesService;
}(_services_items_service__WEBPACK_IMPORTED_MODULE_4__["ItemsService"]));



/***/ }),

/***/ "./src/app/services/item.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/item.service.ts ***!
  \******************************************/
/*! exports provided: Item, ItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");





var Item = /** @class */ (function () {
    function Item(item_, _parent) {
        this._parent = _parent;
        this._bckp = {};
        this._ready = this._parent._itemService.ready;
        for (var key in item_) {
            this[key] = item_[key];
            this._bckp[key] = item_[key];
        }
    }
    Item.prototype.get = function () {
        return this._parent._itemService.get(this);
    };
    Item.prototype.set = function (propName, value) {
        var _this = this;
        return this._parent.set(this, propName, value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) { _this._bckp[propName] = res[propName]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this; }));
    };
    Item.prototype.save = function (params) {
        return this._parent._itemService.save(this);
    };
    Item.prototype.del = function () {
        var _this = this;
        return this._parent._itemService.del(this)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) { if (res.deleted)
            _this._parent._itemService.toTrash(_this); }));
    };
    Item.prototype.restore = function () {
        var _this = this;
        return this._parent._itemService.restore(this)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) { if (res.restored)
            _this._parent._itemService.fromTrash(_this); }));
    };
    Object.defineProperty(Item.prototype, "values", {
        get: function () {
            var _this = this;
            var values = {};
            Object.keys(this).forEach(function (key) {
                if (key[0] !== '_' && key !== 'values') {
                    values[String(key)] = _this[key];
                }
            });
            return values;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "itemType", {
        get: function () {
            return this._parent._itemService._itemType;
        },
        enumerable: true,
        configurable: true
    });
    Item.ctorParameters = function () { return [
        null,
        null
    ]; };
    Item = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], Item);
    return Item;
}());

var ItemService = /** @class */ (function () {
    function ItemService(api) {
        this.api = api;
        this._itemType = 'item';
        this.ready = false;
    }
    ItemService.prototype.create = function (item_, parent) {
        console.error('Item.create() must be overridden');
        return new Item(item_, parent);
    };
    ItemService.prototype.get = function (item) {
        var _this = this;
        var _params;
        this.ready = false;
        if (item.id)
            _params = { "id": item.id };
        return this.api.request('GET', this._itemType + '/' + item.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) { if (!res.item)
            throw Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Item (' + _this._itemType + ') with id: ' + _params.id + ' not found'); }), 
        //map((res:any)=>res.item)
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            _this.ready = true;
            return _this.create(res.item, item._parent);
        }));
    };
    ItemService.prototype.save = function (item) {
        return this.api.request('PUT', this._itemType + '/' + item.id, item.values);
    };
    ItemService.prototype.del = function (item) {
        return this.api.request('DELETE', this._itemType + '/' + item.id);
    };
    ItemService.prototype.restore = function (item) {
        return this.api.request('POST', this._itemType + '/' + item.id);
    };
    ItemService.prototype.toTrash = function (item) {
        item._parent.trash.push(item);
    };
    ItemService.prototype.fromTrash = function (item) {
        var index = item._parent.trash.indexOf(item);
        if (index < 0) {
            for (var key in item._parent.trash) {
                var trashItem = item._parent.trash[key];
                if (trashItem.id === item.id) {
                    index = key;
                    break;
                }
            }
        }
        if (index !== -1)
            item._parent.trash.splice(index, 1);
    };
    ItemService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"] }
    ]; };
    return ItemService;
}());



/***/ }),

/***/ "./src/app/services/items.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/items.service.ts ***!
  \*******************************************/
/*! exports provided: ItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsService", function() { return ItemsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _classes_indexable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../classes/indexable */ "./src/app/classes/indexable.ts");







var ItemsService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ItemsService, _super);
    function ItemsService(api, _itemService) {
        var _this = _super.call(this) || this;
        _this.api = api;
        _this._itemService = _itemService;
        _this._indexableProps = ['id', 'name'];
        _this.ready = false;
        _this.r = {};
        _this.app = null;
        _this.trash = [];
        _this.itemType = 'items';
        _this.itemType = _this._itemService._itemType;
        _this.createEventHandler();
        return _this;
    }
    Object.defineProperty(ItemsService.prototype, "itemTypeId", {
        get: function () {
            var _this = this;
            return Object.keys(this.app.ref.object_types).reduce(function (obj, key) { obj[_this.app.ref.object_types[key]] = key; return obj; }, {})[this.itemType];
        },
        enumerable: true,
        configurable: true
    });
    ItemsService.prototype.get = function (params) {
        var _this = this;
        this.ready = false;
        var stringParams = '';
        if (params && typeof (params) === 'object') {
            for (var key in params) {
                stringParams += '/' + params[key];
            }
        }
        return this.api.request('GET', this._itemService._itemType + stringParams)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            if (res.error) {
                throw new Error();
            }
            else {
                return res;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (err) { return err.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(2)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            if (res.items !== undefined)
                _this.clearItems();
            for (var key in res.items) {
                var item = _this._itemService.create(res.items[key], _this);
                _this.items.push(item);
            }
            _this.ready = true;
            return _this.items;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (items) { return _this.createIndex(items); }));
    };
    ItemsService.prototype.add = function (newItem) {
        var _this = this;
        this.ready = false;
        return this.api.request('POST', this._itemService._itemType, newItem)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { _this.ready = true; }));
    };
    ItemsService.prototype.addMultiple = function (newItems) {
        var _this = this;
        this.ready = false;
        return this.api.request('POST', this._itemService._itemType + '/multiple', newItems)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { _this.ready = true; }));
    };
    ItemsService.prototype.clearItems = function () {
        this.items = [];
    };
    ItemsService.prototype.clear = function () {
        return this.api.request('DELETE', this._itemService._itemType);
    };
    ItemsService.prototype.createEventHandler = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'appEvent')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return 1 * event.detail.tp === 1 * _this.itemTypeId; }))
            .subscribe(function (event) {
            if (event.detail) {
                if (event.detail.a === 1 || event.detail.a === 4) { // add or restore
                    if (event.detail.id) {
                        if (!_this._index.id[event.detail.id]) {
                            var _item = _this._itemService.create({ id: event.detail.id }, _this);
                            _this._itemService.get(_item)
                                .subscribe(function (item) {
                                if (item) {
                                    item._added = true;
                                    _this.items.push(item);
                                    _this.createIndex(_this.items);
                                }
                            });
                        }
                    }
                }
                else if (event.detail.a === 2 || event.detail.a === 5 || event.detail.a === 6) { // modify | block | unblock
                    if (event.detail.id && _this._index.id[event.detail.id]) {
                        var item = _this._index.id[event.detail.id];
                        if (event.detail.d) {
                            for (var key in event.detail.d) {
                                item[key] = event.detail.d[key];
                            }
                            _this.createIndex(_this.items);
                        }
                    }
                }
                else if (event.detail.a === 3) { // delete
                    if (event.detail.id && _this._index.id[event.detail.id]) {
                        var item = _this._index.id[event.detail.id];
                        var key = _this.items.indexOf(item);
                        if (key > -1) {
                            _this.items.splice(key, 1);
                            _this.createIndex(_this.items);
                        }
                    }
                }
            }
        });
    };
    ItemsService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"] },
        { type: _services_item_service__WEBPACK_IMPORTED_MODULE_5__["ItemService"] }
    ]; };
    ItemsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ItemsService);
    return ItemsService;
}(_classes_indexable__WEBPACK_IMPORTED_MODULE_6__["Indexable"]));



/***/ }),

/***/ "./src/app/services/log-item.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/log-item.service.ts ***!
  \**********************************************/
/*! exports provided: LogItem, LogItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogItem", function() { return LogItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogItemService", function() { return LogItemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");




var LogItem = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LogItem, _super);
    function LogItem(item_, _parent) {
        var _this = _super.call(this, item_, _parent) || this;
        _this._parent = _parent;
        return _this;
    }
    Object.defineProperty(LogItem.prototype, "userName", {
        get: function () {
            return (this._parent.app && this._parent.app.users._index && this._parent.app.users._index.id && this._parent.app.users._index.id[this.users_id]) ? this._parent.app.users._index.id[this.users_id].name : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogItem.prototype, "objectTypeName", {
        get: function () {
            return this.object_type && this._parent.app.ref.object_types[this.object_type];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogItem.prototype, "objectName", {
        get: function () {
            if (!this._parent.app)
                return;
            var type = this.objectTypeName;
            if (type && this._parent.app[type] && this._parent.app[type]._index && this._parent.app[type]._index.id && this._parent.app[type]._index.id[this.object_id]) {
                return '7';
                var item = this._parent.app[type]._index.id[this.object_id];
                if (item.name)
                    return item.name;
            }
            return;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogItem.prototype, "actionTypeName", {
        get: function () {
            return this.action_type && this._parent.app.ref.action_types[this.action_type];
        },
        enumerable: true,
        configurable: true
    });
    LogItem.ctorParameters = function () { return [
        null,
        null
    ]; };
    LogItem = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LogItem);
    return LogItem;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["Item"]));

var LogItemService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LogItemService, _super);
    function LogItemService(api) {
        var _this = _super.call(this, api) || this;
        _this.api = api;
        _this._itemType = 'log';
        return _this;
    }
    LogItemService.prototype.create = function (item_, parent) {
        return new LogItem(item_, parent);
    };
    LogItemService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] }
    ]; };
    return LogItemService;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"]));



/***/ }),

/***/ "./src/app/services/log.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/log.service.ts ***!
  \*****************************************/
/*! exports provided: LogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogService", function() { return LogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_log_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/log-item.service */ "./src/app/services/log-item.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/items.service */ "./src/app/services/items.service.ts");





var LogService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LogService, _super);
    function LogService(api, logItemService) {
        var _this = _super.call(this, api, logItemService) || this;
        _this.api = api;
        _this.logItemService = logItemService;
        _this.app = null;
        return _this;
    }
    LogService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] },
        { type: _services_log_item_service__WEBPACK_IMPORTED_MODULE_2__["LogItemService"] }
    ]; };
    LogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LogService);
    return LogService;
}(_services_items_service__WEBPACK_IMPORTED_MODULE_4__["ItemsService"]));



/***/ }),

/***/ "./src/app/services/lstorage.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/lstorage.service.ts ***!
  \**********************************************/
/*! exports provided: LStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LStorageService", function() { return LStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");



var LStorageService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LStorageService, _super);
    function LStorageService() {
        return _super.call(this, localStorage) || this;
    }
    LStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LStorageService);
    return LStorageService;
}(_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]));



/***/ }),

/***/ "./src/app/services/messages.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/messages.service.ts ***!
  \**********************************************/
/*! exports provided: Message, MessagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesService", function() { return MessagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_units_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/units.service */ "./src/app/services/units.service.ts");





var Message = /** @class */ (function () {
    function Message(item_, parent) {
        for (var key in item_) {
            this[key] = item_[key];
        }
    }
    Message.ctorParameters = function () { return [
        null,
        null
    ]; };
    Message = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], Message);
    return Message;
}());

var MessagesService = /** @class */ (function () {
    function MessagesService(api, units) {
        this.api = api;
        this.units = units;
        this.waiting = false;
        this.items = [];
    }
    MessagesService.prototype.get = function (params) {
        var _this = this;
        params = {
            imei: this.units._index.id[params.units_id].uid,
            units_id: params.units_id,
            service: params.service,
        };
        this.waiting = true;
        var stringParams = '';
        if (params && typeof (params) === 'object') {
            for (var key in params) {
                stringParams += '/' + params[key];
            }
        }
        return this.api.request('GET', 'messages' + stringParams)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
            if (res.items !== undefined)
                _this.clearItems();
            for (var key in res.items) {
                var item = new Message(res.items[key], _this);
                _this.items.push(item);
            }
            _this.waiting = false;
        }));
    };
    MessagesService.prototype.clearItems = function () {
        this.items = [];
    };
    MessagesService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] },
        { type: _services_units_service__WEBPACK_IMPORTED_MODULE_4__["UnitsService"] }
    ]; };
    return MessagesService;
}());



/***/ }),

/***/ "./src/app/services/race.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/race.service.ts ***!
  \******************************************/
/*! exports provided: Race, RaceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Race", function() { return Race; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaceService", function() { return RaceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");




var Race = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Race, _super);
    function Race(item_, _parent) {
        var _this = _super.call(this, item_, _parent) || this;
        _this._parent = _parent;
        return _this;
    }
    Race.ctorParameters = function () { return [
        null,
        null
    ]; };
    Race = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], Race);
    return Race;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["Item"]));

var RaceService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RaceService, _super);
    function RaceService(api) {
        var _this = _super.call(this, api) || this;
        _this.api = api;
        _this._itemType = 'races';
        return _this;
    }
    RaceService.prototype.create = function (item_, parent) {
        return new Race(item_, parent);
    };
    RaceService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] }
    ]; };
    return RaceService;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"]));



/***/ }),

/***/ "./src/app/services/races.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/races.service.ts ***!
  \*******************************************/
/*! exports provided: RacesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RacesService", function() { return RacesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_race_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/race.service */ "./src/app/services/race.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/items.service */ "./src/app/services/items.service.ts");





var RacesService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RacesService, _super);
    function RacesService(api, raceService) {
        var _this = _super.call(this, api, raceService) || this;
        _this.api = api;
        _this.raceService = raceService;
        return _this;
    }
    RacesService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] },
        { type: _services_race_service__WEBPACK_IMPORTED_MODULE_2__["RaceService"] }
    ]; };
    RacesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], RacesService);
    return RacesService;
}(_services_items_service__WEBPACK_IMPORTED_MODULE_4__["ItemsService"]));



/***/ }),

/***/ "./src/app/services/reciever.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/reciever.service.ts ***!
  \**********************************************/
/*! exports provided: Reciever, RecieverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reciever", function() { return Reciever; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecieverService", function() { return RecieverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");




var Reciever = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Reciever, _super);
    function Reciever(item_, _parent) {
        var _this = _super.call(this, item_, _parent) || this;
        _this._parent = _parent;
        return _this;
    }
    Object.defineProperty(Reciever.prototype, "name", {
        get: function () {
            return '#' + this.id + ' ' + this.unitNm;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reciever.prototype, "unitNm", {
        get: function () {
            return (this._parent.app && this._parent.app.units._index && this._parent.app.units._index.id && this._parent.app.units._index.id[this.units_id]) ? this._parent.app.units._index.id[this.units_id].nm : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reciever.prototype, "unitHw", {
        get: function () {
            return (this._parent.app && this._parent.app.units._index && this._parent.app.units._index.id && this._parent.app.units._index.id[this.units_id]) ? this._parent.app.units._index.id[this.units_id].hw : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reciever.prototype, "unitHwName", {
        get: function () {
            return (this._parent.app && this._parent.app.units._index && this._parent.app.units._index.id && this._parent.app.units._index.id[this.units_id]) ? this._parent.app.units._index.id[this.units_id].hwName : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reciever.prototype, "unitUid", {
        get: function () {
            return (this._parent.app && this._parent.app.units._index && this._parent.app.units._index.id && this._parent.app.units._index.id[this.units_id]) ? this._parent.app.units._index.id[this.units_id].uid : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reciever.prototype, "tagNums", {
        get: function () {
            var _this = this;
            return this.tags.map(function (id) { return (_this._parent.app && _this._parent.app.tags._index && _this._parent.app.tags._index.id && _this._parent.app.tags._index.id[id]) ? _this._parent.app.tags._index.id[id].num : ''; }).toString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reciever.prototype, "shortTagNums", {
        get: function () {
            return this.tags.map(function (id) { return ('#' + id); }).toString();
        },
        enumerable: true,
        configurable: true
    });
    Reciever.ctorParameters = function () { return [
        null,
        null
    ]; };
    Reciever = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], Reciever);
    return Reciever;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["Item"]));

var RecieverService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RecieverService, _super);
    function RecieverService(api) {
        var _this = _super.call(this, api) || this;
        _this.api = api;
        _this._itemType = 'recievers';
        return _this;
    }
    RecieverService.prototype.create = function (item_, parent) {
        return new Reciever(item_, parent);
    };
    RecieverService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] }
    ]; };
    return RecieverService;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"]));



/***/ }),

/***/ "./src/app/services/recievers.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/recievers.service.ts ***!
  \***********************************************/
/*! exports provided: RecieversService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecieversService", function() { return RecieversService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_reciever_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/reciever.service */ "./src/app/services/reciever.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/items.service */ "./src/app/services/items.service.ts");





var RecieversService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RecieversService, _super);
    function RecieversService(api, recieverService) {
        var _this = _super.call(this, api, recieverService) || this;
        _this.api = api;
        _this.recieverService = recieverService;
        _this.app = null;
        return _this;
    }
    RecieversService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] },
        { type: _services_reciever_service__WEBPACK_IMPORTED_MODULE_2__["RecieverService"] }
    ]; };
    RecieversService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], RecieversService);
    return RecieversService;
}(_services_items_service__WEBPACK_IMPORTED_MODULE_4__["ItemsService"]));



/***/ }),

/***/ "./src/app/services/reference.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/reference.service.ts ***!
  \***********************************************/
/*! exports provided: ReferenceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferenceService", function() { return ReferenceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReferenceService = /** @class */ (function () {
    function ReferenceService() {
    }
    ReferenceService.prototype.set = function (data) {
        for (var key in data) {
            this[key] = data[key];
        }
    };
    ReferenceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ReferenceService);
    return ReferenceService;
}());



/***/ }),

/***/ "./src/app/services/rtqueue-item.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/rtqueue-item.service.ts ***!
  \**************************************************/
/*! exports provided: RTQueueItem, RTQueueItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTQueueItem", function() { return RTQueueItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTQueueItemService", function() { return RTQueueItemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");




var RTQueueItem = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RTQueueItem, _super);
    function RTQueueItem(item_, _parent) {
        var _this = _super.call(this, item_, _parent) || this;
        _this._parent = _parent;
        return _this;
    }
    Object.defineProperty(RTQueueItem.prototype, "userName", {
        get: function () {
            return (this._parent.app && this._parent.app.users._index && this._parent.app.users._index.id && this._parent.app.users._index.id[this.users_id]) ? this._parent.app.users._index.id[this.users_id].name : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RTQueueItem.prototype, "unitNm", {
        get: function () {
            return (this._parent.app && this._parent.app.units._index && this._parent.app.units._index.id && this._parent.app.units._index.id[this.units_id]) ? this._parent.app.units._index.id[this.units_id].nm : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RTQueueItem.prototype, "recieverName", {
        get: function () {
            return (this._parent.app && this._parent.app.recievers._index && this._parent.app.recievers._index.id && this._parent.app.recievers._index.id[this.recievers_id]) ? this._parent.app.recievers._index.id[this.recievers_id].name : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RTQueueItem.prototype, "tagName", {
        get: function () {
            return (this._parent.app && this._parent.app.tags._index && this._parent.app.tags._index.id && this._parent.app.tags._index.id[this.tags_id]) ? this._parent.app.tags._index.id[this.tags_id].name : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RTQueueItem.prototype, "typeName", {
        get: function () {
            return this.type && this._parent.app && this._parent.app.ref && this._parent.app.ref.rtqueue_types[this.type];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RTQueueItem.prototype, "statusName", {
        get: function () {
            return this.status && this._parent.app && this._parent.app.ref && this._parent.app.ref.rtqueue_statuses[this.status];
        },
        enumerable: true,
        configurable: true
    });
    RTQueueItem.prototype.retry = function () {
        return this._parent._itemService.retry(this);
    };
    RTQueueItem.prototype.setStatus = function () {
        return this._parent._itemService.setStatus(this);
    };
    RTQueueItem.ctorParameters = function () { return [
        null,
        null
    ]; };
    RTQueueItem = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], RTQueueItem);
    return RTQueueItem;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["Item"]));

var RTQueueItemService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RTQueueItemService, _super);
    function RTQueueItemService(api) {
        var _this = _super.call(this, api) || this;
        _this.api = api;
        _this._itemType = 'rtqueue';
        return _this;
    }
    RTQueueItemService.prototype.create = function (item_, parent) {
        return new RTQueueItem(item_, parent);
    };
    RTQueueItemService.prototype.retry = function (item, params) {
        return this.api.request('PUT', 'rtqueue/' + item.id + '/retry');
    };
    RTQueueItemService.prototype.setStatus = function (item, params) {
        return this.api.request('PUT', 'rtqueue/' + item.id + '/setstatus', params);
    };
    RTQueueItemService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] }
    ]; };
    return RTQueueItemService;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"]));



/***/ }),

/***/ "./src/app/services/rtqueue.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/rtqueue.service.ts ***!
  \*********************************************/
/*! exports provided: RTQueueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTQueueService", function() { return RTQueueService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_rtqueue_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/rtqueue-item.service */ "./src/app/services/rtqueue-item.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/items.service */ "./src/app/services/items.service.ts");





var RTQueueService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RTQueueService, _super);
    function RTQueueService(api, rtqueueItemService) {
        var _this = _super.call(this, api, rtqueueItemService) || this;
        _this.api = api;
        _this.rtqueueItemService = rtqueueItemService;
        _this.app = null;
        _this._indexableProps = ['id', 'name', 'tags_id'];
        return _this;
    }
    RTQueueService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] },
        { type: _services_rtqueue_item_service__WEBPACK_IMPORTED_MODULE_2__["RTQueueItemService"] }
    ]; };
    RTQueueService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], RTQueueService);
    return RTQueueService;
}(_services_items_service__WEBPACK_IMPORTED_MODULE_4__["ItemsService"]));



/***/ }),

/***/ "./src/app/services/settings.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/settings.service.ts ***!
  \**********************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");



var SettingsService = /** @class */ (function () {
    function SettingsService(api) {
        this.api = api;
    }
    SettingsService.prototype.set = function (data) {
        this.items = data;
    };
    SettingsService.prototype.save = function () {
        return this.api.request('PUT', 'settings', this.items);
    };
    SettingsService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"] }
    ]; };
    SettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "./src/app/services/state.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/state.service.ts ***!
  \*******************************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StateService = /** @class */ (function () {
    function StateService() {
        this.default = {
            filter: {
                name: '',
            },
            limit: 10
        };
        this.items = {
            go: {
                eventsFilter: {
                    competitorNameNum: '',
                    categoryName: '',
                    _lap: '',
                },
                eventsTimeScale: 10000,
                eventsLimit: 20,
                filter: {
                    competitorName: ''
                }
            },
            users: {
                filter: {
                    name: '',
                    email: '',
                },
                limit: 1 * this.default.limit
            },
            recievers: {
                filter: {
                    name: '',
                    unitHwName: '',
                    unitUid: '',
                    tagNums: '',
                },
                limit: 1 * this.default.limit
            },
            competitors: {
                filter: {
                    //accountId: '',
                    regDate: '',
                    num: '',
                    fullName: '',
                    birdthDate: '',
                    categoryName: '',
                    team: '',
                    desc: '',
                },
                limit: 1 * this.default.limit
            },
            races: {
                filter: {
                    //accountId: '',
                    name: '',
                    from: '',
                    to: '',
                },
                limit: 1 * this.default.limit
            },
            tags: {
                filter: {
                    num: '',
                    unitNm: '',
                    driverName: '',
                    total_limit: '',
                    day_limit: '',
                    total_balance: '',
                    day_balance: '',
                    recieverUnitNames: '',
                },
                limit: 1 * this.default.limit
            },
            log: {
                filter: {
                    userName: '',
                    ip: '',
                    usessions_id: '',
                    objectTypeName: '',
                    object_name: '',
                    actionTypeName: '',
                },
                limit: 1 * this.default.limit
            },
            distributions: {
                filter: {
                    dt: '',
                    recieverName: '',
                    tagName: '',
                    tagDriverName: '',
                    amount: '',
                    total_limit: '',
                    day_limit: '',
                    total_balance: '',
                    day_balance: '',
                },
                limit: 1 * this.default.limit
            },
            rtqueue: {
                filter: {
                    typeName: '',
                    recieverName: '',
                    unitNm: '',
                    units_imei: '',
                    tagName: '',
                    tags_num: '',
                    value: '',
                    userName: '',
                    statusName: '',
                    try: '',
                    try_limit: '',
                },
                limit: 1 * this.default.limit
            },
        };
    }
    StateService.prototype.createDefaults = function (types) {
        this.types = types;
        for (var key in this.types) {
            var type = this.types[key];
            if (!this.items[type]) {
                this.items[type] = JSON.parse(JSON.stringify(this.default));
            }
        }
    };
    StateService.prototype.resetFilter = function (type) {
        for (var key in this.items[type].filter) {
            this.items[type].filter[key] = '';
        }
    };
    StateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], StateService);
    return StateService;
}());



/***/ }),

/***/ "./src/app/services/storage.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StorageService = /** @class */ (function () {
    function StorageService(storage) {
        this._storage = null;
        this._prefixKey = 'rl';
        this._storage = storage;
    }
    StorageService.prototype.get = function (key) {
        var value = this._storage.getItem(this._prefixKey + '.' + key);
        try {
            value = JSON.parse(value);
        }
        catch (e) {
            return value;
        }
        return value;
    };
    StorageService.prototype.set = function (key, value) {
        if (typeof value === 'object')
            value = JSON.stringify(value);
        return this._storage.setItem(this._prefixKey + '.' + key, value);
    };
    StorageService.prototype.remove = function (key) {
        this._storage.removeItem(this._prefixKey + '.' + key);
    };
    StorageService.ctorParameters = function () { return [
        { type: Storage }
    ]; };
    StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/app/services/tag.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/tag.service.ts ***!
  \*****************************************/
/*! exports provided: Tag, TagService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return Tag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagService", function() { return TagService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");




var Tag = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Tag, _super);
    function Tag(item_, _parent) {
        var _this = _super.call(this, item_, _parent) || this;
        _this._parent = _parent;
        return _this;
    }
    Tag.prototype.sendCommand = function () {
        return this._parent._itemService.sendCommand(this);
    };
    Tag.prototype.getUnits = function () {
        return this._parent.getUnits(this);
    };
    Object.defineProperty(Tag.prototype, "name", {
        get: function () {
            return '#' + this.id + ' ' + this.num + (this.unitNm && (' : ' + this.unitNm));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tag.prototype, "fullNname", {
        get: function () {
            return '#' + this.id + ' : ' + this.num + (this.unitNm ? (' : ' + this.unitNm) : '') + (this.driverName ? (' : ' + this.driverName) : '');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tag.prototype, "unitNm", {
        get: function () {
            return (this._parent.app && this._parent.app.units._index && this._parent.app.units._index.id && this._parent.app.units._index.id[this.units_id]) ? this._parent.app.units._index.id[this.units_id].nm : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tag.prototype, "driverName", {
        get: function () {
            return (this._parent.app && this._parent.app.drivers._index && this._parent.app.drivers._index.id && this._parent.app.drivers._index.id[this.drivers_id]) ? this._parent.app.drivers._index.id[this.drivers_id].shortName : '';
        },
        enumerable: true,
        configurable: true
    });
    Tag.prototype.save = function (params) {
        return this._parent._itemService.save(this, params);
    };
    Tag.prototype.changeTagValue = function (params) {
        return this._parent._itemService.changeTagValue(this, params);
    };
    Object.defineProperty(Tag.prototype, "recieverUnitNames", {
        get: function () {
            var _this = this;
            return this.recievers.map(function (id) { return (_this._parent.app && _this._parent.app.recievers._index && _this._parent.app.recievers._index.id && _this._parent.app.recievers._index.id[id]) ? _this._parent.app.recievers._index.id[id].unitNm : ''; }).toString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tag.prototype, "recieverUnitNamesArray", {
        get: function () {
            var _this = this;
            return this.recievers.map(function (id) { return (_this._parent.app && _this._parent.app.recievers._index && _this._parent.app.recievers._index.id && _this._parent.app.recievers._index.id[id]) ? _this._parent.app.recievers._index.id[id].unitNm : ''; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tag.prototype, "shortRecieverUnitNames", {
        get: function () {
            return this.recievers.map(function (id) { return ('#' + id); }).toString();
        },
        enumerable: true,
        configurable: true
    });
    Tag.ctorParameters = function () { return [
        null,
        null
    ]; };
    Tag = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], Tag);
    return Tag;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["Item"]));

var TagService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TagService, _super);
    function TagService(api) {
        var _this = _super.call(this, api) || this;
        _this.api = api;
        _this._itemType = 'tags';
        return _this;
    }
    TagService.prototype.create = function (item_, parent) {
        return new Tag(item_, parent);
    };
    TagService.prototype.save = function (item, params) {
        //return this.api.request('PUT', this._itemType+'/'+item.id+(params&&params.commandService?('/'+params.commandService):''), item.values);
        return this.api.request('PUT', this._itemType + '/' + item.id, item.values);
    };
    TagService.prototype.changeTagValue = function (item, params) {
        return this.api.request('PUT', this._itemType + '/' + item.id + '/' + params.type, params.newValue);
    };
    TagService.prototype.sendCommand = function (item) {
        return this.api.request('PATCH', this._itemType + '/' + item.id, {
            num: item.num,
            units_id: item.units_id,
            total_limit: item.total_limit,
            day_limit: item.day_limit,
        });
    };
    TagService.prototype.getUnits = function (item) {
        return this.api.request('GET', 'units');
    };
    TagService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] }
    ]; };
    return TagService;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"]));



/***/ }),

/***/ "./src/app/services/tags.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/tags.service.ts ***!
  \******************************************/
/*! exports provided: TagsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsService", function() { return TagsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tag_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/tag.service */ "./src/app/services/tag.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/items.service */ "./src/app/services/items.service.ts");





var TagsService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TagsService, _super);
    function TagsService(api, tagService) {
        var _this = _super.call(this, api, tagService) || this;
        _this.api = api;
        _this.tagService = tagService;
        _this.app = null;
        return _this;
    }
    TagsService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] },
        { type: _services_tag_service__WEBPACK_IMPORTED_MODULE_2__["TagService"] }
    ]; };
    TagsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], TagsService);
    return TagsService;
}(_services_items_service__WEBPACK_IMPORTED_MODULE_4__["ItemsService"]));



/***/ }),

/***/ "./src/app/services/test.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/test.service.ts ***!
  \******************************************/
/*! exports provided: TestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestService", function() { return TestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");






var TestService = /** @class */ (function () {
    function TestService(httpClient, api) {
        this.httpClient = httpClient;
        this.api = api;
        this.apiUrl = 'http://62.76.187.239/wialon_last_req.php';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this.delay = 1000;
        this.N = 10;
    }
    TestService.prototype.request = function (type, url, svc, params) {
        if (!url)
            url = this.apiUrl;
        if (svc)
            url = this.apiUrl + svc;
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (params)
            httpParams = httpParams.set('params', JSON.stringify(params));
        var body = httpParams.toString().replace('+', '%2b');
        return this.httpClient.request(type, url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    TestService.prototype.getLastWialonRequest = function () {
        return this.request('GET', 'http://62.76.187.239/wialon_last_req.php');
    };
    TestService.prototype.sendLastWialonRequest = function (data) {
        return this.api.request('POST', 'distributions', data);
    };
    TestService.prototype.LastWialonRequest = function () {
        var _this = this;
        return this.getLastWialonRequest()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) { console.log('last wialon Event request', res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (wialonEventData) { return _this.sendLastWialonRequest(wialonEventData); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) { console.log('Api response from /distributions', res); }));
    };
    TestService.prototype.sendCommand = function (imei, unitID, commandText, commandsService) {
        return this.api.request('POST', 'command', {
            imei: imei,
            unit_id: unitID,
            command_text: commandText,
            commands_service: commandsService
        });
    };
    TestService.prototype.getCommandsMessages = function (imei, unitID, commandsService) {
        return this.api.request('GET', 'command/' + imei + '/' + unitID + '/' + commandsService + '/');
    };
    TestService.prototype.testLimit = function (i) {
        var _this = this;
        if (i === void 0) { i = 0; }
        this.api.request('GET', 'hw_types').subscribe(function (res) {
            console.log(i, res);
            i++;
            if (i <= _this.N) {
                setTimeout(function (_) { _this.testLimit(i); }, _this.delay);
            }
            else {
                console.log('N exceed');
            }
        });
    };
    TestService.prototype.testLimitParallel = function (i) {
        var _this = this;
        if (i === void 0) { i = 0; }
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(0).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_) { return _this.api.request('GET', 'hw_types'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_) { return _this.api.request('GET', 'tags'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_) { return _this.api.request('GET', 'units'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_) { return _this.api.request('GET', 'users'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_) { return _this.api.request('GET', 'ugroups'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_) { return _this.api.request('GET', 'recievers'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_) { return _this.api.request('GET', 'hw_types'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_) { return _this.api.request('GET', 'log'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_) { return _this.api.request('GET', 'trash'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_) { return _this.api.request('GET', 'users'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_) { return _this.api.request('GET', 'drivers'); }))
            .subscribe(function (res) { console.log(res); });
    };
    TestService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["APIService"] }
    ]; };
    TestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], TestService);
    return TestService;
}());



/***/ }),

/***/ "./src/app/services/trash.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/trash.service.ts ***!
  \*******************************************/
/*! exports provided: TrashItem, TrashService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrashItem", function() { return TrashItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrashService", function() { return TrashService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");




var TrashItem = /** @class */ (function () {
    function TrashItem(item_, _parent) {
        this._parent = _parent;
        this.type = 'trash-item';
        for (var key in item_) {
            this[key] = item_[key];
        }
    }
    TrashItem.ctorParameters = function () { return [
        null,
        null
    ]; };
    TrashItem = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], TrashItem);
    return TrashItem;
}());

var TrashService = /** @class */ (function () {
    function TrashService(api) {
        this.api = api;
        this.app = null;
        this.trashTypes = [];
        this.ready = false;
        this.r = {};
        //public items: {string:TrashItem[]}  = [];
        this.items = {};
        this.allItems = [];
    }
    TrashService.prototype.createItem = function (item, type) {
        return this.app[type][(type !== 'ugroups' ? type : 'userGroups').slice(0, -1) + 'Service'].create(item, this.app[type]);
    };
    TrashService.prototype.get = function (type, id) {
        var _this = this;
        this.ready = false;
        var stringParams = '';
        return this.api.request('GET', 'trash' + (type ? ('/' + type) : '') + (id ? ('/' + id) : ''))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            _this.allItems = [];
            for (var typeKey in res.items) {
                var items = res.items[typeKey].items;
                _this.clearItems(typeKey);
                for (var key in items) {
                    var item = _this.createItem(items[key], typeKey);
                    if (!_this.items[typeKey])
                        _this.items[typeKey] = [];
                    _this.items[typeKey].push(item);
                }
                if (_this.items[typeKey]) {
                    _this.allItems = _this.allItems.concat(_this.items[typeKey]);
                }
            }
            _this.ready = true;
            return _this.items;
        }));
    };
    TrashService.prototype.clearItems = function (type) {
        if (type && this.items[type])
            this.items[type] = [];
    };
    TrashService.prototype.restore = function (item) {
        var _this = this;
        return item.restore()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
            _this.app[item._parent._itemService._itemType].get().subscribe();
        }));
    };
    TrashService.prototype.removeItem = function (item) {
        if (this.allItems) {
            var index = null;
            for (var key in this.allItems) {
                var trashItem = this.allItems[key];
                if (trashItem.id === item.id) {
                    index = key;
                    break;
                }
            }
            if (index !== -1)
                this.allItems.splice(index, 1);
        }
        if (this.items[item.itemType]) {
            var index = null;
            for (var key in this.items[item.itemType]) {
                var trashItem = this.items[item.itemType][key];
                if (trashItem.id === item.id) {
                    index = key;
                    break;
                }
            }
            if (index !== -1)
                this.items[item.itemType].splice(index, 1);
        }
    };
    Object.defineProperty(TrashService.prototype, "Length", {
        get: function () {
            var trashSize = 0;
            if (this.app.ready) {
                for (var key in this.trashTypes) {
                    if (this.app[this.trashTypes[key]].trash.length > 0) {
                        trashSize += this.app[this.trashTypes[key]].trash.length;
                    }
                }
            }
            return trashSize;
        },
        enumerable: true,
        configurable: true
    });
    TrashService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] }
    ]; };
    return TrashService;
}());



/***/ }),

/***/ "./src/app/services/unit.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/unit.service.ts ***!
  \******************************************/
/*! exports provided: Unit, UnitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unit", function() { return Unit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitService", function() { return UnitService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");




var Unit = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Unit, _super);
    function Unit(item_, _parent) {
        var _this = _super.call(this, item_, _parent) || this;
        _this._parent = _parent;
        return _this;
    }
    Object.defineProperty(Unit.prototype, "hwName", {
        get: function () {
            return (this._parent.app && this._parent.app.hwtypes._index && this._parent.app.hwtypes._index.id && this._parent.app.hwtypes._index.id[this.hw]) ? this._parent.app.hwtypes._index.id[this.hw].name : '';
        },
        enumerable: true,
        configurable: true
    });
    Unit.ctorParameters = function () { return [
        null,
        null
    ]; };
    Unit = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], Unit);
    return Unit;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["Item"]));

var UnitService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UnitService, _super);
    function UnitService(api) {
        var _this = _super.call(this, api) || this;
        _this.api = api;
        _this._itemType = 'units';
        return _this;
    }
    UnitService.prototype.create = function (item_, parent) {
        return new Unit(item_, parent);
    };
    UnitService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] }
    ]; };
    return UnitService;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"]));



/***/ }),

/***/ "./src/app/services/units.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/units.service.ts ***!
  \*******************************************/
/*! exports provided: UnitsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitsService", function() { return UnitsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_unit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/unit.service */ "./src/app/services/unit.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/items.service */ "./src/app/services/items.service.ts");





var UnitsService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UnitsService, _super);
    function UnitsService(api, unitService) {
        var _this = _super.call(this, api, unitService) || this;
        _this.api = api;
        _this.unitService = unitService;
        return _this;
    }
    UnitsService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] },
        { type: _services_unit_service__WEBPACK_IMPORTED_MODULE_2__["UnitService"] }
    ]; };
    UnitsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UnitsService);
    return UnitsService;
}(_services_items_service__WEBPACK_IMPORTED_MODULE_4__["ItemsService"]));



/***/ }),

/***/ "./src/app/services/user-group.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/user-group.service.ts ***!
  \************************************************/
/*! exports provided: UserGroup, UserGroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGroup", function() { return UserGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGroupService", function() { return UserGroupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");




var UserGroup = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserGroup, _super);
    function UserGroup(item_, _parent) {
        var _this = _super.call(this, item_, _parent) || this;
        _this._parent = _parent;
        return _this;
    }
    UserGroup.ctorParameters = function () { return [
        null,
        null
    ]; };
    UserGroup = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UserGroup);
    return UserGroup;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["Item"]));

var UserGroupService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserGroupService, _super);
    function UserGroupService(api) {
        var _this = _super.call(this, api) || this;
        _this.api = api;
        _this._itemType = 'ugroups';
        return _this;
    }
    UserGroupService.prototype.create = function (item_, parent) {
        return new UserGroup(item_, parent);
    };
    UserGroupService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] }
    ]; };
    return UserGroupService;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"]));



/***/ }),

/***/ "./src/app/services/user-groups.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user-groups.service.ts ***!
  \*************************************************/
/*! exports provided: UserGroupsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGroupsService", function() { return UserGroupsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user-group.service */ "./src/app/services/user-group.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/items.service */ "./src/app/services/items.service.ts");





var UserGroupsService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserGroupsService, _super);
    function UserGroupsService(api, userGroupService) {
        var _this = _super.call(this, api, userGroupService) || this;
        _this.api = api;
        _this.userGroupService = userGroupService;
        return _this;
    }
    UserGroupsService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] },
        { type: _services_user_group_service__WEBPACK_IMPORTED_MODULE_2__["UserGroupService"] }
    ]; };
    UserGroupsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UserGroupsService);
    return UserGroupsService;
}(_services_items_service__WEBPACK_IMPORTED_MODULE_4__["ItemsService"]));



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: User, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");




var User = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](User, _super);
    // public password:string;
    function User(item_, _parent) {
        var _this = _super.call(this, item_, _parent) || this;
        _this._parent = _parent;
        _this.d = 0;
        return _this;
    }
    User.ctorParameters = function () { return [
        null,
        null
    ]; };
    User = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], User);
    return User;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["Item"]));

var UserService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserService, _super);
    function UserService(api) {
        var _this = _super.call(this, api) || this;
        _this.api = api;
        _this._itemType = 'users';
        return _this;
    }
    UserService.prototype.create = function (item_, parent) {
        return new User(item_, parent);
    };
    UserService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] }
    ]; };
    return UserService;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"]));



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/items.service */ "./src/app/services/items.service.ts");





var UsersService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UsersService, _super);
    function UsersService(api, userService) {
        var _this = _super.call(this, api, userService) || this;
        _this.api = api;
        _this.userService = userService;
        return _this;
    }
    UsersService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
    ]; };
    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UsersService);
    return UsersService;
}(_services_items_service__WEBPACK_IMPORTED_MODULE_4__["ItemsService"]));



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

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\OSPanel\domains\mftiming\frontend\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map