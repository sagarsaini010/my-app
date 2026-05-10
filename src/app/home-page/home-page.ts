import { Component } from "@angular/core";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})

export class HomePage{
value:boolean=false;
userName:string="Sagar Saini"
changeValue(){
this.value = !this.value;
}
}