import { Navigate } from 'react-router-dom';
import { useAuth } from './Context.jsx';

// eslint-disable-next-line react/prop-types
const Protected = ({ children }) => {
    const { auth } = useAuth();
    if (auth) {
        return children;
    }
    return <Navigate to='/account' replace />;
};

export default Protected;