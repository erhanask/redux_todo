import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteTodo} from "../redux/todos/todosSlice";


const Listing = () => {
    const todos = useSelector(state => state.todos.items);
    const filteredItems = useSelector(state => state.todos.filteredItems);
    const dispatch = useDispatch()
    return (
        <div className={`row listing-wrapper`}>
            {filteredItems ? filteredItems.map((filteredItem) => {
                return (
                    <div key={filteredItem.id} className={`col-4 listing-box`}>
                        <div className={`${filteredItem.color} listing-content`}>
                            {filteredItem.name}
                            <span onClick={() => {dispatch(deleteTodo(filteredItem.id))}} className={`content-delete`}>X</span>
                        </div>
                    </div>
                )
            }) : todos.map((todo) => {
                return (
                    <div key={todo.id} className={`col-4 listing-box`}>
                        <div className={`${todo.color} listing-content`}>
                            {todo.name}
                            <span onClick={() => {dispatch(deleteTodo(todo.id))}} className={`content-delete`}>X</span>
                        </div>
                    </div>
                )
            })}


        </div>
    )
}

export default Listing;
