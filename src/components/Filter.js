import React from "react";

const Filter = () => {
    return (
        <div className={`filter-wrapper`}>
            <div className={`filter-header`}>
                Eras Notes App
            </div>
            <input type={"text"} className={`filter-input`} placeholder={`Search...`}/>
        </div>
    )
}

export default Filter;
