import React from 'react';
import useFirebase from '../../Hooks/useFirebase'
import './Login.css'

const Login = () => {
    const {SignWithGoogle} = useFirebase();
    // const location = useLocation();
    // const history = useHistory();
    // const redirect_uri = location.state?.from || '/home'
    const handleGoogleLogin = () => {
      SignWithGoogle()
      .then((result) => {
        //   history.push(redirect_uri)
        })
    }
    return (
        <div className="mt-5">
            <h3>Please Sign In With Google</h3>
            <button className="btn btn-primary mt-3" onClick={handleGoogleLogin}>Sign With Google</button>
        </div>
    );
};

export default Login;