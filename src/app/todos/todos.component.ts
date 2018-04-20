import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todoService';
import { Todo } from '../todo';

@Component({
  moduleId: module.id,
  selector: 'todos',
  templateUrl: 'todos.component.html',

  styleUrls: ['todos.component.css']
})
export class TodosComponent implements OnInit {
  public todos: Todo[] = [];

  constructor (private todoService: TodoService) { }

  ngOnInit () {
    this.todos = this.todoService.getTodos();
  };

  addTodo(name: string): void {
    this.todoService.addTodo(name);
  };
}
