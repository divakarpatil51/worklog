from flask import Blueprint, jsonify
from worklog.service import worklog_service
from worklog.repository.worklog_repo import WorklogRepo

worklog_blueprint = Blueprint(
    "worklog_blueprint", __name__, url_prefix="/api/v1/users/<user_id>/worklogs")


@worklog_blueprint.route("", methods=["GET"])
def get_worklogs(user_id):
    repo = WorklogRepo()
    resp = worklog_service.get_worklogs(repo)
    return jsonify(resp)
