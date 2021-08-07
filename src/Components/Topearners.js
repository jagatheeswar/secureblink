import React from "react";

import courseimg1 from "../images/posterimage.jpg"
import howitworks from "../images/howitworks.svg"
import christopher from "../images/christopher.png"
import jonas from "../images/jonas.png"
import luis from "../images/luis.png"

import criag from "../images/criag.png"

function Topearners(){
    return(
        <div className="topearners">
            <p className="st">Top Earners</p>
            <p className="heading">Transforming Your Ideas</p>
            <h1 className="heading"> Into Reality</h1>
            <br></br>

            <div className="topearnersflexcontainer">
                <div className="earner1" >
                <div>
                <img src={luis} className="earnerimage"  width="100%" height="100%" id=" earnerimage"/>
                
                </div>
                <h3 className="amountearned">₹8,00,000</h3>
                </div>

                <div className="earner2">
            <div>
            <img src={criag} className="earnerimage"  width="100%" height="100%" id=" earnerimage"/>
            </div>
            <h3 className="amountearned">₹6,00,000</h3>
                </div>
                
                <div className="earner3">
            <div>
            <img src={christopher} className="earnerimage" width="100%" height="100%"/>
            </div>
            <h3 className="amountearned">₹5,00,000</h3>
                </div>
                <div className="earner4">
            <div>
            <img src={jonas} className="earnerimage"  width="100%" height="100%" id=" earnerimage"/>
            </div>
            <h3 className="amountearned">₹4,50,000</h3>
                </div>
            </div>
            
            </div>

    )
}

export default Topearners;
