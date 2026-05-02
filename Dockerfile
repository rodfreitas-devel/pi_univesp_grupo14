FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .

# Instala dependências do sistema se houver
RUN apt-get update && apt-get install -y gcc libmariadb-dev libmariadb-dev-compat     && pip install --no-cache-dir -r requirements.txt     && apt-get remove -y gcc && apt-get autoremove -y

COPY . .

# Comando correto para rodar Flask
CMD ["python", "app.py"]

