import { FaAngleDown } from "react-icons/fa"
function Home() {
  return (
    <div className="background-hero flex justify-center items-center">
      <div className="p-8 flex flex-col items-center gap-2 lg:gap-4 text-primary-100 z-10">
        <h1 className="text-xl md:text-3xl lg:text-5xl tracking-widest font-medium">
          DAY-DATE
        </h1>
        <p className="tracking-[0.3rem] lg:tracking-[0.5rem] text-xs md:text-sm lg:text-lg font-[100] text-primary-300">
          THE REALIZATION OF AN IDEAL
        </p>
      </div>
      <div className="absolute z-10 bottom-4 left-1/2 -translate-x-1/2 text-primary-100 overflow-hidden h-12">
        <FaAngleDown className="scale-125 animate-infinite-scroll-down" />
      </div>
    </div>
  )
}

export default Home
