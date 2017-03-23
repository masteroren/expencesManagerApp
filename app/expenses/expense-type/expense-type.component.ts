import {Component, ElementRef, EventEmitter, Output, ViewChild} from "@angular/core";
import {Color} from "color";
let colorModule = require("color");

@Component({
    selector: 'expense-type',
    templateUrl: 'expenses/expense-type/expense-type.component.html'
})
export class ExpenseTypeComponent{
    defaultTypeColor: Color = new colorModule.Color('white');

    @ViewChild("food") food: ElementRef;
    @ViewChild("parking") parking: ElementRef;
    @ViewChild("driving") driving: ElementRef;
    @ViewChild("other") other: ElementRef;

    @Output() onCategoryClick: EventEmitter<string> = new EventEmitter();

    showOther: boolean = false;

    private resetAll() {
        this.driving.nativeElement.backgroundColor = this.defaultTypeColor;
        this.food.nativeElement.backgroundColor = this.defaultTypeColor;
        this.parking.nativeElement.backgroundColor = this.defaultTypeColor;
        this.other.nativeElement.backgroundColor = this.defaultTypeColor;
    }

    onParkingTap() {
        this.resetAll();
        this.parking.nativeElement.backgroundColor = new colorModule.Color('#6495ed');
        this.onCategoryClick.emit('Parking');
        this.showOther = false;
    }

    onFoodTap() {
        this.resetAll();
        this.food.nativeElement.backgroundColor = new colorModule.Color('#6495ed');
        this.onCategoryClick.emit('Food');
        this.showOther = false;
    }

    onDrivingTap() {
        this.resetAll();
        this.driving.nativeElement.backgroundColor = new colorModule.Color('#6495ed');
        this.onCategoryClick.emit('Driving');
        this.showOther = false;
    }

    onOtherTap() {
        this.resetAll();
        this.other.nativeElement.backgroundColor = new colorModule.Color('#6495ed');
        this.showOther = true;
    }

    setOtherCategory(val){
        this.onCategoryClick.emit(val);
    }
}