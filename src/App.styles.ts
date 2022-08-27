import styled from "styled-components";
import { IconButton } from "@material-ui/core";

export const Wrapper = styled.div`
  margin: 40px 40px;

  .mainTitle {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    font-size: 48px;
    font-weight: bold;
    color: dodgerblue;
    margin-bottom: 30px;
  }
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
  background-color: white;
  padding: 9px;

  &:hover{
    background-color: dodgerblue;
    color:white
  }
`;
