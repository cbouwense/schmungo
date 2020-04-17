from db import db

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

class User(db.Model):
    __tablename__ = "users"
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(25))
    email = db.Column(db.String(40))
    password = db.Column(db.String(64))

    def __init__(self, 
                 name, 
                 password,
                 email=None):
        self.name = name
        self.email = email
        self.password = password