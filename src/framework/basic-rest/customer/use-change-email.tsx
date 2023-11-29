// import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
// import http from "@framework/utils/http";
import { useMutation } from "@tanstack/react-query";

export interface ChangeEmailInputType {
  newEmail: string;
  oldEmail: string;
}
async function changeEmail(input: ChangeEmailInputType) {
  // return http.post(API_ENDPOINTS.ChangeEmail, input);
  return input;
}
export const useChangeEmailMutation = () => {
  return useMutation({
    mutationFn: (input: ChangeEmailInputType) => changeEmail(input),
    onSuccess: (data) => {
      console.log(data, "ChangeEmail success response");
    },
    onError: (data) => {
      console.log(data, "ChangeEmail error response");
    },
  });
};
