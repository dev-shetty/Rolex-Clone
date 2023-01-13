import { useContext, useState } from "react"
import { HiBars2 } from "react-icons/hi2"
import { BiHeart, BiSearch } from "react-icons/bi"
import MenuBarContext from "../../../context/MenuBarContext"
import SearchModal from "../Modals/SearchModal"
import MenuModal from "../Modals/MenuModal"

function Navbar() {
  const { menu, setMenu } = useContext(MenuBarContext)
  const [logo, setLogo] = useState("branding/white_logo.svg")
  const [search, setSearch] = useState(false)

  const handleHover = (position: Number) => {
    if (position) setLogo("branding/color_logo.svg")
    else setLogo("branding/white_logo.svg")
  }
  return (
    <>
      <nav
        className="absolute grid grid-cols-[25%_50%_25%] lg:grid-cols-[45%_10%_45%] place-items-center w-full z-10 text-primary-100 pt-4 pb-2 hover:text-primary-900 hover:bg-primary-100 transition-colors duration-300 text-base px-5 lg:px-20"
        onMouseEnter={() => handleHover(1)}
        onMouseLeave={() => handleHover(0)}
      >
        <ul className="flex place-self-start mt-auto gap-10 w-full">
          <li
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setMenu(true)}
          >
            <HiBars2 className="scale-125" />
            <p>Menu</p>
          </li>
          <ul className="gap-4 hidden xl:flex">
            <li className="cursor-pointer">Watches</li>
            <li className="cursor-pointer">World of Rolex</li>
            <li className="cursor-pointer">Store Locator</li>
          </ul>
        </ul>
        <ul>
          <img src={logo} alt="Rolex Logo" className="cursor-pointer" />
        </ul>
        <ul className="flex place-self-end mt-auto gap-6">
          <li
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setSearch(true)}
          >
            <BiSearch />
            <p className="hidden lg:block">Search</p>
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <BiHeart />
            <p className="hidden lg:block">Your selection</p>
          </li>
        </ul>
      </nav>
      {menu && <MenuModal />}
      {search && <SearchModal setSearch={setSearch} />}
    </>
  )
}

export default Navbar
