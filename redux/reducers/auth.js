import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "@/helpers/http";
import { doObjToFormData } from "@/helpers/helpers";
import { setCookie } from "cookies-next";
import toast from "react-hot-toast";
import Text from "@/components/text";
import { authToken } from "@/helpers/authToken";

export const saveSignupQuery = createAsyncThunk(
  "saveSignupQuery",
  async ({ formData, router }, { rejectWithValue, dispatch }) => {
    try {
      const response = await http.post(
        "create-account",
        doObjToFormData(formData),
      );
      const { data } = response;
      if (data.validationErrors) {
        toast.error(<Text string={data?.validationErrors} />);
      } else if (data?.status === 1) {
        toast.success(data?.msg);
        await fetch("/api/set-cookie", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            authToken: data?.authToken,
            mem_type: data?.mem_type,
          }),
        });
        setTimeout(() => {
          router.push("/mfa");
        }, 2000);
      } else {
        toast.error(data?.msg);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const verifyOtp = createAsyncThunk(
  "verifyOtp",
  async (formData, { rejectWithValue, dispatch }) => {
    try {
      const response = await http.post(
        "verify-otp",
        doObjToFormData({ ...formData, token: authToken() }),
      );
      const { data } = response;
      if (data.validationErrors) {
        toast.error(<Text string={data?.validationErrors} />);
      } else if (data?.status === 1) {
        toast.success(data?.msg);
        setTimeout(() => {
          // Redirect logic
        }, 2000);
      } else {
        toast.error(data?.msg);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
export const resendOtpCode = createAsyncThunk(
  "reset-otp",
  async (formData, { rejectWithValue, dispatch }) => {
    try {
      const response = await http.post(
        "resend-otp-email",
        doObjToFormData({ ...formData, token: authToken() }),
      );
      const { data } = response;
      if (data.validationErrors) {
        toast.error(<Text string={data?.validationErrors} />);
      } else if (data?.status === 1) {
        toast.success(data?.msg);
        setTimeout(() => {
          // Redirect logic
        }, 2000);
      } else {
        toast.error(data?.msg);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const saveLoginQuery = createAsyncThunk(
  "saveLoginQuery",
  async ({ formData, router }, { rejectWithValue, dispatch }) => {
    try {
      const response = await http.post("login", doObjToFormData(formData));
      let { data } = response;
      if (data.validationErrors) {
        toast.error(<Text string={data.validationErrors} />);
      } else if (parseInt(data?.deactivated)) {
        toast.error("Account deactivated!");
        setTimeout(() => {
          router.push("/login");
        }, 1000);
      } else if (data?.twofa === 1) {
        toast.success(data?.msg);
      } else if (data?.not_verified) {
        toast.error("Email verification required!");
        setTimeout(() => {
          setCookie("authToken", data?.authToken);
          router.push("/dashboard/email-verification");
        }, 2000);
      } else if (data?.status === 1) {
        toast.success("Login successfully!");
        await fetch("/api/set-cookie", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            authToken: data?.authToken,
            mem_type: data?.mem_type,
          }),
        });
        setTimeout(() => {
          router.push("/dashboard");
        }, 2000);
      } else {
        toast.error(data?.msg);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const postForgot = createAsyncThunk(
  "postForgot",
  async (formData, { rejectWithValue, dispatch }) => {
    try {
      const response = await http.post(
        "forgot-password",
        doObjToFormData(formData),
      );
      const { data } = response;
      if (data.status) {
        toast.success(data?.msg);
        setTimeout(() => {
          window.location.replace("/login");
        }, 3000);
      } else {
        toast.error(data?.msg);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const postReset = createAsyncThunk(
  "postReset",
  async (formData, { rejectWithValue, dispatch }) => {
    try {
      const response = await http.post(
        "reset-password/" + formData?.token,
        doObjToFormData(formData),
      );
      const { data } = response;
      if (data.status) {
        toast.success(data?.msg);
      } else {
        toast.error(data?.msg);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const verifyTwoFaOtp = createAsyncThunk(
  "verifyTwoFaOtp",
  async (formData, { rejectWithValue, dispatch }) => {
    try {
      const response = await http.post(
        "verify-twofa-otp",
        doObjToFormData(formData),
      );
      const { data } = response;
      if (data.validationErrors) {
        toast.error(<Text string={data?.validationErrors} />);
      } else if (data?.status === 1) {
        toast.success(data?.msg);
        await fetch("/api/set-cookie", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            authToken: data?.authToken,
            mem_type: data?.mem_type,
          }),
        });
        setTimeout(() => {
          window.location.replace("/dashboard");
        }, 2000);
      } else {
        toast.error(data?.msg);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const initialState = {
  error: false,
  isFormProcessing: false,
  isResendFormProcessing: false,
  expire_time: null,
  isComplete: false,
  emptyFormData: false,
  hideLoginPopup: false,
  authentication: false,
  loginMethod: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(saveSignupQuery.pending, (state) => {
        state.isFormProcessing = true;
      })
      .addCase(saveSignupQuery.fulfilled, (state, action) => {
        state.isFormProcessing = false;
        state.isComplete = true;
      })
      .addCase(saveSignupQuery.rejected, (state) => {
        state.isFormProcessing = false;
      })
      .addCase(verifyOtp.pending, (state) => {
        state.isFormProcessing = true;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        if (action?.payload?.status === 1) {
          setTimeout(() => {
            window.location.replace("/dashboard");
          }, 2000);
        }

        state.isFormProcessing = false;
      })
      .addCase(verifyOtp.rejected, (state) => {
        state.isFormProcessing = false;
      })
      .addCase(resendOtpCode.pending, (state) => {
        state.isResendFormProcessing = true;
      })
      .addCase(resendOtpCode.fulfilled, (state, action) => {
        state.expire_time = action?.payload?.expire_time;
        state.isResendFormProcessing = false;
      })
      .addCase(resendOtpCode.rejected, (state) => {
        state.isResendFormProcessing = false;
      })
      .addCase(saveLoginQuery.pending, (state, action) => {
        state.isFormProcessing = true;
        state.loginMethod = action.meta?.arg?.formData?.type || "normal";
      })
      .addCase(saveLoginQuery.fulfilled, (state, action) => {
        state.isFormProcessing = false;
        state.loginMethod = null;
        if (action.payload?.twofa === 1) {
          state.authentication = true;
        }
        if (action.payload?.status === 1) {
          setTimeout(() => {
            window.location.href = "/dashboard";
          }, 2000);
        }
      })
      .addCase(saveLoginQuery.rejected, (state) => {
        state.isFormProcessing = false;
        state.loginMethod = null;
      })
      .addCase(verifyTwoFaOtp.pending, (state) => {
        state.isFormProcessing = true;
      })
      .addCase(verifyTwoFaOtp.fulfilled, (state, action) => {
        state.isFormProcessing = false;
      })
      .addCase(verifyTwoFaOtp.rejected, (state) => {
        state.isFormProcessing = false;
      })
      .addCase(postForgot.pending, (state) => {
        state.isFormProcessing = true;
      })
      .addCase(postForgot.fulfilled, (state) => {
        state.isFormProcessing = false;
        state.emptyFormData = true;
      })
      .addCase(postForgot.rejected, (state) => {
        state.isFormProcessing = false;
        state.error = true;
      })
      .addCase(postReset.pending, (state) => {
        state.isFormProcessing = true;
      })
      .addCase(postReset.fulfilled, (state) => {
        state.isFormProcessing = false;
        state.emptyFormData = true;
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      })
      .addCase(postReset.rejected, (state) => {
        state.isFormProcessing = false;
        state.error = true;
      });
  },
});

export default authSlice.reducer;
