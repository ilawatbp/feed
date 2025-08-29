import { MessageSquareText, Share, X } from "lucide-react";
export default function SideControl({id, onClickSideButtons }) {
  return (
    <div className="h-16 px-4 w-1/2 md:w-48 absolute z-30 top-[10%] right-[10px] md:top-[5%] md:right-10 flex flex-row items-center justify-between">
      <div className="bg-black text-white h-12 w-12 rounded-full flex justify-center items-center ">
        <Share size={15}/>
      </div>
      <div className="bg-black text-white h-12 w-12 rounded-full flex justify-center items-center"  onClick={()=> onClickSideButtons({"id": id, "action":"comment"})}>
        <MessageSquareText size={15}/>
      </div>
      <div className="bg-black text-white h-12 w-12 rounded-full flex justify-center items-center" onClick={()=>onClickSideButtons({"id": id, "action":"remove"})}>
        <X size={15}/>
      </div>

    </div>
  );
}









// import { MessageSquareText, Share, X } from "lucide-react";
// export default function SideControl({id, onClickRemove, setIsModalOpen}) {
//   return (
//     <div className="w-28 h-1/3 absolute z-40 top-[1%] right-0 flex flex-col gap-6 items-center justify-end">
//       <div className="bg-black/30 text-white h-14 w-14 rounded-full flex justify-center items-center">
//         <X onClick={()=>onClickRemove(id)}/>
//       </div>
//       <div className="bg-black/30 text-white h-14 w-14 rounded-full flex justify-center items-center">
//         <Share />
//       </div>
//       <div className="bg-black/30 text-white h-14 w-14 rounded-full flex justify-center items-center">
//         <MessageSquareText onClick={()=> setIsModalOpen(true)}/>
//       </div>

//     </div>
//   );
// }



