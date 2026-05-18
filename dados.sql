DROP TABLE IF EXISTS escala;
DROP TABLE IF EXISTS ferias;
DROP TABLE IF EXISTS colaborador;
DROP TABLE IF EXISTS jornada;
DROP TABLE IF EXISTS turno;
DROP TABLE IF EXISTS funcao;
DROP TABLE IF EXISTS filial;
DROP TABLE IF EXISTS usuario;

-- USUARIO

CREATE TABLE usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userName VARCHAR(50) NOT NULL UNIQUE,
    passwd VARCHAR(255) NOT NULL
);

INSERT INTO usuario (userName, passwd)
VALUES ('admin', '123');

-- FILIAL

CREATE TABLE filial (
    idFilial INT AUTO_INCREMENT PRIMARY KEY,
    nomeFilial VARCHAR(100) NOT NULL
);

-- FUNCAO

CREATE TABLE funcao (
    idFuncao INT AUTO_INCREMENT PRIMARY KEY,
    nomeFuncao VARCHAR(100) NOT NULL
);

-- JORNADA

CREATE TABLE jornada (
    idJornada INT AUTO_INCREMENT PRIMARY KEY,
    cargaHoraria INT NOT NULL
);

-- TURNO

CREATE TABLE turno (
    idTurno INT AUTO_INCREMENT PRIMARY KEY,
    dia VARCHAR(30) NOT NULL,
    horaInicio TIME NOT NULL,
    horaFim TIME NOT NULL
);

-- COLABORADOR

CREATE TABLE colaborador (
    idColaborador INT AUTO_INCREMENT PRIMARY KEY,
    idFilial INT NOT NULL,
    idFuncao INT NOT NULL,
    nome VARCHAR(150) NOT NULL,
    dataAdmissao DATE NOT NULL,
    dataDemissao DATE DEFAULT NULL,
    salarioMensal DOUBLE DEFAULT NULL,
    salarioHora DOUBLE DEFAULT NULL,
    dataNascimento DATE DEFAULT NULL,
    sexo VARCHAR(20),

    CONSTRAINT fk_colaborador_filial
        FOREIGN KEY (idFilial)
        REFERENCES filial(idFilial),

    CONSTRAINT fk_colaborador_funcao
        FOREIGN KEY (idFuncao)
        REFERENCES funcao(idFuncao)
);

-- ESCALA

CREATE TABLE escala (
    idEscala INT AUTO_INCREMENT PRIMARY KEY,
    idColaborador INT NOT NULL,
    idJornada INT NOT NULL,
    idTurno INT NOT NULL,

    CONSTRAINT fk_escala_colaborador
        FOREIGN KEY (idColaborador)
        REFERENCES colaborador(idColaborador),

    CONSTRAINT fk_escala_jornada
        FOREIGN KEY (idJornada)
        REFERENCES jornada(idJornada),

    CONSTRAINT fk_escala_turno
        FOREIGN KEY (idTurno)
        REFERENCES turno(idTurno)
);

-- FERIAS

CREATE TABLE ferias (
    idFerias INT AUTO_INCREMENT PRIMARY KEY,
    idColaborador INT NOT NULL,
    dataInicio DATE NOT NULL,
    quantidadeDias INT NOT NULL,
    dataSolicitacao DATE DEFAULT NULL,
    dataAprovacao DATE DEFAULT NULL,
    aprovadoPor VARCHAR(100),
    status VARCHAR(30),

    CONSTRAINT fk_ferias_colaborador
        FOREIGN KEY (idColaborador)
        REFERENCES colaborador(idColaborador)
);