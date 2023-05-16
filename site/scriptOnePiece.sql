use onepiece;
show tables;

create table usuario (
 idUser int primary key auto_increment,
 Nome varchar(45) not null,
 Email varchar(60) not null, constraint chkEmail check(email like '%@%'),
 UF char(2) not null,
 dtNasc date,
 Senha varchar(40) not null,
 EpsAssistidos varchar(50) not null,
 personagemFav varchar(45) not null
 )auto_increment=1000;
 
 
 create table ResultadoQuiz (
 idQuiz int primary key auto_increment,
 pontuacao decimal(5,2),
 Iniciado datetime default current_timestamp,
 Finalizado datetime default current_timestamp,
 fkUser int,
 foreign key(fkUser) references cadastro(idUser)
);