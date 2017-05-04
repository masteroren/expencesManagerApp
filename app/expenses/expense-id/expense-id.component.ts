import {Component, EventEmitter, Input, Output} from "@angular/core";
import {ICategory} from "../../shared/interfaces/ICategory";

@Component({
    selector: 'expense-id',
    templateUrl: 'expenses/expense-id/expense-id.component.html',
    styleUrls: ['expenses/expense-id/expense-id.component.css']
})
export class ExpenseIdComponent {
    @Input() category: ICategory;
    @Output() onRecipeNumberChanged: EventEmitter<string> = new EventEmitter();

    recipeNumberChanged(value){
        this.onRecipeNumberChanged.emit(value);
    }
}