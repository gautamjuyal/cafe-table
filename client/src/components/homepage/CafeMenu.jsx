import {useSelector, useDispatch} from "react-redux";
import { useState } from "react";

import Icon from '@mdi/react';
import { mdiMinusCircleOutline } from '@mdi/js';

import MenuItem from "./MenuItem"
import AddMenuItem from "./AddMenuItem";
import EditMenuItems from "./EditMenuItems";
import { removeMenuItem } from "../../store/menuSlice";

const ADD_ITEM = 'ADD_ITEM';
const EDIT = 'EDIT';
const SHOW_ITEMS = 'SHOW_ITEMS';

const CafeMenu = ()=>{
  const dispatch = useDispatch();
  const [ view, setView ] = useState(SHOW_ITEMS);
  const menuItems = useSelector(state => state.menuItems.menuItems)

  const removeItem = (id)=>{
    dispatch(removeMenuItem(id))
  }

  if(view == SHOW_ITEMS || view == EDIT) return(
    <div className="flex flex-col gap-6 min-w-[650px] h-[70vh]">
      <div className="flex justify-center gap-5">
        <button className="bg-bg1 px-5 py-3 rounded-md" onClick={()=> setView(ADD_ITEM)}>Add Item</button>
        { view == SHOW_ITEMS && <button className="bg-bg1 px-5 py-3 rounded-md" onClick={()=>setView(EDIT)}>Edit Menu</button>}
        { view == EDIT && <button className="bg-bg1 px-5 py-3 rounded-md" onClick={()=>setView(SHOW_ITEMS)}>Done</button>}
      </div>
      <div className="grid grid-cols-4 gap-3">
        {menuItems.map(item => 
          <div key={item.id} className="flex flex-col gap-1">
            <MenuItem item={item} id={item.id} />
            {view == EDIT && <button onClick={()=>removeItem(item.id)} className="flex justify-center items-center gap-1 rounded-md bg-bg1 w-full py-1"><Icon path={mdiMinusCircleOutline} size={0.7} /> Remove</button>}
          </div>
        )}
      </div>
    </div>
  )

  // if(view == EDIT) return(
  //   <EditMenuItems back={()=>setView(SHOW_ITEMS)} />
  // )

  if(view == ADD_ITEM) return(
    <AddMenuItem back={()=>setView(SHOW_ITEMS)} />
  )
}

export default CafeMenu;