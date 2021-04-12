import React, {createContext, useState, useEffect, useCallback} from 'react'

import { v4 as uuidv4 } from 'uuid';

export const NestedListsContext = createContext()

const NestedListsContextProvider = (props) => {
    const [templates, setTemplates] = useState([])

    // CREATE TEMPLATE 
    const createTemplate = () => {
        const newTemplate = {
            templateID: uuidv4(),
            inputValue: '',
            items:[]
        }

        setTemplates(prevTemplates => {
            return [...prevTemplates,newTemplate]
        })
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

    //   let copyOfTemplatessArr = templates.slice();
      let copyOfTemplatessArr = JSON.parse(JSON.stringify(templates))

      let mappedTemplates = copyOfTemplatessArr.map(template=>{
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
        // console.log(e.target.id)
        // console.log(formElem.id)
        
        let copyOfTemplatessArr = JSON.parse(JSON.stringify(templates))

        let mappedTemplates = copyOfTemplatessArr.map(template=>{
                if (template.templateID === formElem.id) {
                    let itemObject = {
                        itemID:uuidv4(),
                        itemValue: template.inputValue,
                        isChecked: false
                    }
                    template.items.push(itemObject)
                }
            return template
            }
          )

          setTemplates(mappedTemplates)
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
        // console.log(e.target)
        // console.log(listElem.id)
        // console.log(itemID)
        
        let copyOfTemplatessArr = JSON.parse(JSON.stringify(templates))

        let mappedTemplates = copyOfTemplatessArr.map(template=>{
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


 

    // useEffect(() => {
    //   console.log(deletedEmployees)
    // }, [deletedEmployees])

  

    return (
        <NestedListsContext.Provider value={{templates, createTemplate, handleChange, addItem, checkToggle}}>
            {props.children}
        </NestedListsContext.Provider>
    )
}

export default NestedListsContextProvider