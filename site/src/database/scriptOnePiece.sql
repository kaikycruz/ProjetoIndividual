create database OnePiece;
use onepiece;
show tables; 


create table usuario (
 idUser int primary key auto_increment,
 Nome varchar(45) not null,
 Email varchar(60) not null, constraint chkEmail check(email like '%@%'),
 UF char(2) not null,
 dtNasc date,
 Senha varchar(40) not null,
 fkEps int,
 foreign key (fkEps) references epsAssistidos(idEps),
 fkPersonagem int,
 foreign key (fkPersonagem) references personagem(idPersonagem)
 )auto_increment=1000;
 
 
 create table personagem (
 idPersonagem int primary key auto_increment,
 nomePersonagem varchar(45)
 );
 
 insert into personagem values
 (null, 'Luffy'),
 (null, 'Zoro'),
 (null, 'Sanji'),
 (null, 'Jimbei'),
 (null, 'Brook'),
 (null, 'Robin'),
 (null, 'Nami'),
 (null, 'Franky'),
 (null, 'Usopp'),
 (null, 'Chopper');
 
 create table epsAssistidos (
 idEps int primary key auto_increment,
 qtdEps varchar(45)
 );
 
 insert into epsAssistidos values 
 (null, 'Menos de 200 eps'),
 (null, 'quase 500 eps'),
 (null, 'quase 800 eps'),
 (null, 'ja estou nos semanais!'),
 (null, 'ja estou no Manga!');
 
 
 desc usuario;

select * from usuario;
select * from epsAssistidos;
