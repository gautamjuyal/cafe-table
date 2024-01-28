import { useState } from "react"
import Modal from "../global/Modal"
import CafeMenu from "./CafeMenu"
import MenuItem from "./MenuItem"

const CurrentMenu = ()=>{
  const [ showMenu , setShowMenu ] = useState(false)
  const menuItems = [{name: 'Coffee', price: '40', img : 'hehe'}, {name: 'tea', price: '40', img : 'hehe'}, {name: 'momos', price: '40', img : 'hehe'},]
  return(
    <div className="flex flex-col items-center rounded-md bg-bg2 w-60 py-4 px-3 text-tc2 h-max">
      <div className="text-lg font-semibold">Current Menu</div>
      <button className="mt-3 mb-4 border rounded-md w-full py-2 text-md hover:bg-bg1 hover:border-transparent" onClick={()=> setShowMenu(true)}>See current menu</button>
      <div className="text-lg font-semibold mb-3">Popular orders</div>
      <div className="grid gap-3">
        {menuItems.map(item => {
          return(
            <MenuItem key={item.name} item={item} />
          )
        })}
      </div>
      <Modal title="Current Menu" showModal={showMenu} closeModal={()=> setShowMenu(false)}>
        <CafeMenu/>
      </Modal>
    </div>
  )
}

export default CurrentMenu;