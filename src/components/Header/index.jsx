import React, { useContext } from 'react'
import styled from 'styled-components'
import { IoMdLogOut } from 'react-icons/io';
import IconButton from '../IconButton';
import { UserContext } from '../../context/userContext'

const HeaderStyled = styled.header`
  padding: 1rem 0;
  border-bottom: 2px solid #303238;

  display: flex;
  justify-content: space-between;
  align-items: center;

`

export default function Header() {
  const { setUser } = useContext(UserContext)
  return <HeaderStyled className="header margin">
    <div>Trackabug</div>
    <div>
      <IconButton component={<IoMdLogOut onClick={() => setUser(false)} />}/>  
    </div>
  </HeaderStyled>
}

