FROM python:3.6-slim

COPY . /worklog
WORKDIR /worklog
RUN export FLASK_APP=app.py
RUN pip3 install --upgrade pip
RUN pip3 install -r requirements.txt
EXPOSE 5000
CMD ["python", "/worklog/app.py"]