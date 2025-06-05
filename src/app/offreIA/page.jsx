import Image from "next/image";
import MenuBar from "../components/menubar/page";
import styles from './offreIA.module.css';

function OffreIA() {
    return ( <div className={styles.container}>
        <MenuBar/>
        <div className={styles.block1}>
            <h3 className={styles.title}>Intelligence Artificielle</h3>
            <h3 className={styles.subTitle}>Intégrez la puissance de l’IA dans votre stratégie digitale</h3>
            <h3 className={styles.subTitle}>Chez Webillion, nous utilisons l’Intelligence Artificielle pour faire passer votre communication digitale à un niveau supérieur. Grâce à des outils intelligents, nous automatisons, personnalisons et optimisons vos actions marketing.</h3>
        </div>
        <div className={styles.imageContainer}>
            <Image src='/assets/phone_illustration.png' alt="phone illustration" layout="fill" objectFit="contain" />
        </div>
    </div> );
}

export default OffreIA;