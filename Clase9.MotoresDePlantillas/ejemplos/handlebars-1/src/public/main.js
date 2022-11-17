const template = Handlebars.compile(`
<h1>Datos Personales</h1>
<ul>
    <li>Nombre: {{nombre}}</li>
    <li>Apellido: {{apellido}}</li>
    <li>Edad: {{edad}}</li>
    <li>Email: {{mail}}</li>
    <li>Telefono: {{telefono}}</li>
</ul>
`);

console.log("Template", template);

const html = template({
  nombre: "Salvador",
  apellido: "Perez",
  edad: 21,
  mail: "salva@mail.com",
  telefono: 28192735,
});

console.log("HTML", html);

document.querySelector("body").innerHTML = html;
