import React from 'react'
import { AiFillBug} from 'react-icons/ai';

import styled from 'styled-components'

const LogoStyled = styled.div`
  height: ${({height}) => height || '65px'};
  color: #7F6CE8;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 8px;
  font-size: 2.8rem;

  border-bottom: ${({border}) => border && '#222327 2px solid'};

  span {
    margin: 8px;
    font-size: 1.2rem;
    color: #6D6E77;
  }
`
export default function Logo({name, ...rest}) {
  return <LogoStyled {...rest}>
    <AiFillBug />
    {name && <span>{name}</span>}
  </LogoStyled>
}