// Import required hooks and functions from react and material-ui
import { createContext, useMemo, useState } from "react";
import { createTheme } from "@mui/material";
// Define a function to return color shades based on the mode (dark or light)
export const colorShades = (mode) => ({
   ...(mode === "dark"
      ? {
           // Dark mode color shades
           primary: {
              100: "#0B2447",
              200: "#19376D",
              300: "#576CBC",
              400: "#A5D7E8",
              500: "#1d5b79",
              600: "#19376D",
              700: "#19376D",
              800: "#0c2430",
              900: "#061218",
           },
           secondary: {
              100: "#dae8ea",
              200: "#b5d1d5",
              300: "#90b9c1",
              400: "#6ba2ac",
              500: "#468b97",
              600: "#386f79",
              700: "#2a535b",
              800: "#1c383c",
              900: "#0e1c1e",
           },
           black: {
              100: "#fff",
              200: "#abb2b9",
              300: "#808b96",
              400: "#A5D7E8",
              500: "#d2dae2",
              600: "#233240",
              700: "#1a2530",
              800: "#121920",
              900: "#05c46b",
           },
        }
      : {
           // Light mode color shades
           primary: {
              100: "#1D5D9B",
              200: "#75C2F6",
              300: "#F4D160",
              400: "#FBEEAC",
              500: "#1d5b79",
              700: "#4a7c94",
              600: "#fff",
              800: "#a5bdc9",
              900: "#d2dee4",
           },
           secondary: {
              100: "#0e1c1e",
              200: "#1c383c",
              300: "#2a535b",
              400: "#386f79",
              500: "#468b97",
              600: "#6ba2ac",
              700: "#90b9c1",
              800: "#b5d1d5",
              900: "#dae8ea",
           },
           black: {
              100: "#fff",
              200: "#121920",
              300: "#1a2530",
              400: "#233240",
              500: "#2c3e50",
              600: "#566573",
              700: "#808b96",
              800: "#abb2b9",
              900: "#05c46b",
           },
        }),
});
// Define a function to return theme settings based on the mode
const themeSetting = (mode) => {
   const colors = colorShades(mode);
   return ({
      palette: {
         mode: mode,
         ...(mode === "dark"
            ? {
                 // Dark mode palette
                 primary: {
                    main: colors.primary[100],
                    text: colors.primary[300],
                 },
                 secondary: {
                    main: colors.secondary[200],
                    text: colors.primary[400],
                 },
                 neutral: {
                    dark: colors.black[800],
                    main: colors.black[600],
                    light: colors.black[400],
                 },
                 background: {
                    default: colors.primary[200],
                 },
              }
            : {
                 // Light mode palette
                 primary: {
                    main: colors.primary[100],
                 },
                 secondary: {
                    main: colors.secondary[200],
                 },
                 neutral: {
                    dark: colors.black[800],
                    main: colors.black[600],
                    light: colors.black[400],
                 },
                 background: {
                    default: "#fcfcfc",
                 },
              }),
      },
      typography: {
         fontFamily: ["Nunito", "sans-serif"].join(","),
      },
   });
};
// Create a context for color mode
export const colorModeContext = createContext({
   toggleColorMode: () => {},
});
// Define a custom hook to use mode
export const useMode = () => {
   const [mode, setMode] = useState("light");
   const colorMode = useMemo(
      () => ({
         toggleColorMode: () => setMode((prev) => (prev === "light" ? "dark" : "light")),
      }),
      []
   );
   const theme = useMemo(() => createTheme(themeSetting(mode)), [mode]);
   return [colorMode, theme];
};
