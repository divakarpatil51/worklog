from config import config
from flask import Flask
from worklog.controller.worklog_controller import worklog_blueprint


def create_app(environment):

    app = Flask(__name__)
    _config = config.get(environment.lower())
    app.config.from_object(_config)

    app.register_blueprint(worklog_blueprint)
    return app
