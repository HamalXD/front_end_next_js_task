import { Box } from "@chakra-ui/react";
import { navbarStyles} from "./style"
import DesktopNav from "./DesktopNav";

const NavBar = () => {
  return (
    <Box {...navbarStyles}>
      <DesktopNav />
    </Box>
  );
};

export default NavBar;
