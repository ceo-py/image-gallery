import {useState} from "react";
// import {decodeToken} from "react-jwt";
import Cookies from "universal-cookie";
import ApiCreateUser from "../util/ApiCreateUser.jsx";
import * as path from "path";
import {useAuth} from "../util/Context.jsx";



function UserCreate() {
    // eslint-disable-next-line no-empty-pattern
    const { setAuth } = useAuth()
    const [userData, setUserData] = useState({
        username: '',
        password: '',
    });

    const [validationErrors, setValidationErrors] = useState({
        username: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });

        setValidationErrors({
            ...validationErrors,
            [name]: '',
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await ApiCreateUser(userData)
        const createCookie = new Cookies(null, {path: '/'})
        createCookie.set('auth', JSON.stringify(result.token))
        setAuth(true)
    };

    return (
        <div>
            <h2>Register User</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={userData.username}
                        onChange={handleInputChange}
                        required
                    />
                    <span className="error">{validationErrors.username}</span>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={userData.password}
                        onChange={handleInputChange}
                        required
                    />
                    <span className="error">{validationErrors.password}</span>
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default UserCreate;