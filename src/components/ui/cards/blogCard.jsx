import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ thumb, date, tag, title, text_muted }) => {
  return (
    <div className="hover-underline">
      <Image
        src={thumb}
        loading="lazy"
        alt={title}
        width={500}
        height={500}
        className="w-full h-40 object-cover"
      />
      <div className="mt-8">
        <p className={cn(`text-primary-foreground flex items-center gap-2 mb-2.5`)}>
          {" "}
          <small className="text-lg">{date}</small> / <small className="text-lg">{tag}</small>{" "}
        </p>
        <span className={cn(`text-primary-foreground font-semibold text-2xl ${text_muted}`)}>{title}</span>
      </div>
    </div>
  );
};

export default BlogCard;
