import { useState } from "react";
import Modal from "./Modal";

const ConfirmationModal = ({title, text, okAction, cancelAction})=>{
  const [show, setShow] = useState(false);
  const open = ()=>{
    setShow(true);
  }
  const close = ()=>{
    setShow(false);
  }
  return(
    <Modal title={title} showModal={show} closeModal={()=> setShow(false)}>
      <div>
        <div>{text}</div>
        <div>
          <button onClick={()=> {if(okAction) okAction(); close()}}>Okay</button>
          <button onClick={()=> {if(cancelAction) cancelAction(); close()}}>cancel</button>
        </div>
      </div>
    </Modal>
  )
}

export default ConfirmationModal;