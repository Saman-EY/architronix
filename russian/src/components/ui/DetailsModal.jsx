"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { setModalRdx } from "@/redux/others";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { publicApi } from "@/lib/api";
import Image from "next/image";

function DetailsModal() {
  const dispatch = useDispatch();
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const SUBMITTED_KEY = "jasdkhjzxcnbasdhui84392";

  const handleSubmit = async () => {
    if (fullname.length < 3 || fullname.length > 30) {
      toast.error("Fullname must be between 3 and 30 characters");
      return;
    }
    if (!phone) {
      toast.error("Phone number is required");
      return;
    }
    if (!email) {
      toast.error("email is required");
      return;
    }

    try {
      const body = {
        fullname,
        phone,
        email,
      };

      await publicApi.post("/api/send-details", body);

      toast.success("Your details were submitted successfully ✅");
      localStorage.setItem(SUBMITTED_KEY, "true");
      dispatch(setModalRdx(false));
      window.open("/brochure.pdf", "_blank");

      // optional reset
      setFullname("");
      setPhone("");
      setEmail("");
    } catch (error) {
      console.log("error", error);
      const message = error?.response?.data || error?.message || "Something went wrong. Please try again.";
      toast.error(message);
    }
  };

  return (
    <section className="px-5">
      <motion.div
        onClick={() => dispatch(setModalRdx(false))}
        className="z-[100] fixed inset-0 text-white w-full h-full bg-black/70"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed top-1/2  left-1/2 -translate-y-1/2 rounded-md -translate-x-1/2 w-full max-w-[90%] md:max-w-[500px]  bg-slate-100 z-[105] flex flex-col gap-3 p-5"
      >
        <button
          onClick={() => dispatch(setModalRdx(false))}
          className="bg-black text-white rounded-full size-7 flex items-center justify-center text-xs absolute right-2 top-2 hover:bg-black/80 transition-all"
        >
          X
        </button>

        <section className="">
          <Image className="w-full object-cover h-[200px]" width={500} height={500} src={"/topFooter.JPG"} alt="" />

          <div className="flex flex-col gap-3">
            <h6 className="text-xl text-center mt-3 font-semibold">PAYMENT PLAN</h6>
            <div>
              <PaymentCard title={"DOWNPAYMENT"} price={"20%"} desc={"IMMEDIATE"} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <PaymentCard desc={"After 6 months from Booking Date"} price={"10%"} title={"1 INSTALLMENT"} />
              <PaymentCard desc={"After 12 months from Booking Date"} price={"10%"} title={"2 INSTALLMENT"} />
              <PaymentCard desc={"After 24 months from Booking Date"} price={"10%"} title={"3 INSTALLMENT"} />
              <PaymentCard desc={"On project completion"} price={"50%"} title={"FINAL INSTALLMENT"} />
            </div>
          </div>
        </section>

        <input
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          type="text"
          placeholder="Ваше имя"
          className="border border-gray-500 rounded-md p-2 text-base"
          onInput={(e) => {
            e.currentTarget.value = e.currentTarget.value.replace(/^\s+/, "");
          }}
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="text"
          placeholder="Номер телефона"
          className="border border-gray-500 rounded-md p-2 text-base"
          onInput={(e) => {
            let value = e.currentTarget.value;

            // Remove invalid chars
            value = value.replace(/[^0-9+]/g, "");

            // Allow only one + and only at start
            if (value.includes("+")) {
              value = "+" + value.replace(/\+/g, "").replace(/^0+/, "");
            }

            e.currentTarget.value = value;
          }}
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="E-Mail адрес"
          className="border border-gray-500 rounded-md p-2 text-base"
          onInput={(e) => {
            e.currentTarget.value = e.currentTarget.value.replace(/^\s+/, "");
          }}
        />

        <button
          onClick={handleSubmit}
          className="px-6 py-2 text-white hover:bg-black/80 transition-all text-sm md:text-base bg-black mt-auto rounded"
        >
          Submit And Download Brochure
        </button>
      </motion.div>
    </section>
  );
}

export default DetailsModal;

const PaymentCard = ({ title, price, desc }) => {
  return (
    <div className="bg-white p-3 flex flex-col justify-center items-center">
      <h6 className="text-3xl">{price}</h6>
      <span className="text-sm">{title}</span>
      <span className="text-xs text-slate-400">{desc}</span>
    </div>
  );
};
