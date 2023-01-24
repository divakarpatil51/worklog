import os

base_dir = os.path.abspath(os.path.dirname(__file__))


class Config:

    ...


class Production(Config):
    ...


class Testing(Config):
    TESTING = True
    ENV = "testing"
    ...


class Development(Config):
    ENV = "development"
    ...


config = {
    "development": Development,
    "production": Production,
    "testing": Testing
}
