import logo from '../image/logo.jpg';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/use-input';


const isEmail = (value) => value.includes('@');
const isPassword = (value) => value.trim() !== '';

const Login = ({onLogin}) => {
  const navigate=useNavigate();
  const [userRole, setUserRole] = useState(null); 
  const [userEmail, setUserEmail] = useState(null);


  const handleLogin = () => {
    fetch('http://localhost:3001/loginAdministration', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: { email:emailValue, password:passwordValue },
    })
      .then((response) => response.json())
      .then((data) => {
        onLogin(data);
        data.userEmail === 'employee' ? navigate("/employee"):  navigate("/hr");
      })
      .catch((error) =>(fetch('http://localhost:3001/loginHR', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: { email:emailValue, password:passwordValue },
      })
        .then((response) => response.json())
        .then((data) => {
          onLogin(data);
          data.userEmail === 'HR' ? navigate("/hr"):  navigate("/employee");
        }))
        .catch((error=>console.error('Login error:', error)))
        );
  };
  
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(isPassword);

  let formIsValid = false;

  if ( emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const submitHandler = event => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log('Submitted!');
    console.log(emailValue,passwordValue);

    resetEmail();
    resetPassword();
  };

  const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';
  const passwordClasses = passwordHasError ? 'form-control invalid' : 'form-control';



  useEffect(() => {
    const User = { emailId: 'user@example.com', role: 'employee' };
    setUserRole(User.role);
    setUserEmail(User.emailId);
  }, []);


  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className='form-control'>
      <h1 className='title-container'>
        <span className='title-text'>Login Dashboard</span>
        <img src={logo} alt="Logo" className='title-image' />
      </h1>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>Email - Id</label>
        <input
          type='text'
          id='name'
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          style={{display: 'block'}}
        />
        {emailHasError && <p className="error-text">Please enter a valid email address.</p>}
      </div>
      <div className={passwordClasses}>
          <label htmlFor='name'>Password</label>
          <input
            type='password'
            id='password'
            value={passwordValue}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            style={{display: 'block'}}
          />
          {passwordHasError && <p className="error-text">Please enter a password.</p>}
        </div>
        </div>
      <div className='form-actions'>
        <button disabled={!formIsValid} onClick={handleLogin}>Login</button>
        <button>Sign-up</button>
        <h3>Forgotten your Password?</h3>
      </div>
    </form>
  );
};

export default Login;

