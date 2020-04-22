# MongoDB & Node.js

RestAPI (Node.js &amp; MongoDB)

- version

  ```
  $ npm --version
  6.14.4

  $ mongo --version
  MongoDB shell version v4.2.5
  ```

  - MongoDB installed by Homebrew

---

## setting

```
$ npm init -y
```

### install express

```
$ npm install express
```

### init confirmation Server running

- http://localhost:3000/

  ```
  $ node app.js
  ```

### install nodemon

```
$ npm install nodemon
```

Continuous execute Server running:

- http://localhost:3000/

  ```
  $ npx nodemon app.js
  ```

### install Mongoose & running MongoDB

```
$ npm install mongoose
```

```
$ brew services start mongodb-community

$ mongo
.
.

> use test_api_db

> db.users.insertOne({name:"im", music:"avicii"})

> show dbs

> db.users.find().pretty()
{
        "_id" : ObjectId("5ea0105e3496bcf020d268ce"),
        "name" : "im",
        "music" : "avicii"
}
```
