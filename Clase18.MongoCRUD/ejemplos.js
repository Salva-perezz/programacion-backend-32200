// use ejemplo <= Usamos la base de datos "ejemplo" si no existe mongo la crea

db.persona.insertOne({ name: "Salva", lastname: "Perez" });
db.persona.insertMany([{ name: "Pepe", lastname: "Veraz" },{ name: "Juana", lastname: "Suarez" }]); // Se inserta de forma ordenada
db.persona.insertMany([{ name: "Pepe", lastname: "Veraz" },{ name: "Juana", lastname: "Suarez" }], { ordered: false }); // Se inserta de forma desordenada
db.persona.insertMany([{ name: "Pepe", lastname: "Veraz" },{ name: "Juana", lastname: "Suarez" }]);


db.persona.find().pretty() // Nos busa todos los documentos
db.persona.find({ name: 'Salva' }) // Nos busa todos los documentos que en "name" tengan de valor "Salva"
db.persona.findOne({ name: 'Salva' }) // Nos busca el primer documento que coincida con el filtro

db.persona.estimatedDocumentCount() // Nos devuelve cuantos documentos hay en nuestra collecion
db.persona.countDocuments({ name: "Salva" }) // Nos devuelve cuantos documentos hay en nuestra collecion que coincidan con el filtro que le mandemos