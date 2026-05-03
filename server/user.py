from server.db import get_connection


def check_login(username, password):
    conn = get_connection()
    try:
        with conn.cursor() as cursor:
            sql = "SELECT userName, passwd FROM usuario WHERE userName=%s AND passwd=%s"
            cursor.execute(sql, (username, password))
            result = cursor.fetchone()

            return result
    except Exception as e:
        print(f"ERRO NO BANCO: {e}")
        return None  # Se der erro, retorna nulo para não logar
    finally:
        conn.close()