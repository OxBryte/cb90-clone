import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "./pages/home"
import Faqs from "./pages/faqs"
import About from "./pages/about"
import Login from "./pages/login"
import Signup from "./pages/signup"
import ForgottenPassword from "./pages/forgottenPassword"
import Dashboard from "./pages/dashboard"
import TradingBot from "./pages/tradingbot"

function App() {

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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tradingbot" element={<TradingBot />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
