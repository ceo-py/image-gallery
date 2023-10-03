import {Navigate, Route, Routes} from "react-router-dom";
import './index.css'
import Account from "./pages/Account.jsx";
import UserLogin from "./pages/UserLogin.jsx";
import FileUploadDiscord from "./pages/FileUploadDiscord.jsx";
import Protected from "./util/Guard.jsx";
import {useAuth} from "./util/Context.jsx";
import NavBarCom from "./components/navBar/NavBarCom.jsx";
import Cookies from "universal-cookie";
import {useEffect} from "react";
import {AuthCheck} from "./util/AuthCheck.jsx";


function App() {
    return (<>
            <NavBarCom/>
            <Routes>
                <Route path="/" element={<h3>Main Page</h3>}/>
                <Route path="/account" element={AuthCheck() ? <Navigate to="/" /> : <Account/>}/>
                <Route path="/upload" element={<Protected><FileUploadDiscord/></Protected>}/>
            </Routes>
        </>)
}

export default App
