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

> exit
```

### fix `app.js` (add: mongoose)

connect DB.

- restart app.js by nodemon

  ```
  [nodemon] restarting due to changes...
  [nodemon] starting `node app.js`
  Test Server running http://localhost:3000
  DB connection succeed.
  ```

  - if get following caution;

    ```
    [nodemon] restarting due to changes...
    [nodemon] starting `node app.js`
    (node:66401) DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.
    (node:66401) DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.
    Test Server running http://localhost:3000
    DB connection succeed.
    ```

    add following script.

    ```
    # app.js

    const dbConnectOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    mongoose.connect("mongodb://127.0.0.1/test_api_db", dbConnectOptions);
    ```
