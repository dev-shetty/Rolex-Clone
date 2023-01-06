import { BiExit } from "react-icons/all"

function Quest() {
  return (
    <div className="background-quest flex px-8 md:px-24 lg:px-48 my-20">
      <div className="flex flex-col justify-center text-primary-100 z-10">
        <p className="mb-4">Romulus Whitaker</p>
        <h2 className="w-2/4 text-xl sm:text-3xl md:text-5xl tracking-[0.5rem] mb-8">
          A QUEST TO SAVE INDIA'S RAINFORESTS
        </h2>
        <button className="flex items-center gap-1 border-[1px] w-max px-4 py-1 rounded-full">
          <BiExit />
          <p>Discover more on Rolex.org</p>
        </button>
      </div>
    </div>
  )
}

export default Quest
