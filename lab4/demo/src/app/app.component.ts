import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  message: string;
  num: number;
  numbers: number[] = [3, 4, 10, 2];
  students: any[] = [
    {
      id: '19B030601',
      full_name: 'Student 1'
    },
    {
      id: '19B030602',
      full_name: 'Student 2'
    },
    {
      id: '19B030603',
      full_name: 'Student 3'
    }
  ];
  flag: boolean;
  display: string;
  todoList: string[] = [];

  constructor() {
    console.log('constructor running');
    this.message = 'Message 1';
    this.flag = true;
    this.num = 10;
    this.display = '';
  }

  btnClicked(): void {
    this.flag = !this.flag;
  }

  addTodo(): void {
    if (this.display !== '') {
      this.todoList.push(this.display);
    }
    this.display = '';
  }

  removeTodo(index: number): void {
    this.todoList.splice(index, 1);
  }
}
