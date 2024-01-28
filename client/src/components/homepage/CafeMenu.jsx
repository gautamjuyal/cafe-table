import MenuItem from "./MenuItem"

const CafeMenu = ()=>{
  const menuItems = [{name : "Coffee", price: "40", image : "khkhi"}, {name : "Coffee", price: "40", image : "khkhi"}, {name : "Coffee", price: "40", image : "khkhi"}, {name : "Coffee", price: "40", image : "khkhi"}, {name : "Coffee", price: "40", image : "khkhi"}, {name : "Coffee", price: "40", image : "khkhi"}, {name : "Coffee", price: "40", image : "khkhi"}, {name : "Coffee", price: "40", image : "khkhi"}]

  return(
    <div className="flex flex-col">
      {/* <div>
        <button>Add Items</button>
      </div> */}
      <div className="grid grid-cols-5 gap-3">
        {menuItems.map(item => <MenuItem name={item.name} price={item.price} key={item.name} />)}
      </div>
    </div>
  )
}

export default CafeMenu;