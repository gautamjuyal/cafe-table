import { useSelector } from 'react-redux';
import Icon from '@mdi/react';
import { mdiArrowLeft, mdiCheck } from '@mdi/js';

import MenuItem from './MenuItem';

const EditMenuItems = ({back})=>{
  const menuItems = useSelector(state => state.menuItems.menuItems)
  return(
    <div className="min-w-[650px] h-[70vh]">
      <div className='flex justify-center gap-[50px]'>
        <button className="bg-bg1 flex gap-2 items-center px-5 py-2 rounded-md" onClick={back}><Icon path={mdiArrowLeft} size={0.8}/> Back</button>
        <button className="bg-bg1 flex gap-2 items-center px-5 py-2 rounded-md"><Icon path={mdiCheck} size={0.8} /> Done</button>
      </div>

      <div className="grid grid-cols-4 gap-3 mt-5">
        {menuItems.map(item => <MenuItem item={item} id={item.id} key={item.id} />)}
      </div>
    </div>
  )
}

export default EditMenuItems;