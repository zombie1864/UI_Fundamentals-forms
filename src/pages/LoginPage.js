import LoginForm from "../components/login/LoginForm"

const LoginPage = () => {
    /**
    @description: container, containing all components that will render on LoginPage
    **/
    return (
        <div className='loginPageContainer'>
            <center><h1>Rapptr Labs</h1></center>
            <center><LoginForm/></center>
        </div>
    )
}

export default LoginPage