import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "@/helpers/http";
import { doObjToFormData } from "@/helpers/helpers";
import { authToken } from "@/helpers/authToken";
import { deleteCookie, removeCookies } from "cookies-next";
// import * as links from '../../constants/link';
import toast from "react-hot-toast";
import Text from "@/components/text";
export const fetchSiteSettings = createAsyncThunk(
  "member/site-settings",
  async (type = "member", { rejectWithValue }) => {
    try {
      const response = await http.post(
        "site-settings",
        doObjToFormData({ type, token: authToken() }),
      );
      return response.data;
    } catch (error) {
      // if (error.response.status === 401) {
      //     removeCookies("authToken");
      // }
      return rejectWithValue(error.response.data);
    }
  },
);
export const fetchMemberData = createAsyncThunk(
  "member/fetchMemberData",
  async ({ rejectWithValue }) => {
    try {
      const response = await http.post(
        "member-settings",
        doObjToFormData({ token: authToken() }),
      );
      return response.data;
    } catch (error) {
      // if (error.response.status === 401) {
      //     removeCookies("authToken");
      // }
      return rejectWithValue(error.response.data);
    }
  },
);
export const updateMEmbersState = createAsyncThunk(
  "member/update_members_State",
  async (memberRow, { rejectWithValue }) => {
    return memberRow;
  },
);
export const updateEmailChange = createAsyncThunk(
  "member/update_members_email_change",
  async (email_change, { rejectWithValue }) => {
    return email_change;
  },
);

// export const verifyOtp = createAsyncThunk(
//   'verifyOtp',
//   async (formData, { rejectWithValue, dispatch }) => {
//     try {
//       const response = await http.post(
//         'verify-otp',
//         doObjToFormData({ ...formData, token: authToken() })
//       );
//       const { data } = response;
//       if (data.validationErrors) {
//         toast.error(<Text string={data?.validationErrors} />);
//       } else if (data?.status === 1) {
//         toast.success(data?.msg);
//         setTimeout(() => {
//           // Redirect logic
//         }, 2000);
//       } else {
//         toast.error(data?.msg);
//       }
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );
// export const resendOtpCode = createAsyncThunk(
//   'reset-otp',
//   async (formData, { rejectWithValue, dispatch }) => {
//     try {
//       const response = await http.post(
//         'resend-otp-email',
//         doObjToFormData({ ...formData, token: authToken() })
//       );
//       const { data } = response;
//       if (data.validationErrors) {
//         toast.error(<Text string={data?.validationErrors} />);
//       } else if (data?.status === 1) {
//         toast.success(data?.msg);
//         setTimeout(() => {
//           // Redirect logic
//         }, 2000);
//       } else {
//         toast.error(data?.msg);
//       }
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );
export const updateProfileSettings = createAsyncThunk(
  "update-profile",
  async (formData, { rejectWithValue, dispatch }) => {
    try {
      const response = await http.post(
        "update-profile",
        doObjToFormData({ ...formData, token: authToken() }),
      );
      const { data } = response;
      if (data.validationErrors) {
        toast.error(<Text string={data?.validationErrors} />);
      } else if (data?.status === 1) {
        toast.success(data?.msg);
        setTimeout(() => {
          // if (formData?.complete_profile === 1) {
          //   window.location.href = '/';
          // }
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
export const updatePassword = createAsyncThunk(
  "update-password",
  async (formData, { rejectWithValue, dispatch }) => {
    try {
      const response = await http.post(
        "update-password",
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

export const uploadProfileDp = createAsyncThunk(
  "profile-dp",
  async (formData, { rejectWithValue, dispatch }) => {
    const fd = new FormData();
    fd.append("image", formData);
    fd.append("token", authToken());
    try {
      const response = await http.post("save-user-image", fd);
      const { data } = response;
      if (data?.status === 1) {
      } else {
        toast.error(<Text string={data?.msg} />);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const sendCode2FAEmail = createAsyncThunk(
  "sendCode2FAEmail",
  async (formData, { rejectWithValue, dispatch }) => {
    try {
      const response = await http.post(
        "send-2fa-otp-email",
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

export const verify2FAOtp = createAsyncThunk(
  "verify2FAOtp",
  async (formData, { rejectWithValue, dispatch }) => {
    try {
      const response = await http.post(
        "verify-2fa-otp",
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
export const resend2FAOtpCode = createAsyncThunk(
  "reset-2fa-otp",
  async (formData, { rejectWithValue, dispatch }) => {
    try {
      const response = await http.post(
        "resend-2fa-otp-email",
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

const initialState = {
  error: false,
  isFetching: false,
  data: null,
  member: null,
  isFormProcessing: false,
  isResendFormProcessing: false,
  expire_time: null,
  mem_image: null,
  mem_name: null,
  mem_email: null,
  unread_msgs: null,
  isProfileImageLoading: false,
  is_dp_uploaded: false,
  isPasswordFormProcessing: false,
  passwordUpdated: false,
  isDeactivateLoading: false,
  isDeactivated: false,
  is_deactivated: null,
  site_settings: null,
  isNotificationDeleted: false,
  notifications_count: null,
  email_change: null,
  categories: null,
  expire_time_2FA: null,
};

const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSiteSettings.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(fetchSiteSettings.fulfilled, (state, action) => {
        state.isFetching = false;
        state.site_settings = action?.payload?.site_settings;
      })
      .addCase(fetchSiteSettings.rejected, (state, action) => {
        state.isFetching = false;
        state.error = true;
      })
      .addCase(fetchMemberData.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(fetchMemberData.fulfilled, (state, action) => {
        state.isFetching = false;
        if (action?.payload?.member) {
          if (action?.payload?.member?.is_deleted === 0) {
            state.data = action?.payload;
            state.member = action?.payload?.member;
            state.expire_time = action?.payload?.expire_time;
            state.mem_image = action?.payload?.mem_image;
            state.mem_name = action?.payload?.mem_name;
            state.email_change = action?.payload?.member?.email_change;
            state.mem_email = action?.payload?.mem_email;
            state.categories = action?.payload?.categories;
            state.expire_time_2FA = action?.payload?.otp_2fa_expire;

            state.is_deactivated = action?.payload?.is_deactivated;
          } else {
            deleteCookie("authToken");
            window.location.href = "/login";
          }
        } else {
          deleteCookie("authToken");
          if (!authToken()) {
            window.location.href = "/login";
          }
        }
      })
      .addCase(fetchMemberData.rejected, (state, action) => {
        if (action?.payload?.error === 1) {
          document.cookie =
            "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          window.location.href = "/login";
        }
        state.isFetching = false;
        state.error = true;
      })
      //   .addCase(verifyOtp.pending, (state) => {
      //     state.isFormProcessing = true;
      //   })
      //   .addCase(verifyOtp.fulfilled, (state, action) => {
      //     if (action?.payload?.status === 1) {
      //       setTimeout(() => {
      //         window.location.replace('/dashboard');
      //       }, 2000);
      //     }

      //     state.isFormProcessing = false;
      //   })
      //   .addCase(verifyOtp.rejected, (state) => {
      //     state.isFormProcessing = false;
      //   })
      //   .addCase(resendOtpCode.pending, (state) => {
      //     state.isResendFormProcessing = true;
      //   })
      //   .addCase(resendOtpCode.fulfilled, (state, action) => {
      //     state.expire_time = action?.payload?.expire_time;
      //     state.isResendFormProcessing = false;
      //   })
      //   .addCase(resendOtpCode.rejected, (state) => {
      //     state.isResendFormProcessing = false;
      //   })
      .addCase(uploadProfileDp.pending, (state) => {
        state.is_dp_uploaded = false;
        state.isProfileImageLoading = true;
      })
      .addCase(uploadProfileDp.fulfilled, (state, action) => {
        state.isProfileImageLoading = false;
        state.is_dp_uploaded = true;
        state.mem_image = action?.payload?.mem_image;
      })
      .addCase(uploadProfileDp.rejected, (state) => {
        state.isProfileImageLoading = false;
      })
      .addCase(updateProfileSettings.pending, (state) => {
        state.isFormProcessing = true;
      })
      .addCase(updateProfileSettings.fulfilled, (state, action) => {
        state.mem_name = action?.payload?.mem_name;
        state.isFormProcessing = false;
      })
      .addCase(updateProfileSettings.rejected, (state) => {
        state.isFormProcessing = false;
      })
      .addCase(updatePassword.pending, (state) => {
        state.passwordUpdated = false;
        state.isPasswordFormProcessing = true;
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        state.isPasswordFormProcessing = false;
        if (action?.payload?.status) {
          state.passwordUpdated = true;
        }
      })
      .addCase(updatePassword.rejected, (state) => {
        state.isPasswordFormProcessing = false;
      })
      .addCase(updateMEmbersState.fulfilled, (state, action) => {
        state.member = action?.payload;
      })
      .addCase(updateEmailChange.fulfilled, (state, action) => {
        state.email_change = action?.payload;
      })
      .addCase(sendCode2FAEmail.pending, (state) => {
        state.isFormProcessing = true;
      })
      .addCase(sendCode2FAEmail.fulfilled, (state, action) => {
        state.expire_time_2FA = action?.payload?.expire_time_2FA;
        state.isFormProcessing = false;
      })
      .addCase(sendCode2FAEmail.rejected, (state) => {
        state.isFormProcessing = false;
      })

      .addCase(verify2FAOtp.pending, (state) => {
        state.isFormProcessing = true;
      })
      .addCase(verify2FAOtp.fulfilled, (state, action) => {
        state.isFormProcessing = false;
      })
      .addCase(verify2FAOtp.rejected, (state) => {
        state.isFormProcessing = false;
      })
      .addCase(resend2FAOtpCode.pending, (state) => {
        state.isResendFormProcessing = true;
      })
      .addCase(resend2FAOtpCode.fulfilled, (state, action) => {
        state.expire_time_2FA = action?.payload?.expire_time_2FA;
        state.isResendFormProcessing = false;
      })
      .addCase(resend2FAOtpCode.rejected, (state) => {
        state.isResendFormProcessing = false;
      });
  },
});

export default memberSlice.reducer;
