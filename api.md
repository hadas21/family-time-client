## API Documentation

Scripts are included in curl-scripts to test built-in actions.

### Authentication

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/` | `users#changepw`  |
| DELETE | `/sign-out/`        | `users#signout`   |

#### POST /sign-up

Request:

```sh
curl --include --request POST http://localhost:4741/sign-up \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "an@example.email",
      "password": "an example password",
      "password_confirmation": "an example password"
    }
  }'
```

```sh
curl-scripts/sign-up.sh
```

Response:

```md
HTTP/1.1 201 Created
Content-Type: application/json; charset=utf-8

{
  "user": {
    "id": 1,
    "email": "an@example.email"
  }
}
```

#### POST /sign-in

Request:

```sh
curl --include --request POST http://localhost:4741/sign-in \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "an@example.email",
      "password": "an example password"
    }
  }'
```

```sh
curl-scripts/sign-in.sh
```

Response:

```md
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "user": {
    "id": 1,
    "email": "an@example.email",
    "token": "33ad6372f795694b333ec5f329ebeaaa"
  }
}
```

#### PATCH /change-password/

Request:

```sh
curl --include --request PATCH http://localhost:4741/change-password/ \
  --header "Authorization: Bearer $TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "an example password",
      "new": "super sekrit"
    }
  }'
```

```sh
TOKEN=33ad6372f795694b333ec5f329ebeaaa curl-scripts/change-password.sh
```

Response:

```md
HTTP/1.1 204 No Content
```

#### DELETE /sign-out/

Request:

```sh
curl --include --request DELETE http://localhost:4741/sign-out/ \
  --header "Authorization: Bearer $TOKEN"
```

```sh
TOKEN=33ad6372f795694b333ec5f329ebeaaa curl-scripts/sign-out.sh
```

Response:

```md
HTTP/1.1 204 No Content
```
### Family


| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/families/` | `location#create`    |
| GET  | `/families/`    | `location#index`  |
| GET  | `/families/:id` | `location#show`  |
| PATCH  | `/families/:id` | `location#update`  |
| DELETE | `/families/:id`  | `location#delete`   |

#### POST /create

Request:

```sh
curl --include --request POST http://localhost:8000/families/ \
  --header "Authorization: Token $TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "family": {
      "name": "Name",
      "members": "[]" # <-- optional
    }
  }'
```

#### GET /index

Request:

```sh
curl --include --request GET http://localhost:8000/families/ \
  --header "Authorization: Token $TOKEN" \
```


#### GET /show

Request:

```sh
curl --include --request POST http://localhost:8000/families/:id/ \
  --header "Authorization: Token $TOKEN" \
```


#### PATCH /update/

Request:

```sh
curl --include --request PATCH http://localhost:8000/families/:id/ \
  --header "Authorization: Token $TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "family": {
      "name": "Name",
      "members": "[]" # <-- optional
    }
  }'
```


#### DELETE /delete

Request:

```sh
curl --include --request DELETE http://localhost:8000/families/:id/ \
  --header "Authorization: Token $TOKEN" \
```
