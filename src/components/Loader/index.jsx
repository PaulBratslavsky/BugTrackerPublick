import React from 'react'
import styled from 'styled-components'

const LoaderStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    div {
        border: 8px solid #C2C2C4; 
        border-top: 8px solid #7F6CE8;
        border-radius: 50%;
        width: 55px;
        height: 55px;
        animation: spin 2s linear infinite; 
    }

    @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
    }
`
export default function Loader() {
    return <LoaderStyled><div /></LoaderStyled>
}
