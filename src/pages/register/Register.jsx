import {  useState } from "react";
import { FaUser, FaLock, FaMailBulk, FaUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import './register.css';
import { signupUser } from "../../api/AuthApiService";

const Register = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isErrorNull, setIsErrorNull] = useState(false);
    const [isErrorUsername, setIsErrorUsername] = useState(false);
    const [isErrorEmailTaken, setIsErrorEmailTaken] = useState(false);
    const [isErrorEmailInvalid, setIsErrorEmailInvalid] = useState(false);

    const onChangeName = (e) => {
      setName(e.target.value);
    }

    const onChangeUsername = (e) => {
      setUsername(e.target.value);
    }

    const onChangeEmail = (e) => {
      setEmail(e.target.value);
    }

    const onChangePassword = (e) => {
      setPassword(e.target.value);
    }

    async function register(event) {
        event.preventDefault();
        setIsErrorNull(false);
        setIsErrorEmailInvalid(false);
        setIsErrorEmailTaken(false);
        setIsErrorUsername(false);

        if (!(name && username && email && password)) {
          setIsErrorNull(true);
          return;
        }

        try {
          const response = await signupUser(name, username, email, password);
          console.log(response);
          if(!response.validData){
            if(response.validUsername != null){
              console.log("username");
              setIsErrorUsername(true);
            }
            if(response.validEmail == "Email already used!"){
              console.log("email");
              setIsErrorEmailTaken(true);
            }
            else if(response.validEmail == "Invalid Email"){
              console.log("emailI");
              setIsErrorEmailInvalid(true);
            }
          }
          else{
            //"User signup successfully!"
            setName('');
            setUsername('');
            setEmail('');
            setPassword('');
            setIsErrorNull(false);
            setIsErrorUsername(false);
            setIsErrorEmailTaken(false);
            setIsErrorEmailInvalid(false);
            navigate("/login");
          }
        } catch (err) {
          alert(err);
        }
      }

  return (
    <div className="register">
      <div className="wrapper">
        <form action="">
            <h1>Sign Up</h1>

            <div className="input-box">
              <input type="text" id="name" placeholder="Name" required 
              onChange={onChangeName}
              />
              <FaUserCircle className="icon"/>
            </div>

            <div className="input-box">
              <input type="text" id="username" placeholder="Username" required 
              onChange={onChangeUsername}
              />
              <FaUser className="icon"/>
            </div>

            <div className="input-box">
              <input type="text" id="email" placeholder="Email" required 
              value={email}
              onChange={onChangeEmail}
              />
              <FaMailBulk className="icon"/>
            </div>

            <div className="input-box">
              <input type="password" id="password" placeholder="Password" required 
              onChange={onChangePassword}
              />
              <FaLock className="icon"/>
            </div>

            {isErrorNull && (
              <div className="invalid-data">
                <div role="alert">
                  All fields are required!
                </div>
              </div>
            )}

            {isErrorUsername && (
              <div className="invalid-data">
                <div role="alert">
                  Username already taken.
                </div>
              </div>
            )}

            {isErrorEmailTaken && (
              <div className="invalid-data">
                <div role="alert">
                  An account with this email already exists.
                </div>
              </div>
            )}

            {isErrorEmailInvalid && (
              <div className="invalid-data">
                <div role="alert">
                  Invalid email address.
                </div>
              </div>
            )}  

            <div className="site-conditions">
              <label><input type="checkbox" />I do accept the Terms and Conditions of your site.</label>
            </div>

            <button type="submit" onClick={register}>Register</button>

            <div className="login-link">
              <p>Have already an account?<a href="/login">Login here</a></p>
            </div>
        </form>
      </div>
      </div>
  )
}

export default Register