import api from "./apiConfig.js";

export const getAllNumbers = async () => {
  try {
    const response = await api.get("/numbers");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getOneNumber = async (id) => {
  try {
    const response = await api.get(`/numbers/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createNumber = async (numberData) => {
  try {
    const response = await api.post("/numbers", numberData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateNumber = async (id, numberData) => {
  try {
    const response = await api.put(`/numbers/${id}`, numberData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteNumber = async (id) => {
  try {
    const response = await api.delete(`/numbers/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

