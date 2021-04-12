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
        console.log(e.target.id)
        console.log(formElem.id)
        
        let copyOfTemplatessArr = JSON.parse(JSON.stringify(templates))

        let mappedTemplates = copyOfTemplatessArr.map(template=>{
            // for (let key in template) {
                if (template.templateID === formElem.id) {
                    let itemObject = {
                        itemID:uuidv4(),
                        itemValue: template.inputValue
                    }
                    template.items.push(itemObject)
                }
            // }
            return template
            }
          )

          setTemplates(mappedTemplates)
    }


    
    // const [list, setList] = useState([])
    // const [isModalOpened, setIsModalOpened] = useState(false)
    
    // // DELETE EMPLOYEE
    // const deleteEmployee = (inputId) =>{
    //     let tempEmployees = [...employees];
    //     const mappedEmployees = tempEmployees.map(employee => {
    //       if(employee.inputId === inputId){
    //         if(employee.isDeleted){
    //           employee.isDeleted = false;
    //         }
    //         else if(!employee.isDeleted){
    //           employee.isDeleted = true;
    //         }
    //       }
    //       return employee
    //     })

    //     const markedAsDeletedEmployees = mappedEmployees.filter(employee=> employee.isDeleted === true)
    //     setDeletedEmployees(markedAsDeletedEmployees)
    //     // console.log(mappedEmployees)
    //     // console.log(markedAsDeletedEmployees)
    //     setEmployees(mappedEmployees)
    // }
    
    // // GET UPDATED AND DELETED LISTS
    // const showModal = ()=> {
    //   setIsModalOpened(!isModalOpened)
    //   const notDeletedEmployees = updatedEmployees.filter(updatedEmployee=> updatedEmployee.isDeleted !== true)
    //   let updatedAndDeletedEmployees = {
    //     updated: [...notDeletedEmployees],
    //     deleted: [...deletedEmployees]
    //   }
    //   // console.log(updatedAndDeletedEmployees)
    //   setUpdatedAndDeletedEmployees(updatedAndDeletedEmployees)
    // }
      
    // // RESET DATA
    // const resetData = ()=> {
    //   let copyOfData = JSON.parse(JSON.stringify(data))
    //   setEmployees(copyOfData)
    //   // const filteredEmployees = copyOfData.filter(employee=> employee.isDeleted === true)
    //   setDeletedEmployees([])
    //   setUpdatedEmployees([])
      
    // }
    
  


    // useEffect(() => {
    //   console.log(deletedEmployees)
    // }, [deletedEmployees])

  

    return (
        <NestedListsContext.Provider value={{templates, createTemplate, handleChange, addItem}}>
            {props.children}
        </NestedListsContext.Provider>
    )
}

export default NestedListsContextProvider