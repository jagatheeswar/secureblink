import React from "react";
import courseimg1 from "../images/posterimage.jpg"
import calender from "../images/calender.svg"
import schedule from "../images/schedule.svg"
import business from "../images/business.jpg"
import photoshop from "../images/photoshop.jpg"
import marketing from "../images/marketing.jpg"
import luis from "../images/luis.png"
import jonas from "../images/jonas.png"

function Courses(){
    return(
        
            <div className="coursescontainer">
                <h4 className="courseheadinghfour">
                    courses
                </h4>
                <h2 className="courseheadingtwo">
                    Our Most Popular Courses
                </h2>
                
                    <br></br>
                <div className="courses">

               <div className="course1">
               <div>
                <img src={business} height="100%" width="100%" />
                <button id="floabutton">Design</button>
                    </div>
                    <h2 id="courseheading">Ultimate Business Intelligence Analyst A to Z Course 2021</h2>
                    <br></br>
                    <i className="totalstudents"><b>46,995</b> Student</i>
                    <br></br><br></br>
                <span id="time"><i><img src ={schedule} height="20px" width="20px" /></i> 11hr 20min</span> <span id="lectures"><i><img src ={calender} height="20px" width="20px" /></i> 44 lectures</span>
                <br></br>
                <hr></hr>
                <div className="cardfooter">
                <span id="time"><img src={luis} width="50px" height="50px" id="profilepic"/></span> <span id="profilename">&nbsp; <b>  Albert Hitler</b></span><span id="lectures" className="fees">₹2000 <i id="striken">₹4000</i></span>
                </div>
               </div>
               
               <div className="course2">
               <div>
                <img src={photoshop} height="100%" width="100%" />
                <button id="floabutton">Business</button>
                    </div>
                    <h2 id="courseheading">Adobe Photoshop Training: From Beginner to Pro</h2>
                    <br></br>
                    <i className="totalstudents"><b>6,995</b> Student</i>
                    <br></br><br></br>
                <span id="time"><i><img src ={schedule} height="20px" width="20px" /></i>11hr 20min</span> <span id="lectures"><i><img src ={calender} height="20px" width="20px" /></i>44 lectures</span>
                <br></br>
                <hr></hr>
                <div className="cardfooter">
                <span id="time"><img src={courseimg1} width="50px" height="50px" id="profilepic"/></span> <span id="profilename">&nbsp; <b>Wanda Willson</b></span><span id="lectures" className="fees">₹3000 <i id="striken">₹3000</i></span>
                </div>
               </div>
               
               <div className="course3" id="coursecard">
               <div>
                <img src={marketing} height="100%" width="100%" />
                <button id="floabutton">Marketing</button>
                    </div>
                    <h2 id="courseheading">Social Media Marketing - A to Z Content Marketing class 2021</h2>
                    <br></br>
                    <i className="totalstudents"><b>46,995</b> Student</i>
                    <br></br><br></br>
                <span id="time"><i><img src ={schedule} height="20px" width="20px" /></i>11hr 20min</span> <span id="lectures"><i><img src ={calender} height="20px" width="20px" /></i>44 lectures</span>
                <br></br>
                <hr></hr>
                <div className="cardfooter">
                <span id="time"><img src={luis} width="50px" height="50px" id="profilepic"/></span> <span id="profilename"> <b> Albert Hitler</b></span><span id="lectures" className="fees">₹2000 <i id="striken">₹4000</i></span>
                </div>
               </div>

                </div>
            </div>   
    )
}

export default Courses;