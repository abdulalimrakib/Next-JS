"use client";
import { useRouter } from "next/navigation";
import React from "react";

const AboutPage = () => {
  const route = useRouter();
  const handleRoute = () => {
    route.push("/about/list");
  };
  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-24">
      <h1>About Page </h1>
      <button onClick={handleRoute}>Go to list</button>
    </main>
  );
};

export default AboutPage;
