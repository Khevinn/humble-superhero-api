# Humble Superhero API

This API allows users to add superheroes and rank them based on their humility score.

## 🚀 Technologies Used
- NestJS
- TypeScript
- Jest (Testing)
- Swagger (Documentation)

## 📌 Features
- Create a new superhero with a name, superpower, and humility score (1-10).
- Retrieve a list of all superheroes, sorted by humility score.

## 🔧 How to Run the Project

1. Install dependencies:
   ```sh
   npm install
   ```

2. Start the server

- Run normally (without auto-restart):
    ```sh
    npm run start
    
 - Run in watch mode (auto-restart on changes): 
    ```sh
    npm run dev
    
3. Access the API at http://localhost:3000

## 🛠️ Testing

 - Run unit tests using Jest:
 
   ```sh
   npm run test
 
 - Check test coverage:
   ```sh
   npm run test:cov
   
 
## 📜 API Swagger Documentation
Once the project is running, access:
    
http://localhost:3000/api

## 💡 How Would I Collaborate with a Teammate?
- Code reviews: Share pull requests on GitHub to get feedback before merging.
- Clear communication: Discuss improvements in daily meetings, using the SCRUM model for example.
- Version control best practices: Keep commits organized and descriptive, using gitflow for example.
- Modular design: Structure the code to facilitate future improvements.
- Always think about the scalability of the application and naming of variables, methods, classes, etc. Remember that we write code for other developers to read.

## ⏳ If I Had More Time...

- Persistent Database: Use PostgreSQL with TypeORM instead of an in-memory database. MongoDB + mongoose is also an option.
- Authentication and Authorization: User CRUD, implement JWT for user authentication.
- Include error handling in the code, logs, metrics thinking about application observability when it is in - different production environments.
- Cloud Deployment: Deploy the API using Docker and AWS (if it is something that really needs to scale a lot). If not, a simple hosting platform can handle it, saving resources and money.
- Parallel processing, use of async/await, promises in a scenario of queries to databases or external APIs.
- Create error scenarios in unit tests.