import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Index() {
  return (
    <div>
      <div className={`container ${styles.header}`}>
        <h1>CAROL LIN | PORTFOLIO </h1>
        <h2>lovellcarol@hotmail.com</h2>
      </div>
      <div className="container">
        <div className={styles.projects}>
          <Link href="projects/sealion-trust">
            <a>
              <div className={`${styles.project} ${styles.project1}`}> </div>
            </a>
          </Link>
          <Link href="projects/clay-showroom">
            <a>
              <div className={`${styles.project} ${styles.project3}`}> </div>
            </a>
          </Link>
          <Link href="projects/tourism-nz">
            <a>
              <div className={`${styles.project} ${styles.project2}`}> </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
