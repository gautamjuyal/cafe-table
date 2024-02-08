import { useState } from "react";
import { useDispatch } from "react-redux";

import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';

import {addMenuItem} from "../../store/menuSlice"

const AddMenuItem = ({back})=>{
  const dispatch = useDispatch()

  const [itemName, setItemName] = useState('');
  const [itemCategory, setItemCategory] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemImage, setItemImage] = useState('')

  return(
    <div className="h-[70vh] min-w-[650px] py-3 px-4 overflow-y-scroll">
      <div>
        <button className="bg-bg1 flex gap-2 items-center px-5 py-2 rounded-md" onClick={back}><Icon path={mdiArrowLeft} size={0.8}/> Back</button>
      </div>
      <div className="py-3 text-center font-semibold">Add new item</div>
      <div className="flex">
        <div className="overflow-hidden w-1/2">
          <div className="flex flex-col">
            <label className="mb-2">Item name</label>
            <input type="text" value={itemName} onChange={(e)=> setItemName(e.target.value)} className="bg-bg1 border focus:outline-0 active:outline-0 px-3 py-2 rounded-md"/>
            <div className="text-sm px-3 text-tc1">Example : Noodeles, Pizza</div>
          </div>
          <div className="flex flex-col mt-4">
            <label className="mb-2">Category</label>
            <input value={itemCategory} onChange={(e)=> setItemCategory(e.target.value)} type="text" className="bg-bg1 border focus:outline-0 active:outline-0 px-3 py-2 rounded-md"/>
          </div>
          <div className="flex flex-col mt-4">
            <label className="mb-2">Price</label>
            <input value={itemPrice} onChange={(e)=> setItemPrice(e.target.value)} type="text" className="bg-bg1 border focus:outline-0 active:outline-0 px-3 py-2 rounded-md"/>
          </div>
          <div className="flex flex-col mt-4">
            <label className="mb-2">Image</label>
            <input value={itemImage} onChange={(e)=> setItemImage(e.target.value)} type="text" className="bg-bg1 border focus:outline-0 active:outline-0 px-3 py-2 rounded-md"/>
          </div>
          <button className="bg-bg1 mt-5 px-5 py-2 rounded-md" onClick={()=> dispatch(addMenuItem({name : itemName, category: itemCategory, price : itemPrice, image : itemImage}))}>Add item</button>
        </div>
        <div className="w-1/2">
          preview
        </div>
      </div>
    </div>
  )
}

export default AddMenuItem;