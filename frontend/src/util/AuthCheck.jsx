import Cookies from "universal-cookie";


export const AuthCheck = () => {
    const cookies = new Cookies();
    return !!cookies.get('auth');
}