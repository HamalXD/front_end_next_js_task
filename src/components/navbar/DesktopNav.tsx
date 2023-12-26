import { Box, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import {
  desktopNavStyles,
  logoSectionStyles,
  cartSectionStyles,
} from "./style";
import AppLogo from "../AppLogo";
import { navItems } from "../helpers";
import Link from "next/link";

const DesktopNav = () => {
  return (
    <Flex {...desktopNavStyles}>
      <Stack {...logoSectionStyles}>
        <Box>
          <AppLogo />
        </Box>

        {navItems.map((navItems) => (
          <Box key={navItems.label}>
            <Link href={navItems.href}>{navItems.label}</Link>
          </Box>
        ))}

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
