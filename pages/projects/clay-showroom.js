import useSWR from "swr";
import Image from "next/image";
import styles from "../../styles/Project.module.css";
import { useRouter } from "next/router";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  return (
    <div>
      <div className="container">
        <h1>Niche Market App - Clay Showroom</h1>
        <p className={styles.description}>
          Clay Showroom wants to create a customer to customer space for their
          users to buy and sell their products. They want the sellers to be able
          to post a product with its associated details, add, edit and delete a
          product. They would like the buyers to be able to view, leave comments
          about the product(s), and make a purchase if they wish to.
        </p>
        <Image
          className={styles.image}
          alt="image1"
          src="/images/clay-showroom/UML.png"
          width={842}
          height={596}
        />
        <Image
          className={styles.image}
          alt="image1"
          src="/images/clay-showroom/ERD.png"
          width={842}
          height={596}
        />
        <Image
          className={styles.image}
          alt="image1"
          src="/images/clay-showroom/Low-fi Prototype.png"
          width={842}
          height={596}
        />
        <Image
          className={styles.image}
          alt="image1"
          src="/images/clay-showroom/Hi-fi Prototype.png"
          width={842}
          height={596}
        />
        <Image
          className={styles.image}
          alt="image1"
          src="/images/clay-showroom/Hi-fi Usability Testing.png"
          width={842}
          height={596}
        />
        <Image
          className={styles.image}
          alt="image1"
          src="/images/clay-showroom/Home and about.png"
          width={842}
          height={596}
        />
        <Image
          className={styles.image}
          alt="image1"
          src="/images/clay-showroom/Product list and detailes.png"
          width={842}
          height={596}
        />
        <Image
          className={styles.image}
          alt="image1"
          src="/images/clay-showroom/Sign up and Sign in.png"
          width={842}
          height={596}
        />
        <Image
          className={styles.image}
          alt="image1"
          src="/images/clay-showroom/Create and edit.png"
          width={842}
          height={596}
        />

        <Image
          className={styles.image}
          alt="image1"
          src="/images/clay-showroom/Technical Options.png"
          width={842}
          height={596}
        />
        <Image
          className={styles.image}
          alt="image1"
          src="/images/clay-showroom/Main Project Dependencies Frontend.png"
          width={842}
          height={596}
        />
        <Image
          className={styles.image}
          alt="image1"
          src="/images/clay-showroom/Main Project Dependencies Backend.png"
          width={842}
          height={596}
        />
        <Image
          className={styles.image}
          alt="image1"
          src="/images/clay-showroom/Version Control Frontend.png"
          width={842}
          height={596}
        />
        <Image
          className={styles.image}
          alt="image1"
          src="/images/clay-showroom/Version Control Backend.png"
          width={842}
          height={596}
        />
      </div>
    </div>
  );
}
