import LoginTemplate from '../../templates/LoginTemplate'
import { validateForm } from '../../validators/validateForm.js'
import { useState } from 'react'

const LoginForm = () => {
    /**
    @description: login form comp 
    @param {} Null: no props  
    **/

   
    const [emailInput, setEmailInput] = useState(''),
        [pwdInput, setpwdInput] = useState('')


    const handleSubmitForm = event => {
        event.preventDefault()
        console.log(emailInput);
        const data = {
            email: emailInput, 
            pwd: pwdInput
        }
        let loginMetaData = validateForm(data)
        console.log(loginMetaData);
        if (
            loginMetaData.containsValidEmail && 
            loginMetaData.containsValidPwd 
        ) {
            console.log('your data transmitted');
            setEmailInput('')
            setpwdInput('')
        } else {
            console.log('invalid credentials');
        }
    }


    const handleInputChange = event => {
        /**
        @description: event.target.value.trim() is a DSGN choice which effectively disables user from entering whitespaces to email field. This enforces clean input data from user on a UI lvl that permits the propagation of clean data
        **/
        switch (event.target.dataset.fieldname) {
            case 'email':
                setEmailInput(event.target.value.trim()) 
                break 
            case 'pwd':
                setpwdInput(event.target.value)
                break
            default:
        }
    }
    

    return LoginTemplate(
        emailInput,
        pwdInput,
        handleSubmitForm, 
        handleInputChange
    )
}

export default LoginForm
