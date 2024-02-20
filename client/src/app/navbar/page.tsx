"use client";
import { useState } from "react";
import { Center, Tooltip, UnstyledButton, Stack } from "@mantine/core";
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
} from "@tabler/icons-react";
import { MantineProvider } from "@mantine/core";

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?(): void;
  collapsed: boolean; // Add collapsed prop
}

function NavbarLink({
  icon: Icon,
  label,
  active,
  onClick,
  collapsed,
}: NavbarLinkProps) {
  return (
    <Tooltip
      label={collapsed ? (label && !active ? label : "") : label}
      position='right'
      transitionProps={{ duration: 0 }}>
      <UnstyledButton
        onClick={onClick}
        className={`w-12 h-12 flex items-center rounded-md ${
          active
            ? "bg-[#DA9732] text-[#fefefe]"
            : "text-[#DA9732] hover:bg-[#fffff]"
        }
        ${collapsed ? "pl-3" : "justify-center"}`}>
        <div className='flex gap-5'>
          <Icon className='w-6 h-6' stroke={1.5} />
          {collapsed && (
            <div
              className={`text-sm  ${
                active ? "text-[#DA9732]" : " hover:bg-[#fffff]"
              }`}>
              {label}
            </div>
          )}
        </div>
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: "Home" },
  { icon: IconGauge, label: "Dashboard" },
  { icon: IconDeviceDesktopAnalytics, label: "Analytics" },
  { icon: IconCalendarStats, label: "Releases" },
  { icon: IconUser, label: "Account" },
  { icon: IconFingerprint, label: "Security" },
  { icon: IconSettings, label: "Settings" },
];

export default function NavbarMinimal() {
  const [active, setActive] = useState(2);
  const [collapsed, setCollapsed] = useState(false);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
      collapsed={collapsed} // Pass collapsed state to NavbarLink
    />
  ));

  return (
    <MantineProvider>
      <div
        className={`h-screen flex flex-col justify-between border-r bg-[#f0ecd7] border-[#B69865] pt-14 pl-2 pb-10 ${
          collapsed ? "w-40 " : "w-20" // Adjust width based on collapsed state
        }`}>
        <div className='flex flex-col justify-center'>
          <Stack gap={0}>{links}</Stack>
        </div>
        <Stack gap={0}>
          <NavbarLink
            icon={IconSwitchHorizontal}
            label='Toggle'
            onClick={toggleNavbar}
            collapsed={collapsed}
          />
          <NavbarLink icon={IconLogout} label='Logout' collapsed={collapsed} />{" "}
        </Stack>
      </div>
    </MantineProvider>
  );
}
