import React from "react";
import posterimage from "../images/posterimage.jpg"
import howitworks from "../images/howitworks.svg"
function Howitworks(){
    return(
        <div>
            <h4 className="st">Refer</h4>
            <p className="heading">How It's Work</p>
            <div className="holder">
            <img src={howitworks}  width="100%" height="100%" / >
            </div>
        </div>
    )
}

export default Howitworks;