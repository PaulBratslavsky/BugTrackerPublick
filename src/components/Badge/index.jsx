import React from 'react'
import styled from 'styled-components'
/*******************************************
  Badge Components
*******************************************/
const BadgeStyled = styled.span`
    display: inline-block;
    padding: .25em .4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25rem;
    color: #fff;
    background-color: ${({color}) => color ? color : "#ff5b5b" };
`

export default function Badge({text, color}) {
  return <BadgeStyled color={color}>{text}</BadgeStyled>
}