import axios from "axios";
const uri = "http://localhost:8222";
const authheader = localStorage.getItem('token');
const headers = {
    Authorization: `Bearer ${authheader}`,
}
//authenticate
export const Login = async (formData) => {
    try {
        console.log(formData);
        const response = await axios.post(`${uri}/api/auth/authenticate`, formData);
        console.log(response.data); 
        return response.data;
    } catch (error) {
        console.log(formData);
      throw error;
    }
  };
export const Registers = (data) =>axios.post(`${uri}/api/auth/register`,data);
//flavour
export const addflavour = (data) => axios.post(`${uri}/api/flavour/post`,data,{headers});
export const getflavour = () => axios.get(`${uri}/api/flavour/get`,{headers});
export const getflavourByid = (id) =>axios.get(`${uri}/api/flavour/get/${id}`,headers);
export const updateFlavour = async(id,data) => {
  try {
    const response = await axios.put(`${uri}/api/flavour/put/${id}`,data,{headers});
    return response;
  }
  catch(error)
  {
    throw error;
  }
};
export const deleteFlavour = async (flavourID) => {
  try {
    const response = await axios.delete(`http://localhost:8222/api/flavour/del/${flavourID}`,{headers});
    return response;
  } catch (error) {
    throw error;
  }
};
//get users
export const addUser = (data) => axios.post(`${uri}/api/user/post`,data,{headers});
export const getUsers = () => axios.get(`${uri}/api/user/get`,{headers});
export const deleteUser = async (flavourID) => {
  try {
    const response = await axios.delete(`http://localhost:8222/api/user/del/${flavourID}`,{headers});
    return response;
  } catch (error) {
    throw error;
  }
};