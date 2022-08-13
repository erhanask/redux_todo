import React from "react";

const Form = () => {
    // {/*todo: option-checked ise bu 📌 emoji gelecek.*/}

    return (
        <div className={`form-wrapper`}>
            <div className={`form-form`}>
                <textarea className={`form-input`} placeholder={`Enter Your Note Here...`}></textarea>
                <div>
                    <span className={`red form-option`}>
                        📌
                    </span>
                    <span className={`purple form-option`}></span>
                    <span className={`yellow form-option`}></span>
                    <span className={`blue form-option`}></span>
                    <span className={`green form-option`}></span>
                    <input type={'submit'} className={`submit-form-btn`}/>
                </div>
            </div>
        </div>
    )
}

export default Form;
