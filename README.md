
# Welcome to dental clinic backend app
<p align="center"><img src="./img/headerpict.jpg"/></p> 

<details>
  <summary>Index</summary>
  <ol>
    <li><a href="#about-this-project">About this project</a></li>
    <li><a href="#deploy">Deploy</a></li>
    <li><a href="#stack">Stack</a></li>
    <li><a href="#diagram-bd">Diagram DB</a></li>
    <li><a href="#local-instalation">Local installation</a></li>
    <li><a href="#how-do-we-do-it">How do we do it</a></li>
    <li><a href="#project-structure">Project structure</a></li>
    <li><a href="#data-base">Database</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#known-bugs">Known bugs</a></li>
    <li><a href="#future-functionalities">Future funtionalities</a></li>
    <li><a href="#licence">Licence</a></li>
    <li><a href="#webgraphy">Webgraphy</a></li>
    <li><a href="#gratitudes">Gratitudes</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About this project
<p align="center">From the product department GeeksHubs request us to create the backend corresponding to the appointment management system for a Dental Clinic.
A database and a REST API will be created.
The patient must be able to register in the application, login and access to client area. In your patient area you should be able to see a list of appointments that has to future, create appointments, modify them and cancel them.
There will also be a user area with your personal data, which can only be see himself.
In addition, dentists must be able to register as professionals, make login and view all appointments with registered customers.</p>
  

## Deploy 🚀

<div align="center">
    <a href="https://www.google.com"><strong>Url at production </strong></a>
</div>

## Stack
<p>Technologies that has been used:</p>
<div align="center">
    <a href="https://expressjs.com/">
        <img src= "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
    </a>
    <a href="https://nextjs.org/">
        <img src= "https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white"/>
    </a>
    <a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
        <img src= "https://img.shields.io/badge/javascipt-EFD81D?style=for-the-badge&logo=javascript&logoColor=black"/>
    </a>
    <a href="https://jwt.io/">
        <img src= "https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens"/>
    </a>
    <a href="https://www.postman.com/">
        <img src= "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"/>
    </a>
    <a href="https://www.mysql.com/">
        <img src= "https://img.shields.io/badge/mysql-3E6E93?style=for-the-badge&logo=mysql&logoColor=white"/>
    </a>
    <a href="https://www.github.com/">
        <img src= "https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=white"/>
    </a>
    <a href="https://git-scm.com/">
        <img src= "https://img.shields.io/badge/git-F54D27?style=for-the-badge&logo=git&logoColor=white"/>
    </a>
    <a href="https://www.docker.com/">
        <img src= "https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"/>
    </a>
    <a href="https://www.sequelize.org/">
        <img src= "https://img.shields.io/badge/sequelize-3C76C3?style=for-the-badge&logo=sequelize&logoColor=white"/>
    </a>
</div>

## Diagram DB

!['imagen-db'](./img/image.png)

## Local installation

Steps to make it work on your local computer:
1. Clone the project on your computer with git bash:
 `$git clone 'url-repository'`
2. Install all dependencies with the following command:
 ` $ npm i `
3. Create a .env file following the template .env.example provided and type all  credentials. If you cannot get them, change the parameters for your own local database set up run in docker.
4.  Start the server with:
 ``` $ npm run dev ```
5. Connect the repository with the database with the following commands:
 ``` $ npx sequelize-cli db:create ``` 
 ``` $ npx sequelize-cli db:migrate ``` 
 ``` $ npx sequelize-cli db:seed:all ```


## How do we do it


## Project structure
We used model view controller to structure our project. We created a basic CRUD.
The project will have the following structure:
-	Index.js: This is the main file. From this file we call to routes file, express and middleware that will have all the routes are called and the server is started.
-	Config.
      - Config.json: This file manages the configuration to connect to the database. It is created automatically with sequelize.
-	Middlewares: This file manages common services, such as authentication through use of tokens to access API restricted zones.
      - Is admin
      - Is doctor
      - Verify token
-	db.js: Shows the configuration that must have into .env file that must be created for the application to work.
    ```PORT = PORT```
    ```JWT_SECRET = SECRET```

-	Router.js
-	Views
-	Controllers: There are controllers for each of the established routes.The services that answer for them are entered into the controllers themselves in the case of routes.

-	.env.example


## DataBase

This project required a functional API connected to a database with different relationships.
			DIAGRAMA DE BASE DE DATOS.
The database has 7 tables: Role and Users…..
			Need to be complete.

## Endpoints
This project has 16 endpoints, with JSON Web Tokens authentication system.

Any user can access to:

<details>
<summary><strong>User</strong></summary>

- Register user:
    - Manage registration in our API. The information is passed via body in Postman containing the name, surname, email and password.

            POST:   http://localhost:3000/register 
        body:
        ``` bash
           {
            "name": "Fulano",
            "surname": "Mengano",
            "email": "fulano@fulano.com",
            "password": "password"
            }
        ```
    The password is encrypted using the crypto library, native to NodeJS, and then sent to the database.

- Login User: 
    - We manage the log in our API (secure so that only an administrator, doctor or patient can access it).

            POST:   http://localhost:3000/login
        body:
        ``` bash
        {
            "email": "fulano@fulano.com",
            "password": "password"
        }
        ```
</details>

Users logged like a 'patient' role can access the following endpoints:

<details>
<summary><strong>Patient</strong></summary>

- Create appointment:
    - Create appointment only for the logged in user through postman with POST option.

            POST:   http://localhost:3000/app
        body:
        ``` bash
        {
            "user_id": "2",
            "service_id": "1",
            "date": "2023-03-05",
            "hour": "12:00",
            "employee_id": "1"
        }
        ```
    Only appointments can be created for the logged in user.

- Create appointment by Admin: 
    - Create appointment by the admin for the someone user through postman with POST option.

            POST:   http://localhost:3000/appAdmin
        body:
        ``` bash
        {
            "user_id": "2",
            "service_id": "1",
            "date": "2023-03-05",
            "hour": "12:00",
            "employee_id": "1"
        }
        ```
- Cancel appointment: 
    - CANCEL petition to see my own appointments currently in the database.
            DELETE:   http://localhost:3000/cancelApp/:id
    You must indicate in the url the ID number of the appointment.
- Cancel appointment by Admin: 
    - CANCEL petition to see my own appointments currently in the database.
            DELETE:   http://localhost:3000/cancelAppAdm/:id
    You must indicate in the url the ID number of the appointment.
- Check all appointments from User: 
    - GET a list of all appointments own user.
            GET:   http://localhost:3000/getApp
- Check all appointments by Admin: 
    - GET a list of all appointments.
            GET:   http://localhost:3000/getAppAdm
   This option displays all fields related to the appointment
- Check all appointments by Doctor: 
    - GET a list of all appointments.
            GET:   http://localhost:3000/getAppAdm
    This option displays all fields of interest to the doctor related to the appointment. 
- Check profile: 
    - GET petition to see the user´s own profile.
            GET:   http://localhost:3000/profile
- Update profile: 
    - We update profile from the logged user.
            PUT:   http://localhost:3000/updateProfile
        body:
        ``` bash
        {
            "name": "Fulano",
            "surname": "Mengano",
            "nif": "12345678A",
            "birth_date": "1884-08-05",
            "direction": "Calle Falsa 123",
            "email": "fulano@fulano.com",
            "phone": "666555444",
            "password": "password"
        }

        ```
- Check all user profiles by Admin: 
    - GET petition to see the user´s profile, if you are logged like an Admin, showing all the information about the users.
            GET:   http://localhost:3000/getProfilesAdm
- Check all user profiles by Doctor: 
    - GET petition to see the user´s profile, if you are logged like a doctor, showing only the relevant information about the users.
            GET:   http://localhost:3000/getProfilesDoctor
</details>

Users logged like an 'Admin' role can access to everything and the following endpoint:

<details>
<summary><strong>Admin</strong></summary>

- Create new role:
    - Create roles through postman with POST option.

            POST:   http://localhost:3000/roles
        body:
        ``` bash
        {
	        "privilege": "VIP_Patient"
        }
        ```
- Create new user_role:
    - Associate a role with any user.

            POST:   http://localhost:3000/roles
        body:
        ``` bash
        {
	        "user_id": "2",
            "role_id": "1"
        }
        ```
