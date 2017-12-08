import {Component, EventEmitter, Input, Output} from "@angular/core";
import {ICategory} from "./../../../interfaces/ICategory";

@Component({
    moduleId: module.id,
    selector: 'expense-id',
    templateUrl: './expense-id.component.html',
    styleUrls: ['./expense-id.component.css']
})
export class ExpenseIdComponent {
    @Input() category: ICategory;
    @Output() onRecipeNumberChanged: EventEmitter<string> = new EventEmitter();

    recipeNumberChanged(value){
        this.onRecipeNumberChanged.emit(value);
    }
}