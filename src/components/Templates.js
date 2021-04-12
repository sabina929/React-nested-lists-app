import React, {useContext} from 'react'

import {NestedListsContext} from '../context/NestedListsContext'
import Template from '../components/Template'

const Templates = () => {

    const {templates,handleChange, createTemplate, addItem, checkToggle} = useContext(NestedListsContext)

    return (
        <section>
            
            {
            templates.map(template=>{
                const {templateID, inputValue, items} = template
                return (
                    <Template key={templateID} inputValue={inputValue} inputID={templateID} items={items} handleChange={handleChange} addItem={addItem} checkToggle={checkToggle}/>
                )
            })
            }
            <button type='button' onClick={createTemplate} className="create-template">+</button>
        </section>
    )
}

export default Templates
