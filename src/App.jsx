import { useDispatch } from 'react-redux'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "./pages/home"
import Faqs from "./pages/faqs"
import About from "./pages/about"
import Login from "./pages/login"
import Signup from "./pages/signup"
import ForgottenPassword from "./pages/forgottenPassword"
import Dashboard from "./pages/dashboard"
import { setToken } from "./redux/userSlice"
import { useEffect } from "react"
import ProtectedRoute from './components/protected'
import Admin from './pages/admin'
// import TradingBot from "./pages/tradingbot"

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(setToken(token));
    }
  }, [dispatch]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/recover" element={<ForgottenPassword />} />
          <Route path="/:id" element={
            <>
              <ProtectedRoute redirectComponent={<Login />}>
                <Dashboard />
              </ProtectedRoute>
            </>
          } />
          <Route path="/admin/:id" element={
                <Admin />
          } />
          {/* <Route path="/tradingbot" element={<TradingBot />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
