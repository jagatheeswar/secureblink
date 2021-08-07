import React from "react";
import logo from "../images/Group 3.svg"
function MenuBar(){
    return(
        
            <nav id="navbar">
                <div className="navleft">
                    <img src={logo} height="200px" width="180px"/>
                    &nbsp; &nbsp; &nbsp; &nbsp;
                                </div>
                <div className="navright">
                    <ul>
                        <li id="login">
                            Login
                        </li>
                        <li id="register">
                            <button>Register</button>
                        </li>
                    </ul>
                   
                </div>
                
            </nav>
    
    )
}

export default MenuBar;