import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/UIComponents/Navbar/Navbar"
import HomePage from "./pages/HomePage"
import "./App.css"

function App() {
  return (
    <div className="h-full font-primary-400">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
