import { toast } from "react-toastify";
import MakeRequest from "./Config/MakeRequest";

export const AuthAPI = {
    login: async function (request) {
        try {
            const passwordSet = await MakeRequest('post', "/v1/user/get_encrypted_password", { password: request.password })
            const newPassword = passwordSet.data
            if (newPassword.hasError === true) {
                toast.error(newPassword.error.message)
            } else {
                const response = await MakeRequest("post", "/api/v1/administration/Login", { email: request.email, password: newPassword });
                console.log("response", response)
                if (response.hasError === true) {
                    toast.error(response.error.message)
                }
                else {
                    return response;
                }
            }
        } catch (error) {
            toast.error(error.error.message)
            return error
        }
    },

    logout: async function () {
        localStorage.removeItem("userData");
        localStorage.removeItem("bookingStatus")
        localStorage.removeItem("bookingRequest");
        localStorage.removeItem("HoldBooking");
    }
}