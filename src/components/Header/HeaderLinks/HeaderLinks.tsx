import React from "react";
import { motion } from "framer-motion";
import useDevice from "@/hooks/useDevice";

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

interface Props {
  isOpen: boolean;
  onSetIsOpen: (isOpen: boolean) => void;
  className?: string;
}

const itemVariants = {
  open: {
    y: 0,
    transition: {
      duration: 0.15,
    },
  },
  closed: {
    y: 50,
    transition: {
      duration: 0.15,
    },
  },
};

const containerVariants = {
  open: {
    transition: {
      staggerChildren: 0.05,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
};

const HeaderLinks = ({
  isOpen,
  onSetIsOpen,
  className,
}: Props) => {
  const { isMobile } = useDevice();

  return (
    <motion.div
      initial="closed"
      animate={
        isMobile ? (isOpen ? "open" : "closed") : "open"
      }
      variants={containerVariants}
      className={className}
    >
      {links.map((link) => (
        <motion.a
          onClick={() => onSetIsOpen(false)}
          key={link.id}
          href={link.href}
          variants={isMobile ? itemVariants : itemVariants}
          className="tracking-[0.04em]"
        >
          {link.text}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default HeaderLinks;
