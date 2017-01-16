import {NgModule} from '@angular/core';
import {ExpensesComponent} from "./expenses.component";

@NgModule({
    declarations: [ExpensesComponent],
    exports: [ExpensesComponent]
})
export class ExpensesModule {
}
