import { lazy } from "react";
import styles from "./page.module.css";

//@ts-ignore
// import SearchEngine from "search-engine/SearchEngine";
//@ts-ignore
// import News from "news/News";
const VitePage = lazy(() => import("../components/vite-page"));

export default function Home() {
  return (
    <div className={styles.content}>
      <header>
        {/* <SearchEngine /> */}
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
            {/* <News /> */}
          </aside>
        </div>
      </main>
    </div>
  );
}
