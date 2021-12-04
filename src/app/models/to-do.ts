import { Category, ICategory } from "./category";

export interface IToDo {
  id: number;
  title: string;
  date: Date;
  categoryId: number|null;
  category: ICategory|null;
  description: string;
}

export class ToDo {
  get Id(): number {
    return this.id;
  }
  set Id(value: number) {
    this.id= value;
  }

  get Title(): string {
    return this.title;
  }
  set Title(value: string) {
    this.title= value;
  }

  get Date(): Date {
    return this.date;
  }
  set Date(value: Date) {
    this.date= value;
  }

  get CategoryId(): number | null {
    return this.categoryId;
  }
  set CategoryId(value: number | null) {
    this.categoryId= value;
  }

  get Category(): Category | null {
    return this.Category;
  }

  set Category(value) {
    this.Category = value;
  }

  get Description(): string {
    return this.description;
  }
  set Description(value: string) {
    this.description= value;
  }

  constructor(
    private id: number=0,
    private title: string,
    private date: Date=new Date(Date.now()),
    private categoryId: number | null = null,
    private category: Category | null = null,
    private description: string=""
  )
  {
  }
}
