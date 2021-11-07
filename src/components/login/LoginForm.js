import LoginTemplate from '../../templates/LoginTemplate'
import { validateForm } from '../../validators/validateForm.js'
import { useState } from 'react'
import { POSTdata } from '../../utils/http'

const LoginForm = () => {
    /**
    @description: login form comp 
    @param {} Null: no props  
    **/

   
    const [emailInput, setEmailInput] = useState(''),
        [pwdInput, setpwdInput] = useState(''),
        [formSubmitted, setFormSubmitted] = useState(false),
        [invalidEmail, setInvalidEmail] = useState(),
        [invalidPwd, setInvalidPwd] = useState()


    const handleSubmitForm = event => {
        event.preventDefault()
        const data = {
            email: emailInput, 
            password: pwdInput
        }
        let loginMetaData = validateForm(data)
        console.log(loginMetaData);
        if (
            loginMetaData.containsValidEmail && 
            loginMetaData.containsValidPwd 
        ) {
            POSTdata(data)
            setFormSubmitted(true)
            console.log('your data transmitted');
            setEmailInput('')
            setpwdInput('')
            setInvalidEmail()
            setInvalidPwd()
        } else {
            console.log('invalid credentials');
            setInvalidEmail(!loginMetaData.containsValidEmail)
            setInvalidPwd(!loginMetaData.containsValidPwd)
        }
    }


    const handleInputChange = event => {
        /**
        @description: event.target.value.trim() is a DSGN choice which effectively disables user from entering whitespaces to email field. This enforces clean input data from user on a UI lvl that permits the propagation of clean data
        **/
        switch (event.target.dataset.fieldname) {
            case 'email':
                setInvalidEmail(false)
                setEmailInput(event.target.value.trim()) 
                break 
            case 'pwd':
                setpwdInput(event.target.value)
                setInvalidPwd(false)
                break
            default:
        }
    }
    

    return LoginTemplate(
        emailInput,
        pwdInput,
        invalidEmail,
        invalidPwd,
        formSubmitted,
        handleSubmitForm, 
        handleInputChange
    )
}

export default LoginForm
