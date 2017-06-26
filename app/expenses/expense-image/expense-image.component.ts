import {Component, EventEmitter, Input, Output} from "@angular/core";
import cameraModule = require("nativescript-camera");
import {ICategory} from "../../shared/interfaces/ICategory";

@Component({
    selector: 'expense-image',
    templateUrl: 'expenses/expense-image/expense-image.component.html',
    styleUrls: ['expenses/expense-image/expense-image.component.css']
})
export class ExpenseImageComponent {
    cameraAvailable: Boolean = cameraModule.isAvailable();
    imageSrc: any;

    @Input() category: ICategory;
    @Output() onTakePicture: EventEmitter<string> = new EventEmitter();

    takePicture() {
        if (this.cameraAvailable) {
            cameraModule.takePicture({width:50, keepAspectRatio: true}).then(imageSource => {
                this.imageSrc = imageSource;
                // this.onTakePicture.emit(imageSource.toBase64String("jpeg"))
            });

        }
    }
}