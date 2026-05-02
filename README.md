# Controle de RH

Aplicação de controle de RH, que gera faltas, atestados, faltas, dados de absenteísmo e
_turnover_, com geração de gráficos.

---

# Controle de RH

Aplicação de controle de Recursos Humanos (RH) voltada para o gerenciamento de faltas, 
atestados, dados de absenteísmo e turnover, com geração de gráficos para análise e tomada 
de decisão.

---

## Funcionalidades

- Registro de faltas e atestados de funcionários
- Monitoramento de absenteísmo e frequência
- Cálculo de indicadores de turnover
- Visualização de dados em gráficos interativos
- Exportação de relatórios para análise

---

## Tecnologias

- **Backend:** Python (Flask)
- **Banco de Dados:** MySQL
- **Frontend:** HTML/CSS/JS (ou outro framework se houver)
- **Containerização (opcional):** Podman / Docker
- **Gráficos:** Matplotlib / Plotly / Seaborn (dependendo da implementação)

---

## Instalação e Execução

### 1. Configurar MySQL

```bash
podman run -d \
  --name mysql-db \
  -e MYSQL_ROOT_PASSWORD=suaSenha \
  -e MYSQL_DATABASE=storage \
  -p 3306:3306 \
  -v ./mysql_data:/var/lib/mysql \
  docker.io/library/mysql:8.0
```

### 2. Rodar a aplicação Flask
```bash
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py
```

- A aplicação estará disponível em http://localhost:5000

#### Uso
- Acesse a interface web da aplicação
- Cadastre funcionários, registre faltas e atestados
- Visualize gráficos de absenteísmo e turnover
- Gere relatórios para análise interna

#### Contribuição
- Faça um fork do projeto
- Crie um branch para sua feature: git checkout -b minha-feature
- Faça commits claros e objetivos
- Abra um Pull Request para revisão


