import React from 'react'
import { NavLink } from 'react-router-dom'

import { AiFillBug} from 'react-icons/ai';

import styled from 'styled-components'

const LogoStyled = styled(NavLink)`
  height: 65px;
  color: #7F6CE8;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px;
  font-size: 2.8rem;

  border-bottom: #222327 2px solid;
`
const isUser = false;

export default function Logo() {
  return <LogoStyled to={!isUser ? '/login' : '/'}>
    <AiFillBug />
  </LogoStyled>
}