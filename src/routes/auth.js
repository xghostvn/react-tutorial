
import App from "../App";
import HOME from "../layouts/Home";
import LoginLayout from "../layouts/LoginLayouts";

const routeMaps = {
    LOGIN_PAGE : {
        path : "/login",
        saga : () => {
            console.log("login")
        }
    },
    HOME_PAGE : {
        path : "/Home",
        saga : () => {
            console.log("home");
        }
    },
    NOT_FOUND : {
        path : "not_found",
        saga : () => {
            console.log("not found");
        }
    }
}



export default routeMaps