import React from "react";

export const SecondsCounter = ({digito}) =>{
    return (
        <div className="grid gap-3 bg-black text-white">
        <div className=" mb-3 p-4 g-col-4 border border-secondary-subtle rounded-4 bg-light-subtle ">{digito}</div>
        </div>
    )
} 