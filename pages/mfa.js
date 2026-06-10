import { useRef, useEffect, useState } from "react";
import { parse } from "cookie";
import http from "@/helpers/http";
import { cmsFileUrl, doObjToFormData } from "@/helpers/helpers";
import MetaGenerator from "@/components/meta-generator";
import { useDispatch, useSelector } from "react-redux";
import { verifyOtp, resendOtpCode } from "@/redux/reducers/auth";
import { fetchMemberData } from "@/redux/reducers/user";
import { useRouter } from "next/router";
import Timer from "@/components/timer";
import toast from "react-hot-toast";
import OTPInput from "react-otp-input";

const STATUS_ROWS = [
  { label: "Device Verified", active: true },
  { label: "Encrypted Authentication Channel", active: false },
  { label: "Session Protection Active", active: false },
];

export const getServerSideProps = async (context) => {
  const { req } = context;
  const cookieHeader = req.headers.cookie || "";
  const cookieValue = parse(cookieHeader);
  const authToken =
    cookieValue["authToken"] !== undefined &&
    cookieValue["authToken"] !== null &&
    cookieValue["authToken"] !== ""
      ? cookieValue["authToken"]
      : null;
  if (authToken === null || authToken === "" || authToken === undefined) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  const result = await http
    .post("email-verify-page", doObjToFormData({ token: authToken }))
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  if (result?.not_logged_in) {
    // Clear the token from the cookie
    res.setHeader(
      "Set-Cookie",
      serialize("authToken", "", {
        httpOnly: true,
        secure: true,
        maxAge: -1, // Expire the cookie
        path: "/", // Ensure it's cleared across the site
      }),
    );

    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return { props: { result } };
};

export default function MFA() {
  const [OTP, setOTP] = useState("");
  const handleOTPChange = (code) => setOTP(code);

  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    dispatch(fetchMemberData());
  }, []);
  const memberRow = useSelector((state) => state.user.member);
  const isFetching = useSelector((state) => state.user.isFetching);
  const isFormProcessing = useSelector((state) => state.user.isFormProcessing);
  const isResendFormProcessing = useSelector(
    (state) => state.user.isResendFormProcessing,
  );
  const expire_time = useSelector((state) => state.user.expire_time);

  // const [otp, setOtp] = useState(Array(7).fill(""));
  // const refs = Array.from({ length: 7 }, () => useRef(null));

  // const handleChange = (i, val) => {
  //   if (!/^\d?$/.test(val)) return;
  //   const next = [...otp];
  //   next[i] = val.slice(-1);
  //   setOtp(next);
  //   if (val && i < 6) {
  //     refs[i === 3 ? 4 : i + 1]?.current?.focus();
  //   }
  // };

  useEffect(() => {
    if (parseInt(memberRow?.mem_verified) === 1) {
      router.push("/dashboard");
      return;
    }
  }, [memberRow]);

  const handleVerifySubmit = async (e) => {
    e.preventDefault();
    if (OTP === "") {
      toast.error("please enter OTP to continue!!");
    } else {
      let newData = { otp: OTP };

      dispatch(verifyOtp(newData));
    }
  };

  async function handleResendOtpCode(e) {
    e.preventDefault();
    setOTP("");
    let newData = { type: "normal" };
    dispatch(resendOtpCode(newData));
  }

  const handleKeyDown = (i, e) => {
    if (e.key === "Backspace" && !otp[i] && i > 0) {
      refs[i === 4 ? 3 : i - 1]?.current?.focus();
    }
  };

  return (
    <div className="auth_page">
      <div className="auth_logo_wrap">
        <img
          src="/images/front-images/auth-logo.png"
          alt="Vaultix"
          className="auth_logo_img"
        />
        <span className="auth_logo_text">Vaultix</span>
      </div>

      <div className="auth_card">
        <div className="auth_card_body">
          <h1 className="auth_title">
            Identity Verification
            <br />
            Required
          </h1>
          <p className="auth_subtitle">
            Enter the verification code sent to your authorized device
          </p>

          {/* OTP: 4 boxes — dash — 3 boxes */}
          <form method="POST" onSubmit={handleVerifySubmit}>
            <div className="auth_otp_wrap">
              <OTPInput
                value={OTP}
                onChange={handleOTPChange}
                numInputs={7}
                isInputNum
                inputStyle={{
                  backgroundColor: "#0a0e13",
                  color: "#fff",
                  width: "48px",
                  height: "52px",
                  border: "1px solid #efefef1a",
                  borderRadius: "7px",
                  fontFamily: "Bold",
                  fontSize: "18px",
                  fontWeight: 700,
                  textAlign: "center",
                  outline: "none",
                  boxSizing: "border-box",
                }}
                autoFocus={true}
                // renderSeparator={<span> &nbsp;&nbsp; </span>}
                renderSeparator={(index) =>
                  index === 3 ? (
                    <span
                      style={{
                        color: "#efefef1a",
                        fontSize: "28px",
                        fontWeight: "bold",
                        margin: "0 10px",
                        display: "inline-flex",
                        alignItems: "center",
                      }}
                    >
                      -
                    </span>
                  ) : (
                    <span style={{ width: "8px", display: "inline-block" }} />
                  )
                }
                renderInput={(props) => (
                  <input {...props} className="auth_otp_input" />
                )}
              />
              {/* {[0, 1, 2, 3].map((i) => (
                <input
                  key={i}
                  ref={refs[i]}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={otp[i]}
                  onChange={(e) => handleChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  className={`auth_otp_input${i === 0 ? " auth_otp_first" : ""}`}
                />
              ))}
              <span className="auth_otp_dash">-</span>
              {[4, 5, 6].map((i) => (
                <input
                  key={i}
                  ref={refs[i]}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={otp[i]}
                  onChange={(e) => handleChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  className="auth_otp_input"
                />
              ))} */}
            </div>
            {expire_time !== null && expire_time !== undefined ? (
              <div className="txtGrp">
                <Timer deadline={expire_time} />
              </div>
            ) : (
              ""
            )}
          </form>

          {/* Status box */}
          <div className="auth_status_box">
            <div className="auth_status_header">
              <span className="auth_status_dot" />
              <span>Secure Channel Active</span>
            </div>
            <div className="auth_status_rows">
              {STATUS_ROWS.map((row) => (
                <div key={row.label} className="auth_status_row">
                  <div
                    className={`auth_status_circle${row.active ? " active" : ""}`}
                  >
                    {row.active && (
                      <svg
                        width="7"
                        height="7"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="3"
                        strokeLinecap="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </div>
                  <span>{row.label}</span>
                </div>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="auth_btn auth_btn_upper"
            disabled={isFormProcessing}
          >
            Verify Identity {isFormProcessing && <i className="spinner"></i>}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>

          <div className="auth_link_row" style={{ marginTop: "14px" }}>
            <button
              className="auth_link_btn"
              type="button"
              onClick={handleResendOtpCode}
            >
              Resend Code{isResendFormProcessing && <i className="spinner"></i>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// MFA.getLayout = (page) => page;
