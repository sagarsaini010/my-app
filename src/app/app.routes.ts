import { Routes } from '@angular/router';
import { Todo } from './todo/todo';
import { HomePage } from './home-page/home-page';
import { Parent } from './parent/parent';

export const routes: Routes = [
    { path:'', component: Todo},
    { path:'home', component: HomePage},
    { path:'parent', component: Parent},
];
