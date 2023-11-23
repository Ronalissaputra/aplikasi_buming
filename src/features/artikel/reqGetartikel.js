import axios from "axios";
import { reqToken } from "../refreshtoken/reqToken";

export const reqGetartikel = async () => {
  try {
    const { accesstoken } = await reqToken();
    const response = await axios.get(
      `https://api.buming-pendamping.com/api/artikel`,
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
