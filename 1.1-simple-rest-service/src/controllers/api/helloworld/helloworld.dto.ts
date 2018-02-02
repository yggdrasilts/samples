export class HelloWorld {

  private id: number;
  private name: string;

  constructor(id: number, name?: string) {
    this.id = id;
    if (name) { this.name = name; }
  }

  public getHelloWorld(): string {
    return `Hello ${this.name}!`;
  }

  public getId(): number {
    return this.id;
  }

  public replaceName(name: string): HelloWorld {
    this.name = name;
    return this;
  }

}
