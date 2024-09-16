import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import OtpInput from "otp-input-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import { auth } from "./firebase.config";
import ImageForm from "./ImageForm";

const Otp = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

  // Initialize reCAPTCHA verifier
  const onCaptchVerify = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: () => onSignup(),
          "expired-callback": () => {},
        },
        auth
      );
    }
  };

  // Sign up with phone number
  const onSignup = () => {
    setLoading(true);
    onCaptchVerify();
    const appVerifier = window.recaptchaVerifier;
    const formatPh = `+${ph}`;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sent successfully!");
      })
      .catch((error) => {
        console.error("Error during signInWithPhoneNumber:", error);
        toast.error("Failed to send OTP. Please try again.");
        setLoading(false);
      });
  };

  // Verify OTP
  const onOTPVerify = () => {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then((res) => {
        setUser(res.user);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error during OTP verification:", error);
        toast.error("Failed to verify OTP. Please try again.");
        setLoading(false);
      });
  };

  return (
    <div className="container">
      <div className="container-fluid p-10"></div>
      <section className="bg-emerald-500 flex items-center justify-center h-screen">
        <div>
          <Toaster toastOptions={{ duration: 4000 }} />
          <div id="recaptcha-container"></div>
          <h5 style={{ fontFamily: "Times New Roman" }}>
            SignUp For FreeListing On NagpurDial
          </h5>
          {user ? (
            <ImageForm number={ph} />
          ) : (
            <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
              {showOTP ? (
                <>
                  <p>OTP sent to {ph}</p>
                  <label
                    htmlFor="otp"
                    className="font-bold text-xl text-white text-center"
                  >
                    Enter your OTP
                  </label>
                  <OtpInput
                    value={otp}
                    onChange={setOtp}
                    OTPLength={6}
                    otpType="number"
                    autoFocus
                    className="opt-container"
                  />
                  <div style={{ padding: "2px" }}></div>
                  <button
                    onClick={onOTPVerify}
                    className="btn-primary w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                    disabled={loading}
                  >
                    {loading && (
                      <CgSpinner size={20} className="mt-1 animate-spin" />
                    )}
                    <span>Verify OTP</span>
                  </button>
                </>
              ) : (
                <>
                  <label
                    htmlFor="phone"
                    className="font-bold text-xl text-white text-center"
                  >
                    Enter your phone number
                  </label>
                  <PhoneInput
                    country={"in"}
                    value={ph}
                    onChange={setPh}
                    inputStyle={{ width: "100%" }}
                  />
                  <div style={{ padding: "2px" }}></div>
                  <button
                    onClick={onSignup}
                    className="btn-primary w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                    disabled={loading}
                  >
                    {loading && (
                      <CgSpinner size={20} className="mt-1 animate-spin" />
                    )}
                    <span>Send code via SMS</span>
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Otp;
