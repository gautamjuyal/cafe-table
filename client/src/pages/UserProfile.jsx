import { useState } from 'react';
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { Switch, Select } from '@mui/material';
import Icon from '@mdi/react';
import { mdiAccount, mdiCog, mdiArrowLeft, mdiAccountCog } from '@mdi/js';

const UserProfile = ()=>{
  const navigate = useNavigate();
  const [editAccount, setEditAcccount] = useState(false)
  const [userDetails, setUserDetails] = useState(useSelector(state => state.user.user))

  return(
    <div className="text-tc2 flex flex-col items-center w-full min-h-screen py-5 gap-6">
      <div className='flex justify-start w-[1000px]'>
          <button onClick={()=> navigate(-1)} className='bg-bg2 px-5 py-2 rounded-md flex gap-2 items-center'><Icon path={mdiArrowLeft} size={0.8} />Back</button>
      </div>
      <div className="bg-bg2 w-[1000px] px-4 py-6 rounded-md">
        <div className="text-center font-semibold text-xl flex justify-center items-center gap-2"><Icon path={mdiAccount} size={1} /> Account Details</div>
        <div className='flex mt-4'>
          <div className='w-1/2 px-4'>

            <div className='flex flex-col'>
              <label className='font-semibold mb-1'>Name</label>
              <input type="text" value={userDetails.name} className={`bg-bg1 focus:outline-0 active:outline-0 px-3 py-2 rounded-md ${editAccount ? 'border' : ''}`} disabled={!editAccount}/>
            </div>

            <div className='flex flex-col mt-3'>
              <label className='font-semibold mb-1'>Phone Number</label>
              <input type="text" value={userDetails.contactInfo.phone} className={`bg-bg1 focus:outline-0 active:outline-0 px-3 py-2 rounded-md ${editAccount ? 'border' : ''}`} disabled={!editAccount}/>
            </div>

            <div className='flex flex-col mt-3'>
              <label className='font-semibold mb-1'>Email</label>
              <input type="text" value={userDetails.contactInfo.email} className={`bg-bg1 focus:outline-0 active:outline-0 px-3 py-2 rounded-md ${editAccount ? 'border' : ''}`} disabled={!editAccount}/>
            </div>

            <div className='flex flex-col mt-3'>
              <label className='font-semibold mb-1'>Adddress</label>
              <input type="text" value={userDetails.address} className={`bg-bg1 focus:outline-0 active:outline-0 px-3 py-2 rounded-md ${editAccount ? 'border' : ''}`} disabled={!editAccount}/>
            </div>

            <div className='flex flex-col mt-3'>
              <label className='font-semibold mb-1'>Description</label>
              <textarea type="text" value={userDetails.description} className={`bg-bg1 focus:outline-0 active:outline-0 px-3 py-2 rounded-md ${editAccount ? 'border' : ''}`} disabled={!editAccount}/>
            </div>

            <button className="bg-bg1 py-2 px-8 mt-4 rounded-md" onClick={()=> setEditAcccount(prev => !prev)}>{!editAccount ? 'Edit' : 'Save'}</button>
          </div>

          <div className='w-1/2 flex justify-center'>
            <div className='bg-bg1 flex justify-center items-center rounded-full w-[350px] h-[350px]'>
              {userDetails.img ? 
                <img src={userDetails.img} alt="account" />
                :
                <Icon path={mdiAccount} size={10} />
              }
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-bg2 w-[1000px] px-4 py-6 rounded-md">
        <div className="text-center font-semibold text-xl flex justify-center items-center gap-2"><Icon path={mdiCog} size={1} /> Preferences</div>
        <div className='grid grid-cols-2 gap-3 py-6 px-6'>
          <div className='bg-bg1 flex flex-col px-3 py-4 rounded-md'>
            <div className='flex flex-col'>
              <div className='mb-2'>Currency</div>
              <Select className="bg-bg2 rounded-md">
                <div className='bg-bg2'>hehe</div>
                <div>wewe</div>
              </Select>
            </div>
            <div className='flex flex-col mt-4'>
              <div className='mb-2'>GST on order/items (%)</div>
              <Select className='bg-bg2'>
                <div>hehe</div>
                <div>hehe</div>
              </Select>
            </div>
          </div>
          <div>
            <div className='bg-bg1 flex justify-between px-3 py-4 gap-4 rounded-md '>
              <div>Include GST in price <br /><span className='text-sm'>When turned on, the individual prices of items are displayed inclusive of the GST</span></div>
              <Switch />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-bg2 w-[1000px] px-4 py-6 rounded-md">
        <div className="text-center font-semibold text-xl flex justify-center items-center gap-2"><Icon path={mdiAccountCog} size={1.1} /> Account Settings</div>
        <div className='grid grid-cols-2 gap-3 py-6 px-6'>
          <div className='bg-bg1 flex flex-col items-start px-3 py-4 gap-4 rounded-md text-md'>
            <div>Log out <br /><span className='text-sm'>Log out of current session from the browser.</span></div>
            <button className='bg-bg2 py-2 px-5 rounded-md'>Log out</button>
          </div>
        </div>   
      </div>
    </div>
  )
}

export default UserProfile;