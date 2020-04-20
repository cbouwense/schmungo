from flask import Blueprint, request, jsonify

from db import db
from ma import ma
from models import Task

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

task = Blueprint("task", __name__)

@task.route("/task/<id>", methods=["GET"])
def get(id):
    res = db.session.query(Task).filter(Task.id == id)
    return task_schema.jsonify(res.first())

@task.route("/task/user/<id>", methods=["GET"])
def get_user_tasks(id):
    res = db.session.query(Task).filter(Task.user_id == id)
    return tasks_schema.jsonify(res.all())

@task.route("/task", methods=["GET"])
def list():
    res = db.session.query(Task)
    return tasks_schema.jsonify(res.all())

@task.route("/task", methods=["POST"])
def create_one():
    title = request.json["title"]
    description = request.json["description"]
    time_created = request.json["time_created"]
    user_id = request.json["user_id"]

    new_task = Task(title=title, 
                    description=description, 
                    time_created=time_created,
                    user_id=user_id)

    db.session.add(new_task)
    db.session.commit()

    return task_schema.jsonify(new_task)