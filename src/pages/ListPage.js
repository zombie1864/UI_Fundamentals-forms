import { Link } from 'react-router-dom'
import ToDoList from '../components/list/ToDoList'
import '../css/ListPage.css'

const ListPage = () => {
    return (
        <div>
            <h1 className='taskTitle'>Task Index</h1>
            <ToDoList/>
            <Link to='/'>
                <div className="loginBtnContainer">
                    <span className="logoutSpan">
                    <button className="logoutBtn">Logout</button>
                    </span>
                </div>
            </Link>
        </div>
    )
}

export default ListPage
