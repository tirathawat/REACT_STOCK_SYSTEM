import Axios from "axios";
import { RegisterData, LoginData, User } from "../types/user";
import { API_BASE_URL, server } from "../constants/api";

export default class AuthProvider {
  async register(data: RegisterData): Promise<User> {
    return new Promise((resolve, reject) => {
      var url: string = API_BASE_URL + server.REGISTER_URL;

      Axios.post(url, data)
        .then((response) => {
          if (response.status === 200) {
            resolve(response.data as User);
          } else {
            var message: string = response.data?.message;
            var err: Error = new Error(message);
            reject(err);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async login(data: LoginData): Promise<User> {
    return new Promise((resolve, reject) => {
      var url: string = API_BASE_URL + server.LOGIN_URL;

      Axios.post(url, data)
        .then((response) => {
          if (response.status === 200) {
            resolve(response.data as User);
          } else {
            var message: string = response.data?.message;
            var err: Error = new Error(message);
            reject(err);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
