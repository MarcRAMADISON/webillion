"use client";

import Image from "next/image";
import styles from "./presentation.module.css";
import Animation from "../animation/page";
import Modal from "../Modal/page";
import { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const descriptionsCM = [
  "Contenus qui créent l'engagement: Nous créons des posts sur mesure qui attirent, captivent et incitent votre audience à l'action. Fini les publications qui passent inaperçues.",
  "Gestion complète et simplifiée: Nous prenons en charge la planification et les interactions, pour que votre communauté reste vivante et engagée, sans effort de votre part.",
  "Stratégie sur mesure et résultats garantis: Nous élaborons un plan d'action unique, basé sur vos objectifs, pour une croissance ciblée et mesurable.",
  "Toujours un coup d'avance sur la concurrence: Nous surveillons vos rivaux pour saisir chaque opportunité et vous positionner en leader.",
  "Des résultats en toute transparence: Des rapports simples et clairs vous montrent l'impact de nos actions pour une croissance visible et mesurable",
];

const descriptionsDW = [
  "Design personnalisé & UX de pointe : Un site unique qui reflète votre marque et offre une expérience utilisateur parfaite, conçue pour convertir.",
  "Performance & Sécurité : Un site ultra-rapide et sécurisé qui inspire confiance, sur tous les appareils.",
  "Expertise SEO intégrée : Un site visible sur Google, qui attire un flux constant de prospects qualifiés.",
  "Solution clé en main & évolutive : Nous vous livrons un site prêt à l'emploi, conçu pour grandir avec votre entreprise.",
];

function Presentation({ isLandingPage = false, type }) {
  const [showModal, setShowModal] = useState(false);
  const [values, setValues] = useState({
    offre: type === "CM"? "Community management" : "Développement web",
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSend = () => {
    emailjs
      .send("service_a5cyvzw", "template_ai8bue5", values, "KJNBUweIA7u6p28Io")
      .then(
        (result) => {
          Swal.fire({
            title: "Demande envoyée!",
            text: "Votre demande a été envoyé, on reviendra vers vous le plus tôt possible",
            icon: "success",
          });
          setValues({
            offre: type === "CM"? "Community manager" : "Développement web",
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
            {type === "CM" ? "Community Management" : "Développement web"}
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
          <div className={styles.validButton} onClick={handleSend}>
            Valider
          </div>
        </div>
      </Modal>
      <div className={styles.container} id="about">
        {isLandingPage ? (
          <Animation animation="fadeInRight">
            <div className={styles.header}>
              <div style={{ display: "flex", marginBottom: "10px" }}>
                {[...new Array(1)].map((n, index) => {
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
              <h2 className={styles.offre}>
                {type === "CM" ? "Community Management" : "Développement web"}
              </h2>
            </div>
            <div className={styles.bodyCard}>
              {type == 'CM' ? <h3 className={styles.price}>À partir de 250€ / Mois</h3> : <div style={{marginTop:"30px"}}></div>}
              {(type === 'CM'? descriptionsCM : descriptionsDW).map((description, index) => {
                return (
                  <div key={index} style={{display:"flex",alignItems:"flex-start",marginTop: '10px'}}>✅
                  <h3 className={styles.description}>
                    {description}
                  </h3>
                  </div>
                );
              })}
              <h3 className={styles.info}>
                👉 Prenez le contrôle de votre croissance. Réservez votre
                consultation gratuite maintenant.
              </h3>
              <div className={styles.button} onClick={() => setShowModal(true)}>
                Réserver votre formule
              </div>
            </div>
          </Animation>
        ) : (
          <Animation className={styles.imageContainer} animation="fadeInRight">
            <Image
              src="/assets/team_illustration.png"
              alt="team illustration"
              layout="fill"
              objectFit="contain"
              objectPosition="90% 0%"
            />
          </Animation>
        )}
        <Animation className={styles.textContainer} animation="fadeInLeft">
          <h1 className={styles.title}> Qui sommes nous?</h1>
          <h2 className={styles.subTitle}>
            Webillien est une agence de communication et de marketing digital
            dédiée à la croissance de votre présence en ligne. Nous créons des
            sites web sur mesure, gérons vos réseaux sociaux, lançons vos
            campagnes Google Ads et intégrons l’intelligence artificielle à
            votre stratégie.
            <span style={{ fontWeight: "bold" }}>
              👉 Nous transformons votre présence digitale en véritable machine
              à vendre
            </span>
            , grâce à des sites performants, une communication stratégique et
            des actions marketing ciblées. Notre mission : bâtir une image
            forte, authentique et rentable pour votre marque. De la conception à
            la conversion, nous vous accompagnons de A à Z. Objectif :
            visibilité, impact et résultats concrets.
          </h2>
          <div className={styles.containerSlogan}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className={styles.iconContainer}>
                <Image
                  src="/assets/icon1.png"
                  alt="icon"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3 className={styles.slogan}>Innovation</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className={styles.iconContainer}>
                <Image
                  src="/assets/icon2.png"
                  alt="icon"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3 className={styles.slogan}>Engagement</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className={styles.iconContainer}>
                <Image
                  src="/assets/icon3.png"
                  alt="icon"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3 className={styles.slogan}>Performance</h3>
            </div>
          </div>
        </Animation>
      </div>
    </>
  );
}

export default Presentation;
