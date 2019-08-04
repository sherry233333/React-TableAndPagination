import React from "react";
import "./css/button.css"

function Button(props){

    return(
        <a href='javascript:' className={props.cname} onClick={props.click} style={props.style}>{props.name}</a>
    );
}

export default Button;