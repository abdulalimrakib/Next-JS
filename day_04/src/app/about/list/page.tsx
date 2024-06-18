import Link from "next/link";
import React from "react";
const List = [
  {
    id: 1,
    name: "A",
  },
  {
    id: 2,
    name: "B",
  },
  {
    id: 3,
    name: "C",
  },
  {
    id: 4,
    name: "D",
  },
  {
    id: 5,
    name: "E",
  },
];

const page = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-24">
      <h1>List Page </h1>
      <div className="flex flex-col">
        {List.map((item) => {
          return (
            <Link key={item.id} href={`/about/list/${item.id}`}>
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default page;
