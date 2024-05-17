"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 border rounded-full", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home" />
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Course">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href={"/all-courses"}>All Courses</HoveredLink>
            <HoveredLink href="/basic-music-theory">
              Basic Music Theory
            </HoveredLink>
            <HoveredLink href="/advanced-composition">
              Advanced Composition
            </HoveredLink>
            <HoveredLink href="/song-writing">Song Writing</HoveredLink>
            <HoveredLink href="/production">Music Production</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Contact Us" />
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
