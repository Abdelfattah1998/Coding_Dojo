from flask import Flask, render_template, request, redirect, session


app = Flask(__name__)

app.secret_key = 'keep it secret, keep it safe' # set a secret key for security purposes

@app.route('/')
def index():
    return render_template("form.html")

@app.route('/users', methods=['POST'])
def create_user():
    print("Got Post Info")
    print(request.form)
    session['usernames'] = request.form['name']
    session['Dojo_Locations']= request.form['Dojo Location']
    session['favorite_Languages']= request.form['favorite Language']
    session['comments']= request.form['comment']
    return redirect('/show')


@app.route('/show')
def show_user():
    return render_template('result.html',usernames=session['usernames'],Dojo_Locations=session['Dojo_Locations'],favorite_Languages=session['favorite_Languages'],comments=session['comments'])

if __name__ == "__main__":
    app.run(debug=True)