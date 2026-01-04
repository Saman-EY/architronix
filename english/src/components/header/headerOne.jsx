"use client";
import React, { useEffect } from "react";
import TopNavbar from "./topNavbar";
import BottomNavbar from "./bottomNavbar";
import MobileNavbar from "./mobileNavbar";
import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { setBrochureModalRdx } from "@/redux/others";
import DetailsModal from "../ui/DetailsModal";
import BrochureModal from "../ui/BrochureModal";

const HeaderOne = () => {
  const { detailModal, brochureModal } = useSelector((state) => state.othersRdx);
  const dispatch = useDispatch();
  const pathname = usePathname();

  const SUBMITTED_KEY = "jasdkhjzxcnbasdhui84392";

  useEffect(() => {
    if (brochureModal || detailModal) {
      setBrochureModalRdx(false);
      return;
    }
    const timer = setTimeout(() => {
      const hasSubmitted = localStorage.getItem(SUBMITTED_KEY);

      if (!hasSubmitted) {
        dispatch(setBrochureModalRdx(true));
      }
    }, 30000); // 30 seconds

    return () => clearTimeout(timer);
  }, [pathname, brochureModal, detailModal]);

  return (
    <>
      <header className="absolute z-40 top-0 left-0 w-full bg-gray overflow-x-clip header-one">
        <div className="border-border border-t border-b hidden xl:block">
          <div className="container-fluid">
            <BottomNavbar />
          </div>
        </div>

        <div className="xl:hidden block ">
          <MobileNavbar />
        </div>
        {detailModal && <DetailsModal />}
        {brochureModal && <BrochureModal />}
      </header>
    </>
  );
};

export default HeaderOne;
