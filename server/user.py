from server.db import get_connection

def check_login(username, password):
    """
    Retorna o usuário se encontrado na tabela 'usuario', caso contrário None
    """
    conn = get_connection()
    try:
        with conn.cursor() as cursor:
            sql = "SELECT * FROM usuario WHERE userName=%s AND passwd=%s"
            cursor.execute(sql, (username, password))
            result = cursor.fetchone()  # retorna None se não encontrar
            return result
    finally:
        conn.close()

