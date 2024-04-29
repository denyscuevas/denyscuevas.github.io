import React from "react";
import { useNavigate } from "react-router-dom";
import LinkedIn from '../images/newLogo.png';
import GitHubLogo from '../images/githublogo.png';
import DenysLogo from '../images/DenysLogo.png';
export default function Home() {
      function HandleClick(button){
            console.log("Pressed : ", button.target.alt);
            const altTag = button.target.alt;
            if (altTag == 'LinkedIn'){
                  window.open("https://www.linkedin.com/in/denyscuevas/", "_blank");
            } else if(altTag == 'GitHub'){
                  window.open("https://github.com/denyscuevas", "_blank");
            }
      }



    return (
          <div className="Home" id="home">
            <div className = "HomeMiddle">
                  <div className="Logo"> 
                        <img src={DenysLogo} className="DenysLogo"/>
                  </div>

                  <div className="text">
                        <p> Hey! I'm</p>
                        <b>Denys Cuevas</b>
                        <div className="Buttons">
                        <button type="button" onClick={(event) => HandleClick(event)}>
                        <img src={LinkedIn} alt="LinkedIn" className="button-img" border="0" />
                        <img src={GitHubLogo} alt="GitHub" className="button-img" border="0" />
                        
                  </button>
                  </div>
                  </div>
            </div>
          </div>
          
          
    )
  }
  