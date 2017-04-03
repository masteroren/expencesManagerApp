import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {ICategory} from "../../shared/interfaces/ICategory";

@Component({
    selector: 'expense-type',
    templateUrl: 'expenses/expense-type/expense-type.component.html',
    styleUrls: ['expenses/expense-type/expense-type.component.css']
})
export class ExpenseTypeComponent implements OnInit {

    @Output() onCategoryClick: EventEmitter<ICategory> = new EventEmitter();

    showOther: boolean = false;
    selectedIndex: number = 3;

    categories: ICategory[] = [
        {
            id: 0,
            name: 'אחר',
            image_on: 'res://receipts_purple',
            image_off: 'res://other_icon_white',
            class: 'other',
            color: '#48819e'
        },
        {
            id: 1,
            name: 'נסיעות',
            image_on: 'res://car_purple',
            image_off: 'res://transportation_icon_white',
            class: 'driving',
            color: '#71dbbd'
        },
        {
            id: 2,
            name: 'אוכל',
            image_on: 'res://cupcake_purple',
            image_off: 'res://food_icon_white',
            class: 'food',
            color: '#5bd2d1'
        },
        {
            id: 3,
            name: 'חנייה',
            image_on: 'res://parking_icon',
            image_off: 'res://parking_white',
            class: 'parking',
            color: '#ff4e50'
        }
    ];

    constructor() {

    }

    ngOnInit() {
        this.setSelection(3);
    }

    onTap(i:number){
        this.setSelection(i);
    }

    setSelection(id) {
        let category: ICategory = this.categories.filter(item => item.id == id)[0];
        this.selectedIndex = category.id;
        this.onCategoryClick.emit(category);
        this.showOther = false;
    }
}