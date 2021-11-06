import { Link } from 'react-router-dom'

const LoginTemplate = (
    emailInput,
    pwdInput,
    handleSubmitForm, 
    handleInputChange
) => {
    /**
    @description: view function, deals with the render markup of login page
    @param {handleSubmitForm} 
    **/
    return (
        <div>
            <form onSubmit={handleSubmitForm}>
                <label>Email</label>
                <span> _Icon_ </span>
                <input 
                data-fieldname='email'
                value={emailInput}
                onChange={handleInputChange}
                placeholder='user@rapptrlabs.com'
                type='text'/>
                <label>Password</label>
                <span> _Icon_ </span>
                <input 
                data-fieldname='pwd'
                value={pwdInput}
                onChange={handleInputChange}
                placeholder='Must be at least 4 characters'
                type='text'/>
                <div className='loginContainer'>
                    <span>
                        <input className='loginBtn' type="submit" value="Login"/>
                    </span>
                </div>
            </form>
            <Link to='/list'>
                <button>List Page</button>
            </Link>
        </div>
    )
} 

export default LoginTemplate