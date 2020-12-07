import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Loader from '../Loader'
import Count from '../Count'

const avatarImg = "https://avatars2.githubusercontent.com/u/6153188?v=4"

const activeClassName = 'nav-item-active'

const IconLinkStyled = styled(NavLink).attrs({ activeClassName })`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: 2px solid #6D6E77;
  overflow:hidden;
  transition: border-color 0.75s ease;


  img {
    height: 100%;
    width: 100%;
  }

  &:hover {
    border: 2px solid #C2C2C4;
  }

  &.${activeClassName} {
    border: 2px solid #C2C2C4;
  }
  
`

const AvatarStyled = styled.div`
  margin: 1rem 0;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

export default function Avatar({path}) {
  // const { isLoading, data } = useContext(UserContext)
  return <AvatarStyled>
    { false ? <Loader /> :  <IconLinkStyled to={path} exact><Count /><img src={avatarImg} alt="avatar"/></IconLinkStyled> }
  </AvatarStyled>
}