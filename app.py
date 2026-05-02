from flask import Flask, render_template, request, redirect, url_for
from server.user import check_login  

app = Flask(__name__, template_folder="client/pages")

# raiz redireciona para login
@app.route("/")
@app.route("/index")
def index():
    return redirect(url_for("login"))

# rota de login
@app.route("/login", methods=["GET", "POST"])
def login():
    error = None
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")
        user = check_login(username, password)

        if username == "admin" and password == "adm123":
#            return redirect(url_for("home"))  # login ok → redireciona para home
             return "Login ok"   
        else:
            #error = "Usuário ou senha inválidos"
            return "usuário ou senha inválidos"

    return render_template("login.html", error=error)

# rota home após login
@app.route("/colaborador-cadastro")
def colab_cadastro():
    return render_template("colaborador-cadastro.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)

