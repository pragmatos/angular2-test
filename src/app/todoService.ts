import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    {
      name: '111111111111',
      completed: false
    },
    {
      name: '222222222222',
      completed: false
    },
    {
      name: '3333333333',
      completed: true
    }
  ];

  public addTodo(name: string): void {
    this.todos.push({
      name,
      completed: false
    });
  }
  public getTodos(): Todo[] {
    return this.todos;
  }
  public toggleTodo(todo: Todo): void {
    let index = this.todos.indexOf(todo);
    console.log(index);
    this.todos[index].completed = !this.todos[index].completed;
  }
  public removeTodo(todo: Todo): void {
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}



