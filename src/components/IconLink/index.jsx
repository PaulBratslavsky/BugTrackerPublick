import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const activeClassName = 'nav-item-active'

const IconLinkStyled = styled(NavLink).attrs({ activeClassName })`
  color: #6D6E77;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px;
  margin: 12px 0;
  font-size: 2rem;

  border-left: #303238 2px solid;
  transition: color 0.75s ease;

  &:hover {
    color: #C2C2C4;
  }

  &.${activeClassName} {
    color: #C2C2C4;
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,0.2091211484593838) 0%, rgba(48,50,56,1) 100%);
    border-left: #7F6CE8 2px solid;
  }
`

export default function IconLink({children, path }) {

  if (!children) return <p>Please provide child element</p>

  return <IconLinkStyled to={path} exact>
    {children}
  </IconLinkStyled>
}