import React, {useContext} from 'react'
import {NestedListsContext} from '../context/NestedListsContext'

const CreateTemplateModal = () => {
    
    const {createTemplate, showModal, handleChangeRoutineName, routineName} = useContext(NestedListsContext)
    return (
        <section className='modal-container'>        
            <article className='background' onClick={showModal}></article>
            <article className='modal'>
                <h2>Create a routine</h2>
                <form onSubmit={createTemplate} >
                    <input type='text' placeholder='Enter routine name...' value={routineName} onChange={handleChangeRoutineName} required/>
                    <button type='submit' className="create-template">Create</button>
                </form>
        </article>
      </section>
    )
}

export default CreateTemplateModal
