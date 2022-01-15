
import os, json
from flask import Flask, request, jsonify, make_response

app = Flask(__name__)

# Redirects to the main page automatically
@app.route("/")
def default():
    return redirect(url_for("home_controller"))

# basically checks whether the server is running
@app.route("/jakesweeney/home")
def home_controller():
    return 'Done', 201

# collects a a name, email, and message from the frontend and sends an email
@app.route('/send_email', methods=['POST'])
def send_message():
    email_data = request.get_json()
    print(email_data['name'])
    print(email_data['email'])
    print(email_data['message'])
    res = make_response(jsonify(email_data), 200)
    return res


if __name__=="__main__":
    app.run(debug=True)
