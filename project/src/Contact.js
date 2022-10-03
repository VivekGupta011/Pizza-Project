import React from "react";
export const Contact=(Nothing)=>{
    console.log(Nothing);
    return(
        <div className="ContactChild">
    <h2>
        {Nothing.name}
    </h2>
    <p>
        {Nothing.email}
    </p>
    <p>
        {Nothing.phone}
    </p>
    </div>
    )
}