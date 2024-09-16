import React, { useEffect, useRef } from "react";
import Login from "./Login";

const Modal3 = () => {
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
            <h5 style={{ fontFamily: "Times New Roman" }}>
              You are going to login on NagpurDial
            </h5>
            <Login />
          </div>
          <div className="modal-footer">
            <p>
              Click on SignUp if not register{" "}
              <a
                href="/model"
                style={{
                  fontFamily: "Times New Roman",
                  color: "blue",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                SignUp
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal3;
