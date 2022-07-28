import axios from "axios";
// const BASE_URL = 'https://lsi-employeetracker.herokuapp.com'; // heruko.
// const BASE_URL = "http://18.206.244.251:8181/employee-0.0.1-SNAPSHOT"; // devops
const BASE_URL = "http://10.81.4.195:2022"; // umer pc
// const BASE_URL = "http://10.81.3.30:9090"; // charan pc
//Header

//get
const ALL_EMPLOYEES = `${BASE_URL}/api/v1/emp/getEmps`;
const ALL_EMPLOYEES_BY_ID = `${BASE_URL}/api/v1/emp/get-emp-crosspnd-details?id=`;
const EMPLOYEE_TYPE = `${BASE_URL}/api/v1/fields/get-all-empTypes`;
//post
const LOGIN_API_URL = `${BASE_URL}/api/v1/auth/login`;
// const REGISTER_API_URL = `${BASE_URL}/api/register`;
const INSERT_EMP_DETAILS_API_URL = `${BASE_URL}/api/v1/emp/insert-emp-details`;
const TEST = `http://10.81.4.195:2022/api/v1/admin/create-roles`;
const BILL_EXPENSE = `${BASE_URL}/api/v1/exp/insert-expenses`;
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

  // register(data) {
  //   return axios.post(REGISTER_API_URL, data);
  // }
  insertEmployee(data) {
    return axios.post(
      `${INSERT_EMP_DETAILS_API_URL}?addressTypeId=${data.addTypeId}&departId=${data.departId}&desgId=${data.desgId}&subDepartId=${data.subDepartId}&subVId=${data.supervisorId}&typeId=${data.empTypeId}`,
      data,
      auth()
    );
  }
  getAllEmployees() {
    return axios.get(ALL_EMPLOYEES, auth());
  }
  getEmployeeById(id) {
    return axios.get(ALL_EMPLOYEES_BY_ID + id, auth());
  }
  getTest(data) {
    return axios.post(TEST, data);
  }
  getBillExpense(data, id, typeId) {
    return axios.post(
      `${BILL_EXPENSE}?empId=${id}&expTypeId=${typeId}`,
      data,
      auth()
    );
  }
  empType() {
    return axios.get(EMPLOYEE_TYPE, auth());
  }
  //addEmployee
  getAllDesg() {
    return axios.get(`${BASE_URL}/api/v1/fields/get-all-desg`, auth());
  }
  //http://10.81.4.195:2022/api/v1/fields/get-all-addType
  getAllAddType() {
    return axios.get(`${BASE_URL}/api/v1/fields/get-all-addType`, auth());
  }
  //http://10.81.4.195:2022/api/v1/fields/get-all-clients
  getAllClients() {
    return axios.get(`${BASE_URL}/api/v1/fields/get-all-clients`, auth());
  }
  //http://10.81.4.195:2022/api/v1/fields/get-all-Depart
  getAllDepart() {
    return axios.get(`${BASE_URL}/api/v1/fields/get-all-Depart`, auth());
  }
  getAllSubDepart() {
    return axios.get(`${BASE_URL}/api/v1/fields/get-all-subDepart`, auth());
  }
  getUnderEmployee(id) {
    return axios.get(`${BASE_URL}/api/v1/emp/get-under-emps?id=${id}`, auth());
  }
  addClientDetails(data, cId, eId) {
    // http://localhost:2022/api/v1/emp/inser-empat-client?clientId=5&empId=LSI9908
    return axios.post(
      `${BASE_URL}/api/v1/emp/inser-empat-client?clientId=${cId}&empId=${eId}`,
      data,
      auth()
    );
  }
  supervisorId(id) {
    // http://10.81.4.195:2022/api/v1/emp/get-supvisor-dropdown?id=6
    return axios.get(
      `${BASE_URL}/api/v1/emp/get-supvisor-dropdown?id=${id}`,
      auth()
    );
  }
  getEmployeeId() {
    //localhost:2022/api/v1/emp/client-emp-dropdown
    return axios.get(`${BASE_URL}/api/v1/emp/client-emp-dropdown`, auth());
  }
  addClientnames(data) {
    return axios.post(`${BASE_URL}/api/v1/fields/insert-clients`, data, auth());
  }
  getAllRoles() {
    return axios.get(`${BASE_URL}/api/v1/admin/all-roles`, auth());
  }
  signup(data, id) {
    // http://localhost:2022/api/v1/admin/sign-up?roleName=LEAD
    return axios.post(
      `${BASE_URL}/api/v1/admin/sign-up?roleName=${id}`,
      data,
      auth()
    );
  }
})();
