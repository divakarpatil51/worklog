from flask import Flask, jsonify, request
from flask_cors import CORS
import uuid
import logging

app = Flask(__name__)
CORS(app)
data = [
        {
            "worklogType": "Remote",
            "project": "Backend",
            "date": "24-05-2017",
            "comment": "Remote"
        },
        {
            "worklogType": "Office",
            "project": "Backend",
            "date": "23-05-2017",
            "comment": "Remote"
        },
        {
            "worklogType": "Sick",
            "project": "Backend",
            "date": "26-05-2017",
            "comment": "Remote"
        },
        {
            "worklogType": "Vacation",
            "project": "Backend",
            "date": "27-05-2017",
            "comment": "Remote"
        },
        {
            "worklogType": "Holiday",
            "project": "Backend",
            "date": "28-05-2017",
            "comment": "Remote"
        },
    ]

BASE_PATH = "/api/v1/users/<user_id>/worklog"
@app.route(BASE_PATH, methods=["GET"])
def list_users(user_id):
    logging.info("Fetching Worklogs")
    return jsonify(data)


@app.route(BASE_PATH, methods=["POST"])
def add_users(user_id):
    logging.info("Adding Worklog")
    _id = str(uuid.uuid4())
    user = request.get_json()
    logging.info(user)
    _user = {
        "id": _id,
        **user
    }
    data.append(_user)
    return jsonify(_user)


@app.route(BASE_PATH + "/<worklog_id>", methods=["DELETE"])
def delete_user(user_id, worklog_id):
    logging.info("Delete Worklog")
    for user in data[:]:
        if worklog_id == user.get('id'):
            data.remove(user)
            break

    return jsonify(data)


if __name__ == '__main__':
    app.run(host="0.0.0.0")
