System.register(["angular2/core"],function(e){var t,n,o=this&&this.__decorate||function(e,t,n,o){var r,c=arguments.length,a=3>c?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(3>c?r(a):c>3?r(t,n,a):r(t,n))||a);return c>3&&a&&Object.defineProperty(t,n,a),a},r=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0};return{setters:[function(e){t=e}],execute:function(){n=function(){function e(){this.ex={id:1,name:"Milk",change:"Nah"}}return e=o([t.Component({selector:"my-form",template:'\n        <div>\n            Write the command\n            <br/>\n            <input type="text" [(ngModel)]="ex.change">\n            <p *ngIf="ex.change===\'change\'" style="color: #cc0000;">\n                Change the ID\n                <input type="text" [(ngModel)]="ex.id"> <br/>\n                 Change the NAME\n                <input type="text" [(ngModel)]="ex.name">\n            </p>\n        </div>\n        <div>\n            ID = {{ex.id}}, NAME = {{ex.name}}\n        </div>\n    '}),r("design:paramtypes",[])],e)}(),e("MyFormComponent",n)}}});