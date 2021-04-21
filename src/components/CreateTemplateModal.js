import React, {useContext} from 'react'
import {NestedListsContext} from '../context/NestedListsContext'
// import cleaningIcon from '../cleaning-icon.svg'

const CreateTemplateModal = () => {
    
    const {createTemplate, showModal, handleChangeRoutineName, routineName, savedTemplates, createFromSavedTemplate, deleteAllSavedTemplates} = useContext(NestedListsContext)
    return (
        <section className='modal-container'>        
            <article className='background' onClick={showModal}></article>
            <article className='modal'>
                <h2>Create a routine</h2>
                <form onSubmit={createTemplate} >
                    <input type='text' placeholder='Enter routine name...' value={routineName} onChange={handleChangeRoutineName} required/>
                    <button type='submit' className="create-template">Create</button>
                </form>
                <div>
                    <h3>Create from saved templates</h3>

                    <ul className={`templates-container ${savedTemplates.length >= 3 ? 'not-empty' : 'empty'}`}>

                        {
                            savedTemplates.length === 0 ? <p>Nothing here...</p> : null
                        }
                        {
                            savedTemplates.map((savedTemplate,index) => {
                                const {templateID,templateName, items} = savedTemplate
                                const checkedItems = items.filter(item => item.isChecked === true)
                                return (
                                    <li key={index} onClick={()=>createFromSavedTemplate(templateID)}>
                                        <p>{templateName}</p>
                                        <div>
                                            <i className="far fa-check-square"></i>
                                            {checkedItems.length}/{items.length}
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <button type='button' onClick={()=>deleteAllSavedTemplates()}>
                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><path d="M16,11h-1V3c0-1.1-0.9-2-2-2h-2C9.9,1,9,1.9,9,3v8H8c-2.76,0-5,2.24-5,5v7h18v-7C21,13.24,18.76,11,16,11z M19,21h-2v-3 c0-0.55-0.45-1-1-1s-1,0.45-1,1v3h-2v-3c0-0.55-0.45-1-1-1s-1,0.45-1,1v3H9v-3c0-0.55-0.45-1-1-1s-1,0.45-1,1v3H5v-5 c0-1.65,1.35-3,3-3h8c1.65,0,3,1.35,3,3V21z"/></g></svg>
                    <p>Delete all saved templates</p>
                </button>
            </article>
      </section>
    )
}

export default CreateTemplateModal
