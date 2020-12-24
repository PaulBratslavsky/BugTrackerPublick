import React, { useContext } from 'react'
import Logo from '../../components/Logo'
import { CgLock, CgUser } from 'react-icons/cg'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { UserContext } from '../../context/userContext'
import Loader from '../../components/Loader'
import ErrorMessage from '../../components/ErrorMessage'
import { LoginStyled } from './styled'
import useUserLogin from './useUserLogin'

const loginURL = 'http://localhost:1337/auth/local'

const INITIAL_STATE = {
  username: '',
  password: ''
}

export default function Login() {

  const { setUser } = useContext(UserContext)

  const { 
    handleFieldChange,
    handleSubmit,
    formData,
		isLoading,
		error } = useUserLogin(INITIAL_STATE, loginURL, setUser)
  
  if (isLoading) return <LoginStyled><Loader /></LoginStyled>

  console.log(error)
  
  return <LoginStyled>
    <form onSubmit={handleSubmit} className="form-container">
      <Logo name="trackabug" height="100%" />
   
      <Input 
        type="text" 
        name="username" 
        placeholder="username" 
        icon={<CgUser />} 
        value={formData.username}
        onChange={handleFieldChange}
      />

      <Input 
        type="password"   
        name="password" 
        placeholder="password" 
        icon={<CgLock />} 
        value={formData.password}
        onChange={handleFieldChange}
      />
      <Button onClick={(e) => alert('login')} />

      {error && <ErrorMessage error={error}/>}

      <span className="forgot-password">forgot password?</span>
    </form>
  </LoginStyled>
}