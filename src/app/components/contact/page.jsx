"use client";

import Image from "next/image";
import styles from "./contact.module.css";
import Animation from "../animation/page";
import { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

function Contact() {
  const [values, setValues] = useState({
    name: "",
    prenom: "",
    email: "",
    telephone: "",
    message: "",
  });

  const handleChange = (e) => {
    e.preventDefault();

    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSend = () => {
    emailjs
      .send("service_5z97bw4", "template_5i1z7ln", values, "8fg6gI1O_wlTsVC1i")
      .then(
        (result) => {
          Swal.fire({
            title: "Devis envoyé!",
            text: "Votre devis a été envoyé, on reviendra vers vous le plus tôt possible",
            icon: "success",
          });
          setValues({
            name: "",
            prenom: "",
            email: "",
            telephone: "",
            message: "",
          });
        },
        (error) => {
          Swal.fire({
            title: "Devis non envoyé!",
            text: "Une erreur est survenu lors de l'envoie de votre devis",
            icon: "error",
          });
        }
      );
  };

  const checkValidation =
    values.name &&
    values.prenom &&
    values.email &&
    values.message &&
    values.telephone;

  return (
    <div className={styles.container} id="contact">
      <Animation animation="fadeInRight" className={styles.contactForm}>
        <h3 className={styles.titleContact}>Demander un devis</h3>
        <div className={styles.block1}>
          <div className={styles.inputLine}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3 className={styles.label}>Nom :</h3>
              <input
                className={styles.inputField}
                name="name"
                value={values.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.inputLine}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3 className={styles.label}>Prénom :</h3>
              <input
                className={styles.inputField}
                name="prenom"
                value={values.prenom}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.inputLine}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3 className={styles.label}>Téléphone :</h3>
              <input
                className={styles.inputField}
                name="telephone"
                value={values.telephone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.inputLine}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3 className={styles.label}>Adresse E-mail :</h3>
              <input
                className={styles.inputField}
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className={styles.block1Message} style={{ marginTop: "17px" }}>
          <div className={styles.inputLine}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3 className={styles.label} style={{marginBottom:"10px"}}>
                Message : description de votre demande
              </h3>
              <textarea
                rows={10}
                className={styles.inputAreaField}
                name="message"
                value={values.message}
                onChange={handleChange}
              />
            </div>
          </div>
          {checkValidation ? (
            <div className={styles.bouton} onClick={handleSend}>
              Envoyer
            </div>
          ) : (
            <></>
          )}
        </div>
      </Animation>
      <Animation animation="fadeInLeft" className={styles.contact}>
        <h2 className={styles.title}>Nous contacter</h2>
        <h3 className={styles.subtitle}>
          Vous avez un projet en tête ? Besoin d’un accompagnement sur-mesure ou
          d’une estimation claire ? Notre équipe est à votre écoute pour vous
          proposer une solution adaptée à vos besoins.
        </h3>
        <h3 className={styles.subtitle} style={{ fontWeight: "bold" }}>
          Remplissez le formulaire, on s’occupe du reste.
        </h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            marginTop: "60px",
          }}
        >
          <Image
            src="/assets/mail.png"
            width={40}
            height={40}
            alt="call icon"
            style={{ marginRight: "20px" }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h3 className={styles.contactTitle}>E-mail</h3>
            <h3 className={styles.contactSubTitle}>
              communitymanagerwebillion.com
            </h3>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            marginTop: "30px",
          }}
        >
          <Image
            src="/assets/call.png"
            width={40}
            height={40}
            alt="call icon"
            style={{ marginRight: "20px" }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h3 className={styles.contactTitle}>Téléphone</h3>
            <h3 className={styles.contactSubTitle}>+261 32 36 662 02</h3>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "60px" }}>
          <Image
            src="/assets/facebook.png"
            width={40}
            height={40}
            alt="call icon"
            style={{ marginRight: "40px" }}
          />
          <Image
            src="/assets/instagram.png"
            width={40}
            height={40}
            alt="call icon"
            style={{ marginRight: "40px" }}
          />
          <Image
            src="/assets/linkedin.png"
            width={40}
            height={40}
            alt="call icon"
            style={{ marginRight: "40px" }}
          />
          <Image
            src="/assets/tiktok.png"
            width={40}
            height={40}
            alt="call icon"
            style={{ marginRight: "40px" }}
          />
        </div>
      </Animation>
    </div>
  );
}

export default Contact;
