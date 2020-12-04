import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Loader from '../Loader'
import Count from '../Count'


const AvatarStyled = styled.div`
  margin: 1rem 0;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  img { 
    width: 55px;
    height: 55px;
    border-radius: 50%;
  }
`

export default function Avatar({path}) {
  const { isLoading, data } = useContext(UserContext)
  return <AvatarStyled>
    { isLoading ? <Loader /> :  <Link to={path}><Count /><img src={data.avatar_url} alt="avatar"/></Link> }
  </AvatarStyled>
}