import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  background: #C2C2C4;
  border: none;
  padding: 12px 4px;
  border-radius: 2px;
  color: #1c1c1f;
  font-size: 1.4rem;
  font-weight: bold;
  margin: 0.5rem 0;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background: #7f6ce8;
  }

`

export default function Button() {
  return <ButtonStyled>Submit</ButtonStyled>
}
