type props = {
  img: string
  name: string
  desc: string
  isMenu?: boolean
}

function Watch({ img, name, desc, isMenu }: props) {
  return (
    <div
      className={`my-4 basis-[40%] lg:basis-[30%] shrink-0 ${
        isMenu ? "text-primary-100 text-xs min-w-[25%] my-0 break-words" : ""
      }`}
    >
      <div className={`overflow-hidden ${isMenu ? "" : "rounded-3xl"}`}>
        <img
          src={img}
          alt={name}
          className="h-[75%] hover:scale-105 transition-all duration-500"
        />
      </div>
      <div>
        <div className="my-2 leading-4">
          <p
            className={`font-bold uppercase ${
              isMenu ? "text-[0.25rem] md:text-[0.75rem]" : ""
            }`}
          >
            {name}
          </p>
          <p
            className={`text-primary-600 ${
              isMenu ? "text-[0.4rem] md:text-[0.8rem]" : "text-sm"
            }`}
          >
            {desc}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Watch
