import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css'

const welcome = 'Welcome to 30 days of React'
const title = 'Getting Started with React'
const subtitle = 'Javascript Library'
const author = {
  firstName: 'Neta',
  lastName: 'Adinnu',
};
const date ='Oct 12, 2020'
// destructuring
const {firstName, lastName} = author;

// header
const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2> {title}</h2>
      <h3>{subtitle}</h3>
      <p>Instructor: {firstName} {lastName} </p>
      <small>{date}</small>

    </div>
   
  </header>
)
const numOne = 3
const numTwo = 2
const result = (
  <p>{numOne} + {numTwo}= {numOne + numTwo}</p>
)

const yearBorn = 1991
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn;
const personAge = (
  <p>{' '} {firstName} {lastName} is {age}</p>
)
// main
const techs = ['HTML', 'CSS', 'JavaScript']
const techFormatted = techs.map((tech)=> <li>{tech}</li>)
const main = (

  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started with<strong><em> react.js</em></strong>:</p>
      <ul>{techFormatted}</ul>
      {result}
      {personAge}

    </div>
   
  </main>
)
// footer
const copyRight = 'Copyright 2020'
const footer = (
  <footer>
    <div className='footer-wrapper'>
    <p>{copyRight}</p>

    </div>
   
  </footer>
)
// app, a container
const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
