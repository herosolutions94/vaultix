import { useEffect, useState } from "react";
import Link from "next/link";
import { parse } from "cookie";
import http from "@/helpers/http";
import { cmsFileUrl, doObjToFormData } from "@/helpers/helpers";
import MetaGenerator from "@/components/meta-generator";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { saveSignupQuery } from "@/redux/reducers/auth";
import { useRouter } from "next/router";
import { ErrorMessage } from "@hookform/error-message";

// export const getServerSideProps = async (context) => {
//   const { req } = context;
//   const cookieHeader = req.headers.cookie || "";
//   const cookieValue = parse(cookieHeader);
//   const authToken =
//     cookieValue["authToken"] !== undefined &&
//     cookieValue["authToken"] !== null &&
//     cookieValue["authToken"] !== ""
//       ? cookieValue["authToken"]
//       : null;

//   // if (authToken !== null) {
//   //   return {
//   //     redirect: {
//   //       destination: "/dashboard",
//   //       permanent: false,
//   //     },
//   //   };
//   // }
//   const result = await http
//     .post("signup-page", doObjToFormData({ token: authToken }))
//     .then((response) => response.data)
//     .catch((error) => error.response.data.message);

//   return { props: { result } };
// };

export default function Register() {
  const [showPw, setShowPw] = useState(false);
  const [showCpw, setShowCpw] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const isFormProcessing = useSelector((state) => state.auth.isFormProcessing);

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    setValue,
    trigger,
    reset,
  } = useForm();

  const handleSaveForm = (formData) => {
    // formData = {
    //   ...formData,
    //   type: formData?.type ? formData?.type : "normal",
    // };
    console.log("formData", formData);

    dispatch(saveSignupQuery({ formData, router }));
  };

  const EyeIcon = ({ show }) =>
    show ? (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      >
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </svg>
    ) : (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );

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
          <h1 className="auth_title">Create Your Secure Vault</h1>
          <p className="auth_subtitle">
            Initialize your encrypted vault with protected inheritance
            infrastructure and zero-knowledge security.
          </p>

          <form method="POST" onSubmit={handleSubmit(handleSaveForm)}>
            <div className="auth_fields">
              <div className="auth_field">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  autoComplete="full_name"
                  {...register("full_name", {
                    required: "Required!",
                    minLength: {
                      value: 3,
                      message: "Full Name should contains atleast 3 letters.",
                    },
                  })}
                />
                <div className="validation-error" style={{ color: "#e9c176" }}>
                  {errors.full_name?.message}
                </div>
              </div>
              <div className="auth_field">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  autoComplete="email"
                  {...register("email", {
                    required: "Required!",
                    pattern: {
                      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
                      message: "Invalid Email Format",
                    },
                  })}
                />
                <div className="validation-error" style={{ color: "#e9c176" }}>
                  {errors.email?.message}
                </div>
              </div>
              <div className="auth_field">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="1234567898"
                  autoComplete="phone"
                  {...register("phone", {
                    required: "Required!",
                    pattern: {
                      value: /^[+\d]+$/, // Allow '+' followed by digits only
                      message: "Please enter a valid phone number!",
                    },
                  })}
                />
                <div className="validation-error" style={{ color: "#e9c176" }}>
                  {errors.phone?.message}
                </div>
              </div>
              <div className="auth_field">
                <label>Password</label>
                <div className="auth_pw_wrap">
                  <input
                    type={showPw ? "text" : "password"}
                    placeholder="••••••••"
                    autoComplete="new-password"
                    {...register("password", {
                      required: "Required!",
                      pattern: {
                        value:
                          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[A-Za-z0-9\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\>\=\?\@\[\]\{\}\\\\\^\_\`\~]{8,}$/,
                        message:
                          "Password must contain at least 8 characters, including minimum one lowercase letter, one uppercase letter and one digit.",
                      },
                    })}
                  />

                  <button
                    type="button"
                    className="auth_eye_btn"
                    onClick={() => setShowPw((v) => !v)}
                  >
                    <EyeIcon show={showPw} />
                  </button>
                </div>
                <div className="validation-error" style={{ color: "#e9c176" }}>
                  {errors.password?.message}
                </div>
              </div>
              <div className="auth_field">
                <label>Confirm Password</label>
                <div className="auth_pw_wrap">
                  <input
                    type={showCpw ? "text" : "password"}
                    placeholder="••••••••"
                    autoComplete="new-password"
                    {...register("confirm_password", {
                      required: "Required!",
                      validate: (val) => {
                        if (watch("password") != val) {
                          return "Your passwords do not match";
                        }
                      },
                    })}
                  />

                  <button
                    type="button"
                    className="auth_eye_btn"
                    onClick={() => setShowCpw((v) => !v)}
                  >
                    <EyeIcon show={showCpw} />
                  </button>
                </div>
                <div className="validation-error" style={{ color: "#e9c176" }}>
                  {errors.confirm_password?.message}
                </div>
              </div>
              {/* <div className="auth_field">
                <label>Vault Name</label>
                <input type="text" placeholder="Primary Custody" />
              </div> */}
              {/* <div className="auth_field">
                <label>Security Preference</label>
                <div className="auth_select_wrap">
                  <select defaultValue="standard">
                    <option value="standard">Standard Encryption</option>
                    <option value="military">Military-Grade Encryption</option>
                    <option value="hsm">HSM-Backed Encryption</option>
                  </select>
                  <svg
                    className="auth_chevron"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div> */}
            </div>

            <label className="auth_check_row">
              <input
                type="checkbox"
                // checked={agreed}
                // onChange={(e) => setAgreed(e.target.checked)}
                {...register("confirm", { required: "Required!" })}
              />

              {/* <div className="validation-error" style={{ color: "#e9c176" }}>
                {errors.confirm?.message}
              </div> */}

              <span className="auth_cb_box" />
              <span>
                I understand Vaultix cannot recover inaccessible encrypted vault
                data.
              </span>
            </label>
            <div className="validation-error mb-4" style={{ color: "#e9c176" }}>
              {errors.confirm?.message}
            </div>
            <button
              type="submit"
              className="auth_btn"
              disabled={isFormProcessing}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <rect x="5" y="11" width="14" height="10" rx="2" />
                <path d="M8 11V7a4 4 0 0 1 8 0v4" />
              </svg>
              Create Secure Vault{" "}
              {isFormProcessing && <i className="spinner"></i>}
            </button>
          </form>

          <div className="auth_divider" />

          <div className="auth_sec_info">
            <div className="auth_sec_badge">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Your vault is encrypted before storage and inaccessible to
              unauthorized access.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Register.getLayout = (page) => page;
