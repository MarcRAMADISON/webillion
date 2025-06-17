import Image from "next/image";
import styles from "./contact.module.css";
import Animation from "../animation/page";

function Contact() {
  return (
    <div className={styles.container} id="contact">
      <Animation animation="fadeInRight" className={styles.contactForm}>
        <h3 className={styles.titleContact}>Demander un devis</h3>
        <div className={styles.block1}>
          <div className={styles.inputLine}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3 className={styles.label}>Nom :</h3>
              <input className={styles.inputField} />
            </div>
          </div>
          <div className={styles.inputLine}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3 className={styles.label}>Nom :</h3>
              <input className={styles.inputField} />
            </div>
          </div>
          <div className={styles.inputLine}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3 className={styles.label}>Nom :</h3>
              <input className={styles.inputField} />
            </div>
          </div>
          <div className={styles.inputLine}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3 className={styles.label}>Nom :</h3>
              <input className={styles.inputField} />
            </div>
          </div>
          <div className={styles.inputLine}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3 className={styles.label}>Nom :</h3>
              <input className={styles.inputField} />
            </div>
          </div>
          <div className={styles.inputLine}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3 className={styles.label}>Nom :</h3>
              <input className={styles.inputField} />
            </div>
          </div>
        </div>
        <div className={styles.block2}>
          <div className={styles.inputLine}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3 className={styles.label}>Nom :</h3>
              <input className={styles.inputField} />
            </div>
          </div>
          <div className={styles.inputLine}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3 className={styles.label}>Nom :</h3>
              <input className={styles.inputField} />
            </div>
          </div>
          <div className={styles.inputLine}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3 className={styles.label}>Nom :</h3>
              <input className={styles.inputField} />
            </div>
          </div>
        </div>
        <div className={styles.block1Message} style={{ marginTop: "17px" }}>
          <div className={styles.inputLine}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3 className={styles.label}>Nom :</h3>
              <textarea rows={10} className={styles.inputAreaField} />
            </div>
          </div>
          <div className={styles.bouton}>Envoyer</div>
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
