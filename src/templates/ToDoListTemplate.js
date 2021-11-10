import '../css/ToDoList.css'

const ToDoListTemplate = (
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
) => {
    return (
        /**
        @description: 
        @param {} 
        **/
        <div className='toDoListContainer'>
        <div className='toDoListTopMenu'>
            <input 
            type='text'
            className='searchInput' 
            onChange={handleSearchRequest}
            placeholder='Search...'/>
            <button 
            className='newItemBtn'
            onClick={addNewItem}>
                <span className='newItemtxt'>New</span>
            </button>
        </div>
        {
            toggleNewItem && 
            <div className='addItemContainer'>
                <input 
                className='addItemInput'
                value={input}
                type='text'
                onChange={handleInputChange}
                placeholder='Add New Task'/>
                <button className='saveItemBtn' onClick={saveNewItem}>Save</button>
                <button className='cancelItemBtn' onClick={cancelAddNewItem}>Cancel</button>
            </div>
        }
        <ul>
            {
                toDoList.filter(item => {
                    if (searchTerm === ''){
                        return item 
                    } else if (
                        item.toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                        return item 
                    }
                    return null
                }).map((item, idx) => {
                return (
                    <div key={idx} className='itemContainer'>
                    <li className='liItem'>
                        { itemToEditIndex === idx ? 
                            <input
                            type="text"
                            className='item'
                            defaultValue={item} // prevents clearing input for when user edits input field 
                            onChange={handleInputChange}
                            /> : 
                            <div className='itemDisplayedContainer'>
                                <span className='itemDisplayed'>{item}</span>
                            </div>
                        }
                    </li>
                    {
                        itemToEditIndex === idx ? 
                        <button className='saveEditBtn' onClick={saveNewItem}>Save</button> :
                        <div className='liBtnsContainer'>
                            <button 
                            className='editBtn'
                            data-key={idx} 
                            onClick={editItem}>
                            </button>
                            <button 
                            className='deleteBtn'
                            data-key={idx} 
                            onClick={deleteItem}>
                            </button>
                        </div>
                    }
                    </div>
                )
            })}
        </ul>
        </div>
    )
}

export default ToDoListTemplate