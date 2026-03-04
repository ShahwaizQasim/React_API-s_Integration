import { STORAGE_KEYS } from "./constant"
import Cookies from "js-cookie"

export const setToken = (token: string) => {
    Cookies.set(STORAGE_KEYS.TOKEN, token)
}
export const removeToken = () => {
  Cookies.remove(STORAGE_KEYS.TOKEN)
}