import { Component } from "@angular/core";

@Component({
    selector: 'app-success-alert',
    templateUrl: './sucess-alert.component.html',
    styles : [
        `h1 {
            color: green
        }`
    ]
})
export class SuccessAlertComponent {
    success_message = 'We won!!'

    onReset() {
        this.success_message  = ''
    }
}