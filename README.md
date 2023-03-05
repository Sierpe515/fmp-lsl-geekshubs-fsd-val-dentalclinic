
# Welcome to dental clinic backend app
<p align="center"><img src="./img/headerpict.jpg"/></p> 

<details>
  <summary>Index</summary>
  <ol>
    <li><a href="#About-this-project">About this project</a></li>
    <li><a href="#Deploy-🚀">Deploy</a></li>
    <li><a href="#Stack">Stack</a></li>
    <li><a href="#Diagram-bd">Diagram DB</a></li>
    <li><a href="#Local-instalation">Local installation</a></li>
    <li><a href="#How-do-we-do-it">How do we do it</a></li>
    <li><a href="#Project-structure">Project structure</a></li>
    <li><a href="#Data-base">Database</a></li>
    <li><a href="#Endpoints">Endpoints</a></li>
    <li><a href="#known-bugs">Known bugs</a></li>
    <li><a href="#Future-functionalities">Future funtionalities</a></li>
    <li><a href="#Licence">Licence</a></li>
    <li><a href="#Webgraphy">Webgraphy</a></li>
    <li><a href="#Gratitudes">Gratitudes</a></li>
    <li><a href="#Contact">Contact</a></li>
  </ol>
</details>

## About this project
---
<p align="center">From the product department GeeksHubs request us to create the backend corresponding to the appointment management system for a Dental Clinic.
A database and a REST API will be created.
The patient must be able to register in the application, login and access to client area. In your patient area you should be able to see a list of appointments that has to future, create appointments, modify them and cancel them.
There will also be a user area with your personal data, which can only be see himself.
In addition, dentists must be able to register as professionals, make login and view all appointments with registered customers.</p>
  

## Deploy 🚀
---
<div align="center">
    <a href="https://www.google.com"><strong>Url a producción </strong></a>
</div>

## Stack
---
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
---
!['imagen-db'](./img/image.png)

## Local installation
---
Steps to make it work on your local computer:
1. Clone the project on your computer with git bash:
 `$git clone 'url-repository'`
2. Install all dependencies with the following command:
 ` $ npm i `
3. Connect the repository with the database with the following commands:
 ``` $ npx sequelize-cli db:create ``` 
 ``` $ npx sequelize-cli db:migrate ``` 
 ``` $ npx sequelize-cli db:seed:all ```
4. Start the server with:
 ``` $ npm run dev ``` 


