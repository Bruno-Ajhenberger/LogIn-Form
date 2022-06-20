import {React, useRef, useState} from 'react'
import styles from './Form.module.css'
import {useNavigate} from 'react-router-dom'

const Form = () => {

  const userNameInputRef = useRef();
  const passwordInputRef = useRef();
  const changeToHomePage = useNavigate();
  const [isEnteredDataCorrect, setisEnteredDataCorrect] = useState(false);

  const userData = {
    userName: 'bruc123',
    password : 'krekiSom'
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const enteredUserName = userNameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredUserData ={
      userName: enteredUserName,
      password : enteredPassword
    }
    console.log(enteredUserData);

    if(enteredUserData.userName === userData.userName && enteredUserData.password === userData.password){
      changeToHomePage('/home', {replace : true});
    }else{
      setisEnteredDataCorrect(true);
      alert('Wrong username/password');
    } 
    
  }

  return (  
    <form className={isEnteredDataCorrect? styles.wrongPasswordAlert : styles.form} onSubmit={onFormSubmit}> 
        <h2 >LOGIN</h2>     
        <input type='text' id='userName' required placeholder='UserName' ref={userNameInputRef}></input>
        <input type='password' id='password' required placeholder='Password' ref={passwordInputRef}></input>
        <button>SUBMIT</button>
    </form>
  )
}

export default Form