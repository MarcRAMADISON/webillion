import Image from "next/image";
import styles from "./page.module.css";
import Welcome from "./components/welcome/page";
import MenuBar from "./components/menubar/page";

export default function Home() {
  return (
    <div className={styles.container}>
      <MenuBar/>
        <Welcome/>
      
    </div>
  );
}
