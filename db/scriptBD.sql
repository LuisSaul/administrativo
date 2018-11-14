drop database if exists Administrativos;
create database Administrativos;
use Administrativos;

create table Usuario(
	id int primary key auto_increment,
	user varchar(30) not null,
    password varchar(30) not null,
    type tinyint
);

create table Solicitante(
	id_solicitante int primary key auto_increment,
	nombre varchar(30) not null,
    apellidoPat varchar(20) not null,
    apellidoMat varchar(20) not null,
    estado_civil tinyint not null,
    direccion varchar(100) not null,
    email varchar(120) not null,
    telefono varchar(15) not null,
    fecha_registro date not null,
    idUsuario int
);

alter table Solicitante  add foreign key (idUsuario) references Usuario(id);