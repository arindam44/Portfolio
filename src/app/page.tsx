import Home from "@/components/home";
import styles from "./page.module.css";
import Navbar from "@/components/navbar";
import About from "@/components/about";

export default function App() {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <Navbar />
      </nav>
      <div className={styles.content}>
        <Home />
        <About />
      </div>
    </main>
  );
}
