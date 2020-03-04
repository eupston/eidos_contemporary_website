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
              
              /api/v1/users     --> POST
              
