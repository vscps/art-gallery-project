// components/Navigation/index.js
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const { asPath } = useRouter(); // <-- hier asPath statt pathname
  const links = [
    { href: "/spotlight", label: "Spotlight" },
    { href: "/gallery", label: "Gallery" },
    { href: "/favorites", label: "Favorites" },
  ];

  return (
    <nav className={styles.nav}>
      {links.map(({ href, label }) => {
        const isActive = asPath === href; // true, wenn URL gleich href
        return (
          <Link
            key={href}
            href={href}
            className={`${styles.link} ${isActive ? styles.active : ""}`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
