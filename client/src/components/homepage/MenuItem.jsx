const MenuItem = ({item, className, id, onClick})=>{
  return(
    <div className={`w-[10rem] rounded-md overflow-hidden bg-bg1 ${className}`} onClick={()=> onClick(id)}>
      <div className="w-full aspect-video">
        <img src="coffee.jpg" alt="item" className="w-[100%] object-cover"/>
      </div>
      <div className="p-2">
        {item.name}
        <br />
        {item.price.amount}
      </div>
    </div>
  )
}

export default MenuItem;