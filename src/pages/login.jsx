import React, {useContext} from 'react'
import styled from 'styled-components'
import Logo from '../components/Logo'
import { CgLock, CgUser } from 'react-icons/cg'
import Button from '../components/Button'
import Input from '../components/Input'
import { UserContext } from '../context/userContext'

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

export default function Login() {
  const { setUser } = useContext(UserContext)
  
  function handleSubmit(e) {
    e.preventDefault()
    setUser(true) 
  }
  return <LoginStyled>
    <form onSubmit={handleSubmit} className="form-container">
      <div>
        <Logo name="trackabug" height="100%" />
      </div>
        <Input type="text" name="username" placeholder="username" icon={<CgUser />} />
        <Input type="password" name="password" placeholder="password" icon={<CgLock />} />
        <Button onClick={(e) => alert('login')} />
        <span className="forgot-password">forgot password?</span>
    </form>
  </LoginStyled>
}