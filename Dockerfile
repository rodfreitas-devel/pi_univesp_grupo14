FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .

# Atualiza apt e instala dependências do sistema
RUN apt-get update &&     apt-get install -y gcc libmariadb-dev libmariadb-dev-compat &&     pip install --no-cache-dir -r requirements.txt &&     apt-get remove -y gcc && apt-get autoremove -y

COPY . .

CMD [python, app.py]

