import React from "react";
import posterimage from "../images/posterimage.jpg"
import logo from "../images/logo.jpg"
function Poster(){
    return(
        <div className="poster">
            <div className="postercontent">
            <h3>Anytime, Anywhere</h3>
            <h3>Learn on Your Schedule</h3>
            <h3>From Any Device</h3>
            <br></br>
            <p>We Believe everyone has the capacity to be creative </p>
            <p>Course Pro is a place where people develop their own potential</p>
            
            </div>
            <div className="posterimage">
                <img src ={posterimage} height="100%" width="100%"/>
            </div>
        </div>
    )
}

export default Poster;