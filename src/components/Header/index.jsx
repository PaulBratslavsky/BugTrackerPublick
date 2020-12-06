import React from 'react'
import styled from 'styled-components'
import { IoMdLogOut } from 'react-icons/io';
import IconButton from '../IconButton';


const HeaderStyled = styled.header`
  padding: 1rem 0;
  border-bottom: 2px solid #303238;

  display: flex;
  justify-content: space-between;
  align-items: center;

`

export default function Header() {
  return <HeaderStyled className="header margin">
    <div>Trackabug</div>
    <div>
      <IconButton component={<IoMdLogOut onClick={() => alert('logout')} />}/>  
    </div>
  </HeaderStyled>
}

