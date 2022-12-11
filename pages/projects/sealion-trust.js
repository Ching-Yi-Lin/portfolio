
import Image from "next/image";
import styles from "../../styles/Project.module.css";





export default function Index() {
  
 return (
    <div>
      <div className="container">
        <h1>Sealion Trust</h1>
        <p className={styles.description}>
          The main goal is to help the New Zealand Sea Lion Trust to raise
          awareness about the plight of sea lions in New Zealand. New Zealand
          Sea Lion Trust would also like to educate the public on how to treat
          sea lions when they see them on the beach, and donate to their cause
          and volunteers.
        </p>
        <Image
          className={styles.image}
          alt="image1"
          src="/images/sealion-trust/Kick off meeting.png"
          width={842}
          height={596}
        />
        <Image
          className={styles.image}
          alt="image1"
          src="/images/sealion-trust/kick off meeting p2.png"
          width={842}
          height={596}
        />
        <Image
          className={styles.image}
          alt="image1"
          src="/images/sealion-trust/Gap analysis p2.png"
          width={842}
          height={596}
        />
        <Image
          className={styles.image}
          alt="image1"
          src="/images/sealion-trust/Gap analysis.png"
          width={842}
          height={596}
        />
        <Image
          className={styles.image}
          alt="image1"
          src="/images/sealion-trust/Usability testing.png"
          width={842}
          height={596}
        />
        <Image
          className={styles.image}
          alt="image1"
          src="/images/sealion-trust/Gap analysis conclusion.png"
          width={842}
          height={596}
        />
        <Image
          className={styles.image}
          alt="image1"
          src="/images/sealion-trust/How might we.png"
          width={842}
          height={596}
        />
        <Image
          className={styles.image}
          alt="image1"
          src="/images/sealion-trust/Stakeholders.png"
          width={842}
          height={596}
        />
        <Image
          className={styles.image}
          alt="image1"
          src="/images/sealion-trust/User Stories.png"
          width={842}
          height={596}
        />
        
        <Image
          className={styles.image}
          alt="image1"
          src="/images/sealion-trust/content-model-page.png"
          width={842}
          height={596}
        />
        <Image
          className={styles.image}
          alt="image1"
          src="/images/sealion-trust/Design Page.png"
          width={842}
          height={596}
        />
        <Image
          className={styles.image}
          alt="image1"
          src="/images/sealion-trust/Lo-fi.png"
          width={842}
          height={596}
        />
        <Image
          className={styles.image}
          alt="image1"
          src="/images/sealion-trust/Hi-fi.png"
          width={842}
          height={596}
        />
        <Image
          className={styles.image}
          alt="image1"
          src="/images/sealion-trust/Css meth.png"
          width={842}
          height={596}
        />
      </div>
    </div>
  );
}
