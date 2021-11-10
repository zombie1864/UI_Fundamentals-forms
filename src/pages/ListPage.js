import { Link } from 'react-router-dom'
import ToDoList from '../components/list/ToDoList'
import '../css/ListPage.css'

const ListPage = () => {
    return (
        <div>
            <h1 className='taskTitle'>Task Index</h1>
            <ToDoList/>
                <div className="loginBtnContainer">
                    <span className="logoutSpan">
                        <Link to='/'>
                            <button className="logoutBtn">Logout</button>
                        </Link>
                    </span>
                </div>
        </div>
    )
}

export default ListPage
