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
          img="products/Cosmograph-DayTona.webp"
          name="Cosmograph Daytona"
          desc="Born to race"
        />
        <Watch
          img="products/Date-Just.webp"
          name="Datejust"
          desc="The classic watch of reference"
        />
        <Watch
          img="products/GMT-Master-II.webp"
          name="GMT-Master II"
          desc="The cosmopolitan watch"
        />
        <Watch
          img="products/Air-King.webp"
          name="Air King"
          desc="A homage to aviation"
        />
        <Watch
          img="products/Day-Date.webp"
          name="Day-Date"
          desc="The realization of an ideal"
        />
        <Watch
          img="products/Sea-Dweller.webp"
          name="Sea-Dweller"
          desc="The watch that conquered the deep"
        />
        <Watch
          img="products/Sky-Dweller.webp"
          name="Sky-Dweller"
          desc="Keeping track of time across the world"
        />
      </div>
    </div>
  )
}

export default WatchList
