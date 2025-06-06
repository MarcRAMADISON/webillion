'use client';

import styles from "./services.module.css";
import Image from "next/image";
import { services } from "@/app/utils";
import { useRouter } from "next/navigation";

function Services() {
  const router=useRouter()

  const handleRedirect=(event,type)=>{
    event.preventDefault()

    if(type === 'CM'){
      router.push('/offreCM')
    } else if(type === 'DW'){
      router.push('/offreDW')
    } else if(type === "ADS"){
      router.push('/offreADS')
    } else{
      router.push('/offreIA')
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.services}>
        {services.map((service,index) => {
          return (
            <div key={index} className={styles.service} onClick={(e)=>handleRedirect(e,service.type)}>
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
