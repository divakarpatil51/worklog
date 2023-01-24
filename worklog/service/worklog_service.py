from worklog.repository.worklog_repo import WorklogRepo


def get_worklogs(repo: WorklogRepo):
    return repo.get_worklogs()
