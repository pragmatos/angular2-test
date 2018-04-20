import { Component, Input } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todoService';

@Component({
  moduleId: module.id,
  selector: 'todo-item',
  templateUrl: 'todo-item.component.html',
  styleUrls: ['todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: Todo;

  constructor(private todoService: TodoService) {}

  removeTodo(): void {
    this.todoService.removeTodo(this.todo);
  }

  toggleCompleted(): void {
    this.todoService.toggleTodo(this.todo);
  }
}
