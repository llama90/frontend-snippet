# 시작하기
JSON Server를 설치한다.

```shell
$ npm install -g json-server
```

`db.json` 파일에 sample 데이터를 생성한다.

```json
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```

JSON Server를 시작한다.

```shell
$ json-server --watch db.json
```

이제 http://localhost:3000/posts/1 URL로 접근하여 아래와 같은 데이터를 조회할 수 있다.

```json
{ "id": 1, "title": "json-server", "author": "typicode" }
```

`request` 할 때 알면 좋은 것들이 있다.
* POST, PUT, PATCH 또는 DELETE 요청을 하면, 변경 사항은 `lowdb`를 사용하여 db.json에 자동으로 안전하게 저장된다.
* request body의 JSON은 GET 출력과 마찬가지로 객체로 묶여 있어야 한다. (예: {"name": "Foobar"})
* ID 값은 변경할 수 없다. PUT 또는 PATCH시 request body의 모든 id 값은 무시되며, POST 요청에 설정된 값만 아직 사용되지 않은 경우에만 적용된다.
* POST, PUT 또는 PATCH 요청은 요청 본문에서 JSON을 사용하기 위해 Content-Type: application/json을 header에 포함해야 한다. 포함되지 않은 경우 2XX 상태 코드가 반환되도, 데이터는 변경되지 않는다. 

# 라우트
db.json 파일을 기반으로 한 모든 기본경로는 다음과 같다.
`--routes` 옵션을 사용하여 다른 경로를 추가할 수도 있다.

## 복수 경로
```
GET    /posts
GET    /posts/1
POST   /posts
PUT    /posts/1
PATCH  /posts/1
DELETE /posts/1
```

## 단일 경로
```
GET    /profile
POST   /profile
PUT    /profile
PATCH  /profile
```

# 기타

## 포트 변경
`--port` 옵션을 사용하여 JSON 서버를 실행하기 위한 포트를 지정할 수 있다.

```shell
$ json-server --watch db.json --port 3004
```

## 원격 스키마
원격 스키마를 지정할 수 있다.

```shell
$ json-server http://example.com/file.json
$ json-server http://jsonplaceholder.typicode.com/db
```

## 임의의 데이터 생성
JSON 파일대신 JavaScript를 사용하면 프로그래밍 방식으로 데이터를 만들 수 있다.

```javascript
// index.js
module.exports = () => {
  const data = { users: [] }
  // Create 1000 users
  for (let i = 0; i < 1000; i++) {
    data.users.push({ id: i, name: `user${i}` })
  }
  return data
}
```

```shell
$ json-server index.js
```

**팁** 다음과 같은 모듈을 사용하는것도 좋다.

* [Faker](https://github.com/Marak/faker.js)
* [Casual](https://github.com/boo1ean/casual)
* [Chance](https://github.com/chancejs/chancejs) 
* [JSON Schema Faker](https://github.com/json-schema-faker/json-schema-faker)
