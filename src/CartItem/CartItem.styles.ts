import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 0.5px solid lightgray;
  /* background-color: black; */
  padding: 10px 0px 20px 0px;

  div {
    flex: 1;
  }

  .information,
  .buttons {
    display: flex;
    justify-content: space-between;

    .button {
      background-color: #f1f1f1;
      color: black;

      &:hover {
        background-color: dodgerblue;
        color: white;
      }
    }
  }

  img {
    max-width: 25vw;
    max-height: 25vh;
    object-fit: cover;
    border-radius: 5%;
    margin: 0% 3% 0% 10%;
  }
`;
