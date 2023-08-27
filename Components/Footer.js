import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <div className="footer">
      <div className='icons'>
      <h1>Follow me on</h1>
      <svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>  
      <svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
      </div>
      <div className='about'>
      <h1>About</h1>
      <h3>About Us</h3>
      <h3>Swag Store</h3>
      <h3>Community Discussions</h3>
      <h3>News</h3>
      </div>
      <div className='lib'>
      <h1>Libraries</h1>
      <h3>MDN</h3>
      <h3>W3 Schools</h3>
      <h3>Geek for Geeks</h3>
      </div>
      <div className='sponsers'>
      <h1>Sponsers</h1>
      <h3>HTML</h3>
      <h3>CSS</h3>
      <h3>JAVA SCRIPT</h3>
      <h3>REACT</h3>
      <h3>Framework</h3>
      </div>
    </div>
  )
}

export default Footer
