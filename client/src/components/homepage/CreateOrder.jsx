import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Icon from '@mdi/react';
import { mdiDelete, mdiMinus, mdiPlus, mdiArrowLeft } from '@mdi/js';

import { createOrder } from '../../store/ordersSlice'
import MenuItem from "./MenuItem";

const CreateOrder = ({onCloseModal})=>{
  const dispatch = useDispatch()

  const [ modalView, setModalView ] = useState('CREATE')
  const [customerName, setCustomerName] = useState("")
  const [tableNumber, setTableNumber] = useState("")
  const [ menuItems, setMenuItems ] = useState(useSelector(state => state.menuItems.menuItems))
  const [orderItems, setOrderItems] = useState([])
  const [orderTotal, setOrderTotal] = useState(0)

  const percentGST = 10

  const clearInputFields = ()=>{
    setCustomerName("")
    setTableNumber("")
    setOrderItems([])
  }

  const submitOrderDetails = async (e)=>{
    e.preventDefault();
    let order = {
      customerName,
      tableNumber,
      orderItems,
      orderTotal,
      orderTotalWithTax : orderTotal + (Math.ceil(orderTotal * percentGST / 100)),
      orderTime : Date.now(),
      orderStatus : 'ORDERED',
      orderType : 'N/A',
      orderOfTheDay : 'N/A',
    }
    dispatch(createOrder(order))
    clearInputFields()
    onCloseModal()
  }

  const changeModalView = (e, value) =>{
    e.preventDefault()
    setModalView(value)
  }

  const reduceItemCount = (id) =>{
    let item = orderItems.find(itm => itm.id == id)
    setOrderTotal(prev => prev - item.price.amount)
    if(item.quantity == 1) setOrderItems(oldOrderItems => oldOrderItems.filter(itm => itm.id != id))
    else setOrderItems(oldOrderItems => oldOrderItems.map(itm => itm.id == id ? {...itm, quantity : itm.quantity-1} : itm))
  }

  const menuItemClickHandler = (id)=>{
    let selectedItem = {...menuItems.find(item => item.id == id)}
    setOrderTotal(prev => prev + selectedItem.price.amount)
    let itemAddedAlready = orderItems?.filter(item => item.id == selectedItem.id).length
    if(!itemAddedAlready){
      selectedItem.quantity = 1
      setOrderItems(oldOrderItems => [... oldOrderItems, selectedItem])
    }
    else{
      setOrderItems(oldOrderItems => oldOrderItems.map(itm => itm.id == id ? {...itm, quantity : itm.quantity+1} : itm))
    }
  }

  if(modalView == 'SELECT') return(
    menuItems.length > 0 ? 
    <div className="min-w-[600px] min-h-[200px] max-h-[70vh] overflow-y-scroll">
      <div className="mt-2 font-semibold text-md">Select items</div>
      <div className="min-h-[300px] py-3 grid grid-cols-4 gap-3 place-items-center ">
        {menuItems.map(item => 
          <MenuItem id={item.id} item={item} key={item.id} onClick={menuItemClickHandler} className="cursor-pointer"/>
        )}
      </div>
      <div className="flex justify-end">
        <button onClick={(e)=> changeModalView(e, 'CREATE')} className="bg-bg1 px-6 py-2 rounded-md">Done</button>
      </div>
    </div>
    :
    <div className="min-w-[600px] min-h-[300px] max-h-[70vh] flex flex-col items-center justify-center py-4">
      <div>No items to display</div>
      <div className="mt-5 flex gap-3 flex-col">
        <button onClick={(e)=> changeModalView(e, 'CREATE')} className="bg-bg1 px-6 py-2 rounded-md text-tc2 flex items-center justify-center gap-2"><Icon path={mdiArrowLeft} size={0.7} />Back</button>
        <button className="bg-bg1 px-6 py-2 rounded-md text-tc2 flex items-center justify-center gap-2"><Icon path={mdiPlus} size={0.7} />Add menu items</button>
      </div>
    </div>
  )

  if(modalView == 'CREATE') return(
    <div className="flex gap-4 w-[600px] max-h-[70vh]">
      <form className="flex flex-col gap-3 w-[300px]">
        <div className="flex flex-col">
          <label className="mb-2">Customer name</label>
          <input type="text" value={customerName} onChange={(e)=>setCustomerName(e.target.value)} className="bg-bg1 border border-transparent focus:outline-0 active:outline-0 focus:border-tc1 active:border-tc1 px-3 py-2 rounded-md"/>
        </div>
        <div className="flex flex-col">
          <label>Table number</label>
          <input type="text" value={tableNumber} onChange={e => setTableNumber(e.target.value)} className="bg-bg1 border border-transparent focus:outline-0 active:outline-0 focus:border-tc1 active:border-tc1 px-3 py-2 rounded-md" />
        </div>
        <div className="flex flex-col">
          <label>Order items</label>
          <button onClick={(e)=>changeModalView(e, 'SELECT')} className="border py-2 mt-2 rounded-md hover:bg-bg1">Select order items</button>
        </div>
        <button type="submit" onClick={submitOrderDetails} className="bg-bg1 py-2 mt-3 border border-transparent rounded-md hover:border-tc1 hover:bg-bg2">Create Order</button>
      </form>
      <div className="bg-bg1 p-4 rounded-md w-[300px] overflow-y-scroll">
        {!orderItems.length && 
          <div className="text-center mt-4">
            No items added yet
          </div>
        }
        {orderItems.length > 0 &&
          <div>
            <div className="text-lg"><span className="font-semibold text-xl">#1</span> order of the day</div>
            <div className="pt-3">
            {orderItems.map(item => {
              return(
                <div key={item.id} className="flex mb-3 items-center justify-between">
                  <div className="flex rounded-md overflow-hidden bg-bg2 w-[75%] relative">
                    <img src={item.img} alt="img" className="w-[80px]"/>
                    <div className="px-2 truncate flex items-center">{item.name}</div>
                  </div>
                  <div className="text-sm">
                    x {item.quantity}
                  </div>
                  <button onClick={()=> reduceItemCount(item.id)} className="bg-bg2 rounded-full p-1">
                    {item.quantity == 1 && <Icon path={mdiDelete} size={0.7} />}
                    {item.quantity > 1 && <Icon path={mdiMinus} size={0.7} />}
                  </button>
                </div>
              )
            })}
            </div>
          <div>
            <div className="font-semibold font-lg">Order Total</div>
            <div>{orderTotal} +</div>
            <div>Rs. {Math.ceil(orderTotal * percentGST / 100)} ({percentGST}% GST)</div>
            <div className="border-y mt-1 py-1 font-semibold">Rs. {orderTotal + Math.ceil(orderTotal * percentGST / 100)}</div>
          </div>
        </div>
        }
        
      </div>
    </div>
  )
}

export default CreateOrder