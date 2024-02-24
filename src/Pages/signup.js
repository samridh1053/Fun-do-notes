import React, { useState } from 'react';
import './signup.css';
import picture from '../../src/assests/l.jpg';
import { signupUser } from '../Services/UserServices';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [userDetails, setDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirm: "",
        service: "none"
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value
        }));
        // Clear validation error when the user types in a field
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: null
        }));
    };



    const handleSubmit = async (event) => {
        event.preventDefault();


        const validationErrors = {};
        if (!userDetails.firstName.trim()) {
            validationErrors.firstName = "First Name is required";
        }
        if (!userDetails.lastName.trim()) {
            validationErrors.lastName = "Last Name is required";
        }
        if (!userDetails.email.trim()) {
            validationErrors.email = "Email is required";
        }
        if (!userDetails.password.trim()) {
            validationErrors.password = "Password is required";
        }
        if (userDetails.password !== userDetails.confirm) {
            validationErrors.confirm = "Passwords do not match";
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return; 
        }

        try {
            const response = await signupUser(userDetails);
            console.log('Signup successful:', response);
        } catch (error) {
            console.error("Error during signup:", error);
        }
    };

    const navigate = useNavigate();
    const handleSignInInstead = () => {
        navigate('/login');
    };

return (
    <div className='container'>
    <div className='top-content'>
        <img src="https://i.postimg.cc/CL7CmGSx/google-logo-png-29530.png" alt="Google Logo"></img>
        <h2>Create Your Own Account</h2>

        <form onSubmit={handleSubmit}>
        <div className='inputs'>
                        <input type="text" id="text" placeholder="First Name*" name="firstName" onChange={handleChange} value={userDetails.firstName}></input>
                        {errors.firstName && <div className="error">{errors.firstName}</div>}
                        <input type="text" id="text" placeholder="Last Name*" name="lastName" onChange={handleChange} value={userDetails.lastName}></input>
                        {errors.lastName && <div className="error">{errors.lastName}</div>}
                    </div>

        <div className='username'>
            <input type="text" id="user-text" placeholder="User Name*" name="email" onChange={handleChange} value={userDetails.email}></input>
        </div>

        <div className='con'> 
            <label id="cont">you can use letters, numbers & periods</label>
        </div>

        <div className="con1">
            <label>Use my current email instead</label>
        </div>

        <div className='input'>
                        <input type="password" id="text2" placeholder="Password*" name="password" onChange={handleChange} value={userDetails.password}></input>
                        {errors.password && <div className="error">{errors.password}</div>}
                        <input type="password" id="text2" placeholder="Confirm*" name="confirm" onChange={handleChange} value={userDetails.confirm}></input>
                        {errors.confirm && <div className="error">{errors.confirm}</div>}
                    </div>

        <div className="lines"> 
            <label>Use 8 or more characters with a mix of letters, numbers & symbols</label>
        </div>

        <div className="box">
            <input type="checkbox" /> 
            <p id="check">show password</p>
        </div>

        <div className="last" onClick={handleSignInInstead}>
            <div className="last1">
            <p id="l1">Sign in instead</p>
            </div>
            <div className="last2">
            <button type="submit" id="b1">Submit</button>
            </div>
        </div>
        </form>
    </div>

    <div className='sec-content'>
        <div className="img">
        <img src={picture} alt="Sample Image" id="img1"></img>
        </div>
    </div>
    </div>
);
}

export default Signup;
