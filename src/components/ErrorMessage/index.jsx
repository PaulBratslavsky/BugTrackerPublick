import React from 'react'
import styled from 'styled-components'

const StyledError = styled.div`
  background:#c5338c; // #c5334c;
  color: #f1f1f1;
  padding: 0.25rem 0.5rem;
  border-radius: 2px;
  font-size: 0.8rem;
  text-align: center;
  margin-bottom: 0.5rem;
`;

export default function ErrorMessage({error}) {
  return <StyledError>{error}</StyledError>
}

