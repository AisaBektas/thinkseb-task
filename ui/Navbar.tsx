"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "../public/logo.png";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { ILink } from "./Footer";
import { usePathname } from "next/navigation";

const allLinks: ILink[] = [
  { id: "1", link: "/", name: "Home" },
  { id: "2", link: "/for-businesses", name: "For Businesses" },
  { id: "3", link: "/for-individuals", name: "For Individuals" },
  { id: "4", link: "/blog", name: "Blog" },
  { id: "5", link: "/marketing-efforts", name: "Marketing Efforts" },
];

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [first, setFirst] = useState<
    { id: string; link: string; name: string }[]
  >([]);
  const [second, setSecond] = useState<
    { id: string; link: string; name: string }[]
  >([]);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const splitIndex = allLinks.findIndex((item) => item.link === pathname);

    const firstArray = allLinks.slice(0, splitIndex + 1);
    const secondArray = allLinks.slice(splitIndex + 1);

    setFirst(firstArray);
    setSecond(secondArray);
  }, [pathname]);

  const navbarClass =
    scrollPosition > 0
      ? `${styles.navbar} ${styles["navbar--scroll"]}`
      : styles.navbar;
  const contentClass =
    scrollPosition > 0
      ? `${styles.content} ${styles["content--scroll"]}`
      : styles.content;
  const allLinksClass =
    scrollPosition > 0
      ? `${styles.allLinks} ${styles["allLinks--scroll"]}`
      : styles.allLinks;
  const menuClass =
    scrollPosition > 0
      ? `${styles.menu} ${styles["menu--scroll"]}`
      : styles.menu;
  const contactClass =
    scrollPosition > 0
      ? `${styles.contact} ${styles["contact--scroll"]}`
      : styles.contact;

  const logoClass =
    scrollPosition > 0
      ? `${styles.logo} ${styles["logo--scroll"]}`
      : styles.logo;

  return (
    <div className={navbarClass}>
      <div className={contentClass}>
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            title="Logo"
            height={90}
            width={515}
            className={logoClass}
          />
        </Link>
        <div className={menuClass}>
          <div className={styles.activeLinks}>
            {first.map((navbarLink: ILink) => (
              <Link
                className={styles.item}
                href={navbarLink.link}
                key={navbarLink.id}
              >
                {navbarLink.name}
              </Link>
            ))}
          </div>
          <div className={allLinksClass}>
            {second.map((navbarLink: ILink) => (
              <Link
                className={styles.item}
                href={navbarLink.link}
                key={navbarLink.id}
              >
                {navbarLink.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <button className={contactClass}>Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
