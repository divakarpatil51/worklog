import os

from worklog.app import create_app

app = create_app(os.environ["FLASK_CONFIG"])
app.run()
