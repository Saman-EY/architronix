"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { setModalRdx } from "@/redux/others";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { publicApi } from "@/lib/api";
import Image from "next/image";
import countries from "i18n-iso-countries";
import en from "i18n-iso-countries/langs/en.json";
import { getCountries, getCountryCallingCode } from "libphonenumber-js";

countries.registerLocale(en);
const COUNTRY_CODES3 = getCountries().map((iso) => ({
  iso,
  label: countries.getName(iso, "en"),
  code: `+${getCountryCallingCode(iso)}`,
}));

const BrochureList = [
  {
    value: "/dubai.pdf",
    title: "DUBAI TRUMP HOTEL ",
  },
  {
    value: "/aida.pdf",
    title: "AIDA OMAN",
  },
];

function DetailsModal() {
  const dispatch = useDispatch();
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [findUs, setFindUs] = useState("");
  const [selectedBrochure, setSelectedBrochure] = useState("");
  const { detailModal } = useSelector((state) => state.othersRdx);
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("+44");

  console.log("**", COUNTRY_CODES3);

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
      const fullPhone = `${countryCode}${phone}`;

      const body = {
        fullname,
        phone: fullPhone,
        email,
        how_he_find: findUs,
      };

      await publicApi.post("/api/send-details", body);

      toast.success("Your details were submitted successfully ✅");
      localStorage.setItem(SUBMITTED_KEY, "true");
      dispatch(setModalRdx(false));

      const link = document.createElement("a");
      link.href = selectedBrochure;
      link.target = "_blank";
      link.rel = "noopener";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // optional reset
      setFullname("");
      setPhone("");
      setEmail("");
      setFindUs("");
      setSelectedBrochure("");
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
          placeholder="Ваше имя"
          className="border border-gray-500 rounded-md p-2 text-base"
          onInput={(e) => {
            e.currentTarget.value = e.currentTarget.value.replace(/^\s+/, "");
          }}
        />
        {/* <input
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
        /> */}

        <div className="flex gap-1">
          {/* Country code select */}
          <CountryCodeSelect value={countryCode} onChange={setCountryCode} />

          {/* Phone input */}
          <input
            type="tel"
            value={phone}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              setPhone(value);
            }}
            placeholder="Номер телефона"
            className="border border-gray-500 rounded-md p-2 text-base flex-1"
          />
        </div>

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="E-Mail адрес"
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
              Как вы нас нашли?
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
              Выбрать брошюру
            </option>
            {BrochureList.map((brochure) => (
              <option key={brochure.value} className="text-slate-600" value={brochure.value}>
                {brochure.title}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs">▼</span>
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="px-6 py-2 text-white hover:bg-black/80 transition-all text-sm md:text-base bg-black mt-auto cursor-pointer rounded disabled:opacity-50"
        >
          Скачать брошюру
        </button>
      </motion.div>
    </section>
  );
}

export default DetailsModal;

function CountryCodeSelect({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef(null);

  const normalizedCountries = useMemo(
    () =>
      COUNTRY_CODES3.map((c) => ({
        ...c,
        label: c.label ?? c.iso,
      })),
    []
  );

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return normalizedCountries;

    return normalizedCountries.filter(
      (c) => c.label.toLowerCase().includes(q) || c.iso.toLowerCase().includes(q) || c.code.includes(q)
    );
  }, [search, normalizedCountries]);

  console.log("*filtered", filtered);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative bg-white min-w-18">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full border rounded-md px-3 py-2 text-base flex justify-between items-center"
      >
        {value}
        <span className="text-xs">▼</span>
      </button>

      {open && (
        <div className="absolute z-20 mt-1 w-full min-w-60 bg-white border rounded-md shadow-md">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-2 py-1 border-b text-sm outline-none"
          />

          <div className="max-h-48 overflow-y-auto">
            {filtered.length === 0 && <div className="p-3 text-sm text-slate-500">No results found</div>}

            {filtered.map((c) => (
              <button
                key={c.iso}
                onClick={() => {
                  onChange(c.code);
                  setOpen(false);
                  setSearch("");
                }}
                className="w-full text-left px-3 py-2 hover:bg-gray-100 text-sm"
              >
                {c.label} ({c.code})
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
