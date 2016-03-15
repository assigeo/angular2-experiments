import {Component} from 'angular2/core';

@Component({
    selector: "shopping-list",
    template: `
        <ul>
            <li *ngFor="#item of spItems"
                (click)="onItemSelect(item)">
                {{ item.name }}
            </li>
        </ul>
        <input type="text" [(ngModel)]="selectedItem.name">
        <button (click)="onDeleteItem(otherItem)">DeleteItem</button> <br/>
        
        <input type="text" #otherItem>
        <button (click)="onAddItem(otherItem)">AddItem</button>
    `
})

export class ShoppingListComponent {
    public spItems = [
        {name: "Milk"},
        {name: "Kaseri"},
        {name: "Pswmi"}
    ];
    public selectedItem = {name: "" };
    
    onItemSelect(theItem){
        this.selectedItem = theItem;
    }
    
    onAddItem(theItem) {
        this.spItems.push({name: theItem.value});
    }
    
    onDeleteItem() {
        this.spItems.splice(this.spItems.indexOf(this.selectedItem), 1);
    }
}