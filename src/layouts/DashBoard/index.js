

import SideBar from "../SideBar";
import styles from "./styles.module.scss"
import "./styles.scss"
import '@fortawesome/fontawesome-free/css/all.min.css';



const DashBoardLayouts = () => {
    return (
        <SideBar>
            <div>
                <div className="navbar_menu d-flex">
                        <div className="welcome">
                            <h1>Good Morning, John Doe</h1>
                            <h4>Your performance summary this week</h4>
                        </div>
                        <div className="ms-auto">
                            <select className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                </div>
            </div>
        </SideBar>
    )
}

export default DashBoardLayouts