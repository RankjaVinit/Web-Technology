import React from "react";
import './Card.css'
function Card(props){
    return(
        <>
            <div className="outer">

                <h1 className="name"> {props.name} </h1>

                <hr />

                <p className="para"> 
                    {props.para}
                </p>

            </div>
        </>
    );
}

export default Card;