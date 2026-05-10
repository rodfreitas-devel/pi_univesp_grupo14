import pymysql

def get_connection():
    return pymysql.connect(
        host="127.0.0.1",
        user="usuario_app",
        password="senha123",
        database="pi_grupo14",
        charset="utf8mb4",
        cursorclass=pymysql.cursors.DictCursor  # ✅ retorna dict
    )