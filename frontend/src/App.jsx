import {Route, Routes, Link} from "react-router-dom";
import UserCreate from "./pages/UserCreate.jsx";
import UserLogin from "./pages/UserLogin.jsx";
import FileUploadDiscord from "./pages/FileUploadDiscord.jsx";


function App() {


    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/upload">Upload</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<h3>Main Page</h3>}/>
                <Route path="/register" element={<UserCreate/>}/>
                <Route path="/login" element={<UserLogin/>}/>
                <Route path="/upload" element={<FileUploadDiscord/>}/>
            </Routes>
        </>
    )
}

export default App
