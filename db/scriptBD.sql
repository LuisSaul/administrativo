create database Administrativos;
use Administrativos;

create table Usuario(
	idUsuario int primary key auto_increment,
	nombre varchar(30) not null,
    contraseña varchar(30) not null,
    rol tinyint
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

alter table Solicitante  add foreign key (idUsuario) references Usuario(idUsuario);