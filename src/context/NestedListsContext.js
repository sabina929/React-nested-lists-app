import React, {createContext, useState, useEffect} from 'react'

import { v4 as uuidv4 } from 'uuid';

export const NestedListsContext = createContext()

const NestedListsContextProvider = (props) => {
    const [templates, setTemplates] = useState([])
    const [savedTemplates, setSavedTemplates] = useState([])
    const [routineName, setRoutineName] = useState('')
    const [isModalOpened, setIsModalOpened] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [editingItemID, seteditingItemID] = useState('')

    // CREATE TEMPLATE 
    const createTemplate = (e) => {
        e.preventDefault()
        const newTemplate = {
            templateID: uuidv4(),
            templateName: routineName,
            inputValue: '',
            items:[]
        }

        setTemplates(prevTemplates => {
            return [...prevTemplates,newTemplate]
        })

        setRoutineName('')
    }

    const createFromSavedTemplate = (id) => {
        let copyOfTemplatesArr = JSON.parse(JSON.stringify(savedTemplates))
        let filteredTemplates = copyOfTemplatesArr.filter(template => template.templateID ===id)

        // console.log(filteredTemplates)

        let mappedFilteredTemplates = filteredTemplates.map(template=>{
            for(let item of template.items) {
                    // item.isChecked = false
                    // item.itemID = Math.random()
                    item.itemID = uuidv4()  
            }
            return template
        })

        
        const newTemplate = {
            templateID: uuidv4(),
            templateName: mappedFilteredTemplates[0].templateName,
            inputValue: mappedFilteredTemplates[0].inputValue,
            items:[...mappedFilteredTemplates[0].items]
        }

       setTemplates(prev => {
           return [...prev, newTemplate]
       })

    }
    // HANDLE INPUT VALUE CHANGE
    const handleChangeRoutineName = (e) => {
        let inputElem = {
            value: e.target.value
        }
        setRoutineName(inputElem.value)
    }
    

    // HANDLE INPUT VALUE CHANGE
    const handleChange = (e) => {
        let str = e.target.id;
        let arr = str.split("");
        arr.splice(str.length - 7, str.length);
        let idStr = arr.join('');
  
      let inputElem = {
        id: idStr,
        name: e.target.name,
        value: e.target.value
      };

    //   let copyOfTemplatesArr = templates.slice();
      let copyOfTemplatesArr = JSON.parse(JSON.stringify(templates))

      let mappedTemplates = copyOfTemplatesArr.map(template=>{
        // for (let key in template) {
            if (template.templateID === inputElem.id) {
                template.inputValue = inputElem.value;
            }
        // }
        return template
        }
      )

      setTemplates(mappedTemplates)
    }

    // ADD ITEM (HANDLE SUBMIT)
    const addItem = (e)=>{
        e.preventDefault()
        
        let str = e.target.id;
        let arr = str.split("");
        arr.splice(str.length - 6, str.length);
        let idStr = arr.join('');
        
        let formElem = {
            id: idStr
        };

        let copyOfTemplatesArr = JSON.parse(JSON.stringify(templates))

        if(isEditing){
            let mappedTemplates = copyOfTemplatesArr.map(template=>{
                if (template.templateID === formElem.id) {
                    for(let item of template.items) {
                        if(item.itemID === editingItemID){
                            item.itemValue = template.inputValue
                            seteditingItemID('')
                        }
                    }
                    template.inputValue = ''
                }
                return template
                }
            )

            setTemplates(mappedTemplates)
            setIsEditing(false)
        }
        else if(!isEditing){
            let mappedTemplates = copyOfTemplatesArr.map(template=>{
                if (template.templateID === formElem.id) {
                    let itemObject = {
                        itemID:uuidv4(),
                        itemValue: template.inputValue,
                        isChecked: false
                    }
                    template.items.push(itemObject)
                    template.inputValue = ''
                }
            return template
            }
          )

          setTemplates(mappedTemplates)
        
        }
      
    }

    // CHECK/UNCHECK IIST ITEM
    const checkToggle = (e, itemID)=>{
        let str = e.target.id;
        let arr = str.split("");
        arr.splice(str.length - 10, str.length);
        let idStr = arr.join('');
        
        let listElem = {
            id: idStr
        };
        
        let copyOfTemplatesArr = JSON.parse(JSON.stringify(templates))

        let mappedTemplates = copyOfTemplatesArr.map(template=>{
                if (template.templateID === listElem.id) {
                    for(let item of template.items) {
                        if(item.itemID === itemID){
                            item.isChecked = !item.isChecked
                        }
                    }
                }
            return template
            }
          )

          setTemplates(mappedTemplates)
    }
    // UNCHECK ALL ITEMS
    const unCheckAll = (id) => {
        let copyOfTemplatesArr = templates.slice()

        let mappedTemplates = copyOfTemplatesArr.map(template=>{
                if (template.templateID === id) {
                    for(let item of template.items) {
                            item.isChecked = false
                    }
                }
            return template
            }
          )

          setTemplates(mappedTemplates)
    }
   

    // TOGGLE MODAL
    const showModal = ()=> {
       setIsModalOpened(!isModalOpened)
    }

    // SAVE TEMPLATE
    const saveTemplate = (id)=> {
       let copyOfSavedTemplatesArr = savedTemplates.slice();
       let filteredSavedTemplates = copyOfSavedTemplatesArr.filter(template => template.templateID !==id)
       setSavedTemplates(filteredSavedTemplates)

       let copyOfTemplatesArr = templates.slice();
       let filteredTemplates = copyOfTemplatesArr.filter(template => template.templateID ===id)


       setSavedTemplates(prev => {
           return [...prev, filteredTemplates[0]]
       })
    }
    // DELETE ALL SAVED TEMLATES
    const deleteAllSavedTemplates = ()=> {
        setSavedTemplates([])
     }
    // REMOVE TEMPLATE
    const removeTemplate = (id)=> {
       let copyOfTemplatesArr = templates.slice();
       let filteredTemplates = copyOfTemplatesArr.filter(template => template.templateID !==id)

       setTemplates(filteredTemplates)
    }
    // REMOVE ITEM
    const removeItem = (id, inputID)=> {
        let copyOfTemplatesArr = templates.slice();

        let mappedTemplates = copyOfTemplatesArr.map(template=>{
                if (template.templateID === inputID) {
                    let copyOfItemsArr = template.items.slice();
                    let filteredItems= copyOfItemsArr.filter(item => item.itemID !==id)

                    template.items = [...filteredItems]
                }
            return template
            }
        )

        setTemplates(mappedTemplates)
    }
    // EDIT ITEM
    const editItem = (id, inputID)=> {
        let copyOfTemplatesArr = templates.slice();
        let mappedTemplates = copyOfTemplatesArr.map(template=>{
            if (template.templateID === inputID) {
                for(let item of template.items) {
                    if(item.itemID === id){
                        template.inputValue = item.itemValue
                        seteditingItemID(id)
                    }
                }
            }
            return template
        }
        )
        
        setIsEditing(true)
        setTemplates(mappedTemplates)
    }

    // STORE DATA IN LOCALSTORAGE
    useEffect(() => {
        const localTemplates = localStorage.getItem('localTemplates')

        if (localTemplates) {
            setTemplates(JSON.parse(localTemplates));
        } 
    }, [])
 
    useEffect(() => {
          localStorage.setItem('localTemplates',JSON.stringify(templates))
    },)


    useEffect(()=>{
        const localSavedTemplates = localStorage.getItem('localSavedTemplates')

        if(localSavedTemplates){
            setSavedTemplates(JSON.parse(localSavedTemplates))
        }
    },[])
    useEffect(()=>{
        localStorage.setItem('localSavedTemplates', JSON.stringify(savedTemplates))
    })

   
    return (
        <NestedListsContext.Provider value={{templates, createTemplate, handleChange, addItem, checkToggle, unCheckAll, editItem, removeItem, handleChangeRoutineName, routineName, isModalOpened, showModal, savedTemplates, saveTemplate, removeTemplate, createFromSavedTemplate, deleteAllSavedTemplates}}>
            {props.children}
        </NestedListsContext.Provider>
    )
}

export default NestedListsContextProvider