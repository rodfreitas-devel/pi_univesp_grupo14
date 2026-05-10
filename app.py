from flask import Flask, render_template, request, redirect, url_for
from server.user import check_login

app = Flask(
    __name__,
    template_folder="client/pages",
    static_folder="client/static"
)

@app.route("/")
@app.route("/index")
def index():
    return redirect(url_for("login"))

@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/colaborador/novo")
def colaborador_novo():
    return render_template("colaborador-novo.html")

@app.route("/colaborador/lista")
def colaborador_lista():
    return render_template("colaborador-lista.html")

@app.route("/escala/novo")
def escala_novo():
    return render_template("escala-novo.html")

@app.route("/escala/lista")
def escala_lista():
    return render_template("escala-lista.html")

@app.route("/ferias/novo")
def ferias_novo():
    return render_template("ferias-novo.html")

@app.route("/ferias/lista")
def ferias_lista():
    return render_template("ferias-lista.html")

@app.route("/indicadores")
def indicadores():
    return render_template("indicadores.html")

# ---------------------------
# LOGIN
# ---------------------------
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
            return render_template("home.html")

        error = "Credenciais inválidas. Tente novamente."

    return render_template("login.html", error=error)

# ---------------------------
# MAIN
# ---------------------------
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)