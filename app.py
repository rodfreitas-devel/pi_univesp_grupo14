from flask import Flask, render_template, request, redirect, url_for
from server.user import check_login


app = Flask(__name__, template_folder="client/pages", static_folder="client/static")


@app.route("/")
@app.route("/index")
def index():
    return redirect(url_for("login"))


@app.route("/login", methods=["GET", "POST"])
def login():
    error = None
    if request.method == "POST":
        username = request.form.get("user")
        password: str | None = request.form.get("password")

        # Validação real via DB
        user = check_login(username, password)

        if user:
            # Redireciona para o nome da FUNÇÃO da rota desejada
            return redirect(url_for("colab_cadastro"))

        error = "Credenciais inválidas. Tente novamente."
    else:
        print("Login Falhou!")  # DEBUG

    return render_template("login.html", error=error)


@app.route("/colaborador-cadastro")
def colab_cadastro():
    return render_template("colaborador-cadastro.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
