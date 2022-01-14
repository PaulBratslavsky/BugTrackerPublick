import React from 'react'
import styled from 'styled-components'

const InputStyled = styled.div`
  position: relative;
  margin-bottom: 16px;
  background: none;


  span {
    position: absolute;
    padding-bottom: 6px;
    color: #C2C2C4;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      font-size: 1.6rem;
    }
  }

  
  input {
    font-size: 1.4rem;
    display: flex;
    width: 100%;
    align-items: center;
    padding: 12px 4px 8px 34px;
    border: none;
    background: none;
    color:  #7F6CE8;
    border-bottom: 1.5px solid #6D6E77;
    transition: border-color 0.3s ease-in-out;

    &::placeholder {
      color: #6D6E77;
      text-transform: capitalize;
    }
  }

  input:focus {
    outline: none; 
    border-bottom: 1.5px solid #7F6CE8;
  }
  
`

export default function Input({type, icon, placeholder, onChange, value, name, error}) {
  return <InputStyled className='input'>
    {icon && <span>{icon}</span> }
    <input 
      name={name}
      type={type} 
      autoComplete="off" 
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  </InputStyled>
}
