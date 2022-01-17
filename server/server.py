
import os, json
from flask import Flask, request, jsonify, make_response, redirect, url_for
from flask_mail import Mail, Message

app = Flask(__name__, static_folder="../client/build", static_url_path='/')
mail = Mail(app)

app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'jakemsweeney12@gmail.com'
app.config['MAIL_PASSWORD'] = '***********'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
mail = Mail(app)

# Redirects to the main page automatically
@app.route("/")
def default():
    return app.send_static_file('index.html')

# basically checks whether the server is running
@app.route("/api/jakesweeney/home")
def home_controller():
    return 'Done', 201

# collects a a name, email, and message from the frontend and sends an email
@app.route('/api/send_email', methods=['POST'])
def send_message():
    email_data = request.get_json()
    email_body = email_data['message'] + '\n\nemail: ' + email_data['email'] + '\nfrom: ' + email_data['name']

    message = Message('From your portfolio website', sender='jakemsweeney12@gmail.com', recipients=['jakemsweeney12@gmail.com'])
    message.body = email_body
    mail.send(message)

    res = make_response(jsonify(email_data), 200)
    return res


if __name__=="__main__":
    app.run(debug=True)
