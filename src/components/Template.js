import React from 'react'

const Template = ({handleChange, items, inputValue}) => {
    return (
        <article>
            <form>
                <input type="text" placeholder="enter smth..." name="task" required onChange={handleChange} value={inputValue}></input>
                <button type='submit'>add</button>
            </form>

            <div>
                <div className="check-task">
                    {/* <input type="checkbox" unchecked={isChecked.toString()} name="item"/>      */}
                    {/* <label htmlFor="item" onClick={checkToggle}>{title} */}
                    <input type="checkbox" unchecked={'true'} name="item"/>     
                    <label htmlFor="item">
                        item
                        {/* {title} */}
                        {/* {isChecked ? (<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-square" className="svg-inline--fa fa-check-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"></path>
                            </svg>) : (<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" className="svg-inline--fa fa-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                             <path fill="#f8ecee" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z"></path>
                        </svg>)}           */}
                    </label> 
                </div> 
                {/* <div className="edit-remove">
                    <i className="fas fa-pencil-alt" onClick={editItem}></i>
                    <i className="fas fa-trash" onClick={removeItem}></i>
                </div>     */}
            </div>
        </article>
    )
}

export default Template
