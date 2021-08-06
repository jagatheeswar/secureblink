import React from "react";
import "../styles/homepage.css"
import MenuBar from "../Components/MenuBar"
import Poster from "../Components/Poster"
import Numbers from "../Components/Numbers"

function HomePage(){
    return(
        <div className="maincontainer">
            <MenuBar />
            <Poster />
            <Numbers />
        </div>
    )
}

export default HomePage;