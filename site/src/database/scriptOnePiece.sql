create database OnePiece;
use onepiece;
show tables; 

drop database onepiece;


create table usuario (
 idUser int primary key auto_increment,
 Nome varchar(45) not null,
 Email varchar(60) not null, constraint chkEmail check(email like '%@%'),
 UF char(2),
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
 
 
 create table resultadosQuiz (
 idQuiz int primary key auto_increment,
 pontuacao int,
 fkUser int,
 foreign key (fkUser) references usuario(idUser)
 );
 
 select * from resultadosQuiz;
 
 drop table resultadosQuiz;
 desc usuario;

select * from personagem;
select * from usuario;
select * from epsAssistidos;


select nome, pontuacao from resultadosQuiz join usuario on fkUser = idUser order by  pontuacao  desc;


select count(usuario.fkPersonagem) as PersonagemFavorito , personagem.nomePersonagem as NomePersonagem   
        from usuario join personagem on fkPersonagem = idPersonagem group by nomePersonagem;


select count(usuario.fkEps) as EpsAssistidos, epsassistidos.qtdEps as QuantidadeEps
    from usuario join epsassistidos on fkEps = idEps group by qtdEps;