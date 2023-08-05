import api from "./apiConfig.js";

export const getAllAlpha = async () => {
  try {
    const response = await api.get("/consonants");
    return response.data;
  } catch (error) {
    console.error("Error: Get all Consonants", error);
  }
};

export const getOneAlpha = async (id) => {
  try {
    const response = await api.get(`/consonants/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error: Get One Consonant", error);
  }
};

export const createAlpha = async (AlphaData) => {
  try {
    const response = await api.post("/consonants", AlphaData);
    return response.data;
  } catch (error) {
    console.error("Error: Create Consonant", error);
  }
};

export const updateAlpha = async (id, AlphaData) => {
  try {
    const response = await api.put(`/consonants/${id}`, AlphaData);
    return response.data;
  } catch (error) {
    console.error("Error: Update Consonant", error);
  }
};

export const deleteAlpha = async (id) => {
  try {
    const response = await api.delete(`/consonants/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error: Delete One Consonant", error);
  }
};

