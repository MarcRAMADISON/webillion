import Presentation from "../components/presentation/page";
import Welcome from "../components/welcome/page";
import styles from './lpDev.module.css';

function LpDev() {
    return ( <div className={styles.container}>
        <Welcome isLandingPage/>
        <Presentation isLandingPage type='DW'/>
    </div> );
}

export default LpDev;