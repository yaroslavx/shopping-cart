import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  background-color: #f1f1f1;
  border-radius: 20px;
  height: 100%;
  transition: all 0.5s ease-in-out;


  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    background-color: white;
  }

  button {
    border-radius: 20px;
    background-color: white;
    color: black;

    &:hover{
      background-color: dodgerblue;
      color: white;
    }
  }

  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
`;
