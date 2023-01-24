import dataclasses
import uuid
from worklog.domain.worklog_type import WorklogType


@dataclasses.dataclass
class Worklog:

    id: uuid.UUID
    type: WorklogType
    project: str
    date: int
    comment: str

    @classmethod
    def from_dict(cls, d):
        return cls(**d)

    def to_dict(self):
        return dataclasses.asdict(self)
