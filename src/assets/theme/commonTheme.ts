import * as styledComponents from "styled-components";
import { darkTheme } from "./darkTheme";
// import { CSSProperties } from "@mui/styles";

interface ICommonTypography {
  fontSize: number;
  fontFamily: string;
}

interface IPalette {
  primary: {
    contrastText: string;
    main: string;
  };
}

export interface ICommonTheme {
  typography: ICommonTypography;
  palette: IPalette;
  mixins: {
    genericWrapper: object;
  };
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ICommonTheme>;

export { styled, css, createGlobalStyle, keyframes, ThemeProvider };

const commonTheme: ICommonTheme = {
  typography: {
    fontSize: 18,
    fontFamily: `'Gilroy-Bold', sans-serif !important`,
  },
  palette: darkTheme,
  mixins: {
    genericWrapper: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
  },
};

// https://codesandbox.io/s/rough-wave-u0uuu?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fapp.tsx&theme=dark

export const generateTheme = () => {
  return { ...commonTheme, palette: darkTheme };
};