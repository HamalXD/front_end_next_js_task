import { extendTheme } from "@chakra-ui/react";

export const colors = {
  brand: {
    primary: "hsl(268,100%,60%)",
    primaryLight: "hsl(268,100%,70%)",
    primaryDark: "hsl(268,100%,50%)",
  },
};

export const theme = extendTheme({ colors });
