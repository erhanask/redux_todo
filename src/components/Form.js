import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../redux/todos/todosSlice";
import {useSelector} from "react-redux";

const Form = () => {
    // {/*todo: option-checked ise bu 📌 emoji gelecek.*/}
    const [currentColor, setCurrentColor] = useState('red');
    const dispatch = useDispatch();
    const todos = useSelector( state => state.todos.items);
    console.log(todos);

    const handleSubmit = (e) => {
        e.preventDefault();
        //textarea value and color value sending to reducer function
        dispatch(addTodo(e.target[0].value, currentColor))
        //then cleaning the value
        e.target[0].value = '';
    }

    return (
        <div className={`form-wrapper`}>
            <form onSubmit={handleSubmit}
                  className={`form-form`}>
                <textarea className={`form-input`} placeholder={`Enter Your Note Here...`}></textarea>
                <div>
                    <span onClick={() => setCurrentColor('red')} className={`red form-option`}>
                        {currentColor === 'red' ? '📌' : ''}
                    </span>
                    <span onClick={() => setCurrentColor('purple')} className={`purple form-option`}>
                        {currentColor === 'purple' ? '📌' : ''}
                    </span>
                    <span onClick={() => setCurrentColor('yellow')} className={`yellow form-option`}>
                        {currentColor === 'yellow' ? '📌' : ''}
                    </span>
                    <span onClick={() => setCurrentColor('blue')} className={`blue form-option`}>
                        {currentColor === 'blue' ? '📌' : ''}
                    </span>
                    <span onClick={() => setCurrentColor('green')} className={`green form-option`}>
                        {currentColor === 'green' ? '📌' : ''}
                    </span>
                    <input type={'submit'} className={`submit-form-btn`}/>
                </div>
            </form>
        </div>
    )
}

export default Form;
