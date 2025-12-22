"use client";
import React from "react";
import { motion } from "framer-motion";
import { cardSlideAnimation } from "@/lib/utils";
import Image from "next/image";
const SectionSidebarImg = ({ img, section_name, className, imgClass }) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      variants={cardSlideAnimation()}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      <Image className={`rounded h-[230px] object-cover ${imgClass}`} src={img} loading="lazy" width={700} height={700} alt={section_name} />
    </motion.div>
  );
};

export default SectionSidebarImg;
