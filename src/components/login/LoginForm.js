import LoginTemplate from '../../templates/LoginTemplate'
import { validateForm } from '../../validators/validateForm.js'
import { useState, useEffect } from 'react'
import { POSTdata } from '../../utils/http'

const LoginForm = () => {
    /**
    @description: login form comp. Contains all the business logic of loginForm 
    @param {} Null: no props  
    **/
    const [emailInput, setEmailInput] = useState(''),
        [pwdInput, setpwdInput] = useState(''),
        [formSubmitted, setFormSubmitted] = useState(false),
        [invalidEmail, setInvalidEmail] = useState(),
        [invalidPwd, setInvalidPwd] = useState(),
        [redirect, setRedirect] = useState(false)

    const stagingRedirect = formSubmitted => {
        if (formSubmitted) setTimeout(() => setRedirect(true), 1000);
    }

    if (formSubmitted) stagingRedirect(formSubmitted)
    useEffect(() => { // performs cleanup of states on componentUnmount phase 
        return () => setFormSubmitted(false)
    }, [])


    const handleSubmitForm = event => {
        event.preventDefault()
        const data = {
            email: emailInput, 
            password: pwdInput
        }
        let loginMetaData = validateForm(data)
        if (
            loginMetaData.containsValidEmail && 
            loginMetaData.containsValidPwd 
        ) {
            // POSTdata(data)
            setFormSubmitted(true)
            setEmailInput('')
            setpwdInput('')
            setInvalidEmail()
            setInvalidPwd()
        } else {
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
        redirect,
        handleSubmitForm, 
        handleInputChange
    )
}

export default LoginForm
