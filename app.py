from flask import Flask, render_template, request, redirect, url_for
from server.user import check_login

app = Flask(__name__)

@app.route("/")
@app.route("/login", methods=["GET", "POST"])
def login():
    error = None
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")
        user = check_login(username, password)

        ''' >>>> teste de conexão com banco de dados, isso pode ser excluído <<<<'''
        if user:
            return f"Bem-vindo, {user['username']}!"
        else:
            error = "Usuário ou senha inválidos"

    return render_template("login.html", error=error)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
