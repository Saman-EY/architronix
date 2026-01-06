"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PlayIcon from "@/assets/icons/playIcon";
import ModalVideo from "react-modal-video";
import "/node_modules/react-modal-video/scss/modal-video.scss";
import useOverflowHidden from "@/hooks/useOverflowHidden";
import { cardSlideAnimation } from "@/lib/utils";

const VideoPlay = ({ img }) => {
  const [isOpen, setOpen] = useState(false);
  useOverflowHidden(isOpen);
  return (
    <>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={cardSlideAnimation()}
        viewport={{ once: true, amount: 0.2 }}
        className="relative max-h-[400px] mt-10 lg:mt-0"
      >
        <Image
          src={img}
          loading="lazy"
          alt="video"
          width={500}
          height={500}
          className="w-full md:min-w-[500px] min-h-[500px] max-w-[698px] mx-auto h-full max-h-[700px] object-cover"
        />
        {isOpen && (
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-50 flex  items-center justify-center bg-black/70"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-black max-h-[86vh] rounded-lg overflow-hidden"
            > 
              {/* Close button */}
              <button onClick={() => setOpen(false)} className="absolute top-3 right-3 z-10 text-white text-xl">
                ✕
              </button>

              {/* Local video */}
              <video src="/modalVid.mp4" controls autoPlay className="w-full h-auto" />
            </div>
          </div>
        )}

        <div
          onClick={() => setOpen(true)}
          className=" md:w-[109px] md:h-[109px] w-24 h-24 rounded-full text-primary-foreground absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#D9D9D9]/[.78] cursor-pointer flex justify-center items-center"
        >
          <span className="ml-2.5">
            <PlayIcon width={"30"} height={"36"} />
          </span>
        </div>
      </motion.div>
    </>
  );
};

export default VideoPlay;
