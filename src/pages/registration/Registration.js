import { useState } from 'react';
import  './Registration.css';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Registration(){

    const navigate = useNavigate();
    const [registrationDetails, setRegistrationDetails] = useState({
        email:'',
        password:'',
        confirmPassword:''
    })

    const [errorMessage, setErrorMessage] = useState('');
    const handleLogin = ()=>{
         if((registrationDetails.email==='' || registrationDetails.password==='' || registrationDetails.confirmPassword==='')||(registrationDetails.password!==registrationDetails.confirmPassword)){
            if(registrationDetails.email === "" || registrationDetails.password === "" || registrationDetails.confirmPassword === ""){
                setErrorMessage('Fill all details');
            }else{
                setErrorMessage("paswords do not match");
            }}
        else{
            setRegistrationDetails({
                email:'',
                password:'',
                confirmPassword:''
            })
           localStorage.setItem('loginStatus', true);
            navigate('/');
        }
    }

    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setRegistrationDetails({...registrationDetails, [name]: value})
       
    }

    return(
        <div className="reg-item">
            <input type="email" placeholder="Email" className="email" 
            value={registrationDetails.email} name='email' id='email'
            onChange={(e)=>handleChange(e)}/>
            <input type="password" placeholder="Password" className="password"
            value={registrationDetails.password} name='password' id='password'
            onChange={(e)=>handleChange(e)}/>
            <input type="password" placeholder="Confirm Password" className="password"
            value={registrationDetails.confirmPassword} name='confirmPassword' id='confirmPassword'
            
            onChange={(e)=>handleChange(e)}/>
            <button className="submit"
            onClick={()=>handleLogin()}>Submit</button>
            <span style={{color:'red', marginTop:'20px'}}>{errorMessage}</span>
        </div>
    );

}
export default Registration;