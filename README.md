## dependency
- yarn add dotenv
- yarn add @nestjs/typeorm typeorm mysql2 //Typeorm 설정
- yarn add @types/uuid //UUID
- yarn add @nestjs/axios //HTTP 모듈 설정
- yarn add crypto-js //ncp 인증 처리


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