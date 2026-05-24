from server.db import get_connection

def salvar_colaborador(
    idFilial,
    idFuncao,
    nome,
    cpf,
    dataNascimento,
    dataAdmissao,
    dataDemissao,
    salarioMensal,
    salarioHora,
    sexo
):
    conn = get_connection()

    try:
        cursor = conn.cursor()

        sql = """
            INSERT INTO colaborador (
                idFilial
                idFuncao,
                nome,
                cpf,
                dataNascimento,
                dataAdmissao,
                dataDemissao,
                salarioMensal,
                salarioHora,
                sexo
            )
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
        """

        valores = (
            idFilial,
            idFuncao,
            nome,
            cpf,
            dataNascimento,
            dataAdmissao,
            dataDemissao if dataDemissao else None,
            salarioMensal,
            salarioHora,
            sexo
        )

        cursor.execute(sql, valores)

        conn.commit()

        return True

    except Exception as e:
        print("ERRO AO SALVAR COLABORADOR:")
        print(e)

        return False

    finally:
        conn.close()