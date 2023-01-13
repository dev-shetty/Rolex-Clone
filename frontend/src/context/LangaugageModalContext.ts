import React from "react"
type LangaugeProps = {
  languageModal: boolean
  setLanguageModal: any
}
const LanguageModalContext = React.createContext<Partial<LangaugeProps>>({})

export default LanguageModalContext
