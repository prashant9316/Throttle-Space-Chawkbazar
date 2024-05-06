import { useUI } from "@contexts/ui.context";
// import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
// import http from "@framework/utils/http";
import Cookies from "js-cookie";
import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
import { toast } from "react-toastify";

export interface SignUpInputType {
  email: string;
  password: string;
  name: string;
}
export interface response {
  data: {
    email: string,
    name: string,
    _id: string,
    token: string
  }
}
async function signUp(input: SignUpInputType) {
  // return http.post(API_ENDPOINTS.LOGIN, input);
  const data: response = await http.post(`${API_ENDPOINTS.REGISTER}fsfs`, input);
  const token = data['data'].token;
  return token
}
export const useSignUpMutation = () => {
  const { authorize, closeModal } = useUI();
  return useMutation({
    mutationFn: (input: SignUpInputType) => signUp(input),
    onSuccess: (data: string) => {
      if (data == undefined || data == null) {
        toast("Failed to sign up", {
          type: "error",
        });
      }
      else {
        Cookies.set("auth_token", data);
        authorize();
        closeModal();
        toast("Sign Up Success", {
          type: "success",
        });
      }
    },
    onError: (data) => {
      toast("Failed to sign up", {
        type: "error",
      });
      console.log(data, "signup error response")
    },
  });
};
