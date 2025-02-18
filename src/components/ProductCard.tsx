import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Ratings from "./Ratings";
import AddToCartButton from "./AddToCartButton";

const ProductCard = () => {
//   const [products, setProducts] = useState<>([]);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((json) => setProducts(json));
//   }, []);

  return (
    <Card maxW="xs" pos="relative" m="0.5rem">
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Flex justify="space-between" align="center">
            <Heading size="md">Living room Sofa</Heading>
            <Flex color="brand.primaryDark" fontWeight="bold">
              <Text fontSize="sm">$</Text>
              <Text fontSize="lg">100</Text>
            </Flex>
          </Flex>
          <Text>This sofa is perfect for modern tropical spaces</Text>
          <Ratings />
          <AddToCartButton />
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
