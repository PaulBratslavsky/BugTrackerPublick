import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import Logo from '../components/Logo'
import { CgLock, CgUser } from 'react-icons/cg'
import Button from '../components/Button'
import Input from '../components/Input'
import { UserContext } from '../context/userContext'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'

const LoginStyled = styled.div`
  background: #222327;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .form-container {
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    background: #1c1c1f;
  }

  .forgot-password {
    color: #6D6E77;
    font-size: 0.6rem;
    text-align: center;
    text-transform: capitalize;
  }
`

const loginURL = 'http://localhost:1337/auth/local'
const INITIAL_STATE = {
  username: '',
  password: ''
}

export default function Login() {
  const { setUser } = useContext(UserContext)
  const [ formData, setFormData ] = useState(INITIAL_STATE)
  const [isLoading, setIsLoading] = useState(null) 
  const [error, setError] = useState(null) 

  async function handleSubmit(e) {
    e.preventDefault(e)
    const { username, password } = formData
    const params = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ identifier: username, password})
    }

    if ( username.length && password.length) {
      setIsLoading(true)
      try {
        const response = await fetch(loginURL, params)
        const data = await response.json()

        if (data.message) {
            const errorMessage = data.message[0].messages[0].message
            setError(errorMessage)
            setIsLoading(false)
            return
        } 

        setUser(data)
        setIsLoading(false)            
      } catch (error) {
        setIsLoading(false)
        setError(`LOGIN ERROR: ${error}`)
      }
    } else {
      setError('Form cannot be blank.')
    }
  }

  function handleFieldChange(e) {
    setFormData(prev => ({...prev, [e.target.name]: e.target.value }))
    setError(null)
  } 

  if (isLoading) return <LoginStyled><Loader /></LoginStyled>
  
  return <LoginStyled>
    <form onSubmit={handleSubmit} className="form-container">
      <div>
        <Logo name="trackabug" height="100%" />
      </div>

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