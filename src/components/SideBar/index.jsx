import React from 'react'
import styled from 'styled-components'
import Logo from '../Logo'
import Navigation from '../Navigation'

const SideBarStyled = styled.div`
  background: #303238;
`;

export default function SideBar() {
  return <SideBarStyled className="sidebar">
    <Logo border/>
    <Navigation />
  </SideBarStyled>
}