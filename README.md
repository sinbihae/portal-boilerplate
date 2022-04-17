## dependency
- yarn add dotenv
- yarn add @nestjs/typeorm typeorm mysql2 //Typeorm 설정
- yarn add @types/uuid //UUID
- yarn add @nestjs/axios //HTTP 모듈 설정
- yarn add crypto-js //ncp 인증 처리
- yarn add @nestjs/passport passport passport-local @nestjs/jwt passport-jwt // 인증 모듈 


## prettier
1. prettierc 추가
```json
{
  "semi": true,
  "singleQuote": true,
  "printWidth": 120,
  "arrowParens": "always",
  "tabWidth": 2,
  "trailingComma": "es5",
  "quoteProps": "as-needed",
  "jsxSingleQuote": false,
  "jsxBracketSameLine": true
}
```
2. prettier에서 On Save 옵셔 켜기
3. inspection에서 ESLint 옵션 끄기

## nestjs 파일 생성
- nest g module users
- nest g service users
- nest g controller users

## HTTP 모듈


## Typeorm 연동


## Redis 연동



## 인증방법
: https://docs.nestjs.kr/security/authentication

### 1단계 local.strategy(ID/PWD로 확인 하는 방법)로 로그인해서 ACCESS-TOKEN을 발급
yarn add passport-local


### 2단계 jwt.strategy(TOKEN으로 확인 하는 방법)로 허가를 체크하고 허용
yarn add @nestjs/jwt passport-jwt

## 보안
### 패스워드 DB 저장시 단방향 암호화

참고

https://velog.io/@tkdfo93/Node-Express-Crypto-%EB%AA%A8%EB%93%88%EC%9D%84-%ED%86%B5%ED%95%9C-%ED%95%B4%EC%8B%B1-Final-Project


### 데이터 전송시 양방향 암호화(대칭키)
비대칭키 방식

대칭키 방식

참고

https://blog.naver.com/PostView.naver?blogId=01075970528&logNo=222484380977&parentCategoryNo=&categoryNo=10&viewDate=&isShowPopularPosts=true&from=search

## Docker image 생성
1단계. Dockerfile, .dockerignore 파일 생성
2단계. image 생성
```
docker build -t koscom/portal-boilerplate:v0.0.1 .
```
3단계. image 확인
```
docker images
```

참고
https://ivvve.github.io/2020/03/23/js/nestjs/nest-docker/

## Docker 실행
```
docker run koscom/portal-boilerplate:v0.0.1
docker ps
docker stop 11111111
```

## Docker Swarm 배포


## K8S 배포
