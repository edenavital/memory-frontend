import { FC, useState } from "react";
import { ILoginScreen } from "./LoginScreen.types";
import * as Styled from "./LoginScreen.styles";
import { Wrapper } from "../../components/Wrapper";
import { Typography } from "../../components/Typography";
// import { Card } from "../../components/Card";
import { TextField } from "../../components/TextField";

export const LoginScreen: FC<ILoginScreen> = () => {
  const [name, setName] = useState<string>("");

  const updateName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <Wrapper>
      <div
        style={{
          position: "absolute",
          zIndex: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "conter",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <Typography>Enter your name</Typography>
        <TextField onChange={updateName} value={name} />

        <Styled.SubmitButton>OK</Styled.SubmitButton>
      </div>

      <Styled.StyledLoginWrapperOne />
      <Styled.StyledLoginWrapperThree />
    </Wrapper>
  );
};
