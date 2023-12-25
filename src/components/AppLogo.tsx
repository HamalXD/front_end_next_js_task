import { Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const AppLogo = () => {
  return (
    <Link href="/" >
      <Text color="grey.800" fontWeight="bold">
        Online{" "}
        <Text as="span" color="brand.primary">
          Store
        </Text>
      </Text>
    </Link>
  );
};

export default AppLogo;
