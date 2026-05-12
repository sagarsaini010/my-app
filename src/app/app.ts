import { Component, signal } from '@angular/core';
import { Login } from './login/login';
import { HomePage } from './home-page/home-page';
import { Todo } from './todo/todo';
import { Parent } from './parent/parent';
import { CounterStore } from './core/store/counter';
import { RouterLink, RouterOutlet } from "@angular/router";
@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(public counterStore:CounterStore){}
  protected readonly title = signal('my-app');
}
