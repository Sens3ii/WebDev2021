import {Component, OnInit} from '@angular/core';
import {Task} from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  newTasks: Task[];
  doneTasks: Task[];
  currentTask: Task;

  constructor() {
    this.newTasks = [new Task('task 1')];
    this.doneTasks = [];
    this.currentTask = new Task();
  }

  ngOnInit(): void {

  }

  addTodo(): void {
    if (this.currentTask.title !== '') {
      this.currentTask.id = this.newTasks.length + 1;
      this.newTasks.push(this.currentTask);
      this.currentTask = new Task();
    }
  }

  onRemove(index: number): void {
    this.newTasks = this.newTasks.filter((x) => x.id !== index);
  }

  onDoneChange(task: Task): void {
    if (task.isDone) {
      this.onRemove(task.id);
      this.doneTasks.push(task);
    } else {
      this.doneTasks = this.doneTasks.filter((x) => x.id !== task.id);
      this.newTasks.push(task);
    }
  }

}
