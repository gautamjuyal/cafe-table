import { useState } from "react"
import Modal from "../global/Modal"
import OrderDetails from "./OrderDetails"

const OrderCard = ({order})=>{
  const [ showDetailsModal, setShowDetailsModal ] = useState(false)
  return(
    <>
      <div className="w-100 bg-[#1e293b] rounded-md px-3 py-2 cursor-pointer hover:scale-[101%]" onClick={()=> setShowDetailsModal(true)}>
        {/* pin (just like hayday orders) */}
        <div>Order <span className="text-xl font-bold">#{order.orderId}</span></div>
        ordercard {order.orderId}
      </div>
      <Modal showModal={showDetailsModal} closeModal={()=> setShowDetailsModal(false)} title="Order Details">
        <OrderDetails orderDetail={order} />
      </Modal>
    </>
  )
}

export default OrderCard