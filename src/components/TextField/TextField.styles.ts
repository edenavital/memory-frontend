import { styled } from "../../assets/theme";
import { TextField as MuiTextField } from "@mui/material";

export const TextField = styled(MuiTextField)(({ theme }) => {
  return {
    borderRadius: "9px",
    margin: 15,
    background: "rgba(95, 100, 122, 0.4)",
    // border: `3px solid linear-gradient(0deg, rgba(95, 100, 122, 0.4), rgba(95, 100, 122, 0.4)), linear-gradient(180deg, #A8DCFF 0%, #3BB0FF 100%) !important`,
    // borderImage: `linear-gradient(180deg, #A8DCFF 0%, #3BB0FF 100%) !important`,
    border: "3px solid !important",
    ["border-image-source"]:
      "linear-gradient(180deg, #A8DCFF 0%, #3BB0FF 100%) !important",
    input: {
      color: theme.palette.primary.contrastText,
      "&::placeholder": {
        color: `${theme.palette.primary.contrastText}50`,
        fontSize: theme.typography.fontSize,
      },
    },
  };
});
