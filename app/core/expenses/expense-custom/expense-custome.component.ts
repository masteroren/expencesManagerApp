import {Component, EventEmitter, Input, Output} from "@angular/core";
import {ICategory} from "./../../../interfaces/ICategory";

@Component({
    moduleId: module.id,
    selector: 'expense-custom',
    templateUrl: './expense-custom.component.html',
    styleUrls: ['./expense-custom.component.css']
})
export class ExpenseCustomComponent {

    @Input() type: string;
    @Input() category: ICategory;
    @Output() onTypeChanged: EventEmitter<string> = new EventEmitter();

    typeChanged(value){
        this.onTypeChanged.emit(value);
    }
}