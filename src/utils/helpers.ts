import { STORAGE_KEYS } from "./constant"
import Cookies from "js-cookie"

export const setToken = (token: string) => {
    return Cookies.set(STORAGE_KEYS.TOKEN, token)
}
export const removeToken = () => {
  return Cookies.remove(STORAGE_KEYS.TOKEN)
}
export const getToken = () => {
  return Cookies.get(STORAGE_KEYS.TOKEN)
}

export const getRedirectPath = (user: any) => {

  if (user?.role === "admin") {
    return "/admin/dashboard";
  }

  if (user?.role === "seller") {

    if (user?.isSellerApproved) {
      return "/seller";
    }

    return "/pending-approval";
  }

  return "/";
};

export const getLoginRedirectPath = (user: any) => {

  if (user?.role === "admin") {
    return "/admin/login";
  }

  return "/login";
};

export function clearAuthData(){
  removeToken();
}