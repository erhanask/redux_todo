import React from "react";
import {useDispatch} from "react-redux";
import {filterTodos} from "../redux/todos/todosSlice";

const Filter = () => {

    const dispatch = useDispatch();


    return (
        <div className={`filter-wrapper`}>
            <div className={`filter-header`}>
                Eras Notes App
            </div>
            <input onChange={(e) => {
                dispatch(filterTodos(e.target.value))
            }} type={"text"} className={`filter-input`} placeholder={`Search...`}/>
        </div>
    )
}

export default Filter;
