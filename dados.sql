-- MySQL dump 10.13  Distrib 8.0.46, for Linux (x86_64)
--
-- Host: localhost    Database: storage
-- ------------------------------------------------------
-- Server version	8.0.46

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `colaborador`
--

DROP TABLE IF EXISTS `colaborador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `colaborador` (
  `idColaborador` int NOT NULL,
  `idFilial` int NOT NULL,
  `idFuncao` int NOT NULL,
  `nome` text NOT NULL,
  `dataAdmissao` date NOT NULL,
  `dataDemissao` date DEFAULT NULL,
  `salarioMensal` double DEFAULT NULL,
  `salarioHora` double DEFAULT NULL,
  `sataNascimento` date DEFAULT NULL,
  `sexo` text,
  PRIMARY KEY (`idColaborador`),
  KEY `idFilial` (`idFilial`),
  KEY `idFuncao` (`idFuncao`),
  CONSTRAINT `colaborador_ibfk_1` FOREIGN KEY (`idFilial`) REFERENCES `filial` (`idFilial`),
  CONSTRAINT `colaborador_ibfk_2` FOREIGN KEY (`idFuncao`) REFERENCES `funcao` (`idFuncao`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colaborador`
--

LOCK TABLES `colaborador` WRITE;
/*!40000 ALTER TABLE `colaborador` DISABLE KEYS */;
INSERT INTO `colaborador` VALUES (1,1,1,'Joo Silva','2010-03-10',NULL,3000,20,'1980-05-14','Masculino'),(2,2,2,'Maria Souza','2015-11-15',NULL,5000,30,'1990-08-20','Feminino'),(3,1,3,'Pedro Oliveira','2017-06-12',NULL,4000,25,'1995-02-25','Masculino'),(4,3,4,'Ana Costa','2018-08-22',NULL,2200,18,'1992-04-18','Feminino'),(5,2,1,'Carlos Pereira','2012-01-25',NULL,3500,22,'1985-11-30','Masculino'),(6,1,5,'Fernanda Almeida','2016-03-05',NULL,5500,40,'1993-07-10','Feminino'),(7,3,3,'Lucas Martins','2017-07-17',NULL,4500,35,'1994-12-12','Masculino'),(8,1,2,'Juliana Rocha','2014-06-11',NULL,6000,50,'1988-03-25','Feminino'),(9,2,4,'Roberto Santos','2012-10-18',NULL,2000,15,'1983-09-14','Masculino'),(10,3,1,'Larissa Lima','2019-01-03',NULL,3000,25,'1995-05-06','Feminino'),(11,1,5,'Eduardo Costa','2014-11-23',NULL,4500,30,'1990-12-02','Masculino'),(12,2,2,'Amanda Silva','2013-05-10',NULL,7000,45,'1989-06-14','Feminino'),(13,3,3,'Tiago Oliveira','2012-07-20',NULL,5000,40,'1987-01-18','Masculino'),(14,1,4,'Carla Souza','2019-04-17',NULL,2200,18,'1994-11-02','Feminino'),(15,2,1,'Gustavo Almeida','2015-09-30',NULL,3500,28,'1992-07-27','Masculino'),(16,3,5,'Renata Costa','2017-10-10',NULL,4800,32,'1991-01-11','Feminino'),(17,1,2,'Fbio Silva','2011-02-19',NULL,6500,45,'1984-04-30','Masculino'),(18,2,3,'Isabela Rocha','2018-08-25',NULL,4500,35,'1996-10-12','Feminino'),(19,3,1,'Marcos Lima','2015-06-12',NULL,4000,30,'1992-03-21','Masculino'),(20,1,4,'Carolina Souza','2020-05-05',NULL,2300,18,'1994-08-15','Feminino'),(21,2,2,'Bruna Silva','2012-04-13',NULL,7000,50,'1990-11-09','Feminino'),(22,3,5,'Thiago Pereira','2014-03-05',NULL,4700,35,'1988-02-10','Masculino'),(23,1,4,'Letcia Santos','2020-01-22',NULL,2000,15,'1993-05-18','Feminino'),(24,2,3,'Rodrigo Almeida','2013-06-30',NULL,5000,40,'1986-08-13','Masculino'),(25,3,5,'Luciana Oliveira','2017-09-05',NULL,6000,42,'1995-01-10','Feminino'),(26,1,1,'Guilherme Costa','2014-02-14',NULL,3500,28,'1991-06-17','Masculino'),(27,2,2,'Mariana Rocha','2016-04-15',NULL,6500,50,'1992-07-05','Feminino'),(28,3,3,'Paulo Silva','2013-02-22',NULL,5000,35,'1989-12-30','Masculino'),(29,1,5,'Gabriela Pereira','2018-10-08',NULL,5500,38,'1994-04-02','Feminino'),(30,2,2,'Andr Costa','2014-09-12',NULL,7000,55,'1987-11-25','Masculino');
/*!40000 ALTER TABLE `colaborador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `escala`
--

DROP TABLE IF EXISTS `escala`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `escala` (
  `idEscala` int NOT NULL,
  `idColaborador` int NOT NULL,
  `idJornada` int NOT NULL,
  `idTurno` int NOT NULL,
  PRIMARY KEY (`idEscala`),
  KEY `idColaborador` (`idColaborador`),
  KEY `idJornada` (`idJornada`),
  KEY `idTurno` (`idTurno`),
  CONSTRAINT `escala_ibfk_1` FOREIGN KEY (`idColaborador`) REFERENCES `colaborador` (`idColaborador`),
  CONSTRAINT `escala_ibfk_2` FOREIGN KEY (`idJornada`) REFERENCES `jornada` (`idJornada`),
  CONSTRAINT `escala_ibfk_3` FOREIGN KEY (`idTurno`) REFERENCES `turno` (`idTurno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `escala`
--

LOCK TABLES `escala` WRITE;
/*!40000 ALTER TABLE `escala` DISABLE KEYS */;
/*!40000 ALTER TABLE `escala` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ferias`
--

DROP TABLE IF EXISTS `ferias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ferias` (
  `idFerias` int NOT NULL,
  `idColaborador` int NOT NULL,
  `dataInicio` date NOT NULL,
  `quantidadeDias` int NOT NULL,
  `dataSolicitacao` date DEFAULT NULL,
  `dataAprovacao` date DEFAULT NULL,
  `aprovadoPor` text,
  `status` text,
  PRIMARY KEY (`idFerias`),
  KEY `idColaborador` (`idColaborador`),
  CONSTRAINT `ferias_ibfk_1` FOREIGN KEY (`idColaborador`) REFERENCES `colaborador` (`idColaborador`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ferias`
--

LOCK TABLES `ferias` WRITE;
/*!40000 ALTER TABLE `ferias` DISABLE KEYS */;
/*!40000 ALTER TABLE `ferias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `filial`
--

DROP TABLE IF EXISTS `filial`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `filial` (
  `idFilial` int NOT NULL,
  `nomeFilial` text NOT NULL,
  PRIMARY KEY (`idFilial`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `filial`
--

LOCK TABLES `filial` WRITE;
/*!40000 ALTER TABLE `filial` DISABLE KEYS */;
INSERT INTO `filial` VALUES (1,'Filial A'),(2,'Filial B'),(3,'Filial C');
/*!40000 ALTER TABLE `filial` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `funcao`
--

DROP TABLE IF EXISTS `funcao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `funcao` (
  `idFuncao` int NOT NULL,
  `nomeFuncao` text NOT NULL,
  PRIMARY KEY (`idFuncao`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `funcao`
--

LOCK TABLES `funcao` WRITE;
/*!40000 ALTER TABLE `funcao` DISABLE KEYS */;
INSERT INTO `funcao` VALUES (1,'Analista'),(2,'Gerente'),(3,'Coordenador'),(4,'Assistente'),(5,'Desenvolvedor'),(6,'Coordenadora');
/*!40000 ALTER TABLE `funcao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jornada`
--

DROP TABLE IF EXISTS `jornada`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jornada` (
  `idJornada` int NOT NULL,
  `cargaHoraria` int NOT NULL,
  PRIMARY KEY (`idJornada`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jornada`
--

LOCK TABLES `jornada` WRITE;
/*!40000 ALTER TABLE `jornada` DISABLE KEYS */;
/*!40000 ALTER TABLE `jornada` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `turno`
--

DROP TABLE IF EXISTS `turno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `turno` (
  `idTurno` int NOT NULL,
  `dia` text NOT NULL,
  `horaInicio` text NOT NULL,
  `horaFim` text NOT NULL,
  PRIMARY KEY (`idTurno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `turno`
--

LOCK TABLES `turno` WRITE;
/*!40000 ALTER TABLE `turno` DISABLE KEYS */;
/*!40000 ALTER TABLE `turno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `userName` varchar(50) NOT NULL,
  `passwd` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES ('admin','adm123');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-05-02 21:02:35
