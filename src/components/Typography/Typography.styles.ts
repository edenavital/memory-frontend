import { Typography as MuiTypography } from "@mui/material";
import styled from "styled-components";

export const Typography = styled(MuiTypography)(({ theme }) => {
  return {
    color: theme.palette.primary.contrastText,
    "&.MuiTypography-root": {
      color: theme.palette.primary.contrastText,
      fontWeight: 700,
    },
  };
});
