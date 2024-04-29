import React from 'react';
import { useNavigate } from "react-router-dom";
import LinkedIn from '../images/newLogo.png';
import GitHubLogo from '../images/githublogo.png';
import Navbar from "./Navbar";
export default function Contact() {
    return (
          <div  id = "contact" className="Contact">
               <div className = "ContactMiddle">
                  <div className='Form'>
                        <h3> Contact Me</h3>
                        <form  action= 'https://getform.io/f/paygweqa' method='POST'>
                              <input required className='formLabel' placeholder="Name" type="text" id="name" name='name'/>
                              <input required className='formLabel' placeholder="Email" type="text" id="email" name='email' />
                              <textarea required rows= "8" className='formLabelM' placeholder="Message" type="text" id="message" name='message'/>
                              <button  type='submit'className='formButton'> SUBMIT </button>
                        </form>
                  </div>
            </div>

          </div>
          
          
    )
  }
  