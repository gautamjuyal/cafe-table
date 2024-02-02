import {  useState } from "react";
import { useSelector } from "react-redux";
import CreateOrder from "./CreateOrder";
import OrderCard from "./OrderCard";
import Modal from "../global/Modal";
import Icon from "@mdi/react";
import { mdiPlus, mdiClockOutline } from "@mdi/js";



const Timeline = ()=>{
  const fetchedOrders = useSelector(state => state.orders.orders)
  const [orders, setOrders] = useState(fetchedOrders)
  const [showCreateModal, setShowCreateModal] = useState(false)

  const closeCreateModal = ()=>{
    setOrders(fetchedOrders)
    setShowCreateModal(false)
  }

  return(
    <div className="w-1/2 text-[#afc0d8] p-5">
      <div className="flex justify-center">
        <button className="w-1/2 flex flex-col items-center border rounded-md py-2 bg-[#1e293b] hover:scale-[101%]"  onClick={()=> setShowCreateModal(true)}>
          <Icon path={mdiPlus} size={1} /><span>Create new order </span> 
        </button>
      </div>
      {!orders.length && 
        <div className="mt-8 text-center">
          No orders today
        </div>
      }
      {orders.length > 0 &&
        <div className="pt-6 grid grid-cols-2 gap-3">
          {orders.map((order) => {
          return(
            <OrderCard order={order} key={order.id} />
          )
          })}
        </div>
      }
      <div className="flex justify-center mt-8">
        <button className="w-1/2 flex justify-center items-center gap-1 border rounded-md py-3 bg-[#1e293b] hover:scale-[101%]">
          <Icon path={mdiClockOutline} size={0.8} /><span>Load older orders </span> 
        </button>
      </div>
      <Modal
        showModal={showCreateModal}
        closeModal={closeCreateModal}
        title="Create order"
        >
          <CreateOrder onCloseModal={closeCreateModal} />
      </Modal>
    </div>
  )
}

export default Timeline