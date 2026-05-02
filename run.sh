#!/usr/bin/env bash

echo "[+] Subindo containers..."

podman-compose up -d --build

echo "[+] Aguardando MySQL iniciar..."
sleep 10

echo "[+] Containers rodando:"
podman ps

echo "[+] Flask disponível em: http://localhost:5000"
