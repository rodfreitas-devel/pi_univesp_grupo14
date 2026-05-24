# Projeto acadêmico desenvolvido para fins educacionais.

- Instituição: UNIVESP
- Cursos: Engenharia da Computação e Ciência de Dados.

---

## SOBRE O PROJETO
## Sistema de Gestão de Colaboradores (RH Fullstack)

O Sistema de Gestão de Colaboradores é uma aplicação web fullstack desenvolvida para o setor de Recursos Humanos, com o objetivo de centralizar e facilitar o gerenciamento de informações dos colaboradores de uma organização.

A plataforma permite o controle de colaboradores, escalas de trabalho, férias e faltas, além da geração de indicadores estratégicos como turnover e absenteísmo, auxiliando na tomada de decisões da gestão.

---

## OBJETIVO

Desenvolver uma solução web completa para RH que permita:

- Centralizar dados dos colaboradores
- Automatizar processos administrativos
- Melhorar a eficiência operacional do setor de RH
- Gerar indicadores estratégicos para análise gerencial

---

## FUNCIONALIDADES

### Controle de Acesso

- Login de usuários
- Autenticação de acesso ao sistema

### Gestão de Colaboradores

- Cadastro de colaboradores
- Listagem de colaboradores
- Edição e manutenção de dados

### Escala de Trabalho

- Cadastro de escalas
- Visualização de turnos

### Controle de Férias

- Solicitação de férias
- Registro e acompanhamento

### Controle de Faltas

- Registro de ausências
- Consulta de histórico

### Indicadores de RH

- Cálculo de turnover
- Cálculo de absenteísmo
- Visualização de dashboards

---

## TECNOLOGIAS UTILIZADAS

### Banco de Dados

- MySQL

### Backend

- Python3
- Flask
- PyMySQL

### Frontend

- HTML5
- CSS3
- JavaScript
- Bootstrap

---

## INSTALAÇÃO E EXECUÇÃO

### Clonar o repositório

- git clone https://github.com/rodfreitas-devel/pi_univesp_grupo14.git
- cd pi_univesp_grupo14

### Criar ambiente virtual

python -m venv venv

### Ativar no Windows

venv\Scripts\activate

### Ativar no Linux/MAC

source venv/bin/activate

### Instalar dependências

pip install -r requirements.txt

---

## CONFIGURAÇÃO DO BANCO DE DADOS

- Criar banco MySQL
- Executar o arquivo dados.sql
- Configurar variáveis de ambiente:

### .env

- DB_HOST=seu_host
- DB_USER=seu_usuario
- DB_PASSWORD=sua_senha
- DB_NAME=nome_do_banco
- DB_PORT=3306

---

## EXECUTAR O PROJETO
python3 app.py

---

## DEPLOY
O projeto foi publicado em Railway e pode ser acessado pelo seguinte link: https://piunivespgrupo14-production.up.railway.app