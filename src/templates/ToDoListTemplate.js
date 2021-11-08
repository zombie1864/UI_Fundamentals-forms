const ToDoListTemplate = (
    toDoList,
    input,
    toggleNewItem,
    itemToEditIndex,
    addNewItem,
    handleInputChange,
    saveNewItem,
    editItem,
    deleteItem
) => {
    return (
        <div>
        <div>
            <button>Search</button>
            <button onClick={addNewItem}>New</button>
        </div>
        {
            toggleNewItem && 
            <div>
                <input 
                value={input}
                type='text'
                onChange={handleInputChange}
                placeholder='Add New Task'/>
                <button onClick={saveNewItem}>Save</button>
            </div>
        }
        <ul>
            {toDoList.map((item, idx) => {
                return (
                    <div key={idx}>
                    <li>
                        { itemToEditIndex === idx ? 
                            <input
                            type="text"
                            defaultValue={item} // prevents clearing input for when user edits input field 
                            onChange={handleInputChange}
                            /> : <span>{item}</span>
                        }
                    </li>
                    {
                        itemToEditIndex === idx ? 
                        <button onClick={saveNewItem}>Save</button> :
                        <div>
                            <button data-key={idx} onClick={editItem}>Edit</button>
                            <button data-key={idx} onClick={deleteItem}>Delete</button>
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