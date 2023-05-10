import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { repeat } from 'rxjs';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.css']
})
export class TriangleComponent {

constructor(private router: Router) {}

navigateBack() {
    setTimeout(() => {
        this.router.navigate(['']);
    }, 5000); 
}
  width:number = 0;
  height:number = 0;
  message:string="";


  calcArea(){
    if (this.width == 0 || this.height == 0)
      this.message = "משולש לא תקין";
    else{
      const third = Math.pow(this.height,2) + Math.pow(this.width/2,2);
      const hekef = Math.sqrt(third) *2 + this.width;
      this.message = `ההיקף הוא${hekef}`
  }
  this.navigateBack();
}
drawTriangle(){
    this.message = '';
     if (this.width % 2 == 0 || this.width / 2 > this.height)
       this.message = "לא ניתן להדפיס את המשולש";
     else
    {
       let odds:number[] = [];
       for (let i = 3; i < this.width; i+=2) {
            odds.push(i);   
       }
       let doubleLines = Math.floor((this.height-2)/(odds.length));      
       let oddsIndex = 0;
       for (let i = 1; i <= this.height ; i++) 
       {
        if (i == 1 && odds.length >0)
        {
          const spaces = '  ' .repeat(Math.floor(this.width)/2 );
          this.message += spaces + '*' + '\n';
        }
        else if(odds.length == 0)
        {
          const spaces = '  '.repeat(Math.floor(this.width/2 ));
          const stars = '*';
          const mes = spaces + stars + '\n';
          this.message += mes;
        }
        else if (oddsIndex<odds.length )
        {
          if ((this.height-2) % odds.length != 0 && i == 2)
          {
             for (let j=0; j <= doubleLines + this.height%doubleLines; j++)
              {              
                const spaces = '  ' .repeat(Math.ceil(this.width/2)-i);
                const stars = '*' .repeat(odds[oddsIndex]);
                this.message += spaces + stars + '\n'; 
              }
             oddsIndex++;
          } 
          else
          {
            for ( let j = 0; j < doubleLines; j++)
              {               
                const spaces = '  ' .repeat(Math.ceil(this.width/2)-i);
                const stars = '*' .repeat(odds[oddsIndex]);
                this.message += spaces + stars +'\n'; 
              }
              oddsIndex++;
            }
        }
      }
        
      if (odds.length >0)
      {
          const stars = '*'.repeat(this.width);
          this.message+=  stars;
        } 

       

    
    }

    this.navigateBack();
    
  }
       


}