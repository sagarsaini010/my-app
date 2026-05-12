import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {

newTodo = signal<string>('');

todos = signal<{task:string,done:boolean}[]>([]);

addTodo(){
  const task = this.newTodo().trim();
  if(task === '') return;
  this.todos.update( list => [...list, {task, done:false}])

  this.newTodo.set('');
}

toggleTodo(index:number){
    this.todos.update(list =>
      list.map((item,i)=>
      i === index ? {...item, done: !item.done} : item
      )
    )
}

deleteTodo(index: number){
  this.todos.update(list => 
    list.filter((_,i)=> i !== index )
  )
}


}
