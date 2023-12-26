import { Box } from "@chakra-ui/react";
import { navbarStyles} from "./style"
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const NavBar = () => {
  return (
    <Box {...navbarStyles}>
      <DesktopNav />
      <MobileNav />
    </Box>
  );
};

export default NavBar;
