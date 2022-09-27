from flask import Flask, render_template, request, redirect, session


app = Flask(__name__)
app.secret_key = 'keep it secret, keep it safe' # set a secret key for security purposes
# our index route will handle rendering our form
@app.route('/')
def index():
    if 'count' not in session:
        session['count']=0
    else:
        session['count']+=1
    return render_template("count.html")


if __name__ == "__main__":
    app.run(debug=True)

