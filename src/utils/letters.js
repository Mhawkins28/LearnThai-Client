import api from "./apiConfig.js";

export const getAllAlpha = async () => {
  try {
    const response = await api.get("/consonants");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getOneAlpha = async (id) => {
  try {
    const response = await api.get(`/consonants/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createAlpha = async (AlphaData) => {
  try {
    const response = await api.post("/consonants", AlphaData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateAlpha = async (id, AlphaData) => {
  try {
    const response = await api.put(`/consonants/${id}`, AlphaData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteAlpha = async (id) => {
  try {
    const response = await api.delete(`/consonants/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

