import api from "./apiConfig.js";

export const getAllAlphabet = async () => {
  try {
    const response = await api.get("/alphabet");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getOneAlphabet = async (id) => {
  try {
    const response = await api.get(`/alphabet/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createAlphabet = async (AlphaData) => {
  try {
    const response = await api.post("/alphabet", AlphaData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateAlphabet = async (id, AlphaData) => {
  try {
    const response = await api.put(`/alphabet/${id}`, AlphaData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteAlphabet = async (id) => {
  try {
    const response = await api.delete(`/alphabet/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

