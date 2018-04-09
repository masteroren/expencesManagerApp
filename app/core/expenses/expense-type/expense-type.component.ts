import { Component, OnInit } from "@angular/core";
import { ICategory } from "./../../../interfaces/ICategory";
import { DataService } from "../../../shared_module/services/data.service";

@Component({
    moduleId: module.id,
    selector: 'expense-type',
    templateUrl: 'expense-type.component.html',
    styleUrls: ['expense-type.component.css']
})
export class ExpenseTypeComponent implements OnInit {

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

    constructor(public dataService: DataService) { }

    ngOnInit() {
        this.setSelection(3);
    }

    onTap(i: number) {
        this.setSelection(i);
    }

    private setSelection(id: number) {
        this.dataService.category = this.categories.find((item: ICategory) => { 
            if (item.id == id) {
                return true;
            }
        });
        this.dataService.expenseModel.type = this.dataService.category.name;
        this.selectedIndex = this.dataService.category.id;
        this.showOther = false;
    }
}