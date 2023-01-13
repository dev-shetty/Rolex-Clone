import { useContext } from "react"
import { AiOutlineClose } from "react-icons/ai"
import MenuBarContext from "../../../context/MenuBarContext"
import WatchList from "../../Watches/WatchList"

function MenuModal() {
  const { setMenu } = useContext(MenuBarContext)
  return (
    <div className="absolute flex flex-col items-center top-0 z-20 w-5/6 md:w-2/4 h-full bg-primary-800 px-8">
      <div className="my-4 cursor-pointer" onClick={() => setMenu(false)}>
        <img src="branding/white_logo.svg" alt="Rolex Logo" />
      </div>
      <div className="my-8">
        <WatchList isMenu />
      </div>
      <div
        className="absolute top-8 left-16 text-primary-100 cursor-pointer"
        onClick={() => setMenu(false)}
      >
        <AiOutlineClose className="scale-125" />
      </div>
    </div>
  )
}

export default MenuModal
