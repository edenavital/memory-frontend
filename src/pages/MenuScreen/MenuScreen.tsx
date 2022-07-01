import { FC, useState } from "react";
import { IMenuScreen } from "./MenuScreen.types";
import * as Styled from "./MenuScreen.styles";
import { Wrapper } from "../../components/Wrapper";
import { Typography } from "../../components/Typography";
// import { Card } from "../../components/Card";
// import { TextField } from "../../components/TextField";

export const LoginScreen: FC<IMenuScreen> = () => {
  return (
    <Wrapper>
      <div
        style={{
          zIndex: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "content",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <Typography>Enter your name</Typography>
        {/* <Styled.TextNickname onChange={updateName} value={name} /> */}

        {/* <Styled.SubmitButton>OK</Styled.SubmitButton> */}
      </div>

      {/* <Styled.StyledLoginWrapperOne />
      <Styled.StyledLoginWrapperThree /> */}
    </Wrapper>
  );
};
