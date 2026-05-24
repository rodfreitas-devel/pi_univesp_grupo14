from flask import Flask, render_template, request, redirect, url_for
from server.user import check_login
from server.colaborador import salvar_colaborador as salvar_colaborador_db

app = Flask(
    __name__,
    template_folder="client/pages",
    static_folder="client/static"
)

# -----------------------------
# HOME
# -----------------------------
@app.route("/")
@app.route("/index")
def index():
    return redirect(url_for("login"))


@app.route("/home")
def home():
    return render_template("home.html")


# -----------------------------
# COLABORADOR
# -----------------------------

# Página do formulário (GET)
@app.route("/colaborador/novo", methods=["GET"])
def colaborador_novo():
    return render_template("colaborador-novo.html")


# Salvar colaborador (POST)
@app.route("/colaborador/salvar", methods=["POST"])
def salvar_colaborador_route():

    dados = {
        "idFilial": request.form.get("idFilial"),
        "idFuncao": request.form.get("idFuncao"),
        "nome": request.form.get("nome"),
        "cpf": request.form.get("cpf"),
        "dataNascimento": request.form.get("dataNascimento"),
        "dataAdmissao": request.form.get("dataAdmissao"),
        "dataDemissao": request.form.get("dataDemissao"),
        "salarioMensal": request.form.get("salarioMensal"),
        "salarioHora": request.form.get("salarioHora"),
        "sexo": request.form.get("sexo")
    }

    try:
        sucesso = salvar_colaborador_db(
            dados["idFilial"],
            dados["idFuncao"],
            dados["nome"],
            dados["cpf"],
            dados["dataNascimento"],
            dados["dataAdmissao"],
            dados["dataDemissao"],
            dados["salarioMensal"],
            dados["salarioHora"],
            dados["sexo"]
        )

        if sucesso:
            return redirect(url_for("colaborador_novo"))

        return "Erro ao salvar colaborador"

    except Exception as e:
        print("ERRO REAL MYSQL:", e)
        return f"Erro: {e}"


@app.route("/colaborador/lista")
def colaborador_lista():
    return render_template("colaborador-lista.html")


# -----------------------------
# ESCALA
# -----------------------------
@app.route("/escala/novo")
def escala_novo():
    return render_template("escala-novo.html")


@app.route("/escala/lista")
def escala_lista():
    return render_template("escala-lista.html")


# -----------------------------
# FÉRIAS
# -----------------------------
@app.route("/ferias/novo")
def ferias_novo():
    return render_template("ferias-novo.html")


@app.route("/ferias/lista")
def ferias_lista():
    return render_template("ferias-lista.html")

# -----------------------------
# FALTAS
# -----------------------------

@app.route("/faltas/novo")
def faltas_novo():
    return render_template("faltas-novo.html")

@app.route("/faltas/lista")
def faltas_lista():
    return render_template("faltas-lista.html")

# -----------------------------
# INDICADORES
# -----------------------------
@app.route("/indicadores")
def indicadores():
    return render_template("indicadores.html")


# -----------------------------
# LOGIN
# -----------------------------
@app.route("/login", methods=["GET", "POST"])
def login():

    error = None

    if request.method == "POST":

        username = request.form.get("user")
        password = request.form.get("password")

        if not username or not password:
            error = "Preencha todos os campos."
            return render_template("login.html", error=error)

        user = check_login(username, password)

        if user:
            return redirect(url_for("home"))

        error = "Credenciais inválidas. Tente novamente."

    return render_template("login.html", error=error)


# -----------------------------
# MAIN
# -----------------------------
if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )