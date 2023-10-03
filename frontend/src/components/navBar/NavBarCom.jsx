import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import {Link} from "react-router-dom";

export default function NavBarCom() {
  return (
    <Navbar>
      <NavbarBrand>
        {/*<AcmeLogo />*/}
        <p className="font-bold text-inherit">Your Image Gallery</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" to="/">
            Share Picture
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link to="/upload" aria-current="page">
            Upload
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" to="/">
            Public Pictures
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" to="/account" variant="flat">
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
