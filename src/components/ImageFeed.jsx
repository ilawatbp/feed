import SideControl from "./SideControl";
import ModalAction from "./ModalAction";
import { useState } from "react";

export default function ImageFeed({ qrValue, setQrValue }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalValue, setModalValue] = useState("");

  function onClickSideButtons(imageId) {
    setModalValue(imageId);
    setIsModalOpen(true);
  }

  return (
    <div className="w-full max-h-dvh overflow-y-scroll snap-y snap-mandatory">
      <ModalAction
        setQrValue={setQrValue}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        modalValue={modalValue}
        setModalValue={setModalValue}
      />

      {qrValue.map((src, idx) => (
        <div
          key={idx}
          className="w-full h-dvh flex items-center justify-center snap-start bg-[#1A1A1A] relative"
        >
          <div className="relative overflow-hidden object-contain h-dvh rounded-xl flex flex-col justify-center items-center p-4">
            <img
              src={src.link}
              alt={idx}
              className="max-h-full max-w-full object-contain rounded-xl"
            />
            <SideControl id={src.id} onClickSideButtons={onClickSideButtons} />
          </div>
          {src.comment && (
            <div className="absolute w-3/4 h-[30%] bottom-0 left-0  xl:w-[20%] xl:bg-white/20 p-12 flex items-end">
              <p className="text-white"  style={{ whiteSpace: 'pre-wrap' }}>{src.comment}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
