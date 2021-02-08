import styled from 'styled-components';

export const Container = styled.div`
  flex:1;
  background-color: #fff;

  display: flex;
  flex-flow: row wrap;
`;

export const Usuarios = styled.div`
  flex: 1 1 250px;

  border: 1px solid #c3c3c3;
  margin: 5px 5px;

  padding: 20px;

  li {
    margin: 15px;
  }
`;

export const Painel = styled.div`
  flex: 2 2 320px;

  border: 1px solid #c3c3c3;
  margin: 5px 5px;

  display: flex;
  flex-flow: column nowrap;
`;

export const Mensagens = styled.div`
  padding: 20px;
  max-height: 250px;

  overflow: auto;

  div {
    margin: 15px 0;

    p {
      margin: 2.5px 0;
    }
  }
`;

export const Input = styled.div`
  height: 80px;
  padding: 15px;
  margin-top: 10px;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  background-color: #f3f3f3;
  border-top: 1px solid #c3c3c3;

  span {
    min-width: 50px;
    height: 35px;
  
    padding: 5px;
    border: 1px solid #e3e3e3;
    border-right: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    background-color: #e3e3e3;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    flex: 1;
    height: 35px;
    
    padding: 5px;
    border: 1px solid #e3e3e3;
    border-radius: 0px;
  }

  button {
    min-width: 50px;
    height: 35px;
    padding: 5px;
    border: 1px solid #e3e3e3;
    border-left: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;