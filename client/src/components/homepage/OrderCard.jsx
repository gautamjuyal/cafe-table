const OrderCard = ({order})=>{
  return(
    <div className="w-100 bg-[#1e293b] rounded-md px-3 py-2 cursor-pointer hover:scale-[101%]">
      {/* pin (just like hayday orders) */}
      <div>Order <span className="text-xl font-bold">#3</span></div>
      ordercard {order.orderId}
    </div>
  )
}

export default OrderCard