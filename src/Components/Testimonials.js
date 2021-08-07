import React from "react";
import posterimage from "../images/posterimage.jpg"
//import logo from "../images/logo.jpg"
import courseimg1 from "../images/posterimage.jpg"
import christopher from "../images/christopher.png"
import right from "../images/right.svg"
import luis from "../images/luis.png"


function Testimonials(){
    return(
        <div>
            <p className="st">Testimonials</p>
            <p className="heading">Check Out What Our</p>
            <h1 className="heading"> Students Think About Us</h1>
            <br></br>
            <div className="commentcontainer">
            <div className="comment1">
                    <p>
                    It's a comprehensive online learning platform for everyone looking to learn and course pro. 
                    provinding this platform which is very beneficial for practicals. 
                    Students can revise everything at home like dissection and slides
                </p>
                <div className="commentimageholder">
                    <div className="commenter">
                <img id="commentimage" src={christopher} height="100px" width="100px"/>
               <span> &nbsp;christopher</span>
               <p className="commentdate">&nbsp; Yesterday</p>
                </div>
                <img id="commentimage" src={right} height="100px" width="100px"/>
                </div>

                </div>
                <div className="comment2">
                    <p>
                    It's a comprehensive online learning platform for everyone looking to learn and course pro. 
                    provinding this platform which is very beneficial for practicals. 
                    Students can revise everything at home like dissection and slides
                </p>
                <div className="commentimageholder">
                    <div className="commenter">
                <img id="commentimage" src={luis} height="100px" width="100px"/>
               <span className="commentername" > &nbsp;Anshul Jain</span>
               <p className="commentdate">&nbsp; Yesterday</p>
                </div>
                <img id="commentimage" src={right} height="100px" width="100px"/>
                </div>

                </div>
                
            </div>
        </div>
    )
}

export default Testimonials;