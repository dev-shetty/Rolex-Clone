import Watch from "./Watch"

function WatchList() {
  return (
    <div className="my-6 w-4/5 mx-auto">
      <div className="flex pb-6 text-sm">
        <p>Rolex Watches - &nbsp;</p>
        <button className="text-secondary-400 hover:text-secondary-200">
          View all
        </button>
      </div>
      <div className="flex flex-wrap">
        <Watch />
      </div>
    </div>
  )
}

export default WatchList
