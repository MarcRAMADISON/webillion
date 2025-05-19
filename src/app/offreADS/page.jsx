import MenuBar from '../components/menubar/page';
import styles from './offreADS.module.css'
import Image from 'next/image';

function OffreADS() {
    return ( <>
        <MenuBar/>
        <div className={styles.container}>
          <div className={styles.textContrainer}>
            <h1>🧠 Publicité Digitale Ciblée
            Google Ads – Facebook & Instagram Ads (Meta)</h1>
            <h2></h2>
            
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
        </> );
}

export default OffreADS;