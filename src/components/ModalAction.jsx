import { useRef } from "react";
import Modal from "./Modal.jsx";

export default function ModalAction({setQrValue, setIsModalOpen, isModalOpen, modalValue, setModalValue}){

    const commentText = useRef();

    function saveText(itemId){
        const  commentTextValue = commentText.current.value;
        setQrValue(prev => (
            prev.map((item)=>( item.id === itemId ? {...item, comment:commentTextValue} : item))
        ))
        setModalValue(""); 
        setIsModalOpen(false);

    }

      function removeItemFromList(imageId){    
        setQrValue(prev => prev.filter(imgId => imgId.id !== imageId))
        setModalValue(""); 
        setIsModalOpen(false);
  }
    return(
        <div>
                    {modalValue.action === "remove" && (
          <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setModalValue={setModalValue} >
              <div class className="w-full h-3/4 flex justify-evenly items-end">
                <button className=" border border-black w-[40%] h-14 rounded-full" onClick={()=>removeItemFromList(modalValue.id)}>Remove</button>
                <button className="bg-red-500 text-white w-[40%] h-14 rounded-full" onClick={()=>{setModalValue(""); setIsModalOpen(false);} }>Cancel</button>
              </div>
          </Modal>
        )}
        {modalValue.action === "comment" && (
          <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setModalValue={setModalValue} height="1/2">
            <div className="w-full h-full flex flex-col justify-between p-4">
              <p>Comment:</p>
              <textarea ref={commentText} name="" id="" className="bg-slate-100 h-full my-4 rounded-2xl p-4 border border-black"></textarea>
              <div className="w-full flex items-end justify-end">
                <button className="bg-green-500 text-white w-[40%] h-14 rounded-full" onClick={()=> saveText(modalValue.id)}>Save</button>
              </div>
            </div>

          </Modal>
        )}
        </div>
    )
}