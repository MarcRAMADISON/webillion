import { offresCM } from "@/app/utils";
import styles from "./offreCM.module.css";
import Image from "next/image";

function OffreCM() {
  return (
    <div className={styles.container}>
      <div className={styles.block1}>
        <h1 className={styles.title}>
          Nos meilleurs services de community manager
        </h1>
        <h2 className={styles.subTitle}>
          Pour un tarif spécial de 250€ au lieu de 300€, bénéficiez d’une
          gestion complète de 2 réseaux sociaux au choix avec :
        </h2>
        <div className={styles.offres}>
          <div className={styles.offre}>
            {offresCM.map((offre) => {
              return (
                <div className={styles.offreContainer}>
                  <h2 className={styles.offreTitle}>{offre.title}</h2>
                  {offre.offres.map((o) => {
                    return <div style={{display:"flex",alignItems:"center"}}>
                        <div className={styles.dote}></div>
                        <span className={styles.offreDesc}>{o}</span>
                        </div>
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/assets/illustrationCM.png"
          alt="illustration CM"
          layout="fill"
          objectFit="contain"
          objectPosition="right top"
        />
      </div>
    </div>
  );
}

export default OffreCM;
