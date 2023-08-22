

import styles from "./styles.module.scss"
import "./styles.scss"
import { useEffect, useState } from "react"
import banner_login from "../../assets/images/banner_login.webp"

import { API_LOGIN } from "../../plugin/api"

import { SidebarProvider } from "../SideBar"
import { useSidebar } from '../SideBar';

const LoginLayout = ({testdata}) =>
{
    // const { isSidebarOpen, toggleSidebar } = useSidebar();
    const [data, setData] = useState(1);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    console.log(testdata, "testdata");
    useEffect(() => {
        return () => {
        };
      }, []); 
      function handleLogin() {
        global.$request.post(API_LOGIN, {
            email : email,
            password : password
        })
      }
    //   console.log(isSidebarOpen)
    return (
        
<div className={`${styles.src_login}`}>
              <div className={`container d-flex justify-content-center`}>
                    <div className="main d-flex flex-row">
                     
                        <div className={`banner d-flex justify-content-center align-items-center`}>
                            <img src={banner_login}></img>
                        </div>
                        <form className={`${styles.login_form} `}>
                            <div className={`${styles["form-group"]}`}>
                                    <h1>Member Login</h1>
                            </div>

                            <div className={`login_form ${styles["form-group"]}`}>
                                <label>Email</label>
                                <input onChange={(e)=> {
                                    console.log(e)
                                    setEmail(e.target.value)
                                }} className="form-control " type="text" name="email"></input>
                            </div>

                            <div className={`login_form ${styles["form-group"]}`}>
                                <label>Password</label>
                                <input onChange={(e) => {
                                    setPassword(e.target.value)
                                }} className="form-control" type="password" name="email"></input>
                            </div>

                            <div className={`login_form ${styles["form-group"]}`}>
                                <button  onClick={handleLogin} type="button" className={`btn btn-success ${styles["btn_login"]}`}>Login</button>
                                <p className="forgot">Forgot  <a>Username</a> / <a>Password</a> ?</p>
                                <p className="create_account"><a>Create your Account</a></p>
                            </div>
                    </form>
                    </div>
                   
              </div>
        </div>
    );
}


export default LoginLayout