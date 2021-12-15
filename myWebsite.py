import os, json
from flask import Flask, request, session, g, redirect, url_for, abort, render_template, flash

app = Flask(__name__)

# Load default config and override config from an environment variable
app.config.update(dict(
    DEBUG=True,
	SECRET_KEY='development key',
	SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(app.root_path, 'myWebsite.db')
))
app.config.from_envvar('FLASKR_SETTINGS', silent=True)

# Redirects to the main page automatically
@app.route("/")
def default():
    return redirect(url_for("home_controller"))

@app.route("/jakesweeney/home")
def home_controller():
    return render_template("home.html")


#<img src="{{ url_for('static', filename='minimalist-wallpaper.jpg') }}" class="header-image">
