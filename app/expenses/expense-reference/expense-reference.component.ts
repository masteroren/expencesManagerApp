import {Component, EventEmitter, Input, Output} from "@angular/core";
import {ICategory} from "../../shared/interfaces/ICategory";

@Component({
    selector: 'expense-ref',
    templateUrl: 'expenses/expense-reference/expense-reference.component.html',
    styleUrls: ['expenses/expense-reference/expense-reference.component.css']
})
export class ExpenseReferenceComponent {
    @Input() category: ICategory;
    @Output() onRecipeNumberChanged: EventEmitter<string> = new EventEmitter();

    recipeNumberChanged(value){
        this.onRecipeNumberChanged.emit(value);
    }
}