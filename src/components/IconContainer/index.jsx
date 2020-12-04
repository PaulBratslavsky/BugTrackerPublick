import React from 'react'
import styled from 'styled-components'

const IconContainerStyled = styled.div`
  color: #6D6E77;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px;
  margin: 12px 0;
  font-size: 2rem;

  margin-left: 2px;
  transition: color 0.75s ease;

&:hover {
  color: #C2C2C4;
}


`

export default function IconContainer({children}) {

  if (!children) return <p>Please provide child element</p>

  return <IconContainerStyled>
    {children}
  </IconContainerStyled>
}