export interface ICategory {
  id: number;
  title: string;
  color: string;
}

export class Category {

  get Id(): number {
    return this.id;
  }

  set Id(value) {
    this.id = value;
  }

  get Title(): string {
    return this.title;
  }

  set Title(value) {
    this.title = value;
  }

  get Color() {
    return this.color;
  }

  set Color(value) {
    this.color = value;
  }

  constructor(
    private id: number=0,
    private title: string="",
    private color: string=""
  )
  {
  }
}
