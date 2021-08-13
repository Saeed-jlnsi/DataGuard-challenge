import api from "./config/api";

class authService {
  login(payload) {
    api.post("/auth/login", payload);
  }
  register(payload) {
    api.post("auth/register", payload);
  }
}

export default new authService();
