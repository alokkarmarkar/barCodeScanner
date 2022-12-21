import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scanner';

  value: any;
  isError = true;
  openCamera : boolean =false

  onError(error:any) {
    console.error(error);
    this.isError = true;
  }
  openscanner(){
    this.openCamera=true
  }
  closeCamera(){
    this.openCamera=false
  }
}
