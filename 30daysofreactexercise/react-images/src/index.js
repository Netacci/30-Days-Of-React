import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import html from './images/html.png'
import css from './images/css.png'
import js from './images/js.png'
import react from './images/react.png'
import 'tachyons'
import * as serviceWorker from './serviceWorker';



const title = 'Front End Technologies'

const header = (
  <header className='tc'>
    <h1>{title}</h1>
  </header>
)
const images = (
  <images>
      <div>
        <div className='flex mt5 justify-around'>
          <img src={html} alt='html' className='w-20'/>
          <img src={css} alt='css'  className='w-20'/>
          <img src={js} alt='js' />
          <img src={react} alt='react' className='w-20'/>

        </div>
       
    </div>
  </images>
  
)

const app = (
  <div className='bg-washed-red h-100vh pa1'>
    {header}
    {images}
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
