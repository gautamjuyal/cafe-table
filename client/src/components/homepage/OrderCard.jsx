import { useState } from "react"
import Icon from '@mdi/react';
import { mdiTriangleDown } from '@mdi/js';
import Modal from "../global/Modal"
import OrderDetails from "./OrderDetails"

const OrderCard = ({order})=>{
  const [ showDetailsModal, setShowDetailsModal ] = useState(false)
  return(
    <>
      <div className="w-100 bg-[#1e293b] rounded-md px-3 py-2 cursor-pointer hover:scale-[101%]" onClick={()=> setShowDetailsModal(true)}>
        {/* pin (just like hayday orders) */}
        <div className="text-xl font-bold">#{order.orderId}</div>
        <ul className="pl-4 list-inside">
          {order.orderItems.map((itm, idx)=>{
            if(idx > 3) return
            return(
              <li key={idx} className="flex items-center gap-[6px] text-[16px] truncate">
                <Icon path={mdiTriangleDown} size={0.4} /> {itm.name} x {itm.quantity}
              </li>)
          })}
          {<div className="mt-1">
            {order.orderItems.length > 4 && `...more`} on Table no. {order.tableNumber}
          </div>
          }
        </ul>
      </div>
      <Modal showModal={showDetailsModal} closeModal={()=> setShowDetailsModal(false)} title="Order Details">
        <OrderDetails orderDetail={order} />
      </Modal>
    </>
  )
}

export default OrderCard