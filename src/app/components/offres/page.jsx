"use client";

import { offres } from "@/app/utils";
import styles from "./offres.module.css";
import Image from "next/image";
import Animation from "../animation/page";
import { useState } from "react";
import Modal from "../Modal/page";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

function Offres() {
  const [showModal, setShowModal] = useState(false);
  const [currentOffre, setCurrentOffre] = useState({});
  const [values, setValues] = useState({ offre: "", name: "", email: "" });

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSend = () => {
    emailjs
      .send(
        "service_a5cyvzw",
        "template_ai8bue5",
        { ...values, offre: currentOffre?.offre },
        "KJNBUweIA7u6p28Io"
      )
      .then(
        (result) => {
          Swal.fire({
            title: "Demande envoyée!",
            text: "Votre demande a été envoyé, on reviendra vers vous le plus tôt possible",
            icon: "success",
          });
          setValues({
            offre: "",
            name: "",
            email: "",
          });
        },
        (error) => {
          Swal.fire({
            title: "Demande non envoyé!",
            text: "Une erreur est survenu lors de l'envoie de votre demande",
            icon: "error",
          });
        }
      );
    setShowModal(false);
  };

  return (
    <>
      <Modal onClose={() => setShowModal(false)} show={showModal}>
        <h1 className={styles.modalTitle}>
          Réserver offre{" "}
          <span style={{ color: "#00214d", fontStyle: "italic" }}>
            {currentOffre.offre}
          </span>
        </h1>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h3 className={styles.label}>Nom complet:</h3>
            <input
              className={styles.inputField}
              name="name"
              value={values.name}
              onChange={handleChange}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h3 className={styles.label}>E-mail :</h3>
            <input
              className={styles.inputField}
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div className={styles.validButton} onClick={handleSend} >Valider</div>
        </div>
      </Modal>
      <div className={styles.container} id="offres">
        <h1 className={styles.title}>Nos offres</h1>
        <h3 className={styles.subTitle}>
          Nous lançons des packs sur-mesure pour les entrepreneurs, thérapeutes,
          restaurateurs, coachs, et tout professionnel souhaitant gagner en
          visibilité, en crédibilité et en clients. Profitez de cette offre
          limitée pour poser les bases d’une communication puissante… sans
          exploser votre budget.
        </h3>
        <div className={styles.cardContainer}>
          {offres.map((offre, index) => {
            let nbStar = 0;
            if (offre.offre === "Lancement") {
              nbStar = 1;
            } else if (offre.offre === "Startup") {
              nbStar = 2;
            } else {
              nbStar = 3;
            }

            return (
              <Animation animation="fadeInUp" key={index}>
                <div className={styles.header}>
                  <div style={{ display: "flex", marginBottom: "10px" }}>
                    {[...new Array(nbStar)].map((n, index) => {
                      return (
                        <Image
                          key={index}
                          alt="star"
                          src="/assets/star.png"
                          width={20}
                          height={20}
                        />
                      );
                    })}
                  </div>
                  <h3 className={styles.label} style={{fontWeight:"600",fontSize:'1.1rem'}}>Offre</h3>
                  <h2 className={styles.offre}>{offre.offre}</h2>
                </div>
                <div className={styles.bodyCard}>
                  <h3 className={styles.price}>{offre.price}€</h3>
                  {offre.descriptions.map((description, index) => {
                    return (
                      <div style={{display:"flex",alignItems:"flex-start",marginTop: '10px'}}>✅
                  <h3 key={index} className={styles.description}>
                    {description}
                  </h3>
                  </div>
                    );
                  })}
                  <h3 className={styles.info}>
                    💡 Idéal pour professionnaliser votre image, attirer vos
                    clients cibles et automatiser les premières prises de
                    contact.
                  </h3>
                  <div
                    className={styles.button}
                    onClick={() => {
                      setCurrentOffre(offre);
                      setShowModal(true);
                    }}
                  >
                    Réserver votre formule
                  </div>
                </div>
                <div className={styles.onglet1}></div>
              </Animation>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Offres;
