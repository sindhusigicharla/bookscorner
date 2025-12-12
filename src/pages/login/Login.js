import { use, useState } from 'react';
import  './Login.css';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Login() {

    const navigate = useNavigate();

    const [loginDetails, setLoginDetails] = useState({
        email:'',
        password: ''
    }) 

    

    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = ()=>{
        if(loginDetails.email!=='' && loginDetails.password!==''){
            
            setLoginDetails({
                email:'',
                password:''
            })

            localStorage.setItem('loginStatus', true);
            navigate('/');
            
        }else{
            setErrorMessage('Fill all details')
        }
    }

    const handleChange = (e)=>{
        setErrorMessage('')
        const name = e.target.name;
        const value = e.target.value;

        setLoginDetails({...loginDetails, [name]: value})
    }
 
    return (
        <div className="login-details">
            <input type="email" className="email" placeholder="Email"
            value={loginDetails.email} name='email' id='email'
            onChange={(e)=>handleChange(e)}
            
            
            />
            <input type="password" className="password" placeholder='Password'
            value={loginDetails.password} name='password' id='password'
            onChange={(e)=>handleChange(e)}/>
            <button className="button"
            onClick={()=>handleLogin()}>Login</button>
            <span style={{color:'red', marginTop:'20px'}}>{errorMessage}</span>

        </div>
    );
}
export default Login;