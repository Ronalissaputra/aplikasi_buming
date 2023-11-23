import axios from "axios";
import { reqToken } from "../refreshtoken/reqToken";

export const reqGetanak = async () => {
  try {
    const { accesstoken } = await reqToken();
    const response = await axios.get(`http://192.168.1.6:5000/api/anak`, {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
