FROM node:latest
LABEL maintainer "Wander Aquino da Cruz"

ARG REPO=https://github.com/wanderaquino/parana-banco-api-automation.git
ARG PROJECT_NAME=WCRUZ_PB_API_AUTOMATION

RUN git clone ${REPO} ${PROJECT_NAME} && \
    cd ${PROJECT_NAME} && \
    npm install && \
    npm run test