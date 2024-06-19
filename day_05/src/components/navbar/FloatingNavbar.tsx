"use client";
import React from "react";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FloatingNav } from "../ui/floating-navbar";

export function FloatingNavbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Our Courses",
      sublink: [
        { name: "All Courses", href: "/courses" },
        { name: "Basic Music Theory", href: "/music-theory" },
        { name: "Advanced Composition", href: "/advanced-composition" },
        { name: "Songwriting", href: "/songwriting" },
        { name: "Music Production", href: "/music-production" },
      ],
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      <h1 className="h-screen">navbar</h1>
    </div>
  );
}
