import { Component, OnInit } from "@angular/core";
import cameraModule = require("nativescript-camera");
import { DataService } from './../../../shared_module/services/data.service';
import { ImageAsset } from "tns-core-modules/image-asset/image-asset";
import ImageSource = require("image-source");

@Component({
    moduleId: module.id,
    selector: 'expense-image',
    templateUrl: './expense-image.component.html',
    styleUrls: ['./expense-image.component.css']
})
export class ExpenseImageComponent implements OnInit {

    public cameraAvailable: Boolean = false;
    public imageSrc: any = 'res://camera';

    constructor(public dataService: DataService) { }

    ngOnInit() {
        this.cameraAvailable = cameraModule.isAvailable();
        console.log('Is camera available ', this.cameraAvailable);
    }

    takePicture() {
        if (this.cameraAvailable) {
            cameraModule.requestPermissions();
            cameraModule.takePicture({ width: 100, keepAspectRatio: true })
                .then(imageAsset => {
                    this.imageSrc = imageAsset.android;

                    ImageSource.fromAsset(imageAsset).then(res => {
                        this.dataService.expenseModel.image = res.toBase64String("jpeg", 100);
                    })
                });
        }
    }
}