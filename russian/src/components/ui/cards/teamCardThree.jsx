import { staticBluarDataUrl } from "@/lib/staticBluarDataUrl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TeamCardThree = ({ img, name, position, link }) => {
  return (
    <div className="w-full h-full hover-underline">
      <Link href={link}>
        <Image className="h-[340px] object-cover" src={img} loading="lazy" width={800} height={800}  alt="team-img" />
      </Link>
      <div className="mt-7.5">
        <Link href={link} className="text-2xl font-bold leading-160 text-primary-foreground ">
          <span>{name}</span>
        </Link>
        <p className=" text-primary-foreground">{position}</p>
      </div>
    </div>
  );
};

export default TeamCardThree;
