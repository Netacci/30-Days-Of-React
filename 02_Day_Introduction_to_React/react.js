const rootElement = document.querySelector('.root');
const author = {
    firstName: 'Neta',
    lastName: 'Adinnu'
}
const {firstName, lastName} = author;

const  header = (
    <header>
    <div  className="header-wrapper">
    <h1> Welcome to React</h1>
        <h2>Getting Started</h2>
        <p> Instructor: {firstName} {lastName}</p>
        
    </div>
      
   </header>
)
const techs = ['HTML', 'CSS', 'JAVASCRIPT']
const techsFormated = techs.map((tech)=> <li key={tech}>{tech}</li>)
const main = (
    <main className="main-wrapper">
        <p>Prerequisite to get started with <strong> <em>react.js</em></strong> </p>
        <ul>
            {techsFormated}
        </ul>
    </main>
)
const footer = (
    <footer className="footer-wrapper">
        <p> Copyright 2020</p>
    </footer>
)

const app = (
    <div className="app">
        {header}
        {main}
        {footer}
    </div>
)

ReactDOM.render(app, rootElement)

