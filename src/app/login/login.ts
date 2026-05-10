import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
callMe():void{
  console.log('I am clicked');
}

count:number=0

counter():void{
  this.count += 1
  console.log(this.count);
}

handelEvent(eventName:string):void{
  console.log(eventName);
}


}
