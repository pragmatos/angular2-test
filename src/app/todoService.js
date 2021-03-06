"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var TodoService = (function () {
    function TodoService() {
        this.todos = [
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
    }
    TodoService.prototype.addTodo = function (name) {
        this.todos.push({
            name: name,
            completed: false
        });
    };
    TodoService.prototype.getTodos = function () {
        return this.todos;
    };
    TodoService.prototype.toggleTodo = function (todo) {
        var index = this.todos.indexOf(todo);
        console.log(index);
        this.todos[index].completed = !this.todos[index].completed;
    };
    TodoService.prototype.removeTodo = function (todo) {
        var index = this.todos.indexOf(todo);
        this.todos.splice(index, 1);
    };
    return TodoService;
}());
TodoService = __decorate([
    core_1.Injectable()
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todoService.js.map