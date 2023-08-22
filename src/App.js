import logo from './logo.svg';
import './App.css';
import LoginLayout from './layouts/LoginLayouts';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SidebarProvider } from './context/Sidebar';

// import dashBoard,{ a } from './layouts/DashBoard';

import DashBoardLayouts from './layouts/DashBoard';
import { MainLayouts } from './layouts/Main';


function App() {
  // console.log( "a", a, dashBoard);
  return (
        <SidebarProvider>
            <MainLayouts></MainLayouts>
        </SidebarProvider>
  );
}

export default App;
