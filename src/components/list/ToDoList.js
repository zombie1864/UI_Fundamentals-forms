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
        [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        const data = localStorage.getItem("myList")
        if (data) setToDoList(JSON.parse(data))
        },[]
    )

    useEffect(() => localStorage.setItem('myList', JSON.stringify(toDoList)))
        
    const addNewItem = () => setToggleNewItem(!toggleNewItem)
    const handleInputChange = event => setInput(event.target.value)
    const handleSearchRequest = event => setSearchTerm(event.target.value)
    const cancelAddNewItem = () => {
        setToggleNewItem(!toggleNewItem)
        setInput('')
    }

    const saveNewItem = () => {
        if (input.length <= 25 && input.length >= 1) setToDoList([...toDoList,input])
        setInput('')
        setToggleNewItem(!toggleNewItem)
        if (editable) {
            setToDoList(toDoList.map((item, idx) => {
                if (idx === itemToEditIndex) item = input
                return item
            }))
            setItemToEdit()
            setEditable(false)
        }
    } // NOTE UI should tell user if input is too long 
    
    const editItem = event => {
        setItemToEdit(parseInt(event.target.dataset.key))
        setEditable(true)
    }

    const deleteItem = event => {
        toDoList.splice(event.target.dataset.key, 1)
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
