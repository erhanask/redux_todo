import React from "react";
import {useSelector} from "react-redux";


const Listing = () => {
    const todos = useSelector(state => state.todos.items);

    return (
        <div className={`row listing-wrapper`}>
            {todos.map((todo) => {
                return (
                    <div className={`${todo.color} col-4 listing-box`}>
                        {todo.name}
                    </div>
                )
            })}


        </div>
    )
}

export default Listing;
