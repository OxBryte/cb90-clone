import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectToken } from '../../redux/userSlice';

export default function ProtectedRoute({ children }) {
    const token = useSelector(selectToken);

    if (!token) {
        return (
            <Navigate to="/login" />
        );
    }

    return children
}


// import { useSelector } from 'react-redux';
// import { Outlet, useNavigate } from 'react-router-dom';

// function ProtectedRoute() {
//     const isAuthenticated = useSelector(state => state.user.isAuthenticated);
//     const navigate = useNavigate();

//     if (!isAuthenticated) {
//         navigate('/login');
//         return null;
//     }

//     return <Outlet />;
// }

// export default ProtectedRoute;

