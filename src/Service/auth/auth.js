import axios from "../axios"

export const useLogin = (data) => axios.post(`/api/employee/login/admin` , data);

