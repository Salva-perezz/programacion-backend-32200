class Employee {
  constructor(data) {
    this.name = data.name;
  }
  speak() {
    console.log(`Hi, I'm a ${this.type} employee. My name is ${this.name}`);
  }
}

class FullTimeEmployee extends Employee {
  constructor(data) {
    super(data);
    this.type = "fullTime";
  }
}

class PartTimeEmployee extends Employee {
  constructor(data) {
    super(data);
    this.type = "partTime";
  }
}

class ContractorEmployee extends Employee {
  constructor(data) {
    super(data);
    this.type = "contractor";
  }
}

class MyEmployeeFactory {
  static createEmployee(data) {
    switch (data.type) {
      case "fullTime":
        return new FullTimeEmployee(data);
      case "partTime":
        return new PartTimeEmployee(data);
      case "contractor":
        return new ContractorEmployee(data);
      default:
        break;
    }
  }
}

const employeesToCreate = [
  {
    type: "fullTime",
    name: "Juan",
  },
  {
    type: "partTime",
    name: "Agustina",
  },
  {
    type: "contractor",
    name: "Jose",
  },
];

const createdEmployees = employeesToCreate.map((employee) => {
  return MyEmployeeFactory.createEmployee(employee);
});

createdEmployees.forEach((employee) => {
  employee.speak();
});
