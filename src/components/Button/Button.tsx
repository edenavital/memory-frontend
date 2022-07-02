import { FC } from "react";
import { Button as MuiButton } from "@mui/material";
import * as Styled from "./Button.styles";
import { IButton, ButtonTypes } from "./Button.types";

export const Button: FC<IButton> = ({
  children,
  type = ButtonTypes.BUTTON,
}) => {
  return (
    <Styled.ButtonWrapper>
      <Styled.ButtonOneLayer />
      <Styled.ButtonTwoLayer />
      <Styled.Button variant="contained" type={type}>
        {children}
      </Styled.Button>
    </Styled.ButtonWrapper>
  );
};
