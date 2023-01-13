import React, { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/UIComponents/Navbar/Navbar"
import HomePage from "./pages/HomePage"
import MenuBarContext from "./context/MenuBarContext"
import LanguageModalContext from "./context/LangaugageModalContext"
import "./App.css"

function App() {
  const [menu, setMenu] = useState<boolean>(false)
  const [languageModal, setLanguageModal] = useState<boolean>(false)

  return (
    <MenuBarContext.Provider value={{ menu, setMenu }}>
      <LanguageModalContext.Provider
        value={{ languageModal, setLanguageModal }}
      >
        <div
          className={`h-full font-primary-400 ${
            menu || languageModal ? "overflow-hidden" : ""
          }`}
        >
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Router>
        </div>
      </LanguageModalContext.Provider>
    </MenuBarContext.Provider>
  )
}

export default App
