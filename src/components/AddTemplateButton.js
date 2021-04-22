import React, {useContext}  from 'react'
import {NestedListsContext} from '../context/NestedListsContext'

const AddTemplateButton = () => {
    const {showModal} = useContext(NestedListsContext)

    return (
        <section className='btn-container'>
            <button type='button' onClick={showModal} className="open-modal">+</button>
        </section>
    )
}

export default AddTemplateButton
