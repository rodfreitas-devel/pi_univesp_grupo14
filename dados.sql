DROP TABLE IF EXISTS usuario;

CREATE TABLE usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userName VARCHAR(50) NOT NULL UNIQUE,
    passwd VARCHAR(255) NOT NULL
);

INSERT INTO usuario (userName, passwd)
VALUES ('admin', '123');

DROP TABLE IF EXISTS colaborador;

CREATE TABLE colaborador (
    idColaborador INT NOT NULL,
    idFilial INT NOT NULL,
    idFuncao INT NOT NULL,
    nome TEXT NOT NULL,
    dataAdmissao DATE NOT NULL,
    dataDemissao DATE DEFAULT NULL,
    salarioMensal DOUBLE DEFAULT NULL,
    salarioHora DOUBLE DEFAULT NULL,
    sataNascimento DATE DEFAULT NULL,
    sexo TEXT,
    PRIMARY KEY (idColaborador),
    KEY idFilial (idFilial),
    KEY idFuncao (idFuncao),
    CONSTRAINT colaborador_ibfk_1 FOREIGN KEY (idFilial) REFERENCES filial (idFilial),
    CONSTRAINT colaborador_ibfk_2 FOREIGN KEY (idFuncao) REFERENCES funcao (idFuncao)
);

INSERT INTO colaborador VALUES
(1,1,1,'Joo Silva','2010-03-10',NULL,3000,20,'1980-05-14','Masculino'),
(2,2,2,'Maria Souza','2015-11-15',NULL,5000,30,'1990-08-20','Feminino'),
(3,1,3,'Pedro Oliveira','2017-06-12',NULL,4000,25,'1995-02-25','Masculino'),
(4,3,4,'Ana Costa','2018-08-22',NULL,2200,18,'1992-04-18','Feminino'),
(5,2,1,'Carlos Pereira','2012-01-25',NULL,3500,22,'1985-11-30','Masculino'),
(6,1,5,'Fernanda Almeida','2016-03-05',NULL,5500,40,'1993-07-10','Feminino'),
(7,3,3,'Lucas Martins','2017-07-17',NULL,4500,35,'1994-12-12','Masculino'),
(8,1,2,'Juliana Rocha','2014-06-11',NULL,6000,50,'1988-03-25','Feminino'),
(9,2,4,'Roberto Santos','2012-10-18',NULL,2000,15,'1983-09-14','Masculino'),
(10,3,1,'Larissa Lima','2019-01-03',NULL,3000,25,'1995-05-06','Feminino'),
(11,1,5,'Eduardo Costa','2014-11-23',NULL,4500,30,'1990-12-02','Masculino'),
(12,2,2,'Amanda Silva','2013-05-10',NULL,7000,45,'1989-06-14','Feminino'),
(13,3,3,'Tiago Oliveira','2012-07-20',NULL,5000,40,'1987-01-18','Masculino'),
(14,1,4,'Carla Souza','2019-04-17',NULL,2200,18,'1994-11-02','Feminino'),
(15,2,1,'Gustavo Almeida','2015-09-30',NULL,3500,28,'1992-07-27','Masculino'),
(16,3,5,'Renata Costa','2017-10-10',NULL,4800,32,'1991-01-11','Feminino'),
(17,1,2,'Fbio Silva','2011-02-19',NULL,6500,45,'1984-04-30','Masculino'),
(18,2,3,'Isabela Rocha','2018-08-25',NULL,4500,35,'1996-10-12','Feminino'),
(19,3,1,'Marcos Lima','2015-06-12',NULL,4000,30,'1992-03-21','Masculino'),
(20,1,4,'Carolina Souza','2020-05-05',NULL,2300,18,'1994-08-15','Feminino'),
(21,2,2,'Bruna Silva','2012-04-13',NULL,7000,50,'1990-11-09','Feminino'),
(22,3,5,'Thiago Pereira','2014-03-05',NULL,4700,35,'1988-02-10','Masculino'),
(23,1,4,'Letcia Santos','2020-01-22',NULL,2000,15,'1993-05-18','Feminino'),
(24,2,3,'Rodrigo Almeida','2013-06-30',NULL,5000,40,'1986-08-13','Masculino'),
(25,3,5,'Luciana Oliveira','2017-09-05',NULL,6000,42,'1995-01-10','Feminino'),
(26,1,1,'Guilherme Costa','2014-02-14',NULL,3500,28,'1991-06-17','Masculino'),
(27,2,2,'Mariana Rocha','2016-04-15',NULL,6500,50,'1992-07-05','Feminino'),
(28,3,3,'Paulo Silva','2013-02-22',NULL,5000,35,'1989-12-30','Masculino'),
(29,1,5,'Gabriela Pereira','2018-10-08',NULL,5500,38,'1994-04-02','Feminino'),
(30,2,2,'Andr Costa','2014-09-12',NULL,7000,55,'1987-11-25','Masculino');

DROP TABLE IF EXISTS escala;

CREATE TABLE escala (
    idEscala INT NOT NULL,
    idColaborador INT NOT NULL,
    idJornada INT NOT NULL,
    idTurno INT NOT NULL,
    PRIMARY KEY (idEscala),
    KEY idColaborador (idColaborador),
    KEY idJornada (idJornada),
    KEY idTurno (idTurno),
    CONSTRAINT escala_ibfk_1 FOREIGN KEY (idColaborador) REFERENCES colaborador (idColaborador),
    CONSTRAINT escala_ibfk_2 FOREIGN KEY (idJornada) REFERENCES jornada (idJornada),
    CONSTRAINT escala_ibfk_3 FOREIGN KEY (idTurno) REFERENCES turno (idTurno)
);

DROP TABLE IF EXISTS ferias;

CREATE TABLE ferias (
    idFerias INT NOT NULL,
    idColaborador INT NOT NULL,
    dataInicio DATE NOT NULL,
    quantidadeDias INT NOT NULL,
    dataSolicitacao DATE DEFAULT NULL,
    dataAprovacao DATE DEFAULT NULL,
    aprovadoPor TEXT,
    status TEXT,
    PRIMARY KEY (idFerias),
    KEY idColaborador (idColaborador),
    CONSTRAINT ferias_ibfk_1 FOREIGN KEY (idColaborador) REFERENCES colaborador (idColaborador)
);

DROP TABLE IF EXISTS filial;

CREATE TABLE filial (
    idFilial INT NOT NULL,
    nomeFilial TEXT NOT NULL,
    PRIMARY KEY (idFilial)
);

INSERT INTO filial VALUES
(1,'Filial A'),
(2,'Filial B'),
(3,'Filial C');

DROP TABLE IF EXISTS funcao;

CREATE TABLE funcao (
    idFuncao INT NOT NULL,
    nomeFuncao TEXT NOT NULL,
    PRIMARY KEY (idFuncao)
);

INSERT INTO funcao VALUES
(1,'Analista'),
(2,'Gerente'),
(3,'Coordenador'),
(4,'Assistente'),
(5,'Desenvolvedor'),
(6,'Coordenadora');

DROP TABLE IF EXISTS jornada;

CREATE TABLE jornada (
    idJornada INT NOT NULL,
    cargaHoraria INT NOT NULL,
    PRIMARY KEY (idJornada)
);

DROP TABLE IF EXISTS turno;

CREATE TABLE turno (
    idTurno INT NOT NULL,
    dia TEXT NOT NULL,
    horaInicio TEXT NOT NULL,
    horaFim TEXT NOT NULL,
    PRIMARY KEY (idTurno)
);