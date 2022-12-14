create database coderhouse; => Crea un base de datos con nombre "coderhouse".

show databases; => Nos lista las bases de datos que tenemos creadas.

use coderhouse; => Le indicamos al cliente que base de datos utilizar.

----------------------------------------------------------------------------------------------------

create table dog (id int primary key auto_increment not null, name varchar(50) not null, breed varchar(20) not null, age int not null, email varchar(50) not null);

select * from dog;

insert into dog (name, breed, age, email) values ("Roberto", "Doberman", 2, "agustina@mail.com");

select * from dog where age = 5;

select name, email, breed from dog where age = 5;

select * from dog where breed = "Golden";

update dog set age = 6 where name = "Firulais";

delete from dog where id = 4;

drop table dog;

drop database coderhouse;


------------------- DESAFIO --------------------------------------------------------------------

create databse mibase;

use mibase;

CREATE TABLE usuarios (id int primary key auto_increment not null, nombre varchar(50) not null, apellido varchar(50) not null, edad int, email varchar(50) not null);

insert into usuarios (nombre, apellido, edad, email) values ("Juan", "Perez", 23, "jp@gmail.com");
insert into usuarios (nombre, apellido, edad, email) values ("Pedro", "Mei", 21, "pm@gmail.com");
insert into usuarios (nombre, apellido, edad, email) values ("Juana", "Suarez", 25, "js@gmail.com");

select * from usuarios;

delete from usuarios where id = 2;

update usuarios set edad = 24 where id = 1;