import About from "../components/About/About"
import Home from "../components/Home/Home"
import WatchList from "../components/Watches/WatchList"

function HomePage() {
  return (
    <div className="h-full">
      <Home />
      <About />
      <WatchList />   
    </div>
  )
}

export default HomePage
