import { useState } from "react";
import styles from "./carousel.module.css";

const Carousel = ({ children }) => {
  const [current, setCurrent] = useState(0);
  const length = children.length;

  const next = () => setCurrent((prev) => (prev + 1) % length);
  const prev = () => setCurrent((prev) => (prev - 1 + length) % length);
  return (
    <div className={styles.carousel}>
      <button className={styles.leftArrow} onClick={prev}>
        ‹
      </button>

      <div className={styles.slideWrapper}>
        {children.map((child, index) => {
          return (
            <div
              key={index}
              className={`${styles.slide} ${
                index === current ? styles.active : ""
              }`}
            >
              {index === current && child}
            </div>
          );
        })}
      </div>

      <button className={styles.rightArrow} onClick={next}>
        ›
      </button>
    </div>
  );
};

export default Carousel;
