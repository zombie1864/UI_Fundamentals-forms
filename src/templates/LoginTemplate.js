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
            {console.log(formSubmitted)}
            <h1 className='logo'>Rapptr Labs</h1>
            <form className='loginForm' onSubmit={handleSubmitForm}>
                <label className='formLabels'>Email</label>
                <div className='inputContainer'>
                    <span className='icons'><BiUserCircle/></span>
                    <input 
                    value={emailInput}
                    data-fieldname='email'
                    className={invalidEmail ? 'inputFields invalidInput' : 'inputFields'}
                    onChange={handleInputChange}
                    placeholder='user@rapptrlabs.com'
                    type='text'/>
                    {invalidEmail && <p className='errMsg'>Invalid Email</p>}
                </div>
                <label className='formLabels'>Password</label>
                <div className='inputContainer'>
                    <span className='icons'><MdOutlineLock/></span>
                    <input 
                    value={pwdInput}
                    data-fieldname='pwd'
                    className={invalidPwd ? 'inputFields invalidInput' : 'inputFields'}
                    onChange={handleInputChange}
                    placeholder='Must be at least 4 characters'
                    type='password'/>
                    {invalidPwd && <p className='errMsg'>Password must be between 4-16 characters long</p>}
                </div>
                <div className={formSubmitted ? 'loginBtnContainer_success' : 'loginBtnContainer' }>
                    <span>
                        <input 
                        className={formSubmitted ? null : 'loginBtn'} 
                        type="submit" 
                        value={formSubmitted ? 'Success!' : 'Login'}
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