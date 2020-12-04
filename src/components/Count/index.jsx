import React from 'react'
import styled from 'styled-components'

const CountStyled = styled.div`
  position: absolute;
  top: -6px;
  right: 6px;

  height: 18px;
  width: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

  background:${({count}) => count <= 99 ? '#7F6CE8' : '#FF5555'};
  color: white;
  border-radius: 50%;
  font-size: 11px;
`

export default function Count({ count = 24 }) {
  
  return <CountStyled count={count}>
    {count <= 99 ? count : '!'}
  </CountStyled>
}