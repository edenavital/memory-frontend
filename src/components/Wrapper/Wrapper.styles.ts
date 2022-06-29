import { styled } from "../../assets/theme";
// import { up, between } from "styled-breakpoints";

export const Wrapper = styled("div")(({ theme }) => {
  return {
    ...theme.mixins.genericWrapper,
  };
});
