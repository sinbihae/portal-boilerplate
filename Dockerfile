
# Step 1
## base image for Step 1: Node 16
FROM node:16-alpine as builder

RUN mkdir /app
WORKDIR /app

## 프로젝트의 모든 파일을 WORKDIR(/app)로 복사한다
COPY . .
## Nest.js project를 build 한다
RUN yarn
RUN yarn run build

# Step 2
## base image for Step 2: Node 16(light weight)
FROM node:16-alpine as runner

RUN mkdir /app
WORKDIR /app

ENV NODE_ENV production

## Step 1의 builder에서 build된 프로젝트를 가져온다
COPY --from=builder /app ./

## application 실행
CMD ["yarn", "run", "start:prod"]
