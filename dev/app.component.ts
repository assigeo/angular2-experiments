import {Component} from 'angular2/core';
import {ShoppingListComponent} from './shopping-list.component';
import {MyFormComponent} from './form.component';

@Component({
    selector: 'app',
    template: `
        <p>APP COMPONENT</p>
        <!--<shopping-list></shopping-list>-->
        <my-form></my-form>
    `,
    directives: [ShoppingListComponent, MyFormComponent]
})
export class AppComponent {

}























// import {Component} from 'angular2/core';
// import {ContactListComponent} from "./contacts/contact-list.component";

// @Component({
//     selector: 'app',
//     template: `
//         <contact-list></contact-list>     
//     `,
//     directives: [ContactListComponent]
// })
// export class AppComponent {
    
// }