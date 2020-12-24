import React from 'react'
import styled from 'styled-components'
import { HiDotsVertical } from 'react-icons/hi'

/*******************************************
  Card Components
*******************************************/
const CartStyled = styled.section`
  background: #303238;
  color: #adb5bd;
  padding: 1rem;
  height: 100%;
  border-radius: 4px;
`

const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  font-size: 1rem;
  color: #f7f7f7;
`

export default function Card({ children, title }) {
  return (
    <CartStyled>
      <CardHeader>
        <h2>{title}</h2>
        <HiDotsVertical />
      </CardHeader>
      <div>{children ? children : <p>No children content</p>}</div>
    </CartStyled>
  )
}
