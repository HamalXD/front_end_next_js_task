import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import AppLogo from "../AppLogo";
import { mobileNavContainerStyle, mobileSearchWrapper } from "./style";
import Search from "../Search/Search";

const MobileNav = () => {
  return (
    <>
      <Flex {...mobileNavContainerStyle}>
        <Box>Nav Menu</Box>
        <AppLogo />

        <Stack direction="row" spacing={1}>
          <Text>Wishlist</Text>
          <Text>Cart</Text>
        </Stack>
      </Flex>

      <Box {...mobileSearchWrapper}>
        <Search />
      </Box>
    </>
  );
};

export default MobileNav;
