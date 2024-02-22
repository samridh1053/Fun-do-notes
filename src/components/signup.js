import './signup.css';
import picture from './assests/l.jpg'
function signup(){
    return(

            <div className='container'>
                <div className='top-content'>
                    <img src="https://i.postimg.cc/CL7CmGSx/google-logo-png-29530.png"></img>
                    <h2>Create Your Own Account</h2>

                    <div className='inputs'>
                    <input type="text" id="text" placeholder="First Name*"></input>
                    <input type="text" id="text" placeholder="Last Name*"></input>
                    </div>

                    <div className='username'>
                    <input type="text" id="user-text" placeholder="User Name*"></input>
        
                    </div>
                    <div className='con'> <label id="cont">you can use letters, numbers & periods</label></div>
                    <div className="con1">
                        <label>Use my current email instead</label>
                    </div>

                    <div className='input'>
                    <input type="text" id="text2" placeholder="Password*"></input>
                    <input type="text" id="text2" placeholder="Confirm*"></input>
                    </div>

                    <div className="lines"> <label>Use 8 or more characters with mix of letters, numbers & symbols</label></div>
                    <div className="box">
                    <input type="checkbox" /> <p id="check">show password</p>
                    </div>

                    <div className="last">
                        <div className="last1">
                            <p id="l1">Sign in instead</p>

                        </div>
                        <div className="last2">
                            <button id="b1">Next</button>
                        </div>

                    </div>

                </div>
                
                <div className='sec-content'>
                    <div className="img">
                        <img src={picture} id="img1"></img>
                    </div>
                </div>
    </div>
    )
}

export default signup

