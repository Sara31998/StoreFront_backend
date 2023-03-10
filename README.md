# Storefront Backend Project

## Getting Started

This repo contains a basic Node and Express app to get you started in constructing an API. To get started, clone this repo and run `npm` in your terminal at the project root.

## Required Technologies
Your application must make use of the following libraries:
- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing

## Steps to Completion

### 1. Plan to Meet Requirements

In this repo there is a `REQUIREMENTS.md` document which outlines what this API needs to supply for the frontend, as well as the agreed upon data shapes to be passed between front and backend. This is much like a document you might come across in real life when building or extending an API. 

Your first task is to read the requirements and update the document with the following:
- Determine the RESTful route for each endpoint listed. Add the RESTful route and HTTP verb to the document so that the frontend developer can begin to build their fetch requests.    
**Example**: A SHOW route: 'blogs/:id' [GET] 

- Design the Postgres database tables based off the data shape requirements. Add to the requirements document the database tables and columns being sure to mark foreign keys.   
**Example**: You can format this however you like but these types of information should be provided
Table: Books (id:varchar, title:varchar, author:varchar, published_year:varchar, publisher_id:string[foreign key to publishers table], pages:number)

**NOTE** It is important to remember that there might not be a one to one ratio between data shapes and database tables. Data shapes only outline the structure of objects being passed between frontend and API, the database may need multiple tables to store a single shape. 

### 2.  DB Creation and Migrations

Now that you have the structure of the databse outlined, it is time to create the database and migrations. Add the npm packages dotenv and db-migrate that we used in the course and setup your Postgres database. If you get stuck, you can always revisit the database lesson for a reminder. 

You must also ensure that any sensitive information is hashed with bcrypt. If any passwords are found in plain text in your application it will not pass.

### 3. Models

Create the models for each database table. The methods in each model should map to the endpoints in `REQUIREMENTS.md`. Remember that these models should all have test suites and mocks.

### 4. Express Handlers

Set up the Express handlers to route incoming requests to the correct model method. Make sure that the endpoints you create match up with the enpoints listed in `REQUIREMENTS.md`. Endpoints must have tests and be CORS enabled. 

### 5. JWTs

Add JWT functionality as shown in the course. Make sure that JWTs are required for the routes listed in `REQUIUREMENTS.md`.

### 6. QA and `README.md`

Before submitting, make sure that your project is complete with a `README.md`. Your `README.md` must include instructions for setting up and running your project including how you setup, run, and connect to your database. 

Before submitting your project, spin it up and test each endpoint. If each one responds with data that matches the data shapes from the `REQUIREMENTS.md`, it is ready for submission!


## enviroment:
Workspace
This project can be done within this Udacity workspace. To prepare your environment, follow these steps:

In the Terminal tab, create and run the database:
Switch psql -U postgres to user su postgres
psql postgres
In psql, run the following:
create user sara_owner with password 'sara1234567' ;
create sara_store database;
\ c sara_store
grant all privileges on the database sara_store to sara_owner ;
To test if it works, run \dt and it should return "No Relationships Found".
and test database
create sara_store_test database;
\ c sara_store_test
grant all privileges on the database sara_store_test TO sara_owner ;
To test if it works, run \dt and it should return "No Relationships Found".
In the second hall:
npm install yarn install yarn -g
Install db-migrate on the terminal with npm install db-migrate -g terminal commands
Check node version -v - it should be level 10 or 12
If the node is not at level 10 or 12, run
npm install -g n
Issue 10.18.0
PATH="$PATH"
node -v to check if the version is 10 or 12
Install all project yarn dependencies
To test that it works, running the spinning clock should show an app starting at 0.0.0.0:3000
local environment
If you want to do this project on your local computer with docker already installed, there is a docker file with global content. Note that you may need to update this file to fit your computer to use it locally.
achievement steps
plan to meet the requirements
Database creation and migrations
Models
Fast processors
JWTs
Q&A readme file
Go to the following pages to get started on the project!

## to start :
to yuo start must run the lockalhost in PORT 3000 to stat of the server and the test this server  by jasmine 
testing to certine the server is running.

## the requirement to stat this project 

you need to follwing all pakege i instaling in this projct to run correct and used the npm to run all the 
script in found the package.jsone
bash
node to verisin is 18.12.1
docker-compose
node to version is 8.19.2
npm

## to installing 

just run of the (npm install) to installing all packge in package.json 

## but 
I upload the project with the all package in (node_modules) 

## to setup of the .env file :

## the first
create the file with name(.env)
## secound 
write all this defult vriables of the database 
##  the primary vriables 
PROT = 3000
NODE_ENV = dev
## to connect with the database
POSTGRES_HOST=localhost
POSTGRES_PROT=5432
POSTGRES_DATABASE= sara_store
POSTGRES_DATABASE_TEST= sara_store_test
POSTGRES_USER= sara_owner
POSTGRES_PASSWORD_DATABASE= sara1234567
## to the bcrypt of the passwoord to hashing 
BCRPT_PASSWORD= bcrpt-youer-secret
SALT_ROUNDS= 10
## the secret key in the token 
TOKEN_SECRET_USER= token-youer-secret

## to install the database 
simply, run the followning command to install the project dependencies:

bash
npm run up

#   S t o r e F r o n t _ b a c k e n d  
 