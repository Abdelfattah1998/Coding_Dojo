from flask import Flask, render_template
app = Flask(__name__)
@app.route('/play/<num>/<color>')
def index(num,color):
    return render_template("Playground.html",number=int(num),color=color)	# notice the 2 new named arguments!
if __name__=="__main__":
    app.run(debug=True)

