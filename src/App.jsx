import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "./pages/home"
import Faqs from "./pages/faqs"

function App() {

  return (
    <>
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faqs" element={<Faqs />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
