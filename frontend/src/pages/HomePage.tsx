import About from "../components/About/About"
import Discover from "../components/Discover/Discover"
import Home from "../components/Home/Home"
import Quest from "../components/Quest/Quest"
import WatchList from "../components/Watches/WatchList"

function HomePage() {
  return (
    <div className="h-full">
      <Home />
      <About />
      <WatchList />
      <Quest />
      <Discover />
    </div>
  )
}

export default HomePage
