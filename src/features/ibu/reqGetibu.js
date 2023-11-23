import axios from "axios";
import { reqToken } from "../refreshtoken/reqToken";

export const reqGetibu = async () => {
  try {
    const { accesstoken } = await reqToken();
    const response = await axios.get(
      `https://api.buming-pendamping.com/api/ibuhamil`,
      {
        headers: {
          Authorization: `Bearer ${accesstoken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
