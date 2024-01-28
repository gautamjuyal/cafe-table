import {  useState } from "react";

import CreateOrder from "./CreateOrder";
import OrderCard from "./OrderCard";
import Modal from "../global/Modal";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";

const DATA = [{orderId : 1, date: '8 jan 2024', time: '4:41',}, {orderId : 2, date: '8 jan 2024', time: '4:41'}, {orderId : 3, date: '8 jan 2024', time: '4:41'}, {orderId : 4, date: '8 jan 2024', time: '4:41'},{orderId : 5, date: '8 jan 2024', time: '4:41'}, {orderId : 6, date: '8 jan 2024', time: '4:41'}]

const Timeline = ()=>{

  const [showCreateModal, setShowCreateModal] = useState(false)

  const  ordersList = DATA.map((order) => {
    return(
      <OrderCard order={order} key={order.orderId} />
    )
  })

  const closeCreateModal = ()=>{
    setShowCreateModal(false)
  }

  return(
    <div className="w-1/2 text-[#afc0d8] p-5">
      <button className="w-1/2 flex flex-col items-center border rounded-md py-2 bg-[#1e293b] hover:scale-[101%]"  onClick={()=> setShowCreateModal(true)}>
      <Icon path={mdiPlus} size={1} /><span>Create new order </span> 
      </button>
      <div className="pt-6 grid grid-cols-2 gap-3">
      {ordersList}
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