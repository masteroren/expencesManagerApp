import {Component, EventEmitter, Input, Output} from "@angular/core";
import cameraModule = require("nativescript-camera");
import {ICategory} from "./../../../interfaces/ICategory";

@Component({
    moduleId: module.id,
    selector: 'expense-image',
    templateUrl: './expense-image.component.html',
    styleUrls: ['./expense-image.component.css']
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