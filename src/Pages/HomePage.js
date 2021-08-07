import React from "react";
//import "../styles/homepage.css"
//import MenuBar from "../Components/MenuBar"
import Poster from "../Components/Poster"
import Numbers from "../Components/Numbers"
import Courses from "../Components/Courses";
import Topearners from "../Components/Topearners";
import Howitworks from "../Components/Howitworks";
import Testimonials from "../Components/Testimonials";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Contactheading from "../Components/Contactheading";
import "../styles/Navbar.css"
import "../styles/Numbers.css"
import "../styles/Poster.css"
import "../styles/Contact.css"
import "../styles/Course.css"
import "../styles/Courseheading.css"
import "../styles/Footer.css"
import "../styles/Howitworks.css"
import "../styles/Testimonials.css"
import "../styles/Topearners.css"
function HomePage(){
    return(
        <div className="maincontainer">
            <Navbar />
            <Poster />
            <Numbers />
            <Courses />
            <Topearners />
            <Howitworks />
            <Testimonials />
            <Contactheading />
            <Contact />
            <Footer />
        </div>
    )
}

export default HomePage;