import { Fragment, lazy } from "react";
import styles from "./page.module.css";

import SearchEngine from "search-engine/SearchEngine";
import News from "news/News";
import VitePage from "../components/vite-page";

export default function Home() {
  return (
    <div className={styles.content}>
      <header>
        <SearchEngine />
      </header>
      <main>
        <h1>Home page</h1>

        <div className={styles.home}>
          <div>
            <section className={styles.banners}>
              <div className={styles.banner}></div>
              <div className={styles.banner}></div>
              <div className={styles.banner}></div>
              <div className={styles.banner}></div>
              <div className={styles.banner}></div>
            </section>

            <section>
              <VitePage />
            </section>
          </div>

          <aside>
            <News />
          </aside>
        </div>
      </main>
    </div>
  );
}
