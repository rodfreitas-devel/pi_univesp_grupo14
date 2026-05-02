#!/usr/bin/env bash

podman run -d \
  --name mysql-db \
  -e MYSQL_ROOT_PASSWORD=root123 \
  -e MYSQL_DATABASE=storage \
  -p 3306:3306 \
  -v ./mysql_data:/var/lib/mysql \
  docker.io/library/mysql:8.0

podman exec -it mysql-db bash
