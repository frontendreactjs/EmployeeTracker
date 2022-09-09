import axios from "axios";
const BASE_URL = "http://18.209.60.4:8080/LESM-Status-Monitor-0.0.1-SNAPSHOT/"; // heruko
// const BASE_URL = "http://10.81.3.190:2022"; // umer pc
// const BASE_URL = "http://10.81.3.30:9090"; // charan pc
//Header

//get
const ALL_EMPLOYEES = `${BASE_URL}/api/v1/emp/get-all-employee`;
const ALL_EMPLOYEES_BY_ID = `${BASE_URL}/api/v1/emp/getting/id?id=`;
//post
const LOGIN_API_URL = `${BASE_URL}/api/v1/auth/login`;
const REGISTER_API_URL = `${BASE_URL}/api/register`;
const INSERT_EMP_DETAILS_API_URL = `${BASE_URL}/api/v1/emp/insert-emp-details`;

//delete

export function auth() {
  const token = sessionStorage.getItem("Access_Token");
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${token}`,
    },
  };
  return config;
}

export default new (class ApiService {
  login(data) {
    return axios.post(LOGIN_API_URL, data);
  }

  register(data) {
    return axios.post(REGISTER_API_URL, data);
  }
  insertEmployee(data) {
    return axios.post(INSERT_EMP_DETAILS_API_URL, data, auth());
  }
  getAllEmployees() {
    return axios.get(ALL_EMPLOYEES, auth());
  }
  getEmployeeById(id) {
    return axios.get(ALL_EMPLOYEES_BY_ID + id, auth());
  }
})();
