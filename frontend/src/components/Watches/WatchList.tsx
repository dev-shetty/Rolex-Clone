import Watch from "./Watch"
import WatchHeading from "./WatchHeading"

type WatchlistProps = {
  isMenu: boolean
}

function WatchList({ isMenu }: WatchlistProps) {
  return (
    <div className="my-6 w-11/12 ml-auto select-none" draggable="false">
      {!isMenu && <WatchHeading />}
      <div
        className={`${
          isMenu ? "white-scroll" : "green-scroll"
        } flex gap-1 overflow-x-scroll`}
        draggable="false"
      >
        <Watch
          isMenu={isMenu}
          img="products/Cellini.webp"
          name="Cellini"
          desc="The classical watch"
        />
        <Watch
          isMenu={isMenu}
          img="products/Cosmograph-DayTona.webp"
          name="Cosmograph Daytona"
          desc="Born to race"
        />
        <Watch
          isMenu={isMenu}
          img="products/Date-Just.webp"
          name="Datejust"
          desc="The classic watch of reference"
        />
        <Watch
          isMenu={isMenu}
          img="products/GMT-Master-II.webp"
          name="GMT-Master II"
          desc="The cosmopolitan watch"
        />
        <Watch
          isMenu={isMenu}
          img="products/Air-King.webp"
          name="Air King"
          desc="A homage to aviation"
        />
        <Watch
          isMenu={isMenu}
          img="products/Day-Date.webp"
          name="Day-Date"
          desc="The realization of an ideal"
        />
        <Watch
          isMenu={isMenu}
          img="products/Sea-Dweller.webp"
          name="Sea-Dweller"
          desc="The watch that conquered the deep"
        />
        <Watch
          isMenu={isMenu}
          img="products/Sky-Dweller.webp"
          name="Sky-Dweller"
          desc="Keeping track of time across the world"
        />
      </div>
    </div>
  )
}

export default WatchList
