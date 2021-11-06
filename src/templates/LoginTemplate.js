import { Link } from 'react-router-dom'
import {BiUserCircle} from 'react-icons/bi'
import {MdOutlineLock} from 'react-icons/md'
import '../css/LoginForm.css'

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
            <form className='loginForm' onSubmit={handleSubmitForm}>
                <label className='formLabels'>Email</label>
                <div className='inputContainer'>
                    <span className='icons'><BiUserCircle/></span>
                    <input 
                    value={emailInput}
                    data-fieldname='email'
                    className='inputFields'
                    onChange={handleInputChange}
                    placeholder='user@rapptrlabs.com'
                    type='text'/>
                    {invalidEmail && <p>Not valid</p>}
                </div>
                <label className='formLabels'>Password</label>
                <div className='inputContainer'>
                    <span className='icons'><MdOutlineLock/></span>
                    <input 
                    value={pwdInput}
                    data-fieldname='pwd'
                    className='inputFields'
                    onChange={handleInputChange}
                    placeholder='Must be at least 4 characters'
                    type='password'/>
                    {invalidPwd && <p>Not valid</p>}
                </div>
                <div className='loginBtnContainer'>
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