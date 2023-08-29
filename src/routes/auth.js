
import App from "../App";
import HOME from "../layouts/Home";
import LoginLayout from "../layouts/LoginLayouts";
import { NOT_FOUND } from "redux-first-router";
const routeMaps = {
    LOGIN_PAGE : {
        path : "/login",
        component : "LoginLayouts", 
        saga : () => {
            console.log("login")
        }
    },
    HOME_PAGE : {
        path : "/Home",
        component :"Home", 
        saga : () => {
            console.log("home");
        }
    },
    [NOT_FOUND] : {
        path : "not_found",
        saga : () => {
            console.log("not found");
        }
    },
    MAIN_LAYOUT : {
        path : "/main",
        component : "Main"
    },
    SIDE_BAR : {
        path : "/sidebar",
        component : "SideBar"
    },
    DASH_BOARD : {
        path : "/dashboard",
        component : "DashBoard"
    }
}



export default routeMaps