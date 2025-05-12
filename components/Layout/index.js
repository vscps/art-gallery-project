import Header from "../Header";
import Navigation from "../Navigation";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <Navigation />
      </footer>
    </>
  );
}
