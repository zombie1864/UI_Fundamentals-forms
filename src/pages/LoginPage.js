import LoginForm from "../components/login/LoginForm"
import '../css/LoginPage.css'

const LoginPage = () => {
    /**
    @description: container, containing all components that will render on LoginPage
    **/
    return (
        <div className='loginPageContainer'>
            <h1 className='logo'>Rapptr Labs</h1>
            <LoginForm/>
        </div>
    )
}

export default LoginPage