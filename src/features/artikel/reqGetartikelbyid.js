import axios from "axios";

export const reqGetartikelbyid = async (id) => {
  try {
    const response = await axios.get(
      `https://api.buming-pendamping.com/api/artikel/${id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
