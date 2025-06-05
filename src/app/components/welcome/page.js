import Image from "next/image";
import styles from "./page.module.css";

export default function Welcome() {
  return (
    <div className={styles.container}>
        <div className={styles.block1}>
          <h1 className={styles.title}>L’innovation digitale au service de votre succès.</h1>
          <h2 className={styles.subTitle}>Dominez le web avec des campagnes ciblées, un site web optimisé et une stratégie digitale pensée pour votre succès.</h2>
          <div className={styles.sloganContainer}>
            <div className={styles.contactButton}>Nous contacter</div>
            <Image src='/assets/play_button.png' alt='play button' width={60} height={60} className={styles.play}/>
            <h3 className={styles.slogan}> Innovation , engagement ,  Performance</h3>
          </div>
          <h2 className={styles.subTitle} style={{marginTop:'10px'}}>Votre partenaire de confiance pour une visibilité digitale efficace et percutante</h2>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/assets/person1.png"
            alt="person"
            layout="fill"
            objectFit="contain"
            objectPosition="100% 100%"
          />
        </div>
      
    </div>
  );
}
