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