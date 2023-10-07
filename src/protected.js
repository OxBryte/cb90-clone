// import { useSelector } from 'react-redux';
// import { selectUser } from './redux/userSlice';
// import { Redirect, Route } from 'react-router-dom';

// function ProtectedRoute({ children, ...rest }) {
//     const user = useSelector(selectUser);

//     return (
//         <Route
//             {...rest}
//             render={({ location }) =>
//                 user ? children : <Redirect to={{ pathname: "/login", state: { from: location } }} />
//             }
//         />
//     );
// }

// export default ProtectedRoute;
