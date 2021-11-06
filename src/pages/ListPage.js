import { Link } from 'react-router-dom'

const ListPage = () => {
    return (
        <div>
            <h1>ListPage</h1>
            <Link to='/'>
                <button>Login Page</button>
            </Link>
        </div>
    )
}

export default ListPage
