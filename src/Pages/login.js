//login.js
import './login.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { loginUser } from '../Services/UserServices';
import { useNavigate } from 'react-router-dom';

function Login(){

    // const [emailOrPhone, setEmailOrPhone] = useState('');
    // const [password, setPassword] = useState('');
    

    const navigate = useNavigate();

    const [usercredentials, setCredentials] = useState({ email: "", password: "" })
    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    }
    const handleClick = (event) => {
        event.preventDefault();
        console.log(usercredentials);
        const response = loginUser(usercredentials);
        if (response) {
            navigate("/dashboard/notes")
        }
    };

    return(

        <div className='container1'>
        <div className='f-content'>

            <div className="top">
            <img src="https://i.postimg.cc/CL7CmGSx/google-logo-png-29530.png"></img>
        
            <h1>Login</h1> <br></br>
            <h2>Use Your Google Account</h2>
            </div>

            <div className='outputs'>
            <input type="text" id="email5" placeholder="Email or phone*" name ="email" onChange={handleChange}></input>

            </div>

            <div className='username1'>
            <input type="password" id="password5" placeholder="Password*" name="password" onChange={handleChange}></input>

            </div>
            
            <div className="con3">
                <label>Forget Password</label>
            </div>

            <div className="bottom">
                <div className="last11" >
                    <p id="l1">Create account</p>
                </div>

                <div className="last22">
                    <button id="b11" onClick={handleClick}>Login</button>
                </div>
            </div>
        </div>
</div>

    )
}

export default Login