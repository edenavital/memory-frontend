import { FC } from "react";
import * as Styled from "./Wrapper.styles";
import { IWrapper } from "./Wrapper.types";

export const Wrapper: FC<IWrapper> = ({ children }) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
};
