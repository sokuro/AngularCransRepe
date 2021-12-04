export interface IToDo {
  id: number;
}

export class ToDo {
  get Id(): number {
    return this.id;
  }
  set Id(value: number) {
    this.id= value;
  }

  constructor(
    private id: number=0
  )
  {
  }
}
