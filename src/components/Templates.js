import React, {useContext} from 'react'

import {NestedListsContext} from '../context/NestedListsContext'
import Template from '../components/Template'

const Templates = () => {

    const {templates,handleChange, createTemplate, addItem} = useContext(NestedListsContext)

    return (
        <section>
            
            {
            templates.map(template=>{
                const {templateID, inputValue, items} = template
                return (
                    <Template key={templateID} inputValue={inputValue} inputID={templateID} items={items} handleChange={handleChange} addItem={addItem}/>
                )
            })
            }
            <button type='button' onClick={createTemplate}>+</button>
        </section>
    )
}

export default Templates
