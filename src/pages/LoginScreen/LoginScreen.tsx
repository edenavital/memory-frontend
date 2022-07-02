import { FC, useState } from "react";
import { ILoginScreen } from "./LoginScreen.types";
import * as Styled from "./LoginScreen.styles";
import { Wrapper } from "../../components/Wrapper";
import { Typography } from "../../components/Typography";
import { ButtonTypes } from "../../components/Button";
import { globalNickname } from "../../redux/features/global";
import { useAppDispatch } from "../../redux/hooks";

// import { Card } from "../../components/Card";
// import { TextField } from "../../components/TextField";

export const LoginScreen: FC<ILoginScreen> = () => {
  const dispatch = useAppDispatch();
  const [nickname, setNickname] = useState<string>("");

  const updateName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(globalNickname(nickname));
  };

  return (
    <Wrapper>
      <form
        onSubmit={handleSubmit}
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
        <Styled.TextNickname onChange={updateName} value={nickname} />

        <Styled.SubmitButton type={ButtonTypes.SUBMIT}>OK</Styled.SubmitButton>
      </form>

      <Styled.StyledLoginWrapperOne />
      <Styled.StyledLoginWrapperThree />
    </Wrapper>
  );
};
