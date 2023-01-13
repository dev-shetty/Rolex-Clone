import { useContext } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { BiWorld } from "react-icons/bi"
import MenuBarContext from "../../../context/MenuBarContext"
import WatchList from "../../Watches/WatchList"

function MenuModal() {
  const { setMenu } = useContext(MenuBarContext)
  return (
    <div className="fixed flex flex-col top-0 z-20 w-5/6 md:w-2/4 h-full bg-primary-800 pl-16">
      <div
        className="my-4 cursor-pointer mx-auto"
        onClick={() => setMenu(false)}
      >
        <img src="branding/white_logo.svg" alt="Rolex Logo" />
      </div>
      <div className="overflow-y-scroll no-scroll">
        <div className="my-2 md:my-8 w-full">
          <WatchList isMenu />
        </div>
        <div className="menu-items text-primary-100 md:w-4/5 py-4">
          <div className="flex flex-col">
            <div className="flex flex-col gap-2 border-b-[1px] border-b-primary-600 pb-8">
              <p>Rolex Watches</p>
              <p>New Watches 2022</p>
              <p>Configure your watch</p>
              <p>Watch finder</p>
              <p>History & Watchmaking</p>
            </div>
            <div className="flex flex-col gap-2 border-b-[1px] border-b-primary-600 py-8">
              <p>World of Rolex</p>
            </div>
            <div className="flex flex-col gap-2 border-b-[1px] border-b-primary-600 py-8">
              <p>Buying a Rolex</p>
              <p>Find a jeweler</p>
              <p>Watch care & service</p>
            </div>
            <div className="flex flex-col gap-2 border-b-[1px] border-b-primary-600 py-8">
              <p>About Rolex.org</p>
            </div>
          </div>
        </div>
      </div>
      <div className="with-icons text-primary-100 hover:text-accent-400 transition-colors duration-500 cursor-pointer py-6">
        <BiWorld />
        <p>Langauges</p>
      </div>
      <div
        className="absolute top-4 md:top-8 left-2 md:left-16 text-primary-100 cursor-pointer"
        onClick={() => setMenu(false)}
      >
        <AiOutlineClose className="scale-125" />
      </div>
    </div>
  )
}

export default MenuModal
