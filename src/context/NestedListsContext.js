import React, {createContext, useState, useEffect, useCallback} from 'react'

export const NestedListsContext = createContext()

const NestedListsContextProvider = (props) => {
    const [templates, setTemplates] = useState([])
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
    
    // // EDITING TABLE CELLS
    // const handleEmployeeTableCell = (e) => {
    //   let str = e.target.id;
    //   let arr = str.split("");
    //   arr.splice(str.length - 6, str.length);
    //   let idStr = arr.join('');
  
    //   let item = {
    //     id: idStr,
    //     name: e.target.name,
    //     value: e.target.value,
    //     type: e.target.type
    //   };
    //   let copyOfEmployeesArr = employees.slice();

    //   const textRegex = /([0-9-!$@#%^&*()_+|~=`{}\[\]:";'<>?,.\\\/])+/ig// eslint-disable-line
    //   const positionTextRegex = /([0-9!$@#%^*_+~=`\[\]";'<>?.])+/ig// eslint-disable-line
    //   const phoneRegex = /^(\+|\d)[0-9]{7,16}$/
    
  
    //   let editedEmployees = copyOfEmployeesArr.map(employee=> {
    //     for (let key in employee) {
    //         if (key === item.name && employee.inputId === item.id) {
    //           if(item.type==='tel'){
    //             if(phoneRegex.test(item.value)){
    //               employee[key] = item.value;
    //               // console.log(item.type, phoneRegex.test(item.value), item.id)
    //             }
    //             else if(!phoneRegex.test(item.value)){
    //               // console.log(item.type, phoneRegex.test(item.value), item.id)
    //               break                  
    //             }
    //           }
    //           else if(item.type==='text' && item.name!=='id'&&item.type!=='tel'&&(item.name==='name'||item.name==='surname')){
    //             if(!textRegex.test(item.value) && item.value !==''){
    //               employee[key] = item.value;
    //               // console.log(item.type, textRegex.test(item.value), item.id)
    //             }
    //             else if(textRegex.test(item.value) || item.value ===''){
    //               // console.log(item.type, textRegex.test(item.value), item.id)
    //               break
    //             }
    //           }
    //           else if(item.type==='text' && item.name!=='id'&&item.type!=='tel'&&item.name==='position'){
    //             if(!positionTextRegex.test(item.value) && item.value !==''){
    //               employee[key] = item.value;
    //               // console.log(item.type, positionTextRegex.test(item.value), item.id)
    //             }
    //             else if(positionTextRegex.test(item.value) || item.value ===''){
    //               // console.log(item.type, positionTextRegex.test(item.value), item.id)
    //               break
    //             }
    //           }
    //           else{
    //              employee[key] = item.value;

    //           }
    //         }
    //     }
    //     return employee;
    //   });

    //     setEmployees(editedEmployees);  
    // };
    
  


    // useEffect(() => {
    //   console.log(deletedEmployees)
    // }, [deletedEmployees])

  

    return (
        <NestedListsContext.Provider value={{templates}}>
            {props.children}
        </NestedListsContext.Provider>
    )
}

export default NestedListsContextProvider