import { Component } from '@angular/core';
import { CustomerModel } from './app/app.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})  
export class AppComponent
{
 
  name :string;
  onclick()
  {
    this.name="vishnu";
  }


  course :string;
  onclick1(s1)
  {
    this.course= s1;
  }

  ImgPath :  string = "assets/images/tiger.jpg"

}


