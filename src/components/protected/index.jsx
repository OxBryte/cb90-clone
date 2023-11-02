import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectToken, selectUser } from '../../redux/userSlice';

export default function ProtectedRoute({ children, role, redirectComponent = <Navigate to="/login" /> }) {
    const token = useSelector(selectToken);
    const user = useSelector(selectUser);
    const currentRole = user?.user?.role_id;

    if (!token || (role && currentRole !== role)) {
        return redirectComponent;
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

