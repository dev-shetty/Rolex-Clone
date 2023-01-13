import React from "react"

type MenuBarProps = {
  menu: boolean
  setMenu: any
}

const MenuBarContext = React.createContext<Partial<MenuBarProps>>({})

export default MenuBarContext
