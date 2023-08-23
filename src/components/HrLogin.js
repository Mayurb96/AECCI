import logo from '../image/logo.jpg';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/use-input';
import DataContext from "../context/context";
import { useContext } from 'react';



const isEmail = (value) => value.includes('@');
const isPassword = (value) => value.trim() !== '';

const HrLoginPage = () => {

  const navigate=useNavigate();
const {contextData,setContextData}=useContext(DataContext);  
  
  
  const handleLogin = () => {
    fetch('http://localhost:3001/loginHR', {
    method: 'POST', // Use POST method for sending user credentials
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: emailValue, password: passwordValue }), // Send user input as JSON
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.status) {
        setContextData(data);

        const hrToken=contextData.tokenInfo.token;

        sessionStorage.setItem('hrToken',hrToken);
        navigate('/hr');
       
      } else {
        console.error('Login failed',data.message);
      }
    })
    .catch((error) => {
      console.error('An error occurred during login:', error);
    });
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


  return (
    <div className='login-page'>
     
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className='form-control'>
      <h1 className='title-container'>
        <span className='title-text'>HR Login Dashboard</span>
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
        <button disabled={!formIsValid} onClick={handleLogin} style={{marginLeft:'32%',padding:'.75rem',width:'6rem'}}>Login</button>
      </div>
    </form>
    </div>
  );
};

export default HrLoginPage;

