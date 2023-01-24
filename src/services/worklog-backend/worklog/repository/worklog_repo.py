from worklog.domain.worklog import Worklog
from worklog.domain.worklog_type import WorklogType
import uuid
import time


class WorklogRepo:

    def __init__(self) -> None:
        self.worklog = [
            {
                "id": uuid.uuid4(),
                "type": WorklogType.REMOTE.name,
                "project": "backend",
                "date": int(time.time()),
                "comment": ""
            },
            {
                "id": uuid.uuid4(),
                "type": WorklogType.OFFICE.name,
                "project": "backend",
                "date": int(time.time()),
                "comment": ""
            },
            {
                "id": uuid.uuid4(),
                "type": WorklogType.VACATION.name,
                "project": "backend",
                "date": int(time.time()),
                "comment": ""
            },
            {
                "id": uuid.uuid4(),
                "type": WorklogType.HOLIDAY.name,
                "project": "backend",
                "date": int(time.time()),
                "comment": ""
            }
        ]

    def get_worklogs(self):
        data = [Worklog.from_dict(_worklog) for _worklog in self.worklog]
        return data
