// Import required hooks and functions from react and material-ui
import { createContext, useMemo, useState } from "react";
import { createTheme } from "@mui/material";
// Define a function to return color shades based on the mode (dark or light)
export const colorShades = (mode) => ({
   ...(mode === "dark"
      ? {
           // Dark mode color shades
           primary: {
              100: "#d2dee4",
              200: "#a5bdc9",
              300: "#779daf",
              400: "#4a7c94",
              500: "#1d5b79",
              600: "#174961",
              700: "#113749",
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
              100: "#d5d8dc",
              200: "#abb2b9",
              300: "#808b96",
              400: "#566573",
              500: "#2c3e50",
              600: "#233240",
              700: "#1a2530",
              800: "#121920",
              900: "#090c10",
           },
        }
      : {
           // Light mode color shades
           primary: {
              100: "#061218",
              200: "#0c2430",
              300: "#113749",
              400: "#174961",
              500: "#1d5b79",
              700: "#4a7c94",
              600: "#779daf",
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
              100: "#090c10",
              200: "#121920",
              300: "#1a2530",
              400: "#233240",
              500: "#2c3e50",
              600: "#566573",
              700: "#808b96",
              800: "#abb2b9",
              900: "#d5d8dc",
           },
        }),
});
// Define a function to return theme settings based on the mode
const themeSetting = (mode) => {
   const colors = colorShades(mode);
   return {
      palette: {
         mode: mode,
         ...(mode === "dark"
            ? {
                 // Dark mode palette
                 primary: {
                    main: colors.primary[500],
                 },
                 secondary: {
                    main: colors.secondary[500],
                 },
                 neutral: {
                    dark: colors.black[800],
                    main: colors.black[600],
                    light: colors.black[400],
                 },
                 background: {
                    default: colors.primary[900],
                 },
              }
            : {
                 // Light mode palette
                 primary: {
                    main: colors.primary[200],
                 },
                 secondary: {
                    main: colors.secondary[500],
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
   };
};
// Create a context for color mode
export const colorModeContext = createContext({
   toggleColorMode: () => {},
});
// Define a custom hook to use mode
export const useMode = () => {
   const [mode, setMode] = useState("dark");
   const colorMode = useMemo(
      () => ({
         toggleColorMode: () => setMode((prev) => (prev === "light" ? "dark" : "light")),
      }),
      []
   );
   const theme = useMemo(() => createTheme(themeSetting(mode)), [mode]);
   return [colorMode, theme];
};
