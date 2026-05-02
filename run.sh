#!/usr/bin/env bash

podman run -d --replace \
  --name mysql-db \
  -e MYSQL_ROOT_PASSWORD=root123 \
  -e MYSQL_DATABASE=storage \
  -p 3306:3306 \
  -v "$(pwd)/mysql_data:/var/lib/mysql" \
  docker.io/library/mysql:8.0

podman exec -it mysql-db bash
#cd /var/lib/mysql
