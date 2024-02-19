import {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import './login.css';
import { FaUser, FaLock } from "react-icons/fa";
import { loginUser } from "../../api/AuthApiService";
import { saveUser, getUser, deleteUser } from "../../auth/AuthContext";

function Login() {
    deleteUser();

    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isError, setIsError] = useState(false)

    const onChangeEmail = (e) => {
      setEmail(e.target.value);
    }

    const onChangePassword = (e) => {
      setPassword(e.target.value);
    }


    async function handlelogin(event) {
      event.preventDefault();
      setIsError(false);

      if (!(email && password)) {
        setIsError(true);
        return;
      }

      try {
        const response = await loginUser(email, password);

        if(response.validData == false){
          setIsError(true);
          return;
        }
        else{
          //"User login successfully!" toast
          
          saveUser(response);
          setEmail('');
          setPassword('');
          setIsError(false);
          navigate("/home");
        }
      } catch (err) {
        setIsError(true);
      }
    }
    
    return (
      <div className="login">
      <div className="wrapper">
        <form>
            <h1>Login</h1>

            <div className="input-box">
              <input type="email" id="email" placeholder="Email" required 
              onChange={onChangeEmail}
              autoFocus
              />
              <FaUser className="icon"/>
            </div>

            <div className="input-box">
              <input type="password" id="password" placeholder="Password" required 
              onChange={onChangePassword}
              />
              <FaLock className="icon"/>
            </div>

            {isError && (
              <div className="invalid-data">
                <div role="alert">
                  Invalid email or password!
                </div>
              </div>
            )}

            <div className="remember-forgot">
              <label><input type="checkbox" />Remember me?</label>
              <a href="#">Forgot password?</a>
            </div>

            <button type="submit" onClick={handlelogin}>Login</button>

            <div className="extern-login">
                <MDBBtn className="logo-login" tag='a' color='none'>
                  <MDBIcon fab icon='facebook-f' size="lg"/>
                </MDBBtn>

                <MDBBtn className="logo-login" tag='a' color='none'>
                  <MDBIcon fab icon='twitter' size="lg"/>
                </MDBBtn>

                <MDBBtn className="logo-login" tag='a' color='none'>
                  <MDBIcon fab icon='google' size="lg"/>
                </MDBBtn>
              </div>

            <div className="register-link">
              <p>Don't have an account?<a href="/register">Register here</a></p>
            </div>
        </form>
      </div>
      </div>
    );
  }
  
  export default Login;