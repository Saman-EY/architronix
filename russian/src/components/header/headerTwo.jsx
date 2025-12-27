"use client";
import React, { useEffect } from "react";
import BottomNavbar from "./bottomNavbar";
import MobileNavbar from "./mobileNavbar";
import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import DetailsModal from "../ui/DetailsModal";
import { setModalRdx } from "@/redux/others";

const HeaderTwo = () => {
  const { detailModal } = useSelector((state) => state.othersRdx);
  const dispatch = useDispatch();
  const pathname = usePathname();

  const SUBMITTED_KEY = "jasdkhjzxcnbasdhui84392";

  useEffect(() => {
    const hasSubmitted = localStorage.getItem(SUBMITTED_KEY);

    if (!hasSubmitted) {
      dispatch(setModalRdx(true));
    }
  }, [pathname]);

  return (
    <header className="w-full bg-background shadow-md">
      <div className=" hidden xl:block">
        <div className="container-fluid">
          <BottomNavbar />
        </div>
      </div>
      <div className="xl:hidden block">
        <MobileNavbar />
      </div>
      {detailModal && <DetailsModal />}
    </header>
  );
};

export default HeaderTwo;
