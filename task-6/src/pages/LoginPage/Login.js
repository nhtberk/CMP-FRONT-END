import React from 'react';

import './Login.css';

function Login(){
    return(
        <div className="Login">
            <form>
                <div className="form-inner">
                    <h2>Login</h2>
                    <div className="form-group">
                        <label htmlFor="username">User Name:</label>
                        <input type="text" name="username" id="username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="text" name="password" id="password"/>
                    </div>
                    <input type="submit" value="Login"/>
                </div>
            </form>
        </div>
    )
}
export default Login;