"use client";

import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { bannerHeadingStyles, bannerStyles, bannerTextStyles } from "./style";
import Link from "next/link";

const Banner = () => {
  return (
    <Flex {...bannerStyles}>
      <Box w={{ base: "100%", lg: "50%" }}>
        <Heading {...bannerHeadingStyles}>Online Store</Heading>
        <Text {...bannerTextStyles}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum optio
          qui recusandae maiores odio ullam nemo. Incidunt accusantium
          cupiditate magnam harum deleniti ratione laboriosam repellat
          perspiciatis unde, itaque at aperiam?
        </Text>
        <Link href="/products">
          <Button
            rounded="full"
            minW="10rem"
            bgColor="brand.primary"
            color="white"
            _hover={{ bgColor: "brand.primaryDark" }}
          >
            Shop Items
          </Button>
        </Link>
      </Box>
      <Box w={{ base: "100%", lg: "50%" }}>
        <Box
          mx="2rem"
          w={{ base: "300px", lg: "600px" }}
          h={{ base: "300px", lg: "600px" }}
          bg=" center / cover no-repeat url(mockup.svg)"
        />
      </Box>
    </Flex>
  );
};

export default Banner;
