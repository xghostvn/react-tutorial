import { createContext, useContext } from "react";
import DashBoardLayouts from "../layouts/DashBoard";





const SidebarContext = createContext();


export const SidebarProvider = ({children}) => {

    return (
        <SidebarContext.Provider>
            <div className="d-flex">
                <div className="sidebar">
                    <DashBoardLayouts>
                    </DashBoardLayouts>
                </div>
                <div className="content">
                   {children}
                </div>
               
            </div>
      
        </SidebarContext.Provider>
    );
}





export const useSidebar = () => {
    return useContext(SidebarContext)
}