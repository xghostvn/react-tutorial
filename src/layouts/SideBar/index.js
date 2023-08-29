import "./styles.scss"
import logo from "../../assets/images/logo.svg"
import {useState} from "react";
const SideBar = (props) => {

    const [iconExpand, setIconExpand] = useState('fa-chevron-right');
    function changeIconExpand()  {
        setIconExpand("fa-chevron-down")
    }
    return (
        <div className="main_layout d-flex">
            <div id="sidebar">
                <div id="website_headerbar">
                    <i className="fa fa-th-large menu_icon" aria-hidden="true"></i>
                    <img src={logo}/>
                </div>
                <ul id="sidebar_menu">
                    <li className="navbar_item active">
                        <a href="#" className="nav_link">
                            <i className="fa fa-th-large menu_icon" aria-hidden="true"></i>
                            Dashboard</a>
                    </li>
                    <li className="navbar_categories">
                        <span>UI Elements</span>
                    </li>
                    <li className="navbar_item">
                        <a href="#" className="nav_link"><i className="fa fa-th-large menu_icon" aria-hidden="true"></i>
                            UI Elements
                        </a>
                        <i className={`fa ${iconExpand} expand_icon`} onClick={() =>{
                            changeIconExpand();
                        }} aria-hidden="true"></i>

                        
                    </li>
                    <li className="navbar_categories">
                        <span>FORMS AND DATAS</span>
                    </li>
                    <li className="navbar_item">
                        <a href="#" className="nav_link">     <i className="fa fa-th-large menu_icon" aria-hidden="true"></i>Form elements</a>
                    </li>
                </ul>
            </div>
            <div className="content">
               
            </div>
        </div>

    );
}


export default SideBar