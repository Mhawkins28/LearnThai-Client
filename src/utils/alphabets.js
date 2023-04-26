import api from "./apiConfig.js";

export const getAllAlpha = async () => {
  try {
    const response = await api.get("/alphabet");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getOneAlpha = async (id) => {
  try {
    const response = await api.get(`/alphabet/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createAlpha = async (AlphaData) => {
  try {
    const response = await api.post("/alphabet", AlphaData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateAlpha = async (id, AlphaData) => {
  try {
    const response = await api.put(`/alphabet/${id}`, AlphaData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteAlpha = async (id) => {
  try {
    const response = await api.delete(`/alphabet/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

