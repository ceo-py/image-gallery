import {Route, Routes, Link} from "react-router-dom";
import './index.css'
import Account from "./pages/Account.jsx";
import UserLogin from "./pages/UserLogin.jsx";
import FileUploadDiscord from "./pages/FileUploadDiscord.jsx";
import Protected from "./util/Guard.jsx";
import {useAuth} from "./util/Context.jsx";
import NavBarCom from "./components/navBar/NavBarCom.jsx";


function App() {
    const { auth } = useAuth()
    return (<>
            <NavBarCom/>
            {/*<nav>*/}
            {/*    <ul>*/}
            {/*        <li>*/}
            {/*            <Link to="/">Home</Link>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <Link to="/register">Register</Link>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <Link to="/login">Login</Link>*/}
            {/*        </li>*/}
            {/*        {auth && <li>*/}
            {/*            <Link to="/upload">Upload</Link>*/}
            {/*        </li>}*/}
            {/*    </ul>*/}
            {/*</nav>*/}
            <Routes>
                <Route path="/" element={<h3>Main Page</h3>}/>
                <Route path="/account" element={<Account/>}/>
                <Route path="/login" element={<UserLogin/>}/>
                <Route path="/upload" element={<Protected><FileUploadDiscord/></Protected>}/>

            </Routes>
        </>)
}

export default App
