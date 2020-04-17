from flask import Flask
from flask_cors import CORS
from flask_marshmallow import Marshmallow

from db import init_db
from ma import init_ma

# Init app
app = Flask(__name__)

# Enable CORS
cors = CORS(app)

# Database
app.config['SQLALCHEMY_DATABASE_URI'] = "postgres://christian:cunit1874@localhost:5432/schmungo_api"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Config
init_db(app)
init_ma(app)

from resource.task_resource import task
from resource.user_resource import user

# Register Blueprints
app.register_blueprint(task)
app.register_blueprint(user)

# Run Server
if __name__ == "__main__":
    app.run(debug=True)