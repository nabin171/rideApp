"use client";
import React from "react";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import {
  FaChevronDown,
  FaLock,
  FaChartLine,
  FaBolt,
  FaServer,
  FaUserTag,
  FaBalanceScale,
} from "react-icons/fa"; // Importing icons from react-icons

const CustomNavbar = () => {
  const icons = {
    chevron: <FaChevronDown size={16} />,
    scale: <FaBalanceScale className="text-warning" size={30} />,
    lock: <FaLock className="text-success" size={30} />,
    activity: <FaChartLine className="text-secondary" size={30} />,
    flash: <FaBolt className="text-primary" size={30} />,
    server: <FaServer className="text-success" size={30} />,
    user: <FaUserTag className="text-danger" size={30} />,
  };

  return (
    <NextUINavbar>
      <NavbarBrand>
        <img
          src="/mylogo.png"
          width={70}
          height={70}
          className="rounded m-1"
        ></img>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Services
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              description="ACME scales apps to meet user demand, automagically, based on load."
              startContent={icons.scale}
            >
              Autoscaling
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              startContent={icons.activity}
            >
              Usage Metrics
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              description="ACME runs on ACME, join us and others serving requests at web scale."
              startContent={icons.flash}
            >
              Production Ready
            </DropdownItem>
            <DropdownItem
              key="99_uptime"
              description="Applications stay on the grid with high availability and high uptime guarantees."
              startContent={icons.server}
            >
              +99% Uptime
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              description="Overcome any challenge with a supporting team ready to respond."
              startContent={icons.user}
            >
              +Supreme Support
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="foreground">
            Feedback
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="foreground">
            Track Order
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="/login" variant="flat">
            Login
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/register" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};

export default CustomNavbar;
