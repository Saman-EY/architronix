"use client";
import React, { useEffect } from "react";
import BottomNavbar from "./bottomNavbar";
import MobileNavbar from "./mobileNavbar";
import { useDispatch, useSelector } from "react-redux";
import { setModalRdx } from "@/redux/others";
import { AnimatePresence } from "framer-motion";
import DetailsModal from "../ui/DetailsModal";
import { usePathname } from "next/navigation";

const HeaderThree = () => {
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
    </header>
  );
};

export default HeaderThree;
