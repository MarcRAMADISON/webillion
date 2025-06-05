"use client";

import styles from "./menuBar.module.css";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";

function MenuBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={styles.mobileContainer} style={{backgroundColor: isScrolled ? '#fff' : 'transparent'}}>
        <div style={{ width: "100px", height: "70px", position: "relative" }}>
          <Image
            src="/assets/logo_webillion.png"
            alt="web billion logo"
            layout="fill"
            objectFit="contain"
          />
          <div className={styles.buttonContainer}>
            <button
              className={`${styles.burger} ${open ? styles.open : ""}`}
              onClick={() => setOpen(!open)}
              aria-label={open ? "Fermer menu" : "Ouvrir menu"}
              aria-expanded={open}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
      {open && <div className={styles.menus}>
          
      </div>}
      <div
        className={`${styles.menuContainer} ${
          isScrolled ? styles.scrolled : ""
        }`}
        id="mainHeader"
      >
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
            <div
              style={{
                width: "30px",
                height: "30px",
                marginRight: "10px",
                position: "relative",
              }}
            >
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
    </>
  );
}

export default MenuBar;
