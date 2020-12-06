import React from 'react'
import styled from 'styled-components'

const IconButtonStyled = styled.button`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: none;
    border: none;
    color: #6D6E77;
    font-size: 1.4rem;

    transition: color 0.75s ease;

    &:hover {
        color: #C2C2C4;
    }

  
`
export default function IconButton({component, onClick}) {
  return <IconButtonStyled onClick={onClick} className="header margin">
      { component ? component : <p>Please pass Icon Component</p>}
  </IconButtonStyled>
}
