import React from "react";

const Input = ()=>{
    const saveDetails = (evt)=>{
        console.log(evt.target.value);
    }
    return(
        <div>
            <label>city name: </label><br/>
            <input onChange={saveDetails} type="text" placeholder="insert city"/>
        </div>
    );
};

export default Input;