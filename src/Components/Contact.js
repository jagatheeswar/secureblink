import React from "react";
import posterimage from "../images/posterimage.jpg"
import howitworks from "../images/howitworks.svg"
import linkedin from "../images/Linkedin.svg"
import github from "../images/Github.svg"
import facebook from "../images/Facebook.svg"
import Twitter from "../images/Twitter.svg"
import call from "../images/call.svg"
import message from "../images/message.svg"
import location from "../images/location.svg"
function Contact(){
    return(
        <div className="contactcontainer">
            <div className="contactinfo">
                
                <h3 className="contactheading">
                    Contact Information
                </h3>
                    <div className="messagediv">
                    <img src={message} height="100px" width />    
                    <p className="emailid">contact@coursepro.com </p>
                    </div>
                    <div className="messagediv">
                    <img src={call} height="100px" width />    
                    <p>1800-562-895, 1800-869-877</p>
                    </div>
                    
                    <div className="messagediv">
                    <img src={location} height="100px" width />    
                    <p>102 Street, India</p>
                    </div>
            
                <h3 id="socialmediaheading">Social Media Channel</h3>
                <br></br>
                <ul className="socialmediasvg">
                    <li>
                        <img src={facebook} />
                    </li>
                    <li>
                        <img src={Twitter} />
                    </li>
                    <li>
                        <img src={github} />
                    </li>
                    <li>
                        <img src={linkedin} />
                    </li>
                    
                </ul>
            </div>

            <div className="form">
                <p className="formheading">Fill up the form and our team will get back to you within 24 hours</p>
                <form action="#" method="POST">
                <input type="text" required maxLength="30" name="name" placeholder="Name" />
                <input type="email" required name="email" placeholder="Email" />
                <input type="number" required maxLength="10" name="name" placeholder="Phone" />
                <input type="text" required maxLength="50" name="subject" placeholder="Subject" />
                
                <textarea cols="50" rows="10" placeholder="     Message"></textarea>
                <input type="submit" value="Submit" id="submitbtn" />
                </form>
            </div>
            
        </div>
    )
}

export default Contact;