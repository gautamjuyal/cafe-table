const UserCard = ()=>{
  const userImage = "user-default.png"
  return(
    <div className="flex flex-col items-center rounded-md bg-bg2 w-60 py-4 px-3 text-tc2">
      <div className="w-12 bg-tc1 rounded-[50%] overflow-hidden mb-2">
        <img src={userImage} alt="user" className="w-[100%]" />
      </div>
      <div>
        Your Restaurant
      </div>
    </div>
  )
}

export default UserCard;