import { styled } from "../../assets/theme";
import { Button } from "../../components/Button";

export const MyComponent = styled("div")((props) => {
  console.log("p", props);
  return {
    color: "black",
    height: 500,
    width: 500,
    background: "red",
    // [up("sm")(props)]: {
    //   background: "blue",
    // },
    // [up("md")(props)]: {
    //   background: "blue",
    // },
  };
});
