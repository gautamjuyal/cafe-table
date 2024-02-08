import Timeline from "../components/homepage/Timeline"
import UserCard from "../components/homepage/UserCard"
import CurrentMenu from "../components/homepage/CurrentMenu"

const Home = ()=>{
  return(
    <div className="w-[100%] flex justify-center gap-3 py-3">
      <UserCard />
      <Timeline />
      <CurrentMenu />
    </div>
  )
}

export default Home