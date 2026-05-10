import { Component, signal } from '@angular/core';
import { Login } from './login/login';
import { HomePage } from './home-page/home-page';
@Component({
  selector: 'app-root',
  imports: [Login, HomePage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}
