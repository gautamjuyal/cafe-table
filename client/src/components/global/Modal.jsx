import {createPortal} from 'react-dom'

import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

const Modal = ({ children, showModal, closeModal, title, nonPersistent })=>{
  if(!showModal) return null

  return createPortal(
    <div className="w-[100%] h-[100vh] top-0 left-0 bg-[#00000080] flex justify-center items-center box-border fixed text-tc2" onClick={()=> nonPersistent && closeModal()}>
      <div className="min-w-96 bg-bg2 min-h-40 rounded-lg p-5" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-3">
          <div className='text-xl font-semibold'>{title || ""}</div>
          <button onClick={closeModal} className="hover:bg-bg1 rounded-md">
            <Icon path={mdiClose} size={1.2} className="text-tc1"/>
          </button>
        </div>
          {children}
      </div>
    </div>
    , document.getElementById('root')
  )
}

export default Modal