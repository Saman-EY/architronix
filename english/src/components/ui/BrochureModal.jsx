import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setBrochureModalRdx, setModalRdx } from "@/redux/others";

function BrochureModal() {
  const dispatch = useDispatch();

  const { brochureModal } = useSelector((state) => state.othersRdx);

  const handleClick = () => {
    dispatch(setBrochureModalRdx(false));
    dispatch(setModalRdx(true));
  };

  useEffect(() => {
    if (brochureModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [brochureModal]);

  return (
    <section className="px-5">
      <motion.div
        onClick={() => dispatch(setBrochureModalRdx(false))}
        className="z-[100] fixed inset-0 text-white w-full h-full bg-black/70"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed top-1/2  left-1/2 -translate-y-1/2 rounded-md -translate-x-1/2 w-full max-w-[90%] md:max-w-[500px] max-h-[95%] overflow-auto  bg-slate-100 z-[105] flex flex-col gap-3 p-5"
      >
        <button
          onClick={() => dispatch(setBrochureModalRdx(false))}
          className="bg-black text-white rounded-full size-7 flex items-center justify-center text-xs absolute right-2 top-2 hover:bg-black/80 transition-all"
        >
          X
        </button>
        <section className="">
          <Image className="w-full object-cover h-[280px]" width={500} height={500} src={"/project1.jpg"} alt="" />
          <button
            onClick={handleClick}
            className="px-6 w-full  py-2 text-white hover:bg-black/80 transition-all text-sm md:text-base bg-black mt-4 cursor-pointer rounded disabled:opacity-50"
          >
            DOWNLOAD BRUCHURE
          </button>
        </section>
      </motion.div>
    </section>
  );
}

export default BrochureModal;
