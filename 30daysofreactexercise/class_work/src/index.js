import React from 'react';
import ReactDOM from 'react-dom';
import pic from './images/pic.jpeg'

const userName = {
    firstName: 'Chineta',
    lastName: 'Adinnu'
  };
  // destructuring
  const {
    firstName,
    lastName
  } = userName;
  const welcome = 'Welcome to 30 Days Of React';
  const title = 'Getting Started with React';
  const subtitle = 'JavaScript Library';
  const date = '15, Oct 2020'

// header component
const Header = () => (
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
    // user card component
const UserCard = () => {
   return(
    <div className='pa4 user-card'>
        <img className = 'br-100 w-20' src={pic} alt='user-profile'/>
        <p className='f4 ml5'> {firstName}{' '}{lastName}  </p>
        <p className ='f6 ml5'> Junior Developer, Nigeria </p>
</div>
   ) 
}
// Techlist component
const TechList = () =>{
    const techs =  ['HTML', 'CSS', 'Sass', 'JS', 'React', 'Redux', 'Node', 'Git', 'Heroku', 'MYSQL']
    const techFormatted = techs.map((tech)=> <li key={tech}>{tech}</li>)
    return techFormatted

}
// main component
const Main =()=>(
    <main>
        <div>
            <p>Prerequisite to get started with react</p>
            <ul><TechList/></ul>
            <UserCard/>
        </div>
    </main>
)
// Footer component
const Footer = () =>(
    <footer>
        <div className='footer-wrapper'>
            <p>Copyright 2020</p>
        </div>
    </footer>
)
// App, parent container component
const App = () =>(
    <div>
        <Header/>
        <Main />
        <Footer/>
    </div>
)
   
    


const rootElement = document.getElementById('root');

ReactDOM.render(<App/>, rootElement)