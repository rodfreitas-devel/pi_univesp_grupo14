from server.db import get_connection

def check_login(username, password):
    username = username.strip()
    password = password.strip()

    conn = get_connection()
    try:
        cursor = conn.cursor()

        sql = """
            SELECT userName, passwd
            FROM usuario
            WHERE TRIM(userName) = %s
        """
        cursor.execute(sql, (username,))
        user = cursor.fetchone()

        if not user:
            return None

        if user["passwd"].strip() == password:
            return user

        return None

    except Exception as e:
        return None

    finally:
        conn.close()