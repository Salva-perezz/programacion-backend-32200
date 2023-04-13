export default class Persona {
  constructor(id, { name, age }) {
    (this.id = id), (this.name = name);
    this.age = age;
  }
}
