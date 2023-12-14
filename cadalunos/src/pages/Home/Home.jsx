import styles from "./Home.module.css";




//Components
import Students from "../../components/Students/Students";
import NavSideBar from "../../components/NavSideBar/NavSideBar";

const Home = () => {

  return (
    <div className={styles.homeContainer}>
      <NavSideBar />
      <div className={styles.homeDashboard}>
       <Students />

      </div>
    </div>
  )
}

export default Home