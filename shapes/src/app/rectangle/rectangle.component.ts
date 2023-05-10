import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {
  constructor(private router: Router) {}

navigateBack() {
    setTimeout(() => {
        this.router.navigate(['']);
    }, 5000); 
}
  width:number = 0;
  height:number = 0;
  message:string="";


  calc(){

  if(this.height <= 0 )
  this.message = "הכנסת גובה לא תקין";
  else if( this.width <=0 )
  this.message = "הכנסת רוחב לא תקין"
 else if(this.height - this.width >5 || this.width - this.height >5)
   this.message = `השטח הוא: ${this.height * this.width}`;
   else
   this.message = `ההיקף הוא:${(this.width*2) + (this.height*2)}`;
   this.navigateBack();

  }
}
