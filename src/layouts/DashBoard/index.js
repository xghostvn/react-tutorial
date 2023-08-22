

import styles from "./styles.module.scss"
import "./styles.scss"
import '@fortawesome/fontawesome-free/css/all.min.css';



const DashBoardLayouts = () => {
    return (
        <div id={`${styles.sidebar}`} className="d-flex flex-column">
            <div>
                <a id="website_title">
                  <i class="fa-solid fa-bars"></i>
                  <span >Star<span style={{color : "blue", padding : "0"}}>Admin</span></span>
                </a>
        
            </div>
            <ul className={styles.nav}>
                <li className={`${styles.nav_item}`}>
                    <a className={`${styles.nav_link}`}>
                        <i class="fa-solid fa-table-cells-large"></i>
                        <span>  DashBoard</span>
                    </a>
                </li>
                <li className={`${styles.nav_item} ${styles.active}`}>
                    <a className={`${styles.nav_link}`}>
                        <i class="fa-solid fa-table-cells-large"></i>
                        <span>  DashBoard</span>
                    </a>
                </li>

                <li className={`${styles.nav_item}`}>
                    <a className={`${styles.nav_link}`}>
                        <i class="fa-solid fa-table-cells-large"></i>
                        <span>  DashBoard</span>
                    </a>
                </li>
                
            </ul>
        </div>
    )
}

export default DashBoardLayouts