import htmlIcon from "./image/icons8-html-logo.svg";
import css from "./image/icons8-css-logo.svg";
import boostrap from "./image/icons8-bootstrap-logo.svg";
import tailwind from "./image/icons8-tailwind-css.svg";
import javascript from "./image/icons8-javascript-logo.svg";
import jquery from "./image/icons8-jquery.svg";
import react from "./image/icons8-react.svg";
import ejs from "./image/icons8-ejs.svg";
import node from "./image/icons8-nodejs.svg";
import express from "./image/icons8-express-js.svg";
import mongodb from "./image/icons8-mongodb.svg";
import postgres from "./image/icons8-postgresql.svg";
import github from "./image/icons8-github-squared.svg";
import giticon from "./image/icons8-github-logo-94.png";
import gitflavicon from "./image/icons8-github.svg";


 const skills = [

    {id: 1,
    imageURL: htmlIcon,
    skillType: "HTML"},

    {id: 2,
    imageURL: css,
    skillType: "CSS"},

    {id: 3,
    imageURL: boostrap,
    skillType: "Boostrap"},

    {id: 4,
    imageURL: tailwind,
    skillType: "Tailwindcss"},
 
    {id: 5,
    imageURL: javascript,
    skillType: "javaScript"},
 
    {id: 6,
    imageURL: ejs,
    skillType: "ejs"},
 
    {id: 7,
    imageURL: react,
    skillType: "React"},

    {id: 8,
    imageURL: jquery,
    skillType: "jQuery"},

    {id: 9,
    imageURL: node,
    skillType: "Node.js"},

    {id: 10,
    imageURL: express,
    skillType: "express.js"},

    {id: 11,
    imageURL: mongodb,
    skillType: "mongoDB"},

    {id: 12,
    imageURL: postgres,
    skillType: "postgresql"},

    {id: 13,
    imageURL: gitflavicon,
    skillType: "github"},

 ];

 export const projects = [
   {
      id:1,
      title: "Blog/forum",
   imageURL: github,
   description: "This is a blog/forum where users can read, post articles and also comments on articles. This project was build with React and TailwindCss. Express was used on the server side and mongoDb as the database. In this project there is an image slider incase user post multiple images and the pages are paginated. In the home page there is search filter that allow users to filter articles of the specified categories. There are protected routes also, where user can find his previous posts.",
   link: "https://github.com/Osesoguogho/blog-forum-code.git"
 },

 {
   id:2,
   title: "finance Tracker",
   imageURL: github,
   description: "This is a web app design with MERN Stack and tailwindCss. In this project users can register on the website and then track their monthly spending. There is a section where you can update your monthly budget. This app helps you to keep record of your monthly financial spendings. The link to this code is posted below",
   link:"https://github.com/Osesoguogho/finance-tracker.git"
 },

 {
   id:3,
   title: "quizz app",
   imageURL: github,
   description: "This app was written as a homework in my early days of coding. In this app, EJS, EXPRESS, NODE.JS and BOOTSTRAP was use. it a web app that allow users to guess the capital city of different cities. in each one the user get right, he get a +1 score, when the user get a question wrong then, the game ends and calculate the total score folr the user. then user can restart the game. it is an exciting game. The link to this code on github is posted below",
   link:"https://github.com/Osesoguogho/main.git"
 },
 
 {
   id:4,
   title: "My porfolio",
   imageURL: github,
   description: "This is my porfolio website. It was design with React and Tailwindcss",
   link: "https://github.com/Osesoguogho/My-porfolio.git"
 }
 
]

 export default skills;