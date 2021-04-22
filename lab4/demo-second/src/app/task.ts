export class Task {
  id: number;
  title: string;
  isDone: boolean;

  constructor(title: string = '') {
    this.id = 0;
    this.title = title;
    this.isDone = false;
  }

}

