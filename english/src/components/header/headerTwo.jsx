"use client";
import React, { useEffect } from "react";
import BottomNavbar from "./bottomNavbar";
import MobileNavbar from "./mobileNavbar";
import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import DetailsModal from "../ui/DetailsModal";
import { setBrochureModalRdx, setModalRdx } from "@/redux/others";
import BrochureModal from "../ui/BrochureModal";

const HeaderTwo = () => {
  const { detailModal, brochureModal } = useSelector((state) => state.othersRdx);
  const dispatch = useDispatch();
  const pathname = usePathname();

  const SUBMITTED_KEY = "jasdkhjzxcnbasdhui84392";

  useEffect(() => {
    if (brochureModal || detailModal) {
      return;
    }
    const timer = setTimeout(() => {
      const hasSubmitted = localStorage.getItem(SUBMITTED_KEY);

      if (!hasSubmitted) {
        dispatch(setBrochureModalRdx(true));
      }
    }, 30000); // 30 seconds

    return () => clearTimeout(timer);
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
      {brochureModal && <BrochureModal />}
    </header>
  );
};

export default HeaderTwo;
