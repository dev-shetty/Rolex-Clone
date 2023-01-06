import Watch from "./Watch"

function WatchList() {
  return (
    <div className="my-6 w-11/12 ml-auto select-none" draggable="false">
      <div className="flex pb-6 text-sm">
        <p>Rolex Watches - &nbsp;</p>
        <button className="text-secondary-400 hover:text-secondary-200">
          View all
        </button>
      </div>
      <div
        className="green-scroll flex gap-1 overflow-x-scroll"
        draggable="false"
      >
        <Watch
          img="products/Cellini.webp"
          name="Cellini"
          desc="The classical watch"
        />
        <Watch
          img="products/Cellini.webp"
          name="Cellini"
          desc="The classical watch"
        />
        <Watch
          img="products/Cellini.webp"
          name="Cellini"
          desc="The classical watch"
        />
        <Watch
          img="products/Cellini.webp"
          name="Cellini"
          desc="The classical watch"
        />
        <Watch
          img="products/Cellini.webp"
          name="Cellini"
          desc="The classical watch"
        />
      </div>
    </div>
  )
}

export default WatchList
