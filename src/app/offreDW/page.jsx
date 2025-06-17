import Animation from "../components/animation/page";
import MenuBar from "../components/menubar/page";
import styles from "./offreDW.module.css";
import Image from "next/image";

function OffreDW() {
  return (
    <>
    <MenuBar redirect={true}/>
    <div className={styles.container}>
      <Animation animation="fadeInRight" className={styles.textContrainer}>
        <h1 className={styles.title}>
          Développement Web & Mobile : Des solutions sur mesure pour votre
          activité
        </h1>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2 className={styles.subTitle}>
            <div className={styles.dote}></div>Site Vitrine (À partir de 260 €,
            selon votre demande et vos besoins)
          </h2>
          <h3 className={styles.description}>
            Un site vitrine est idéal pour présenter votre entreprise, vos
            services et vos valeurs. Il vous permet d’avoir une présence en
            ligne professionnelle et de capter l’attention de vos prospects avec
            un design attractif et du contenu pertinent.
          </h3>
        </div>
        <div style={{ display: "flex", flexDirection: "column",marginTop:"30px" }}>
          <h2 className={styles.subTitle}>
            <div className={styles.dote}></div>Site de réservation
          </h2>
          <h3 className={styles.description}>
            Parfait pour les hôtels, restaurants, instituts de beauté ou tout
            service nécessitant une prise de rendez-vous en ligne. Nous
            intégrons un système de réservation intuitif qui simplifie la
            gestion de vos clients et optimise votre activité.
          </h3>
        </div>
        <div style={{ display: "flex", flexDirection: "column",marginTop:"30px" }}>
          <h2 className={styles.subTitle}>
            <div className={styles.dote}></div>Site E-commerce
          </h2>
          <h3 className={styles.description}>
            Vous souhaitez vendre vos produits en ligne ? Nous créons une
            boutique e-commerce sur mesure avec un design moderne, une
            navigation fluide et des fonctionnalités adaptées (gestion des
            paiements, suivi des commandes, catalogue produit optimisé, etc.).
          </h3>
        </div>
        <div style={{ display: "flex", flexDirection: "column",marginTop:"30px" }}>
          <h2 className={styles.subTitle}>
            <div className={styles.dote}></div> Site Personnalisé
          </h2>
          <h3 className={styles.description}>
            Vous avez des besoins spécifiques ? Nous développons un site sur
            mesure avec des fonctionnalités avancées (espace membre, plateforme
            interactive, extranet, etc.), entièrement adapté à votre activité.
          </h3>
        </div>
        <div style={{ display: "flex", flexDirection: "column",marginTop:"30px" }}>
          <h2 className={styles.subTitle}>
            <div className={styles.dote}></div> application mobile
          </h2>
          <h3 className={styles.description}>
            Démarquez-vous avec une application mobile performante et intuitive
            ! Que ce soit pour un service de réservation, un e-commerce ou une
            plateforme interactive, nous développons des applications natives ou
            hybrides adaptées à votre entreprise et aux besoins de vos
            utilisateurs. Nous nous occupons de tout, du design à la mise en
            ligne, pour vous offrir une solution digitale clé en main, moderne
            et efficace !
          </h3>
        </div>
      </Animation>
      <Animation animation="fadeInLeft" className={styles.imageContainer}>
        <Image
          src="/assets/services_illustration.png"
          alt="services illustration"
          layout="fill"
          objectFit="contain"
          objectPosition="0% 50%"
        />
      </Animation>
    </div>
    </>
   
  );
}

export default OffreDW;
