import './login.css';
function login(){
    return(

        <div className='container1'>
        <div className='f-content'>

            <div className="top">
            <img src="https://i.postimg.cc/CL7CmGSx/google-logo-png-29530.png"></img>
        
            <h1>Login</h1> <br></br>
            <h2>Use Your Google Account</h2>
            </div>

            <div className='outputs'>
            <input type="text" id="text1" placeholder="Email or phone*"></input>

            </div>

            <div className='username1'>
            <input type="text" id="user-text2" placeholder="Password*"></input>

            </div>
            
            <div className="con3">
                <label>Forget Password</label>
            </div>

            <div className="bottom">
                <div className="last11">
                    <p id="l1">Create account</p>

                </div>
                <div className="last22">
                    <button id="b11">Login</button>
                </div>
            </div>
        </div>
</div>

    )
}

export default login