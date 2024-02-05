import Icon from '@mdi/react';
import { mdiChairSchool , mdiAccount, mdiClockOutline  } from '@mdi/js';
import { useSelector } from 'react-redux';

import MenuItem from './MenuItem';

const OrderDetails = ({orderDetail})=>{
  const user = useSelector(state => state.user.user)
  return(
    <div className="min-w-[700px] min-h-[400px] max-w-[70vw] max-h-[70vh] flex text-tc2">
      <div className="w-[70%] overflow-y-scroll pr-4">
        <div className='grid grid-cols-3 gap-2'>
          <div className='flex flex-col items-center bg-bg1 p-2 rounded-md w-full'>
            <Icon path={mdiChairSchool} size={1} /><span>Order for table</span><span className='font-semibold'>{orderDetail.tableNumber}</span>
          </div>
          <div className='flex flex-col items-center bg-bg1 p-2 rounded-md w-full break-words text-center'>
            <Icon path={mdiAccount} size={1} /><span>Ordered by</span><span className='font-semibold'>{orderDetail.customerName}</span></div>
          <div className='flex flex-col items-center bg-bg1 p-2 rounded-md w-full'>
            <Icon path={mdiClockOutline} size={1} /><span>Order time</span><span className='font-semibold'>{orderDetail.orderTime}</span>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-4 py-4'>
          {orderDetail.orderItems.map(itm => {
            return(
              <MenuItem key={itm.id} item={itm} id={itm.id}/>
            )}
          )}
        </div>
        <div className='mt-2'>
          Order Total
          <div className='w-1/3'>
            {orderDetail.orderItems.map(itm => {
              return(
                <div key={itm.id}>{itm.price.currency} {itm.price.amount} x {itm.quantity}</div>
              )
            })}
          </div>
          {/* <div>GST</div> */}
          <div className='border-y w-1/3 mt-2 py-1'>
            {user.preferences.currency} {orderDetail.orderTotal}
          </div>
        </div>
        <div className='mt-2'>Order ID : {orderDetail.id}</div>
      </div>
      <div className="min-w-[30%] px-3 flex flex-col items-center bg-bg1 rounded-md py-2">
        <div className="flex items-center gap-[7px]">
          <div className="text-[80px] leading-[80px] tracking-tighter">#10</div>
          <div className="uppercase text-[13px] font-semibold mb-[-5px]">order<br /> of the<br /> day</div>
        </div>
        <div  className="flex flex-col w-full items-center mt-10">
          Order status
          <div className={`bg-bg2 w-full flex justify-center py-2 mt-1 rounded-md`} >
            { orderDetail.orderStatus == 'ORDERED' && 'In progress'}
            { orderDetail.orderStatus == 'CANCELLED' && 'Cancelled'}
            { orderDetail.orderStatus == 'FULFILLED' && 'Fulfilled'}
          </div>
        </div>
        <div className="flex flex-col w-full items-center mt-10">
          Something wrong? 
          <button className="bg-bg2 w-full py-2 mt-1 rounded-md">
            Edit this order
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrderDetails