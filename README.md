## Eidos Contemporary Jewelry Website


### To Use:

``npm install``

** You must have config.env file to connect to DB ** 

#### Launch Backend:

``cd backend``

``npm start``

backend is listening on localhost:5000 

#### Launch Frontend:

``cd frontend``

``npm start``

frontend is listening on localhost:3000

### Current Working Endpoints:
```
localhost:5000/api/v1/users     --> GET all users
              /api/v1/users/:id --> GET one user by ID  (get from DB with get all)
              /api/v1/users     --> POST (name, email, and password are required)
              /api/v1/users/:id --> DELETE
              /api/v1/users/:id --> PUT
```
            
### Using advanced filtering and querying
usefull links: 

https://docs.mongodb.com/manual/reference/operator/query/gt/

https://mongoosejs.com/docs/queries.html
```
localhost:5000/api/v1/users?select=name,phone  // will only return name and phone

localhost:5000/api/v1/users?ring_size[lte]=11&select=name,ring_size // return name and ring_size of those with ring_size lte 11 
```

