import Icon from '@mdi/react';
import { mdiPasta, mdiBottleSodaClassic } from '@mdi/js';

const MenuItem = ({item, className, id, onClick})=>{
  return(
    <div className={`w-[10rem] rounded-md overflow-hidden bg-bg1 ${className}`} onClick={()=> onClick ? onClick(id) : null}>
      <div className="w-full aspect-video">
        <img src="coffee.jpg" alt="item" className="w-[100%] object-cover"/>
      </div>
      <div className="p-2 flex items-center">
        {/* {item.category == 'BEVERAGE' && <Icon path={mdiBottleSodaClassic} size={1.5} />}
        {item.category == 'FOOD' && <Icon path={mdiPasta} size={1} />} */}
        <div>
          <div>{item.name}</div>
          <div>{item.price.currency} {item.price.amount}.00</div>
        </div>
      </div>
    </div>
  )
}

export default MenuItem;