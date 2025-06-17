"use client";

import { handleRedirect } from "@/app/utils";
import styles from "./menuBar.module.css";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

function MenuBar({redirect}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const router=useRouter()

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
      <div className={styles.newsletterContainer} style={{opacity: isScrolled ? 1 : 0, bottom:isScrolled ? '' : '-80px'}}>
        <h3 className={styles.newsletterTitle}>
          Inscrivez vous à notre newsletter et on vas construire votre{" "}
          <span style={{ color: "#00214d" }}>
            identité visuelle gratuitement
          </span>
        </h3>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            className={styles.inputField}
            placeholder="Votre adresse e-mail"
          />
          <Image
            style={{ marginTop: "15px", marginLeft: "10px", cursor: "pointer" }}
            src="/assets/sendIcon.png"
            alt="envoyer icone"
            width={35}
            height={25}
          />
        </div>
      </div>
      <div
        className={styles.mobileContainer}
        style={{ backgroundColor: isScrolled ? "#fff" : "transparent" }}
      >
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
      {open && (
        <div className={styles.menus}>
          <h2
            className={styles.mobileItem}
            onClick={() => {
              if(redirect){
                router.push("/")
              }
              handleRedirect("about");
              setOpen(false);
            }}
          >
            Qui nous sommes?
          </h2>
          <h2
            className={styles.mobileItem}
            onClick={() => {
              if(redirect){
                router.push("/")
              }
              handleRedirect("services");
              setOpen(false);
            }}
          >
            Nos services
          </h2>
          <h2
            className={styles.mobileItem}
            onClick={() => {
              if(redirect){
                router.push("/")
              }
              handleRedirect("offres");
              setOpen(false);
            }}
          >
            Offres
          </h2>
          <div
            style={{
              display: "flex",
              background:
                "linear-gradient(90deg,rgba(140, 82, 255, 1) 0%, rgba(92, 225, 230, 1) 100%)",
              alignItems: "center",
              marginTop: "40px",
              justifyContent: "center",
              padding: "20px 0px",
            }}
            onClick={() => {
              if(redirect){
                router.push("/")
              }
              handleRedirect("contact");
              setOpen(false);
            }}
          >
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

            <h2 className={styles.mobileItemLabel}>Demande de devis</h2>
          </div>
        </div>
      )}
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
          <h2 className={styles.item} onClick={() =>{
             if(redirect){
              router.push("/")
            }
            handleRedirect("about")
          } }>
            Qui nous sommes?
          </h2>
          <h2
            className={styles.item}
            onClick={() =>{
              if(redirect){
                router.push("/")
              }
              handleRedirect("services")
            } }
          >
            Nos services
          </h2>
          <h2 className={styles.item} onClick={() =>{
             if(redirect){
              router.push("/")
            }
            handleRedirect("offres")
          } }>
            Offres
          </h2>
          <div
            style={{ display: "flex" }}
            onClick={() =>{
              if(redirect){
                router.push("/")
              }
              handleRedirect("contact")
            } }
          >
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
