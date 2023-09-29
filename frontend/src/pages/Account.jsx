import {useState} from "react";
// import {decodeToken} from "react-jwt";
import Cookies from "universal-cookie";
import ApiCreateUser from "../util/ApiCreateUser.jsx";
import * as path from "path";
import {useAuth} from "../util/Context.jsx";
import PasswordInput from "../components/inputFields/password/PasswordInput.jsx";
import RegisterCard from "../components/cards/registerCard/RegisterCard.jsx";

import {Tabs, Tab, Input, Link, Button, Card, CardBody, CardHeader} from "@nextui-org/react";


function Account() {
    // eslint-disable-next-line no-empty-pattern
    const {setAuth} = useAuth()
    const [selected, setSelected] = useState("login");
    const [userData, setUserData] = useState({
        email: '', password: '',
    });

    const [validationErrors, setValidationErrors] = useState({
        email: '', password: '',
    });

    const handleInputChange = (item) => {
        setUserData({
            ...userData, ...item
        });

        // setValidationErrors({
        //     ...validationErrors, [name]: '',
        // });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(userData)
        // const result = await ApiCreateUser(userData)
        // const createCookie = new Cookies(null, {path: '/'})
        // createCookie.set('auth', JSON.stringify(result.token))
        // setAuth(true)
    };

    // return (
    //     <div>
    //         <h2>Register User</h2>
    //         <form onSubmit={handleSubmit}>
    //             <div>
    //                 <label htmlFor="username">Username:</label>
    //                 <input
    //                     type="text"
    //                     id="username"
    //                     name="username"
    //                     value={userData.username}
    //                     onChange={handleInputChange}
    //                     required
    //                 />
    //                 <span className="error">{validationErrors.username}</span>
    //             </div>
    //             <PasswordInput/>
    //             <div>
    //                 <label htmlFor="password">Password:</label>
    //                 <input
    //                     type="password"
    //                     id="password"
    //                     name="password"
    //                     value={userData.password}
    //                     onChange={handleInputChange}
    //                     required
    //                 />
    //                 <span className="error">{validationErrors.password}</span>
    //             </div>
    //             <button type="submit">Create</button>
    //         </form>
    //     </div>
    // );
    return (
        <div className="flex flex-col w-full justify-center items-center min-h-screen "
             style={{minHeight: 'calc(100vh - 4rem)'}}>
            <Card className="max-w-full w-[340px] h-[340px]">
                <CardBody className="overflow-hidden">
                    <Tabs
                        fullWidth
                        size="md"
                        aria-label="Tabs form"
                        selectedKey={selected}
                        onSelectionChange={setSelected}
                    >
                        <Tab key="login" title="Login">
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <Input isRequired
                                       label="Email"
                                       placeholder="Enter your email"
                                       type="email"
                                       onValueChange={x => handleInputChange({email: x})}
                                />
                                <Input
                                    isRequired
                                    label="Password"
                                    placeholder="Enter your password"
                                    type="password"
                                    onValueChange={x => handleInputChange({password: x})}
                                />
                                <p className="text-center text-small">
                                    Need to create an account?{" "}
                                    <Link href="" size="sm" onPress={() => setSelected("sign-up")}>
                                        Sign up
                                    </Link>
                                </p>
                                <div className="flex gap-2 justify-end">
                                    <Button type="submit" fullWidth color="primary">
                                        Login
                                    </Button>
                                </div>
                            </form>
                        </Tab>
                        <Tab key="sign-up" title="Sign up">
                            <form className="flex flex-col gap-4 h-[300px]">
                                <Input isRequired label="Email" placeholder="Enter your email" type="email"/>
                                <Input
                                    isRequired
                                    label="Password"
                                    placeholder="Enter your password"
                                    type="password"
                                />
                                <p className="text-center text-small">
                                    Already have an account?{" "}
                                    <Link href="" size="sm" onPress={() => setSelected("login")}>
                                        Login
                                    </Link>
                                </p>
                                <div className="flex gap-2 justify-end">
                                    <Button fullWidth color="primary">
                                        Sign up
                                    </Button>
                                </div>
                            </form>
                        </Tab>
                    </Tabs>
                </CardBody>
            </Card>
        </div>);
}

export default Account;