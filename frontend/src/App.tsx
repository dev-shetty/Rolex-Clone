import React, { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/UIComponents/Navbar/Navbar"
import HomePage from "./pages/HomePage"
import MenuBarContext from "./context/MenuBarContext"
import "./App.css"

function App() {
  const [menu, setMenu] = useState<boolean>(false)
  return (
    <MenuBarContext.Provider value={{ menu, setMenu }}>
      <div className="h-full font-primary-400">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </div>
    </MenuBarContext.Provider>
  )
}

export default App
