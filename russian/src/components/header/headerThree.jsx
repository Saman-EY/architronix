"use client";
import React, { useEffect } from "react";
import BottomNavbar from "./bottomNavbar";
import MobileNavbar from "./mobileNavbar";
import { useDispatch, useSelector } from "react-redux";
import { setBrochureModalRdx } from "@/redux/others";
import DetailsModal from "../ui/DetailsModal";
import { usePathname } from "next/navigation";
import BrochureModal from "../ui/BrochureModal";

const HeaderThree = () => {
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
    <header className="absolute top-0 left-0 w-full z-50 overflow-x-clip">
      {/* <button onClick={() => dispatch(setModalRdx(true))} className="bg-white px-6 py-2">
        OPEN DETAIL MODAL
      </button> */}
      <div className=" container-fluid ">
        <div className="container border-white border-b">
          <div className=" hidden xl:block">
            <BottomNavbar linkColor="text-white" />
          </div>
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

export default HeaderThree;
