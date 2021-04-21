import React, {useContext} from 'react'

import {NestedListsContext} from '../context/NestedListsContext'
import Template from '../components/Template'
import CreateTemplateModal from '../components/CreateTemplateModal'

const Templates = () => {

    const {templates,handleChange, addItem, checkToggle,isModalOpened, showModal, saveTemplate, removeTemplate, editItem, removeItem, unCheckAll} = useContext(NestedListsContext)

    return (
        <>
            <section>
            
                {
                templates.map(template=>{
                    const {templateID,templateName, inputValue, items} = template
                    return (
                        <Template key={templateID} inputValue={inputValue} inputID={templateID} templateName={templateName} saveTemplate={saveTemplate} removeTemplate={removeTemplate} items={items} handleChange={handleChange} addItem={addItem} checkToggle={checkToggle} editItem={editItem} removeItem={removeItem} unCheckAll={unCheckAll}/>
                    )
                })
                }
                <button type='button' onClick={showModal} className="open-modal">+</button>
        </section>
        {
            isModalOpened &&  <CreateTemplateModal/>
        }
        </>
 
    )
}

export default Templates
