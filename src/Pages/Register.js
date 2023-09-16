import React from 'react';
import ButtonGroup from '../Components/ButtonGroup';

var userEmail;
var userPassword;
var confirmPassword;
const Register = () =>
{

    const printButtonLabel = (event) =>
    {
        if((userEmail.value !== '') && (userPassword.value === confirmPassword.value)){
            alert('You have successfully registered');
            
        }else{
            alert("Please give correct authentication");
        }
    }

    return(
        <div className='UserRegister'>
            <div className='registerInfo'>
                <p>Register here</p>
                <label for="email">Enter your email:   </label>
                <input type="email" id="email" name="email" ref={(c) => userEmail = c } ></input>

                <br></br>

                <label for="password">Create password:   </label>
                <input type='password' id='password' name='password' ref={(c) => userPassword = c } ></input>

                <br></br>

                <label for="password">Confirm password:   </label>
                <input type='password' id='confirmPassword' name='confirmPassword' ref={(c) => confirmPassword = c } ></input>

                <br></br>
            </div>
            <div className='buttons'>
                    <ButtonGroup buttons={["Register Now"]}
                        doSomethingAfterClick={printButtonLabel}
                    />
                </div>
        </div>
    );
};

export default Register;