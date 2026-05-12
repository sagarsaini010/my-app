import { Component, signal } from '@angular/core';
import { Login } from './login/login';
import { HomePage } from './home-page/home-page';
import { Todo } from './todo/todo';
import { Parent } from './parent/parent';
@Component({
  selector: 'app-root',
  imports: [Login, HomePage, Todo,Parent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}
