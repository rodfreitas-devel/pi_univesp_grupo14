from server.db import get_connection

def check_login(username, password):
    conn = get_connection()
    try:
        with conn.cursor() as cursor:
            sql = "SELECT * FROM users WHERE username=%s AND password=%s"
            cursor.execute(sql, (username, password))
            result = cursor.fetchone()
            return result  # retorna None se não encontrar
    finally:
        conn.close()

