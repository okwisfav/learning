import React, { useEffect } from 'react';

const Modal = ({ModalContent,closeModel}) => {
  useEffect(() => {
    setTimeout(() => {
      closeModel()
    },3000)
  })
  return(
     <div>
       <p>{ModalContent}</p>
     </div>
  )
};

export default Modal;
