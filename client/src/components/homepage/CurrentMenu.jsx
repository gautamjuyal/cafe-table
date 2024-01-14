const CurrentMenu = ()=>{
  const menuItems = [{name: 'Coffee', price: '40', img : 'hehe'}, {name: 'tea', price: '40', img : 'hehe'}, {name: 'momos', price: '40', img : 'hehe'}, {name: 'pasta', price: '40', img : 'hehe'}, {name: 'noodles', price: '40', img : 'hehe'}]
  return(
    <div className="flex flex-col items-center rounded-md bg-bg2 w-60 py-4 px-3 text-tc2">
      <div className="text-md font-semibold">Current Menu</div>
      <div className="grid">
        {menuItems.map(item => {
          return(
            <div key={item.name}>
              {item.name}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CurrentMenu;