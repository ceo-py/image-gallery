import {useState} from "react";
import ApiCreateUser from "../util/ApiCreateUser.jsx";


function UserCreate() {
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
        console.log('Result', result);
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