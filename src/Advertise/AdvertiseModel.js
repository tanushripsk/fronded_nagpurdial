import React, { useEffect, useRef } from "react";
import Otp3 from "../Otp3"; // Import your OTP3 component
const AdvertiseModel = () => {
  const modalRef = useRef(null);
  useEffect(() => {
    if (modalRef.current) {
      const myModal = new window.bootstrap.Modal(modalRef.current);
      myModal.show();
      return () => {
        myModal.dispose();
      };
    }
  }, []);
  return (
    <div className="modal" id="exampleModal" tabIndex="-1" ref={modalRef}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">NagpurDial</h5>
            <a href="/" style={{ textDecoration: "none" }}>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </a>
          </div>
          <div className="modal-body">
            <br />
            <h5 style={{ fontFamily: "Times New Roman" }}>
              {" "}
              please fill your details we will contact you for your business
              advertisement{" "}
            </h5>
            <Otp3 />
          </div>
          <div className="modal-footer"></div>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseModel;
