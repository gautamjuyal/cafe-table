import Timeline from "../components/homepage/Timeline"
import UserCard from "../components/homepage/UserCard"
import CurrentMenu from "../components/homepage/CurrentMenu"
import Header from "../components/global/Header"

const Home = ()=>{
  return(
    <div className="flex items-center flex-col bg-bg1 min-h-screen">
      {/* my account with current menu below it */}
      <Header />
      <div className="w-[100%] flex justify-center gap-3">
        <UserCard />
        <Timeline />
        <CurrentMenu />
      </div>
    </div>
  )
}

export default Home