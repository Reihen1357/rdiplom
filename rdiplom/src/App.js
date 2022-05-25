import React from 'react'
import {useState, useEffect} from 'react'
import MyButton from './components/UI/buttons/MyButton';
import MyInput from './components/UI/inputs/MyInput';
import './styles/App.css';

function App() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailDirty, setEmailDirty] = useState(false)
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [emailError, setEmailError] = useState('E-mail не может быть пустым')
  const [passwordError, setPasswordError] = useState('Password не может быть пустым')
  const [formValid, setFormValid] = useState(false)

  useEffect(() => {
    if(emailError || password) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  
    }, [emailError, passwordError])
  

  const emailHandler = (elem) => {
    setEmail(elem.target.value)
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    if (!re.test(String(elem.target.value).toLocaleLowerCase())) {
      setEmailError('Некорректный email')
    } else {
      setEmailError('')
    }
  }

  const passwordHandler = (elem) => {
    setPassword(elem.target.value)
    if(elem.target.value < 3 || elem.target.value > 16) {
      setPasswordError('Пароль должен быть больше 3-х символов и меньше 16')
      if(!elem.target.value) {
        setPasswordError('Password не может быть пустым')
      }
    } else {
      setPasswordError('')
    }
  }

  const blurHandle = (elem) => {
    switch (elem.target.name) {
      case 'email':
          setEmailDirty(true)
          break
      case 'password':
          setPasswordDirty(true)
          break
    }
  }

  return (
    <div className="App">
      <div>
        <form className='form-flex'>
          <h1>Вход</h1>
          {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
          <input onChange={elem => emailHandler(elem)} onBlur={elem => blurHandle(elem)} value={email} name='email' type='email' placeholder='Введите почту'/>
          {(passwordDirty && passwordError) && <div style={{color:'red'}}>{passwordError}</div>}
          <input onChange={elem => passwordHandler(elem)} onBlur={elem => blurHandle(elem)} value={password} name='password' type='password' placeholder='Введите пароль'/>
          <button disabled={!formValid} type='submit'>Вход</button>
        </form>
      </div>
    </div>
  );
}

export default App;
