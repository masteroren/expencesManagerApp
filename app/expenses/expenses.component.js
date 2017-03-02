"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("CheckBox", function () { return require("nativescript-checkbox").CheckBox; });
var httpService_1 = require("../shared/services/httpService");
var nativescript_angular_1 = require("nativescript-angular");
require("nativescript-localstorage");
var ExpensesComponent = (function () {
    // @ViewChild("food") foodCheckBox: ElementRef;
    // @ViewChild("parking") parkingCheckBox: ElementRef;
    // @ViewChild("driving") drivingCheckBox: ElementRef;
    // @ViewChild("other") otherCheckBox: ElementRef;
    function ExpensesComponent(page, httpService, routerExtensions) {
        this.page = page;
        this.httpService = httpService;
        this.routerExtensions = routerExtensions;
        page.actionBar.title = 'Expenses Manager';
        var employee = localStorage.getItem('employee');
        if (employee) {
            this.userName = JSON.parse(employee).name;
        }
    }
    ExpensesComponent.prototype.ngOnInit = function () {
        // this.recipeTypes = [{
        //     index: 0,
        //     text: 'Food',
        //     checked: false,
        //     element: this.foodCheckBox
        // }, {
        //     index: 1,
        //     text: 'Parking',
        //     checked: false,
        //     element: this.parkingCheckBox
        // }, {
        //     index: 2,
        //     text: 'Driving',
        //     checked: false,
        //     element: this.drivingCheckBox
        // }, {
        //     index: 3,
        //     text: 'Other',
        //     checked: false,
        //     element: this.otherCheckBox
        // }];
        // this.recipeTypes.forEach(item => {
        //     this.recipeTypes[item.index].element.nativeElement.on('tap', () => {
        //         this.onTapCheckBox(item.index);
        //     })
        // });
    };
    ExpensesComponent.prototype.onTapCheckBox = function (index) {
        // this.recipeTypes.forEach(item => {
        //     if (item.index !== index) {
        //         this.recipeTypes[item.index].element.nativeElement.checked = false;
        //         this.recipeTypes[item.index].checked = false;
        //     }
        // });
        // this.recipeTypes[index].checked = true;
    };
    ExpensesComponent.prototype.clear = function () {
        // this.recipeTypes.forEach(item => {
        //     item.checked = false;
        //     item.element.nativeElement.checked = false;
        // })
    };
    ExpensesComponent.prototype.add = function (amount) {
        // let checkedItems = this.recipeTypes.filter(item => {
        //     return item.checked;
        // });
        //
        // if (checkedItems.length === 1 && amount !== '') {
        //
        //     cameraModule.takePicture({width: 50, height: 50, keepAspectRatio: true}).then(imageSource => {
        //
        //         this.imageSrc = imageSource;
        //
        //         let base64img = imageSource.toBase64String("jpg");
        //
        //         this.httpService.upload({
        //             user: this.userName,
        //             category: checkedItems[0].text,
        //             amount: amount,
        //             picture: base64img
        //         })
        //             .subscribe(response => {
        //                 console.log(response.message);
        //             });
        //     })
        // }
    };
    ExpensesComponent.prototype.logOut = function () {
        localStorage.removeItem('employee');
        this.routerExtensions.navigate(["/welcome"], {
            transition: {
                name: "flip"
            }
        });
    };
    ExpensesComponent = __decorate([
        core_1.Component({
            selector: 'app-expenses',
            templateUrl: "expenses/expenses.component.html",
            providers: [httpService_1.HttpService]
        }), 
        __metadata('design:paramtypes', [page_1.Page, httpService_1.HttpService, nativescript_angular_1.RouterExtensions])
    ], ExpensesComponent);
    return ExpensesComponent;
}());
exports.ExpensesComponent = ExpensesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZW5zZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXhwZW5zZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBdUQsZUFBZSxDQUFDLENBQUE7QUFDdkUscUJBQW1CLFNBQVMsQ0FBQyxDQUFBO0FBRTdCLGlDQUE4Qix1Q0FBdUMsQ0FBQyxDQUFBO0FBQ3RFLGtDQUFlLENBQUMsVUFBVSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxRQUFRLEVBQXpDLENBQXlDLENBQUMsQ0FBQztBQUM3RSw0QkFBMEIsZ0NBQWdDLENBQUMsQ0FBQTtBQU8zRCxxQ0FBK0Isc0JBQXNCLENBQUMsQ0FBQTtBQUV0RCxPQUFPLENBQUMsMkJBQTJCLENBQUMsQ0FBQztBQU9yQztJQUtJLCtDQUErQztJQUMvQyxxREFBcUQ7SUFDckQscURBQXFEO0lBQ3JELGlEQUFpRDtJQUVqRCwyQkFBb0IsSUFBVSxFQUFVLFdBQXdCLEVBQVUsZ0JBQWtDO1FBQXhGLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDeEcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsa0JBQWtCLENBQUM7UUFDMUMsSUFBSSxRQUFRLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoRCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ1gsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUM5QyxDQUFDO0lBQ0wsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDSSx3QkFBd0I7UUFDeEIsZ0JBQWdCO1FBQ2hCLG9CQUFvQjtRQUNwQixzQkFBc0I7UUFDdEIsaUNBQWlDO1FBQ2pDLE9BQU87UUFDUCxnQkFBZ0I7UUFDaEIsdUJBQXVCO1FBQ3ZCLHNCQUFzQjtRQUN0QixvQ0FBb0M7UUFDcEMsT0FBTztRQUNQLGdCQUFnQjtRQUNoQix1QkFBdUI7UUFDdkIsc0JBQXNCO1FBQ3RCLG9DQUFvQztRQUNwQyxPQUFPO1FBQ1AsZ0JBQWdCO1FBQ2hCLHFCQUFxQjtRQUNyQixzQkFBc0I7UUFDdEIsa0NBQWtDO1FBQ2xDLE1BQU07UUFFTixxQ0FBcUM7UUFDckMsMkVBQTJFO1FBQzNFLDBDQUEwQztRQUMxQyxTQUFTO1FBQ1QsTUFBTTtJQUNWLENBQUM7SUFFRCx5Q0FBYSxHQUFiLFVBQWMsS0FBYTtRQUN2QixxQ0FBcUM7UUFDckMsa0NBQWtDO1FBQ2xDLDhFQUE4RTtRQUM5RSx3REFBd0Q7UUFDeEQsUUFBUTtRQUNSLE1BQU07UUFDTiwwQ0FBMEM7SUFDOUMsQ0FBQztJQUVELGlDQUFLLEdBQUw7UUFDSSxxQ0FBcUM7UUFDckMsNEJBQTRCO1FBQzVCLGtEQUFrRDtRQUNsRCxLQUFLO0lBQ1QsQ0FBQztJQUVELCtCQUFHLEdBQUgsVUFBSSxNQUFNO1FBQ04sdURBQXVEO1FBQ3ZELDJCQUEyQjtRQUMzQixNQUFNO1FBQ04sRUFBRTtRQUNGLG9EQUFvRDtRQUNwRCxFQUFFO1FBQ0YscUdBQXFHO1FBQ3JHLEVBQUU7UUFDRix1Q0FBdUM7UUFDdkMsRUFBRTtRQUNGLDZEQUE2RDtRQUM3RCxFQUFFO1FBQ0Ysb0NBQW9DO1FBQ3BDLG1DQUFtQztRQUNuQyw4Q0FBOEM7UUFDOUMsOEJBQThCO1FBQzlCLGlDQUFpQztRQUNqQyxhQUFhO1FBQ2IsdUNBQXVDO1FBQ3ZDLGlEQUFpRDtRQUNqRCxrQkFBa0I7UUFDbEIsU0FBUztRQUNULElBQUk7SUFDUixDQUFDO0lBRUQsa0NBQU0sR0FBTjtRQUNJLFlBQVksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFcEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3pDLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsTUFBTTthQUNmO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXhHTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsa0NBQWtDO1lBQy9DLFNBQVMsRUFBRSxDQUFDLHlCQUFXLENBQUM7U0FDM0IsQ0FBQzs7eUJBQUE7SUFxR0Ysd0JBQUM7QUFBRCxDQUFDLEFBcEdELElBb0dDO0FBcEdZLHlCQUFpQixvQkFvRzdCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHtDaGVja0JveH0gZnJvbSAnbmF0aXZlc2NyaXB0LWNoZWNrYm94JztcclxuaW1wb3J0IHtyZWdpc3RlckVsZW1lbnR9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XHJcbnJlZ2lzdGVyRWxlbWVudChcIkNoZWNrQm94XCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2hlY2tib3hcIikuQ2hlY2tCb3gpO1xyXG5pbXBvcnQge0h0dHBTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL3NlcnZpY2VzL2h0dHBTZXJ2aWNlXCI7XHJcblxyXG4vLyBOYXRpdmUgU2NyaXB0IGNvcmVcclxuaW1wb3J0IGltYWdlTW9kdWxlID0gcmVxdWlyZShcInVpL2ltYWdlXCIpO1xyXG5pbXBvcnQgY2FtZXJhTW9kdWxlID0gcmVxdWlyZShcImNhbWVyYVwiKTtcclxuaW1wb3J0IGVudW1zTW9kdWxlICA9IHJlcXVpcmUoJ3VpL2VudW1zJylcclxuaW1wb3J0IGZzTW9kdWxlID0gcmVxdWlyZShcImZpbGUtc3lzdGVtXCIpO1xyXG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xyXG5cclxucmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1sb2NhbHN0b3JhZ2VcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWV4cGVuc2VzJyxcclxuICAgIHRlbXBsYXRlVXJsOiBcImV4cGVuc2VzL2V4cGVuc2VzLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBwcm92aWRlcnM6IFtIdHRwU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEV4cGVuc2VzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIC8vIHJlY2lwZVR5cGVzOiBBcnJheTxSZWNpcGVUeXBlPjtcclxuICAgIHVzZXJOYW1lOiBzdHJpbmc7XHJcbiAgICBpbWFnZVNyYzogYW55O1xyXG5cclxuICAgIC8vIEBWaWV3Q2hpbGQoXCJmb29kXCIpIGZvb2RDaGVja0JveDogRWxlbWVudFJlZjtcclxuICAgIC8vIEBWaWV3Q2hpbGQoXCJwYXJraW5nXCIpIHBhcmtpbmdDaGVja0JveDogRWxlbWVudFJlZjtcclxuICAgIC8vIEBWaWV3Q2hpbGQoXCJkcml2aW5nXCIpIGRyaXZpbmdDaGVja0JveDogRWxlbWVudFJlZjtcclxuICAgIC8vIEBWaWV3Q2hpbGQoXCJvdGhlclwiKSBvdGhlckNoZWNrQm94OiBFbGVtZW50UmVmO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSBodHRwU2VydmljZTogSHR0cFNlcnZpY2UsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xyXG4gICAgICAgIHBhZ2UuYWN0aW9uQmFyLnRpdGxlID0gJ0V4cGVuc2VzIE1hbmFnZXInO1xyXG4gICAgICAgIGxldCBlbXBsb3llZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbXBsb3llZScpO1xyXG4gICAgICAgIGlmIChlbXBsb3llZSkge1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJOYW1lID0gSlNPTi5wYXJzZShlbXBsb3llZSkubmFtZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5yZWNpcGVUeXBlcyA9IFt7XHJcbiAgICAgICAgLy8gICAgIGluZGV4OiAwLFxyXG4gICAgICAgIC8vICAgICB0ZXh0OiAnRm9vZCcsXHJcbiAgICAgICAgLy8gICAgIGNoZWNrZWQ6IGZhbHNlLFxyXG4gICAgICAgIC8vICAgICBlbGVtZW50OiB0aGlzLmZvb2RDaGVja0JveFxyXG4gICAgICAgIC8vIH0sIHtcclxuICAgICAgICAvLyAgICAgaW5kZXg6IDEsXHJcbiAgICAgICAgLy8gICAgIHRleHQ6ICdQYXJraW5nJyxcclxuICAgICAgICAvLyAgICAgY2hlY2tlZDogZmFsc2UsXHJcbiAgICAgICAgLy8gICAgIGVsZW1lbnQ6IHRoaXMucGFya2luZ0NoZWNrQm94XHJcbiAgICAgICAgLy8gfSwge1xyXG4gICAgICAgIC8vICAgICBpbmRleDogMixcclxuICAgICAgICAvLyAgICAgdGV4dDogJ0RyaXZpbmcnLFxyXG4gICAgICAgIC8vICAgICBjaGVja2VkOiBmYWxzZSxcclxuICAgICAgICAvLyAgICAgZWxlbWVudDogdGhpcy5kcml2aW5nQ2hlY2tCb3hcclxuICAgICAgICAvLyB9LCB7XHJcbiAgICAgICAgLy8gICAgIGluZGV4OiAzLFxyXG4gICAgICAgIC8vICAgICB0ZXh0OiAnT3RoZXInLFxyXG4gICAgICAgIC8vICAgICBjaGVja2VkOiBmYWxzZSxcclxuICAgICAgICAvLyAgICAgZWxlbWVudDogdGhpcy5vdGhlckNoZWNrQm94XHJcbiAgICAgICAgLy8gfV07XHJcblxyXG4gICAgICAgIC8vIHRoaXMucmVjaXBlVHlwZXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5yZWNpcGVUeXBlc1tpdGVtLmluZGV4XS5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQub24oJ3RhcCcsICgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMub25UYXBDaGVja0JveChpdGVtLmluZGV4KTtcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblRhcENoZWNrQm94KGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICAvLyB0aGlzLnJlY2lwZVR5cGVzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGlmIChpdGVtLmluZGV4ICE9PSBpbmRleCkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5yZWNpcGVUeXBlc1tpdGVtLmluZGV4XS5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5yZWNpcGVUeXBlc1tpdGVtLmluZGV4XS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICAvLyB0aGlzLnJlY2lwZVR5cGVzW2luZGV4XS5jaGVja2VkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICAvLyB0aGlzLnJlY2lwZVR5cGVzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGl0ZW0uY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICBpdGVtLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgLy8gfSlcclxuICAgIH1cclxuXHJcbiAgICBhZGQoYW1vdW50KSB7XHJcbiAgICAgICAgLy8gbGV0IGNoZWNrZWRJdGVtcyA9IHRoaXMucmVjaXBlVHlwZXMuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gaXRlbS5jaGVja2VkO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gaWYgKGNoZWNrZWRJdGVtcy5sZW5ndGggPT09IDEgJiYgYW1vdW50ICE9PSAnJykge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIGNhbWVyYU1vZHVsZS50YWtlUGljdHVyZSh7d2lkdGg6IDUwLCBoZWlnaHQ6IDUwLCBrZWVwQXNwZWN0UmF0aW86IHRydWV9KS50aGVuKGltYWdlU291cmNlID0+IHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5pbWFnZVNyYyA9IGltYWdlU291cmNlO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgYmFzZTY0aW1nID0gaW1hZ2VTb3VyY2UudG9CYXNlNjRTdHJpbmcoXCJqcGdcIik7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuaHR0cFNlcnZpY2UudXBsb2FkKHtcclxuICAgICAgICAvLyAgICAgICAgICAgICB1c2VyOiB0aGlzLnVzZXJOYW1lLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNhdGVnb3J5OiBjaGVja2VkSXRlbXNbMF0udGV4dCxcclxuICAgICAgICAvLyAgICAgICAgICAgICBhbW91bnQ6IGFtb3VudCxcclxuICAgICAgICAvLyAgICAgICAgICAgICBwaWN0dXJlOiBiYXNlNjRpbWdcclxuICAgICAgICAvLyAgICAgICAgIH0pXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLm1lc3NhZ2UpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2dPdXQoKXtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZW1wbG95ZWUnKTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi93ZWxjb21lXCJdLCB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiZmxpcFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIFJlY2lwZVR5cGUge1xyXG4gICAgaW5kZXg6IG51bWJlcjtcclxuICAgIHRleHQ6IHN0cmluZztcclxuICAgIGNoZWNrZWQ6IGJvb2xlYW4sXHJcbiAgICBlbGVtZW50OiBFbGVtZW50UmVmXHJcbn1cclxuIl19