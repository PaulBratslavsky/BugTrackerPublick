import styled from "styled-components";

export const LoginStyled = styled.div`
  background: #222327;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .form-container {
    width: 420px;
    padding: 4rem 2rem;
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    background: #1c1c1f;
  }

  .logo {
    font-size: 5rem;
    span {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  }

  .forgot-password {
    color: #6d6e77;
    margin-top: 1rem;
    font-size: 0.8rem;
    text-align: center;
    text-transform: capitalize;
    cursor: pointer;
  }
`;
