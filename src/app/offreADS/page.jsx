import MenuBar from "../components/menubar/page";
import styles from "./offreADS.module.css";
import Image from "next/image";

function OffreADS() {
  return (
    <>
      <MenuBar />
      <div className={styles.container}>
        <div className={styles.textContrainer}>
          <h1 className={styles.title}>
            🧠 Publicité Digitale Ciblée Google Ads – Facebook & Instagram Ads
            (Meta)
          </h1>
          <h2 className={styles.subTitle}>
            Objectif : Booster votre visibilité & vos conversions
          </h2>
          <h2 className={styles.subTitle}>
            Nous aidons les entreprises à atteindre leurs clients idéaux grâce à
            des campagnes publicitaires stratégiques et rentables sur Google,
            Facebook et Instagram.
          </h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className={styles.detailBlock}>
              <Image
                src="/assets/hand.png"
                width={40}
                height={30}
                alt="persons icon"
              />
              <div>
                <h3 className={styles.detailTitle}>Nos services incluent :</h3>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className={styles.dote}></div>
                  <h3 className={styles.detailSubTitle}>
                    Audit & stratégie personnalisée :{" "}
                  </h3>
                </div>
                <h3 className={styles.detailDescription}>
                  Rédaction de textes impactants, choix des visuels, ciblage
                  précis, mots-clés performants.
                </h3>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className={styles.dote}></div>
                  <h3 className={styles.detailSubTitle}>
                    {" "}
                    Optimisation continue :
                  </h3>
                </div>
                <h3 className={styles.detailDescription}>
                  Suivi des performances, ajustements réguliers et A/B testing
                  pour maximiser les résultats et réduire le coût par clic
                  (CPC).
                </h3>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className={styles.dote}></div>
                  <h3 className={styles.detailSubTitle}>
                    {" "}
                    Rapports clairs & transparents :
                  </h3>
                </div>
                <h3 className={styles.detailDescription}>
                  Accès à des tableaux de bord simples pour suivre vos résultats
                  et la rentabilité de vos campagnes.
                </h3>
              </div>
            </div>
            <div className={styles.detailBlock}>
              <Image
                src="/assets/personsIcon.png"
                width={40}
                height={30}
                alt="hande icon"
              />
              <div>
                <h3 className={styles.detailTitle}>
                  {" "}
                  À qui s’adresse ce service ?
                </h3>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    className={styles.dote}
                    style={{ backgroundColor: "#000" }}
                  ></div>
                  <h3 className={styles.detailDescription}>
                    Entrepreneurs et commerçants
                  </h3>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    className={styles.dote}
                    style={{ backgroundColor: "#000" }}
                  ></div>
                  <h3 className={styles.detailDescription}>
                    {" "}
                    Coachs, thérapeutes, professionnels du bien-être
                  </h3>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    className={styles.dote}
                    style={{ backgroundColor: "#000" }}
                  ></div>
                  <h3 className={styles.detailDescription}>
                    {" "}
                    Restaurants, boutiques, services locaux
                  </h3>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    className={styles.dote}
                    style={{ backgroundColor: "#000" }}
                  ></div>
                  <h3 className={styles.detailDescription}>
                    {" "}
                    E-commerces et prestataires de service
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/assets/ads_illustration.png"
            alt="services illustration"
            layout="fill"
            objectFit="contain"
            objectPosition="0% 50%"
          />
        </div>
      </div>
    </>
  );
}

export default OffreADS;
