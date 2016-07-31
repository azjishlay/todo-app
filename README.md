# todo-app
A simple TODO list app using Node.js, Express and MySQL

This example was created using [Yogasaikrishna](https://github.com/yogasaikrishna/todo-app)'s tutorial, [Simple RESTful API using Node.js, Express and MySQL](http://www.yogasaikrishna.com/simple-restful-api-using-nodejs-express-and-mysql), with a few tweaks.

### Simple RESTful API Tutorial Summary

* Setup and configure a server using Node.js and Express in a file named `app.js`. Run `npm init` to create a `package.json`. Install the following dependencies: `express`,`body-parser`, and `mysql`, using `npm install [package] --save`.
* Create a database using MySQL, with the schema provided in `db/schema.sql`. Populate the table with sample data, as provided in `db/seeds.sql`.
* Create a connection pool to the database, in the file `app/config/connection.js`.
* Create a model for the database, in the file `app/models/todo.js`. Include the connection module. Create methods for get, create, update, and delete, by acquiring the connection, executing the query, and returning the results.
* Setup the routes to determine how the methods will be called, in the file `app/controllers/routes.js`. Include the model module. Create routes for each HTTP request of GET, POST, PUT, and DELETE, using the specific endpoint (URIs) and the corresponding method.
* Include the connection and router modules in the file `app.js`, and call on them before `app.listen()`.

### GET `/todo` and GET `/todo/:id`

Below is the method and request for GET `/todo`. This request returns everything.
```
this.get = function(res) {
  connection.acquire(function(err,con) {
    con.query('select * from todo_list', function(err,result) {
      con.release();
      res.send(result);
      console.log("Get successful");
    });
  });
};
```
```
app.get('/todo',function(req,res) {
  todo.get(res);
});
```
Result for GET `/todo`:
```
  [
    {
      "id": 1,
      "name": "Go to the post office",
      "date": "2016-07-30T21:20:05.000Z"
    },
    {
      "id": 2,
      "name": "Deposit paycheck",
      "date": "2016-07-30T21:21:29.000Z"
    },
    {
      "id": 3,
      "name": "Water plants",
      "date": "2016-07-30T21:21:29.000Z"
    },
    {
      "id": 4,
      "name": "Finish homework",
      "date": "2016-07-30T21:21:29.000Z"
    }
  ]
```

Below is the method and request for GET `/todo/:id`. This request takes in a specific ID, and returns only the data that matches with it.
```
this.getByID = function(id,res) {
  connection.acquire(function(err,con) {
    con.query('select * from todo_list where id = ?', id, function(err,result) {
      con.release();
      res.send(result);
      console.log("Get by ID successful");
    });
  });
};
```
```
app.get('/todo/:id',function(req,res) {
  todo.getByID(req.params.id,res);
});
```
Result for GET `/todo/4`:
```
[
  {
    "id": 4,
    "name": "Finish homework",
    "date": "2016-07-30T21:21:29.000Z"
  }
]
```
