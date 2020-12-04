import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import IconContainer from '../IconContainer'
import { IoMdLogIn } from 'react-icons/io';


const HeaderStyled = styled.header`
  padding: 1rem 0;
  border-bottom: 2px solid #303238;

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    &:hover {
      color: red;
    }
  }
`
const isUser = false;
export default function Header() {
  return <HeaderStyled className="header margin">
    <div>Trackabug</div>
    <div>
      { !isUser 
        ? <Link to='/login'><IconContainer><IoMdLogIn /></IconContainer></Link> 
        : <h2>Logout</h2>
      }
    </div>
  </HeaderStyled>
}

