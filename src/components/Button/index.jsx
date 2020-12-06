import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  background: #C2C2C4;
  border: none;
  padding: 0.25rem 0.5rem;
  border-radius: 2px;
  color: #1c1c1f;
  font-weight: bold;
  margin: 0.5rem 0;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background: #7f6ce8;
  }

`

export default function Button() {
  return <ButtonStyled>Submit</ButtonStyled>
}
