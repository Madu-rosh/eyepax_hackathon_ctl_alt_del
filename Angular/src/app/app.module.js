"use strict";var __decorate=this&&this.__decorate||function(o,e,n,t){var p,r=arguments.length,m=r<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,n):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)m=Reflect.decorate(o,e,n,t);else for(var c=o.length-1;0<=c;c--)(p=o[c])&&(m=(r<3?p(m):3<r?p(e,n,m):p(e,n))||m);return 3<r&&m&&Object.defineProperty(e,n,m),m};Object.defineProperty(exports,"__esModule",{value:!0});var platform_browser_1=require("@angular/platform-browser"),core_1=require("@angular/core"),http_1=require("@angular/common/http"),app_component_1=require("./app.component"),home_component_1=require("./home/home.component"),login_component_component_1=require("./login-component/login-component.component"),post_component_component_1=require("./post-component/post-component.component"),comment_component_component_1=require("./comment-component/comment-component.component"),app_routing_module_1=require(".//app-routing.module"),AppModule=function(){function o(){}return o=__decorate([core_1.NgModule({declarations:[app_component_1.AppComponent,home_component_1.HomeComponent,login_component_component_1.LoginComponentComponent,post_component_component_1.PostComponentComponent,comment_component_component_1.CommentComponentComponent],imports:[platform_browser_1.BrowserModule,app_routing_module_1.AppRoutingModule,http_1.HttpClientModule],providers:[],bootstrap:[app_component_1.AppComponent]})],o)}();exports.AppModule=AppModule;