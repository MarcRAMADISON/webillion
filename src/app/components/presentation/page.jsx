import Image from "next/image";
import styles from "./presentation.module.css";
import Animation from "../animation/page";

function Presentation() {
  return (
    <div className={styles.container} id="about">
      <Animation className={styles.imageContainer} animation="fadeInRight">
        <Image
          src="/assets/team_illustration.png"
          alt="team illustration"
          layout="fill"
          objectFit="contain"
          objectPosition="90% 0%"
        />
      </Animation>
      <Animation className={styles.textContainer} animation="fadeInLeft">
        <h1 className={styles.title}> Qui sommes nous?</h1>
        <h2 className={styles.subTitle}>
          Webillien est une agence de communication et de marketing digital
          dédiée à la croissance de votre présence en ligne. Nous créons des
          sites web sur mesure, gérons vos réseaux sociaux, lançons vos
          campagnes Google Ads et intégrons l’intelligence artificielle à votre
          stratégie. <span style={{fontWeight:'bold'}}>👉 Nous transformons votre présence digitale en véritable
          machine à vendre</span>, grâce à des sites performants, une communication
          stratégique et des actions marketing ciblées. Notre mission : bâtir
          une image forte, authentique et rentable pour votre marque. De la
          conception à la conversion, nous vous accompagnons de A à Z. Objectif
          : visibilité, impact et résultats concrets.
        </h2>
        <div className={styles.containerSlogan}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className={styles.iconContainer}>
              <Image
                src="/assets/icon1.png"
                alt="icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className={styles.slogan}>Innovation</h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className={styles.iconContainer}>
              <Image
                src="/assets/icon2.png"
                alt="icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className={styles.slogan}>Engagement</h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className={styles.iconContainer}>
              <Image
                src="/assets/icon3.png"
                alt="icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className={styles.slogan}>Performance</h3>
          </div>
        </div>
      </Animation>
    </div>
  );
}

export default Presentation;
