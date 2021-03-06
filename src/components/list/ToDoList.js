import { useState, useEffect } from 'react'
import ToDoListTemplate from '../../templates/ToDoListTemplate'

const ToDoList = () => {
    /**
    @description: 
    @param {} 
    **/
   const [toDoList, setToDoList] = useState([]), 
        [toggleNewItem, setToggleNewItem] = useState(false),
        [input, setInput] = useState(''),
        [editable, setEditable] = useState(false),
        [itemToEditIndex, setItemToEdit] = useState(),
        [searchTerm, setSearchTerm] = useState(''),
        [inputDetected, setInputDetected] = useState(false)

    useEffect(() => {
        const data = localStorage.getItem("myList")
        if (data) setToDoList(JSON.parse(data))
        },[]
    )

    useEffect(() => localStorage.setItem('myList', JSON.stringify(toDoList)))
        
    const addNewItem = () => { 
        if (editable) return 
        setToggleNewItem(true)
    } 
    const handleInputChange = event => { 
        setInputDetected(true)
        setInput(event.target.value)
     }
    const handleSearchRequest = event => setSearchTerm(event.target.value)
    const cancelAddNewItem = () => {
        setToggleNewItem(false)
        setInput('')
    }

    const saveNewItem = () => {
        if (input.length <= 250 && input.length >= 1 && !editable) {
            setToDoList([...toDoList,input])
        }
        if (editable && inputDetected) {
            setEditable(false)
            setToDoList(toDoList.map((item, idx) => {
                if (idx === itemToEditIndex) item = input
                return item
            }))
        }
        setToggleNewItem(false)
        setInput('')
        setItemToEdit()
        setEditable(false)
        setInputDetected(false)
    } 
    
    const editItem = event => {
        setItemToEdit(parseInt(event.target.dataset.key))
        setEditable(true)
    }

    const deleteItem = event => {
        toDoList.splice(parseInt(event.target.dataset.key), 1)
        setToDoList([...toDoList])
    }

    return ToDoListTemplate(
        toDoList,
        input,
        toggleNewItem,
        itemToEditIndex,
        searchTerm,
        addNewItem,
        handleInputChange,
        saveNewItem,
        editItem,
        deleteItem,
        handleSearchRequest,
        cancelAddNewItem
    )
}

export default ToDoList
