"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Animation from "../animation/page";
import { useState } from "react";
import Modal from "../Modal/page";
import Carousel from "../carousel/page";

export default function Welcome() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <video
          src="/assets/presentation_webillion.mp4"
          controls
          autoPlay
          muted
          loop
          style={{ width: "100%", borderRadius: "10px" }}
        />
      </Modal>
      <Carousel>
        {[
          <div key="1" className={styles.container}>
            <Animation className={styles.block1} animation="fadeInRight">
              <h1 className={styles.title}>
                L’innovation digitale au service de votre succès.
              </h1>
              <h2 className={styles.subTitle}>
                TON BUSINESS EN LIGNE COMMENCE ICI : DU SITE AUX RÉSEAUX, nous transformons votre présence digitale en machine à vendre.
              </h2>
              <h2 className={styles.subTitle} style={{ marginTop: "40px" }}>
                Nous vous accompagnons de A à Z : création de site, stratégie digitale, gestion des réseaux sociaux, génération de trafic et conversions.
              </h2>
              <div className={styles.sloganContainer}>
                <div className={styles.contactButton}>Objectif : rentabilité</div>
                <Image
                  src="/assets/play_button.png"
                  alt="play button"
                  width={60}
                  height={60}
                  className={styles.play}
                  onClick={() => setOpenModal(true)}
                />
                <h3 className={styles.slogan}>
                  {" "}
                  Innovation , engagement , Performance
                </h3>
              </div>
              <h2 className={styles.subTitle} style={{ marginTop: "10px",marginRight:"30px" }}>
                Votre partenaire de confiance pour une visibilité digitale
                efficace et percutante
              </h2>
            </Animation>
            <Animation className={styles.imageContainer} animation="fadeInUp">
              <Image
                src="/assets/person1.png"
                alt="person"
                layout="fill"
                objectFit="contain"
                objectPosition="100% 100%"
              />
            </Animation>
          </div>,
          <div key="2" className={styles.containerVideo}>
            <video
              src="/assets/presentation_webillion.mp4"
              controls
              autoPlay
              muted
              loop
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </div>,
        ]}
      </Carousel>
    </>
  );
}
