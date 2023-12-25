import { Box, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import {
  desktopNavStyles,
  logoSectionStyles,
  cartSectionStyles,
} from "./style";
import AppLogo from "../AppLogo";

const DesktopNav = () => {
  return (
    <Flex {...desktopNavStyles}>
      <Stack {...logoSectionStyles}>
        <Box>
          <AppLogo />
        </Box>
        <Box>NavItems</Box>
        <Box>Search</Box>
      </Stack>

      <Stack {...cartSectionStyles}>
        <Box>Wishlist</Box>
        <Box>Cart</Box>
      </Stack>
    </Flex>
  );
};

export default DesktopNav;
