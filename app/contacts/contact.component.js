System.register(["angular2/core"],function(t){var e,n,c=this&&this.__decorate||function(t,e,n,c){var o,a=arguments.length,r=3>a?e:null===c?c=Object.getOwnPropertyDescriptor(e,n):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,c);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(r=(3>a?o(r):a>3?o(e,n,r):o(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},o=this&&this.__metadata||function(t,e){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(t,e):void 0};return{setters:[function(t){e=t}],execute:function(){n=function(){function t(){this.contact={}}return t=c([e.Component({selector:"contact",template:'\n    <input [(ngModel)]="contact.firstName" type="text">\n    <div>\n        Phone: {{contact.phone}} <br>\n        E-mail: {{contact.email}}\n    </div>\n    ',inputs:["contact"]}),o("design:paramtypes",[])],t)}(),t("ContactComponent",n)}}});