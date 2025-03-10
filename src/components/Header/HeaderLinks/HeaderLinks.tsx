import Link from "next/link";
import React from "react";

const links = [
  {
    id: 1,
    href: "#rooms",
    text: "Номера",
  },
  {
    id: 2,
    href: "#about",
    text: "О нас",
  },
  {
    id: 3,
    href: "#map",
    text: "Контакты",
  },
  {
    id: 4,
    href: "#reviews",
    text: "Отзывы",
  },
  {
    id: 5,
    href: "#how-to-book",
    text: "Как забронировать",
  },
];

const HeaderLinks = () => {
  return (
    <>
      {links.map((link) => (
        <Link key={link.id} href={link.href}>
          {link.text}
        </Link>
      ))}
    </>
  );
};

export default HeaderLinks;
