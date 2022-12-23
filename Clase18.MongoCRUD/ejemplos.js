// use ejemplo <= Usamos la base de datos "ejemplo" si no existe mongo la crea

db.persona.insertOne({ name: "Salva", lastname: "Perez" });
db.persona.insertMany([{ name: "Pepe", lastname: "Veraz" },{ name: "Juana", lastname: "Suarez" }]); // Se inserta de forma ordenada
db.persona.insertMany([{ name: "Pepe", lastname: "Veraz" },{ name: "Juana", lastname: "Suarez" }], { ordered: false }); // Se inserta de forma desordenada



db.persona.find().pretty() // Nos busa todos los documentos
db.persona.find({ name: 'Salva' }) // Nos busa todos los documentos que en "name" tengan de valor "Salva"
db.persona.findOne({ name: 'Salva' }) // Nos busca el primer documento que coincida con el filtro

db.persona.estimatedDocumentCount() // Nos devuelve cuantos documentos hay en nuestra collecion
db.persona.countDocuments({ name: "Salva" }) // Nos devuelve cuantos documentos hay en nuestra collecion que coincidan con el filtro que le mandemos

// DESAFIO 1:

// use empresa
db.createCollection('clientes')

db.clientes.insertOne({ nombre: "Salva", edad: "Perez"})
db.clientes.insertMany([{ nombre: "Pepe", edad: "Perez"},{ nombre: "Jose", edad: "Martinez"},{ nombre: "Juana", edad: "Suarez"}])

db.articulos.insertMany([{ nombre: "Lapiz", precio: 120, stock: 100},{ nombre: "Goma", precio: 150, stock: 500},{ nombre: "Compas", precio: 200, stock: 150},{ nombre: "Liquit", precio: 60, stock: 1000}])

// show collections

db.clientes.find()
db.articulos.find()

db.articulos.estimatedDocumentCount()

// EJEMPLO 2

db.articulos.find({ $and: [{ nombre: "Lapiz" }, { stock: 100 }] })
db.articulos.find({ $or: [{ precio: 120 }, { stock: 500 }, { nombre: "Compas"}] })

db.articulos.find({ precio: { $lt: 150}})
db.articulos.find({ precio: { $lte: 150}})

db.articulos.find({ precio: { $gt: 150 } })
db.articulos.find({ precio: { $gte: 150 } })

db.articulos.find({ $or: [{ precio: { $gte: 150 } }, { stock: { $gte: 500 } }] })

db.articulos.find({precio: { $ne: 120 }})
db.articulos.find({precio: { $eq: 120 }})

db.articulos.find({ nombre: { $exists: true }})
db.articulos.find({ nombre: { $in: ["Lapiz", "Goma"] }})
db.articulos.find({ nombre: { $nin: ["Lapiz", "Goma"] }})
db.articulos.find({ nombre: { $size: 4}})
db.articulos.find({ nombre: { $all: ["Lapiz", "Goma"] }})

db.articulos.distinct("nombre")

db.articulos.find({}, { nombre: 1, _id: 0, precio: 1 })

db.articulos.find().sort({ precio: 1 })
db.articulos.find().sort({ precio: -1 })

db.articulos.find().limit(48).offset(96)

db.articulos.updateOne({ nombre: "Lapiz" }, { $set: { nombre: "Pincel"} })

db.arituclos.findOneAndDelete({ precio: 150 }, { sort: 1 })

/*
Pasos para crear un usuario

  - Sobre la base de datos admin (use admin) ejecutar los siguiente comandos:
            db.createUser(
    {
      user: "salva", El usuario que quiereas
      pwd: "qwerty123", El password que quieras
      roles: [
         { role: "read", db: "mibase" } Este usuario solo tiene permiso de lectura
      ]
    }
  )

    db.createUser(
    {
      user: "pepe", El usuario que quieras
      pwd: "qwerty123", El password que quieras
      roles: [
         { role: "readWrite", db: "mibase" } Este usuario tiene permisos de lectura y escritura
      ]
    }
  )

  Una vez hecho esto salimos de mongo cli y en la consola en la que tenemos iniciado el servidor de mongo apretamos ctrl + c hasta que se termine el proceso y volvemos a correrlo agregandole --auth, ejemplo: mongod --auth --dbpath ./la/ruta/a/tu/carpeta
  Una vez iniciado nuevamente el servidor vamos a la consola donde teniamos nuestro mongo cli e iniciamos nuevamente el cliente de esta forma mongo -u [user] -p [password]
*/

db.createUser({ user: 'salva', pwd: 'qwerty123', roles: [{role: 'read', db: 'ejemplo'}]})
