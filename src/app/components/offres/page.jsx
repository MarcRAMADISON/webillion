import { offres } from '@/app/utils';
import styles from './offres.module.css'
import Image from 'next/image';
import Animation from '../animation/page';

function Offres() {
    return ( <div className={styles.container} id="offres">
        <h1 className={styles.title}>Nos offres</h1>
        <h3 className={styles.subTitle}>Nous lançons des packs sur-mesure pour les entrepreneurs, thérapeutes, restaurateurs, coachs, et tout professionnel souhaitant gagner en visibilité, en crédibilité et en clients.
        Profitez de cette offre limitée pour poser les bases d’une communication puissante… sans exploser votre budget.</h3>
        <div className={styles.cardContainer}>
        {
            offres.map((offre,index)=>{
                let nbStar=0
                if(offre.offre === 'Lancement'){
                    nbStar=1
                } else if(offre.offre === 'Startup'){
                    nbStar=2
                } else{
                    nbStar=3
                }

                return <Animation animation='fadeInUp' key={index}>
                    <div className={styles.header}>
                        <div style={{display:"flex",marginBottom:'10px'}}>
                        {[...new Array(nbStar)].map((n,index)=>{
                            return <Image key={index} alt="star" src="/assets/star.png" width={20} height={20}/>
                        })}
                        </div>
                        <h3 className={styles.label}>Offre</h3>
                        <h2 className={styles.offre}>{offre.offre}</h2>
                    </div>
                    <div className={styles.bodyCard}>
                        <h3 className={styles.price}>{offre.price}€</h3>
                        {
                            offre.descriptions.map((description,index)=>{
                                return <h3 key={index} className={styles.description}>{description}</h3>
                            })
                        }
                        <h3 className={styles.info}>💡 Idéal pour professionnaliser votre image, attirer vos clients cibles et automatiser les premières prises de contact.</h3>
                        <div className={styles.button}>
                        Réserver votre formule
                        </div>
                    </div>
                    <div className={styles.onglet1}></div>

                </Animation>
            })
        }
        </div>

    </div> );
}

export default Offres;