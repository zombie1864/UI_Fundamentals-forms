import { Redirect } from 'react-router-dom'
import {BiUserCircle} from 'react-icons/bi'
import {MdOutlineLock} from 'react-icons/md'
import '../css/LoginForm.css'


const LoginTemplate = (
    emailInput,
    pwdInput,
    invalidEmail,
    invalidPwd,
    formSubmitted,
    redirect,
    handleSubmitForm, 
    handleInputChange
) => {
    /**
    @description: view function, deals with the render markup of login page
    @param {emailInput} String: Input from user
    @param {pwdInput} String: Input from user
    @param {invalidEmail} Boolean: Used for dynamic styling and rendering of errMsg
    @param {invalidPwd} Boolean: Used for dynamic styling and rendering of errMsg
    @param {formSubmitted} Boolean: Used for dynamic styling and render msg to user on successful form 
    @param {redirect} Boolean: true => redirect to list page 
    @param {handleSubmitForm} cbFunc: handles validation of form upon submission 
    @param {handleInputChange} cbFunc: Used for controlled comp of form 
    **/

    return (
        <div>
            <h1 className='logo'>Rapptr Labs</h1>
            <form className='loginForm' onSubmit={handleSubmitForm}>
                    <label className='formLabels'>Email</label>
                    <div>
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
                    <div>
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
            {redirect && <Redirect to='/list'/>}
        </div>
    )
} 

export default LoginTemplate