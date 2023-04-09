import { createTheme } from "@mui/material";
import { cssVariables } from "core/styles/consts"

export const appTheme = createTheme({
  palette: {
    primary: {
      main: cssVariables.colorPrimary,
    },
    secondary: {
      main: cssVariables.colorSecondary,
    },
    info: {
      main: '#fff'
    }
  },
  typography: {
    h3: {
      fontSize: 18,
      fontWeight: 700,
      lineHeight: 1.5,
      color: cssVariables.headerColor

    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 700,
      lineHeight: 1.2,
      color: cssVariables.subtitleColor

    },
    caption: { //Настройки лейбла для инпута
      fontSize: 14,
      fontWeight: 700,
      lineHeight: 1,
      color: cssVariables.ordinaryTextColor
    },
    h5: { //Текст ошибки
      fontSize: 12,
      fontWeight: 400,
      lineHeight: 1,
      color: cssVariables.errorText,
      marginTop: '6px'
    }

  },
});