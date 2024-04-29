import { Link, easeOutCubic } from "react-scroll";

export default function Navbar() {
    return (
        <header>
            <div className = "Navbar">
                    <Link
                      to="home"
                      smooth={"easeOutCubic"}
                      duration={50}
                      offset={-80}
                    >Denys</Link>

                    <Link 
                      to="home"
                      smooth={"easeOutCubic"}
                      duration={50}
                      offset={-80}
                      >Home</Link>

                    <Link 
                      to="about"
                      smooth={"easeOutCubic"}
                      duration={50}
                      offset={-80}
                      >About</Link>



                    <Link 
                        to="projects"
                        smooth={"easeOutCubic"}
                        duration={50}
                        offset={-80}
                      >Projects</Link>

                    <Link 
                        to="contact"
                        smooth={"easeOutCubic"}
                        duration={50}
                        offset={-80}
                      >Contact</Link>
            </div>
        </header>
    )
  }
  