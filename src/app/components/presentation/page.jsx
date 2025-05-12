import Image from 'next/image';
import styles from './presentation.module.css'

function Presentation() {
    return ( <div className={styles.container}>
        <div className={styles.imageContainer}>
            <Image src='/assets/team_illustration.png' alt='team illustration' layout='fill' objectFit='contain' objectPosition='90% 0%'/>
        </div>
        <div className={styles.textContainer}>
            <h1 className={styles.title}> Qui sommes nous?</h1>
            <h2 className={styles.subTitle}>
            Nous sommes une agence de communication et marketing digital dédiée à la croissance de votre marque en ligne. Avec expertise et créativité, nous vous accompagnons dans le Community Management, Google Ads, Développement Web et Intelligence Artificielle pour maximiser votre impact digital. Notre mission : bâtir une présence forte, authentique et performante en alliant stratégie, innovation et engagement. Faites confiance à notre savoir-faire pour transformer votre visibilité en succès.
            </h2>
            <div className={styles.containerSlogan}>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <div className={styles.iconContainer}>
                        <Image src='/assets/icon1.png' alt='icon' layout='fill' objectFit='contain'/>
                    </div>
                    <h3 className={styles.slogan}>Innovation</h3>
                </div>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <div className={styles.iconContainer}>
                        <Image src='/assets/icon2.png' alt='icon' layout='fill' objectFit='contain'/>
                    </div>
                    <h3 className={styles.slogan}>Engagement</h3>
                </div>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <div className={styles.iconContainer}>
                        <Image src='/assets/icon3.png' alt='icon' layout='fill' objectFit='contain'/>
                    </div>
                    <h3 className={styles.slogan}>Performance</h3>
                </div>
            </div>
        </div>
    </div> );
}

export default Presentation;