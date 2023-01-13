import { BsFillArrowRightCircleFill } from "react-icons/bs"
import { GrClose } from "react-icons/gr"
import { IoLocationSharp } from "react-icons/io5"

function SearchModal({ setSearch }: any) {
  return (
    <div className="flex px-2 flex-col justify-center md:justify-start absolute top-0 z-20 w-full h-full md:h-[40%] bg-primary-200 items-center">
      <div className="my-4">
        <img src="branding/color_logo.svg" alt="Rolex Logo" />
      </div>
      <div className="my-4 md:my-20">
        <h2 className="text-lg md:text-2xl font-bold tracking-[0.4rem] text-center">
          SEARCH THE ROLEX WEBSITE
        </h2>
        <div className="my-4 md:my-16">
          <div className="flex items-center gap-4">
            <input
              type="search"
              name="search"
              id="search"
              className="focus:outline-none border-b-[1px] py-1 w-full bg-transparent text-lg"
              placeholder="Search"
            />
            <div className="text-secondary-400">
              <BsFillArrowRightCircleFill className="scale-150" />
            </div>
          </div>
          <div className="text-secondary-400 flex items-center gap-2 my-2 text-sm cursor-pointer hover:text-secondary-200">
            <IoLocationSharp />
            Find a jeweller
          </div>
        </div>
      </div>
      <div
        className="absolute top-8 right-8 text-primary-900 bg-primary-100 p-2 rounded-full cursor-pointer"
        onClick={() => setSearch(false)}
      >
        <GrClose />
      </div>
    </div>
  )
}

export default SearchModal
