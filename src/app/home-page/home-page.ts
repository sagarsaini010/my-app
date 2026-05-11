import { Component, signal } from "@angular/core";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})

export class HomePage{
value:boolean=false;
userName:string="Sagar Saini"
name = signal<string[]>(["Sagar","Raman"]);
count = signal(12);



changeValue(){
this.value = !this.value;
this.name.set(["Raman"]);
this.count.update((value:number):number=>{ return value = value++})
this.user.update(u => ({
  ...u,
  age: 23
}));
console.log(this.user().age);
}
list = [1,2,3,4,5,6,7,8,9]


user = signal({
  name: 'Sagar',
  age: 22
});

}