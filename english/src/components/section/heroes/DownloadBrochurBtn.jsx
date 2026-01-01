"use client";
import ButtonFill from "@/components/ui/buttons/buttonFill";
import RightArrow from "@/assets/icons/rightArrow";
import { useDispatch } from "react-redux";
import { setModalRdx } from "@/redux/others";

function DownloadBrochurBtn({ children, parentClass }) {
  const dispatch = useDispatch();
  const SUBMITTED_KEY = "jasdkhjzxcnbasdhui84392";

  const handleClick = () => {
    const hasSubmitted = localStorage.getItem(SUBMITTED_KEY);
    if (!hasSubmitted) {
      dispatch(setModalRdx(true));
    } else {
      const link = document.createElement("a");
      link.href = "/brochure.pdf";
      link.target = "_blank";
      link.rel = "noopener";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  if (children) {
    return <div className={`mt-10 inline-block ${parentClass}`} onClick={handleClick}>{children}</div>;
  }

  return (
    <div onClick={handleClick} className="mt-16 inline-block">
      <ButtonFill
        className={`sm:px-10 px-4 after:left-0 after:bg-secondary text-primary-foreground border-secondary hover:text-secondary-foreground`}
      >
        {" "}
        СМОТРЕТЬ ПРОЕКТЫ <RightArrow width={"35"} height={"22"} />{" "}
      </ButtonFill>
    </div>
  );
}

export default DownloadBrochurBtn;
