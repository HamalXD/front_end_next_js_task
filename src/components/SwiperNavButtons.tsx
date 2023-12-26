import { Box, IconButton } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React from "react";
import { useSwiper } from "swiper/react";

const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <Box m="1.5rem">
      <IconButton
        rounded="lg"
        icon={<FaChevronLeft />}
        borderColor="brand.primary"
        color="brand.primaryDark"
        bgColor="white"
        aria-label="Previous"
        onClick={() => swiper.slidePrev()}
        mx="1"
      />
      <IconButton
        rounded="lg"
        icon={<FaChevronRight />}
        borderColor="brand.primary"
        color="brand.primaryDark"
        bgColor="white"
        aria-label="Next"
        onClick={() => swiper.slideNext()}
        mx="1"
      />
    </Box>
  );
};

export default SwiperNavButtons;
