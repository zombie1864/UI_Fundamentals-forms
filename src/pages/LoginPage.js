import LoginForm from "../components/login/LoginForm"
import '../css/LoginPage.css'

const LoginPage = () => {
    /**
    @description: container, containing all components that will render on LoginPage
    **/
    return (
        <div className='loginPageContainer'>
            <LoginForm/>
        </div>
    )
}

export default LoginPage