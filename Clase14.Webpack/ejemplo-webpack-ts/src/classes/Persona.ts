export default class Persona {
  private firstName: string;
  private lastName: string;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullname(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
