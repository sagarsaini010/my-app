import { Component, EventEmitter, input, signal, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
name = input<string>();
@Output() notify = new EventEmitter<string>();


sendToparent(){
  this.notify.emit('Hello Parent EventEmiter')
}

msg= signal("hello from signal")

 updateMessage(){
  this.msg.set('Hello update signal')
 }

}
