import { useSelector } from 'react-redux';

const UserCard = ()=>{
  const userImage = "user-default.png"
  const user = useSelector(state => state.user.user)
  return(
    <div className="flex flex-col items-center rounded-md bg-bg2 w-60 py-4 px-3 text-tc2 h-max">
      <div className="w-12 bg-tc1 rounded-[50%] overflow-hidden mb-2">
        <img src={userImage} alt="user" className="w-[100%]" />
      </div>
      <div>
        <div>{user.name}</div>
      </div>
    </div>
  )
}

export default UserCard;