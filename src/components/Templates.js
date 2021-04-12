import React, {useContext} from 'react'

import {NestedListsContext} from '../context/NestedListsContext'
import Template from '../components/Template'

const Templates = () => {

    const {templates,handleChange} = useContext(NestedListsContext)

    return (
        <section>
            
            {templates}
            <Template templates={templates} handleChange={handleChange}/>
        </section>
    )
}

export default Templates
