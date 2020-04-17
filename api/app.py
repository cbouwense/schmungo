from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

# Init app
app = Flask(__name__)

# Database
app.config['SQLALCHEMY_DATABASE_URI'] = "postgres://christian:cunit1874@localhost:5432/schmungo_api"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Init db
db = SQLAlchemy(app)

# Init ma
ma = Marshmallow(app)

# Task Class/Model
class Task(db.Model):
    __tablename__ = "tasks"
    
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(40))
    description = db.Column(db.String(256))
    time_created = db.Column(db.DateTime(timezone=True))
    time_completed = db.Column(db.DateTime(timezone=True))
    user_id = db.Column(db.Integer)

    def __init__(self, 
                 title, 
                 description, 
                 time_created,
                 user_id,
                 time_completed=None):
        self.title = title
        self.description = description
        self.time_created = time_created
        self.time_completed = time_completed
        self.user_id = user_id
        
# Product Schema
class TaskSchema(ma.Schema):
    class Meta:
        fields = (
            "id", 
            "title", 
            "description", 
            "time_created", 
            "time_completed", 
            "user_id"
        )

# Init Schema
task_schema = TaskSchema()
tasks_schema = TaskSchema(many=True)

@app.route("/task/<id>", methods=["GET"])
def get_product(id):
    res = db.session.query(Task).filter(Task.id == id)
    return task_schema.jsonify(res.first())

@app.route("/task", methods=["POST"])
def add_product():
    title = request.json["title"]
    description = request.json["description"]
    time_created = request.json["time_created"]
    user_id = request.json["user_id"]

    new_task = Task(title=title, 
                    description=description, 
                    time_created=time_created,
                    user_id=user_id)

    db.session.query(new_task)
    db.session.commit()

    return task_schema.jsonify(new_task)

# Run Server
if __name__ == "__main__":
    app.run(debug=True)