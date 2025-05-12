import styles from "./services.module.css";
import Image from "next/image";
import { services } from "@/app/utils";

function Services() {
  return (
    <div className={styles.container}>
      <div className={styles.services}>
        {services.map((service,index) => {
          return (
            <div key={index} className={styles.service}>
              <div style={{ display: "flex",alignItems:'center', width: "100%" }}>
                <div className={styles.dote}></div>
                <h3 className={styles.title}>{service.title}</h3>
              </div>
              <h4 className={styles.description}>{service.description}</h4>
            </div>
          );
        })}
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/assets/services_illustration.png"
          alt="services illustration"
          layout="fill"
          objectFit="contain"
          objectPosition="50% 50%"
        />
      </div>
    </div>
  );
}

export default Services;
