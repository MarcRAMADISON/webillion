import styles from "./menuBar.module.css";
import Image from "next/image";

function MenuBar() {
  return (
    <div className={styles.menuContainer}>
      <div style={{ width: "150px", height: "100px", position: "relative" }}>
        <Image
          src="/assets/logo_webillion.png"
          alt="web billion logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={styles.menuItems}>
        <h2 className={styles.item}>Qui nous sommes?</h2>
        <h2 className={styles.item}>Nos services</h2>
        <h2 className={styles.item}>Avis</h2>
        <div style={{ display: "flex" }}>
          <div style={{ width: "30px", height: "30px",marginRight:'10px', position: "relative" }}>
            <Image
              src="/assets/devis.png"
              alt="web billion logo"
              layout="fill"
              objectFit="contain"
            />
          </div>

          <h2 className={styles.item}>Demande de devis</h2>
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
