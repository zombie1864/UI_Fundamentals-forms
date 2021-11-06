import { Link } from 'react-router-dom'

const LoginTemplate = (
    emailInput,
    pwdInput,
    invalidEmail,
    invalidPwd,
    formSubmitted,
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
                <div>
                    <label>Email</label>
                    <span> _Icon_ </span>
                    <input 
                    data-fieldname='email'
                    value={emailInput}
                    onChange={handleInputChange}
                    placeholder='user@rapptrlabs.com'
                    type='text'/>
                    {invalidEmail && <p>Not valid</p>}
                </div>
                <div>
                    <label>Password</label>
                    <span> _Icon_ </span>
                    <input 
                    data-fieldname='pwd'
                    value={pwdInput}
                    onChange={handleInputChange}
                    placeholder='Must be at least 4 characters'
                    type='text'/>
                    {invalidPwd && <p>Not valid</p>}
                </div>
                <div className='loginContainer'>
                    <span>
                        <input 
                        className='loginBtn' 
                        type="submit" 
                        value="Login" 
                        disabled={formSubmitted ? true : false}/>
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