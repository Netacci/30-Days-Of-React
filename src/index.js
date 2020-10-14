import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css'
import 'tachyons'
import pic from './images/pic.jpeg'

// user profile section
const userName = {
  firstName: 'Chineta',
  lastName: 'Adinnu'
};
// destructuring
const {
  firstName,
  lastName
} = userName
const userProfile = ( <div className='pa4'>
  <img className = 'br-100 w-20' src={pic} alt='user-profile'/>
  <p className='f4 ml5'> {firstName}{' '}{lastName} </p>
  <p className ='f6 ml5'> Junior Developer, Nigeria </p> </div>

)
// skills section
const skills = ['HTML', 'CSS', 'Sass', 'JS', 'React', 'Redux', 'Node', 'Git', 'Heroku', 'MYSQL']
const formattedSkills = skills.map((skill) => <button className='mr2  pa1 pr3 pl3 br3 bg-light-blue'>{skill}</button>)
const skillList = ( 
      <div className='f4'>
      <p> SKILLS </p>
      <div className='mt3'>{formattedSkills} </div> </div>
    )
// footer
const preDay = new Date().toUTCString()
const footer = (
  <div className='mt3'>
    <p className='pb4'>Joined on {preDay}</p>
  </div>
     
  )
// app, a container
const app = (
  <div className='bg-near-white h-100vh pa1'>
    <div className='pl5 bg-white ma4'>
      {userProfile}
      {skillList}
      {footer}
    </div>
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