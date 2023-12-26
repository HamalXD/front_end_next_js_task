import { Box } from "@chakra-ui/react";
import { navbarStyles } from "./style";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const NavBar = () => {
  return (
    <Box className="navbar-wrapper" h="120px">
      <Box {...navbarStyles}>
        <DesktopNav />
        <MobileNav />
      </Box>
    </Box>
  );
};

export default NavBar;
