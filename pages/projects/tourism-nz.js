import useSWR from "swr";
import Image from "next/image";
import styles from "../../styles/Project.module.css";
import { useRouter } from "next/router";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
 
  return (
    <div>
      <div className="container">
        <h1>Tourism New Zealand</h1>
        <p className={styles.description}>
          Tourism New Zealand has a new campaign that is aimed at visitors
          staying for short periods and booking their own accommodation. The
          main goal is to help Tourism New Zealand to positively promote New
          Zealand tourism internationally.
        </p>
        <Image
          className={styles.image}
          alt="image1"
          src="/images/tourism-nz/Use Case Diagram.png"
          width={842}
          height={596}
        />
        <Image
          className={styles.image}
          alt="image1"
          src="/images/tourism-nz/Deliverables.png"
          width={842}
          height={596}
        />
        <Image
          className={styles.image}
          alt="image1"
          src="/images/tourism-nz/Timeline Chart.png"
          width={842}
          height={596}
        />
        <Image
          className={styles.image}
          alt="image1"
          src="/images/tourism-nz/Hifi prototype.png"
          width={842}
          height={596}
        />
        <Image
          className={styles.image}
          alt="image1"
          src="/images/tourism-nz/Browser developer tools.png"
          width={842}
          height={596}
        />
        <Image
          className={styles.image}
          alt="image1"
          src="/images/tourism-nz/linting-tool.png"
          width={842}
          height={596}
        />
        <Image
          className={styles.image}
          alt="image1"
          src="/images/tourism-nz/js-linting-tool.png"
          width={842}
          height={596}
        />
        <Image
          className={styles.image}
          alt="image1"
          src="/images/tourism-nz/HTML Checker.png"
          width={842}
          height={596}
        />
        <Image
          className={styles.image}
          alt="image1"
          src="/images/tourism-nz/CSS Validator.png"
          width={842}
          height={596}
        />
        <Image
          className={styles.image}
          alt="image1"
          src="/images/tourism-nz/Timeline Menagement Analysis.png"
          width={842}
          height={596}
        />
        <Image
          className={styles.image}
          alt="image1"
          src="/images/tourism-nz/Timeline deliverable.png"
          width={842}
          height={596}
        />
      </div>
    </div>
  );
}
