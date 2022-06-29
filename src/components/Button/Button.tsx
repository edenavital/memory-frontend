import { FC } from "react";
// import { Button as MuiButton } from "@mui/material";
import * as Styled from "./Button.styles";
import { IButton } from "./Button.types";

export const Button: FC<IButton> = ({ children }) => {
  return (
    <Styled.ButtonWrapper>
      <Styled.ButtonOneLayer />
      <Styled.ButtonTwoLayer />
      <Styled.Button variant="contained">{children}</Styled.Button>
    </Styled.ButtonWrapper>
  );
};
