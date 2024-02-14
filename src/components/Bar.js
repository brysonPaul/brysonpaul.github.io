import React from "react";
import {Navbar, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Social from "./Social/Social";

export default function Bar(){
    return (<Navbar color="" isBordered isBlurred={false}>
    <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
        <Link color="foreground" href="/" >
          Home
        </Link>
      </NavbarItem>
      <NavbarItem >
        <Link color="foreground" href="about" >
          About Me
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="experiences">
          Experiences
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="projects">
          Projects
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="keyboards">
          Keyboards
        </Link>
      </NavbarItem>
    </NavbarContent>
    {/* This area is for my links to linkedin, email, and resume */}
    <NavbarContent justify="end">
      <Social/>
    </NavbarContent>
  </Navbar>)
}