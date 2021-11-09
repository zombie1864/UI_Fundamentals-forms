import { Link } from 'react-router-dom'
import ToDoList from '../components/list/ToDoList'
import '../css/ListPage.css'

const ListPage = () => {
    return (
        <div>
            <h1 className='taskTitle'>Task Index</h1>
            <ToDoList/>
            <Link to='/'>
                <button>Logout</button>
            </Link>
        </div>
    )
}

export default ListPage
