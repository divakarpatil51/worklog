from flask import Flask, jsonify, request
from flask_cors import CORS
import uuid
import logging

app = Flask(__name__)
CORS(app)
data = [
        {
            "name": "a",
            "lastname": "b",
            "id": str(uuid.uuid4())
        },
        {
            "name": "ad",
            "lastname": "c",
            "id": str(uuid.uuid4())
        },
        {
            "name": "wd",
            "lastname": "cq",
            "id": str(uuid.uuid4())
        }
    ]


@app.route("/user", methods=["GET"])
def list_users():
    logging.info("Fetching users")
    return jsonify(data)


@app.route("/user", methods=["POST"])
def add_users():
    logging.info("Adding user")
    _id = str(uuid.uuid4())
    user = request.get_json()
    logging.info(user)
    _user = {
        "id": _id,
        **user
    }
    data.append(_user)
    return jsonify(data)


@app.route("/user/<user_id>", methods=["DELETE"])
def delete_user(user_id):
    logging.info("Delete user")
    for user in data[:]:
        if user_id == user.get('id'):
            data.remove(user)
            break

    return jsonify(data)


if __name__ == '__main__':
    app.run(host="0.0.0.0")
