from flask import Blueprint, request, jsonify
from hashlib import sha256

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
            "password",
            "time_created"
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
    time_created = request.json["time_created"]

    # TODO add salt
    print ("password")
    print (type (password))
    hashed_password = sha256(password.encode()).hexdigest()

    new_user = User(name=name, 
                    email=email, 
                    password=hashed_password,
                    time_created=time_created)

    db.session.add(new_user)
    db.session.commit()

    return user_schema.jsonify(new_user)