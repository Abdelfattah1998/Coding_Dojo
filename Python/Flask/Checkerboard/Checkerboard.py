from flask import Flask, render_template  # added render_template!
app = Flask(__name__)    # Create a new instance of the Flask class called "app"
@app.route('/<x>/<y>/<color1>/<color2>') # for a route '/users/____/____', two parameters in the url get passed as username and id
def show_user_profile(x, y,color1,color2):
    return render_template('Checkerboard.html',x=int(x),y=int(y),color1=color1,color2=color2)
    
if __name__=="__main__":
    app.run(debug=True)                   




