FROM node:13.12.0-alpine

COPY . /worklog
WORKDIR /worklog
RUN npm install
EXPOSE 3000

CMD ["npm", "start"]