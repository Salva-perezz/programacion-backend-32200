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