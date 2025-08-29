import { X } from "lucide-react";
import { Children } from "react";
export default function Modal({children, isModalOpen, setIsModalOpen, setModalValue, height}){

  if(!isModalOpen){
    return null;
  }

  return(
    <div className="fixed w-full h-dvh bg-black/70 z-50 flex justify-center items-end">
      <div className={`w-full bg-white rounded-t-2xl p-4 animate-slideUp overflow-hidden flex flex-col xl:w-1/2 h-${height}` }>
      <div className="w-full flex justify-end">
        <X className="w-6 h-6 cursor-pointer"  onClick={()=>{setModalValue(""); setIsModalOpen(false);} }/>
      </div>
      <div className="flex justify-center items-center w-full flex-1 ">
        {children}
      </div>
      </div>
    </div>
  )
}