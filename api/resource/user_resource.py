from flask import Blueprint, request, jsonify

from db import db
from ma import ma
from models import User

# Product Schema
class UserSchema(ma.Schema):
    class Meta:
        fields = (
            "id", 
            "name", 
            "email", 
            "password"
        )

# Init Schema
user_schema = UserSchema()
#users_schema = UserSchema(many=True)

user = Blueprint("user", __name__)

@user.route("/user/<id>", methods=["GET"])
def get(id):
    res = db.session.query(User).filter(User.id == id)
    return user_schema.jsonify(res.first())

@user.route("/user", methods=["POST"])
def create_one():
    name = request.json["name"]
    email = request.json["email"]
    password = request.json["password"]

    # hash password

    new_user = User(name=name, 
                    email=email, 
                    password=password)

    db.session.add(new_user)
    db.session.commit()

    return user_schema.jsonify(new_user)