import React from 'react'

const Template = ({handleChange, items, inputValue,inputID,addItem}) => {
    return (
        <article>
            <form id={`${inputID}formid`} onSubmit={addItem}>
                <input type="text" id={`${inputID}inputid`} placeholder="enter smth..." name="task" required onChange={handleChange} value={inputValue}></input>
                <button type='submit'>add</button>
            </form>

           <div>
               {
                   items.map(item=>{
                       return (
                        <div key={item.itemID}>
                            <div className="check-task">
                                <input type="checkbox" unchecked={'true'} name="item"/>     
                                <label htmlFor="item">
                                    {item.itemValue}
                
                                </label> 
                            </div> 
                       
                        </div>
                       )
                   })
               }
           </div>
        </article>
    )
}

export default Template
