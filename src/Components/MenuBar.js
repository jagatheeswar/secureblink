import React from "react";
import logo from "../images/logo.jpg"
function MenuBar(){
    return(
        
            <nav id="navbar">
                <div className="navleft">
                    <img src={logo} height="30px" width="30px"/>
                    &nbsp; &nbsp; &nbsp; &nbsp;
                <span> Coursera</span>
                </div>
                <div className="navright">
                    <ul>
                        <li>
                            Login
                        </li>
                        <li>
                            <button>Register</button>
                        </li>
                    </ul>
                </div>
                
            </nav>
    
    )
}

export default MenuBar;