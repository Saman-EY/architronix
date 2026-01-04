"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { setModalRdx } from "@/redux/others";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { publicApi } from "@/lib/api";
import Image from "next/image";

const BrochureList = [
  {
    value: "1",
    title: "TRUMP INTERNATIONAL HOTEL & TOWER DUBAI",
  },
  {
    value: "2",
    title: "AIDA OMAN",
  },
  {
    value: "3",
    title: "LES VAGUES BY ELIE SAAB QATAR",
  },
  {
    value: "4",
    title: "TRUMP INTERNATIONAL HOTEL, OMAN",
  },
  {
    value: "5",
    title: "TRUMP CLIFF VILLAS OMAN",
  },
  {
    value: "6",
    title: "TRUMP GOLF VILLAS OMAN",
  },
  {
    value: "7",
    title: "AMOUR SANS DETOUR OMAN",
  },
  {
    value: "8",
    title: "COASTAL INVESTMENT VILLAS OMAN",
  },
  {
    value: "9",
    title: "THE GREAT ESCAPE OMAN",
  },
  {
    value: "10",
    title: "THE GREAT ESCAPE 2 OMAN",
  },
  {
    value: "11",
    title: "SUNRISE HAVEN OMAN",
  },
  {
    value: "12",
    title: "MAREA, INTERIORS BY MISSONI SPAIN",
  },
];

function DetailsModal() {
  const dispatch = useDispatch();
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [findUs, setFindUs] = useState("");
  const [selectedBrochure, setSelectedBrochure] = useState("");
  const [comment, setComment] = useState("");
  const { detailModal } = useSelector((state) => state.othersRdx);
  const [loading, setLoading] = useState(false);

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
    if (!findUs) {
      toast.error("Please tell us how you found us");
      return;
    }
    if (!selectedBrochure) {
      toast.error("Please select a brochure");
      return;
    }

    try {
      setLoading(true);
      const body = {
        fullname,
        phone,
        email,
      };

      await publicApi.post("/api/send-details", body);

      toast.success("Your details were submitted successfully ✅");
      localStorage.setItem(SUBMITTED_KEY, "true");
      dispatch(setModalRdx(false));
      // window.open("/brochure.pdf", "_blank");

      const link = document.createElement("a");
      link.href = "/brochure.pdf";
      link.target = "_blank";
      link.rel = "noopener";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // optional reset
      setFullname("");
      setPhone("");
      setEmail("");
    } catch (error) {
      console.log("error", error);
      const messages = error?.response?.data || error?.message || "Something went wrong. Please try again.";
      if (messages.invalidParams.length > 0) {
        console.log(messages.invalidParams[0].message);
        toast.error(messages.invalidParams[0].message);
      } else {
        toast.error("Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (detailModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [detailModal]);

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
        className="fixed top-1/2  left-1/2 -translate-y-1/2 rounded-md -translate-x-1/2 w-full max-w-[90%] md:max-w-[500px] max-h-[95%] overflow-auto  bg-slate-100 z-[105] flex flex-col gap-3 p-5"
      >
        <button
          onClick={() => dispatch(setModalRdx(false))}
          className="bg-black text-white rounded-full size-7 flex items-center justify-center text-xs absolute right-2 top-2 hover:bg-black/80 transition-all"
        >
          X
        </button>

        <h6 className="text-lg font-semibold text-center">DOWNLOAD BROCHURE</h6>

        <input
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          type="text"
          placeholder="Full Name"
          className="border border-gray-500 rounded-md p-2 text-base"
          onInput={(e) => {
            e.currentTarget.value = e.currentTarget.value.replace(/^\s+/, "");
          }}
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="text"
          placeholder="Phone"
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
          type="email"
          placeholder="E-Mail"
          className="border border-gray-500 rounded-md p-2 text-base"
          onInput={(e) => {
            e.currentTarget.value = e.currentTarget.value.replace(/^\s+/, "");
          }}
        />
        <div className="relative w-full">
          <select
            onChange={(e) => setFindUs(e.target.value)}
            value={findUs}
            className={`h-10 px-2 w-full custom-select ${
              !findUs ? "text-slate-400" : ""
            }  border border-gray-500 rounded-md text-base`}
            name="find-us"
            id="find-us"
          >
            <option disabled value="">
              How did you find us
            </option>
            <option className="text-slate-600" value="twitter">
              Twitter
            </option>
            <option className="text-slate-600" value="facebook">
              Facebook
            </option>
            <option className="text-slate-600" value="instagram">
              Instagram
            </option>
            <option className="text-slate-600" value="google">
              Google
            </option>
            <option className="text-slate-600" value="others">
              others
            </option>
          </select>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs">▼</span>
        </div>
        <div className="relative w-full">
          <select
            onChange={(e) => setSelectedBrochure(e.target.value)}
            value={selectedBrochure}
            className={`h-10 w-full ${
              !selectedBrochure ? "text-slate-400" : ""
            } custom-select px-2  border border-gray-500 rounded-md text-base`}
            name="find-us"
            id="find-us"
          >
            <option disabled value="">
              Select Brochure
            </option>
            {BrochureList.map((brochure) => (
              <option key={brochure.value} className="text-slate-600" value={brochure.value}>
                {brochure.title}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs">▼</span>
        </div>

        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Additional Comment"
          className="border resize-none border-gray-500 p-2 rounded-md text-base"
          name="comment"
          id="comment"
          rows={5}
          onInput={(e) => {
            e.currentTarget.value = e.currentTarget.value.replace(/^\s+/, "");
          }}
        ></textarea>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="px-6 py-2 text-white hover:bg-black/80 transition-all text-sm md:text-base bg-black mt-auto cursor-pointer rounded disabled:opacity-50"
        >
          Download Brochure
        </button>
      </motion.div>
    </section>
  );
}

export default DetailsModal;

const PaymentCard = ({ title, price, desc }) => {
  return (
    <div className="bg-white p-3 flex flex-col justify-center items-center">
      <div className="flex items-center gap-1 flex-wrap justify-center">
        <h6 className="text-lg text-center">{price}</h6>
        <span className="text-sm text-center">{title}</span>
      </div>
      <span className="text-xs text-slate-400 text-center">{desc}</span>
    </div>
  );
};
