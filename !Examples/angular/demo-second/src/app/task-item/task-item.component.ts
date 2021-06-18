import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {Task} from '../task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() remove = new EventEmitter();
  @Output() done = new EventEmitter();

  // @Output()
  constructor() {
    this.task = new Task();
  }

  ngOnInit(): void {
  }

  removeTask(id: number): void {
    this.remove.emit(id);
  }

  isDoneChanged(): void {
    this.done.emit(this.task);
  }
}
