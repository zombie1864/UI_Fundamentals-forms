import '../css/ToDoList.css'
import { FiEdit2, FiTrash } from 'react-icons/fi'

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
        <div className='toDoListContainer'>
        <div className='toDoListTopMenu'>
            <input 
            type='text'
            className='searchInput' 
            onChange={handleSearchRequest}
            placeholder='Search'/>
            <button 
            className='newItemBtn'
            onClick={addNewItem}>
                <span className='newItemtxt'>New</span>
            </button>
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
                <button onClick={cancelAddNewItem}>Cancel</button>
            </div>
        }
        <ul>
            {
                toDoList.map((item, idx) => {
                return (
                    <div key={idx} className='itemContainer'>
                    <li className='liItem'>
                        { itemToEditIndex === idx ? 
                            <input
                            type="text"
                            defaultValue={item} // prevents clearing input for when user edits input field 
                            onChange={handleInputChange}
                            /> : <span className='itemDisplayed'>{item}</span>
                        }
                    </li>
                    {
                        itemToEditIndex === idx ? 
                        <button onClick={saveNewItem}>Save</button> :
                        <div className='liBtnsContainer'>
                            <button 
                            className='editBtn'
                            data-key={idx} 
                            onClick={editItem}>
                                <span className='editIcon'>
                                    <FiEdit2/>
                                </span>
                            </button>
                            <button 
                            className='deleteBtn'
                            data-key={idx} 
                            onClick={deleteItem}>
                                <span className='deleteIcon'>
                                    <FiTrash/>
                                </span>
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