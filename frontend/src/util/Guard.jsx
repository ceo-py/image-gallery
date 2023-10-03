import {Navigate} from 'react-router-dom';
import {useAuth} from './Context.jsx';
import {AuthCheck} from "./AuthCheck.jsx";


// eslint-disable-next-line react/prop-types
const Protected = ({children}) => {
    // const {setAuth} = useAuth();
    // // useAuth()
    // console.log('auth on check', auth)

    if (AuthCheck()) {
        return children;
    }
    return <Navigate to="/account" replace/>;
};

export default Protected;