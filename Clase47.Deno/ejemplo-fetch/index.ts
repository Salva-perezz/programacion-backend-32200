const response = await fetch("https://jsonplaceholder.typicode.com/todos/2");

const json = await response.json();

console.log("JSON:", json);
