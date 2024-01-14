import { useState } from 'react';

import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

const Modal = ({ children, showModal, closeModal, title })=>{
  return showModal && (
    <div className="w-screen h-screen absolute top-0 left-0 bg-[#00000080] flex justify-center items-center z-9999">
      <div className="min-w-96 bg-bg2 min-h-40 rounded-lg">
        <div className="py-3 px-5 flex items-center justify-between">
          <div>{title || ""}</div>
          <button onClick={closeModal} className="hover:bg-bg1 rounded-md">
            <Icon path={mdiClose} size={1.2} className="text-tc1"/>
          </button>
        </div>
        <div className="flex justify-center items-center p-5">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal